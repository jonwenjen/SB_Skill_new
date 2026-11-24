/**
 * SB_SKILL_NEW — external reference: 極刻滑行 (carvingeek.com) ground-trick skill tree + carving course.
 * Videos are the creators' own YouTube / Bilibili uploads; we only link and embed them on demand.
 */
(function () {
  'use strict';

  const D = window.SB_CARVINGEEK;
  if (!D) return;

  const LEVEL_NAME = D.levels || { B: '入門', A: '進階', S: '高階' };
  const byId = Object.fromEntries(D.tricks.map((t) => [t.id, t]));
  const ui = { tab: 'tree', level: 'B', videoOnly: false };
  window.SB_REF_TAB = ui.tab;

  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const ext = '<svg class="ext" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8M18 14v5H5V6h5"/></svg>';
  const playSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';
  const chev = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

  const ytWatch = (id) => `https://www.youtube.com/watch?v=${id}`;
  const bvWatch = (bv) => `https://www.bilibili.com/video/${bv}`;

  function ancestors(id) {
    const seen = new Set();
    const walk = (k) => (byId[k] ? byId[k].parents : []).forEach((p) => { if (!seen.has(p)) { seen.add(p); walk(p); } });
    walk(id);
    const order = D.tricks.map((t) => t.id);
    return [...seen].sort((a, b) => order.indexOf(a) - order.indexOf(b));
  }

  /* ---------- video embed (click to load; nothing loads from YouTube until tapped) ---------- */
  function videoCard(v, uid) {
    return `
      <div class="yt-card" data-yt-card="${uid}">
        <button type="button" class="yt-thumb" data-yt="${esc(v.yt)}" aria-label="播放：${esc(v.title)}">
          <img src="https://i.ytimg.com/vi/${esc(v.yt)}/hqdefault.jpg" alt="" loading="lazy" />
          <span class="yt-play">${playSvg}</span>
          <span class="media-label">${esc(v.kind)} · YouTube</span>
        </button>
        <p class="yt-title">${esc(v.title)}</p>
        <div class="link-row">
          <a href="${ytWatch(v.yt)}" target="_blank" rel="noopener">YouTube ${ext}</a>
          ${v.bv ? `<a href="${bvWatch(v.bv)}" target="_blank" rel="noopener">B 站 ${ext}</a>` : ''}
        </div>
      </div>`;
  }

  function mountEmbed(btn) {
    const id = btn.getAttribute('data-yt');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&playsinline=1&rel=0`;
    iframe.title = btn.getAttribute('aria-label') || 'YouTube video';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.className = 'yt-frame';
    btn.replaceWith(iframe);
  }

  function stopEmbeds(root) {
    (root || document).querySelectorAll('iframe.yt-frame').forEach((f) => {
      const id = (f.src.match(/embed\/([\w-]{11})/) || [])[1];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'yt-thumb';
      btn.setAttribute('data-yt', id);
      btn.setAttribute('aria-label', f.title);
      btn.innerHTML = `<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy" /><span class="yt-play">${playSvg}</span>`;
      f.replaceWith(btn);
    });
  }

  /* ---------- skill tree ---------- */
  function chip(id) {
    const t = byId[id];
    if (!t) return '';
    return `<button type="button" class="node-chip lv-${t.level}" data-goto="${esc(id)}">
      <span class="lv">${t.level}</span>${esc(t.name)}${t.videos.length ? '<span class="dot" aria-label="有影片"></span>' : ''}</button>`;
  }

  function nodeHtml(t, i) {
    const anc = ancestors(t.id);
    const vids = t.videos;
    const uid = `tv-${t.id}`;
    const meta = [
      t.parents.length ? `前置 ${t.parents.length}` : '起點',
      t.unlocks.length ? `解鎖 ${t.unlocks.length}` : '',
      vids.length ? `▶ ${vids.length} 支影片` : ''
    ].filter(Boolean).join(' · ');

    const videoTabs = vids.length > 1
      ? `<div class="segmented small" role="tablist" aria-label="切換影片">
          ${vids.map((v, k) => `<button type="button" role="tab" aria-selected="${k === 0}" data-vtab="${uid}" data-k="${k}">${esc(v.kind)}${k ? ' ' + k : ''}</button>`).join('')}
        </div>`
      : '';

    return `
      <details class="acc trick-node" id="trk-${esc(t.id)}" data-node="${esc(t.id)}">
        <summary>
          <span class="acc-idx lv-${t.level}">${t.level}${String(i + 1).padStart(2, '0')}</span>
          <span class="acc-title">${esc(t.name)}<small>${meta}</small></span>
          ${chev}
        </summary>
        <div class="acc-body">
          ${vids.length
            ? `${videoTabs}${vids.map((v, k) => `<div data-vpane="${uid}" data-k="${k}" ${k ? 'hidden' : ''}>${videoCard(v, uid + k)}</div>`).join('')}`
            : '<p class="fine no-video">極刻滑行尚未為此動作發布教學影片；可先看前置動作的影片。</p>'}
          ${t.detail ? `<a class="detail-link" href="${esc(t.detail)}" target="_blank" rel="noopener">極刻滑行動作詳解 ${ext}</a>` : ''}

          <h5 class="node-h">前置動作</h5>
          <div class="chip-wrap">${t.parents.length ? t.parents.map(chip).join('') : '<span class="fine">技能樹起點，從這裡開始。</span>'}</div>

          ${anc.length > t.parents.length
            ? `<h5 class="node-h">完整前置路線 · ${anc.length} 個動作</h5><div class="chip-wrap route">${anc.map(chip).join('')}</div>`
            : ''}

          <h5 class="node-h">學會後解鎖</h5>
          <div class="chip-wrap">${t.unlocks.length ? t.unlocks.map(chip).join('') : '<span class="fine">此分支終點。</span>'}</div>
        </div>
      </details>`;
  }

  function renderTree() {
    const root = document.getElementById('ref-tree-list');
    const bar = document.getElementById('ref-tree-filters');
    if (!root || !bar) return;
    const count = (L) => D.tricks.filter((t) => t.level === L).length;
    const withVid = D.tricks.filter((t) => t.videos.length).length;

    bar.innerHTML = `
      ${['B', 'A', 'S'].map((L) => `<button type="button" class="atomic-card ${!ui.videoOnly && ui.level === L ? 'selected' : ''}" data-level="${L}" aria-pressed="${!ui.videoOnly && ui.level === L}">
        <span class="n">LV ${L}</span>${LEVEL_NAME[L]} · ${count(L)}</button>`).join('')}
      <button type="button" class="atomic-card ${ui.videoOnly ? 'selected' : ''}" data-video-only aria-pressed="${ui.videoOnly}">▶ 有影片 · ${withVid}</button>`;

    const list = D.tricks.filter((t) => (ui.videoOnly ? t.videos.length : t.level === ui.level));
    root.innerHTML = list.map((t) => nodeHtml(t, D.tricks.filter((x) => x.level === t.level).indexOf(t))).join('');

    bar.querySelectorAll('[data-level]').forEach((b) => b.addEventListener('click', () => {
      ui.level = b.getAttribute('data-level');
      ui.videoOnly = false;
      renderTree();
    }));
    bar.querySelector('[data-video-only]').addEventListener('click', () => {
      ui.videoOnly = !ui.videoOnly;
      renderTree();
    });
    bindToggles(root);
  }

  function gotoNode(id) {
    const t = byId[id];
    if (!t) return;
    if (!ui.videoOnly || !t.videos.length) {
      ui.videoOnly = false;
      ui.level = t.level;
    }
    renderTree();
    const el = document.getElementById(`trk-${id}`);
    if (el) {
      el.open = true;
      el.classList.add('flash');
      setTimeout(() => el.classList.remove('flash'), 1400);
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'auto' });
    }
  }

  /* ---------- carving course ---------- */
  function renderCarving() {
    const root = document.getElementById('ref-carving-list');
    if (!root) return;
    root.innerHTML = D.carving.map((g, gi) => `
      <details class="acc" ${gi === 0 ? 'open' : ''}>
        <summary>
          <span class="acc-idx">${gi < 5 ? String(gi + 1).padStart(2, '0') : '+'}</span>
          <span class="acc-title">${esc(g.title)}<small>${g.eps.length} 集 · ${esc(g.desc)}</small></span>
          ${chev}
        </summary>
        <div class="acc-body">
          <ol class="ep-list">
            ${g.eps.map((e) => `
              <li class="ep">
                <button type="button" class="ep-btn" data-ep="${esc(e.yt)}" aria-expanded="false">
                  <span class="ep-n">${esc(e.ep)}</span>
                  <span class="ep-name">${esc(e.name)}</span>
                  <span class="ep-play">${playSvg}</span>
                </button>
                <div class="ep-body" hidden>
                  ${videoCard({ yt: e.yt, bv: e.bv, title: e.title, kind: e.ep }, 'ep' + e.yt)}
                </div>
              </li>`).join('')}
          </ol>
        </div>
      </details>`).join('');

    root.querySelectorAll('.ep-btn').forEach((btn) => btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const open = body.hidden;
      root.querySelectorAll('.ep-body').forEach((b) => { if (b !== body) { b.hidden = true; b.previousElementSibling.setAttribute('aria-expanded', 'false'); } });
      stopEmbeds(root);
      body.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      if (open) {
        const thumb = body.querySelector('.yt-thumb');
        if (thumb) mountEmbed(thumb);
      }
    }));
    bindToggles(root);
  }

  /* ---------- shared bindings ---------- */
  function bindDelegates(root) {
    root.addEventListener('click', (e) => {
      const thumb = e.target.closest('.yt-thumb');
      if (thumb && root.contains(thumb)) { e.preventDefault(); mountEmbed(thumb); return; }
      const go = e.target.closest('[data-goto]');
      if (go && root.contains(go)) { e.preventDefault(); gotoNode(go.getAttribute('data-goto')); return; }
      const vt = e.target.closest('[data-vtab]');
      if (vt && root.contains(vt)) {
        const uid = vt.getAttribute('data-vtab');
        const k = vt.getAttribute('data-k');
        root.querySelectorAll(`[data-vtab="${uid}"]`).forEach((b) => b.setAttribute('aria-selected', String(b === vt)));
        root.querySelectorAll(`[data-vpane="${uid}"]`).forEach((p) => {
          const on = p.getAttribute('data-k') === k;
          if (!on) stopEmbeds(p);
          p.hidden = !on;
        });
      }
    });
  }

  function bindToggles(root) {
    root.querySelectorAll('details.acc').forEach((d) => d.addEventListener('toggle', () => { if (!d.open) stopEmbeds(d); }));
  }

  function setRefTab(tab) {
    ui.tab = tab;
    window.SB_REF_TAB = tab;
    document.querySelectorAll('[data-ref-tab]').forEach((b) => b.setAttribute('aria-selected', String(b.getAttribute('data-ref-tab') === tab)));
    document.querySelectorAll('[data-ref-panel]').forEach((p) => {
      p.hidden = p.getAttribute('data-ref-panel') !== tab;
      if (p.hidden) stopEmbeds(p);
    });
  }
  window.SBReference = { setTab: setRefTab, sync: () => setRefTab(ui.tab) };

  document.addEventListener('DOMContentLoaded', () => {
    const tree = document.getElementById('ref-tree-list');
    const carving = document.getElementById('ref-carving-list');
    // Delegated click handlers attach once per container; re-renders only replace innerHTML.
    if (tree) { bindDelegates(tree); renderTree(); }
    if (carving) { bindDelegates(carving); renderCarving(); }
    document.querySelectorAll('[data-ref-tab]').forEach((b) => b.addEventListener('click', () => setRefTab(b.getAttribute('data-ref-tab'))));
    setRefTab(ui.tab);
  });
})();
