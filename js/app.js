/**
 * SB_SKILL_NEW — MAIN APPLICATION CONTROLLER (mobile-first view shell)
 * Presentation layer only: curriculum content comes unchanged from curriculum_data.js.
 * Media labels and source/provenance remain unverified; this UI does not constitute qualified review.
 */

(function () {
  'use strict';

  const VIEWS = ['overview', 'curriculum', 'lab', 'tricks', 'library'];
  // Legacy anchors from the old single-page layout map onto the new views.
  const LEGACY_ANCHORS = {
    top: 'overview',
    'systems-section': 'overview',
    'curriculum-section': 'curriculum',
    'interactive-studio': 'lab',
    'groundtrick-section': 'tricks',
    'gallery-section': 'library',
    'experts-audit-section': 'library'
  };

  // AI-generated (not filmed) style samples, keyed by curriculum media id.
  const AI_SAMPLES = {
    s_01_01: {
      video: 'assets/media/ai-samples/s_01_01_ai_live_action.mp4',
      poster: 'assets/media/ai-samples/s_01_01_ai_live_action.jpg',
      label: 'AI 生成示範 · 非真人拍攝',
      note: 'AI 生成的寫實風格樣片（Google Gemini / Veo）：非真人拍攝，動作、角度與負荷尚待合格教練核可，不是訓練處方。'
    }
  };

  const state = {
    view: 'overview',
    activeModuleId: 'MOD-01',
    moduleTab: 'skills',
    activeComboIndex: 0,
    selectedAtomicSkillId: null,
    expertPanelFilter: 'ALL',
    searchQuery: '',
    snowGlareTheme: false
  };

  function getCurriculum() {
    return window.SB_CURRICULUM_DATA || {
      systemsComparison: [],
      modules: [],
      groundTrickComboMatrix: { atomicSkills: [], combos: [] },
      experts50: []
    };
  }

  const attr = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const pad2 = (n) => String(n).padStart(2, '0');

  /** Split a dense paragraph into scannable points without changing its wording. */
  function toPoints(text, cls) {
    const raw = String(text || '').trim();
    if (!raw) return '';
    const parts = raw.split(/(?<=[。；！？])/).map((s) => s.trim()).filter(Boolean);
    if (parts.length < 2) return `<p class="${cls || 'body'}">${raw}</p>`;
    return `<ul class="points ${cls || ''}">${parts.map((p) => `<li>${p}</li>`).join('')}</ul>`;
  }

  const chevron = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  const expandIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';

  /* --------------------------------------------------------------------------
     MEDIA: one compact player per item, with source switching.
     sources: [{ key, label, img, vid, ai? }]
     -------------------------------------------------------------------------- */
  let mediaSeq = 0;
  function buildMediaBlock(sources, title) {
    const list = (sources || []).filter((s) => s && (s.img || s.vid));
    if (!list.length) return '';
    const uid = `m${++mediaSeq}`;
    const first = list[0];
    const tabs = list.length > 1
      ? `<div class="segmented small" role="tablist" aria-label="切換素材">
          ${list.map((s, i) => `<button type="button" role="tab" aria-selected="${i === 0}" data-media-src="${uid}"
              data-img="${attr(s.img)}" data-vid="${attr(s.vid)}" data-ai="${s.ai ? '1' : ''}" data-label="${attr(s.label)}">${s.tab}</button>`).join('')}
        </div>`
      : '';
    return `
      <div class="media-block" data-media-block="${uid}">
        ${tabs}
        <div class="media-frame">
          <span class="media-label ${first.ai ? 'ai' : ''}" data-media-label="${uid}">${first.label}</span>
          <button type="button" class="media-expand" aria-label="全螢幕檢視" data-lightbox-img="${attr(first.img)}" data-lightbox-vid="${attr(first.vid)}"
            data-lightbox-title="${attr(title)}" data-lightbox-badge="${attr(first.label)}">${expandIcon}</button>
          <video id="vid-${uid}" src="${attr(first.vid)}" poster="${attr(first.img)}" controls loop muted playsinline preload="none"></video>
        </div>
        <div class="media-tools">
          <div class="speed-row" role="group" aria-label="播放速度">
            <span>速度</span>
            <button type="button" class="speed-mini-btn" data-vid-speed="0.25" data-target-vid="vid-${uid}">0.25×</button>
            <button type="button" class="speed-mini-btn" data-vid-speed="0.5" data-target-vid="vid-${uid}">0.5×</button>
            <button type="button" class="speed-mini-btn active" data-vid-speed="1.0" data-target-vid="vid-${uid}">1×</button>
          </div>
        </div>
        <p class="fine media-caption" data-media-note="${uid}">${first.ai ? first.note : '原稿素材：檔案存在不代表真人示範、正誤對照、來源、授權或文字提示正確。'}</p>
      </div>`;
  }

  function repoSource(tab, mediaId, img, vid) {
    return {
      tab,
      label: '原稿素材 · 來源未核實',
      img: img || `assets/media/images/${mediaId}.jpg`,
      vid: vid || `assets/media/videos/${mediaId}.mp4`
    };
  }

  function withAiSample(mediaId, sources) {
    const ai = AI_SAMPLES[mediaId];
    if (!ai) return sources;
    return [{ tab: 'AI 示範', label: ai.label, img: ai.poster, vid: ai.video, ai: true, note: ai.note }, ...sources];
  }

  function bindMediaInteractions(container) {
    if (!container) return;

    container.querySelectorAll('[data-media-src]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const uid = btn.getAttribute('data-media-src');
        const block = container.querySelector(`[data-media-block="${uid}"]`);
        if (!block) return;
        const vid = block.querySelector('video');
        const label = block.querySelector(`[data-media-label="${uid}"]`);
        const note = block.querySelector(`[data-media-note="${uid}"]`);
        const expand = block.querySelector('.media-expand');
        const isAi = btn.getAttribute('data-ai') === '1';
        const img = btn.getAttribute('data-img');
        const src = btn.getAttribute('data-vid');
        vid.pause();
        vid.poster = img;
        vid.src = src;
        vid.load();
        label.textContent = btn.getAttribute('data-label');
        label.classList.toggle('ai', isAi);
        if (note) {
          const ai = Object.values(AI_SAMPLES).find((s) => s.video === src);
          note.textContent = isAi && ai ? ai.note : '原稿素材：檔案存在不代表真人示範、正誤對照、來源、授權或文字提示正確。';
        }
        expand.setAttribute('data-lightbox-img', img);
        expand.setAttribute('data-lightbox-vid', src);
        expand.setAttribute('data-lightbox-badge', btn.getAttribute('data-label'));
        btn.parentElement.querySelectorAll('[role="tab"]').forEach((b) => b.setAttribute('aria-selected', String(b === btn)));
      });
    });

    container.querySelectorAll('.speed-mini-btn[data-vid-speed]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const speed = parseFloat(btn.getAttribute('data-vid-speed')) || 1.0;
        const vidEl = document.getElementById(btn.getAttribute('data-target-vid'));
        if (vidEl) {
          vidEl.playbackRate = speed;
          vidEl.play().catch(() => {});
        }
        btn.parentElement.querySelectorAll('.speed-mini-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    container.querySelectorAll('[data-lightbox-img]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openMediaLightbox(
          el.getAttribute('data-lightbox-img'),
          el.getAttribute('data-lightbox-vid'),
          el.getAttribute('data-lightbox-title'),
          el.getAttribute('data-lightbox-badge')
        );
      });
    });
  }

  function openMediaLightbox(imgSrc, vidSrc, title, badge) {
    const backdrop = document.getElementById('global-media-lightbox');
    if (!backdrop) return;
    const titleEl = document.getElementById('lightbox-title');
    const badgeEl = document.getElementById('lightbox-badge');
    const imgEl = document.getElementById('lightbox-img');
    const vidEl = document.getElementById('lightbox-video');

    if (titleEl) titleEl.textContent = title || '';
    if (badgeEl) badgeEl.textContent = badge || '原稿媒體素材｜來源待核實';
    if (imgEl) imgEl.src = imgSrc || '';
    if (vidEl) {
      const wrap = vidEl.closest('figure');
      if (wrap) wrap.hidden = !vidSrc;
      vidEl.src = vidSrc || '';
      vidEl.poster = imgSrc || '';
      if (vidSrc) {
        vidEl.playbackRate = 0.5;
        vidEl.play().catch(() => {});
      }
    }
    backdrop.classList.add('open');
    document.body.classList.add('sheet-open');
    const closeBtn = document.getElementById('btn-close-lightbox');
    if (closeBtn) closeBtn.focus();
  }

  function closeMediaLightbox() {
    const backdrop = document.getElementById('global-media-lightbox');
    const vidEl = document.getElementById('lightbox-video');
    if (vidEl) vidEl.pause();
    if (backdrop) backdrop.classList.remove('open');
    document.body.classList.remove('sheet-open');
  }

  /* --------------------------------------------------------------------------
     VIEW ROUTER (hash based, one view on screen at a time)
     -------------------------------------------------------------------------- */
  function viewFromHash() {
    const h = (location.hash || '').replace('#', '');
    if (VIEWS.includes(h)) return h;
    if (LEGACY_ANCHORS[h]) return LEGACY_ANCHORS[h];
    return 'overview';
  }

  function showView(view, opts) {
    const next = VIEWS.includes(view) ? view : 'overview';
    state.view = next;
    document.querySelectorAll('[data-view]').forEach((sec) => {
      sec.hidden = sec.getAttribute('data-view') !== next;
    });
    document.querySelectorAll('.tab[data-view-link]').forEach((t) => {
      if (t.getAttribute('data-view-link') === next) t.setAttribute('aria-current', 'page');
      else t.removeAttribute('aria-current');
    });
    document.body.classList.remove('appbar-hidden');
    if (!opts || opts.scroll !== false) window.scrollTo({ top: 0, behavior: 'auto' });
    updateScrollProgress();
  }

  function navigate(view) {
    if (location.hash !== `#${view}`) {
      history.pushState(null, '', `#${view}`);
    }
    showView(view);
  }

  /* --------------------------------------------------------------------------
     1. TEACHING SYSTEMS (horizontal rail)
     -------------------------------------------------------------------------- */
  function renderSystemsComparison() {
    const container = document.getElementById('systems-matrix-container');
    if (!container) return;
    const systems = getCurriculum().systemsComparison || [];

    container.innerHTML = systems
      .map(
        (sys) => `
      <article class="system-card">
        <div class="system-card-header">
          <span class="system-org">${sys.code || sys.org || sys.id}</span>
          <span class="system-country">${sys.country || sys.region || ''}</span>
        </div>
        <span class="system-full">${sys.fullName || ''}</span>
        <p class="system-philosophy">${sys.philosophy || sys.tagline || ''}</p>
        <ul class="system-list">
          ${(sys.corePillars || sys.highlights || []).slice(0, 3).map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <p class="fine">原稿描述，未取得機構確認。</p>
      </article>`
      )
      .join('');
  }

  /* --------------------------------------------------------------------------
     2. CURRICULUM: sticky module rail + one module at a time
     -------------------------------------------------------------------------- */
  function filteredModules() {
    const modules = getCurriculum().modules || [];
    if (!state.searchQuery) return modules;
    const q = state.searchQuery.toLowerCase();
    return modules.filter((m) => JSON.stringify(m).toLowerCase().includes(q));
  }

  function shortTitle(title) {
    const t = String(title || '');
    const cut = t.split(/[：:、，,（(]/)[0];
    return cut.length > 12 ? `${cut.slice(0, 12)}…` : cut;
  }

  function renderModuleSidebar() {
    const sidebar = document.getElementById('module-sidebar-nav');
    if (!sidebar) return;
    const filtered = filteredModules();

    if (filtered.length > 0 && !filtered.some((m) => (m.code || m.id) === state.activeModuleId)) {
      state.activeModuleId = filtered[0].code || filtered[0].id;
    }

    if (!filtered.length) {
      sidebar.innerHTML = `<p class="rail-empty">找不到「${attr(state.searchQuery)}」相關模組。</p>`;
      return;
    }

    sidebar.innerHTML = filtered
      .map((mod) => {
        const modKey = mod.code || mod.id;
        const isActive = modKey === state.activeModuleId;
        return `
        <button type="button" class="module-tab-btn ${isActive ? 'active' : ''}" data-mod-id="${modKey}" aria-pressed="${isActive}" title="${attr(mod.title)}">
          <span class="module-tab-code">${String(modKey).replace('MOD-', '')}</span>
          <span class="module-tab-title">${shortTitle(mod.title)}</span>
        </button>`;
      })
      .join('');

    sidebar.querySelectorAll('.module-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeModuleId = btn.getAttribute('data-mod-id');
        renderModuleSidebar();
        renderActiveModuleDetail();
        const mod = (getCurriculum().modules || []).find((m) => (m.code || m.id) === state.activeModuleId);
        if (mod && mod.animationMode && window.SBSimulators && window.SBSimulators.setPlayerMode) {
          window.SBSimulators.setPlayerMode(mod.animationMode);
        }
        const section = document.getElementById('curriculum-section');
        const rail = document.getElementById('module-sidebar-nav');
        if (section && rail && window.scrollY > rail.offsetTop) {
          window.scrollTo({ top: rail.offsetTop - 1, behavior: 'smooth' });
        }
      });
    });

    const active = sidebar.querySelector('.module-tab-btn.active');
    // Horizontal-only centring: scrollIntoView would also move the page vertically.
    if (active) sidebar.scrollLeft = active.offsetLeft - (sidebar.clientWidth - active.offsetWidth) / 2;
  }

  function renderPrinciple(p, pIdx, mod, mNum) {
    const mediaId = p.mediaId || `p_${mNum}_${pad2(pIdx + 1)}`;
    const title = p.title || p.name;
    return `
      <details class="acc">
        <summary>
          <span class="acc-idx">${pad2(pIdx + 1)}</span>
          <span class="acc-title">${title}<small>原稿主張 · 數值待核實</small></span>
          ${chevron}
        </summary>
        <div class="acc-body">
          ${p.formula ? `<div class="formula">${p.formula}</div>` : ''}
          ${toPoints(p.explanation || p.description)}
          <div class="media-block-wrap" style="margin-top:16px">
            ${buildMediaBlock([repoSource('原稿', mediaId, p.image, p.video)], title)}
          </div>
        </div>
      </details>`;
  }

  function renderSkill(skill, idx, mod, mNum) {
    const sNum = pad2(idx + 1);
    const mainId = skill.mediaId || `s_${mNum}_${sNum}`;
    const stepId = skill.stepMediaId || `step_${mNum}_${sNum}`;
    const errId = skill.errMediaId || `err_${mNum}_${sNum}`;
    const bio = skill.biomechanics || {};
    const err = skill.commonErrors || {};
    const uid = `sk-${mNum}-${sNum}`;

    const bioHtml = typeof bio === 'string'
      ? toPoints(bio)
      : `<dl class="kv">
          ${bio.comBos ? `<div><dt>COM / BOS 重心與底面積</dt><dd>${bio.comBos}</dd></div>` : ''}
          ${bio.jointAngles ? `<div><dt>踝／膝／髖關節角度</dt><dd>${bio.jointAngles}</dd></div>` : ''}
          ${bio.weightDistribution || bio.foreAft ? `<div><dt>前後與側向配重</dt><dd>${bio.weightDistribution || bio.foreAft}</dd></div>` : ''}
          ${bio.edgeControl ? `<div><dt>鋼邊與板性控制</dt><dd>${bio.edgeControl}</dd></div>` : ''}
        </dl>`;

    const stepsHtml = `<ol class="steps">${(skill.stepByStep || []).map((s) => `<li>${s}</li>`).join('')}</ol>`;

    const errHtml = typeof err === 'string'
      ? `<div class="callout"><p>${err}</p></div>`
      : `
        ${err.symptom ? `<div class="callout err"><h5>錯誤徵兆（原稿，待核實）</h5><p>${err.symptom}</p></div>` : ''}
        ${err.rootCause ? `<div class="callout"><h5>原稿提出的原因（待核實）</h5><p>${err.rootCause}</p></div>` : ''}
        ${err.correctiveDrill || err.fix ? `<div class="callout fix"><h5>原稿練習提案（待教練核准）</h5><p>${err.correctiveDrill || err.fix}</p></div>` : ''}
        ${skill.expertMindset ? `<div class="callout"><h5>原稿提示（待來源與教練核實）</h5><p>${skill.expertMindset}</p></div>` : ''}`;

    const media = buildMediaBlock(
      withAiSample(mainId, [
        repoSource('全貌', mainId, skill.image, skill.video),
        repoSource('步驟', stepId, skill.stepImage, skill.stepVideo),
        repoSource('正誤', errId, skill.errImage, skill.errVideo)
      ]),
      skill.name
    );

    const hasAi = Boolean(AI_SAMPLES[mainId]);
    return `
      <details class="acc skill-acc">
        <summary>
          <span class="acc-idx">${sNum}</span>
          <span class="acc-title">${skill.name}<small>${[skill.level, hasAi ? 'AI 示範樣片' : ''].filter(Boolean).join(' · ')}</small></span>
          ${chevron}
        </summary>
        <div class="acc-body">
          ${media}
          <div class="segmented small" role="tablist" aria-label="技能內容" style="margin-top:18px">
            <button type="button" role="tab" aria-selected="true" data-skill-tab="${uid}" data-pane="steps">步驟</button>
            <button type="button" role="tab" aria-selected="false" data-skill-tab="${uid}" data-pane="bio">力學要點</button>
            <button type="button" role="tab" aria-selected="false" data-skill-tab="${uid}" data-pane="err">錯誤修正</button>
          </div>
          <div data-skill-pane="${uid}" data-pane="steps">${stepsHtml}</div>
          <div data-skill-pane="${uid}" data-pane="bio" hidden>${bioHtml}</div>
          <div data-skill-pane="${uid}" data-pane="err" hidden>${errHtml}</div>
          ${skill.casiAasiRef ? `<p class="fine" style="margin-top:14px">原稿機構對照（未核實）：${skill.casiAasiRef}</p>` : ''}
        </div>
      </details>`;
  }

  function renderActiveModuleDetail() {
    const pane = document.getElementById('module-detail-content');
    if (!pane) return;
    const modules = getCurriculum().modules || [];
    if (state.searchQuery && !filteredModules().length) {
      pane.innerHTML = '<p class="fine">請換個關鍵字，或清除搜尋。</p>';
      return;
    }
    let modIdx = modules.findIndex((m) => (m.code || m.id) === state.activeModuleId);
    if (modIdx < 0) modIdx = 0;
    const mod = modules[modIdx];
    if (!mod) {
      pane.innerHTML = '<p class="fine">載入課程模組中…</p>';
      return;
    }

    const mNum = pad2(modIdx + 1);
    const principles = mod.physicsPrinciples || [];
    const skills = mod.coreSkills || [];
    const tab = state.moduleTab;

    pane.innerHTML = `
      <header class="module-head">
        <div>
          <div class="module-meta">
            <span>${mod.code || mod.id}</span>
            <span>${mod.difficulty || ''}</span>
          </div>
          <h3 class="module-title">${mod.title}</h3>
          ${mod.subtitle ? `<p class="module-subtitle">${mod.subtitle}</p>` : ''}
          <p class="module-summary" id="module-summary" style="margin-top:10px">${mod.summary || ''}</p>
          <button type="button" class="text-btn" id="btn-module-summary" aria-expanded="false" aria-controls="module-summary">展開全文</button>
        </div>
      </header>

      <p class="inline-note" role="note">本模組為 repo 原稿；公式、數值、動作與機構標籤未逐項核驗，不構成教練、安全或醫療指引。請勿只依本頁嘗試高風險動作。</p>

      <div class="segmented" role="tablist" aria-label="模組內容" style="margin-top:22px">
        <button type="button" role="tab" aria-selected="${tab === 'skills'}" data-module-tab="skills">技術動作 · ${skills.length}</button>
        <button type="button" role="tab" aria-selected="${tab === 'principles'}" data-module-tab="principles">原理 · ${principles.length}</button>
      </div>

      <div data-module-pane="skills" ${tab === 'skills' ? '' : 'hidden'}>
        ${skills.map((s, i) => renderSkill(s, i, mod, mNum)).join('')}
      </div>
      <div data-module-pane="principles" ${tab === 'principles' ? '' : 'hidden'}>
        ${principles.map((p, i) => renderPrinciple(p, i, mod, mNum)).join('')}
      </div>
      ${mod.systemsRef ? `<p class="fine" style="margin-top:18px">原稿機構對照（未核實）：${mod.systemsRef}</p>` : ''}
    `;

    const summaryBtn = pane.querySelector('#btn-module-summary');
    const summary = pane.querySelector('#module-summary');
    if (summaryBtn && summary) {
      if (String(mod.summary || '').length < 80) summaryBtn.hidden = true;
      summaryBtn.addEventListener('click', () => {
        const open = summary.classList.toggle('expanded');
        summaryBtn.textContent = open ? '收合' : '展開全文';
        summaryBtn.setAttribute('aria-expanded', String(open));
      });
    }

    pane.querySelectorAll('[data-module-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.moduleTab = btn.getAttribute('data-module-tab');
        pane.querySelectorAll('[data-module-tab]').forEach((b) => b.setAttribute('aria-selected', String(b === btn)));
        pane.querySelectorAll('[data-module-pane]').forEach((p) => {
          p.hidden = p.getAttribute('data-module-pane') !== state.moduleTab;
        });
      });
    });

    bindSkillTabs(pane);
    bindAccordionVideoPause(pane);
    bindMediaInteractions(pane);

    // First skill opens by default so the module never looks empty.
    const firstAcc = pane.querySelector(`[data-module-pane="${tab}"] details.acc`);
    if (firstAcc) firstAcc.open = true;
  }

  function bindSkillTabs(root) {
    root.querySelectorAll('[data-skill-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const uid = btn.getAttribute('data-skill-tab');
        const target = btn.getAttribute('data-pane');
        root.querySelectorAll(`[data-skill-tab="${uid}"]`).forEach((b) => b.setAttribute('aria-selected', String(b === btn)));
        root.querySelectorAll(`[data-skill-pane="${uid}"]`).forEach((p) => {
          p.hidden = p.getAttribute('data-pane') !== target;
        });
      });
    });
  }

  function bindAccordionVideoPause(root) {
    root.querySelectorAll('details.acc').forEach((d) => {
      d.addEventListener('toggle', () => {
        if (!d.open) d.querySelectorAll('video').forEach((v) => v.pause());
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. GROUND TRICKS: chip filter + combo rail + one combo detail
     -------------------------------------------------------------------------- */
  function renderGroundTrickBuilder() {
    const matrix = getCurriculum().groundTrickComboMatrix;
    if (!matrix) return;

    const atomicContainer = document.getElementById('atomic-skills-grid');
    const atomicDetail = document.getElementById('atomic-skill-detail');
    const comboListContainer = document.getElementById('combo-selector-list');
    const comboDetailContainer = document.getElementById('combo-detail-stage');
    const atomics = matrix.atomicSkills || [];

    if (atomicContainer) {
      atomicContainer.innerHTML = `
        <button type="button" class="atomic-card ${state.selectedAtomicSkillId ? '' : 'selected'}" data-atomic-id="" aria-pressed="${!state.selectedAtomicSkillId}">全部</button>
        ${atomics
          .map((sk, idx) => {
            const key = sk.id || sk.name;
            const isSel = state.selectedAtomicSkillId === key;
            return `<button type="button" class="atomic-card ${isSel ? 'selected' : ''}" data-atomic-id="${attr(key)}" aria-pressed="${isSel}">
              <span class="n">${pad2(idx + 1)}</span>${key}</button>`;
          })
          .join('')}`;

      atomicContainer.querySelectorAll('.atomic-card').forEach((card) => {
        card.addEventListener('click', () => {
          const clickedId = card.getAttribute('data-atomic-id') || null;
          state.selectedAtomicSkillId = state.selectedAtomicSkillId === clickedId ? null : clickedId;
          state.activeComboIndex = 0;
          renderGroundTrickBuilder();
        });
      });
    }

    if (atomicDetail) {
      const idx = atomics.findIndex((a) => (a.id || a.name) === state.selectedAtomicSkillId);
      const sk = atomics[idx];
      if (sk) {
        const mediaId = sk.mediaId || `atomic_${pad2(idx + 1)}`;
        atomicDetail.innerHTML = `
          <h4>${sk.name}</h4>
          <dl class="kv">
            ${sk.category ? `<div><dt>類別</dt><dd>${sk.category}</dd></div>` : ''}
            ${sk.comPosition ? `<div><dt>重心位置（原稿）</dt><dd>${sk.comPosition}</dd></div>` : ''}
            ${sk.proficiency ? `<div><dt>建議程度（原稿）</dt><dd>${sk.proficiency}</dd></div>` : ''}
          </dl>
          ${toPoints(sk.biomechanics || sk.description)}
          <div style="margin-top:14px">${buildMediaBlock([repoSource('原稿', mediaId, sk.image, sk.video)], sk.name)}</div>`;
        bindMediaInteractions(atomicDetail);
      } else {
        atomicDetail.innerHTML = '';
      }
    }

    const allCombos = matrix.combos || [];
    const filteredCombos = state.selectedAtomicSkillId
      ? allCombos.filter((c) => JSON.stringify(c).toLowerCase().includes(state.selectedAtomicSkillId.toLowerCase()))
      : allCombos;
    const activeList = filteredCombos.length > 0 ? filteredCombos : allCombos;
    if (state.activeComboIndex >= activeList.length) state.activeComboIndex = 0;

    if (comboListContainer) {
      comboListContainer.innerHTML = activeList
        .map((c, idx) => {
          const origIdx = allCombos.findIndex((orig) => orig.id === c.id);
          const cNum = pad2((origIdx >= 0 ? origIdx : idx) + 1);
          const thumb = c.image || `assets/media/images/combo_${cNum}.jpg`;
          return `
          <button type="button" class="combo-item-btn ${idx === state.activeComboIndex ? 'active' : ''}" data-combo-idx="${idx}" aria-pressed="${idx === state.activeComboIndex}">
            <img src="${attr(thumb)}" alt="" loading="lazy" />
            <span class="meta">${cNum} · ${c.difficulty || c.level || ''}</span>
            <span class="name">${c.name}</span>
          </button>`;
        })
        .join('');

      comboListContainer.querySelectorAll('.combo-item-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          state.activeComboIndex = parseInt(btn.getAttribute('data-combo-idx'), 10);
          renderGroundTrickBuilder();
          const stage = document.getElementById('combo-detail-stage');
          if (stage) stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }

    const activeCombo = activeList[state.activeComboIndex];
    if (comboDetailContainer && activeCombo) {
      const origIdx = allCombos.findIndex((orig) => orig.id === activeCombo.id);
      const cNum = pad2((origIdx >= 0 ? origIdx : state.activeComboIndex) + 1);
      const phases = activeCombo.phases || [];
      const uid = `cb-${cNum}`;

      comboDetailContainer.innerHTML = `
        <article class="combo-detail">
          <p class="kicker">${activeCombo.id || 'COMBO'} · ${activeCombo.difficulty || ''}</p>
          <h4>${activeCombo.name}</h4>
          <p class="combo-formula">${activeCombo.formula || (activeCombo.atomicComponents || []).join(' → ')}</p>

          ${buildMediaBlock(
            [
              repoSource('全貌', activeCombo.mediaId || `combo_${cNum}`, activeCombo.image, activeCombo.video),
              repoSource('分段', activeCombo.stepMediaId || `combo_step_${cNum}`, activeCombo.stepImage, activeCombo.stepVideo),
              repoSource('正誤', activeCombo.errMediaId || `combo_err_${cNum}`, activeCombo.errImage, activeCombo.errVideo)
            ],
            activeCombo.name
          )}

          <h5 class="sub-title">分段拆解 · 左右滑動</h5>
          <div class="rail phase-rail">
            ${phases
              .map(
                (ph, idx) => `
              <div class="phase-step-card">
                <span class="ph-n">PHASE ${pad2(idx + 1)}</span>
                <span class="ph-t">${ph.phase || ph.title || ph.name || ''}</span>
                <p>${ph.action || ph.detail || ph.description || ''}</p>
                <div class="ph-kv">
                  ${ph.com ? `<span>重心</span><b>${ph.com}</b>` : ''}
                  ${ph.edge ? `<span>用刃</span><b>${ph.edge}</b>` : ''}
                </div>
              </div>`
              )
              .join('')}
          </div>

          <div class="segmented small" role="tablist" aria-label="招式要點" style="margin-top:10px">
            <button type="button" role="tab" aria-selected="true" data-skill-tab="${uid}" data-pane="path">重心與用刃</button>
            <button type="button" role="tab" aria-selected="false" data-skill-tab="${uid}" data-pane="fail">失敗點與提示</button>
          </div>
          <div data-skill-pane="${uid}" data-pane="path">
            <dl class="kv">
              ${activeCombo.comSummary ? `<div><dt>重心轉移（原稿）</dt><dd>${activeCombo.comSummary}</dd></div>` : ''}
              ${activeCombo.edgeLogic ? `<div><dt>鋼邊切換（原稿）</dt><dd>${activeCombo.edgeLogic}</dd></div>` : ''}
              ${activeCombo.torsionAngle ? `<div><dt>上下半身反擰（原稿）</dt><dd>${activeCombo.torsionAngle}</dd></div>` : ''}
            </dl>
          </div>
          <div data-skill-pane="${uid}" data-pane="fail" hidden>
            ${activeCombo.failureMode || activeCombo.commonMistake ? `<div class="callout err"><h5>失敗卡刃點（原稿，待核實）</h5><p>${activeCombo.failureMode || activeCombo.commonMistake}</p></div>` : ''}
            ${activeCombo.expertTip || activeCombo.mindset ? `<div class="callout"><h5>原稿提示（待教練核實）</h5><p>${activeCombo.expertTip || activeCombo.mindset}</p></div>` : ''}
          </div>

          <button type="button" class="btn btn-ghost" id="btn-trigger-groundtrick-sim">在實驗室播放模擬動畫</button>
        </article>`;

      bindSkillTabs(comboDetailContainer);
      bindMediaInteractions(comboDetailContainer);

      const simBtn = document.getElementById('btn-trigger-groundtrick-sim');
      if (simBtn) {
        simBtn.addEventListener('click', () => {
          if (window.SBSimulators && window.SBSimulators.setPlayerMode) {
            window.SBSimulators.setPlayerMode('ground_trick_owen');
          }
          setLabTab('player');
          navigate('lab');
        });
      }
    }
  }

  /* --------------------------------------------------------------------------
     4. EXPERT ROSTER (kept hidden in markup; identities are unverified)
     -------------------------------------------------------------------------- */
  function renderExpertsAuditBoard() {
    const filterBar = document.getElementById('expert-panel-filters');
    const grid = document.getElementById('experts-audit-grid');
    if (!grid) return;

    const experts = getCurriculum().experts50 || [];
    const groups = ['ALL', ...Array.from(new Set(experts.map((e) => e.panel || e.group || 'Coaching')))];

    if (filterBar) {
      filterBar.innerHTML = groups
        .map(
          (g) => `
        <button class="pill-btn ${state.expertPanelFilter === g ? 'active' : ''}" data-panel-group="${g}">
          ${g === 'ALL' ? `全部 ${experts.length} 筆名冊資料（身分未核實）` : g}
        </button>
      `
        )
        .join('');

      filterBar.querySelectorAll('.pill-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          state.expertPanelFilter = btn.getAttribute('data-panel-group');
          renderExpertsAuditBoard();
        });
      });
    }

    const filtered = experts.filter(
      (e) => state.expertPanelFilter === 'ALL' || (e.panel || e.group) === state.expertPanelFilter
    );

    grid.innerHTML = filtered
      .map(
        (ex, i) => `
      <article class="expert-card">
        <div class="expert-header">
          <span class="expert-id">${ex.id || `EXP-${String(i + 1).padStart(2, '0')}`}</span>
          <span class="expert-status expert-status-unverified">⚠ 人員身分、教材與媒體驗收未獨立核實</span>
        </div>
        <div class="expert-name">${ex.name}</div>
        <div class="expert-role">${ex.title || ex.role} · ${ex.certification || ex.specialty || ''}</div>
        <div class="expert-audit-note">
          <strong style="color:var(--orange-400);">原始資料自述（未獨立核實）：</strong><br/>
          ${ex.auditFinding || ex.reviewNote || ex.correction || ''}
        </div>
      </article>
    `
      )
      .join('');
  }

  /* --------------------------------------------------------------------------
     5. LAB TABS
     -------------------------------------------------------------------------- */
  function setLabTab(name) {
    document.querySelectorAll('[data-lab-tab]').forEach((b) => b.setAttribute('aria-selected', String(b.getAttribute('data-lab-tab') === name)));
    document.querySelectorAll('[data-lab-panel]').forEach((p) => {
      p.hidden = p.getAttribute('data-lab-panel') !== name;
    });
  }

  /* --------------------------------------------------------------------------
     6. UI EVENTS: nav, search, theme, lightbox, scroll behaviour
     -------------------------------------------------------------------------- */
  function updateScrollProgress() {
    const progressEl = document.getElementById('scroll-progress');
    if (!progressEl) return;
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressEl.style.width = (height > 0 ? (winScroll / height) * 100 : 0) + '%';
  }

  function initUIEvents() {
    document.querySelectorAll('[data-view-link]').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        navigate(a.getAttribute('data-view-link'));
      });
    });
    window.addEventListener('popstate', () => showView(viewFromHash()));
    window.addEventListener('hashchange', () => showView(viewFromHash()));

    document.querySelectorAll('[data-lab-tab]').forEach((b) => {
      b.addEventListener('click', () => setLabTab(b.getAttribute('data-lab-tab')));
    });

    const searchBtn = document.getElementById('btn-open-search');
    const searchPanel = document.getElementById('search-panel');
    const searchInput = document.getElementById('global-curriculum-search');
    if (searchBtn && searchPanel) {
      searchBtn.addEventListener('click', () => {
        const open = searchPanel.hidden;
        searchPanel.hidden = !open;
        searchBtn.setAttribute('aria-expanded', String(open));
        if (open && searchInput) searchInput.focus();
      });
    }
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        if (state.searchQuery && state.view !== 'curriculum') navigate('curriculum');
        renderModuleSidebar();
        renderActiveModuleDetail();
      });
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') searchInput.blur();
      });
    }

    const themeBtn = document.getElementById('btn-toggle-glare-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        state.snowGlareTheme = !state.snowGlareTheme;
        document.body.classList.toggle('theme-snow-glare', state.snowGlareTheme);
        themeBtn.setAttribute('aria-pressed', String(state.snowGlareTheme));
        themeBtn.setAttribute('aria-label', state.snowGlareTheme ? '切換回深色模式' : '切換雪地強光淺色模式');
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', state.snowGlareTheme ? '#f5f1e8' : '#0f0e0c');
        try { localStorage.setItem('sb-theme', state.snowGlareTheme ? 'glare' : 'dark'); } catch (_) { /* private mode */ }
      });
      try {
        if (localStorage.getItem('sb-theme') === 'glare') themeBtn.click();
      } catch (_) { /* private mode */ }
    }

    const backdrop = document.getElementById('global-media-lightbox');
    const closeBtn = document.getElementById('btn-close-lightbox');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeMediaLightbox();
      });
      bindMediaInteractions(backdrop);
    }
    if (closeBtn) closeBtn.addEventListener('click', closeMediaLightbox);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMediaLightbox();
    });

    const gallery = document.getElementById('gallery-section');
    if (gallery) bindMediaInteractions(gallery);

    // App bar hides while scrolling down, returns on any upward scroll.
    let lastY = window.scrollY;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const searchOpen = searchPanel && !searchPanel.hidden;
        if (!searchOpen) {
          if (y > 120 && y > lastY + 4) document.body.classList.add('appbar-hidden');
          else if (y < lastY - 4 || y < 60) document.body.classList.remove('appbar-hidden');
        }
        lastY = y;
        updateScrollProgress();
        ticking = false;
      });
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     BOOT
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    renderSystemsComparison();
    renderModuleSidebar();
    renderActiveModuleDetail();
    renderGroundTrickBuilder();
    renderExpertsAuditBoard();
    initUIEvents();
    showView(viewFromHash());

    if (window.SBSimulators) {
      if (typeof window.SBSimulators.initMotionPlayer === 'function') {
        window.SBSimulators.initMotionPlayer('motion-video-canvas', 'motion-player-controls');
      }
      if (typeof window.SBSimulators.initBiomechanicsLab === 'function') {
        window.SBSimulators.initBiomechanicsLab('biomech-lab-canvas', 'biomech-lab-controls');
      }
    }
  });
})();
