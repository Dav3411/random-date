// 지도 검색어 앞에 붙일 도시 이름을 역마다 미리 정해 area.js로 씁니다. (bounds.js의 시 도형으로 역이 어느 시에 있는지 봄)
//   서울·수도권: 다른 지역에도 같은 이름이 있는 역만 (서울 시청역, 부천 중동역)
//   그 밖의 지역: 모든 역 (부산 서면역, 김해 장신대역). 역 이름이 도시 이름으로 시작하면 붙이지 않습니다(대전역).
//
// 쓰는 법 (노선·역 좌표·지도 도형을 고친 뒤 다시 돌리면 됩니다):
//   node tools/build-area.js
// 결과: 프로젝트 폴더의 area.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ---------- 사이트 자료(노선·역 좌표·지도 도형) ----------
const site = {};
new Function('out',
  ['data.js', 'coords.js', 'bounds.js'].map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n') +
  '\n;out.REGIONS = REGIONS; out.COORDS = COORDS; out.BOUNDS = BOUNDS;')(site);

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
const area = {};
const outside = [];
for (const r of site.REGIONS) {
  const find = site.BOUNDS[r.id] ? cityFinder(site.BOUNDS[r.id]) : null;
  for (const s of stations.filter(x => x.region === r.id)) {
    const b = baseName(s.key.replace(/^[^:]*:/, ''));
    const ambiguous = regionsOfName.get(b).size > 1 || splitNames.has(r.id + '/' + b);
    if (r.id === 'seoul' && !ambiguous) continue;
    const c = find ? find(s.lat, s.lon) : { name: r.name, exact: false };
    if (!c.exact) outside.push(`${r.id}/${s.key}→${c.name}`);
    const city = (r.id === 'seoul' && SAME_NAME_OTHER[c.name]) || c.name;
    if (b.startsWith(c.name) && !ambiguous) continue; // 대전역, 부산역, 김해공항
    (area[r.id] = area[r.id] || {})[s.key] = city;
  }
}

const text =
  '// 지도 검색어 앞에 붙일 도시 이름 (서울 밖, 또는 다른 지역에 같은 이름이 있는 역). tools/build-area.js로 만듭니다.\n' +
  '// 지역 → 역 이름(같은 지역에 같은 이름의 역이 따로 있으면 \'노선:역\') → 도시 이름\n' +
  'const AREA = ' + JSON.stringify(area) + ';\n';
fs.writeFileSync(path.join(ROOT, 'area.js'), text);
console.log('stations', stations.length, 'bytes', Buffer.byteLength(text));
console.log('prefixes:', Object.entries(area).map(([r, o]) => `${r} ${Object.keys(o).length}`).join(', '));
console.log('from nearest city (outside shapes):', outside.join(', ') || 'none');
