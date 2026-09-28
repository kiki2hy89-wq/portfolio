import { CATEGORIES, esc, loadJSON, media, renderNav } from './common.js';

const $ = (id) => document.getElementById(id);
const ALIASES = { web: 'detail' }; // 예전 주소(#web) 호환
let DATA = null;

function currentKey() {
  const h = location.hash.replace('#', '').toLowerCase();
  const k = ALIASES[h] || h;
  return CATEGORIES.some((c) => c.key === k) ? k : CATEGORIES[0].key;
}

function singleTpl(p) {
  return `
  <article class="project-single" data-reveal>
    <div class="project-single__bar">
      <span class="project-single__no">${esc(p.no)}</span>
      <h2 class="project-single__title">${esc(p.title)}</h2>
      <span>${esc(p.year)} · ${esc(p.client)}</span>
      <span class="spacer"></span>
      <span>${esc(p.role)}</span>
      <span>${esc(p.output)}</span>
    </div>
    ${p.desc ? `<p class="project-single__desc">${esc(p.desc)}</p>` : ''}
    ${media(p.image, p.title, p.image ? '' : '1200 × 848')}
    <div class="divider"></div>
  </article>`;
}

function galleryTpl(p, i) {
  const tags = (p.tags || []).map((t) => `<span class="chip chip--sm">${esc(t)}</span>`).join('');
  const shots = (p.shots || []).map((s) => media(s, p.title, s ? '' : '4 : 3')).join('');
  return `
  <article class="project${i % 2 ? ' is-reverse' : ''}" data-reveal>
    ${media(p.image, p.title, p.image ? '' : '16 : 10', 'project__main')}
    <div class="project__info">
      <div>
        <div class="project__num"><strong>${esc(p.no)}</strong><span>${esc(p.year)}</span></div>
        <h2 class="project__title">${esc(p.title)}</h2>
      </div>
      <p class="project__desc">${esc(p.desc)}</p>
      <dl class="project__meta">
        <dt>클라이언트</dt><dd>${esc(p.client)}</dd>
        <dt>역할</dt><dd>${esc(p.role)}</dd>
        <dt>산출물</dt><dd>${esc(p.output)}</dd>
      </dl>
      ${tags ? `<div class="chips">${tags}</div>` : ''}
    </div>
    ${shots ? `<div class="project__shots">${shots}</div>` : ''}
    <div class="divider"></div>
  </article>`;
}

function render() {
  const key = currentKey();
  const cat = CATEGORIES.find((c) => c.key === key);
  const idx = CATEGORIES.indexOf(cat);
  const next = CATEGORIES[(idx + 1) % CATEGORIES.length];
  const list = (DATA && DATA[key]) || [];

  renderNav($('cat-nav'), key, (k) => `#${k}`);
  document.title = `${cat.label} — 이혜영 포트폴리오`;
  $('cat-label').textContent = cat.label;
  $('project-count').textContent = `프로젝트 ${list.length}건`;
  $('work-list').innerHTML = list.length
    ? list.map((p, i) => (cat.layout === 'single' ? singleTpl(p) : galleryTpl(p, i))).join('')
    : '<p class="empty">준비 중인 작업입니다.</p>';
  $('next-label').textContent = `${next.label} 작업 보기`;
  const nb = $('next-btn');
  nb.textContent = next.label;
  nb.href = `#${next.key}`;
}

async function init() {
  try { DATA = await loadJSON('data/projects.json'); }
  catch (e) { console.error(e); $('work-list').innerHTML = `<p class="empty">${esc(e.message)}</p>`; }
  render();
  window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
}

init();
