// 역마다 "걸어갈 만한 거리 안에 이 밥·디저트·놀거리가 있는지"를 미리 계산해 near.js로 씁니다.
// 자료: 소상공인시장진흥공단_상가(상권)정보 (공공데이터포털, 이용허락범위 제한 없음, 분기마다 갱신)
//       https://www.data.go.kr/data/15083033/fileData.do  — zip을 풀면 시도별 CSV(UTF-8)가 나옵니다.
//
// 쓰는 법 (분기마다 새 자료가 나오면 다시 돌리면 됩니다):
//   node tools/build-near.js <CSV가 든 폴더> <자료 기준일, 예: 2026-09-30>
// 결과: 프로젝트 폴더의 near.js
//
// 판정: 역 좌표에서 반경 RADIUS m 안에 규칙(RULES)에 맞는 가게가 MIN_COUNT곳 이상 있으면 "있음".
// 규칙이 없는 항목(공원 산책처럼 가게가 아닌 것)은 늘 "있음"으로 둡니다.
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ROOT = path.resolve(__dirname, '..');
const [csvDir, asOf] = process.argv.slice(2);
if (!csvDir || !asOf) { console.error('usage: node tools/build-near.js <csv dir> <YYYY-MM-DD>'); process.exit(1); }

const RADIUS = 800;   // m. 걸어서 10분 남짓
const WIDE = 1500;    // m. 근처에 마땅한 게 적은 역에서 쓰는 넓은 반경
const MIN_COUNT = 1;

// ---------- 사이트 자료(노선·역 좌표·항목) ----------
const site = {};
new Function('out',
  fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8') + '\n' + fs.readFileSync(path.join(ROOT, 'coords.js'), 'utf8') +
  '\n;out.REGIONS = REGIONS; out.COORDS = COORDS; out.DECKS = { food: FOOD, dessert: DESSERT, play: PLAY };')(site);

// 역: 지역별 이름(같은 이름이 노선마다 다른 곳이면 '노선:이름') → [위도, 경도]
const stations = [];
for (const r of site.REGIONS) {
  const C = site.COORDS[r.id] || {};
  const seen = new Set();
  for (const l of r.lines) for (const route of l.routes) for (const n of route.stations) {
    const key = C[l.id + ':' + n] ? l.id + ':' + n : n;
    const c = C[key];
    if (!c || seen.has(key)) continue;
    seen.add(key);
    stations.push({ region: r.id, key, lat: c[0], lon: c[1] });
  }
}

// ---------- 항목별 규칙 ----------
// RULES[덱][항목 이름] = 가게 한 곳을 받아 맞으면 true를 돌려주는 함수 (아래 rule()로 만듭니다)
const RULES = require('./near-rules.js');

// ---------- 계산 ----------
const deckKeys = ['food', 'dessert', 'play'];
const items = deckKeys.flatMap(k => site.DECKS[k].map(i => ({ deck: k, label: i.label, test: (RULES[k] || {})[i.label] || null })));
const missingRules = items.filter(i => !i.test).map(i => `${i.deck}:${i.label}`);

// 역을 가까운 칸으로 나눠 두고, 가게마다 근처 칸의 역만 봅니다.
const CELL = 0.01; // 도 (약 1km)
const grid = new Map();
const cellKey = (lat, lon) => `${Math.floor(lat / CELL)},${Math.floor(lon / CELL)}`;
for (const s of stations) {
  s.count = new Uint16Array(items.length);
  s.wide = new Uint16Array(items.length);
  const k = cellKey(s.lat, s.lon);
  if (!grid.has(k)) grid.set(k, []);
  grid.get(k).push(s);
}
const distM = (lat1, lon1, lat2, lon2) => {
  const R = 6371000, toR = Math.PI / 180;
  const dLat = (lat2 - lat1) * toR, dLon = (lon2 - lon1) * toR;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * toR) * Math.cos(lat2 * toR) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
};
// 반경 WIDE 안의 역과 거리 (칸 하나가 약 0.9~1.1km라 앞뒤 두 칸까지 봅니다)
const nearStations = (lat, lon) => {
  const out = [];
  const ci = Math.floor(lat / CELL), cj = Math.floor(lon / CELL);
  for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
    for (const s of grid.get(`${ci + i},${cj + j}`) || []) {
      const d = distM(lat, lon, s.lat, s.lon);
      if (d <= WIDE) out.push([s, d]);
    }
  }
  return out;
};

