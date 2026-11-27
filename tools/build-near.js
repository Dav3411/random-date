// 역마다 "걸어갈 만한 거리 안에 이 밥·디저트·놀거리가 있는지"를 미리 계산해 near.js로 씁니다.
// 자료: 소상공인시장진흥공단_상가(상권)정보 (공공데이터포털, 이용허락범위 제한 없음, 분기마다 갱신)
//       https://www.data.go.kr/data/15083033/fileData.do  — zip을 풀면 시도별 CSV(UTF-8)가 나옵니다.
//
// 쓰는 법 (분기마다 새 자료가 나오면 다시 돌리면 됩니다):
//   node tools/build-near.js <CSV가 든 폴더> <자료 기준일, 예: 2026-09-30>
// 결과: 프로젝트 폴더의 near.js
//
// 판정: 역 좌표에서 반경 RADIUS m 안에
//   - 상호로 확인되는 가게(규칙의 sure)가 1곳 이상이면 "있음"
//   - 아니면 그 항목을 팔 만한 종류의 가게(규칙의 maybe, 짐작)가 GUESS_MIN곳 이상이면 "있음(짐작)"
//     짐작으로만 있는 역에서는 지도를 그 가게 종류(규칙의 query)로 찾도록 표시해 둡니다.
// 규칙이 없는 항목(공원 산책처럼 가게가 아닌 것)은 늘 "있음"으로 둡니다.
//
// 지도 검색어 앞에 붙일 도시 이름(ar)도 여기서 같이 만듭니다(bounds.js의 시 도형으로 역이 어느 시에 있는지 봄).
//   서울·수도권: 다른 지역에도 같은 이름이 있는 역만 (서울 시청역, 부천 중동역)
//   그 밖의 지역: 모든 역 (부산 서면역, 김해 장신대역). 역 이름이 도시 이름으로 시작하면 붙이지 않습니다(대전역).
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ROOT = path.resolve(__dirname, '..');
const [csvDir, asOf] = process.argv.slice(2);
if (!csvDir || !asOf) { console.error('usage: node tools/build-near.js <csv dir> <YYYY-MM-DD>'); process.exit(1); }

const RADIUS = 800;   // m. 걸어서 10분 남짓
const WIDE = 1500;    // m. 근처에 마땅한 게 적은 역에서 쓰는 넓은 반경
const GUESS_MIN = 2;  // 짐작만으로 "있음"이 되려면 이만큼의 가게가 있어야 합니다 (한 곳은 문을 닫았을 수도 있어서)

// ---------- 사이트 자료(노선·역 좌표·항목·지도 도형) ----------
const site = {};
new Function('out',
  ['data.js', 'coords.js', 'bounds.js'].map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n') +
  '\n;out.REGIONS = REGIONS; out.COORDS = COORDS; out.BOUNDS = BOUNDS; out.DECKS = { food: FOOD, dessert: DESSERT, play: PLAY };')(site);

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

