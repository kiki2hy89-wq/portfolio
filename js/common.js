// 공통 유틸
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export async function loadJSON(path) {
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) throw new Error(path + ' 을(를) 불러오지 못했습니다 (' + res.status + ')');
  return res.json();
}

// 이미지 경로가 있으면 <img>, 없으면 회색 플레이스홀더
export function media(src, alt = '', label = '', extraClass = '') {
  const inner = src
    ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">`
    : (label ? `<span class="media__label">${esc(label)}</span>` : '');
  return `<div class="media ${extraClass}">${inner}</div>`;
}

export const CATEGORIES = [
  { key: 'package', label: 'PACKAGE', layout: 'gallery' },
  { key: 'detail', label: 'DETAIL PAGE', layout: 'single' },
  { key: 'branding', label: 'BRANDING', layout: 'gallery' },
  { key: 'type', label: 'TYPE DESIGN', layout: 'single' }
];

export function renderNav(el, activeKey, hrefFor) {
  el.innerHTML = CATEGORIES.map((c) =>
    `<a class="pill${c.key === activeKey ? ' is-active' : ''}" href="${hrefFor(c.key)}" data-cat="${c.key}">${c.label}</a>`
  ).join('');
}
