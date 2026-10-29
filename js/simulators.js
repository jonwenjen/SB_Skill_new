/**
 * SB_SKILL_NEW — 60FPS AI MOTION TELEMETRY PLAYER & LIVE BIOMECHANICS ENGINE (window.SBSimulators)
 * Audited & Approved by Panel 08 (Biomechanics) & Panel 10 (UI/UX & Physics Visualization)
 */

(function () {
  'use strict';

  const playerState = {
    canvas: null,
    ctx: null,
    controlsEl: null,
    mode: 'carving',
    camera: 'perspective', // 'perspective' | 'side' | 'top'
    playing: true,
    speedMultiplier: 0.5, // Default 0.5x slow-mo for instructional clarity
    progress: 0, // 0.0 to 1.0 (looping 8-second cycle at 1.0x)
    lastTimestamp: 0,
    particles: []
  };

  const labState = {
    canvas: null,
    ctx: null,
    controlsEl: null,
    edgeAngle: 58,     // deg (0 - 85)
    speedKmh: 42,      // km/h (10 - 75)
    foreAft: 55,       // % Front foot (15 - 90)
    angulation: 28,    // deg (0 - 45)
    sidecutRadius: 8.2 // meters standard board R_sc
  };

  const MODE_META = {
    carving: {
      id: 'carving',
      shortLabel: '🔪 極限刻滑 Carve',
      title: '進階刻滑：Cross-Under 抽腿換刃 ➔ 78° 谷回り立刃 ➔ 鉛筆線軌跡',
      phases: [
        { range: [0.0, 0.22], name: 'PHASE 1 · Cross-Under 抽腿換刃 (Edge Switch)', coachNote: '保持頭頂高度水平不變，雙膝主動收向胸口減壓，雪板於身體下方瞬間由後刃翻轉至前刃。', com: '居中 50/50 · 垂直抽腿 -28cm', edge: '0° ➔ Toeside 35°' },
        { range: [0.22, 0.52], name: 'PHASE 2 · 谷回り早期高立刃 (Early Edge Lock)', coachNote: '在通過滾落線前大膽將質心(COM)投入彎內，脛骨壓緊鞋舌，有效半徑 R_eff 壓縮至 2.4m。', com: '前腳 60% / 後腳 40% 咬鼻', edge: 'Toeside 74° (Pencil Track)' },
        { range: [0.52, 0.78], name: 'PHASE 3 · 彎心折角抗離心力 (Apex Angulation)', coachNote: '承受 2.1G 向心負荷，雙腿漸進向雪板蹬伸(Push)，同時疊加 32° 髖膝折角防止冰面滑脫。', com: '雙腳 50/50 均勻抗壓', edge: 'Toeside 78° 極限鎖死' },
        { range: [0.78, 1.0], name: 'PHASE 4 · 山回り儲能回彈 (Rebound Launch)', coachNote: '重心微移板尾 40/60 壓榨雪板彈性，順著回彈力水平穿透(Cross-through)射入下一彎後刃。', com: '前腳 40% / 後腳 60% 儲能', edge: 'Toeside 55° ➔ Heelside 轉換' }
      ]
    },
    ground_trick: {
      id: 'ground_trick',
      shortLabel: '🌀 平花 Owen / 360',
      title: '日系平花 (グラトリ)：刃對點轉換 ➔ Nose Press 85% 壓板 ➔ 反擰 Nollie 360',
      phases: [
        { range: [0.0, 0.25], name: 'PHASE 1 · 刻滑入刃與反向預轉 (Edge Set & Pre-wind)', coachNote: '嚴禁平底空甩！先以 Heelside 25° 鋼邊切入雪面建立高摩擦支點，雙肩向反方向預轉蓄力 -45°。', com: '前腳 50% / 後腳 50%', edge: 'Heelside 25° 支點建立' },
        { range: [0.25, 0.55], name: 'PHASE 2 · 刃對點轉換與極限壓鼻 (Nose Press 88%)', coachNote: '骨盆瞬間推過前固定器外側，板頭懸臂樑大幅彎曲儲能，板尾抬離雪面釋放旋轉阻力。', com: 'Front 88% / Rear 12% (單點支撐)', edge: 'Nose Point (下坡刃強制抬起)' },
        { range: [0.55, 0.82], name: 'PHASE 3 · 反擰釋放與板頭彈射 (Nollie Whip Spin)', coachNote: '順著板頭玻璃纖維回彈，前腳單點蹬直彈起，上下半身釋放角動量，空中收雙膝加速完成 360°。', com: 'Airborne 50/50 緊收核心軸心', edge: 'Airborne Level (水平高速旋轉)' },
        { range: [0.82, 1.0], name: 'PHASE 4 · 視線鎖定與刀鋒鎖刃 (Blind Landing Lock)', coachNote: '轉過 270° 時雙眼提前鎖定山谷參照物，雙腳同時微屈膝觸地並立刻立起上坡刃鎖死旋轉慣性。', com: 'Front 55% / Rear 45% 吸收', edge: 'Toeside 26° 瞬間止轉' }
      ]
    },
    park_kicker: {
      id: 'park_kicker',
      shortLabel: '🚀 跳台拋物線 Park',
      title: 'Park 跳台科學：ATML 四階段、台口雙腳 Pop 向量與 Sweet Spot 減震落地',
      phases: [
        { range: [0.0, 0.25], name: 'PHASE 1 · Approach 助滑定速與微立刃導引', coachNote: '助滑最後 5 公尺停止大幅轉彎，板底平放(Flat Base)或維持 12° 極淺 Set-up Carve 對準台口。', com: '居中 50/50 低風阻穩定姿態', edge: 'Flat Base 0° (或微刃 12°)' },
        { range: [0.25, 0.45], name: 'PHASE 2 · Takeoff 台口雙腳 50/50 垂直 Pop', coachNote: '在雪板抵達台口(Lip)最後一寸時，雙腿同時向斜坡法線方向爆發蹬伸，嚴禁只踢後腳或提前甩肩。', com: '雙腳 50/50 同步三關節伸展', edge: 'Lip Pop Vector +32° 仰角' },
        { range: [0.45, 0.76], name: 'PHASE 3 · Maneuver 空中收膝抓板 (Indy Grab)', coachNote: '升空後主動將雙膝抽向胸口(縮小轉動慣量 35%)，後手抓穩兩腳間前刃，絕不彎腰低頭找板子。', com: '空中質心遵循完美拋物線軌跡', edge: 'Airborne Indy Grab 鎖定' },
        { range: [0.76, 1.0], name: 'PHASE 4 · Landing 落地坡甜蜜點切線緩衝', coachNote: '飛越平台(Knuckle)精準落於 32° 斜坡甜蜜點(夾角 Δθ < 8°)，正向衝擊力降低 78%，三關節離心吸收。', com: '50/50 三關節同步離心減震', edge: 'Sweet Spot 切線貼合落地' }
      ]
    },
    trees_moguls: {
      id: 'trees_moguls',
      shortLabel: '🌲 蘑菇與樹林 Mogul',
      title: '全地域戰術：蘑菇活塞吸收 (質心水平直線) × 樹林包頂零阻力換刃',
      phases: [
        { range: [0.0, 0.25], name: 'PHASE 1 · 視覺超前導航 (Look 3 Bumps Ahead / Gap Fixation)', coachNote: '眼睛絕不看腳下雪包或樹幹！視線鎖定前方 15 公尺處樹間發光通道，上半身保持絕對安靜。', com: '頭頂維持恆定水平直線軌跡', edge: 'Short-Radius Steered 控速' },
        { range: [0.25, 0.52], name: 'PHASE 2 · 爬升包頂：活塞主動收腿吸收 (Piston Flexion)', coachNote: '當雪板滑上蘑菇頂端(Crest)時，雙膝主動收向胸口(+35cm 行程)，吸收地形隆起防止被彈飛。', com: '膝關節深屈曲 85° 吸收包頂', edge: '包頂板頭板尾懸空 (零摩擦點)' },
        { range: [0.52, 0.78], name: 'PHASE 3 · 包頂地形拔重閃電換刃 (Crest Pivot & Nose Down)', coachNote: '利用包頂僅板腰接觸雪面的零阻力瞬間，雙膝快速扭轉換刃，並主動把前腳往下壓貼合雪包背面！', com: 'Front 62% 主動壓鼻貼背坡', edge: 'Cross-Under 瞬間切換上坡刃' },
        { range: [0.78, 1.0], name: 'PHASE 4 · 滑入溝底：雙腿主動向下伸展 (Trough Extension)', coachNote: '進入兩包間溝槽(Trough)時，雙腿主動向雪面伸展貼地，在溝槽側壁完成銀行彎(Banked)控速。', com: '雙腿伸展 140° 維持雪板貼地', edge: '溝槽側壁均勻削雪減速' }
      ]
    },
    backcountry: {
      id: 'backcountry',
      shortLabel: '🏔️ 粉雪與雪崩搜救',
      title: '深粉雪海豚跳流體力學 (Planation Lift) & 457kHz 三信號天線十字搜救',
      phases: [
        { range: [0.0, 0.28], name: 'PHASE 1 · 粉雪動壓滑水升力與海豚潛壓 (Dolphin Compression)', coachNote: '固定器退後 Setback，維持中高速與 12° 板頭正攻角；彎中雙腳向下踩壓鬆雪建立高密度反彈墊。', com: 'Front 38% / Rear 62% 衝浪姿態', edge: '3D Base Banking (板底衝浪非切刃)' },
        { range: [0.28, 0.52], name: 'PHASE 2 · 海豚躍出換向與 Beacon 信號捕捉 (Signal & Coarse)', coachNote: '出彎順雪層回彈讓板頭破雪浮出零阻力換向；若遇雪崩，全隊切 SEARCH 沿電磁弧線快跑追蹤。', com: '出彎輕盈上浮釋放後腿壓力', edge: '457kHz 電磁通量線追蹤 (< 40m)' },
        { range: [0.52, 0.78], name: 'PHASE 3 · Fine Search (<3m) 貼雪十字定位法 (Bracketing)', coachNote: '距離讀數小於 3m 時蹲下將 Beacon 緊貼雪面，不轉動機身執行前後與左右十字移動找出最小讀數點。', com: '搜救員低重心貼雪精確平移', edge: '最小讀數點誤差鎖定 < 25cm' },
        { range: [0.78, 1.0], name: 'PHASE 4 · 垂直雪坡螺旋探針與下坡側 1.5x V型開挖', coachNote: '探針與雪坡呈 90° 垂直刺中目標後保留不拔出！退至下坡側 1.5 倍埋深處水平開挖，15分鐘內開通氣道。', com: 'V型輸送帶戰術鏟雪隊形', edge: '黃金 15 分鐘存活率 > 92%' }
      ]
    },
    com_bos: {
      id: 'com_bos',
      shortLabel: '⚖️ COM/BOS 物理核心',
      title: '單板第一性原理：質心 (COM) 跨板投影、傾角 vs 折角與四種板性能',
      phases: [
        { range: [0.0, 0.25], name: 'PHASE 1 · 居中靈活站姿 (Centered & Mobile Stance 40:40:20)', coachNote: '踝:膝:髖維持 40:40:20 黃金屈曲比，骨盆(COM)垂直投影於板腰正中央，背脊挺直不折腰。', com: 'Front 50% / Rear 50% 居中', edge: 'Flat Base 預備態' },
        { range: [0.25, 0.52], name: 'PHASE 2 · 兩腳間扭轉啟動 (Torsional Twist Initiation)', coachNote: '前膝與前腳踝先向新彎內微壓 6°，使雪板產生螺旋扭轉形變(Twist)，板頭無卡刃順滑入彎。', com: '前腳 60% 引導板頭入滾落線', edge: '漸進立刃 Tilt 0° ➔ 45°' },
        { range: [0.52, 0.78], name: 'PHASE 3 · 動態平衡：重力 + 離心力合向量穿過 BOS', coachNote: '彎中離心力 F_c 與重力 mg 合成總向量精準穿過工作鋼邊(BOS)，疊加髖折角把頭頂拉回雪板上方。', com: '合向量 100% 鎖定工作鋼邊', edge: 'Working Edge 62° + 折角 25°' },
        { range: [0.78, 1.0], name: 'PHASE 4 · 釋壓換刃窗口 (Unweighting & Edge Transfer)', coachNote: '出彎時透過起身延伸(Up)或主動抽腿(Down)創造短暫正壓力低谷，讓 COM 平順跨過中線換刃。', com: 'COM 穿越雪板中心軸線', edge: '無縫切換至對側工作鋼邊' }
      ]
    }
  };

  function normalizeMode(rawMode) {
    if (!rawMode) return 'carving';
    if (rawMode === 'ground_trick_owen' || rawMode === 'ground_trick') return 'ground_trick';
    if (rawMode === 'preseason' || rawMode === 'resort_safety' || rawMode === 'progression' || rawMode === 'injury_tuning' || rawMode === 'com_bos') {
      return 'com_bos';
    }
    if (MODE_META[rawMode]) return rawMode;
    return 'carving';
  }

  /* --------------------------------------------------------------------------
     1. INITIALIZE 60FPS MULTI-VIEW MOTION VIDEO SIMULATOR
     -------------------------------------------------------------------------- */
  function initMotionPlayer(canvasId, controlsId) {
    const canvas = document.getElementById(canvasId);
    const controlsEl = document.getElementById(controlsId);
    if (!canvas || !controlsEl) return;

    playerState.canvas = canvas;
    playerState.ctx = canvas.getContext('2d');
    playerState.controlsEl = controlsEl;

    // Seed snow particles
    playerState.particles = Array.from({ length: 42 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 1.2 + Math.random() * 2.2,
      vx: -0.5 - Math.random() * 1.5,
      vy: 0.6 + Math.random() * 1.4
    }));

    renderPlayerControls();
    requestAnimationFrame(tickMotionPlayer);
  }

  function renderPlayerControls() {
    const el = playerState.controlsEl;
    if (!el) return;

    const meta = MODE_META[playerState.mode] || MODE_META.carving;
    const modeKeys = ['carving', 'ground_trick', 'park_kicker', 'trees_moguls', 'backcountry', 'com_bos'];

    el.innerHTML = `
      <div class="control-row">
        <div class="mode-pills" role="group" aria-label="模擬模式選擇">
          ${modeKeys
            .map((k) => {
              const m = MODE_META[k];
              const act = k === playerState.mode ? 'active' : '';
              return `<button type="button" class="pill-btn ${act}" data-sim-mode="${k}">${m.shortLabel}</button>`;
            })
            .join('')}
        </div>
      </div>

      <div class="control-row" style="background:rgba(15,23,42,0.65); padding:0.55rem 0.8rem; border-radius:8px; border:1px solid var(--border-subtle);">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <button type="button" id="sim-btn-playpause" class="pill-btn active" style="min-width:78px;">
            ${playerState.playing ? '⏸ 暫停' : '▶ 播放'}
          </button>
          <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">倍速：</span>
          ${[0.25, 0.5, 1.0]
            .map(
              (spd) => `
            <button type="button" class="pill-btn orange ${playerState.speedMultiplier === spd ? 'active' : ''}" data-sim-speed="${spd}">
              ${spd}x${spd === 0.25 ? ' 慢動作' : ''}
            </button>
          `
            )
            .join('')}
        </div>

        <div class="camera-pills">
          <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono); align-self:center;">視角：</span>
          ${[
            { id: 'perspective', lbl: '🎥 3D 追焦力學' },
            { id: 'side', lbl: '📐 側面關節剖面' },
            { id: 'top', lbl: '🛰️ 俯視雪痕與重心' }
          ]
            .map(
              (cam) => `
            <button type="button" class="pill-btn ${playerState.camera === cam.id ? 'active' : ''}" data-sim-cam="${cam.id}">
              ${cam.lbl}
            </button>
          `
            )
            .join('')}
        </div>
      </div>

      <div style="display:flex; align-items:center; gap:0.75rem;">
        <span style="font-family:var(--font-mono); font-size:0.74rem; color:var(--cyan-400); min-width:52px;" id="sim-timecode-label">00.0s</span>
        <input type="range" id="sim-timeline-scrubber" class="scrubber-slider" min="0" max="1000" value="${Math.round(playerState.progress * 1000)}" aria-label="動作分解時間軸" />
        <span style="font-family:var(--font-mono); font-size:0.74rem; color:var(--orange-400); min-width:85px; text-align:right;" id="sim-phase-badge">PHASE 1/4</span>
      </div>

      <div id="sim-coach-subtitle-box" style="background:rgba(56,189,248,0.08); border-left:3px solid var(--cyan-400); padding:0.65rem 0.9rem; border-radius:0 8px 8px 0; font-size:0.84rem;">
        <div style="font-weight:800; color:var(--text-primary); margin-bottom:0.2rem;" id="sim-subtitle-title">${meta.phases[0].name}</div>
        <div style="color:var(--text-secondary);" id="sim-subtitle-desc">${meta.phases[0].coachNote}</div>
      </div>
    `;

    // Bind events
    el.querySelectorAll('[data-sim-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        playerState.mode = btn.getAttribute('data-sim-mode');
        playerState.progress = 0;
        renderPlayerControls();
      });
    });

    const playBtn = el.querySelector('#sim-btn-playpause');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        playerState.playing = !playerState.playing;
        playBtn.textContent = playerState.playing ? '⏸ 暫停' : '▶ 播放';
      });
    }

    el.querySelectorAll('[data-sim-speed]').forEach((btn) => {
      btn.addEventListener('click', () => {
        playerState.speedMultiplier = parseFloat(btn.getAttribute('data-sim-speed'));
        renderPlayerControls();
      });
    });

    el.querySelectorAll('[data-sim-cam]').forEach((btn) => {
      btn.addEventListener('click', () => {
        playerState.camera = btn.getAttribute('data-sim-cam');
        renderPlayerControls();
      });
    });

    const scrubber = el.querySelector('#sim-timeline-scrubber');
    if (scrubber) {
      scrubber.addEventListener('input', (e) => {
        playerState.playing = false;
        const pBtn = el.querySelector('#sim-btn-playpause');
        if (pBtn) pBtn.textContent = '▶ 播放';
        playerState.progress = parseInt(e.target.value, 10) / 1000;
        updateSubtitleDOM();
      });
    }
  }

  function getActivePhase(meta, p) {
    for (let i = 0; i < meta.phases.length; i++) {
      const ph = meta.phases[i];
      if (p >= ph.range[0] && p <= ph.range[1]) {
        return { index: i, phase: ph };
      }
    }
    return { index: 0, phase: meta.phases[0] };
  }

  function updateSubtitleDOM() {
    const meta = MODE_META[playerState.mode] || MODE_META.carving;
    const { index, phase } = getActivePhase(meta, playerState.progress);

    const scrubber = document.getElementById('sim-timeline-scrubber');
    if (scrubber && playerState.playing) {
      scrubber.value = String(Math.round(playerState.progress * 1000));
    }
    const tc = document.getElementById('sim-timecode-label');
    if (tc) {
      tc.textContent = (playerState.progress * 8.0).toFixed(2) + 's';
    }
    const badge = document.getElementById('sim-phase-badge');
    if (badge) {
      badge.textContent = `PHASE ${index + 1} / ${meta.phases.length}`;
    }
    const titleEl = document.getElementById('sim-subtitle-title');
    if (titleEl && titleEl.textContent !== phase.name) {
      titleEl.textContent = phase.name;
    }
    const descEl = document.getElementById('sim-subtitle-desc');
    if (descEl && descEl.textContent !== phase.coachNote) {
      descEl.textContent = phase.coachNote;
    }
  }

  /* --------------------------------------------------------------------------
     2. 60FPS CANVAS RENDERING ENGINE FOR MOTION VIDEO PLAYER
     -------------------------------------------------------------------------- */
  function tickMotionPlayer(timestamp) {
    if (!playerState.lastTimestamp) playerState.lastTimestamp = timestamp;
    const dt = Math.min((timestamp - playerState.lastTimestamp) / 1000, 0.1);
    playerState.lastTimestamp = timestamp;

    if (playerState.playing) {
      // Full cycle is 8 seconds at 1.0x speed
      playerState.progress = (playerState.progress + (dt * playerState.speedMultiplier) / 8.0) % 1.0;
      updateSubtitleDOM();
    }

    drawMotionFrame();
    requestAnimationFrame(tickMotionPlayer);
  }

  function drawArrow(ctx, x1, y1, x2, y2, color, width, label) {
    const headLen = 9;
    const angle = Math.atan2(y2 - y1, x2 - x1);
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = width || 2.5;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headLen * Math.cos(angle - Math.PI / 6), y2 - headLen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x2 - headLen * Math.cos(angle + Math.PI / 6), y2 - headLen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();

    if (label) {
      ctx.font = '700 11px "JetBrains Mono", monospace';
      ctx.fillText(label, x2 + 6, y2 + 4);
    }
    ctx.restore();
  }

  function drawMotionFrame() {
    const { canvas, ctx, mode, camera, progress } = playerState;
    if (!canvas || !ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const meta = MODE_META[mode] || MODE_META.carving;
    const { index: phaseIdx, phase } = getActivePhase(meta, progress);

    // 1. Background Alpine Telemetry Grid
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#050912');
    grad.addColorStop(0.55, '#0b1325');
    grad.addColorStop(1, '#0f1b33');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Perspective / Top / Side Grid Lines
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.11)';
    ctx.lineWidth = 1;
    const gridOffset = (progress * 320) % 40;
    for (let x = 0; x < W; x += 48) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(camera === 'perspective' ? (x - W / 2) * 1.45 + W / 2 : x, H);
      ctx.stroke();
    }
    for (let y = 60; y < H; y += 40) {
      const yy = ((y + gridOffset) % (H - 60)) + 60;
      ctx.beginPath();
      ctx.moveTo(0, yy);
      ctx.lineTo(W, yy);
      ctx.stroke();
    }
    ctx.restore();

    // Snow particles
    ctx.save();
    ctx.fillStyle = 'rgba(226, 232, 240, 0.35)';
    playerState.particles.forEach((pt) => {
      if (playerState.playing) {
        pt.x = (pt.x + pt.vx * playerState.speedMultiplier + W) % W;
        pt.y = (pt.y + pt.vy * playerState.speedMultiplier + H) % H;
      }
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();

    // 2. Dispatch Mode-Specific Telemetry Scene
    if (mode === 'carving' || mode === 'com_bos') {
      drawCarvingAndComBosScene(ctx, W, H, progress, camera, mode);
    } else if (mode === 'ground_trick') {
      drawGroundTrickScene(ctx, W, H, progress, camera);
    } else if (mode === 'park_kicker') {
      drawParkKickerScene(ctx, W, H, progress, camera);
    } else if (mode === 'trees_moguls') {
      drawTreesMogulsScene(ctx, W, H, progress, camera);
    } else if (mode === 'backcountry') {
      drawBackcountryAvalancheScene(ctx, W, H, progress, camera);
    }

    // 3. Top HUD Telemetry Overlay
    ctx.save();
    ctx.fillStyle = 'rgba(7, 11, 20, 0.84)';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.lineWidth = 1;
    ctx.fillRect(14, 14, W - 28, 48);
    ctx.strokeRect(14, 14, W - 28, 48);

    ctx.font = '800 13px "Inter", "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#f8fafc';
    ctx.fillText(meta.title, 26, 34);

    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText(`重心 COM: ${phase.com}`, 26, 52);

    ctx.fillStyle = '#fb923c';
    ctx.fillText(`用刃 BOS: ${phase.edge}`, 355, 52);

    ctx.fillStyle = '#34d399';
    ctx.fillText(`VIEW: ${camera.toUpperCase()} · ${playerState.speedMultiplier}x`, W - 215, 52);
    ctx.restore();

    // 4. Bottom Phase Progress Bar inside Canvas
    ctx.save();
    const barY = H - 28;
    meta.phases.forEach((ph, idx) => {
      const xStart = 16 + ph.range[0] * (W - 32);
      const segW = (ph.range[1] - ph.range[0]) * (W - 32) - 4;
      const isCurrent = idx === phaseIdx;
      ctx.fillStyle = isCurrent ? 'rgba(56, 189, 248, 0.28)' : 'rgba(15, 23, 42, 0.78)';
      ctx.strokeStyle = isCurrent ? '#38bdf8' : 'rgba(148, 163, 184, 0.25)';
      ctx.lineWidth = isCurrent ? 1.8 : 1;
      ctx.fillRect(xStart, barY, segW, 18);
      ctx.strokeRect(xStart, barY, segW, 18);

      ctx.font = '700 10px "JetBrains Mono", monospace';
      ctx.fillStyle = isCurrent ? '#f8fafc' : '#94a3b8';
      ctx.fillText(`P${idx + 1}`, xStart + 6, barY + 13);
    });
    ctx.restore();
  }

  /* --- Scene A: High-Performance Carving & COM/BOS Vector Projection --- */
  function drawCarvingAndComBosScene(ctx, W, H, p, camera, mode) {
    const theta = p * Math.PI * 2;
    const sinWave = Math.sin(theta);
    const cosWave = Math.cos(theta);
    const maxEdge = mode === 'carving' ? 78 : 54;
    const currentEdgeDeg = Math.round(sinWave * maxEdge);
    const absEdge = Math.abs(currentEdgeDeg);

    // Draw S-turn Pencil Track on Slope
    ctx.save();
    ctx.beginPath();
    for (let i = 0; i <= 80; i++) {
      const t = i / 80;
      const wave = Math.sin((t - p) * Math.PI * 2);
      const tx = W * 0.5 + wave * (camera === 'side' ? 40 : 175);
      const ty = 85 + t * (H - 135);
      if (i === 0) ctx.moveTo(tx, ty);
      else ctx.lineTo(tx, ty);
    }
    ctx.strokeStyle = 'rgba(251, 146, 60, 0.45)';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Parallel rail track
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 4]);
    ctx.stroke();
    ctx.restore();

    // Rider & Board Position at Center Stage
    const bx = W * 0.5 + (camera === 'side' ? sinWave * 35 : sinWave * 165);
    const by = H * 0.58;
    const leanRad = (currentEdgeDeg * Math.PI) / 180 * 0.68;
    const angulationRad = leanRad * 0.38; // Hip/Knee counter-angulation keeps head stable

    // Snow spray at high edge angle
    if (absEdge > 38) {
      ctx.save();
      const sprayDir = currentEdgeDeg > 0 ? -1 : 1;
      for (let s = 0; s < 14; s++) {
        const dist = 12 + (s * 4.2) + ((p * 200) % 18);
        const sx = bx + sprayDir * dist * Math.cos(s * 0.15);
        const sy = by - dist * 0.45 + Math.sin(s) * 8;
        ctx.fillStyle = `rgba(224, 242, 254, ${0.65 - s * 0.04})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 2.5 + (s % 3), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // Draw Snowboard (BOS)
    ctx.save();
    ctx.translate(bx, by);
    const boardYaw = camera === 'top' ? cosWave * 0.55 : cosWave * 0.25;
    ctx.rotate(boardYaw);

    // Working edge glow
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = absEdge > 20 ? '#fb923c' : '#38bdf8';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.roundRect(-58, -11, 116, 22, 11);
    ctx.fill();
    ctx.stroke();

    // Highlight active BOS edge
    ctx.strokeStyle = '#fb923c';
    ctx.lineWidth = 5;
    ctx.beginPath();
    const edgeY = currentEdgeDeg >= 0 ? 11 : -11;
    ctx.moveTo(-46, edgeY);
    ctx.lineTo(46, edgeY);
    ctx.stroke();
    ctx.restore();

    // Compute Skeleton Joints (BOS -> Knees -> Hips(COM) -> Shoulders -> Head)
    const kneeFlexOffset = Math.abs(cosWave) * 18; // Cross-under retraction at transition!
    const kneeX = bx - Math.sin(leanRad * 1.15) * 48;
    const kneeY = by - 46 + kneeFlexOffset * 0.5;
    const comX = bx - Math.sin(leanRad) * 88;
    const comY = by - 88 + kneeFlexOffset;
    const shoulderX = comX - Math.sin(leanRad - angulationRad) * 48;
    const shoulderY = comY - 46;
    const headX = shoulderX - Math.sin(leanRad - angulationRad * 1.2) * 18;
    const headY = shoulderY - 20;

    // Draw Force Vectors: Gravity (mg), Centrifugal (Fc), and Resultant through BOS
    drawArrow(ctx, comX, comY, comX, comY + 62, '#34d399', 2.2, 'mg 重力');
    if (absEdge > 12) {
      const fcLen = (bx - comX) * 0.95;
      drawArrow(ctx, comX, comY, comX + fcLen, comY, '#a78bfa', 2.2, 'Fc 離心力');
    }
    // Resultant vector from COM directly to BOS Working Edge
    drawArrow(ctx, comX, comY, bx, by, '#fb923c', 3.0, 'F_res 合向量穿過 BOS');

    // Draw Skeleton links
    ctx.save();
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(bx - 18, by);
    ctx.lineTo(kneeX - 10, kneeY);
    ctx.lineTo(comX, comY);
    ctx.moveTo(bx + 18, by);
    ctx.lineTo(kneeX + 10, kneeY);
    ctx.lineTo(comX, comY);
    ctx.lineTo(shoulderX, shoulderY);
    ctx.stroke();

    // Arms (Angulation balance)
    ctx.lineWidth = 3.5;
    ctx.strokeStyle = '#94a3b8';
    ctx.beginPath();
    ctx.moveTo(shoulderX - 28, shoulderY + 12);
    ctx.lineTo(shoulderX, shoulderY);
    ctx.lineTo(shoulderX + 32, shoulderY + 8);
    ctx.stroke();

    // Head Helmet
    ctx.fillStyle = '#0ea5e9';
    ctx.beginPath();
    ctx.arc(headX, headY, 12, 0, Math.PI * 2);
    ctx.fill();

    // COM Center of Mass Target Indicator
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(comX, comY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.font = '800 11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('COM 質心', comX - 68, comY - 8);
    ctx.restore();

    // Telemetry Floating Box
    ctx.save();
    ctx.fillStyle = 'rgba(11, 17, 32, 0.88)';
    ctx.strokeStyle = 'rgba(251, 146, 60, 0.45)';
    ctx.fillRect(W - 235, 76, 218, 96);
    ctx.strokeRect(W - 235, 76, 218, 96);
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#fb923c';
    ctx.fillText(`立刃角 θ_edge: ${absEdge}° (${currentEdgeDeg >= 0 ? 'Toeside' : 'Heelside'})`, W - 224, 96);
    const reff = (8.2 * Math.cos((absEdge * Math.PI) / 180)).toFixed(2);
    ctx.fillStyle = '#38bdf8';
    ctx.fillText(`有效半徑 R_eff: ${reff} m`, W - 224, 116);
    ctx.fillStyle = '#34d399';
    ctx.fillText(`折角 Angulation: ${Math.round(absEdge * 0.42)}°`, W - 224, 136);
    ctx.fillStyle = '#f8fafc';
    ctx.fillText(absEdge < 18 ? '⚡ Cross-Under 抽腿換刃期' : '🔪 純鋼邊鎖死零滑移 (β=0°)', W - 224, 156);
    ctx.restore();
  }

  /* --- Scene B: Japanese Ground Trick (Owen / Nose Press 360) --- */
  function drawGroundTrickScene(ctx, W, H, p, camera) {
    const cx = W * 0.5;
    const cy = H * 0.62;

    // Calculate Phase-based COM Shift, Board Flex, and Spin Angle
    let comShift = 0; // -1 (Tail) to +1 (Nose)
    let spinDeg = 0;
    let boardLiftZ = 0;
    let noseFlex = 0;
    let torsionDeg = 0;

    if (p < 0.25) {
      // Phase 1: Edge set & pre-wind
      const t = p / 0.25;
      comShift = t * 0.25;
      torsionDeg = -t * 45;
      spinDeg = 0;
    } else if (p < 0.55) {
      // Phase 2: Shift 88% to Nose Point & Flex cantilever beam
      const t = (p - 0.25) / 0.30;
      comShift = 0.25 + t * 0.65; // up to +0.90 Front!
      noseFlex = Math.sin(t * Math.PI * 0.85) * 34;
      torsionDeg = -45 + t * 95;
      spinDeg = t * 90;
    } else if (p < 0.82) {
      // Phase 3: Nollie Snap & Airborne 360 Whip
      const t = (p - 0.55) / 0.27;
      comShift = 0.90 * (1 - t);
      boardLiftZ = Math.sin(t * Math.PI) * 78;
      noseFlex = (1 - t) * 15;
      spinDeg = 90 + t * 250;
      torsionDeg = 50 * (1 - t);
    } else {
      // Phase 4: Blind landing & Toeside Edge Lock
      const t = (p - 0.82) / 0.18;
      comShift = 0.05;
      boardLiftZ = 0;
      spinDeg = 340 + t * 20;
      torsionDeg = 0;
    }

    // Draw Snow Shadow / Pivot Fulcrum Ring
    ctx.save();
    ctx.strokeStyle = 'rgba(251, 146, 60, 0.55)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx + 42, cy + 8, 52, 18, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#fb923c';
    ctx.fillText('🎯 Nose Point 支點 (刃對點轉換)', cx - 10, cy + 42);
    ctx.restore();

    // Draw Flexing Snowboard Cantilever Curve
    const boardY = cy - boardLiftZ;
    const rad = (spinDeg * Math.PI) / 180;
    const cosSpan = camera === 'top' ? 1 : Math.cos(rad) * 0.75 + 0.25;

    ctx.save();
    ctx.translate(cx, boardY);
    if (camera === 'top') ctx.rotate(rad);

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.beginPath();
    // Tail (lifted during Nose Press!) to Nose (pressed down!)
    const tailLift = noseFlex * 1.45;
    ctx.moveTo(-72 * cosSpan, -tailLift);
    ctx.quadraticCurveTo(10 * cosSpan, noseFlex * 0.25, 72 * cosSpan, 0);
    ctx.stroke();

    // Highlight Nose Contact Fulcrum
    ctx.fillStyle = '#fb923c';
    ctx.beginPath();
    ctx.arc(62 * cosSpan, 0, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Draw Rider with COM shifted over Nose & Upper/Lower Torsion
    const riderComX = cx + comShift * 56;
    const riderComY = boardY - 78;

    drawArrow(ctx, riderComX, riderComY, riderComX, cy, '#38bdf8', 2.5, `COM 前腳 ${Math.round(50 + comShift * 42)}%`);

    ctx.save();
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 5;
    ctx.beginPath();
    // Rear leg lifted, Front leg flexed over nose
    ctx.moveTo(cx - 42 * cosSpan, boardY - noseFlex * 1.1);
    ctx.lineTo(riderComX, riderComY);
    ctx.lineTo(cx + 48 * cosSpan, boardY);
    ctx.stroke();

    // Torso & Pre-wind / Counter-rotation Shoulders
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(riderComX, riderComY);
    ctx.lineTo(riderComX, riderComY - 48);
    ctx.stroke();

    // Shoulder bar rotated by torsionDeg
    const shOffset = Math.sin((torsionDeg * Math.PI) / 180) * 36;
    ctx.strokeStyle = '#fb923c';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(riderComX - 30, riderComY - 42 - shOffset * 0.3);
    ctx.lineTo(riderComX + 30, riderComY - 42 + shOffset * 0.3);
    ctx.stroke();

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(riderComX, riderComY - 64, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Telemetry Readouts for Ground Trick
    ctx.save();
    ctx.fillStyle = 'rgba(11, 17, 32, 0.88)';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
    ctx.fillRect(W - 250, 76, 232, 96);
    ctx.strokeRect(W - 250, 76, 232, 96);
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#38bdf8';
    const frontPct = Math.round(50 + comShift * 42);
    ctx.fillText(`前後配重: Front ${frontPct}% / Rear ${100 - frontPct}%`, W - 238, 96);
    ctx.fillStyle = '#fb923c';
    ctx.fillText(`旋轉進度 Spin: ${Math.round(spinDeg)}° / 360°`, W - 238, 116);
    ctx.fillStyle = '#34d399';
    ctx.fillText(`上下反擰 Torsion: ${Math.round(torsionDeg)}°`, W - 238, 136);
    ctx.fillStyle = '#f8fafc';
    ctx.fillText(`防逆刃狀態: ✓ 下坡刃抬離雪面`, W - 238, 156);
    ctx.restore();
  }

  /* --- Scene C: Terrain Park Kicker ATML Parabolic Trajectory --- */
  function drawParkKickerScene(ctx, W, H, p) {
    // Draw Kicker Jump Profile: Approach -> Takeoff Lip -> Table/Knuckle -> Sweet Spot Landing
    const groundY = H - 65;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(20, groundY - 35);
    ctx.lineTo(170, groundY - 35); // Approach flat
    ctx.quadraticCurveTo(235, groundY - 35, 275, groundY - 105); // Takeoff Lip (32° kick)
    ctx.lineTo(310, groundY - 60); // Step down to table
    ctx.lineTo(455, groundY - 60); // Flat Table ending at Knuckle (x=455)
    ctx.quadraticCurveTo(485, groundY - 60, 760, groundY + 15); // 32° Landing Slope
    ctx.lineTo(W - 20, groundY + 15);

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Zones Labels
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#fb923c';
    ctx.fillText('▲ 台口 Lip (Pop 50/50)', 210, groundY - 115);
    ctx.fillStyle = '#f43f5e';
    ctx.fillText('⚠️ Knuckle 平台高衝擊區', 345, groundY - 70);
    ctx.fillStyle = '#34d399';
    ctx.fillText('✅ Sweet Spot 落地甜蜜點 (Δθ < 8°)', 535, groundY - 35);

    // Parabolic Trajectory Curve
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = 'rgba(52, 211, 153, 0.55)';
    ctx.beginPath();
    ctx.moveTo(275, groundY - 105);
    ctx.quadraticCurveTo(435, groundY - 265, 610, groundY - 18);
    ctx.stroke();
    ctx.restore();

    // Compute Rider Position along ATML Timeline
    let rx = 0;
    let ry = 0;
    let tuck = 0;
    if (p < 0.30) {
      const t = p / 0.30;
      rx = 45 + t * 230;
      ry = t < 0.7 ? groundY - 35 : groundY - 35 - Math.pow((t - 0.7) / 0.3, 1.6) * 70;
    } else if (p < 0.78) {
      const t = (p - 0.30) / 0.48;
      rx = 275 + t * 335;
      // Parabola peaking at t=0.45
      const arc = 4 * t * (1 - t);
      ry = (1 - t) * (groundY - 105) + t * (groundY - 18) - arc * 135;
      tuck = Math.sin(t * Math.PI) * 26; // Shrink legs for Indy Grab!
    } else {
      const t = (p - 0.78) / 0.22;
      rx = 610 + t * 180;
      ry = groundY - 18 + t * 30;
      tuck = Math.sin(t * Math.PI) * 14; // Eccentric landing absorption
    }

    // Draw Rider & Board in Flight
    ctx.save();
    ctx.translate(rx, ry);
    ctx.fillStyle = '#fb923c';
    ctx.fillRect(-26, -4, 52, 7);

    // Legs & Torso (Tucked during grab!)
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 4.5;
    ctx.beginPath();
    ctx.moveTo(-12, -4);
    ctx.lineTo(0, -32 + tuck * 0.5);
    ctx.lineTo(12, -4);
    ctx.moveTo(0, -32 + tuck * 0.5);
    ctx.lineTo(0, -64 + tuck);
    ctx.stroke();

    // Indy Grab Hand reaching board in air
    if (p >= 0.38 && p <= 0.72) {
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, -52 + tuck);
      ctx.lineTo(4, -4);
      ctx.stroke();
      ctx.font = '800 11px "JetBrains Mono", monospace';
      ctx.fillStyle = '#34d399';
      ctx.fillText('✊ INDY GRAB (收膝非彎腰!)', -55, -80 + tuck);
    }

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(0, -75 + tuck, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  /* --- Scene D: Moguls Piston Absorption & Tree Line Gap Optical Flow --- */
  function drawTreesMogulsScene(ctx, W, H, p) {
    const baseSlopeY = H * 0.68;
    const phaseShift = p * Math.PI * 4;

    // Draw Mogul Bumps Wave
    ctx.save();
    ctx.beginPath();
    for (let x = 20; x < W - 20; x += 6) {
      const bumpY = baseSlopeY + Math.sin(x * 0.035 + phaseShift) * 36;
      if (x === 20) ctx.moveTo(x, bumpY);
      else ctx.lineTo(x, bumpY);
    }
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3.5;
    ctx.stroke();

    // Draw Horizontal COM Reference Line (Active Suspension Constant Level!)
    const comConstY = baseSlopeY - 95;
    ctx.setLineDash([8, 5]);
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, comConstY);
    ctx.lineTo(W - 40, comConstY);
    ctx.stroke();
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#34d399';
    ctx.fillText('━━━ 質心 COM 保持水平直線軌跡 (雙膝活塞吸收 ±35cm 地形高低差)', 52, comConstY - 10);
    ctx.restore();

    // Rider at x = W * 0.45
    const rx = W * 0.45;
    const currentSnowY = baseSlopeY + Math.sin(rx * 0.035 + phaseShift) * 36;
    const slopeDerivative = Math.cos(rx * 0.035 + phaseShift);

    // Draw Board hugging snow bump
    ctx.save();
    ctx.translate(rx, currentSnowY);
    ctx.rotate(Math.atan(slopeDerivative * 0.6));
    ctx.fillStyle = '#fb923c';
    ctx.fillRect(-36, -5, 72, 9);
    ctx.restore();

    // Piston Legs compressing between constant COM (comConstY) and variable Snow (currentSnowY)
    const kneeBendX = rx + 22;
    const kneeBendY = (comConstY + currentSnowY) * 0.5;

    ctx.save();
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(rx, currentSnowY - 4);
    ctx.lineTo(kneeBendX, kneeBendY);
    ctx.lineTo(rx, comConstY);
    ctx.lineTo(rx + 6, comConstY - 46);
    ctx.stroke();

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(rx, comConstY, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#0ea5e9';
    ctx.beginPath();
    ctx.arc(rx + 8, comConstY - 58, 11, 0, Math.PI * 2);
    ctx.fill();

    // Gaze Vector looking 3 bumps ahead
    drawArrow(ctx, rx + 18, comConstY - 58, rx + 240, comConstY - 35, '#fb923c', 2.2, '👁️ 視線提前鎖定第3顆雪包/樹隙');
    ctx.restore();
  }

  /* --- Scene E: Backcountry Powder Dolphin Turn & 457kHz Beacon Flux Search --- */
  function drawBackcountryAvalancheScene(ctx, W, H, p) {
    const cx = W * 0.52;
    const cy = H * 0.56;

    // Draw Dipole Electromagnetic Flux Lines from Buried Victim Transceiver (457 kHz)
    ctx.save();
    ctx.translate(cx + 120, cy);
    for (let r = 45; r <= 180; r += 45) {
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.28)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, -r * 0.45, r, r * 0.55, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(0, r * 0.45, r, r * 0.55, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Target Buried Beacon Icon
    const pulse = 8 + Math.sin(p * Math.PI * 8) * 5;
    ctx.fillStyle = 'rgba(244, 63, 94, 0.35)';
    ctx.beginPath();
    ctx.arc(0, 0, pulse * 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(0, 0, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.fillText('📡 457kHz 受困信號源 (埋深 1.2m)', -85, -18);
    ctx.restore();

    // Rescuer Path following Flux Curve -> Cross Bracketing (<3m) -> Downhill 1.5x Shovel
    const targetX = cx + 120;
    const targetY = cy;
    let rx = 0;
    let ry = 0;
    let distReadout = 0;

    if (p < 0.52) {
      const t = p / 0.52;
      rx = 95 + t * (targetX - 95);
      ry = cy + 95 * Math.sin(t * Math.PI);
      distReadout = ((1 - t) * 32 + 2.4).toFixed(1);
    } else if (p < 0.78) {
      // Fine Search Cross Bracketing (< 3m)
      const t = (p - 0.52) / 0.26;
      rx = targetX + Math.sin(t * Math.PI * 2) * 28;
      ry = targetY + Math.cos(t * Math.PI * 2) * 18;
      distReadout = (1.2 + Math.abs(Math.sin(t * Math.PI * 2)) * 1.1).toFixed(1);
    } else {
      // Strategic Shoveling 1.5x depth downhill
      rx = targetX + 45;
      ry = targetY + 42;
      distReadout = '1.2 (PINPOINT LOCKED)';
    }

    // Draw Rescuer & Beacon Vector
    ctx.save();
    ctx.fillStyle = '#34d399';
    ctx.beginPath();
    ctx.arc(rx, ry, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '800 12px "JetBrains Mono", monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText(`🔍 BEACON READOUT: ${distReadout}m`, rx - 75, ry - 16);

    if (p >= 0.78) {
      drawArrow(ctx, rx, ry, targetX + 6, targetY + 6, '#fb923c', 3, '⛏️ 下坡側 1.8m 處 V型水平開挖');
    }
    ctx.restore();
  }

  /* --------------------------------------------------------------------------
     3. LIVE BIOMECHANICS PARAMETER LAB (RIGHT STUDIO PANEL)
     -------------------------------------------------------------------------- */
  function initBiomechanicsLab(canvasId, controlsId) {
    const canvas = document.getElementById(canvasId);
    const controlsEl = document.getElementById(controlsId);
    if (!canvas || !controlsEl) return;

    labState.canvas = canvas;
    labState.ctx = canvas.getContext('2d');
    labState.controlsEl = controlsEl;

    renderLabControls();
    drawLabFrame();
  }

  function computeLabPhysics() {
    const thetaRad = (labState.edgeAngle * Math.PI) / 180;
    const vMs = labState.speedKmh / 3.6;
    const g = 9.81;

    // Effective carving radius R_eff = R_sc * cos(theta)
    const rEff = Math.max(1.2, labState.sidecutRadius * Math.cos(thetaRad));
    // Centripetal acceleration a_c = v^2 / R_eff
    const aCentripetal = (vMs * vMs) / rEff;
    const gForce = Math.sqrt(1 + Math.pow(aCentripetal / g, 2));

    // Ideal dynamic equilibrium inclination angle tan(theta_eq) = a_c / g
    const eqAngleDeg = (Math.atan(aCentripetal / g) * 180) / Math.PI;
    // Angulation bonus widens safe stability window
    const stabilityWindow = 14 + labState.angulation * 0.35;
    const angleDelta = labState.edgeAngle - eqAngleDeg;

    let statusText = '✅ 動態平衡鎖刃 (合向量穿過 BOS)';
    let statusColor = 'var(--emerald-400)';

    if (labState.edgeAngle < 8 && labState.speedKmh > 35) {
      statusText = '🚨 高危：高速平底易發生逆刃 (Catching Edge)!';
      statusColor = 'var(--crimson-400)';
    } else if (angleDelta > stabilityWindow) {
      statusText = '⚠️ 速度不足以支撐傾角：向彎內倒下 (內倒)!';
      statusColor = 'var(--orange-400)';
    } else if (angleDelta < -stabilityWindow) {
      statusText = '⚠️ 離心力過大且立刃不足：向外刮雪滑脫!';
      statusColor = 'var(--orange-400)';
    }

    return {
      rEff: rEff.toFixed(2),
      gForce: gForce.toFixed(2),
      eqAngleDeg: Math.round(eqAngleDeg),
      statusText,
      statusColor
    };
  }

  function renderLabControls() {
    const el = labState.controlsEl;
    if (!el) return;

    const metrics = computeLabPhysics();

    el.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.75rem;">
        <button type="button" class="pill-btn" data-lab-preset="beginner">🟢 初階 S彎 (30°)</button>
        <button type="button" class="pill-btn active" data-lab-preset="euro">🔥 歐式貼地刻滑 (78°)</button>
        <button type="button" class="pill-btn" data-lab-preset="butter">🌀 平花壓鼻 (85% Front)</button>
        <button type="button" class="pill-btn orange" data-lab-preset="danger">⚠️ 低速內倒臨界</button>
      </div>

      <div class="slider-group">
        <div class="slider-label-row">
          <span>1. 雪板立刃傾角 (Edge Tilt θ)</span>
          <span class="slider-val-badge" id="lbl-lab-edge">${labState.edgeAngle}°</span>
        </div>
        <input type="range" id="sld-lab-edge" class="scrubber-slider" min="0" max="85" value="${labState.edgeAngle}" />
      </div>

      <div class="slider-group" style="margin-top:0.55rem;">
        <div class="slider-label-row">
          <span>2. 滑行速度 (Speed v)</span>
          <span class="slider-val-badge" id="lbl-lab-speed">${labState.speedKmh} km/h</span>
        </div>
        <input type="range" id="sld-lab-speed" class="scrubber-slider" min="10" max="75" value="${labState.speedKmh}" />
      </div>

      <div class="slider-group" style="margin-top:0.55rem;">
        <div class="slider-label-row">
          <span>3. 前後腳配重比 (Fore / Aft Weight)</span>
          <span class="slider-val-badge" id="lbl-lab-foreaft">Front ${labState.foreAft}% / Rear ${100 - labState.foreAft}%</span>
        </div>
        <input type="range" id="sld-lab-foreaft" class="scrubber-slider" min="15" max="90" value="${labState.foreAft}" />
      </div>

      <div class="slider-group" style="margin-top:0.55rem;">
        <div class="slider-label-row">
          <span>4. 髖膝折角 (Hip/Knee Angulation)</span>
          <span class="slider-val-badge" id="lbl-lab-ang">${labState.angulation}°</span>
        </div>
        <input type="range" id="sld-lab-ang" class="scrubber-slider" min="0" max="45" value="${labState.angulation}" />
      </div>

      <div class="telemetry-readout-grid">
        <div class="readout-box">
          <span class="lbl">有效刻滑半徑 R_eff</span>
          <span class="val" id="out-lab-reff">${metrics.rEff} m</span>
        </div>
        <div class="readout-box">
          <span class="lbl">彎心合成 G 力負荷</span>
          <span class="val" id="out-lab-gforce" style="color:var(--cyan-400);">${metrics.gForce} G</span>
        </div>
        <div class="readout-box">
          <span class="lbl">理論平衡傾角 θ_eq</span>
          <span class="val" id="out-lab-eq" style="color:var(--orange-400);">${metrics.eqAngleDeg}°</span>
        </div>
        <div class="readout-box">
          <span class="lbl">生物力學穩定度診斷</span>
          <span class="val" id="out-lab-status" style="font-size:0.78rem; color:${metrics.statusColor};">${metrics.statusText}</span>
        </div>
      </div>
    `;

    const bindSlider = (id, key) => {
      const sld = el.querySelector('#' + id);
      if (!sld) return;
      sld.addEventListener('input', (e) => {
        labState[key] = parseFloat(e.target.value);
        updateLabDOM();
        drawLabFrame();
      });
    };

    bindSlider('sld-lab-edge', 'edgeAngle');
    bindSlider('sld-lab-speed', 'speedKmh');
    bindSlider('sld-lab-foreaft', 'foreAft');
    bindSlider('sld-lab-ang', 'angulation');

    el.querySelectorAll('[data-lab-preset]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-lab-preset');
        if (preset === 'beginner') {
          Object.assign(labState, { edgeAngle: 28, speedKmh: 24, foreAft: 55, angulation: 15 });
        } else if (preset === 'euro') {
          Object.assign(labState, { edgeAngle: 78, speedKmh: 58, foreAft: 50, angulation: 36 });
        } else if (preset === 'butter') {
          Object.assign(labState, { edgeAngle: 22, speedKmh: 26, foreAft: 85, angulation: 28 });
        } else if (preset === 'danger') {
          Object.assign(labState, { edgeAngle: 72, speedKmh: 16, foreAft: 35, angulation: 4 });
        }
        renderLabControls();
        drawLabFrame();
      });
    });
  }

  function updateLabDOM() {
    const metrics = computeLabPhysics();
    const setTxt = (id, txt) => {
      const node = document.getElementById(id);
      if (node) node.textContent = txt;
    };
    setTxt('lbl-lab-edge', `${labState.edgeAngle}°`);
    setTxt('lbl-lab-speed', `${labState.speedKmh} km/h`);
    setTxt('lbl-lab-foreaft', `Front ${labState.foreAft}% / Rear ${100 - labState.foreAft}%`);
    setTxt('lbl-lab-ang', `${labState.angulation}°`);
    setTxt('out-lab-reff', `${metrics.rEff} m`);
    setTxt('out-lab-gforce', `${metrics.gForce} G`);
    setTxt('out-lab-eq', `${metrics.eqAngleDeg}°`);

    const stNode = document.getElementById('out-lab-status');
    if (stNode) {
      stNode.textContent = metrics.statusText;
      stNode.style.color = metrics.statusColor;
    }
  }

  function drawLabFrame() {
    const { canvas, ctx, edgeAngle, angulation } = labState;
    if (!canvas || !ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const metrics = computeLabPhysics();

    ctx.fillStyle = '#060a12';
    ctx.fillRect(0, 0, W, H);

    // Draw Snow Slope Line
    const bosX = W * 0.56;
    const bosY = H - 36;
    ctx.save();
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(20, bosY);
    ctx.lineTo(W - 20, bosY);
    ctx.stroke();

    // Draw Tilted Snowboard Cross-Section at edgeAngle
    const edgeRad = (edgeAngle * Math.PI) / 180;
    ctx.save();
    ctx.translate(bosX, bosY);
    ctx.rotate(-edgeRad);
    ctx.fillStyle = '#fb923c';
    ctx.fillRect(0, -6, 68, 6);
    ctx.restore();

    // Compute Rider Skeleton with Inclination & Hip Angulation
    const bodyLeanRad = (Math.min(72, edgeAngle * 0.78) * Math.PI) / 180;
    const angRad = (angulation * Math.PI) / 180 * 0.65;

    const comX = bosX - Math.sin(bodyLeanRad) * 95;
    const comY = bosY - Math.cos(bodyLeanRad) * 95;
    const headX = comX - Math.sin(bodyLeanRad - angRad) * 62;
    const headY = comY - Math.cos(bodyLeanRad - angRad) * 62;

    // Draw Skeleton (BOS -> COM -> Head)
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(bosX, bosY);
    ctx.lineTo(comX, comY);
    ctx.lineTo(headX, headY);
    ctx.stroke();

    // Head & COM markers
    ctx.fillStyle = '#0ea5e9';
    ctx.beginPath();
    ctx.arc(headX, headY, 9, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(comX, comY, 7, 0, Math.PI * 2);
    ctx.fill();

    // Draw Resultant Force Vector from COM toward Snow Surface
    const eqRad = (metrics.eqAngleDeg * Math.PI) / 180;
    const vecEndX = comX + Math.sin(eqRad) * 98;
    const vecEndY = comY + Math.cos(eqRad) * 98;
    drawArrow(ctx, comX, comY, vecEndX, Math.min(bosY, vecEndY), '#fb923c', 2.8, 'F_res 合力向量');
    drawArrow(ctx, comX, comY, comX, Math.min(bosY, comY + 65), '#34d399', 2.0, 'mg');

    // BOS Contact Point Indicator
    ctx.fillStyle = '#fb923c';
    ctx.beginPath();
    ctx.arc(bosX, bosY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.fillText(`BOS 工作刃 (${edgeAngle}°)`, bosX + 10, bosY + 18);
    ctx.restore();
  }

  /* --------------------------------------------------------------------------
     4. PUBLIC API (window.SBSimulators)
     -------------------------------------------------------------------------- */
  function setPlayerMode(rawMode) {
    playerState.mode = normalizeMode(rawMode);
    playerState.progress = 0;
    playerState.playing = true;
    renderPlayerControls();
  }

  window.SBSimulators = {
    initMotionPlayer,
    initBiomechanicsLab,
    setPlayerMode
  };
})();