// ---------- 지도 검색어 앞에 붙일 도시 이름 ----------
// bounds.js: a 선 목록(1/10000도, 차이로 적음), c 시 [이름, 색, 이름 위치 경도·위도, 범위 서·남·동·북, 고리 목록], m 구까지 그린 광역시
function cityFinder(B) {
  const arcs = B.a.map(arr => { const pts = []; let x = 0, y = 0; for (let i = 0; i < arr.length; i += 2) { x += arr[i]; y += arr[i + 1]; pts.push([x, y]); } return pts; });
  const arcPts = i => (i >= 0 ? arcs[i] : arcs[~i].slice().reverse());
  const cities = B.c.map(([name, , lx, ly, w, s, e, n, rings]) => ({ name, lx, ly, w, s, e, n, rings: rings.map(r => r.flatMap(i => arcPts(i))) }));
  const inRing = (x, y, pts) => {
    let inside = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const [xi, yi] = pts[i], [xj, yj] = pts[j];
      if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  };
  return (lat, lon) => {
    const x = lon * 1e4, y = lat * 1e4;
    for (const c of cities) {
      if (x < c.w || x > c.e || y < c.s || y > c.n) continue;
      // 고리끼리 홀짝(구멍 포함)으로 셉니다.
      if (c.rings.reduce((k, r) => k + (inRing(x, y, r) ? 1 : 0), 0) % 2) return { name: c.name, exact: true };
    }
    // 해안선을 단순하게 그려 도형 밖으로 나온 역: 이름 위치가 가장 가까운 시
    let best = null, bd = Infinity;
    for (const c of cities) { const d = (c.lx - x) ** 2 + (c.ly - y) ** 2; if (d < bd) { bd = d; best = c; } }
    return { name: best.name, exact: false };
  };
}
const SAME_NAME_OTHER = { 광주: '경기 광주' }; // 수도권의 시 이름이 다른 지역 광역시와 같을 때
const baseName = n => n.replace(/\(.*?\)/g, '');
const regionsOfName = new Map();
for (const s of stations) {
  const b = baseName(s.key.replace(/^[^:]*:/, ''));
  if (!regionsOfName.has(b)) regionsOfName.set(b, new Set());
  regionsOfName.get(b).add(s.region);
}
// 같은 지역 안에서 이름은 같고 위치가 다른 역 (coords.js의 '노선:역' 키)
const splitNames = new Set(stations.filter(s => s.key.includes(':')).map(s => s.region + '/' + baseName(s.key.split(':')[1])));
const ar = {};
const arOutside = [];
for (const r of site.REGIONS) {
  const find = site.BOUNDS[r.id] ? cityFinder(site.BOUNDS[r.id]) : null;
  for (const s of stations.filter(x => x.region === r.id)) {
    const b = baseName(s.key.replace(/^[^:]*:/, ''));
    const ambiguous = regionsOfName.get(b).size > 1 || splitNames.has(r.id + '/' + b);
    if (r.id === 'seoul' && !ambiguous) continue;
    const c = find ? find(s.lat, s.lon) : { name: r.name, exact: false };
    if (!c.exact) arOutside.push(`${r.id}/${s.key}→${c.name}`);
    const city = (r.id === 'seoul' && SAME_NAME_OTHER[c.name]) || c.name;
    if (b.startsWith(c.name) && !ambiguous) continue; // 대전역, 부산역, 김해공항
    (ar[r.id] = ar[r.id] || {})[s.key] = city;
  }
}

// ---------- 항목별 규칙 ----------
// RULES[덱][항목 이름] = 가게 한 곳을 받아 맞으면 true를 돌려주는 함수, 또는 { sure, maybe, query } (near-rules.js 참고)
const RULES = require('./near-rules.js');

// ---------- 계산 ----------
const deckKeys = ['food', 'dessert', 'play'];
const items = deckKeys.flatMap(k => site.DECKS[k].map(i => {
  const r = (RULES[k] || {})[i.label] || null;
  return typeof r === 'function' || !r
    ? { deck: k, label: i.label, sure: r, maybe: null, query: null }
    : { deck: k, label: i.label, sure: r.sure, maybe: r.maybe, query: r.query };
}));
const missingRules = items.filter(i => !i.sure).map(i => `${i.deck}:${i.label}`);
// 짐작 비트를 두는 항목 (밥, 디저트, 놀거리 순)
const guessItems = items.filter(i => i.maybe);

