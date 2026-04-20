/* ================================================================
   continent.js — GeoJSON + Equirectangular Projection + Canvas
   ================================================================ */

const REGION_CONFIG = {
  'east-asia': {
    title: 'East Asia',
    bounds: { minLon: 70, maxLon: 150, minLat: 55, maxLat: 5 }
  },
  'north-america': {
    title: 'North America',
    bounds: { minLon: -170, maxLon: -50, minLat: 75, maxLat: 15 }
  },
  'middle-east': {
    title: 'Middle East',
    bounds: { minLon: 25, maxLon: 80, minLat: 45, maxLat: 10 }
  },
  'west-europe': {
    title: 'West Europe',
    bounds: { minLon: -15, maxLon: 45, minLat: 72, maxLat: 33 }
  },
  'oceania': {
    title: 'Oceania',
    bounds: { minLon: 110, maxLon: 180, minLat: 5, maxLat: -50 }
  }
};

let canvas, ctx;
let currentRegion, currentBounds;
let hoverBuilding = null;

// Fade out hint text after 5 seconds
setTimeout(() => {
  const hint = document.querySelector('.hint-text');
  if (hint) hint.classList.add('fade');
}, 5000);

/* ── Card elements ─────────────────────────────────────────────── */
const card     = document.getElementById('bld-card');
const cardName = document.getElementById('card-name');
const cardLoc  = document.getElementById('card-loc');
const cardH    = document.getElementById('card-h');
const cardYr   = document.getElementById('card-yr');
const cardFl   = document.getElementById('card-fl');
const cardImg  = document.getElementById('card-img');
let hideTimer;

function showCard(b, mx, my) {
  clearTimeout(hideTimer);
  cardName.textContent = b.name;
  cardLoc.textContent  = b.city + ', ' + b.country;
  cardH.textContent    = b.height + 'm';
  cardYr.textContent   = b.year;
  cardFl.textContent   = b.floors > 0 ? b.floors : '—';

  const fname = (typeof BUILDING_IMAGES !== 'undefined') ? BUILDING_IMAGES[b.id] : null;
  const folderPath = b.folder || b.name.toUpperCase();
  if (fname) {
    cardImg.src = encodeURIComponent(folderPath) + '/' + encodeURIComponent(fname);
    cardImg.style.display = 'block';
    cardImg.onerror = function() { this.style.display = 'none'; };
  } else {
    cardImg.style.display = 'none';
  }

  const W = window.innerWidth, H = window.innerHeight;
  let left = mx + 18, top = my - 20;
  if (left + 220 > W - 8) left = mx - 228;
  if (top + 260 > H - 8) top = H - 268;
  if (top < 64) top = 64;

  card.style.left = left + 'px';
  card.style.top  = top  + 'px';
  card.classList.add('on');
}

function hideCard() {
  hideTimer = setTimeout(() => card.classList.remove('on'), 80);
}

/* ── Projection ────────────────────────────────────────────────── */
function project(lon, lat, bounds) {
  const x = (lon - bounds.minLon) / (bounds.maxLon - bounds.minLon) * canvas.width;
  const y = (bounds.minLat - lat) / (bounds.minLat - bounds.maxLat) * canvas.height;
  return { x, y };
}

/* ── Clip check ────────────────────────────────────────────────── */
function inBounds(lon, lat, bounds) {
  return lon >= bounds.minLon && lon <= bounds.maxLon &&
         lat <= bounds.minLat && lat >= bounds.maxLat;
}

/* ── Draw GeoJSON polygon ring ─────────────────────────────────── */
function drawRing(coords, bounds) {
  let started = false;
  for (const [lon, lat] of coords) {
    // skip coords way outside (performance)
    if (lon < bounds.minLon - 5 || lon > bounds.maxLon + 5) continue;
    if (lat > bounds.minLat + 5 || lat < bounds.maxLat - 5) continue;
    const { x, y } = project(lon, lat, bounds);
    if (!started) { ctx.moveTo(x, y); started = true; }
    else           { ctx.lineTo(x, y); }
  }
}

