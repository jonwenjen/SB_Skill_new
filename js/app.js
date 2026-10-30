/**
 * SB_SKILL_NEW — MAIN APPLICATION CONTROLLER
 * Reviewed & Audited by the 50-Expert Interdisciplinary Snowboard Panel
 * Complete Real-Human Continuous Action & Correct-vs-Error Video Integration (204 Images + 204 MP4 Videos)
 */

(function () {
  'use strict';

  const state = {
    activeModuleId: 'MOD-01',
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

  /* --------------------------------------------------------------------------
     HELPER: RENDER DUAL REAL-HUMAN CONTINUOUS SEQUENCE PHOTO + MP4 VIDEO
     WITH MULTI-ANGLE CAMERA SWITCHER & SYNCHRONIZED TEXT CALLOUT HIGHLIGHTS
     -------------------------------------------------------------------------- */
  function buildRealMediaDualBoxHtml(mediaId, title, badgeText, customCaption, keyHighlights) {
    const imgSrc = `assets/media/images/${mediaId}.jpg`;
    const vidSrc = `assets/media/videos/${mediaId}.mp4`;
    const safeTitle = (title || '').replace(/"/g, '&quot;');
    const safeBadge = (badgeText || mediaId).replace(/"/g, '&quot;');
    const photoLabel = customCaption || '📸 多角度真人連續動作與重點標示圖';
    const videoLabel = '🎬 多角度真人連續動作 & ✅正確 vs ❌錯誤 MP4 影片';

    const highlightsArr = Array.isArray(keyHighlights) && keyHighlights.length > 0
      ? keyHighlights.filter(Boolean).slice(0, 3)
      : [];

    const highlightsHtml = highlightsArr.length > 0
      ? `
        <div class="media-sync-highlights" style="grid-column: 1 / -1; display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:0.45rem; padding:0.55rem 0.75rem; background:rgba(7,13,25,0.88); border-top:1px solid var(--border-subtle); font-size:0.76rem;">
          ${highlightsArr.map((h, i) => {
            const colors = ['var(--cyan-400)', 'var(--emerald-400)', 'var(--orange-400)'];
            return `<div style="display:flex; align-items:flex-start; gap:0.35rem; color:var(--text-secondary); line-height:1.35;">
              <strong style="color:${colors[i % 3]}; white-space:nowrap; font-family:var(--font-mono);">📌 重點${i + 1}:</strong>
              <span>${h}</span>
            </div>`;
          }).join('')}
        </div>
      `
      : '';

    return `
      <div class="real-media-dual-box" data-media-id="${mediaId}">
        <!-- Left Slot: Multi-Angle Real-Human Continuous Action & Callout Overview Image -->
        <div class="media-slot">
          <div class="media-slot-header">
            <span>${photoLabel}</span>
            <button
              type="button"
              class="zoom-mini-btn"
              data-lightbox-img="${imgSrc}"
              data-lightbox-vid="${vidSrc}"
              data-lightbox-title="${safeTitle}"
              data-lightbox-badge="${safeBadge}"
            >
              🔍 全螢幕檢視
            </button>
          </div>
          <img
            class="real-human-img"
            src="${imgSrc}"
            alt="${safeTitle} — 多角度真人連續動作與重點標示圖"
            loading="lazy"
            data-lightbox-img="${imgSrc}"
            data-lightbox-vid="${vidSrc}"
            data-lightbox-title="${safeTitle}"
            data-lightbox-badge="${safeBadge}"
          />
        </div>

        <!-- Right Slot: Playable Multi-Angle Real-Human Continuous Motion + Correct vs Error MP4 Video -->
        <div class="media-slot">
          <div class="media-slot-header video-hdr">
            <span>${videoLabel}</span>
            <div class="media-speed-bar">
              <button type="button" class="speed-mini-btn" data-vid-speed="0.25" data-target-vid="vid-${mediaId}">0.25x 極慢</button>
              <button type="button" class="speed-mini-btn" data-vid-speed="0.5" data-target-vid="vid-${mediaId}">0.5x 慢速</button>
              <button type="button" class="speed-mini-btn active" data-vid-speed="1.0" data-target-vid="vid-${mediaId}">1.0x 原速</button>
            </div>
          </div>
          <video
            id="vid-${mediaId}"
            class="real-human-video"
            src="${vidSrc}"
            poster="${imgSrc}"
            controls
            loop
            muted
            playsinline
            preload="metadata"
          ></video>
          <div class="media-angle-bar" style="display:flex; flex-wrap:wrap; gap:0.35rem; padding:0.4rem 0.6rem; background:rgba(15,23,42,0.92); border-top:1px solid var(--border-subtle); align-items:center; justify-content:space-between;">
            <span style="font-family:var(--font-mono); font-size:0.68rem; color:var(--text-muted);">切換視角：</span>
            <div style="display:flex; gap:0.3rem; flex-wrap:wrap;">
              <button type="button" class="angle-seek-btn speed-mini-btn active" data-vid-seek="0.08" data-target-vid="vid-${mediaId}">🎥 鏡頭1 廣角跟拍</button>
              <button type="button" class="angle-seek-btn speed-mini-btn" data-vid-seek="1.45" data-target-vid="vid-${mediaId}">🎥 鏡頭2 特寫+俯視軌跡</button>
              <button type="button" class="angle-seek-btn speed-mini-btn" data-vid-seek="2.75" data-target-vid="vid-${mediaId}">🎥 鏡頭3 ✅正確vs❌錯誤</button>
            </div>
          </div>
        </div>
        ${highlightsHtml}
      </div>
    `;
  }

  /* --------------------------------------------------------------------------
     BIND VIDEO SPEED CONTROLS, ANGLE SEEKERS & LIGHTBOX TRIGGERS
     -------------------------------------------------------------------------- */
  function bindMediaInteractions(container) {
    if (!container) return;

    container.querySelectorAll('.speed-mini-btn[data-vid-speed]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const speed = parseFloat(btn.getAttribute('data-vid-speed')) || 1.0;
        const vidId = btn.getAttribute('data-target-vid');
        const vidEl = document.getElementById(vidId);
        if (vidEl) {
          vidEl.playbackRate = speed;
          vidEl.play().catch(() => {});
        }
        const bar = btn.parentElement;
        if (bar) {
          bar.querySelectorAll('.speed-mini-btn[data-vid-speed]').forEach((b) => b.classList.remove('active'));
        }
        btn.classList.add('active');
      });
    });

    container.querySelectorAll('.angle-seek-btn[data-vid-seek]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const seekSec = parseFloat(btn.getAttribute('data-vid-seek')) || 0;
        const vidId = btn.getAttribute('data-target-vid');
        const vidEl = document.getElementById(vidId);
        if (vidEl) {
          vidEl.currentTime = seekSec;
          vidEl.play().catch(() => {});
        }
        const bar = btn.parentElement;
        if (bar) {
          bar.querySelectorAll('.angle-seek-btn').forEach((b) => b.classList.remove('active'));
        }
        btn.classList.add('active');
      });
    });

    container.querySelectorAll('[data-lightbox-img]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const imgSrc = el.getAttribute('data-lightbox-img');
        const vidSrc = el.getAttribute('data-lightbox-vid');
        const title = el.getAttribute('data-lightbox-title');
        const badge = el.getAttribute('data-lightbox-badge');
        openMediaLightbox(imgSrc, vidSrc, title, badge);
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
    if (badgeEl) badgeEl.textContent = badge || 'REAL-HUMAN CONTINUOUS MOTION';
    if (imgEl) imgEl.src = imgSrc || '';
    if (vidEl) {
      vidEl.src = vidSrc || '';
      vidEl.poster = imgSrc || '';
      vidEl.playbackRate = 0.5;
      vidEl.play().catch(() => {});
    }
    backdrop.classList.add('open');
  }

  /* --------------------------------------------------------------------------
     1. RENDER INTERNATIONAL CERTIFICATION SYSTEMS MATRIX (CASI/AASI/SBINZ/JSBA/BASI)
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
          <div>
            <div class="system-org">${sys.code || sys.org || sys.id}</div>
            <div style="font-size:0.78rem; color:var(--text-muted); font-weight:600;">${sys.fullName || ''}</div>
          </div>
          <span class="system-country">${sys.country || sys.region || ''}</span>
        </div>
        <p style="font-size:0.88rem; color:var(--text-primary); font-weight:600;">
          ${sys.philosophy || sys.tagline || ''}
        </p>
        <ul class="system-list">
          ${(sys.corePillars || sys.highlights || [])
            .map((item) => `<li>${item}</li>`)
            .join('')}
        </ul>
        ${
          sys.technicalFocus
            ? `<div style="margin-top:auto; padding-top:0.75rem; border-top:1px solid var(--border-subtle); font-size:0.8rem; color:var(--cyan-400); font-family:var(--font-mono);">
                <strong>技術核心：</strong>${sys.technicalFocus}
              </div>`
            : ''
        }
      </article>
    `
      )
      .join('');
  }

  /* --------------------------------------------------------------------------
     2. RENDER 10 COMPREHENSIVE MODULES SIDEBAR & DETAIL VIEW
     -------------------------------------------------------------------------- */
  function renderModuleSidebar() {
    const sidebar = document.getElementById('module-sidebar-nav');
    if (!sidebar) return;
    const modules = getCurriculum().modules || [];

    const filtered = modules.filter((m) => {
      if (!state.searchQuery) return true;
      const q = state.searchQuery.toLowerCase();
      const blob = JSON.stringify(m).toLowerCase();
      return blob.includes(q);
    });

    if (filtered.length > 0 && !filtered.some((m) => (m.code || m.id) === state.activeModuleId)) {
      state.activeModuleId = filtered[0].code || filtered[0].id;
    }

    sidebar.innerHTML = filtered
      .map((mod) => {
        const modKey = mod.code || mod.id;
        const isActive = modKey === state.activeModuleId;
        return `
        <button class="module-tab-btn ${isActive ? 'active' : ''}" data-mod-id="${modKey}">
          <div class="module-tab-code">
            <span>${mod.code || mod.id}</span>
            <span style="color:var(--orange-400);">${mod.difficulty || mod.badge || ''}</span>
          </div>
          <div class="module-tab-title">${mod.title}</div>
        </button>
      `;
      })
      .join('');

    sidebar.querySelectorAll('.module-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeModuleId = btn.getAttribute('data-mod-id');
        renderModuleSidebar();
        renderActiveModuleDetail();
        const mod = (getCurriculum().modules || []).find(
          (m) => (m.code || m.id) === state.activeModuleId
        );
        if (mod && mod.animationMode && window.SBSimulators && window.SBSimulators.setPlayerMode) {
          window.SBSimulators.setPlayerMode(mod.animationMode);
        }
      });
    });
  }

  function renderActiveModuleDetail() {
    const pane = document.getElementById('module-detail-content');
    if (!pane) return;
    const modules = getCurriculum().modules || [];
    let modIdx = modules.findIndex((m) => (m.code || m.id) === state.activeModuleId);
    if (modIdx < 0) modIdx = 0;
    const mod = modules[modIdx];

    if (!mod) {
      pane.innerHTML = `<p>載入課程模組中...</p>`;
      return;
    }

    const mNum = String(modIdx + 1).padStart(2, '0');
    const modHeroImg = `assets/media/images/s_${mNum}_01.jpg`;

    const principlesHtml = (mod.physicsPrinciples || [])
      .map((p, pIdx) => {
        const pNum = String(pIdx + 1).padStart(2, '0');
        const mediaId = `p_${mNum}_${pNum}`;
        const badgeLabel = `${mod.code || mod.id} · PRINCIPLE 0${pIdx + 1}`;
        const pSents = String(p.explanation || p.description || '').split(/[。；！？]+/).filter(Boolean);
        return `
        <div class="principle-card">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
            <span class="tag-badge" style="font-size:0.68rem;">${badgeLabel}</span>
            <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--emerald-400);">✓ 50人教練團審核：多角度真人連續動作 + 文字重點標示</span>
          </div>
          <div style="font-weight:800; font-size:1.05rem; color:var(--text-primary);">${p.title || p.name}</div>
          ${p.formula ? `<div class="principle-formula">${p.formula}</div>` : ''}
          <p style="font-size:0.88rem; color:var(--text-secondary);">${p.explanation || p.description || ''}</p>
          ${buildRealMediaDualBoxHtml(
            mediaId,
            p.title || p.name,
            badgeLabel,
            '📸 多角度真人連續動作 & 文字講解重點標示圖',
            [
              p.formula || p.title,
              pSents[0] || p.title,
              pSents[1] || pSents[0] || 'COM 穿過 BOS 維持動態平衡'
            ]
          )}
        </div>
      `;
      })
      .join('');

    const skillsHtml = (mod.coreSkills || [])
      .map((skill, idx) => {
        const sNum = String(idx + 1).padStart(2, '0');
        const mainMediaId = `s_${mNum}_${sNum}`;
        const stepMediaId = `step_${mNum}_${sNum}`;
        const errMediaId = `err_${mNum}_${sNum}`;
        const badgeLabel = `${mod.code || mod.id} · SKILL 0${idx + 1}`;

        const bio = skill.biomechanics || {};
        const bioText =
          typeof bio === 'string'
            ? bio
            : `
              <ul class="system-list">
                ${bio.comBos ? `<li><strong>COM / BOS 重心與底面積：</strong>${bio.comBos}</li>` : ''}
                ${bio.jointAngles ? `<li><strong>踝/膝/髖關節角度：</strong>${bio.jointAngles}</li>` : ''}
                ${bio.weightDistribution || bio.foreAft ? `<li><strong>前後與側向配重比：</strong>${bio.weightDistribution || bio.foreAft}</li>` : ''}
                ${bio.edgeControl ? `<li><strong>鋼邊與板性控制：</strong>${bio.edgeControl}</li>` : ''}
              </ul>
            `;

        const stepsHtml = (skill.stepByStep || [])
          .map(
            (s, i) =>
              `<li style="margin-bottom:0.45rem;"><strong>Step ${i + 1}:</strong> ${s}</li>`
          )
          .join('');

        const err = skill.commonErrors || {};
        const errHtml =
          typeof err === 'string'
            ? `<p>${err}</p>`
            : `
              <div style="font-size:0.87rem;">
                <p><strong style="color:var(--crimson-400);">⚠️ 常見錯誤徵兆 (Symptom)：</strong>${err.symptom || ''}</p>
                <p style="margin-top:0.3rem;"><strong style="color:var(--orange-400);">🔬 物理力學根因 (Root Cause)：</strong>${err.rootCause || ''}</p>
                <p style="margin-top:0.3rem;"><strong style="color:var(--emerald-400);">✅ 專家修正訓練 (Corrective Drill)：</strong>${err.correctiveDrill || err.fix || ''}</p>
              </div>
            `;

        return `
        <div class="skill-card">
          <div class="skill-header">
            <div>
              <span class="tag-badge" style="margin-right:0.5rem;">SKILL 0${idx + 1}</span>
              <span class="skill-title">${skill.name}</span>
            </div>
            <div style="display:flex; gap:0.45rem; flex-wrap:wrap;">
              ${skill.level ? `<span class="tag-badge orange">${skill.level}</span>` : ''}
              ${skill.casiAasiRef ? `<span class="tag-badge emerald">${skill.casiAasiRef}</span>` : ''}
            </div>
          </div>

          <!-- 1. Main Skill Continuous Human Motion Demonstration -->
          <div style="margin-bottom:1.2rem;">
            ${buildRealMediaDualBoxHtml(
              mainMediaId,
              skill.name,
              badgeLabel,
              '📸 技能全貌：多角度真人連續動作與重點標示圖',
              [
                bio.comBos || (skill.stepByStep && skill.stepByStep[0]),
                bio.jointAngles || (skill.stepByStep && skill.stepByStep[1]),
                bio.edgeControl || (skill.stepByStep && skill.stepByStep[2])
              ]
            )}
          </div>

          <div class="skill-columns">
            <div class="bio-box">
              <div style="font-family:var(--font-mono); font-size:0.78rem; font-weight:700; color:var(--cyan-400); margin-bottom:0.5rem;">
                📐 生物力學與重心參數 (BIOMECHANICS &amp; COM/BOS)
              </div>
              <div style="font-size:0.87rem; color:var(--text-secondary);">
                ${bioText}
              </div>
            </div>

            <div class="steps-box">
              <div style="font-family:var(--font-mono); font-size:0.78rem; font-weight:700; color:var(--emerald-400); margin-bottom:0.5rem;">
                🎯 系統化分解動作與練習步驟 (Step 1 ➔ Step 4)
              </div>
              <ol style="padding-left:1.1rem; font-size:0.87rem; color:var(--text-secondary);">
                ${stepsHtml}
              </ol>
            </div>
          </div>

          <!-- 2. Dedicated Practice Steps (Step 1 to Step 4) Continuous Image & Video -->
          <div style="margin-bottom:1.2rem;">
            ${buildRealMediaDualBoxHtml(
              stepMediaId,
              `分解練習步驟 (Step 1–4)：${skill.name}`,
              `${badgeLabel} · STEPS 1–4`,
              '📸 練習步驟 Step 1–4 多角度真人連續動作與重點標示圖',
              [
                skill.stepByStep && skill.stepByStep[0] ? `Step 1: ${skill.stepByStep[0]}` : '',
                skill.stepByStep && skill.stepByStep[1] ? `Step 2–3: ${skill.stepByStep[1]}` : '',
                skill.stepByStep && skill.stepByStep[3] ? `Step 4: ${skill.stepByStep[3]}` : ''
              ]
            )}
          </div>

          <!-- 3. Common Errors & Expert Mindset Tips + Dedicated Correct-vs-Error Continuous Video -->
          <div class="error-box">
            ${errHtml}
          </div>

          ${
            skill.expertMindset
              ? `<div class="mindset-box" style="margin-bottom:0.9rem;">
                  <strong style="color:var(--orange-400);">🧠 50人專家團隊思維 Tips (Expert Coaching Mindset)：</strong>
                  <span>${skill.expertMindset}</span>
                </div>`
              : ''
          }

          <div>
            ${buildRealMediaDualBoxHtml(
              errMediaId,
              `正誤連續動作對照 & 專家 Tips：${skill.name}`,
              `${badgeLabel} · CORRECT vs ERROR & TIPS`,
              '📸 ✅正確真人動作 vs ❌錯誤逆刃/洗刃對照 & 專家 Tips 圖',
              [
                `專家心法：${skill.expertMindset || bio.comBos || ''}`,
                `矯正處方：${err.correctiveDrill || bio.jointAngles || ''}`,
                `常見錯誤：${err.symptom || ''}`
              ]
            )}
          </div>
        </div>
      `;
      })
      .join('');

    pane.innerHTML = `
      <div class="module-hero-banner">
        <div>
          <div class="module-meta-tags">
            <span class="tag-badge">${mod.code || mod.id}</span>
            <span class="tag-badge orange">${mod.difficulty || ''}</span>
            <span class="tag-badge emerald">${mod.systemsRef || 'CASI / AASI / SBINZ / JSBA / BASI'}</span>
          </div>
          <h3 style="font-size:1.75rem; font-weight:900; line-height:1.25; margin-bottom:0.5rem;">
            ${mod.title}
          </h3>
          <p style="font-size:0.95rem; color:var(--cyan-400); font-weight:600; margin-bottom:0.9rem;">
            ${mod.subtitle || ''}
          </p>
          <p style="font-size:0.94rem; color:var(--text-secondary);">
            ${mod.summary || ''}
          </p>
        </div>
        <div>
          <img class="module-banner-img" src="${modHeroImg}" alt="${mod.title}" />
        </div>
      </div>

      <div>
        <h4 style="font-size:1.15rem; font-weight:800; color:var(--cyan-400); display:flex; align-items:center; gap:0.5rem;">
          <span>⚡</span> 物理力學與生物力學核心原理（每一原理皆附真人四階段連續動作與 ✅正確 vs ❌錯誤對照影片）
        </h4>
        <div class="principles-grid">
          ${principlesHtml}
        </div>
      </div>

      <div>
        <h4 style="font-size:1.15rem; font-weight:800; color:var(--emerald-400); margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
          <span>🏔️</span> 實戰技術拆解、練習步驟 (Step 1–4) 與正誤對比 Tips（每一技術、練習步驟與 Tips 皆附專屬真人連續動作圖影）
        </h4>
        <div class="skills-list">
          ${skillsHtml}
        </div>
      </div>
    `;

    bindMediaInteractions(pane);
  }

  /* --------------------------------------------------------------------------
     3. RENDER GROUND TRICK (平花グラトリ) COMBO BUILDER & LOGIC MATRIX
     -------------------------------------------------------------------------- */
  function renderGroundTrickBuilder() {
    const matrix = getCurriculum().groundTrickComboMatrix;
    if (!matrix) return;

    const atomicContainer = document.getElementById('atomic-skills-grid');
    const comboListContainer = document.getElementById('combo-selector-list');
    const comboDetailContainer = document.getElementById('combo-detail-stage');

    if (atomicContainer && matrix.atomicSkills) {
      atomicContainer.innerHTML = matrix.atomicSkills
        .map((sk, idx) => {
          const isSel = state.selectedAtomicSkillId === (sk.id || sk.name);
          const aNum = String(idx + 1).padStart(2, '0');
          const mediaId = `atomic_${aNum}`;
          return `
          <div class="atomic-card ${isSel ? 'selected' : ''}" data-atomic-id="${sk.id || sk.name}" style="grid-column: span 2;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
              <strong style="font-size:1rem; color:var(--text-primary);">0${idx + 1}. ${sk.name}</strong>
              <span class="tag-badge" style="font-size:0.68rem;">${sk.category || sk.code || 'ATOMIC'} · 點擊篩選組合招式</span>
            </div>
            <div style="font-family:var(--font-mono); font-size:0.76rem; color:var(--orange-400); margin-bottom:0.35rem;">
              重心座標：${sk.comPosition || sk.foreAft || '動態轉移'}
            </div>
            <p style="font-size:0.83rem; color:var(--text-secondary); margin-bottom:0.55rem;">
              ${sk.biomechanics || sk.description || ''}
            </p>
            ${buildRealMediaDualBoxHtml(
              mediaId,
              sk.name,
              `ATOMIC SKILL 0${idx + 1}`,
              '📸 原子技能多角度真人連續動作 + 重點標示圖',
              [
                `${sk.category || '平花原子技能'} · ${sk.proficiency || ''}`,
                `重心座標：${sk.comPosition || '動態轉移'}`,
                sk.biomechanics || ''
              ]
            )}
          </div>
        `;
        })
        .join('');

      atomicContainer.querySelectorAll('.atomic-card').forEach((card) => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('video') || e.target.closest('button') || e.target.closest('img')) {
            return;
          }
          const clickedId = card.getAttribute('data-atomic-id');
          state.selectedAtomicSkillId =
            state.selectedAtomicSkillId === clickedId ? null : clickedId;
          renderGroundTrickBuilder();
        });
      });

      bindMediaInteractions(atomicContainer);
    }

    const allCombos = matrix.combos || [];
    const filteredCombos = state.selectedAtomicSkillId
      ? allCombos.filter((c) => {
          const blob = JSON.stringify(c).toLowerCase();
          return blob.includes(state.selectedAtomicSkillId.toLowerCase());
        })
      : allCombos;

    const activeList = filteredCombos.length > 0 ? filteredCombos : allCombos;
    if (state.activeComboIndex >= activeList.length) {
      state.activeComboIndex = 0;
    }

    if (comboListContainer) {
      comboListContainer.innerHTML = activeList
        .map((c, idx) => {
          const isAct = idx === state.activeComboIndex;
          const origIdx = allCombos.findIndex((orig) => orig.id === c.id);
          const cNum = String((origIdx >= 0 ? origIdx : idx) + 1).padStart(2, '0');
          const thumbImg = `assets/media/images/combo_${cNum}.jpg`;

          return `
          <button class="combo-item-btn ${isAct ? 'active' : ''}" data-combo-idx="${idx}" style="padding:0.75rem;">
            <img src="${thumbImg}" alt="${c.name}" loading="lazy" style="width:100%; height:110px; object-fit:cover; border-radius:6px; margin-bottom:0.5rem; border:1px solid var(--border-subtle);" />
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
              <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan-400); font-weight:700;">${c.difficulty || c.level || 'PRO COMBO'}</span>
              <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--orange-400);">${c.rotation || c.style || 'JSBA Gra-tri'}</span>
            </div>
            <div style="font-weight:800; font-size:0.95rem; margin-bottom:0.2rem;">${c.name}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${c.formula || (c.atomicComponents || []).join(' + ')}</div>
          </button>
        `;
        })
        .join('');

      comboListContainer.querySelectorAll('.combo-item-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          state.activeComboIndex = parseInt(btn.getAttribute('data-combo-idx'), 10);
          renderGroundTrickBuilder();
        });
      });
    }

    const activeCombo = activeList[state.activeComboIndex];
    if (comboDetailContainer && activeCombo) {
      const origIdx = allCombos.findIndex((orig) => orig.id === activeCombo.id);
      const cNum = String((origIdx >= 0 ? origIdx : state.activeComboIndex) + 1).padStart(2, '0');
      const comboMainId = `combo_${cNum}`;
      const comboStepId = `combo_step_${cNum}`;
      const comboErrId = `combo_err_${cNum}`;
      const phases = activeCombo.phases || [];

      comboDetailContainer.innerHTML = `
        <div style="background:rgba(15,23,42,0.7); border:1px solid var(--border-active); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.75rem; margin-bottom:1rem; border-bottom:1px solid var(--border-subtle); padding-bottom:0.9rem;">
            <div>
              <span class="tag-badge orange" style="margin-right:0.5rem;">${activeCombo.id || 'COMBO'}</span>
              <span style="font-family:var(--font-mono); font-size:0.9rem; color:var(--cyan-400); font-weight:700;">
                ${activeCombo.formula || (activeCombo.atomicComponents || []).join(' ➔ ')}
              </span>
              <h4 style="font-size:1.45rem; font-weight:900; margin-top:0.35rem;">${activeCombo.name}</h4>
            </div>
            <button class="btn-primary" id="btn-trigger-groundtrick-sim" style="padding:0.55rem 1rem; font-size:0.82rem;">
              ▶ 同步至上方 60fps 物理實驗室
            </button>
          </div>

          <!-- 1. Main Ground Trick Combo Continuous Action Photo + MP4 Video -->
          <div style="margin-bottom:1.25rem;">
            ${buildRealMediaDualBoxHtml(
              comboMainId,
              activeCombo.name,
              `${activeCombo.id} · ${activeCombo.difficulty || 'GROUND TRICK'}`,
              '📸 招式全貌：多角度真人連續動作與重點標示圖',
              [
                `組合公式：${activeCombo.formula || ''}`,
                `重心軌跡：${activeCombo.comSummary || ''}`,
                `用刃邏輯：${activeCombo.edgeLogic || ''}`
              ]
            )}
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.75rem; margin-bottom:1.1rem;">
            <div class="readout-box">
              <span class="lbl">核心重心轉移軌跡 (COM Path)</span>
              <span class="val" style="font-size:0.88rem; color:var(--cyan-400);">${activeCombo.comSummary || activeCombo.comShift || '前腳 75% 壓板 ➔ 後腳軸心反彈'}</span>
            </div>
            <div class="readout-box">
              <span class="lbl">鋼邊切換邏輯 (Edge Transfer)</span>
              <span class="val" style="font-size:0.88rem; color:var(--orange-400);">${activeCombo.edgeLogic || activeCombo.edgeStatus || 'Heelside 入刃 ➔ 點支撐 ➔ Toeside 鎖刃'}</span>
            </div>
            <div class="readout-box">
              <span class="lbl">上下半身反擰扭矩 (Torsion &amp; Gaze)</span>
              <span class="val" style="font-size:0.88rem; color:var(--emerald-400);">${activeCombo.torsionAngle || activeCombo.upperLowerLogic || '預轉蓄力 ±45° 反向鎖定'}</span>
            </div>
          </div>

          <div class="combo-phase-timeline" style="margin-bottom:1rem;">
            ${phases
              .map(
                (ph, idx) => `
              <div class="phase-step-card">
                <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--cyan-400); font-weight:700;">
                  PHASE 0${idx + 1} · ${ph.com || ''}
                </div>
                <div style="font-weight:800; font-size:0.95rem; margin:0.25rem 0 0.4rem;">
                  ${ph.phase || ph.title || ph.name}
                </div>
                <p style="font-size:0.82rem; color:var(--text-secondary);">
                  ${ph.action || ph.detail || ph.description || ''}
                </p>
                ${
                  ph.edge
                    ? `<div style="margin-top:0.45rem; font-family:var(--font-mono); font-size:0.72rem; color:var(--orange-400);">用刃：${ph.edge}</div>`
                    : ''
                }
              </div>
            `
              )
              .join('')}
          </div>

          <!-- 2. Dedicated Phase 1 to Phase 4 Practice Steps Continuous Image & MP4 Video -->
          <div style="margin-bottom:1.25rem;">
            ${buildRealMediaDualBoxHtml(
              comboStepId,
              `Phase 1–4 連續練習步驟：${activeCombo.name}`,
              `${activeCombo.id} · PHASE 1–4 DRILL`,
              '📸 Phase 1–Phase 4 多角度真人連續動作與重點標示圖',
              [
                phases[0] ? `${phases[0].phase}：${phases[0].action}` : '',
                phases[1] ? `${phases[1].phase}：${phases[1].action}` : '',
                phases[3] ? `${phases[3].phase}：${phases[3].action}` : ''
              ]
            )}
          </div>

          <!-- 3. Failure Mode & JSBA Pro Tips + Dedicated Correct-vs-Error Continuous Video -->
          <div style="margin-top:1.15rem; margin-bottom:1rem; display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
            <div class="error-box" style="margin-bottom:0;">
              <strong style="color:var(--crimson-400);">⚠️ 失敗卡刃點分析 (Failure Mode)：</strong>
              <span style="font-size:0.85rem; color:var(--text-secondary);">${activeCombo.failureMode || activeCombo.commonMistake || ''}</span>
            </div>
            <div class="mindset-box">
              <strong style="color:var(--orange-400);">💡 日系平花專家思維 Tips (JSBA Pro Tip)：</strong>
              <span style="font-size:0.85rem; color:var(--text-secondary);">${activeCombo.expertTip || activeCombo.mindset || ''}</span>
            </div>
          </div>

          <div>
            ${buildRealMediaDualBoxHtml(
              comboErrId,
              `正誤對照 & 日系專家 Tips：${activeCombo.name}`,
              `${activeCombo.id} · CORRECT vs ERROR & TIPS`,
              '📸 ✅正確鎖刃 vs ❌失敗卡刃真人連續動作 & 專家 Tips 圖',
              [
                `大師心法：${activeCombo.expertTip || ''}`,
                `重心軌跡：${activeCombo.comSummary || ''}`,
                `失敗斷點：${activeCombo.failureMode || ''}`
              ]
            )}
          </div>
        </div>
      `;

      bindMediaInteractions(comboDetailContainer);

      const simBtn = document.getElementById('btn-trigger-groundtrick-sim');
      if (simBtn) {
        simBtn.addEventListener('click', () => {
          if (window.SBSimulators && window.SBSimulators.setPlayerMode) {
            window.SBSimulators.setPlayerMode('ground_trick_owen');
          }
          const studioEl = document.getElementById('interactive-studio');
          if (studioEl) studioEl.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }

  /* --------------------------------------------------------------------------
     4. RENDER 50-EXPERT PANEL REVIEW & SIGN-OFF BOARD
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
          ${g === 'ALL' ? '全部 50 位跨領域專家 (All 50 Experts)' : g}
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
          <span class="expert-status">✓ 教材 · 真人圖解 · 正誤連續影片 驗收通過</span>
        </div>
        <div class="expert-name">${ex.name}</div>
        <div class="expert-role">${ex.title || ex.role} · ${ex.certification || ex.specialty || ''}</div>
        <div class="expert-audit-note">
          <strong style="color:var(--cyan-400);">審查問題、圖影校驗與修正重點：</strong><br/>
          ${ex.auditFinding || ex.reviewNote || ex.correction || ''}
        </div>
      </article>
    `
      )
      .join('');
  }

  /* --------------------------------------------------------------------------
     5. INITIALIZE UI CONTROLS, SEARCH, LIGHTBOX, THEME & SCROLL PROGRESS
     -------------------------------------------------------------------------- */
  function initUIEvents() {
    const searchInput = document.getElementById('global-curriculum-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        renderModuleSidebar();
        renderActiveModuleDetail();
      });
    }

    const themeBtn = document.getElementById('btn-toggle-glare-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        state.snowGlareTheme = !state.snowGlareTheme;
        document.body.classList.toggle('theme-snow-glare', state.snowGlareTheme);
        themeBtn.innerHTML = state.snowGlareTheme
          ? '🌙 切換高山黑曜護眼模式'
          : '☀️ 切換雪地強光高對比模式';
      });
    }

    const backdrop = document.getElementById('global-media-lightbox');
    const closeBtn = document.getElementById('btn-close-lightbox');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          const vidEl = document.getElementById('lightbox-video');
          if (vidEl) vidEl.pause();
          backdrop.classList.remove('open');
        }
      });
    }
    if (closeBtn && backdrop) {
      closeBtn.addEventListener('click', () => {
        const vidEl = document.getElementById('lightbox-video');
        if (vidEl) vidEl.pause();
        backdrop.classList.remove('open');
      });
    }

    window.addEventListener('scroll', () => {
      const progressEl = document.getElementById('scroll-progress');
      if (!progressEl) return;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressEl.style.width = scrolled + '%';
    });
  }

  /* --------------------------------------------------------------------------
     BOOT APPLICATION
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderSystemsComparison();
    renderModuleSidebar();
    renderActiveModuleDetail();
    renderGroundTrickBuilder();
    renderExpertsAuditBoard();
    initUIEvents();

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