// 역을 가까운 칸으로 나눠 두고, 가게마다 근처 칸의 역만 봅니다.
const CELL = 0.01; // 도 (약 1km)
const grid = new Map();
const cellKey = (lat, lon) => `${Math.floor(lat / CELL)},${Math.floor(lon / CELL)}`;
for (const s of stations) {
  s.count = new Uint16Array(items.length);  // 확인된 가게 수 (반경 RADIUS)
  s.wide = new Uint16Array(items.length);   // 확인된 가게 수 (반경 WIDE)
  s.mcount = new Uint16Array(items.length); // 짐작 가게 수 (반경 RADIUS)
  s.mwide = new Uint16Array(items.length);  // 짐작 가게 수 (반경 WIDE)
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
        if (!it.sure) return;
        // 확인이 짐작보다 먼저: 상호로 확인되는 가게는 짐작으로 세지 않습니다.
        const kind = it.sure(store) ? 'sure' : it.maybe && it.maybe(store) ? 'maybe' : null;
        if (!kind) return;
        any = true;
        hits[idx]++;
        const [c, w] = kind === 'sure' ? ['count', 'wide'] : ['mcount', 'mwide'];
        for (const [s, d] of near) {
          if (s[w][idx] < 65535) s[w][idx]++;
          if (d <= RADIUS && s[c][idx] < 65535) s[c][idx]++;
        }
      });
      if (any) used++;
    });
    console.log('read', path.basename(f), 'rows so far', rows);
  }

  // 역마다 비트로: 앞쪽은 food, dessert, play 순서의 항목 하나당 1비트 (있음 1),
  // 뒤쪽은 guess 목록 순서로 1비트 (짐작으로만 있음 1 → 지도는 그 가게 종류로 찾기)
  const nBits = items.length + guessItems.length;
  const has = (it, idx, sure, maybe) => !it.sure || sure[idx] >= 1 || (!!it.maybe && maybe[idx] >= GUESS_MIN);
  const encode = (sure, maybe) => {
    const bytes = new Uint8Array(Math.ceil(nBits / 8));
    const set = bit => { bytes[bit >> 3] |= 1 << (bit & 7); };
    items.forEach((it, idx) => { if (has(it, idx, sure, maybe)) set(idx); });
    guessItems.forEach((it, g) => {
      const idx = items.indexOf(it);
      if (sure[idx] < 1 && maybe[idx] >= GUESS_MIN) set(items.length + g);
    });
    return Buffer.from(bytes).toString('base64').replace(/=+$/, '');
  };
  const st = {}, wd = {};
  const perItem = new Uint32Array(items.length), perGuess = new Uint32Array(items.length);
  for (const s of stations) {
    (st[s.region] = st[s.region] || {})[s.key] = encode(s.count, s.mcount);
    (wd[s.region] = wd[s.region] || {})[s.key] = encode(s.wide, s.mwide);
    items.forEach((it, idx) => {
      if (has(it, idx, s.count, s.mcount)) perItem[idx]++;
      if (it.maybe && s.count[idx] < 1 && s.mcount[idx] >= GUESS_MIN) perGuess[idx]++;
    });
  }
  const labels = Object.fromEntries(deckKeys.map(k => [k, site.DECKS[k].map(i => i.label)]));
  const guess = Object.fromEntries(deckKeys.map(k => [k, guessItems.filter(i => i.deck === k).map(i => [i.label, i.query])]));
  const text =
    '// 역마다 걸어갈 만한 거리 안에 밥·디저트·놀거리가 있는지. tools/build-near.js로 만듭니다.\n' +
    '// 자료: 소상공인시장진흥공단_상가(상권)정보 ' + asOf + ' 기준 (공공데이터포털, 이용허락범위 제한 없음)\n' +
    '// items: 비트 순서(밥, 디저트, 놀거리 순). st: 반경 radius m, wd: 반경 wide m. 역 값은 비트를 base64로 (있음 1)\n' +
    '// 규칙이 없는 항목(공원 산책 등)은 늘 1\n' +
    '// guess: [항목, 지도 검색어]. items 비트 뒤에 이 순서로 "짐작으로만 있음" 비트가 붙습니다 (그 역에선 지도를 이 검색어로 찾기)\n' +
    '// ar: 지도 검색어 앞에 붙일 도시 이름 (서울 밖, 또는 다른 지역에 같은 이름이 있는 역)\n' +
    'const NEAR = ' + JSON.stringify({ radius: RADIUS, wide: WIDE, asOf, items: labels, guess, st, wd, ar }) + ';\n';
  fs.writeFileSync(path.join(ROOT, 'near.js'), text);

  console.log('rows', rows, 'matched stores near stations', used, 'stations', stations.length, 'bytes', Buffer.byteLength(text));
  console.log('no rule (always on):', missingRules.join(', ') || 'none');
  console.log('area prefixes:', Object.entries(ar).map(([r, o]) => `${r} ${Object.keys(o).length}`).join(', '));
  console.log('area from nearest city (outside shapes):', arOutside.join(', ') || 'none');
  console.log('stations with item nearby (of ' + stations.length + '), of which by guess only:');
  items.forEach((it, idx) => console.log(`  ${it.deck}:${it.label}`.padEnd(28), String(perItem[idx]).padStart(4),
    it.maybe ? `guess ${String(perGuess[idx]).padStart(4)}` : '          ', it.sure ? `stores ${hits[idx]}` : '(always)'));
})();