/* ── Main render ───────────────────────────────────────────────── */
function render(geojson, region, bounds) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  /* background */
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  /* land */
  ctx.fillStyle   = '#0078BF';
  ctx.strokeStyle = '#000';
  ctx.lineWidth   = 0.6;
  ctx.globalAlpha = 0.65;

  geojson.features.forEach(feature => {
    if (!feature.geometry) return;
    const geom = feature.geometry;
    const polys = geom.type === 'MultiPolygon'
      ? geom.coordinates
      : [geom.coordinates];

    polys.forEach(poly => {
      poly.forEach(ring => {
        ctx.beginPath();
        drawRing(ring, bounds);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });
    });
  });

  ctx.globalAlpha = 1;

  /* pins */
  const buildings = BUILDINGS.filter(b => b.region === region && b.lat && b.lng);
  buildings.forEach(b => {
    const { x, y } = project(b.lng, b.lat, bounds);
    const isHover  = b === hoverBuilding;
    const r        = isHover ? 8 : 5;

    /* ring */
    ctx.beginPath();
    ctx.arc(x, y, 13, 0, Math.PI * 2);
    ctx.strokeStyle  = '#0078BF';
    ctx.lineWidth    = 1;
    ctx.globalAlpha  = 0.3;
    ctx.stroke();
    ctx.globalAlpha  = 1;

    /* dot */
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle   = isHover ? '#fff' : '#fff';
    ctx.fill();
    ctx.strokeStyle = isHover ? '#fff' : '#0078BF';
    ctx.lineWidth   = 2;
    ctx.stroke();
  });

  /* hover label */
  if (hoverBuilding) {
    const { x, y } = project(hoverBuilding.lng, hoverBuilding.lat, bounds);
    const text = hoverBuilding.name + '  ' + hoverBuilding.height + 'm';
    ctx.font      = 'bold 11px futura-pt, sans-serif';
    ctx.fillStyle = '#fff';
    const tw = ctx.measureText(text).width;
    const lx = x - tw / 2;
    const ly = y - 18;

    ctx.fillStyle   = 'rgba(0,0,0,0.75)';
    ctx.fillRect(lx - 4, ly - 12, tw + 8, 16);
    ctx.fillStyle   = '#fff';
    ctx.fillText(text, lx, ly);
  }
}

/* ── Init ──────────────────────────────────────────────────────── */
async function init() {
  const region = new URLSearchParams(location.search).get('region');
  const cfg    = REGION_CONFIG[region];

  if (!cfg) {
    document.getElementById('map-container').innerHTML =
      '<p style="color:#555;font-family:futura-pt,sans-serif;padding:2rem;letter-spacing:.1em;text-transform:uppercase">Region not found.</p>';
    return;
  }

  document.title = cfg.title + ' — SKYSCRAPERS';
  document.getElementById('region-label').textContent = cfg.title.toUpperCase();

  currentRegion = region;
  currentBounds = cfg.bounds;

  /* canvas setup */
  const container = document.getElementById('map-container');
  canvas = document.createElement('canvas');
  canvas.width  = container.offsetWidth;
  canvas.height = container.offsetHeight;
  ctx = canvas.getContext('2d');
  container.appendChild(canvas);

  /* fetch GeoJSON */
  let geojson;
  try {
    const res = await fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson');
    geojson = await res.json();
  } catch (e) {
    ctx.fillStyle = '#333';
    ctx.font = '13px futura-pt, sans-serif';
    ctx.fillText('Failed to load map data.', 20, 40);
    return;
  }

  render(geojson, region, cfg.bounds);

  /* mouse: hover */
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx   = e.clientX - rect.left;
    const my   = e.clientY - rect.top;

    const prev = hoverBuilding;
    hoverBuilding = null;

    BUILDINGS.filter(b => b.region === region && b.lat && b.lng).forEach(b => {
      const { x, y } = project(b.lng, b.lat, cfg.bounds);
      const dist = Math.hypot(x - mx, y - my);
      if (dist < 30) hoverBuilding = b;
    });

    if (hoverBuilding) showCard(hoverBuilding, e.clientX, e.clientY);
    else               hideCard();

    if (hoverBuilding !== prev) render(geojson, region, cfg.bounds);
  });

  canvas.addEventListener('mouseleave', () => {
    hoverBuilding = null;
    hideCard();
    render(geojson, region, cfg.bounds);
  });

  canvas.addEventListener('click', () => {
    if (hoverBuilding) location.href = 'building.html?id=' + hoverBuilding.id;
  });

  window.addEventListener('resize', () => {
    canvas.width  = container.offsetWidth;
    canvas.height = container.offsetHeight;
    render(geojson, region, cfg.bounds);
  });
}

document.addEventListener('DOMContentLoaded', init);