// CSV 한 줄 나누기 (따옴표 안의 쉼표 처리)
function splitCsv(line) {
  const out = [];
  let cur = '', q = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (q) {
      if (ch === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch;
    } else if (ch === '"') q = true;
    else if (ch === ',') { out.push(cur); cur = ''; } else cur += ch;
  }
  out.push(cur);
  return out;
}

async function readCsv(file, onRow) {
  const rl = readline.createInterface({ input: fs.createReadStream(file, { encoding: 'utf8' }), crlfDelay: Infinity });
  let head = null;
  for await (let line of rl) {
    if (!head) { head = splitCsv(line.replace(/^﻿/, '')); continue; }
    if (!line) continue;
    const cols = splitCsv(line);
    const row = {};
    head.forEach((h, i) => { row[h] = cols[i]; });
    onRow(row);
  }
}

(async () => {
  const files = fs.readdirSync(csvDir).filter(f => /\.csv$/i.test(f)).map(f => path.join(csvDir, f));
  let rows = 0, used = 0;
  const hits = new Uint32Array(items.length);
  for (const f of files) {
    await readCsv(f, row => {
      rows++;
      const lat = Number(row['위도']), lon = Number(row['경도']);
      if (!lat || !lon) return;
      const near = nearStations(lat, lon);
      if (!near.length) return;
      const store = {
        name: row['상호명'] || '', branch: row['지점명'] || '',
        big: row['상권업종대분류명'] || '', mid: row['상권업종중분류명'] || '', small: row['상권업종소분류명'] || '',
        std: row['표준산업분류명'] || '', building: row['건물명'] || '',
      };
      let any = false;
      items.forEach((it, idx) => {
        if (!it.test || !it.test(store)) return;
        any = true;
        hits[idx]++;
        for (const [s, d] of near) {
          if (s.wide[idx] < 65535) s.wide[idx]++;
          if (d <= RADIUS && s.count[idx] < 65535) s.count[idx]++;
        }
      });
      if (any) used++;
    });
    console.log('read', path.basename(f), 'rows so far', rows);
  }

  // 역마다 비트로: food, dessert, play 순서의 항목 하나당 1비트 (있음 1)
  const nBits = items.length;
  const encode = (s, counts) => {
    const bytes = new Uint8Array(Math.ceil(nBits / 8));
    items.forEach((it, idx) => { if (!it.test || counts[idx] >= MIN_COUNT) bytes[idx >> 3] |= 1 << (idx & 7); });
    return Buffer.from(bytes).toString('base64').replace(/=+$/, '');
  };
  const st = {}, wd = {};
  const perItem = new Uint32Array(items.length);
  for (const s of stations) {
    (st[s.region] = st[s.region] || {})[s.key] = encode(s, s.count);
    (wd[s.region] = wd[s.region] || {})[s.key] = encode(s, s.wide);
    items.forEach((it, idx) => { if (!it.test || s.count[idx] >= MIN_COUNT) perItem[idx]++; });
  }
  const labels = Object.fromEntries(deckKeys.map(k => [k, site.DECKS[k].map(i => i.label)]));
  const text =
    '// 역마다 걸어갈 만한 거리 안에 밥·디저트·놀거리가 있는지. tools/build-near.js로 만듭니다.\n' +
    '// 자료: 소상공인시장진흥공단_상가(상권)정보 ' + asOf + ' 기준 (공공데이터포털, 이용허락범위 제한 없음)\n' +
    '// items: 비트 순서(밥, 디저트, 놀거리 순). st: 반경 radius m, wd: 반경 wide m. 역 값은 비트를 base64로 (있음 1)\n' +
    '// 규칙이 없는 항목(공원 산책 등)은 늘 1\n' +
    'const NEAR = ' + JSON.stringify({ radius: RADIUS, wide: WIDE, asOf, items: labels, st, wd }) + ';\n';
  fs.writeFileSync(path.join(ROOT, 'near.js'), text);

  console.log('rows', rows, 'matched stores near stations', used, 'stations', stations.length, 'bytes', Buffer.byteLength(text));
  console.log('no rule (always on):', missingRules.join(', ') || 'none');
  console.log('stations with item nearby (of ' + stations.length + '):');
  items.forEach((it, idx) => console.log(`  ${it.deck}:${it.label}`.padEnd(28), String(perItem[idx]).padStart(4), it.test ? `stores ${hits[idx]}` : '(always)'));
})();
