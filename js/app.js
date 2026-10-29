/**
 * SB_SKILL_NEW — MAIN APPLICATION CONTROLLER
 * Reviewed & Audited by the 50-Expert Interdisciplinary Snowboard Panel
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
        // Sync simulator mode if applicable
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
    const mod =
      modules.find((m) => (m.code || m.id) === state.activeModuleId) || modules[0];

    if (!mod) {
      pane.innerHTML = `<p>載入課程模組中...</p>`;
      return;
    }

    const principlesHtml = (mod.physicsPrinciples || [])
      .map(
        (p) => `
      <div class="principle-card">
        <div style="font-weight:800; font-size:1.02rem; color:var(--text-primary);">${p.title || p.name}</div>
        ${p.formula ? `<div class="principle-formula">${p.formula}</div>` : ''}
        <p style="font-size:0.88rem; color:var(--text-secondary);">${p.explanation || p.description || ''}</p>
      </div>
    `
      )
      .join('');

    const skillsHtml = (mod.coreSkills || [])
      .map((skill, idx) => {
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
              `<li style="margin-bottom:0.4rem;"><strong>Step ${i + 1}:</strong> ${s}</li>`
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

          <div class="skill-columns">
            <div class="bio-box">
              <div style="font-family:var(--font-mono); font-size:0.78rem; font-weight:700; color:var(--cyan-400); margin-bottom:0.5rem;">
                📐 生物力學與重心參數 (BIOMECHANICS & COM/BOS)
              </div>
              <div style="font-size:0.87rem; color:var(--text-secondary);">
                ${bioText}
              </div>
            </div>

            <div class="steps-box">
              <div style="font-family:var(--font-mono); font-size:0.78rem; font-weight:700; color:var(--emerald-400); margin-bottom:0.5rem;">
                🎯 系統化分解動作與練習步驟 (PROGRESSION DRILLS)
              </div>
              <ol style="padding-left:1.1rem; font-size:0.87rem; color:var(--text-secondary);">
                ${stepsHtml}
              </ol>
            </div>
          </div>

          <div class="error-box">
            ${errHtml}
          </div>

          ${
            skill.expertMindset
              ? `<div class="mindset-box">
                  <strong style="color:var(--orange-400);">🧠 50人專家團隊思維 (Expert Coaching Mindset)：</strong>
                  <span>${skill.expertMindset}</span>
                </div>`
              : ''
          }
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
          <img class="module-banner-img" src="${mod.image || 'assets/images/com_bos_mechanics.png'}" alt="${mod.title}" />
        </div>
      </div>

      <div>
        <h4 style="font-size:1.15rem; font-weight:800; color:var(--cyan-400); display:flex; align-items:center; gap:0.5rem;">
          <span>⚡</span> 物理力學與生物力學核心原理 (Core Physics & Biomechanics)
        </h4>
        <div class="principles-grid">
          ${principlesHtml}
        </div>
      </div>

      <div>
        <h4 style="font-size:1.15rem; font-weight:800; color:var(--emerald-400); margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
          <span>🏔️</span> 實戰技術拆解、重心位置、常見錯誤與專家思維 (Masterclass Drills)
        </h4>
        <div class="skills-list">
          ${skillsHtml}
        </div>
      </div>
    `;
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
        .map((sk) => {
          const isSel = state.selectedAtomicSkillId === (sk.id || sk.name);
          return `
          <div class="atomic-card ${isSel ? 'selected' : ''}" data-atomic-id="${sk.id || sk.name}">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
              <strong style="font-size:0.92rem; color:var(--text-primary);">${sk.name}</strong>
              <span class="tag-badge" style="font-size:0.68rem;">${sk.category || sk.code || 'ATOMIC'}</span>
            </div>
            <div style="font-family:var(--font-mono); font-size:0.74rem; color:var(--orange-400); margin-bottom:0.35rem;">
              重心：${sk.comPosition || sk.foreAft || '動態轉移'}
            </div>
            <p style="font-size:0.8rem; color:var(--text-secondary);">
              ${sk.biomechanics || sk.description || ''}
            </p>
          </div>
        `;
        })
        .join('');

      atomicContainer.querySelectorAll('.atomic-card').forEach((card) => {
        card.addEventListener('click', () => {
          const clickedId = card.getAttribute('data-atomic-id');
          state.selectedAtomicSkillId =
            state.selectedAtomicSkillId === clickedId ? null : clickedId;
          renderGroundTrickBuilder();
        });
      });
    }

    const combos = matrix.combos || [];
    const filteredCombos = state.selectedAtomicSkillId
      ? combos.filter((c) => {
          const blob = JSON.stringify(c).toLowerCase();
          return blob.includes(state.selectedAtomicSkillId.toLowerCase());
        })
      : combos;

    const activeList = filteredCombos.length > 0 ? filteredCombos : combos;
    if (state.activeComboIndex >= activeList.length) {
      state.activeComboIndex = 0;
    }

    if (comboListContainer) {
      comboListContainer.innerHTML = activeList
        .map((c, idx) => {
          const isAct = idx === state.activeComboIndex;
          return `
          <button class="combo-item-btn ${isAct ? 'active' : ''}" data-combo-idx="${idx}">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.3rem;">
              <span style="font-family:var(--font-mono); font-size:0.72rem; color:var(--cyan-400); font-weight:700;">${c.difficulty || c.level || 'PRO COMBO'}</span>
              <span style="font-family:var(--font-mono); font-size:0.72rem; color:var(--orange-400);">${c.rotation || c.style || 'JSBA Gra-tri'}</span>
            </div>
            <div style="font-weight:800; font-size:1rem; margin-bottom:0.25rem;">${c.name}</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">${c.formula || (c.atomicComponents || []).join(' + ')}</div>
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
      const phases = activeCombo.phases || [];
      comboDetailContainer.innerHTML = `
        <div style="background:rgba(15,23,42,0.7); border:1px solid var(--border-active); border-radius:var(--radius-lg); padding:1.5rem;">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.75rem; margin-bottom:1rem; border-bottom:1px solid var(--border-subtle); padding-bottom:0.9rem;">
            <div>
              <span class="tag-badge orange" style="margin-right:0.5rem;">COMBO FORMULA</span>
              <span style="font-family:var(--font-mono); font-size:0.9rem; color:var(--cyan-400); font-weight:700;">
                ${activeCombo.formula || (activeCombo.atomicComponents || []).join(' ➔ ')}
              </span>
              <h4 style="font-size:1.45rem; font-weight:900; margin-top:0.35rem;">${activeCombo.name}</h4>
            </div>
            <button class="btn-primary" id="btn-trigger-groundtrick-sim" style="padding:0.55rem 1rem; font-size:0.82rem;">
              ▶ 在上方物理模擬器播放平花慢動作分解
            </button>
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
              <span class="lbl">上下半身反擰扭矩 (Torsion & Gaze)</span>
              <span class="val" style="font-size:0.88rem; color:var(--emerald-400);">${activeCombo.torsionAngle || activeCombo.upperLowerLogic || '預轉蓄力 ±45° 反向鎖定'}</span>
            </div>
          </div>

          <div class="combo-phase-timeline">
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

          <div style="margin-top:1.15rem; display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
            <div class="error-box" style="margin-bottom:0;">
              <strong style="color:var(--crimson-400);">⚠️ 失敗卡刃點分析 (Failure Mode)：</strong>
              <span style="font-size:0.85rem; color:var(--text-secondary);">${activeCombo.failureMode || activeCombo.commonMistake || ''}</span>
            </div>
            <div class="mindset-box">
              <strong style="color:var(--orange-400);">💡 日系平花專家思維 (JSBA Pro Tip)：</strong>
              <span style="font-size:0.85rem; color:var(--text-secondary);">${activeCombo.expertTip || activeCombo.mindset || ''}</span>
            </div>
          </div>
        </div>
      `;

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
          <span class="expert-status">✓ 審核通過並修正完畢</span>
        </div>
        <div class="expert-name">${ex.name}</div>
        <div class="expert-role">${ex.title || ex.role} · ${ex.certification || ex.specialty || ''}</div>
        <div class="expert-audit-note">
          <strong style="color:var(--cyan-400);">審查問題與修正重點：</strong><br/>
          ${ex.auditFinding || ex.reviewNote || ex.correction || ''}
        </div>
      </article>
    `
      )
      .join('');
  }

  /* --------------------------------------------------------------------------
     5. INITIALIZE UI CONTROLS, SEARCH, THEME & SCROLL PROGRESS
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
