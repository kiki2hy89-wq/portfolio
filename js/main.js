import { esc, loadJSON, media, renderNav } from './common.js';

const $ = (id) => document.getElementById(id);

async function init() {
  renderNav($('cat-nav'), null, (k) => `work.html#${k}`);

  let p;
  try { p = await loadJSON('data/profile.json'); }
  catch (e) { console.error(e); $('career').innerHTML = `<p class="empty">${esc(e.message)}</p>`; return; }

  $('profile-photo').innerHTML = media(p.photo, p.name, p.photo ? '' : '프로필 사진').replace('class="media ', 'class="media profile__photo ');
  $('profile-name').textContent = p.name;
  $('profile-role').textContent = p.role;
  $('profile-info').innerHTML = [
    ['Phone', `<a href="tel:${esc(p.phone.replace(/-/g, ''))}">${esc(p.phone)}</a>`],
    ['KakaoTalk', esc(p.kakao)],
    ['분야', esc(p.fields)]
  ].map(([k, v]) => `<div class="profile__row"><span class="muted">${k}</span><span>${v}</span></div>`).join('');
  document.querySelectorAll('[data-tel]').forEach((a) => (a.href = 'tel:' + p.phone.replace(/-/g, '')));
  $('contact-line').textContent = `${p.phone} · 카카오톡 ${p.kakao}`;

  $('stats').innerHTML = p.stats.map((s) => `<div><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('');

  $('career-count').textContent = `총 ${p.career.length}건`;
  $('career').innerHTML = p.career.map((r) => `
    <div class="career__row" data-reveal>
      <div class="career__year">${esc(r.year)}</div>
      <div><div class="career__title">${esc(r.title)}</div><div class="career__desc">${esc(r.desc)}</div></div>
      <div class="career__type">${esc(r.type)}</div>
    </div>`).join('');

  if (p.skills && p.skills.length) {
    $('skills').innerHTML = p.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join('');
  } else {
    $('skills-section').remove();
  }

  $('works').innerHTML = p.featured.map((w) => `
    <a class="work-card" data-reveal href="work.html#${esc(w.category)}">
      ${media(w.image, w.title, w.image ? '' : '작업 이미지')}
      <div class="work-card__meta"><span class="work-card__title">${esc(w.title)}</span><span class="muted" style="font-size:13px">${esc(w.year)}</span></div>
      <div class="work-card__type">${esc(w.type)}</div>
    </a>`).join('');
}

init();
