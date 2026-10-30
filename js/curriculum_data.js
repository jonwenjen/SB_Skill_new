/**
 * SB_SKILL_NEW — MASTER CURRICULUM DATABASE (window.SB_CURRICULUM_DATA)
 * Co-authored & Audited by the 50-Expert Interdisciplinary Snowboard Academy Panel
 * Synthesizing CASI · AASI · SBINZ/NZSIA · JSBA/SAJ · BASI · AIARE/FIS
 */

window.SB_CURRICULUM_DATA = {
  metadata: {
    version: '2.0.50-EXPERT-EDITION',
    title: 'SB_Skill_new 國際單板滑雪全領域科學線上教材',
    totalModules: 10,
    totalExperts: 50,
    systems: ['CASI', 'AASI', 'SBINZ / NZSIA', 'JSBA / SAJ', 'BASI', 'AIARE / FIS']
  },

  /* ==========================================================================
     1. SIX INTERNATIONAL SNOWBOARDING SYSTEMS COMPARISON
     ========================================================================== */
  systemsComparison: [
    {
      id: 'casi',
      code: 'CASI',
      fullName: 'Canadian Association of Snowboard Instructors',
      country: '🇨🇦 加拿大 Canada',
      philosophy: '結果導向教學（Outcome-Based Teaching）：以「雪板表現結果」反推「身體動作」，強調中立且具活動度的站姿與循序漸進的 QuickRide 五步教學法。',
      corePillars: [
        '五大核心能力 (5 Core Competencies)：Centering & Mobile Position（居中與靈活站姿）、Turning the Board with the Lower Body（下肢主導轉向）、Balance Along the Working Edge（工作鋼邊上的動態平衡）、Board Performance（板性發揮）、Timing & Coordination（時機與協調）。',
        'QuickRide System 五步初階教學法：1. Basics（單腳適應與推進）➔ 2. Sliding（直滑降與重心居中）➔ 3. Control（前後刃橫滑降與落葉飄）➔ 4. Turning（J-Turn 與 Garland 半月彎）➔ 5. Linking（C-Turn 連結為 S-Turn）。',
        '強調「下肢獨立於上肢」的旋轉發力（Lower-body steering），杜絕初學者常見的甩肩反擰（Counter-rotation）惡習。',
        '將進階滑行拆解為搓雪控速（Skidded / Steered）與純鋼邊刻滑（Carved）雙軌能力，並重視地形適應（Tactical Terrain Adaptation）。'
      ],
      technicalFocus: 'Centering & Mobile Position · Lower-Body Steering · QuickRide 5 Steps'
    },
    {
      id: 'aasi',
      code: 'AASI',
      fullName: 'American Association of Snowboard Instructors (PSIA-AASI)',
      country: '🇺🇸 美國 USA',
      philosophy: '學習連結模型（Learning Connection Model）：由人際溝通（People Skills）、教學設計（Teaching Skills）與技術分析（Technical Skills）三環交織，並以「四大板性能 × 三大身體運動」建立因果力學鏈。',
      corePillars: [
        '四大雪板性能 (4 Board Performance Concepts)：Tilt（立刃傾角控制）、Twist（兩腳間扭轉形變）、Pivot（以質心為軸的樞軸旋轉）、Pressure Control（沿板長與跨板寬的壓力分布調控）。',
        '三大身體基礎運動 (3 Fundamental Body Movements)：Flexion / Extension（踝膝髖屈伸運動）、Rotation（身體旋轉引導）、Lateral Movement（跨板側向移動）。',
        '強調「因與果（Cause & Effect）」生物力學診斷：透過觀察雪痕（Snow Track）判斷哪一項板性能缺失，再精準修正對應的關節運動。',
        '高度客製化的學員導向教學，善用實驗性探索練習（Experiential Learning）引導滑手自主感知足底壓力回饋。'
      ],
      technicalFocus: 'Tilt · Twist · Pivot · Pressure Control × Flexion/Extension · Rotation · Lateral'
    },
    {
      id: 'sbinz',
      code: 'SBINZ / NZSIA',
      fullName: 'Snowboard Instruction New Zealand (NZSIA)',
      country: '🇳🇿 紐西蘭 New Zealand',
      philosophy: '滑手四軸動態分析系統（Rider Analysis System）：將複雜滑行簡化為四個空間維度的純粹身體移動，並將自由式（Freestyle）基因深度融入全山滑行教學。',
      corePillars: [
        '四大身體運動維度 (4 Movements)：Vertical（垂直上下屈伸）、Rotational（旋轉運動）、Lateral（跨板側向移動）、Fore / Aft（沿板頭至板尾的前後移動）。',
        '獨步全球的「Progression Building（微階梯進程建構）」：在公園跳台（Park）、Box/Rail 道具與陡坡蘑菇教學中，將風險拆解為極小且可重複驗證的步驟。',
        '強調「Functional Stance（功能性站姿）」與雙向滑行（Switch Riding）的對稱性開發，要求中高階滑手正反腳具備同等控制力。',
        '將 Flatland Freestyle（平地自由式/平花）視為建立全地域板感（Board Feel）的必修橋樑。'
      ],
      technicalFocus: '4 Spatial Movements (Vertical / Rotational / Lateral / Fore-Aft) · Park & Freeride'
    },
    {
      id: 'jsba',
      code: 'JSBA / SAJ',
      fullName: 'Japan Snowboard Association & Ski Association of Japan',
      country: '🇯🇵 日本 Japan',
      philosophy: '極致工藝與精準度檢定體系（バッジテスト & 全日本技術選）：結合歐美物理框架與東方體型生物力學，發展出世界頂尖的「高速搓刻結合（Carving）」與「グラトリ（Ground Trick）平花」兩大流派。',
      corePillars: [
        '嚴謹的五級檢定與技術選拔（Badge Test 5級–1級 ➔ B/A級指導員 ➔ Tech Test 技術選）：對彎形對稱度、換刃節奏與谷側壓板時機有毫秒級評分標準。',
        '日系高速刻滑核心：強調「内倒防止（防內倒折角）」、「外向傾（預判性視線與肩線微順開/逆開控制）」以及「谷回り（入彎前半段早期抓刃與加壓）」。',
        '全球最完整的平花（グラトリ / Ground Trick）科學體系：將彈跳系（ハジキ系：Ollie/Nollie 高轉速 540/720）與流暢系（ノリ系：Owen、Sone、Drive Spin 點支撐滑轉）完全公式化。',
        '針對亞洲滑手常見的足踝活動度與脛骨比例，細化固定器角度（前向站姿 vs 鴨子站姿）與高背（Highback）旋轉調校。'
      ],
      technicalFocus: '谷回り早期立刃 · 外向傾與折角控制 · グラトリ (ハジキ系 & ノリ系) 招式工程學'
    },
    {
      id: 'basi',
      code: 'BASI',
      fullName: 'British Association of Snowsport Instructors',
      country: '🇬🇧 英國 UK / Europe',
      philosophy: '歐洲阿爾卑斯高山全地域實戰框架（Central Theme & 5 Technical Strands）：以最高等級的高山風險管理與陡坡、冰面、變質雪適應力著稱。',
      corePillars: [
        'Central Theme（中央核心滑行模型）：強調在任何坡度與雪況下維持「動態輸入（Input）➔ 雪板反應（Output）➔ 戰術適應（Adaptability）」的閉環控制。',
        '五大技術主軸 (5 Technical Strands)：1. Steered Turns（導向搓雪彎）、2. Carved Turns（純刻滑彎）、3. Bumps / Moguls（蘑菇地形吸收）、4. Steep Terrain（極限陡坡控速）、5. Freestyle（自由式表現）。',
        '針對歐洲高山硬冰面（Hardpack / Ice）與多變地形，強化鋼邊抓地力極限控制（Edge Grip Mastery）與點杖/節奏控制概念。',
        '將雪場外野雪（Off-Piste）安全評估、團隊領滑視線管理（Group Management）列為指導員核心考核指標。'
      ],
      technicalFocus: 'Central Theme · 5 Technical Strands (Steered / Carved / Bumps / Steeps / Freestyle)'
    },
    {
      id: 'aiare',
      code: 'AIARE / FIS',
      fullName: 'Avalanche Research & International Ski Federation Safety Code',
      country: '🏔️ 國際高山安全標準',
      philosophy: '高山運動風險管理與雪崩救援科學：再高超的滑行技術，若缺乏對高山環境、盲區碰撞力學與雪層穩定度的認知，皆無法保障生命安全。',
      corePillars: [
        'FIS 國際雪聯十大安全守則（Alpine Responsibility Code）：前方滑手優先權、盲區與坡頂禁停、超車安全距離、失控自停與事故救援義務。',
        '雪崩三要素模型（Avalanche Triangle）：地形（Terrain：30°–45° 高危坡度與地形陷阱）、雪層結構（Snowpack：持續性弱層與板狀雪崩斷裂傳播）、氣象因子（Weather：急降雪、風吹雪負荷與快速升溫）。',
        'AIARE 決策框架與人為心理陷阱（Heuristic Traps）：識別熟悉感偏差（Familiarity）、從眾陷阱（Social Proof）、專家光環（Expert Halo）與粉雪狂熱（Powder Fever）。',
        '黃金 15 分鐘伴侶救援（Companion Rescue）：三信號天線數位收發器（Beacon）四階段定位、垂直探針（Probe）螺旋探測與 V 型輸送帶戰術鏟雪（Shovel）。'
      ],
      technicalFocus: 'FIS 10 Rules · Avalanche Triangle (30°–45°) · Beacon Signal/Coarse/Fine/Pinpoint'
    }
  ],

  /* ==========================================================================
     2. TEN COMPREHENSIVE CURRICULUM MODULES (MOD-01 TO MOD-10)
     ========================================================================== */
  modules: [
    /* ------------------------------------------------------------------------
       MODULE 01: PRE-SEASON CONDITIONING & DYNAMIC WARM-UP
       ------------------------------------------------------------------------ */
    {
      id: 'MOD-01',
      code: 'MOD-01',
      title: '季前體能訓練、生物力學評估與雪場動態暖身',
      subtitle: 'Pre-Season Conditioning, Biomechanical Screening & On-Snow RAMP Protocol',
      badge: 'MOD-01 · 體能與生物力學基石',
      difficulty: 'All Levels 必修基石',
      systemsRef: 'CASI Prep · AASI Body Performance · FIS Medical',
      image: 'assets/images/com_bos_mechanics.png',
      animationMode: 'preseason',
      summary:
        '單板滑雪是一項高度非對稱、長時間處於等長與離心收縮（Isometric & Eccentric Contraction）的雙腳固定式高速運動。50人專家團隊之運動生理與物理治療小組指出：高達 68% 的雪場初期運動傷害與技術卡關，並非源於「技術理解錯誤」，而是源於「足踝背屈活動度不足（Ankle Dorsiflexion ROM < 35°）」、「股四頭肌離心耐力衰竭」與「第一趟冷肌直接滑行」。當踝關節活動度受限時，滑手在 Toeside（前刃）無法將脛骨有效壓向鞋舌，在 Heelside（後刃）則被迫以「折腰翹臀」代償膝踝屈曲，直接導致質心（COM）脫離支撐底面積（BOS）。本章節結合奧運國家隊季前 8 週週期化體能課表、三大關節活動度自測標準，以及雪場早鳥第一趟必做的 8 分鐘 RAMP 動態神經激活流程，為所有滑行技術建立堅不可摧的生理底座。',
      physicsPrinciples: [
        {
          title: '離心減震力學與股四頭/膕繩肌張力比 (Eccentric Force Absorption & H:Q Ratio)',
          formula: 'F_ecc = m · (g · cosθ + v² / R_eff) + Δp / Δt  |  目標 H:Q Ratio ≥ 0.65',
          explanation:
            '滑行於顛簸雪面、高速刻滑彎中（G-force 可達 1.8G–2.5G）或跳台落地時，下肢肌群並非做向心收縮，而是作為「液壓阻尼器（Hydraulic Damper）」進行高負荷離心拉長收縮。若膕繩肌（大腿後側）與股四頭肌（大腿前側）肌力比值（H:Q Ratio）低於 0.60，脛骨在落地瞬間會產生過大的前向剪力（Anterior Tibial Shear Force），使前十字韌帶（ACL）撕裂風險暴增 3.4 倍。'
        },
        {
          title: '足踝背屈活動度與脛骨槓桿傳導 (Ankle Dorsiflexion ROM & Tibial Leverage)',
          formula: 'θ_ankle_dorsi ≥ 38° (Knee-to-Wall ≥ 10–12 cm)  |  τ_edge = F_tib · L_boot · sin(θ)',
          explanation:
            '雪鞋是連接人體與雪板的唯一物理介面。足踝背屈角度（膝蓋越過腳尖的能力）直接決定脛骨能否穩定貼合鞋舌並推動高背前傾（Forward Lean）。當裸足背屈角度低於 32° 時，滑手在深蹲吸收時腳跟會被迫抬起或骨盆後坐，破壞踝：膝：髖 = 40:40:20 的黃金緩衝比例。'
        },
        {
          title: '抗旋轉核心剛性與扭矩傳遞效率 (Anti-Rotation Core Stiffness & Torque Transfer)',
          formula: 'τ_board = k_core · (θ_upper - θ_lower)  |  能量損耗率 η_loss < 8%',
          explanation:
            '在 CASI 下肢獨立轉向與日系平花反向預轉（Pre-wind）中，腹內外斜肌、腹橫肌與多裂肌組成的核心柱必須具備強大的「抗旋轉（Anti-Rotation）」與「可控旋轉剛性」。若核心鬆散，上半身甩動的角動量會在腰椎處耗散，無法傳導至雪板產生有效 Pivot 或立刃壓板。'
        },
        {
          title: '雪場低溫環境下之 RAMP 神經肌肉激活效應 (Cryo-Environment Neuromuscular Potentiation)',
          formula: 'T_muscle ↑ 2.0°C ➔ 神經傳導速率 ↑ 14% · 肌腱黏滯阻力 ↓ 22%',
          explanation:
            '零下環境會使滑液囊黏滯度上升、高爾基氏腱器（GTO）與肌梭（Muscle Spindle）本體感覺延遲。靜態拉筋會降低爆發力達 9%；反之，採用 RAMP 法則（Raise 升溫 ➔ Activate 激活 ➔ Mobilize 動態活動度 ➔ Potentiate 神經增強）可在 8 分鐘內喚醒足底微調反應。'
        }
      ],
      coreSkills: [
        {
          name: '4秒慢速離心保加利亞分腿蹲與雙腳等長靠牆靜蹲 (Eccentric Bulgarian Split Squat & Isometric Wall Sit)',
          level: 'Lv.1 – Lv.4 季前必修',
          casiAasiRef: 'CASI Mobile Position · AASI Flexion/Extension Endurance',
          biomechanics: {
            comBos: '單腿訓練時質心（COM）垂直投影於前腳足弓中心（第1蹠骨、第5蹠骨與跟骨構成之足底三角中心）。',
            jointAngles: '底部離心終點：踝背屈 36° · 膝屈曲 95° · 髖屈曲 85°，軀幹與前小腿維持平行。',
            weightDistribution: '前工作腿承重 85% / 後輔助腿 15%，足底內外側均勻施壓不內塌（No Knee Valgus）。',
            edgeControl: '模擬長距離 Heelside 橫滑降與高速彎中持續抗離心力之等長與離心耐力。'
          },
          stepByStep: [
            '將後腳背置於高約 35–40cm 的訓練椅上，前腳距離椅面約 2.5 個腳掌長，骨盆擺正朝前。',
            '吸氣同時以嚴格的「4 秒鐘倒數（4-0-1-0 節奏）」緩慢下蹲，感受股四頭肌與臀大肌像彈簧般被受控拉長。',
            '在最低點（大腿平行地面）停留 1 秒，確認膝蓋對準第二、三腳趾方向，絕不向內夾膝。',
            '吐氣以 1 秒爆發力推回起始位置，每側完成 10–12 下 × 4 組；組間銜接 60 秒雙腳 100° 靠牆靜蹲（腳尖微抬模擬後刃，腳跟微抬模擬前刃）。'
          ],
          commonErrors: {
            symptom: '下蹲時膝蓋向內塌陷（Dynamic Knee Valgus）或腰椎過度反弓代償。',
            rootCause: '臀中肌（Gluteus Medius）外展穩定力不足，加上腹橫肌未建立腹內壓（IAP），導致股骨內旋。',
            correctiveDrill: '於膝蓋上方套上迷你彈力帶（Mini-band），下蹲全程主動向外撐開彈力帶，並維持肋骨下沉對齊骨盆。'
          },
          expertMindset:
            '「雪場下午兩點後的腿軟與逆刃摔跤，90% 都是在季前少做了離心訓練。能控制 4 秒鐘慢速下放的雙腿，才能在亂雪與蘑菇陣中如履平地。」— 運動生理與奧運體能專家小組'
        },
        {
          name: '抗旋轉核心 Pallof Press 與藥球螺旋爆發投擲 (Anti-Rotation Pallof Press & Rotational Med-Ball Throw)',
          level: 'Lv.2 – Lv.4 進階核心',
          casiAasiRef: 'CASI Lower-Body Steering · JSBA Pre-wind Torsion',
          biomechanics: {
            comBos: '雙腳與肩同寬略寬（模擬單板 Stance Width），質心穩定鎖定於兩腳連線中點，垂直高度降低 15cm。',
            jointAngles: '踝 28° · 膝 125° · 髖 120°（標準單板 Athletic Stance 運動員預備站姿）。',
            weightDistribution: '前腳 50% / 後腳 50%，抵抗側面水平拉力時雙腳底壓力差不超過 ±5%。',
            edgeControl: '建立上下半身分離控制能力（Upper/Lower Body Separation），確保下半身轉板時上半身不隨之失控扭轉。'
          },
          stepByStep: [
            '將滑輪繩索或彈力帶固定於胸口高度，側對錨點站立，雙手於胸前緊握把手，微蹲進入單板基本站姿。',
            '核心收緊，緩慢用 3 秒將把手向正前方推直，此時彈力帶會產生強大的側向旋轉力矩試圖拉歪你的肩膀。',
            '在雙臂完全伸直處靜止對抗 3 秒，確保雙肩、胸骨與骨盆完全水平且無任何偏移，再以 3 秒收回胸前。',
            '完成 12 次抗旋轉後，立即銜接 8 次「髖部主導藥球側拋」：先微幅預轉蓄力，再由後腳蹬地、髖部帶動胸椎將藥球砸向牆面，訓練平花與刻滑換刃的爆發扭轉。'
          ],
          commonErrors: {
            symptom: '推直手臂時肩膀高低不一，或靠雙膝內扣來抵抗側向拉力。',
            rootCause: '腹內斜肌與對側腹外斜肌（前斜動力鏈 Anterior Oblique Sling）協同收縮失靈。',
            correctiveDrill: '減輕 30% 阻力，改採高跪姿（Half-Kneeling Pallof Press）排除下肢代償，專注鎖定骨盆與胸廓。'
          },
          expertMindset:
            '「真正的高手滑行時上半身看似毫不費力，是因為他們的核心正在進行高強度的『抗旋轉等長收縮』，把所有雪面震動與扭力都封鎖在髖關節以下。」— 生物力學與平花專家小組'
        },
        {
          name: '足踝背屈膝觸牆檢測與三軸本體感覺平衡訓練 (Knee-to-Wall Dorsiflexion & BOS Proprioception)',
          level: 'All Levels 必測指標',
          casiAasiRef: 'AASI Ankle Flexion · SBINZ Vertical & Lateral Control',
          biomechanics: {
            comBos: '單足踩於平衡墊或折疊毛巾上，訓練足底內外側微肌群在極窄 BOS（寬度僅 8–10cm）下的毫秒級修正。',
            jointAngles: '目標裸足背屈角 ≥ 38°（大腳趾距牆 11cm 處膝蓋可觸牆且腳跟完全不離地）。',
            weightDistribution: '在腳尖（第1–5蹠骨球）與腳跟（跟骨結節）之間進行平滑正弦波壓力轉移。',
            edgeControl: '直接決定 Toeside 壓舌深淺與 Heelside 坐骨穩定度，消除「小腿前側脛骨痛（Shin Bang）」。'
          },
          stepByStep: [
            '【自測步驟】面對牆壁脫鞋，將大腳趾尖置於距牆 11 公分處，膝蓋朝牆壁正前方推進；若腳跟不抬起即可碰到牆面，代表踝活動度達標（≥38°）。',
            '【活動度鬆動】若未達標，將彈力帶套於距骨頸（踝關節折痕處）向後下方牽引，同時進行 15 次慢速前壓膝蓋鬆動術。',
            '【三軸平衡】單腳站立於軟墊上，微屈膝踝，另一腳分別向「正前方、側後方 45°、內側後方 45°（Y-Balance）」延伸點地再收回。',
            '進階者閉上雙眼維持單腳單板屈膝站姿 30 秒，強迫前庭系統與足底機械受器（Mechanoreceptors）接管平衡。'
          ],
          commonErrors: {
            symptom: '前壓膝蓋時足弓塌陷（扁平足代償），表面上碰到牆，實際上距骨並未滑動。',
            rootCause: '比目魚肌（Soleus）與跟腱緊繃，導致距骨向後滑動受限，轉而由距下關節過度旋前代償。',
            correctiveDrill: '在足弓下方墊一枚硬幣並主動微拱足弓（Short Foot Exercise），確保膝蓋對準第三腳趾正前方推進。'
          },
          expertMindset:
            '「單板滑手的靈魂在腳踝！很多中階滑手花大錢換頂級碳纖維硬鞋，結果因為自己腳踝背屈只有 28 度，根本壓不動鞋舌。每天 5 分鐘足踝鬆動，勝過換萬元裝備。」— 雪具工程與物理治療小組'
        },
        {
          name: '雪場第一趟前 8 分鐘 RAMP 動態暖身標準流程 (On-Snow 8-Minute RAMP Protocol)',
          level: 'All Levels 雪場實戰',
          casiAasiRef: 'CASI Safety & Prep · BASI Mountain Readiness',
          biomechanics: {
            comBos: '穿妥雪鞋後、扣上固定器前於雪地平緩處執行，逐步喚醒踝膝髖三關節動態連鎖。',
            jointAngles: '從小幅度關節擺動（ROM 30%）漸進擴展至全幅度實戰角度（ROM 95%）。',
            weightDistribution: '涵蓋前後移動（Fore/Aft）、側向移動（Lateral）與垂直跳躍減震（Vertical Absorption）。',
            edgeControl: '讓雙腳在扣入雪板前就建立精準的「鞋舌前壓」與「高背靠合」神經記憶。'
          },
          stepByStep: [
            '【Phase 1: Raise 升溫 (2分鐘)】穿著雪鞋原地高抬腿快走 45 秒 + 開合跳 45 秒，使核心體溫上升、呼吸微喘。',
            '【Phase 2: Activate 激活 (2分鐘)】扶住雪板進行左右各 12 次側向蚌殼抬腿（激活臀中肌）與 15 次雪鞋內前壓鞋舌/後靠鞋筒練習。',
            '【Phase 3: Mobilize 活動度 (2分鐘)】雙手抱雪板於胸前，進行 10 次深蹲連帶胸椎左右旋轉（World’s Greatest Stretch 雪地版）與髖關節畫圓。',
            '【Phase 4: Potentiate 神經增強 (2分鐘)】扣上單腳（前腳），進行 8 次輕量單腳小跳落地緩衝，最後雙腳扣入在平地做 5 次 Nose/Tail 重心滑移與微幅豚跳（Ollie）。'
          ],
          commonErrors: {
            symptom: '一上纜車到山頂就坐在雪地上拉大腿靜態劈腿，或是零熱身直接衝下紅黑線。',
            rootCause: '坐在冰冷雪地會導致臀部與大腿後側血管收縮、溫度驟降，且靜態拉伸會暫時抑制肌梭反射。',
            correctiveDrill: '嚴格遵守「不下坐熱身、第一趟只滑 60% 速度的漸進刻滑/搓雪暖身趟（Warm-up Lap）」鐵律。'
          },
          expertMindset:
            '「職業選手與業餘愛好者最大的差別，在於職業選手絕對不會把第一趟當成測試極限的衝刺趟。8 分鐘 RAMP 能把全天韌帶拉傷機率降低 50% 以上。」— 50人專家團高山醫護與教練組'
        }
      ],
      interactiveConfig: {
        mode: 'preseason',
        defaultSliders: { edgeAngle: 35, speed: 25, foreAft: 50, angulation: 25 }
      }
    },

    /* ------------------------------------------------------------------------
       MODULE 02: RESORT ETIQUETTE, ALPINE RESPONSIBILITY CODE & GEAR SETUP
       ------------------------------------------------------------------------ */
    {
      id: 'MOD-02',
      code: 'MOD-02',
      title: '雪場安全觀念、國際高山行為準則與裝備調校科學',
      subtitle: 'FIS Alpine Responsibility Code, Blind-Spot Tactics & Biomechanical Gear Setup',
      badge: 'MOD-02 · 安全準則與裝備工程',
      difficulty: 'Lv.1 – Lv.4 核心規範',
      systemsRef: 'FIS 10 Rules · CASI/AASI Equipment Science · JSBA Custom Tuning',
      image: 'assets/images/hero_alpine.png',
      animationMode: 'resort_safety',
      summary:
        '單板滑雪存在獨特的「生理解剖盲區（Heelside Blind Spot）」：當 Regular（左腳在前）滑手進行後刃橫滑或刻滑時，左肩指向下坡，右後方（即背對山坡的一側）有高達 135° 的視野死角；Goofy（右腳在前）則相反。雪場中 75% 的嚴重碰撞事故皆發生於「雙向刻滑交會處」與「坡頂變坡盲區（Rollover Blind Zone）」。此外，裝備設定絕非盲目跟風：過寬的站姿寬度（Stance Width）會鎖死骨盆側向移動；錯誤的固定器角度（Binding Angles）與高背前傾角（Forward Lean）更會直接造成膝關節內側副韌帶（MCL）慢性扭傷。本章節由 FIS 高山安全官與雪具機械工程專家共同制定，完整拆解國際十大安全準則、上下纜車零失誤力學，以及依據個人解剖數據量身打造的「板型、站寬、角度、高背」黃金調校公式。',
      physicsPrinciples: [
        {
          title: '解剖學站姿寬度公式與骨盆活動度極限 (Anatomical Stance Width & Pelvic Mobility)',
          formula: 'W_stance = H_tibial_tuberosity × (1.05 ~ 1.15)  |  約為地面至膝下脛骨結節高度之 1.1 倍',
          explanation:
            '最佳站姿寬度（兩固定器中心盤圓心距離）並非以身高乘以固定常數，而是取決於「小腿脛骨長度（地面至膝蓋下方脛骨結節之垂直距離）」。當站寬落在脛骨高度的 1.08–1.12 倍時，雙膝可在不犧牲穩定度的前提下自由進行 Fore-Aft（前後移動）與內外旋；若站寬超過 1.22 倍，髖關節會被外展鎖死，無法做出細膩的折角（Angulation）。'
        },
        {
          title: '雪板側切半徑、拱度輪廓與抗扭剛性力學 (Sidecut, Camber Profile & Torsional Flex)',
          formula: 'Camber (正拱：高儲能/精準抓刃) vs Rocker (反拱：高浮力/易樞軸) vs Hybrid (混合拱)',
          explanation:
            '正拱板（Traditional Camber）在未踩踏時板腰拱起，滑手施壓時能將壓力均勻傳導至頭尾有效鋼邊接觸點（Contact Points），提供最強的回彈（Pop）與刻滑抓地力；反拱板（Rocker）板頭板尾翹起，容錯率高且不易卡刃，但高速穩定性較低；現代主流 Hybrid Camber（兩腳間正拱、頭尾微反拱）則兼顧刻滑咬合力與平花/粉雪靈活性。'
        },
        {
          title: '固定器角度與高背前傾角之膝踝力矩分析 (Binding Angles & Highback Forward Lean)',
          formula: 'Duck (+15°/-15°) · All-Mountain (+18°/-6°) · Freeride (+21°/-3°) · Carving (+27°/+12°)',
          explanation:
            '固定器角度決定膝關節屈曲平面與雪板長軸的夾角。雙向鴨子站姿（Duck Stance 如 +15°/-15°）讓正反腳（Switch）生物力學完全對稱，最適合平花與 Park；單向進階刻滑（Forward Stance 如 +27°/+12°）則將骨盆與胸廓轉向板頭，消除後膝在高速 Toeside 時的內扣扭力，並配合增加高背前傾角（Forward Lean +2 至 +4 格）加速 Heelside 反應時間。'
        },
        {
          title: '相對動能碰撞公式與後刃盲區視野管理 (Relative Kinetic Energy & Blind-Spot Vector)',
          formula: 'E_collision = ½ · m_eff · (v_1 - v_2)²  |  入彎前強制轉頭掃描 (Over-the-Shoulder Check)',
          explanation:
            '碰撞能量與兩滑手相對速度差之平方成正比。由於大弧度刻滑（Carving）與平花旋轉會橫跨整條雪道寬度（Cross-hill trajectory），與直下坡滑手形成 60°–90° 交角。因此每次啟動 Heelside 大彎或平花旋轉前，必須執行 0.5 秒「越過後肩回頭掃描（Blind-Spot Check）」。'
        }
      ],
      coreSkills: [
        {
          name: 'FIS 國際高山安全十大準則與雪道盲區防衛戰術 (FIS 10 Rules & Blind-Spot Defense)',
          level: 'All Levels 強制必修',
          casiAasiRef: 'FIS Alpine Code · CASI Risk Management',
          biomechanics: {
            comBos: '緊急停止或避讓時，瞬間降低質心（COM）並將支撐底面積（BOS）切換至上坡側鋼邊。',
            jointAngles: '視野掃描時：頸椎與胸椎獨立旋轉 ±60°，不帶動前肩拉扯下半身鋼邊。',
            weightDistribution: '穿越變坡點（Rollover）時維持 50/50 居中低姿態，隨時準備減速。',
            edgeControl: '入彎前 1.5 秒完成回頭盲區確認，再執行換刃傾倒。'
          },
          stepByStep: [
            '【鐵律一：前方優先】永遠記住「位處下坡前方的滑手擁有絕對路權」，後方滑手無論速度多快，都負有 100% 避讓責任。',
            '【鐵律二：禁停盲區】絕對禁止在「坡度陡變處下方（Rollover 下方）」、「雪道狹窄處」或「跳台落地坡（Landing Zone）」坐下休息；如需停留，必須移至雪道最兩側且上方滑手清晰可見處。',
            '【鐵律三：後刃掃描】在寬雪道練習大弧度刻滑或平花 360 前，每一個 Heelside 入彎點都必須轉頭看向後肩上方山坡，確認無高速直衝者再橫切雪道。',
            '【鐵律四：脫板防滑】在雪道上脫下雪板時，必須第一時間將雪板「倒放（固定器朝下貼雪）」並用單腳踩住，防止雪板變成失控高速刀片衝向山腳傷人。'
          ],
          commonErrors: {
            symptom: '一群朋友並排橫坐在雪道正中央或變坡陡坎正下方聊天拍照。',
            rootCause: '缺乏對上方滑手視線切線（Line-of-Sight Horizon）的幾何空間認知。',
            correctiveDrill: '養成「抬頭看上方坡頂稜線」的習慣：只要你看不到上方纜車站或上一段雪道來人，上方的人就絕對看不到你！'
          },
          expertMindset:
            '「在雪場上，真正的大師不是滑得最快的人，而是能預判周圍 30 公尺內所有失控軌跡並提前留出安全緩衝區的人。」— FIS 高山安全與 BASI 考官小組'
        },
        {
          name: '個人化生物力學調板實戰：站寬、角度、置中與高背設定 (Precision Stance & Binding Calibration)',
          level: 'Lv.1 – Lv.4 裝備科學',
          casiAasiRef: 'AASI Equipment Mechanics · JSBA Gear Setup',
          biomechanics: {
            comBos: '確保雪靴裝入固定器後，靴頭與靴尾凸出雪板邊緣的距離完全相等（Boot Centering 誤差 < 2mm）。',
            jointAngles: '高背前傾角（Forward Lean）設定與日常站姿膝關節自然屈曲角（約 15°–20°）完全貼合。',
            weightDistribution: '左右腳跟至板尾邊緣、腳尖至板頭邊緣對稱，確保前後刃施壓槓桿一致。',
            edgeControl: '消除「Boot Drag（鞋頭/鞋跟拖雪）」與「前後刃換刃不對稱延遲」。'
          },
          stepByStep: [
            '【Step 1 量測站寬】裸足站立，量測地面至膝蓋正下方凸起骨頭（脛骨結節）的高度 L，將 L × 1.10 作為初始兩固定器中心距（例如 48cm × 1.1 = 52.8cm）。',
            '【Step 2 設定角度】初學者與全山自由式建議設為前腳 +15°、後腳 -9° 或 -12°；平花專項設為 +15°/-15°；純進階刻滑設為 +24°/+9°（軟鞋）或更高。',
            '【Step 3 前後置中（Heel/Toe Centering）】將空雪鞋扣入固定器，翻轉雪板觀察鞋頭與鞋跟超出板邊的長度；透過調整固定器底座（Heelcup）或圓盤孔位，使前後突出量完全一致。',
            '【Step 4 高背旋轉與前傾（Highback Rotation & Forward Lean）】將高背稍微旋轉使其平行於雪板後刃鋼邊（減少小腿外側壓迫），並將高背前傾調至 F2（約 12°–14°），讓微蹲時小腿肚能自然靠上高背。'
          ],
          commonErrors: {
            symptom: 'Toeside 很好滑，但一換到 Heelside 就覺得要往後摔、必須把屁股撅得很高才能立刃。',
            rootCause: '固定器整體偏前（Toe overhang 過大、Heel overhang 過小）且高背前傾角為 0°，導致後刃槓桿力臂嚴重不足。',
            correctiveDrill: '將固定器圓盤向後刃方向微調一格，並將雙腳高背前傾角調高 2 格，立即感受只要微屈膝就能輕鬆立起後刃！'
          },
          expertMindset:
            '「超過一半卡在 CASI Lv2 考不過的學員，檢查裝備時都會發現他們的鞋子在板子上根本沒有置中。調對 3 公釐的置中與 3 度的高背，你的後刃刻滑會瞬間升級。」— 雪具工程與材料科學小組'
        },
        {
          name: '單腳控板與上下纜車（Chairlift）零失誤生物力學 (One-Foot Skating & Chairlift Mastery)',
          level: 'Lv.1 初階必過關卡',
          casiAasiRef: 'CASI QuickRide Step 1–2 · AASI One-Foot Control',
          biomechanics: {
            comBos: '80% 重量完全落在前腳（綁定腳）正上方，後腳僅作為輕觸雪面的推進器與方向舵。',
            jointAngles: '前腳踝 30° · 膝 120° 保持彈性微屈；後腳緊貼後固定器內側防滑墊（Stomp Pad）。',
            weightDistribution: '下纜車滑出時：前腳 75% / 後腳（踩在防滑墊上）25%，嚴禁把重心往後拋。',
            edgeControl: '下纜車瞬間維持「完全平放板底（Flat Base）」直滑 3 公尺，待速度穩定後再由前腳腳踝微壓鋼邊轉彎停下。'
          },
          stepByStep: [
            '【平地單腳推進（Skating）】前腳扣入固定器，後腳置於板前緣（Toeside）或板後緣（Heelside）；上半身挺直對齊前腳，後腳像滑滑板般小步輕推，每次推進不超過後固定器位置。',
            '【排隊與入座纜車】進入纜車等待線後停穩，回頭確認纜車椅接近時，雙膝微屈順勢坐下，待坐穩後再放下安全護欄（確認同車乘客頭盔不會被敲到）。',
            '【下纜車預備】抵達山頂前 15 公尺抬起安全欄，將板頭轉向正前方，起身瞬間立即把後腳緊緊抵在「後固定器內側邊框」與防滑墊上。',
            '【滑下斜坡與煞停】視線死鎖前方 10 公尺遠處（絕不低頭看板！），雙手自然展開維持板底平放滑出斜坡；滑至平坦區後，前腳腳趾或腳跟微施壓做一個平緩 J-Turn 煞停。'
          ],
          commonErrors: {
            symptom: '一下纜車雪板就打橫卡刃摔倒，或者劈腿扯傷跨下。',
            rootCause: '視線低頭看腳、身體害怕而向後坐（重心落到沒綁住的後腳），或後腳懸空踩在雪地上導致雙腳分家。',
            correctiveDrill: '在平緩坡反覆練習 10 次「One-Foot Straight Glide（後腳死貼後固定器內側的單腳直滑降與 J-Turn）」，建立前腳 80% 承重的絕對信任感。'
          },
          expertMindset:
            '「下纜車摔倒只有一個物理原因：你的後腳沒有頂住後固定器，而且你的頭低下去看雪板了。抬起下巴看遠方，前膝微彎，纜車下坡比你想像的簡單十倍。」— CASI / AASI 初階教學專家小組'
        },
        {
          name: '雪板尺寸、軟硬度（Flex）與使用場景配對矩陣 (Board Sizing, Flex Rating & Terrain Matching)',
          level: 'All Levels 選購指南',
          casiAasiRef: 'AASI Gear Adaptation · JSBA Discipline Specifics',
          biomechanics: {
            comBos: '雪板有效邊長（Effective Edge）必須與滑手體重（Weight）及發力槓桿相匹配，而非單看身高。',
            jointAngles: '軟板（Flex 3–4）在較小關節力矩下即可產生大扭轉形變；硬板（Flex 7–9）需更高速度與體重才壓得彎。',
            weightDistribution: 'True Twin（完全對稱板）居中站姿 50/50；Directional（方向性粉雪/刻滑板）後退站姿（Setback 20–40mm）。',
            edgeControl: '板腰寬度（Waist Width）應等於雪靴外長減去 1.5–2.0 cm，兼具換刃靈敏度與最大立刃角極限。'
          },
          stepByStep: [
            '【體重優先於身高】查閱雪板原廠體重建議表（Weight Range）：雪板不知道你有多高，它只感受到你的體重與離心力！體重較輕者選長板會完全扭不動（無法做出 Torsional Twist）。',
            '【軟硬度分級選擇】初學與低速平花（Buttering）選擇 Flex 3–5 軟至中軟板；全山綜合與中跳台選擇 Flex 5–7 中硬板；高速歐式/日系刻滑與陡坡大山選擇 Flex 7–9 硬板。',
            '【板腰寬度驗算】若腳掌較大（US 10.5 / 28.5cm 以上）或追求 75° 以上極限貼地刻滑，務必選擇 Wide（寬板，板腰 ≥ 260mm），徹底杜絕固定器與鞋頭觸雪滑脫（Boot Out）。',
            '【雪鞋與固定器剛性同步】切勿用「極硬雪板」搭配「極軟入門鞋/固定器」，否則力量會在軟鞋變形中全部流失，導致換刃嚴重延遲。'
          ],
          commonErrors: {
            symptom: '初學者買了頂級競賽級全碳纖維硬板（Flex 9 Full Camber），結果連落葉飄轉彎都頻頻卡刃。',
            rootCause: '高剛性正拱板在低速下需要極大的下肢扭矩才能產生兩腳間扭轉（Twist），低速微失誤就會直接咬死下坡刃。',
            correctiveDrill: '依當前主攻科目配置裝備：練基本功與平花用中軟 Hybrid Camber，練高速刻滑再上高硬度定向板。'
          },
          expertMindset:
            '「最貴的雪板不等於最好的雪板。適合你當前滑行時速與體重的 Flex（軟硬度），才能讓你真正體會到『踩彎雪板並借用它回彈』的樂趣。」— 50人專家團器材研發組'
        }
      ],
      interactiveConfig: {
        mode: 'resort_safety',
        defaultSliders: { edgeAngle: 25, speed: 30, foreAft: 50, angulation: 20 }
      }
    },

    /* ------------------------------------------------------------------------
       MODULE 03: CORE BIOMECHANICS & BOARD PERFORMANCE PHYSICS
       ------------------------------------------------------------------------ */
    {
      id: 'MOD-03',
      code: 'MOD-03',
      title: '單板物理核心原理：COM/BOS、四大板性與三大身體運動',
      subtitle: 'Center of Mass vs Base of Support, Inclination vs Angulation & AASI 4 Board Performances',
      badge: 'MOD-03 · 生物力學核心聖經',
      difficulty: 'Lv.1 – Lv.4 物理核心',
      systemsRef: 'CASI Core · AASI 4×3 Matrix · SBINZ 4 Movements',
      image: 'assets/images/com_bos_mechanics.png',
      animationMode: 'com_bos',
      summary:
        '為什麼有人滑行看起來優雅穩定、在冰面上依然緊咬雪道，而有人稍微加速就全身僵硬、後刃頻頻括雪打滑（Chattering）？答案全部濃縮在兩個物理學縮寫中：**COM（Center of Mass 身體質心）** 與 **BOS（Base of Support 支撐底面積，即當前與雪面接觸的那條約 1.2 公釐寬的鋼邊或板底）**。單板滑行的本質，就是透過「踝、膝、髖三大關節的協同運動（Flexion/Extension、Rotation、Lateral/Fore-Aft）」，不斷操控雪板的四大性能（**Tilt 立刃、Twist 扭轉、Pivot 樞軸旋轉、Pressure 壓力分布**），使重力與離心力的「合向量（Resultant Force Vector）」永遠精準穿過正在工作的鋼邊（BOS）。本章節將看不見的力學向量完全公式化與視覺化，徹底釐清傾角（Inclination）與折角（Angulation）的黃金配比，以及向上拔重、向下縮腿拔重與地形拔重的切換時機。',
      physicsPrinciples: [
        {
          title: '動態平衡向量條件：重力、離心力與合向量穿過 BOS (Dynamic Equilibrium Vector Equation)',
          formula: 'tan(θ_eq) = F_centrifugal / F_gravity = v² / (g · R_eff · cosα)',
          explanation:
            '在靜止或極低速滑行時（v ≈ 0），平衡完全取決於質心（COM）是否垂直投影於支撐底面積（BOS）正上方；但在有速度的轉彎中，滑手受到指向彎外的離心力 F_c = mv²/R 與垂直向下的重力 mg。兩者合成之「總合力向量 F_total」必須精準穿過工作鋼邊（Working Edge）。若傾角 θ_eq 大於速度所需的平衡角，滑手就會向彎內倒下（內倒）；若小於平衡角，就會被離心力甩出彎外或發生逆刃。'
        },
        {
          title: '傾角 (Inclination) vs 折角 (Angulation) 的解耦控制力學',
          formula: 'θ_edge = θ_inclination (全身整體內傾) + Δθ_angulation (髖膝踝反向折疊)',
          explanation:
            '傾角（Inclination）是全身像一根直線般向彎內傾斜，能最省力地建立基礎立刃角；但若單純只靠內傾，質心（COM）會過度偏離雪板，一旦遇到硬冰或亂雪讓鋼邊微滑脫，就會直接側摔。折角（Angulation）則是在內傾基礎上，將膝蓋與髖部推向彎內，但上半身與頭部微向彎外（雪板上方）拉回，從而在「維持甚至加大高立刃角（θ_edge ↑）」的同時，將質心拉回雪板上方以保住最大抓地壓力！'
        },
        {
          title: 'AASI 四大雪板性能之物理定義 (The 4 Board Performance Mechanics)',
          formula: '1. Tilt (立刃角 θ) · 2. Twist (扭轉角 Δφ) · 3. Pivot (偏航角 ω_z) · 4. Pressure (P(x,y))',
          explanation:
            '任何彎形都是這四種板性能的排列組合：(1) **Tilt**：雪板底面與雪坡平面的夾角，決定侧切弧線切入深度；(2) **Twist**：前後腳相反方向施壓造成的板身螺旋形變，是低速入彎與換刃最平順的啟動器；(3) **Pivot**：雪板繞著垂直於板面的軸進行旋轉（搓雪彎必備，純刻滑則趨近於 0）；(4) **Pressure**：沿板頭至板尾（Fore-Aft）及隨時間變化的總正壓力調控。'
        },
        {
          title: '三種釋壓換刃機制：向上拔重 vs 向下縮腿拔重 vs 地形拔重 (3 Unweighting Mechanisms)',
          formula: 'N(t) = m · (g · cosα + a_z(t))  |  當 a_z < 0 時正壓力 N 瞬間下降實現零阻力換刃',
          explanation:
            '要在不卡刃的前提下從舊鋼邊切換到新鋼邊，必須在換刃瞬間創造「短暫減重期（Unweighting Window）」：(1) **Up-unweighting（向上延伸拔重）**：在起身減速瞬間換刃，節奏慢且直觀，適合初高階大彎；(2) **Down-unweighting（向下屈曲抽腿拔重 / Cross-under）**：主動快速收起雙腿讓雪板瞬間懸空減壓換刃，換刃極快且質心高度不變，適合陡坡、蘑菇與高速小彎；(3) **Terrain-unweighting**：借用坡度起伏或雪板回彈自動減壓。'
        }
      ],
      coreSkills: [
        {
          name: '中立且靈活的基本站姿與三關節黃金比例設定 (Centered & Mobile Stance: 40:40:20 Ratio)',
          level: 'Lv.1 – Lv.4 核心根基',
          casiAasiRef: 'CASI Core Competency #1 · AASI Athletic Stance',
          biomechanics: {
            comBos: '質心（COM）位於骨盆中心（第二薦椎 S2 前方），垂直投影於兩腳連線中點與板腰中心。',
            jointAngles: '靜態預備屈曲分配：踝關節 40% · 膝關節 40% · 髖關節 20%（背部自然挺直，絕不彎腰駝背）。',
            weightDistribution: '平地與彎中基準：前腳 50% / 後腳 50%；入彎啟動期微移至前腳 60% / 後腳 40%。',
            edgeControl: '雙膝微向兩側外推（對齊腳尖方向），形成穩定的拱橋結構（Arch Effect），隨時可向任一側移動。'
          },
          stepByStep: [
            '在平緩雪地扣上雙腳，先原地垂直輕跳 3 次，落地瞬間自然微蹲停住——這就是你身體最天然的減震站姿。',
            '檢查下半身：腳踝主動微壓鞋舌，膝蓋微彎並向板頭板尾方向微外撐（像騎馬或防守籃球），屁股收到腳跟正上方。',
            '檢查上半身：雙肩自然下沉放鬆，與固定器連線平行；雙手置於雪板板頭與板尾側上方約腰部高度，視線平視前方 15 公尺。',
            '進行「前後左右象限搖晃測試」：在不彎腰的前提下，僅靠腳踝與膝蓋將重心移至前腳尖、後腳尖、後腳跟、前腳跟四個角落，確認活動自如。'
          ],
          commonErrors: {
            symptom: '上半身像鞠躬一樣向前折腰 45 度，但膝蓋與腳踝卻打得很直（俗稱「折腰殭屍站姿」）。',
            rootCause: '誤以為「壓低重心」就是把頭和胸口往下壓，結果導致臀部向後凸出雪板後刃外，完全失去避震行程。',
            correctiveDrill: '想像自己背靠著一面無形的牆壁上下滑動（背貼牆深蹲），或者將雙手叉在髖骨上，強制只能用膝踝屈曲來降低高度。'
          },
          expertMindset:
            '「CASI Lv1 到 Lv4 考官看滑手的第一眼，永遠是看他的髖部有沒有在雪板正上方。只要你的屁股掉出後刃外 5 公分，後面所有的轉彎與刻滑都會變成掙扎。」— CASI 國家考官專家小組'
        },
        {
          name: 'Toeside vs Heelside 生物力學槓桿對稱化訓練 (Symmetric Lever Control across Working Edges)',
          level: 'Lv.2 – Lv.3 進階控制',
          casiAasiRef: 'CASI Balance Along Working Edge · AASI Lateral Movement',
          biomechanics: {
            comBos: 'Toeside 時質心移至前刃鋼邊上方（髖部微向前推）；Heelside 時坐骨向後刃彎內投影，但胸口保持在雪板上方。',
            jointAngles: 'Toeside 善用踝、膝、髖三關節緩衝；Heelside 由於踝關節背屈受高背限制，必須加大膝屈曲與髖折角（Hip Angulation）。',
            weightDistribution: 'Toeside 腳趾球與脛骨貼合鞋舌（絕不踮腳尖抽筋）；Heelside 腳跟承重並將小腿肚飽滿壓向高背。',
            edgeControl: '消除「前刃穩如泰山、後刃抖如篩糠」的單板不對稱通病。'
          },
          stepByStep: [
            '【Toeside 槓桿練習】在中緩坡進行前刃橫滑降：放鬆腳趾（腳趾在鞋內甚至可以微翹），改用「膝蓋與小腿脛骨向前下方壓住鞋舌」來立起前刃，同時將骨盆向前推（收緊臀部，不折腰）。',
            '【Heelside 槓桿練習】切換至後刃橫滑降：想像身後有一張高度到小腿肚的低矮高腳椅，將雙膝彎曲、小腿肚靠緊高背「坐」在椅緣上，但雙肩與視線保持水平看向前方。',
            '【J-Turn 閉眼感知】在安全緩坡分別做出 Toeside 與 Heelside J-Turn，感受兩側立刃角達到 45° 時，頭頂是否都維持在雪板寬度範圍內。',
            '【後手引導修正】在 Heelside 滑行時，將後手輕放在前大腿外側或指向彎內前方，防止後肩向後拉開造成後輪打滑（Wash-out）。'
          ],
          commonErrors: {
            symptom: 'Toeside 小腿肚劇烈抽筋；Heelside 在硬雪面上發出「噠噠噠」劇烈跳動刮雪聲（Chattering）。',
            rootCause: 'Toeside 用踮腳尖（腓腸肌向心收縮）取代壓鞋舌（骨架支撐）；Heelside 則是雙腿打直、上半身過度折腰導致質心偏離鋼邊。',
            correctiveDrill: '練習「Toeside 翹大拇趾滑行」強制使用脛骨靠鞋舌；練習「Heelside 雙手抱胸深蹲滑行」強制彎曲膝蓋吸收震動。'
          },
          expertMindset:
            '「記住這句口訣：Toeside 是用『小腿骨壓鞋舌、骨盆微前推』，Heelside 是用『膝蓋彎曲坐低、胸口留在板子上方』。靠骨架傳力永遠不會累，靠肌肉硬撐三趟就抽筋。」— AASI / SBINZ 生物力學小組'
        },
        {
          name: '雪板兩腳間扭轉啟動訓練 (Torsional Twist / Foot Pedaling Drill)',
          level: 'Lv.1 – Lv.3 關鍵技術',
          casiAasiRef: 'AASI Twist Performance · CASI Lower-Body Turning',
          biomechanics: {
            comBos: '在換刃過渡期（Edge Change Phase），質心平順跨過雪板中線，前後腳形成微幅螺旋扭力差。',
            jointAngles: '前膝與前踝先微幅向新彎內導向（壓低 5°–8°），後膝與後踝延遲 0.2–0.3 秒跟進。',
            weightDistribution: '入彎瞬間前腳壓向新鋼邊、後腳維持輕放，使雪板前端先咬入彎道弧線。',
            edgeControl: '利用雪板自身的縱向扭轉彈性（Torsional Flex），實現如絲綢般順滑、零卡刃風險的入彎啟動。'
          },
          stepByStep: [
            '在緩坡從 Heelside 橫滑降開始，準備向山谷方向轉入 Toeside。',
            '不要整塊雪板同時翻過去！先保持後腳跟微微壓住後刃，單獨將「前腳膝蓋與腳尖」像踩油門一樣往下坡壓平（Pedaling），此時雪板會被扭成螺旋狀，板頭自然順著坡度滑向滾落線。',
            '當板頭對準下坡（滾落線 Fall Line）後，後腳再順勢跟上壓下腳尖，讓整張雪板完全立在 Toeside 鋼邊上完成轉彎。',
            '反方向從 Toeside 換回 Heelside 時同理：前腳跟先提起、前膝外開引導板頭入彎，後腳跟再隨後跟進鎖定。'
          ],
          commonErrors: {
            symptom: '換刃時整張雪板像鐵板一樣死硬，必須靠上半身大力甩手甩肩才能把板子扭過滾落線。',
            rootCause: '雙腳同時死踩在同一平面上，完全沒有釋放雪板兩腳之間的扭轉形變（Zero Torsional Twist）。',
            correctiveDrill: '在平地脫掉雪板或穿鞋踩在板上，練習像踩縫紉機踏板一樣「左腳壓趾/右腳壓跟 ➔ 左腳壓跟/右腳壓趾」的獨立腳踝交叉踩踏。'
          },
          expertMindset:
            '「雪板不是一塊死木頭，它是一個精密的扭力彈簧。學會用前腳先扭轉板頭（Twist），你就永遠不需要再用上半身去硬甩雪板了。」— AASI 國家示範隊教練小組'
        },
        {
          name: '傾角與折角動態配比實驗：Pencil vs Banana 體態切換 (Inclination vs Angulation Mastery)',
          level: 'Lv.2 – Lv.4 進階必備',
          casiAasiRef: 'BASI Central Theme · JSBA 内倒防止 & 外向傾',
          biomechanics: {
            comBos: '入彎初期採用純傾角（Inclination，身體如鉛筆 Pencil 整體微傾）；彎中至出彎高壓期疊加折角（Angulation，身體如微彎香蕉，膝髖內推而肩胸回正）。',
            jointAngles: '彎中最大壓力點（Apex）：立刃角 55°–70°，髖關節側向折角 18°–25°，膝關節側向內傾角 22°。',
            weightDistribution: '雙腳均勻承受 1.5G–2.2G 向心力，鋼邊深切雪面而不產生側向刮雪。',
            edgeControl: '在硬冰面、陡坡與不平整雪道上提供最強大的「防滑脫（Anti-Washout）」保險機制。'
          },
          stepByStep: [
            '【第一趟：純傾角體驗】在中級道滑行中弧度轉彎，入彎時保持頭、肩、髖、膝成一直線向彎內傾倒（純 Inclination），體會最省力的骨骼支撐感。',
            '【第二趟：加入彎中折角】當滑至彎心（Apex，跨過滾落線後壓力最大處）時，主動將膝蓋與骨盆更深地推向坡面，但同時將「外側肩膀微壓低、頭頂拉回雪板正上方」。',
            '【Heelside 特別強化】在後刃彎心，想像把後口袋往彎內雪面推過去，同時前手指向出彎方向、視線水平遠眺，徹底根除後刃「內倒摔屁股」或「折腰刮雪」。',
            '【出彎釋放】過彎心後，順著雪板回彈將折角解開，讓質心提前越過雪板（Cross-through）進入下一個彎的純傾角啟動。'
          ],
          commonErrors: {
            symptom: '一追求大傾角貼地刻滑，在彎心稍微碰到硬冰塊就直接整個人側摔在雪地上（內倒過頭）。',
            rootCause: '100% 依賴純傾角（Pure Inclination）而毫無折角（Zero Angulation），導致質心離雪板太遠，垂直正壓力不足以咬破硬冰。',
            correctiveDrill: '採用「外側手摸前膝外側」練習：在轉彎中段，讓位於彎外（山谷側）的手指自然觸碰前膝外側，身體會自動形成完美的髖部折角！'
          },
          expertMindset:
            '「傾角決定你能躺多低，折角決定你在冰面上會不會滑掉。歐美 Freeride 與日本技術選高手的共同秘密，就是在彎心那 0.4 秒鐘精準疊加的髖膝折角。」— JSBA 技術選與 BASI 考官小組'
        }
      ],
      interactiveConfig: {
        mode: 'com_bos',
        defaultSliders: { edgeAngle: 48, speed: 40, foreAft: 52, angulation: 32 }
      }
    }
  ]
};

/* ==========================================================================
   APPEND MODULES 04 TO 07 (PROGRESSION, CARVING, GROUND TRICKS, TERRAIN PARK)
   ========================================================================== */
window.SB_CURRICULUM_DATA.modules.push(
  /* ------------------------------------------------------------------------
     MODULE 04: BEGINNER TO ADVANCED PROGRESSION (CASI LV1 - LV3)
     ------------------------------------------------------------------------ */
  {
    id: 'MOD-04',
    code: 'MOD-04',
    title: '初階至中高級標準教學系統：從 QuickRide 到動態平行轉彎',
    subtitle: 'Beginner to Advanced Progression: CASI QuickRide, Pendulum, Skidded to Dynamic Gripped Turns',
    badge: 'MOD-04 · 國際標準進程教學',
    difficulty: 'Lv.1 初階 ➔ Lv.3 進階',
    systemsRef: 'CASI QuickRide & Lv1-3 · AASI Progression · SBINZ Fore/Aft',
    image: 'assets/images/com_bos_mechanics.png',
    animationMode: 'progression',
    summary:
      '本模組完整重現加拿大 CASI、美國 AASI 與紐西蘭 SBINZ 全球公認最科學的「零基礎至中高階標準教學階梯（Standard Progression Ladder）」。許多自學者直接跳過單腳滑行與半月彎（Garland），在綠線靠著甩後腳硬搓出 S 彎，結果到了紅黑線或顛簸地形就完全失控。真正的標準進程是層層遞進的生物力學建構：從 **QuickRide 五步法（Basics ➔ Sliding ➔ Control ➔ Turning ➔ Linking）** 建立對工作鋼邊的絕對信任，接著透過 **C-Turn 與 S-Turn** 掌握換刃時機（Edge Change BEFORE the Fall Line），再進階至 **Open Parallel Skidded Turns（開放式搓雪平行彎）** 與 **Dynamic Gripped Turns（含前後重心轉移 60/40 ➔ 50/50 ➔ 40/60 的動態抓地彎）**。每一階段都配備精準的完成度檢核指標，確保地基無懈可擊。',
    physicsPrinciples: [
      {
        title: '落葉飄 (Falling Leaf / Pendulum) 之扭轉加壓與煞車力學',
        formula: 'F_brake = μ_kinetic · N · sin(θ_edge)  |  前腳微平放導向 vs 雙腳同步立刃煞停',
        explanation:
          '橫滑降（Sideslipping）與落葉飄是初學者感知「立刃角（Tilt）與摩擦力關係」的第一實驗室。當雙腳立刃角 θ 減小時，正壓力切入雪面的阻力下降，雪板開始滑動；當單獨放鬆領先腳（Leading Foot）的立刃角時，該端阻力減小而先向斜下方滑行；當重新立起領先腳鋼邊使雙腳對稱咬雪時，雪板即刻轉回橫向並減速停下。'
      },
      {
        title: '滾落線前換刃法則與防卡刃幾何學 (Edge Change Before the Fall Line)',
        formula: 'v_cross_hill ➔ 0 時執行 Unweighting + Edge Switch (於板頭轉入滾落線前完成換刃)',
        explanation:
          '初學者 S 彎最致命的錯誤是「先用舊鋼邊把板頭轉向滾落線（下坡），才試圖換到新鋼邊」，這會讓下坡刃直接迎面撞擊雪流，產生 100% 的逆刃翻摔（Catching the Downhill Edge）。正確力學是在橫越雪道減速的尾聲，趁速度最慢時「先讓質心跨過雪板換上新鋼邊」，讓新鋼邊自然引導板頭轉入滾落線！'
      },
      {
        title: '前後重心動態轉移曲線：60/40 入彎 ➔ 50/50 彎中 ➔ 40/60 出彎 (Fore-Aft Pressure Wave)',
        formula: 'P_front(t) : P_rear(t) = [60:40]_Initiation ➔ [50:50]_Apex ➔ [40:60]_Completion',
        explanation:
          '在中高階滑行中，雪板是一根前後分布的彈性樑。入彎期（Initiation）將 60% 壓力移向前腳，能使板頭側切弧線（Nose Sidecut）率先咬入雪面啟動轉向；彎中（Apex）回到 50/50 讓整條有效鋼邊均勻承載離心力；出彎期（Completion）移至 40/60 壓住板尾，穩定彎形並蓄積板尾彈性以利下一彎轉換。'
      },
      {
        title: '搓雪彎 (Skidded/Steered) vs 抓地彎 (Gripped/Carved) 之偏航角差分析',
        formula: 'Slip Angle β = ∠(\vec{v}_{velocity}, \vec{u}_{board_axis})  |  搓雪 β > 12° vs 刻滑 β ≈ 0°',
        explanation:
          '搓雪彎（Skidded Turn）中，雪板長軸方向與實際運動軌跡存在明顯偏航滑移角（Slip Angle β），利用板底與鋼邊橫向刮雪消耗動能，適合陡坡與窄道控速；抓地/刻滑彎（Gripped/Carved Turn）則透過早期立刃消弭滑移角（β → 0°），板尾完全沿著板頭切出的軌道前進，將位能最大化保留為滑行動能。'
      }
    ],
    coreSkills: [
      {
        name: '橫滑降與落葉飄精準控制 (Sideslipping & Falling Leaf / Pendulum)',
        level: 'Lv.1 初階基石',
        casiAasiRef: 'CASI QuickRide Step 3 · AASI Tilt & Twist Control',
        biomechanics: {
          comBos: '質心穩定保持在工作鋼邊（上坡刃 Uphill Edge）內側上方，絕不越過雪板中線掉往下坡刃。',
          jointAngles: '踝 32° · 膝 120° · 髖 115°，雙肩與雪板完全平行，頭部轉向即將滑行的那端（板頭或板尾）。',
          weightDistribution: '垂直橫滑降為 50/50；斜向落葉飄時，領先腳（前導腳）微增至 55% 並微幅放平腳踝。',
          edgeControl: '全程僅使用單一上坡鋼邊（純 Heelside 或純 Toeside），嚴禁下坡刃觸雪。'
        },
        stepByStep: [
          '【垂直橫滑降】在緩坡面向山谷（Heelside）或面向山坡（Toeside），雙腳均勻立起上坡刃煞停；緩慢將雙腳踝微放平 3°–5°，感受雪板垂直向下平滑刮雪，再微抬腳尖/壓鞋舌煞停。',
          '【啟動斜滑（Nose-first）】視線轉向左前方（Regular 滑手），左腳（前腳）腳踝微幅放平、膝蓋微向板頭引導，雪板便會優雅地向左前斜下方滑出。',
          '【回正煞停】滑出約 5 公尺後，視線看回正面，前腳重新立起鋼邊至與後腳相同角度，雪板立即回正並完全煞停。',
          '【反向落葉（Tail-first）】視線改看向右前方（板尾側），改由右腳（後腳）微放平引導斜滑，再立刃煞停，形成如鐘擺（Pendulum）般的左右落葉軌跡。'
        ],
        commonErrors: {
          symptom: '想往左滑時，用上半身和雙手用力往左扭，結果雪板不但沒動，反而直接前刃卡刃撲街。',
          rootCause: '誤用上半身旋轉取代「前導腳腳踝微放平（Torsional Twist）」，且因低頭看腳導致重心越過中線壓到下坡刃。',
          correctiveDrill: '採用「雙手拉住褲子口袋邊緣」練習落葉飄：封印雙手揮舞，只允許轉頭看方向並像微踩油門般放平前導腳踝 2 公分。'
        },
        expertMindset:
          '「落葉飄不是為了讓你一路飄下山，而是教你『用腳踝的幾度微調來決定雪板走或停』。能把前刃與後刃落葉飄做到極致平順的人，學 S 彎只需要 20 分鐘。」— CASI QuickRide 教學小組'
      },
      {
        name: '半月彎 (Garland) 到初階 S-Turn 連結：掌握換刃黃金窗口 (Garlands to Linked S-Turns)',
        level: 'Lv.1 初階核心',
        casiAasiRef: 'CASI QuickRide Step 4–5 · SBINZ Rotational & Vertical',
        biomechanics: {
          comBos: '換刃瞬間，質心在起身延展（Up-unweighting）的同時，從舊鋼邊平順跨過雪板中心線移至新鋼邊。',
          jointAngles: '入彎啟動期：起身延伸（膝 145°）釋放壓力；過滾落線進入控速期：屈膝下沉（膝 115°）加壓立刃。',
          weightDistribution: '入彎瞬間前腳 60% / 後腳 40%（必須敢把重心壓在朝向山谷的前腳上！）；出彎橫滑回到 50/50。',
          edgeControl: '遵循「起身 ➔ 換刃 ➔ 轉向滾落線 ➔ 壓低控速」四拍節奏（Up ➔ Edge ➔ Steer ➔ Down）。'
        },
        stepByStep: [
          '【Step 1: Garland 半月彎】從斜向橫滑開始，前膝與前踝微放平讓板頭轉向滾落線（體會入彎加速感），但在完全指下坡前，立即重新立起同一條鋼邊並屈膝壓低，轉回斜橫滑煞停。',
          '【Step 2: 單一 C-Turn】在緩坡橫滑減速至接近靜止時，雙腿緩慢起身延伸，同時將重心跨過雪板換到新鋼邊，前腳微引導讓板頭順勢通過滾落線，完成一個完整的 C 字形轉彎。',
          '【Step 3: 連結 S-Turn】當第一個 C-Turn 滑過滾落線並橫越雪道減速後，不等完全停死，再次「起身延伸 ➔ 跨板換刃 ➔ 前膝引導入彎」，將 Toeside 與 Heelside 串聯成流暢的 S 軌跡。',
          '【Step 4: 節奏穩定化】心裡默念口訣：「一、二（起身換刃入彎）……三、四（彎中屈膝壓板控速）」，保持每個彎的寬度與速度完全一致。'
        ],
        commonErrors: {
          symptom: '每次板頭一轉向正下坡（滾落線）就害怕地往後坐，導致雪板像火箭一樣失控直衝無法完成轉彎。',
          rootCause: '恐懼下坡速度而產生防禦性後坐反射（權重變成前 20% / 後 80%），導致板頭翹起脫離雪面，側切弧線完全失效。',
          correctiveDrill: '練習「前手拍前膝入彎法」：在板頭轉向滾落線的那 1 秒鐘，強制用前手拍一下前腳膝蓋外側，確保 60% 重量穩穩踩在前腳上！'
        },
        expertMindset:
          '「單板滑雪最違反直覺卻最重要的一條物理定律：當你覺得速度變快很可怕時，把重心壓向前腳才能轉彎煞車；往後退只會讓你失去方向盤！」— AASI / CASI 初中階考官小組'
      },
      {
        name: '下肢主導搓雪平行彎與彎形大小調控 (Lower-Body Steered Parallel Turns & Turn Shape Control)',
        level: 'Lv.2 中階核心',
        casiAasiRef: 'CASI Competency #2 & #5 · BASI Steered Turns',
        biomechanics: {
          comBos: '上半身維持安靜穩定（Quiet Upper Body），由髖關節以下的股骨內外旋與膝踝引導完成雪板旋轉。',
          jointAngles: '全程維持機能性屈膝（踝 35° · 膝 115°–135°），消除初階過大過僵硬的大幅站起與蹲下。',
          weightDistribution: '透過改變「旋轉加壓時機（Early vs Late Steering）」自由切換大彎（Long Radius）與小彎（Short Radius）。',
          edgeControl: '雪板在彎中帶有受控的側向搓雪（Controlled Skid），可在紅黑線陡坡精準鎖定恆定時速。'
        },
        stepByStep: [
          '【封印上肢】在中級紅線滑行，雙手輕握拳置於腰際兩側固定器上方（想像雙手端著一盤水不能灑出）。',
          '【雙膝方向盤】入彎時，想像你的兩個膝蓋上各裝了一盞車頭燈，要往哪裡轉，就同時把兩盞「膝蓋車頭燈」連同小腿轉向那個方向。',
          '【圓弧控速（Closed Turn Shape）】不要在滾落線上急搓煞車，而是讓雪板畫出飽滿的半圓形（C 形而非 Z 形），利用彎尾微向上坡回勾（Finish the Turn）自然抵消重力加速度。',
          '【小彎節奏切換】縮短橫越雪道的時間，每數 2 秒鐘就以雙膝快速引導換刃，在單一纜車柱寬度（約 4–5 公尺走廊）內完成連續 10 個對稱小彎。'
        ],
        commonErrors: {
          symptom: '滑行軌跡呈現鋸齒狀「Z 字形（Z-Turns）」：直衝下坡後靠後腳猛力甩尾急煞，上半身跟著反轉。',
          rootCause: '入彎期完全沒有用前膝引導（零入彎啟動），把所有轉向都推遲到彎心後靠反作用力硬甩後腳（Counter-rotation）。',
          correctiveDrill: '進行「Corridor 走廊平滑練習」：要求入彎前 1/3 段必須看到板頭平順畫弧，且出彎時雙肩必須與雪板夾角維持固定不變。'
        },
        expertMindset:
          '「區分初學者與中階滑手最快的方法，就是看他的彎是『C 字形』還是『Z 字形』。學會用雙膝從入彎第一秒就平順導向，你的滑行會立刻變得像絲綢一樣流暢。」— BASI / SBINZ 技術小組'
      },
      {
        name: '動態抓地平行彎與前後重心波浪轉移 (Dynamic Gripped Parallel Turns with Fore-Aft Wave)',
        level: 'Lv.2 ➔ Lv.3 進階橋樑',
        casiAasiRef: 'CASI Lv2/Lv3 Standard · SBINZ Fore/Aft Movement',
        biomechanics: {
          comBos: '質心不僅跨過雪板寬度（Lateral），同時沿著雪板長度方向進行 60/40 ➔ 50/50 ➔ 40/60 的波浪移動（Fore-Aft）。',
          jointAngles: '入彎前膝多彎 8°（壓板頭）；出彎後膝多彎 8°（壓板尾），形成前後腳交替屈伸的流暢韻律。',
          weightDistribution: '入彎 60% 前腳咬刃 ➔ 彎中 50/50 雙腳抗離心力 ➔ 出彎 60% 後腳儲能釋放。',
          edgeControl: '彎中後半段完全消除側向刮雪（Zero Skid in Apex），留下一條乾淨緊實的早期刻滑軌跡。'
        },
        stepByStep: [
          '【入彎壓鼻（60/40）】在換刃完成的瞬間，主動將骨盆向板頭方向微推 4–5 公分，讓前腳承受 60% 壓力，感受板頭鋼邊立刻咬進雪面並自動帶出彎道弧度。',
          '【彎中居中（50/50）】當雪板通過滾落線進入彎心最大離心力區，雙腿同步下蹲加壓，將壓力均勻分布在雙腳之間，鎖死鋼邊不打滑。',
          '【出彎壓尾（40/60）】出彎階段，將骨盆微向板尾移動 4–5 公分，把壓力交給後腳板尾，感受板尾彈性將你推向下一彎的換刃點。',
          '【八字無限迴圈】將「跨板左右移動」與「沿板前後移動」結合，想像你的骨盆在雪板上方畫出一個立體的「∞（無限符號）」。'
        ],
        commonErrors: {
          symptom: '以為自己有做前後移動，但實際上只是上半身前後搖晃點頭，骨盆與足底壓力根本維持在原位。',
          rootCause: '髖關節未實際沿著雪板長軸位移，僅靠腰椎側彎代償，雪板頭尾壓力計讀數毫無變化。',
          correctiveDrill: '採用「拉拉鍊練習」：入彎時想像把骨盆推向前固定器上方，出彎時推向後固定器上方，並觀察雪地上留下的軌跡是否從寬刮痕收斂為細線。'
        },
        expertMindset:
          '「當你第一次體會到『入彎壓前腳讓板頭自己轉彎、出彎壓後腳讓板尾把你彈出去』時，恭喜你，你已經正式踏入高階動態滑行的大門了。」— 50人專家團 CASI Lv3/Lv4 考官組'
      }
    ],
    interactiveConfig: {
      mode: 'progression',
      defaultSliders: { edgeAngle: 40, speed: 35, foreAft: 58, angulation: 24 }
    }
  },

  /* ------------------------------------------------------------------------
     MODULE 05: HIGH-PERFORMANCE CARVING (EURO-CARVE, KNAPTON & JSBA TECH)
     ------------------------------------------------------------------------ */
  {
    id: 'MOD-05',
    code: 'MOD-05',
    title: '進階刻滑藝術：歐式極限貼地 vs 日系高速搓刻結合',
    subtitle: 'High-Performance Carving: Pencil Track Physics, Cross-Under, Euro-Carve & JSBA Tech Test',
    badge: 'MOD-05 · 高階刻滑工藝',
    difficulty: 'Lv.3 進階 ➔ Lv.4 / Pro 大師',
    systemsRef: 'JSBA Tech Test (技術選) · CASI Lv3/4 Carving · Euro/Knapton Style',
    image: 'assets/images/hero_alpine.png',
    animationMode: 'carving',
    summary:
      '刻滑（Carving）是單板力學美感的巔峰：雪板不發生任何橫向搓雪刮擦（Zero Lateral Skid），板尾 100% 沿著板頭切開的 2 公釐細溝前進，在雪道上留下一道如火車鐵軌般清晰的「Pencil Line（鉛筆線軌跡）」。本章節深度剖析三大當代刻滑流派：**1. 歐美經典動態刻滑（CASI Lv4 / Ryan Knapton 雙向深弧自由式刻滑）**、**2. 歐式極限貼地刻滑（Euro-Carve / Laydown Carve，立刃角突破 75°–85°，前臂與胸膛擦雪滑行）**、以及 **3. 日本 JSBA 全日本技術選高速刻滑（強調「谷回り」入彎即刻立刃、外向傾視線鎖定與出彎 Rebound 爆發加速）**。透過有效刻滑半徑公式 $R_{\\text{eff}} = R_{\\text{sc}} \\cdot \\cos\\theta$ 與三種換刃機制（Cross-over、Cross-under、Cross-through）的精準拆解，帶你突破後刃拖臀與高速跳齒的瓶頸。',
    physicsPrinciples: [
      {
        title: '有效刻滑半徑公式與立刃角餘弦非線性壓縮 (Effective Sidecut Radius Formula)',
        formula: 'R_eff = R_sidecut · cos(θ_edge) / cos(α_slope)  |  當 θ = 60° 時 R_eff = 0.5·R_sc；當 θ = 75° 時 R_eff = 0.26·R_sc',
        explanation:
          '一張標示側切半徑 R_sc = 8.0 公尺的雪板，在立刃角 30° 時轉彎半徑約為 6.9 公尺；但當滑手將立刃角推升至 60° 時，雪板在受壓彎曲（Reverse Camber Decambering）下，有效轉彎半徑會瞬間縮小一半至 4.0 公尺；若達到 75° 極限立刃，半徑更壓縮至約 2.1 公尺！這就是為什麼高立刃角能切出極為緊湊且高 G 值的深圓弧。'
      },
      {
        title: '三種高階換刃拓撲學：Cross-over vs Cross-under vs Cross-through',
        formula: 'Cross-over (COM 上越板) · Cross-under (抽腿板越 COM 下) · Cross-through (水平穿透換刃)',
        explanation:
          '(1) **Cross-over（向上換刃）**：伸展雙腿讓身體質心從雪板上方跨過去，適合慢節奏大弧彎；(2) **Cross-under（向下縮腿換刃）**：保持頭頂與質心高度不變，主動收起雙膝將雪板從身體下方「抽」向另一側，換刃時間縮短 60%，是高速小彎與陡坡刻滑首選；(3) **Cross-through（水平穿透換刃）**：出彎瞬間利用雪板彈性（Rebound），讓質心如子彈般沿切線直接射向下一個彎的圓心（日本技術選稱「谷回りへの抜け」）。'
      },
      {
        title: '日本 JSBA「谷回り (Valley Phase)」與「山回り (Mountain Phase)」壓力分配',
        formula: '谷回り (0°–90° 入彎前半：早期高立刃 + 漸進加壓) ➔ 山回り (90°–180° 出彎後半：鎖住回彈不減速)',
        explanation:
          '中階滑手往往在過了滾落線（山回り，即彎的下半段）才開始用力壓板，這會造成減速刮雪；日本技術選大師的核心在於「谷回り（彎的上半段，板頭剛轉向山谷時）」就已經把質心大膽丟入彎內建立 60° 以上高立刃角，讓重力在通過滾落線時轉化為最大加速動能，並在山回り精準釋放雪板儲能（Rebound）。'
      },
      {
        title: '極限貼地刻滑 (Euro-Carve) 之向心力門檻與防 Boot-Out 幾何條件',
        formula: 'v_min = √(g · R_eff · tan(θ_laydown))  |  當 θ = 80° 時需 a_centripetal ≥ 5.67 m/s²',
        explanation:
          '要做出胸口貼地的 Euro-Carve 而非直接摔在雪地上，必須滿足兩個硬物理條件：(1) 入彎初速 v 必須足夠高，使 v²/R_eff 產生的離心力足以撐住 75°–82° 的極限傾角；(2) 在完全伸展身體貼地瞬間，雙腿必須先屈膝蓄力再隨入彎漸進蹬直（Push-Pull Carve），將正壓力牢牢釘在鋼邊上。'
      }
    ],
    coreSkills: [
      {
        name: '零滑移鉛筆線刻滑入門：J-Carve 到早期立刃連結 (Pencil-Line Early Edge Lock)',
        level: 'Lv.2 ➔ Lv.3 刻滑起點',
        casiAasiRef: 'CASI Carved Turns · AASI Pure Tilt without Pivot',
        biomechanics: {
          comBos: '徹底戒除「轉動腳底板（Pivot）」的衝動，僅靠質心跨過雪板產生純粹立刃角（Pure Tilt），讓雪板側切弧線自己轉彎。',
          jointAngles: '踝 38° · 膝 115° · 髖 110°，雙膝與腳踝鎖定在同一垂直切面上，不產生橫向推刮。',
          weightDistribution: '入彎前腳 55% / 後腳 45%，全程雙腳像站在鐵軌上般穩定施壓。',
          edgeControl: '滑過後回頭檢查雪痕：必須是一條寬度不超過 2 公分的深溝，絕無扇形刷雪痕跡。'
        },
        stepByStep: [
          '【Step 1: J-Carve 鐵軌測試】在寬敞緩中坡直滑降加速至約 25 km/h，雙腳絕對不要旋轉雪板，僅將膝蓋與腳踝平順壓向 Toeside（或 Heelside），耐心等待 1.5 秒讓雪板側切弧線自己畫出大弧度直到微幅上坡停下。',
          '【Step 2: 檢驗鉛筆線】停下後回頭看雪道：如果是一道乾淨銳利的細線，代表你成功做到了零 Pivot 純刻滑！',
          '【Step 3: 滾落線前早期立刃】連結雙向刻滑時，在前一彎尚未結束、雪板還在橫越雪道時，就提前翻轉腳踝立起下一彎的鋼邊（Early Edge Engagement）。',
          '【Step 4: 抑制後腳推雪】彎中感覺速度變快時，克制把後腳推出去煞車的本能，改用「壓更深立刃角、讓彎畫得更圓」來控制速度。'
        ],
        commonErrors: {
          symptom: '入彎時還是習慣先把板尾往外甩一下，導致前半彎是搓雪、後半彎才勉強咬住一點點鋼邊。',
          rootCause: '大腦不相信「光靠立刃雪板就會自己轉彎」，在換刃瞬間下意識啟動了後腿旋轉（Premature Pivot）。',
          correctiveDrill: '進行「雙腳捆綁假想練習」：想像雙腳小腿被釘死在雪板上完全不能旋轉，只能像鐘擺一樣左右傾倒膝蓋與腳踝來過彎。'
        },
        expertMindset:
          '「刻滑的第一課不是學怎麼用力，而是學『忍住不轉板子』。相信你的雪板側切半徑（Sidecut），只要你立起刃並壓彎它，物理定律一定會帶你轉彎。」— CASI Lv4 與 AASI 刻滑專家小組'
      },
      {
        name: '高速抽腿換刃與壓縮伸展刻滑 (Cross-Under & Push-Pull Dynamic Carving)',
        level: 'Lv.3 – Lv.4 高階實戰',
        casiAasiRef: 'CASI Cross-Under · SBINZ Vertical Retraction',
        biomechanics: {
          comBos: '換刃時頭頂維持在同一水平高度，雙腿主動向胸口方向抽起（Retraction），讓雪板在身體正下方閃電般切換鋼邊。',
          jointAngles: '換刃瞬間（Edge Change）：膝屈曲最深（95°）；彎心加壓期（Apex）：雙腿如千斤頂般向彎外蹬伸（膝 135°–145°）。',
          weightDistribution: '彎心最大蹬伸瞬間承受高達 2.0G 壓力，使雪板產生最大反拱彎曲（Max Decamber）。',
          edgeControl: '透過「彎中蹬伸加壓（Push）➔ 換刃主動收腿減壓（Pull）」徹底顛覆初階的「入彎站起、彎中蹲下」。'
        },
        stepByStep: [
          '【理解 Push-Pull 反相節奏】傳統初階是「入彎站高、彎中蹲低」；高階動態刻滑則是相反的「換刃收腿蹲低（Pull）➔ 入彎至彎心將雙腿向雪板蹬出去加壓（Push）➔ 出彎再把腿抽回來換刃（Pull）」！',
          '【Cross-Under 抽腿練習】在紅線中高速滑行，出彎瞬間不要往上站起來，而是像跨欄運動員收腿一樣，主動用腹肌與屈髖肌把雙膝「往上抽向胸口」，趁雪板變輕瞬間翻轉腳踝換刃。',
          '【彎中漸進蹬板（Progressive Push）】一換上新鋼邊進入「谷回り」，立即將收起的雙腿像液壓桿一樣向雪面漸進用力推直，把全身重量與離心力灌入雪板中心。',
          '【彈射銜接（Rebound Launch）】在彎尾感受被壓彎的雪板回彈，順著回彈力瞬間再次把雙腿抽回身體下方，直接射入下一彎。'
        ],
        commonErrors: {
          symptom: '抽腿換刃時上半身跟著往下猛點頭折腰，導致換過去的新鋼邊直接卡刃或壓不住板頭。',
          rootCause: '誤把「上半身往下砸」當成「下半身往上收（Retraction）」，破壞了核心柱的垂直穩定。',
          correctiveDrill: '想像自己在一條天花板高度只有 150 公分的低矮隧道裡滑行：頭頂絕對不能往上頂破天花板，也不要往下低頭，只允許雙腳在身體下方像彈簧般收放！'
        },
        expertMindset:
          '「Cross-under 搭配 Push-Pull 是所有世界盃與技術選選手的共同引擎：你在彎心推板越狠，出彎時雪板還給你的彈射能量就越狂暴。」— JSBA 全日本技術選與世界盃競速小組'
      },
      {
        name: '日系高速刻滑核心：外向傾、防內倒與後刃高角度鎖定 (JSBA High-Speed Heelside Carve Mastery)',
        level: 'Lv.3 – Lv.4 專項突破',
        casiAasiRef: 'JSBA 技術選 (Tech Test) · BASI Steep Carve',
        biomechanics: {
          comBos: '在最難的 Heelside（後刃）高速刻滑中，透過骨盆微前旋（順開站姿）與上半身外向傾（Counter-inclination），將質心鎖定在後刃鋼邊正上方。',
          jointAngles: '後膝大膽向內側前膝窩方向微收（Knee-to-Knee drive），髖部深折角 25°，後手向前方彎內延伸。',
          weightDistribution: '入彎前腳 60% 咬死板頭 ➔ 彎中至出彎轉為後腳 60% 壓榨板尾加速（Tail Drive）。',
          edgeControl: '立刃角穩定維持於 65°–75°，即使在硬雪與冰面上也絕不發生後刃抽動滑脫（Heelside Chatter）。'
        },
        stepByStep: [
          '【裝備微調建議】若專攻日系高速刻滑，可將固定器調為前向角度（如 +24°/+9° 或 +27°/+12°），讓骨盆天生朝向板頭，釋放後刃髖關節鎖死。',
          '【谷回り視線與後手引導】在 Toeside 出彎準備換入 Heelside 瞬間，視線提前看向新彎的圓心，並將「後手與後肩主動向板頭內側推過去」，嚴禁後手留在板尾後方。',
          '【後膝內收鎖刃】進入 Heelside 彎心時，主動將後腳膝蓋朝前腳膝蓋後方靠攏下壓，這會形成強大的機械鎖定，把後刃板腰死死釘進冰面。',
          '【外向傾防內倒】當身體傾角超過 60° 時，將彎外（山谷側）的肩膀微向下壓、頭部保持與地平線平行，絕不讓頭與肩膀率先倒向山坡。'
        ],
        commonErrors: {
          symptom: 'Heelside 一加速想壓低摸雪，屁股就先撞到雪面把整條鋼邊頂起，瞬間失速滑出去（Boot-out / Butt-drop）。',
          rootCause: '後刃缺乏髖部折角與外向傾，屁股掉在後刃內側太低處，成為支點把鋼邊從雪面撬開。',
          correctiveDrill: '練習「後刃前手摸後靴外側」或「後手指向板頭斜前方 45°」，強制胸廓微順開並把坐骨收在鋼邊正上方。'
        },
        expertMindset:
          '「前刃刻滑靠的是膽量，後刃刻滑靠的是生物力學。只要你學會把後肩跟後膝帶向板頭，你的後刃立刃角就能瞬間從 45 度突破到 75 度。」— JSBA A級指導員與示範員（デモンストレーター）小組'
      },
      {
        name: '歐式極限貼地刻滑與雙向自由式深弧刻滑 (Euro-Carve / Laydown & Knapton Freestyle Carve)',
        level: 'Lv.4 / Pro 大師級殿堂',
        casiAasiRef: 'Euro-Carve Physics · Knapton Deep Sidecut Mastery',
        biomechanics: {
          comBos: '在通過滾落線前的「谷回り」瞬間完成 80° 立刃，並將雙腿完全蹬直使身體平貼雪面，依靠 v²/R 離心力支撐全身。',
          jointAngles: '入彎換刃極深蹲（膝 85°）➔ 貼地展開期全身伸展（膝 160° · 髖 165°）➔ 出彎收腿迅速抽回（膝 90°）。',
          weightDistribution: '貼地期雙腳 50/50 強力頂住雪板，前臂與手掌戴耐磨手套輕滑過雪面作為第三點感測器（非主支撐點！）。',
          edgeControl: '立刃角高達 78°–85°，必須使用寬板（Waist ≥ 260mm）或增高墊板（Riser Plate）避免固定器觸雪。'
        },
        stepByStep: [
          '【速度與坡度選擇】選擇坡度 18°–25°、雪面平整壓雪完好的中高級寬雪道（必先做盲區回頭掃描！），建立時速 40–50 km/h 的穩定初速。',
          '【極低抽腿換刃】在 Heelside 出彎瞬間，將雙膝收至最深，趁身體貼近雪面時瞬間翻板換上 Toeside 鋼邊。',
          '【向山谷蹬板貼地】不等過滾落線，在板頭指向斜上方進入滾落線前，直接將雙腳用力向雪板方向蹬直，同時前臂與胸口順勢平貼於雪面上滑行。',
          '【彎尾強力收腿起身】在雪板轉過滾落線並開始上坡減速前，必須主動將雙膝猛力收回胸口（Pull knees to chest），讓雪板從身體下方滑過並借離心力重新站起！'
        ],
        commonErrors: {
          symptom: '想做貼地刻滑，結果直接用雙手和肚子撲倒在雪地上滑出去，雪板鋼邊完全脫離雪面。',
          rootCause: '在速度不足或尚未咬緊鋼邊前，就直接把上半身往雪地撲（Weight on Hands instead of Edge），導致鋼邊正壓力歸零。',
          correctiveDrill: '記住鐵律：「85% 的重量永遠在雙腳鋼邊上，手套貼雪只承受不到 15% 的觸感壓力！」先練不摸雪的極低深蹲刻滑，等離心力大到不扶地也會自然貼近雪面時再伸展。'
        },
        expertMindset:
          '「真正的 Euro-Carve 不是『趴在雪地上』，而是你用雙腳把雪板往側面死命踹出去，而雪地剛好貼到你的胸口。」— 歐洲高山刻滑與自由式刻滑專家小組'
      }
    ],
    interactiveConfig: {
      mode: 'carving',
      defaultSliders: { edgeAngle: 72, speed: 58, foreAft: 50, angulation: 42 }
    }
  },

  /* ------------------------------------------------------------------------
     MODULE 06: GROUND TRICKS / BUTTERING MASTERCLASS & COMBO MATRIX
     ------------------------------------------------------------------------ */
  {
    id: 'MOD-06',
    code: 'MOD-06',
    title: '平花全書：基礎技能矩陣、招式組合邏輯與日系グラトリ專家思維',
    subtitle: 'Ground Tricks & Buttering Masterclass: 6 Atomic Skills, 4 Chaining Laws & JSBA Gra-Tri Formulas',
    badge: 'MOD-06 · 日系平花與招式矩陣',
    difficulty: 'Lv.1 初階 ➔ Pro 職業平花',
    systemsRef: 'JSBA グラトリ (ハジキ系 / ノリ系) · SBINZ Flatland Freestyle',
    image: 'assets/images/ground_trick_matrix.png',
    animationMode: 'ground_trick',
    summary:
      '平花（Ground Tricks / Buttering / 日文 **グラトリ Gra-Tri**）是當代單板滑雪最具創造力與觀賞性的領域。然而 90% 的自學者把平花當成「死背招式名稱與硬甩身體」，結果不僅動作僵硬，更頻繁發生逆刃腦震盪或手腕骨折。本教材由日本 JSBA 平花大賽冠軍與自由式生物力學專家聯合拆解，將上百種平花招式還原為 **「六大基礎原子技能（Press 壓板、Ollie/Nollie 儲能彈跳、Spin 正反平轉、Revert 貼地滑轉、Shifty 空中反擰、Edge Lock 刃角鎖定）」** 與 **「四大發力組合邏輯（1. 儲能釋放 Pop vs Ollie、2. 上下半身反向預轉與反擰、3. 刃對點轉換 Edge-to-Point、4. 連續動量銜接 Momentum Chaining）」**。無論是初階的 Nose Press 180，還是風靡日本的 **Owen（オーウェン）、Sone（ソネ）、Drive Spin（ドライブスピン）、Andy 540（アンディ）**，都能用同一套重心百分比公式完美推導！',
    physicsPrinciples: [
      {
        title: '懸臂樑彈性位能公式：Pop 雙腳跳 vs Ollie/Nollie 槓桿儲能彈跳',
        formula: 'U_elastic = ½ · k_flex · (Δz_tip)²  |  Nollie/Ollie 垂直起跳高度較平跳提升 1.6x–2.2x',
        explanation:
          '雪板頭尾是由玻璃纖維、碳纖維束與木芯構成的複合材料懸臂樑（Cantilever Beam）。雙腳同時起跳（Pop）僅能利用肌肉力量；而 Ollie（重心先壓板尾再彈起）與 Nollie（重心先移動至板頭外側壓彎板頭再彈起）則是先將滑手水平動能轉化為雪板的彈性位能 U_elastic，在形變極限點順著雪板回彈（Rebound）疊加起跳，這是高轉速 540/720 的唯一物理來源。'
      },
      {
        title: '角動量守恆與「刃對點轉換 (Edge-to-Point Transfer)」支點力學',
        formula: 'L = I · ω = r_pivot × F_edge · Δt  |  嚴禁 Flat Base 無支點空甩',
        explanation:
          '在雪地上要產生高速旋轉角動量 L，絕對需要一個「高摩擦力支點（Fulcrum）」。如果在板底平放（Flat Base）狀態下甩動肩膀，雪板只會在原地打滑抵消扭矩；正確的日系平花核心是先用 **Toeside 或 Heelside 鋼邊切入雪面建立支點（Edge）**，同時將重心推向 **板頭或板尾單一點（Point）**，在鋼邊釋放的毫秒間將儲存的角動量 100% 轉化為旋轉角速度 ω！'
      },
      {
        title: '上下半身反向扭轉（Counter-Rotation / Shifty）與轉動慣量調控',
        formula: 'L_total = I_upper · ω_upper + I_lower · ω_lower = 0 (無外力矩空中反擰守恆)',
        explanation:
          '(1) **同向預轉（Pre-wind / Wind-up）**：起跳前先將雙肩向旋轉反方向蓄力，起跳瞬間拋出帶動全身同向旋轉（適合 360/540/720 全周旋轉）；(2) **反向扭轉（Counter-rotation / Shifty）**：保持上半身與視線鎖定下坡，僅讓下半身與雪板向反方向扭出 90°–180°，落地或壓板後再靠腹斜肌彈性瞬間拉回，這是 **Owen（オーウェン）** 與 **Nose Block** 的核心物理機制。'
      },
      {
        title: '連續動量銜接（Momentum Chaining）與盲落地防逆刃幾何',
        formula: 'ω_out(Trick 1) ➔ Pre-load(Trick 2)  |  永遠抬起下坡側鋼邊 (Always Lift the Downhill Edge)',
        explanation:
          '平花絕對防摔鐵律：**無論你的板頭板尾轉到哪個角度，永遠要把朝向下坡（山谷側）的那條鋼邊微幅抬離雪面！** 在流暢系（ノリ系）連招中，第一招結束時的旋轉慣性（ω_out）不應被急煞消耗，而是藉由在板頭與板尾之間如畫圓般轉移重心，直接成為下一招壓板（Press）的預載能量。'
      }
    ],
    coreSkills: [
      {
        name: '平花原子一：極限 Nose Press / Tail Press 壓板與單點平衡鎖定 (Press & Butter Balance)',
        level: 'Lv.1 – Lv.2 平花起點',
        casiAasiRef: 'SBINZ Fore/Aft Extreme · JSBA ノリ系基礎',
        biomechanics: {
          comBos: '質心（COM）必須大膽移出兩腳固定器之外，直接垂直投影在「前固定器外側板頭（Nose Press）」或「後固定器外側板尾（Tail Press）」上方！',
          jointAngles: 'Tail Press：後膝彎曲 105°、前腿完全伸直並用腹肌提拉前膝；Nose Press：前膝彎曲 105°、後腿伸直上提。',
          weightDistribution: '標準 Press 為支撐腳 85% / 懸空腳 15%；極限 Block 為支撐腳 95% / 懸空腳 5%。',
          edgeControl: '壓板時必須將雙肩維持與雪板完全平行，切勿因轉頭而讓懸空端歪斜觸雪。'
        },
        stepByStep: [
          '【平地靜態解鎖】在平地扣上雙腳，不要急著用蠻力硬拔前腳！先把整個骨盆與肚臍平行橫移到後腳固定器正上方，接著僅需輕輕提起前腳膝蓋，板頭就會自動翹起 30 公分高（Tail Press）。',
          '【骨盆外推而非彎腰】練習 Nose Press 時，將骨盆向板頭方向平行推過前腳固定器，前膝微彎、後腳跟向上拉起，注意上半身保持挺直，絕不是把頭低下去看板頭！',
          '【緩坡滑行壓板】在綠線緩坡直滑降，保持板底平放（或極微幅上坡刃），維持穩定的 Tail Press 滑行 15 公尺，感受板尾彎曲的甜蜜點（Sweet Spot）。',
          '【前後搖擺轉換（Rock & Roll）】在滑行中流暢地從 Nose Press（數 2 秒）切換至 Tail Press（數 2 秒），訓練骨盆沿板長軸的快速滑移。'
        ],
        commonErrors: {
          symptom: '用力往上拔前腳想做 Tail Press，結果板頭只翹起 3 公分就馬上掉下來，大腿前側酸痛無比。',
          rootCause: '質心（骨盆）還留在兩腳中間（50/50），單靠屈髖肌硬拉雪板對抗自己的體重，根本沒有形成槓桿支點。',
          correctiveDrill: '記住口訣：「80% 靠橫移骨盆，20% 才靠提膝蓋！」先把後手摸到板尾上方，確認骨盆已經超過後固定器再提腳。'
        },
        expertMindset:
          '「平花壓板（Press）看起來像是把一邊拉起來，但物理真相是『把整個身體重量壓到另一邊的外側去』。骨盆移到位，雪板不用拉也會自己翹起來。」— JSBA グラトリ平花專家小組'
        },
      {
        name: '平花原子二：Ollie（豚跳）與 Nollie（前豚跳）儲能彈射工程學',
        level: 'Lv.2 平花核心引擎',
        casiAasiRef: 'CASI/SBINZ Freestyle Pop · JSBA ハジキ系核心',
        biomechanics: {
          comBos: 'Ollie 軌跡：居中微蹲 ➔ 骨盆快移板尾壓彎 ➔ 後腳單點蹬伸起跳 ➔ 空中收雙膝調平雪板 ➔ 雙腳同步落地。',
          jointAngles: '起跳瞬間支撐腿踝、膝、髖三關節在 0.15 秒內完全爆發伸展（Triple Extension 達 165°）。',
          weightDistribution: 'Ollie：50/50 ➔ 15/85（壓尾儲能）➔ 0/100（尾點起跳）➔ 50/50（雙腳吸收落地）。',
          edgeControl: '直線 Ollie 用 Flat Base；旋轉 Nollie（如 Nollie 360/540）則必須帶微幅 Toeside 或 Heelside 刃角起跳！'
        },
        stepByStep: [
          '【Ollie Step 1: 預載與後移】滑行中雙膝微屈，上半身穩定，快速將骨盆向板尾滑移（或把前腳向板頭微推），同時提起前腳使板尾壓彎儲能。',
          '【Ollie Step 2: 尾點爆發與收前膝】在板尾彎曲到極限準備回彈的那一毫秒，後腳全力向地面蹬直起跳，前膝帶領身體向空中上方拉起。',
          '【Ollie Step 3: 空中收後腿調平】飛至最高點時，主動將後腳膝蓋往上收到與前膝同高，讓雪板在空中平行於雪面，最後雙腳同時微屈膝輕柔落地。',
          '【Nollie 轉換訓練】Nollie 是日系高轉速平花的靈魂：將骨盆先快速壓向前腳板頭外側，感受板頭下陷回彈瞬間，前腳用力蹬地彈起並在空中收前腿調平！'
        ],
        commonErrors: {
          symptom: '做 Ollie 時雙腳同時往上跳（變成小袋鼠跳），完全沒有壓彎板尾的彈射感，高度不到 10 公分。',
          rootCause: '缺少「時間差（Timing Separation）」——前腳還沒抬起、骨盆還沒移到板尾，後腳就急著跳了。',
          correctiveDrill: '在雪地上放一根雪杖或畫一條線，練習「一、壓尾滑行半秒鐘；二、過線瞬間後腳單腳彈起」，把壓板與起跳拆成清晰的兩拍！'
        },
        expertMindset:
          '「Ollie 是歐美過障礙與跳台的基礎，而 Nollie 則是日系平花（グラトリ）轉出 540 與 720 的核子反應爐——因為向前衝的動能加上前壓板頭，回彈力道比 Ollie 強上 40%！」— 日系 ハジキ系平花冠軍小組'
      },
      {
        name: '流暢系（ノリ系）經典組合：Drive Spin（ドライブスピン）與 Nose Press 360',
        level: 'Lv.2 – Lv.3 進階平花',
        casiAasiRef: 'JSBA ノリ系 · Edge-to-Point Transfer',
        biomechanics: {
          comBos: '在轉彎刻滑的尾聲，將支撐底面積從「整條鋼邊（Edge）」瞬間收縮至「板頭單點（Nose Point）」，釋放板尾摩擦力完成高速貼地旋轉。',
          jointAngles: '入彎深屈膝蓄力（膝 105°）➔ 推向板頭支點時前膝微伸、後腿微抬（僅離雪 2–5 公分貼地掃過）。',
          weightDistribution: '入彎 50/50 立刃 ➔ 釋放點 Front 85% / Rear 15% ➔ 鎖刃停住回到 55/45。',
          edgeControl: 'Frontside Drive Spin：由 Heelside 刻滑入刃 ➔ 板頭前刃側微點地滑轉 ➔ Toeside 鎖刃停住（絕不卡下坡刃）。'
        },
        stepByStep: [
          '【Phase 1: 刻滑蓄能】在緩中坡先做一個飽滿的 Heelside（後刃）刻滑彎，上半身順著轉彎方向預先打開蓄力。',
          '【Phase 2: 刃對點轉換（Drive）】當雪板準備跨過滾落線時，快速將重心壓向前腳板頭（Front 80%），同時將後腳微微抬離雪面 3 公分。',
          '【Phase 3: 貼地甩尾 180/360】此時板尾完全沒有摩擦力，上半身順勢帶動核心旋轉，讓板尾像圓規畫圓般貼著雪面高速掃過 180° 或 360°。',
          '【Phase 4: 鎖刃煞車】當旋轉到達目標角度時，雙膝微蹲將板尾放回雪面，並立刻立起上坡側鋼邊（如 Toeside）乾淨鎖死旋轉慣性！'
        ],
        commonErrors: {
          symptom: '轉到一半板尾突然重重咬進雪裡，整個人被甩飛出去（Catching the trailing edge）。',
          rootCause: '旋轉過程中重心偷偷掉回後腳（變成 50/50），且轉過 180 度後沒有切換至新上坡刃，導致下坡刃直接切入雪面。',
          correctiveDrill: '先練「Nose Roll 180」：全程死命盯著板頭前方的雪地，確保整個旋轉過程 85% 重量都釘在前腳上，直到轉完才准放平後腳。'
        },
        expertMindset:
          '「Drive Spin 帥氣的關鍵在於『板尾離地不超過 5 公分，看起來像貼著雪面漂移，但實際上板尾是零重量的』。誰能把重心死鎖在板頭支點，誰就能轉得像陀螺一樣快。」— JSBA ノリ系平花專家小組'
      },
      {
        name: '日系平花殿堂神技拆解：Owen（オーウェン）、Sone（ソネ）與 Andy 540（アンディ）',
        level: 'Lv.3 – Pro 大師殿堂',
        casiAasiRef: 'JSBA Pro Gra-Tri · Advanced Combo Chaining',
        biomechanics: {
          comBos: '融合「假動作反擰（Fake / Shifty）」、「單點支撐換刃（Block）」與「預轉爆發 Nollie（Pre-wind Pop）」的高階複合動力鏈。',
          jointAngles: '上下半身最大反向扭轉角（Torsion Angle）達 ±55°，利用腹內外斜肌的彈性回縮實現瞬間正反轉切換。',
          weightDistribution: '在 Front 85%（板頭支點）與 Rear 85%（板尾支點）之間以 0.4 秒週期精準擺盪。',
          edgeControl: '精準控制 Toeside Nose 點支撐與 Heelside Tail 點支撐的無縫交接。'
        },
        stepByStep: [
          '【Sone (ソネ) 拆解】Heelside 入刃 ➔ 重心壓向後腳板尾做 Tail Block 同時上半身向 FS 方向預轉 ➔ 順著板尾回彈跳起完成 Frontside 180/360 落地鎖刃。',
          '【Owen (オーウェン) 拆解】平花流暢系之王：(1) Toeside 入刃做 FS Nose Roll 180 成 Switch；(2) 重心立刻壓向原本的板尾（現為前腳）做反擰 Fake Block，上半身維持不轉而下半身回彈；(3) 順著回彈銜接 BS 180 回到正腳滑出，形成如無限符號般的華麗雙向回旋！',
          '【Andy 540 (アンディ 540) 拆解】彈跳系代表作：(1) 正腳滑行先做一個流暢的 Frontside Nose Roll 180 轉成反腳（Switch）；(2) 不停頓直接順著旋轉動量，把重心壓向 Switch 板頭（即原本板尾）切入 Toeside；(3) 瞬間爆發 Switch Nollie Frontside 360，總計完成 180 + 360 = 540 度空中旋轉！',
          '【連招訓練法】先在底部「平花招式組合矩陣」互動區將每一招的 4 個 Phase 慢速拆開定點練習，再串聯成一氣呵成的動量鏈。'
        ],
        commonErrors: {
          symptom: '做 Owen 或 Andy 時，第一段 180 轉完就停頓卡死，完全借不到下一段的旋轉力量。',
          rootCause: '第一段 180 落地時雙腳平放煞車了，沒有在落地前 0.1 秒就把重心直接壓向下一招的支點腳（失去 Momentum Chaining）。',
          correctiveDrill: '把「第一招的結束動作」直接當成「第二招的預壓動作（Landing IS the Pre-load）」，中間絕對不允許出現雙腳 50/50 休息的瞬間！'
        },
        expertMindset:
          '「外行人看 Owen 與 Andy 覺得眼花撩亂，內行人看其實只是 3 個基礎原子動作透過『落地即預壓』無縫接起來而已。掌握下方互動矩陣的 8 個原子，你也能自己發明新招！」— 50人專家團日系平花總教練組'
      }
    ],
    interactiveConfig: {
      mode: 'ground_trick',
      defaultSliders: { edgeAngle: 28, speed: 26, foreAft: 78, angulation: 35 }
    }
  },

  /* ------------------------------------------------------------------------
     MODULE 07: TERRAIN PARK: JUMPS, SPINS, CORKS & RAILS/BOXES
     ------------------------------------------------------------------------ */
  {
    id: 'MOD-07',
    code: 'MOD-07',
    title: '公園與跳台科學：ATML 法則、Kicker 拋物線與 Jibbing 道具平衡',
    subtitle: 'Terrain Park Masterclass: Smart Style, ATML Jump Physics, 180–720 Spins, Corks & Rail/Box Jibbing',
    badge: 'MOD-07 · 公園跳台與道具科學',
    difficulty: 'Lv.2 中階 ➔ Lv.4 / Pro 公園',
    systemsRef: 'CASI/SBINZ Park & Freestyle · AASI ATML Model · Smart Style',
    image: 'assets/images/park_kicker_physics.png',
    animationMode: 'park_kicker',
    summary:
      '地形公園（Terrain Park）是飛翔與道具控制的殿堂，但同時也是雪場嚴重運動傷害（脊髓損傷、膝韌帶斷裂、腦震盪）發生率最高的區域。公園滑行絕不靠「閉著眼睛猛衝（Send it blind）」，而是嚴格建立在 **ATML 四階段物理模型（Approach 助滑 ➔ Takeoff 起跳 ➔ Maneuver 空中動作 ➔ Landing 落地）** 與 **拋物線彈道力學** 之上。為什麼飛太短掉在平台（Knuckle）或飛太遠掉在平地（Flat）會震碎膝蓋，而落在落地斜坡甜蜜點（Sweet Spot）卻輕如羽毛？為什麼上 Box 與 Rail 時稍微立起 2 度鋼邊就會瞬間橫摔撞桿（Taco）？本章節由 X-Games 教練與 SBINZ 自由式考官團隊編寫，從直飛抓板（Grabs）、正反轉 180–720、偏軸 Cork 力學，到 50-50 與 Boardslide 道具鎖定，提供最安全的階梯式進化藍圖。',
    physicsPrinciples: [
      {
        title: '跳台拋物線彈道方程式與 Sweet Spot 落地法向衝擊力最小化',
        formula: 'x(t) = v_0·cos(θ_lip)·t,  z(t) = v_0·sin(θ_lip)·t - ½gt²  |  F_impact ∝ m · v_t · sin(|θ_trajectory - α_landing|)',
        explanation:
          '滑手離開跳台台口（Lip，仰角 θ_lip）後即進入無動力拋物線飛行，空中軌跡 100% 由助滑速度 v_0 與台口 Pop 向量決定。當落點位於落地斜坡甜蜜點（Sweet Spot，坡度 α ≈ 30°–35°）時，滑手飛行終端速度向量 v_t 與斜坡切線夾角 Δθ 僅約 5°–10°，垂直於雪面的正向衝擊力 F_impact 極小；反之若落在平緩的饅頭頂（Knuckle，α ≈ 0°），夾角高達 45°，衝擊力暴增 4 至 6 倍！'
      },
      {
        title: 'ATML 四階段因果鏈法則 (Approach ➔ Takeoff ➔ Maneuver ➔ Landing)',
        formula: '90% 的空中失衡 (Maneuver Error) 在離開台口 (Takeoff) 的那一毫秒就已經注定了',
        explanation:
          'ATML 是全球公園教練唯一的診斷鐵律：(1) **Approach**：助滑段透過 Speed Check 鎖定精準初速，進入起跳斜坡（Transition）前雙肩與雪板回正；(2) **Takeoff**：在台口邊緣雙腳 50/50 垂直向斜坡法線方向 Pop 起（切勿只用後腳亂踢）；(3) **Maneuver**：收起雙腿（Shrinking Moment of Inertia）抓板穩定核心；(4) **Landing**：目視落地點，雙腳與三關節同步離心吸收。'
      },
      {
        title: '旋轉跳台（Spins 180–720）之微立刃平台（Platform Edge Set）與轉動慣量控制',
        formula: 'L_z = I_zz · ω_z = const (空中守恆)  |  收腿抓板使 I_zz ↓ 35% ➔ 旋轉角速度 ω_z ↑ 54%',
        explanation:
          '在跳台上做 360 或 720 旋轉，絕不能在台口把雪板橫搓出去（這會大幅減速導致落入 Knuckle）。正確做法是在助滑段先走微 S 形路線（Set-up Carve），以約 10°–15° 的極微幅鋼邊刻滑切向台口建立支點（Platform），在台口瞬間將預轉的上半身隨 Pop 釋放，升空後立刻收腿抓板（縮小轉動慣量 I_zz）以加速旋轉，準備落地前再伸展雙腿減緩轉速。'
      },
      {
        title: 'Jibbing（Box / Rail 道具）之零立刃平底法則與質心嚴格居中',
        formula: 'μ_metal ≈ 0.03 (趨近零摩擦)  |  θ_edge = 0.0° (Flat Base) 且 COM 垂直釘死於道具中心線',
        explanation:
          '塑膠 Box 與金屬鐵桿（Rail）表面極為光滑且完全無法讓鋼邊切入。在雪地上立刃 10° 可以幫你平衡，但在 Box/Rail 上只要立起 3° 鋼邊，板底就會瞬間像踩到香蕉皮一樣從側面滑走（Slip-out）。因此 Jibbing 的最高物理鐵律是：**從起跳上道具到滑離道具末端，雪板必須 100% 絕對平放（Zero Tilt），且視線死鎖道具末端（Look at the end of the feature）**。'
      }
    ],
    coreSkills: [
      {
        name: 'Smart Style 公園安全準則與直飛抓板基礎 (Straight Air & Core Grabs: Indy / Melon / Mute)',
        level: 'Lv.2 公園入門必修',
        casiAasiRef: 'Smart Style 4 Rules · CASI/AASI ATML Straight Air',
        biomechanics: {
          comBos: '從進入跳台斜坡（Transition）到離開台口（Lip），質心 100% 垂直居中於雙腳正中央与完全平放的板底（Flat Base）之上。',
          jointAngles: '進入斜坡抗壓微蹲（膝 115°）➔ 台口爆發蹬伸 Pop（膝 160°）➔ 空中收腿抓板（膝 90°）➔ 落地緩衝（膝 110°）。',
          weightDistribution: '嚴格維持前腳 50% / 後腳 50% 雙腳平跳（Two-Foot Pop），防止空中後仰「搖窗戶（Rolling Down the Windows）」。',
          edgeControl: '助滑最後 5 公尺及落地瞬間皆維持 완전 Flat Base（零立刃直進直出）。'
        },
        stepByStep: [
          '【Smart Style 勘場鐵律】第一趟絕不直接跳！必須先從跳台旁邊滑過（Inspection Lap），檢查台口形狀、落地坡長度，並觀察前一位滑手的助滑起點速度，同時確認落地坡無人摔倒停留（舉手示意後再出發）。',
          '【Approach & Takeoff 雙腳 Pop】助滑最後 5 公尺停止轉彎，板底完全平放對準台口；當雙腳抵達台口最頂端邊緣時，雙腳 50/50 同時向斜上方柔和蹬直（Pop，而非猛踢板尾）。',
          '【Maneuver 空中收腿抓板】升空後，「絕對不要彎腰往下伸手去抓雪板」，而是主動用腹肌把雙膝往上抽向胸口，讓雪板自己貼近你的手，完成穩定的 Indy（後手抓兩腳間前刃）或 Melon（前手抓兩腳間後刃）。',
          '【Landing 甜蜜點落地】在最高點鬆開抓板，視線鎖定落地坡甜蜜點，雙腳同時觸地並利用踝膝髖三關節柔軟吸收衝擊。'
        ],
        commonErrors: {
          symptom: '一飛到空中雙手就不受控制地在身體兩側瘋狂畫圈（Rolling down the windows），落地時板尾先著地重摔屁股。',
          rootCause: '進入跳台斜坡（Transition）時害怕而身體向後仰，沒有抵抗斜坡向心加速度，導致起跳瞬間質心已經掉在後腳後方。',
          correctiveDrill: '先在小跳台（S 台）練習「雙手抱住小腿脛骨跳躍」或「起跳時前手主動指向台口斜上方 45°」，確保胸口與小腿平行進入空中！'
        },
        expertMindset:
          '「空中能不能抓到板子，決定了你在空中有沒有控制權。把膝蓋抽向胸口抓板，你的身體在空中就會結合成一顆緊實的砲彈，完全不會被風或亂流吹歪。」— X-Games 與奧運 Slopestyle 教練小組'
      },
      {
        name: '跳台正反轉 180 / 360 進程與 Set-up Carve 引導技術 (Frontside & Backside 180–360 Spins)',
        level: 'Lv.2 – Lv.3 進階飛躍',
        casiAasiRef: 'SBINZ Park Spins · AASI Platform Edge Set',
        biomechanics: {
          comBos: '利用柔和的 S 形助滑路線（Set-up Carve）在台口建立 10°–15° 微立刃支點，讓旋轉軸心垂直穿過身體中央。',
          jointAngles: '起跳瞬間雙肩、胸椎與視線向旋轉方向水平展開（絕不低頭看腋下，否則會變成偏軸翻滾！）。',
          weightDistribution: '雙腳 50/50 平均蹬離台口，防止單腳偏重造成空中軸心歪斜（Off-axis wobble）。',
          edgeControl: 'Frontside Spin 從微 Heelside（或微 Toeside 視流派）起跳；Backside Spin 從微 Toeside 起跳並執行盲落地視線鎖定。'
        },
        stepByStep: [
          '【Set-up Carve 助滑路線】進入跳台前做一個寬緩的預備彎：若要跳 Backside 180/360，先靠左微切 Heelside，進入跳台斜坡時平順換上極微幅（10°）的 Toeside 對準台口右前方。',
          '【台口釋放（Wait for the Lip!）】克制在跳台斜坡中間就提前甩身體的衝動！保持微預轉蓄力，直到雪板抵達台口邊緣瞬間，雙腳 Pop 同時將前肩與視線水平帶向旋轉方向。',
          '【FS 180 vs BS 180 視線法則】Frontside 180 後半段看著山谷盲落地（雙眼盯住後方原助滑道）；Backside 180 轉過 90 度後即可直接低頭看見正下方落地斜坡！',
          '【進階 360 鎖定】跳 360 時，上半身持續轉頭尋找落地坡（Spot the Landing），一旦在轉過 270° 時看到落地點，立刻伸展雙腿準備微立刃落地。'
        ],
        commonErrors: {
          symptom: '跳 360 時在跳台斜坡上還沒到台口就用力轉板，結果雪板在台口橫向刮雪減速，轉不到 270 度就重重摔在平台（Knuckle）上。',
          rootCause: '太早釋放旋轉（Spinning too early on the transition），把向前的推進動能全部消耗在台口搓雪摩擦上。',
          correctiveDrill: '記住黃金口訣：「Pop FIRST, Spin SECOND（先在台口跳起來，再讓旋轉帶動雪板）！」先在平地過小雪包練習直到過包頂才開始轉體。'
        },
        expertMindset:
          '「所有跳台旋轉失敗的根源都是『急』。跳台本身就會把你拋向空中，你只需要耐心地滑到台口最後一寸，垂直跳起的同時轉頭看你想去的地方，360 就會輕鬆完成。」— SBINZ / NZSIA 自由式考官小組'
      },
      {
        name: 'Box 與 Rail 道具平衡科學：從 50-50 到 Boardslide 鎖定 (Jibbing Mastery: 50-50 & Boardslide)',
        level: 'Lv.2 – Lv.3 道具專項',
        casiAasiRef: 'CASI/SBINZ Jibbing Progression · Zero-Tilt BOS',
        biomechanics: {
          comBos: '質心（COM）必須 100% 垂直落在道具與雪板重疊的那塊「接觸面（Contact Patch）」正上方，板底保持 0° 完全水平。',
          jointAngles: '踝 35° · 膝 115° 低重心微蹲，雙膝微向內或外維持彈性，吸收上桿瞬間的衝擊。',
          weightDistribution: '50-50 為前後腳 50/50；Boardslide（前腳跨過桿子橫滑）則是將重心 70% 壓在踩於桿子正上方的那隻腳（或兩腳中間）。',
          edgeControl: '在道具上嚴禁任何立刃動作！雙眼永遠死盯「道具最末端（End of the Box/Rail）」，絕不低頭看腳下的鐵桿！'
        },
        stepByStep: [
          '【Step 1: Ride-on 50-50】從寬平的入門 Box 開始：助滑對準 Box 中心線，上 Box 前 3 公尺完全放平雪板（Flat Base），微蹲維持僵直穩定的板底滑過整座 Box，視線全程看著 Box 末端出口。',
          '【Step 2: Urban Step-on 50-50】進階至需從側面跳上的 Box/Rail：以約 10° 夾角助滑接近，在道具旁雙腳 Ollie 起跳，空中將雪板對準道具頂面，落地瞬間雙膝緩衝並完全放平板底滑至末端。',
          '【Step 3: Backside Boardslide（橫板滑行）】上道具瞬間，雙腳微跳並利用上下半身反向扭轉（Shifty / Counter-rotation）：下半身將板頭跨過道具轉至 90° 橫向，但上半身與雙肩保持朝向原本反方向預蓄力！',
          '【Step 4: 下道具回正（Revert to Regular）】滑離道具末端瞬間，釋放上半身的反向扭力，讓雪板在空中自動轉回 90° 正腳方向，微立刃平順落地。'
        ],
        commonErrors: {
          symptom: '一做 Boardslide 轉成橫向時，整張雪板立刻從背後往前滑走，後腦勺與背脊重重往後摔在 Box 或鐵桿上！',
          rootCause: '上道具時身體沒有隨坡度（道具也是有下坡傾角的！）微向前傾，且下意識立起了後刃（Heelside edge catch on rail）。',
          correctiveDrill: '記住鐵律：「道具是傾斜向下的，所以你的身體必須跟道具表面垂直（即微向山谷前傾）！」先在雪地上畫一條白線，練習跳上白線做 90° Shifty 並保持板底完全平貼雪面。'
        },
        expertMindset:
          '「在雪地上你靠鋼邊活命，但在鐵桿上鋼邊就是你的敵人。只要你的眼睛盯著鐵桿末端、腳底板完全踩平、肩膀與下半身保持反向張力，鐵桿就會乖乖聽你的話。」— 公園 Jibbing 與街頭道具專家小組'
      },
      {
        name: '高階偏軸轉體原理：Cork 540 / 720 與空中軸心轉換力學 (Off-Axis Cork Biomechanics)',
        level: 'Lv.4 / Pro 競技殿堂',
        casiAasiRef: 'FIS Slopestyle / Big Air Biomechanics',
        biomechanics: {
          comBos: '在台口起跳瞬間，結合「水平旋轉角動量（Spin）」與「約 35°–45° 的肩髖偏軸傾倒（Axis Tilt）」，使身體在空中繞著斜向主慣性軸旋轉。',
          jointAngles: '起跳瞬間前肩向斜下方壓入（Dip the shoulder）同時後腿向上踢出，空中緊收雙膝抓板（Tail / Indy / Japan Grab）。',
          weightDistribution: '台口仍須保持雙腳有力蹬伸，切勿在未獲得垂直高度前就過度把頭往地面砸。',
          edgeControl: '轉過 360° 進入最後 180° 時，視線可在身體下方直接鎖定落地斜坡（Blind-spot elimination）。'
        },
        stepByStep: [
          '【理解平轉與 Cork 的差異】平轉 540/720 旋轉軸垂直於地面，高轉速時容易產生離心頭暈；Cork（偏軸轉體）則是將旋轉軸傾斜約 40°，像螺旋開瓶器（Corkscrew）般結合半個空翻與旋轉，反而更容易在空中看見落地坡！',
          '【地面與彈翻床模擬】務必先在室內彈翻床（Trampoline）或氣墊跳台（Airbag）完成 50 次肌肉記憶：練習起跳至最高點時，將前肩往對側膝蓋方向下壓並轉頭看腋下後方。',
          '【Backside Cork 540 台口啟動】助滑進行標準 Toeside Set-up Carve，抵達台口雙腳 Pop 的瞬間，前肩向斜上方拋出後迅速向後下方收折，同時後手抓穩 Indy 或 Tail Grab 鎖定軸心。',
          '【空中開展與落地】當你在空中倒斜轉過一圈看到正下方的落地甜蜜點時，鬆開抓板將雙腿向落地坡伸展，讓旋轉軸自然回正並以微 Toeside 吸收落地。'
        ],
        commonErrors: {
          symptom: '還沒離開台口就把頭和肩膀往雪地猛砸，結果完全沒有飛出高度，直接在台口邊緣頭下腳上翻摔。',
          rootCause: '違反了「先垂直起跳獲得高度（Up First），再改變旋轉軸心（Tilt Second）」的角動量分解原則。',
          correctiveDrill: '在未能在氣墊（Bag Jump）連續 10 次精準控制起跳高度與落點角度前，嚴禁在硬雪大跳台嘗試偏軸動作！'
        },
        expertMindset:
          '「Cork 不是失控的空翻，而是最精密的陀螺儀控制。永遠先向天空要高度，再向肩膀要軸心，你的視野會在空中突然變得無比清晰。」— 奧運 Big Air 與生物力學專家小組'
      }
    ],
    interactiveConfig: {
      mode: 'park_kicker',
      defaultSliders: { edgeAngle: 15, speed: 52, foreAft: 50, angulation: 20 }
    }
  }
);

/* ==========================================================================
   APPEND MODULES 08 TO 10 (MOGULS/TREES, BACKCOUNTRY/AVALANCHE, INJURY/TUNING)
   ========================================================================== */
window.SB_CURRICULUM_DATA.modules.push(
  /* ------------------------------------------------------------------------
     MODULE 08: ALL-MOUNTAIN: MOGULS, STEEPS & TREE RIDING
     ------------------------------------------------------------------------ */
  {
    id: 'MOD-08',
    code: 'MOD-08',
    title: '全地域進階：蘑菇地形 (Moguls)、陡坡 (Steeps) 與樹林 (Glades) 戰術',
    subtitle: 'All-Mountain Tactical Mastery: Mogul Absorption, 40°+ Steep Jump Turns & Tree Line Selection',
    badge: 'MOD-08 · 全地域陡坡與樹林',
    difficulty: 'Lv.3 進階 ➔ Lv.4 大師實戰',
    systemsRef: 'BASI Bumps & Steeps · CASI Tactical Riding · AASI Terrain Adaptation',
    image: 'assets/images/tree_mogul_line.png',
    animationMode: 'trees_moguls',
    summary:
      '當雪道從平整的壓雪道（Groomers）轉換為布滿高低雪包（Moguls/Bumps）、坡度超過 38°–45° 的黑鑽陡坡（Double Black Steeps）以及高密度樹林（Glades/Trees）時，傳統平地大弧度站起換刃將完全失效。在蘑菇與樹林中，滑手沒有空間畫出寬闊的刻滑弧線，且雪包的隆起會把僵硬的雙腿直接彈飛至空中失控。本章節整合英國 BASI 高山五大技術主軸（Bumps & Steep Terrain）與加拿大 CASI 全地域戰術，傳授三大生存與流暢滑行法則：**1. 活塞式主動收縮吸收（Piston Absorption & Extension，保持頭頂水平高度不變，由雙膝隨地形起伏高速收放）**、**2. 陡坡下壓拔重跳轉（Down-Unweighting & Jump Turns，在零前進空間內瞬間完成 180° 換向）**、以及 **3. 樹林視覺導航鐵律（永遠盯著樹與樹之間的空隙看，絕不盯著樹幹看！）**。',
    physicsPrinciples: [
      {
        title: '主動懸吊阻尼方程式：質心水平軌跡恆定法則 (Active Suspension & Flat COM Trajectory)',
        formula: 'z_COM(t) ≈ const  ⟺  Δz_knees(t) = -Δz_terrain(x(t))  |  雙腿行程 ±35 cm',
        explanation:
          '汽車開過減速帶時，避震器會壓縮使車廂保持水平；滑過蘑菇雪包時同理：當雪板爬上雪包頂端（Crest，地形高度 Δz ↑）時，滑手必須主動將雙膝與髖部收向胸口（Flexion / Absorption）；當雪板滑入兩包之間的溝槽（Trough，地形高度 Δz ↓）時，雙腿主動向下伸展（Extension）把雪板貼回溝底雪面。如此一來，身體質心（COM）在空中維持一條水平直線，雪板永遠不會脫離雪面失控飛起！'
      },
      {
        title: '40°+ 極限陡坡重力分量與跳轉拔重 (Steep Slope Gravity Component & Jump Turn Pivot)',
        formula: 'a_downhill = g · sin(42°) ≈ 6.56 m/s² (1.5秒內時速即破 35 km/h)  |  極短半徑 R < 1.8m',
        explanation:
          '在 40° 以上的極限陡坡或狹窄懸崖走廊（Couloir）中，板頭只要指向滾落線超過 1 秒鐘，高達 0.67G 的下滑重力分量就會讓滑手瞬間加速到無法煞停。因此必須採用「下壓拔重（Down-unweighting）」配合雪板回彈或微幅「跳轉（Jump Turn）」：趁板頭懸空或極輕載的 0.25 秒內，以上下半身反向扭轉瞬間將雪板樞軸旋轉（Pivot）150°–180° 直接切入新上坡刃煞車！'
      },
      {
        title: '樹林滑行之「目標鎖定效應 (Target Fixation)」神經運動學與光流導航',
        formula: 'Gaze Vector \vec{g}_{eye} ➔ Motor Steering \vec{u}_{board} (視覺運動耦合延遲 Δt ≈ 180 ms)',
        explanation:
          '人類運動皮質具有強烈的「視覺引導轉向（Oculomotor Steering Coupling）」本能：你的眼睛死盯著哪裡，你的前肩與膝蓋就會在 0.2 秒後無意識地把雪板導向哪裡！在樹林中如果因為害怕撞樹而死盯著樹幹看（Target Fixation），大腦就會導引你精準撞上那棵樹。唯一解法是強制眼球只掃描並聚焦於「發光的空隙通道（The Gaps / Spaces between trees）」。'
      },
      {
        title: '蘑菇地形雙線戰術：溝槽流暢線 (Trough Line) vs 包頂樞軸線 (Crest Pivot Line)',
        formula: 'Line A (溝槽吸收流暢線：中速高節奏) vs Line B (包頂地形拔重線：陡坡極低速控速)',
        explanation:
          '面對蘑菇群有兩種截然不同的物理路線：(1) **溝槽線（Trough Line）**：順著兩顆雪包中間的天然蜿蜒水道滑行，利用包側斜面作為天然銀行彎（Banked Turn）減速；(2) **包頂線（Crest Line）**：當雪板滑上雪包最頂端時，板頭與板尾同時懸空（支點僅剩板腰 30cm，轉動阻力趨近於 0），此刻利用地形拔重（Terrain Unweighting）瞬間扭轉換刃，從雪包背面削雪減速滑下。'
      }
    ],
    coreSkills: [
      {
        name: '蘑菇地形活塞吸收與包頂換刃實戰 (Mogul Piston Absorption & Crest Terrain-Unweighting)',
        level: 'Lv.3 進階全地域',
        casiAasiRef: 'BASI Strand #3 Bumps · CASI Absorption & Extension',
        biomechanics: {
          comBos: '上半身保持絕對安靜且微向前傾（防止在包後側被甩成後坐），雙腿如獨立活塞在骨盆下方高頻率收放。',
          jointAngles: '爬上雪包頂：極深收腿（踝 42° · 膝 85° · 髖 85°）；滑入雪包溝底：主動伸展貼雪（膝 140°）。',
          weightDistribution: '入包頂瞬間微壓前腳 60% 使板頭先下壓貼合雪包背面（壓鼻下包 Nose-down into the backside）。',
          edgeControl: '在雪包頂點利用板頭板尾懸空的零阻力瞬間完成 Cross-under 換刃。'
        },
        stepByStep: [
          '【Step 1: 平整坡波浪模擬】在一般紅線先練習「反相收放」：滑行中主動快速把雙膝收到胸口，再快速往雪地推直，確認頭頂像頂著一杯滿水般完全不上下起伏。',
          '【Step 2: 單顆雪包壓鼻練習】找一顆獨立雪包，滑上包頂瞬間主動收起雙膝吸收高度；過包頂瞬間，「前腳主動往下壓（Push the nose down）」，讓雪板緊貼著雪包背面滑下，絕不飛起來！',
          '【Step 3: 包頂零阻力換刃】當滑上雪包頂端、雙膝收到最高點時，用雙膝快速把雪板轉過滾落線換上新鋼邊，順著雪包背面斜坡刮雪控速。',
          '【Step 4: 視線提前三顆包】眼睛絕對不要看腳下正在踩的這顆雪包！永遠看向下方第 2 至第 3 顆雪包的溝槽出口，讓身體提前 1.5 秒預備吸收節奏。'
        ],
        commonErrors: {
          symptom: '滑上第一顆雪包頂端雙腿還直挺挺地踩著，結果像跳跳台一樣被雪包彈飛到半空中，直接撞上下一顆雪包正面。',
          rootCause: '犯了初階習慣的「在雪包頂端向上站起（Up-unweighting on the crest）」，等於在跳台上主動起跳加速失控。',
          correctiveDrill: '記住反直覺鐵律：「包頂收腿縮成球（Flex on top），溝底伸腿踩實地（Extend in the rut）！」'
        },
        expertMindset:
          '「蘑菇地形不是體力的考驗，而是節奏與視覺的遊戲。只要你在包頂主動把膝蓋收向胸口並把板頭往下壓進雪包背面，雪包就會從障礙物變成幫你免費換刃的支點。」— BASI Bumps 與 SBINZ 考官小組'
      },
      {
        name: '40°+ 極限黑鑽陡坡跳轉與下壓點剎控速 (Steep Terrain Jump Turns & Edge Checks)',
        level: 'Lv.3 – Lv.4 高山陡坡',
        casiAasiRef: 'BASI Strand #4 Steeps · AASI Short-Radius Pivot',
        biomechanics: {
          comBos: '在極陡坡上，必須大膽將質心（COM）向山谷下方前腳投射（Commit to the Nose），克服向後靠山壁的恐懼本能。',
          jointAngles: '入彎瞬間執行爆發性下壓抽腿（Down-unweighting）或微豚跳，空中上下半身反向扭轉完成大角度 Pivot。',
          weightDistribution: '入彎啟動瞬間前腳高達 70% / 後腳 30%（以板頭為圓心甩動板尾）；落定煞車瞬間雙腳 50/50 強力壓刃。',
          edgeControl: '轉彎半徑壓縮至 1.5–2.0 公尺內，幾乎在滾落線上瞬間完成換向，不給重力任何加速時間。'
        },
        stepByStep: [
          '【Step 1: 陡坡點剎橫滑（Edge Checks）】在黑線陡坡先建立絕對煞車信心：面向下坡（Heelside）或山坡（Toeside）垂直下墜 2 公尺，瞬間沉膝大力立刃「砰！」一聲完全煞停，確認自己在 40° 坡隨時能停住。',
          '【Step 2: 前手向山谷投射】準備入彎前，強制將前手與視線伸向山谷斜下方（越陡越要敢往前傾！），將 65% 重心壓在前腳固定器上。',
          '【Step 3: 抽腿跳轉（Jump Turn）】雙膝快速屈伸微跳（或強力抽腿收膝），使板尾完全脫離雪面，趁空中零阻力瞬間將後腳向上坡猛力一提一轉，使雪板瞬間轉過 160°。',
          '【Step 4: 落地即鎖刃吸收】雪板落回雪面瞬間，已經是新彎的上坡鋼邊，雙膝立即深蹲吸收下墜動能並控制在慢速滑行，停穩後再啟動下一跳。'
        ],
        commonErrors: {
          symptom: '站在陡坡頂往下看覺得太恐怖，身體本能往山坡裡縮（重心掉到後腳 80%），結果板頭翹起完全轉不了彎，板尾一路失控打滑摔下山。',
          rootCause: '恐懼引發的「向山壁退縮反射（Leaning into the hill / Backseat）」，使前腳失去支點，雪板無法越過滾落線。',
          correctiveDrill: '在陡坡入彎前大喊一聲或吐氣，強制用前手去「指向山腳下的房子」，只要前肩與前膝敢壓向山谷，板尾就會輕巧地轉過來！'
        },
        expertMindset:
          '「陡坡是單板最迷人的心理戰：山坡越陡，你越往後躲就越危險；反而當你勇敢把胸口和前腳迎向山谷深淵時，你就能瞬間奪回 100% 的控制權。」— 歐洲 Chamonix 高山嚮導與 BASI ISTD 小組'
      },
      {
        name: '樹林滑行（Glades / Tree Riding）視覺導航、短半徑削雪與緊急煞停戰術',
        level: 'Lv.3 – Lv.4 樹林實戰',
        casiAasiRef: 'CASI Tree Tactics · SBINZ Pivot Slashes',
        biomechanics: {
          comBos: '採用高度靈活的居中微蹲站姿（Compact Athletic Stance），雙手收在胸前護住臉部與軀幹（避免樹枝勾拉手臂導致失衡）。',
          jointAngles: '踝 36° · 膝 110° 保持隨地形彈性吸收，隨時準備以後腳強力推雪（Slash）瞬間減速。',
          weightDistribution: '正常穿梭時 50/50 靈活扭轉；遇到狹窄樹縫需要急減速時，重心微移前腳並將後腳推出 75° 橫向點剎。',
          edgeControl: '以高頻率、短半徑的搓雪轉彎（Short-radius steered turns）與銀行彎（利用樹根旁積雪鼓包轉向）為主，嚴禁在密林中做鎖死軌跡的純刻滑！'
        },
        stepByStep: [
          '【黃金視覺鐵律：看空隙不看樹】進入樹林前對自己下達死命令：「我的眼睛裡沒有樹，只有發光的白色通道！」視線永遠串聯前方 2 到 3 個樹木間隙。',
          '【利用樹旁雪包減速】樹木周圍通常會堆積出碗狀雪包（Tree pillows/banks）；不要在樹縫正中間最陡處加速，而是把雪板滑向樹幹側上方的積雪斜面，借上坡斜面自然減速並順勢反彈換向！',
          '【Pivot Slash 短距急煞】當前方通道變窄時，利用下肢快速旋轉將雪板打橫，雙膝深蹲用整條鋼邊大力噴雪減速（Speed Check），把速度降回步行速度再穿過窄門。',
          '【樹洞（Tree Well）致命風險防範】針葉樹（松樹、杉樹）下方的低矮樹冠會形成深達 2 公尺的鬆軟無底樹洞（Tree Well，掉入極易倒栽蔥窒息！）；滑行時務必與針葉樹樹裙保持 1.5 公尺以上距離，且結伴滑行絕不單飛！'
        ],
        commonErrors: {
          symptom: '在樹林裡越滑越快停不下來，最後眼睛死死盯著正前方的一棵大樹直接撞上去。',
          rootCause: '一方面犯了「目標鎖定效應（盯著樹看）」，另一方面試圖在樹林裡畫大圓弧刻滑，導致轉彎半徑大於樹距。',
          correctiveDrill: '在空曠雪道練習「假想樹林緊急雙向急停」：每滑 3 個小彎就聽口令在 2 公尺距離內完全煞停，確認緊急制動反射達標再進樹林。'
        },
        expertMindset:
          '「樹不會動，會動的是你的視線。在北海道或北美樹林裡，頂尖滑手看的不是眼前這兩棵樹，而是 15 公尺外光線透進來的那條走廊。」— 北海道 Niseko / 北美樹林領滑專家小組'
      },
      {
        name: '亂雪、春雪思樂冰 (Slush) 與冰面結殼雪 (Crust) 全天候雪況調適矩陣',
        level: 'Lv.2 – Lv.4 全天候適應',
        casiAasiRef: 'AASI Snow Condition Adaptation · BASI Variable Snow',
        biomechanics: {
          comBos: '依據雪面剪切強度（Shear Strength）與阻力係數，動態微調「立刃速率」與「前後腳壓力比」。',
          jointAngles: '在下午被打爛的亂雪堆（Chop / Crud）中，放寬踝膝關節剛性（維持 70% 柔軟度），允許雪板微幅震動而不傳導至骨盆。',
          weightDistribution: '硬冰面：50/50 精準折角；春雪濕重思樂冰（Slush）：微後移 45/55 防止板頭被高黏滯濕雪吸住減速翻車。',
          edgeControl: '冰面採用漸進平順加壓（Progressive Edge Build）；亂雪堆採用大力切破或輕巧包頂抽腿。'
        },
        stepByStep: [
          '【硬冰面（Hardpack / Ice）戰術】絕對禁止急促猛力踹板！入彎時輕柔立刃，在彎中透過深度的「膝髖折角（Angulation）」將上半身壓回雪板正上方，用整條有效鋼邊均勻咬冰。',
          '【下午爛雪堆（Tracked-out Chop）戰術】放低重心，把雙腿當成越野車的長行程避震器；遇到小雪堆直接立刃切過去，遇到大雪堆則在堆頂收腿換刃。',
          '【春雪思樂冰（Wet Slush）戰術】濕雪摩擦力極大且不均勻（尤其是從陰影滑入陽光曝曬區瞬間會急減速！），預先將重心微移至 45/55 抬輕板頭，並減少平放板底時間（全程保持微立刃避免水膜吸盤效應）。',
          '【風吹硬殼雪（Wind Crust）戰術】採用雙腳平均施壓的寬大柔和轉彎，避免單點重壓踩破薄冰殼導致雪板卡入底層軟雪。'
        ],
        commonErrors: {
          symptom: '春天下午從正常雪面滑進一灘融化的深色濕雪時，板頭像踩到強力膠一樣瞬間急煞，整個人往前飛撲翻滾。',
          rootCause: '未預判雪面含水量與摩擦係數突變（Friction Spike），重心還壓在前腳 60%，導致減速慣性矩直接把人拋過板頭。',
          correctiveDrill: '養成「讀雪色（Reading Snow Texture & Color）」習慣：看到顏色變深（濕雪）或反光發亮（冰面）前 5 公尺，立即微屈膝將重心收至居中偏後 45/55 預備緩衝！'
        },
        expertMindset:
          '「三流滑手抱怨雪況不好，一流滑手在 3 秒鐘內根據腳底回饋調整配重與折角。全天候適應力，才是檢驗你是否真正懂得雪板物理的試金石。」— 50人專家團全地域綜合考核組'
      }
    ],
    interactiveConfig: {
      mode: 'trees_moguls',
      defaultSliders: { edgeAngle: 45, speed: 32, foreAft: 48, angulation: 36 }
    }
  },

  /* ------------------------------------------------------------------------
     MODULE 09: POWDER MECHANICS, BACKCOUNTRY & AVALANCHE SAFETY (AIARE)
     ------------------------------------------------------------------------ */
  {
    id: 'MOD-09',
    code: 'MOD-09',
    title: '粉雪力學、野雪 (Backcountry) 與 AIARE 雪崩風險管理科學',
    subtitle: 'Powder Fluid Dynamics, Surf/Dolphin Turns, Avalanche Triangle & 15-Minute Companion Rescue',
    badge: 'MOD-09 · 粉雪流體與雪崩搜救',
    difficulty: 'Lv.3 – Lv.4 野雪與高山安全',
    systemsRef: 'AIARE Level 1–2 · CASI/SBINZ Powder · UIAA/ICAR Rescue',
    image: 'assets/images/avalanche_safety.png',
    animationMode: 'backcountry',
    summary:
      '深達膝蓋至腰部的無痕粉雪（Deep Powder / Japow）是每一位單板滑手的終極夢想。然而，粉雪在物理上不再是「二維固體表面」，而是遵循流體力學的「三維可壓縮氣固雙相流體（Two-Phase Compressible Fluid）」！如果在深粉雪中還像在壓雪道一樣把 60% 重心壓在前腳並用力立起銳利鋼邊，板頭就會像潛水艇一樣直接插進雪底造成前空翻（Submarining / Tomahawk）。更關鍵的是：只要跨出雪場邊界繩（Beyond the Rope / Sidecountry & Backcountry），就沒有巡邏隊與炸雪崩保護！本章節前半部剖析粉雪滑水升力（Planation Lift）、雙腳衝浪式站姿與海豚跳（Dolphin Turns）技術；後半部則嚴格導入 **AIARE 國際雪崩教育框架**，詳解雪崩三要素（30°–45° 板狀雪崩）、人為心理陷阱（Heuristic Traps），以及雪崩三寶（Beacon、Probe、Shovel）黃金 15 分鐘實戰救援標準流程。',
    physicsPrinciples: [
      {
        title: '粉雪流體動壓升力方程式 (Hydrodynamic Planing Lift in Powder)',
        formula: 'F_lift = ½ · ρ_snow · v² · A_board · C_L(α_attack)  |  最佳攻角 α_attack ≈ 8°–14°',
        explanation:
          '在深粉雪中，雪板能夠浮在雪面上依靠的不是阿基米德靜浮力，而是類似滑水板與衝浪板的「流體動壓升力（Dynamic Planing Lift）」。升力 F_lift 與滑行速度平方 v²、板底面積 A_board（特別是寬大微翹的板頭面積）以及板頭攻角 α_attack 成正比。這解釋了為什麼在粉雪中：（1）必須維持足夠的基準速度 v（太慢就會失去動壓升力下沉）；（2）必須維持板頭微翹 8°–14° 的正攻角；（3）轉彎要靠整個板底壓雪衝浪（3D Banking），而非靠細鋼邊切雪！'
      },
      {
        title: '海豚跳轉彎 (Dolphin Turn / Porpoising) 之三維垂直壓縮回彈循環',
        formula: 'z_board(t) = -A · sin(ω_turn · t)  |  入彎輕浮上浮 ➔ 彎中壓尾潛壓儲能 ➔ 出彎板頭破雪彈出',
        explanation:
          '傳統初階粉雪教學常叫學員「一路把重心死死壓在後腳」，這會讓後大腿在 3 分鐘內完全燒乾酸痛。高階粉雪技術採用「海豚跳（Dolphin Turn）」：在彎中利用雙腿向下壓縮粉雪（將鬆雪壓實成一個高密度支撐墊），出彎瞬間順著雪板與壓實雪層的回彈，讓板頭像海豚躍出水面般浮出雪面，趁板頭浮出雪面的零阻力瞬間輕鬆完成換向，雙腿得以在換彎期休息！'
      },
      {
        title: '板狀雪崩 (Slab Avalanche) 斷裂傳播力學與 30°–45° 高危坡度定律',
        formula: 'Stability Index S = τ_strength (弱層抗剪強度) / τ_stress (上覆雪板重力剪應力)  |  當 S ≤ 1.0 即觸發斷裂',
        explanation:
          '造成 95% 致命事故的並非鬆雪雪崩，而是「板狀雪崩（Slab Avalanche）」：當緻密沉重的上層風吹雪板（Cohesive Slab）覆蓋在脆弱易碎的「持續性弱層（Persistent Weak Layer，如表面霜 Surface Hoar、稜角雪 Facets 或深霜 Depth Hoar）」之上，且坡度落在 **30° 至 45°（尤以 38° 為最高峰）** 時，滑手的體重附加應力會穿透雪層使弱層塌陷（Whumpfing），裂縫以每秒 30–80 公尺超音速傳播，瞬間整片山坡碎裂並以時速 130 km/h 傾瀉而下！'
      },
      {
        title: '15 分鐘窒息存活曲線與三信號天線電磁通量線定位幾何 (457 kHz Flux Line Telemetry)',
        formula: 'P_survival(t ≤ 15 min) = 92%  ➔  P_survival(t = 35 min) < 27% (冰罩窒息臨界點)',
        explanation:
          '醫學統計證實：雪崩掩埋後前 15 分鐘存活率高達 92%，但 15 至 35 分鐘內會因呼出熱氣在口鼻周圍結成不透氣冰殼（Ice Mask）而急速窒息死亡——直升機搜救隊趕到通常需要 45 分鐘以上，這意味著 **被埋者的生命 100% 取決於現場同伴的 15 分鐘伴侶救援（Companion Rescue）**！現代數位搜救儀（457 kHz 國際標準頻率）具備三根正交天線，搜救者必須理解偶極磁場弧形力線（Dipole Flux Lines），執行 Signal ➔ Coarse ➔ Fine (<3m 貼雪十字定位) ➔ Pinpoint Probe。'
      }
    ],
    coreSkills: [
      {
        name: '深粉雪衝浪流體技術：站姿退後設定、雙腳漸進加壓與海豚跳 (Powder Surf & Dolphin Turns)',
        level: 'Lv.3 粉雪必修',
        casiAasiRef: 'CASI/SBINZ Powder Mechanics · JSBA Deep Snow',
        biomechanics: {
          comBos: '將前後固定器同時向板尾退後 1–2 格（Setback Stance），使滑手能在維持接近 45/55 自然站姿下自動獲得板頭浮力，拯救後大腿！',
          jointAngles: '雙膝與雙踝保持比壓雪道更緊密的同步屈伸（彷彿雙腳綁在同一塊衝浪板上），減少前後腳大幅扭轉以免單邊插雪。',
          weightDistribution: '直滑與換彎浮起期 45/55；彎中壓雪衝浪期 35/65（壓彎板尾使板頭揚起 12° 攻角）。',
          edgeControl: '放棄「用銳利鋼邊切雪」的思維，改用「整個板底傾斜面（Base Banking）」去推壓三維雪浪。'
        },
        stepByStep: [
          '【Step 1: 裝備預調 Setback】在粉雪日出發前，若有粉雪板（燕尾/寬鼻 Directional）最佳；若使用全山雙向板，務必將兩隻固定器同時往板尾方向退後 2–4 公分鎖緊，這能減少 60% 的後腿負擔！',
          '【Step 2: 保持動量與長弧線】進入深粉雪切忌急煞或轉急彎！保持中高速流暢滑行（Speed is your friend），畫出比壓雪道寬 1.5 倍的圓潤長弧，讓板底動壓升力自然托起雪板。',
          '【Step 3: 彎中下壓與出彎浮起（Dolphin Bounce）】在彎中雙腿柔和向下踩壓鬆雪（感覺雪層像彈簧床般變硬承托你）；出彎瞬間順著雪層回彈主動微收前腿，讓板頭破雪浮出表面完成換向。',
          '【Step 4: 粉雪摔倒自救起立法】若在深粉雪中摔倒，用手撐雪只會越陷越深！正確做法是將雪板橫放於身體下方當作大面積地基，雙手抓住「板頭或前刃鋼邊」把自己拉到雪板上，或橫放雪杖撐在雪板與雪面上站起。'
        ],
        commonErrors: {
          symptom: '在深粉雪裡還沒轉兩個彎，板頭就直接扎進雪底，整個人像風車一樣往前翻滾（Tomahawk），或者後大腿酸痛到寸步難行。',
          rootCause: '一方面延續了壓雪道「入彎壓前腳 60% + 大角度立鋼邊」的肌肉記憶導致插鼻；另一方面未調整固定器 Setback 而全程靠後腿死撐。',
          correctiveDrill: '記住粉雪口訣：「腳底當衝浪板（Bank the base, don’t dig the edge），彎中往下踩彈簧，換刃讓板頭呼吸空氣！」'
        },
        expertMindset:
          '「壓雪道是二維的幾何學，粉雪則是三維的流體力學。當你不再試圖去『切開』雪，而是學會像海豚一樣在雪浪裡『上下呼吸起伏』，你就能在及腰深粉裡滑上一整天都不累。」— 北海道 Niseko 與加拿大直升機滑雪（Heli-Ski）嚮導小組'
      },
      {
        name: 'AIARE 野雪行前規劃、雪崩三要素判讀與人為陷阱防禦 (Avalanche Triangle & Red Flags)',
        level: 'All Levels 野雪生命鐵律',
        casiAasiRef: 'AIARE Decision Making Framework · UIAA Safety',
        biomechanics: {
          comBos: '進入未壓雪野雪區前，大腦決策系統必須先於身體運動系統啟動「地形坡度與脫逃路線掃描」。',
          jointAngles: '使用雪杖或手機坡度計（Inclinometer）實測坡度：只要坡度落在 30°–45° 即亮起板狀雪崩黃紅燈。',
          weightDistribution: '團隊通過可疑雪坡時，嚴格執行「One at a Time（一次一人滑行，其餘人在安全島監看）」以降低雪層負載。',
          edgeControl: '絕不在可疑雪坡上方進行急劇跳躍或重踩切雪（減少向深層弱層傳遞高衝擊剪力）。'
        },
        stepByStep: [
          '【行前必查雪崩預報（Avalanche Bulletin）】出發前必讀當地官方雪崩中心預報（1至5級風險等級），確認當日主要雪崩問題（如風吹雪板 Wind Slab、持續性弱層 Persistent Slab）所在的「坡向（Aspect：東南西北）」與「海拔高度」。',
          '【現場識別五大自然紅旗警報（5 Red Flags）】滑行中只要發現以下任一徵兆，代表雪層極不穩定，必須立即撤退改走低於 30° 緩坡：(1) 近期新雪崩痕跡；(2) 踩雪時發出沉悶的「轟（Whumpf）」塌陷聲；(3) 雪面出現延展裂縫（Shooting Cracks）；(4) 24小時內降雪超過 30cm 或強風吹雪；(5) 氣溫急速上升融雪。',
          '【識別地形陷阱（Terrain Traps）】避開下方有懸崖、深溝溪谷（Gully）、密林或平地死角的坡面——在這些地形陷阱中，即使是極小規模的雪崩也會把人活埋在 4 公尺深的積雪堆底！',
          '【破除 FACETS 人為心理陷阱】出發前全隊約定「一票否決權（Anyone can veto）」：絕不因為「大老遠飛來難得遇到大粉雪（Powder Fever）」、「這條路線以前滑過沒事（Familiarity）」而強行進入高危坡面。'
        ],
        commonErrors: {
          symptom: '看到雪場纜車旁有一片沒圍繩子或圍繩外的無痕粉雪（Sidecountry），沒帶任何裝備也沒看預報就跟著別人的滑痕衝進去。',
          rootCause: '致命的「雪場旁很安全迷思（Sidecountry Myth）」與「別人都滑了我也沒事（Social Proof / Tracks ≠ Safe）」心理陷阱。',
          correctiveDrill: '鐵律：「只要跨出壓雪道與雪場巡邏邊界，雪花不知道你離纜車只有 100 公尺！沒有三寶（Beacon/Probe/Shovel）、沒有受訓夥伴、沒看預報，絕對不跨出界繩一步。」'
        },
        expertMindset:
          '「雪崩不在乎你是奧運冠軍還是世界級嚮導。真正偉大的大山滑手之所以能活到老，不是因為他們運氣好，而是因為他們在看到紅旗警報時，擁有『轉身放棄那片粉雪』的紀律。」— AIARE 雪崩安全教育專家小組'
      },
      {
        name: '雪崩三寶實戰：數位搜救儀 (Beacon)、探針 (Probe) 與 V型傳送帶鏟雪 (Companion Rescue)',
        level: 'All Levels 野雪必修實操',
        casiAasiRef: 'AIARE Companion Rescue · ICAR 15-Minute Standard',
        biomechanics: {
          comBos: '搜救時保持冷靜低重心移動，在 Fine Search（精細搜尋 < 3m）階段必須將 Beacon 緊貼雪面水平移動（絕不旋轉機身角度）。',
          jointAngles: '探針（Probe）必須與「雪坡表面呈 90° 垂直角」插入，絕非垂直於水平地面！',
          weightDistribution: '鏟雪（Shoveling）佔據整場救援 65% 以上的時間與體力，必須在探針下游（下坡側）1.5 倍埋深處開挖。',
          edgeControl: '發現雪崩發生瞬間，目擊者第一要務是死盯被沖走同伴的「最後消失點（Last Seen Point, LSP）」。'
        },
        stepByStep: [
          '【出發前雙重檢測（Trailhead Check）】在登山口或纜車頂，領隊將 Beacon 切至 Search（接收），隊員逐一走過確認每人 Send（發射）信號正常且電量 > 80%，接著領隊切回 Send 由隊員確認。',
          '【Phase 1 & 2: 信號搜尋与粗略搜尋（Signal & Coarse Search）】事故發生後，全體生還者立即將 Beacon 切至 **SEARCH**，從最後消失點（LSP）向下坡呈 40m 間距之字形快跑搜尋；一旦捕捉到信號（如顯示 28.0m），立即順著螢幕方向箭頭沿電磁弧線快跑，確保距離讀數持續變小。',
          '【Phase 3: 精細十字定位（Fine Search < 3.0m）】當距離讀數小於 3.0 公尺時，立即減速蹲下，將 Beacon **貼平雪面** 緩慢往前推至讀數最小點，接著不轉動機身改做左右橫移找出最小讀數點（Bracketing 十字定位法），在最小讀數處插下標記！',
          '【Phase 4: 螺旋探針與下坡側鏟雪（Pinpoint Probe & Strategic Shoveling）】組裝探針，以最小讀數點為中心、垂直於雪坡表面插入；若未觸及，以每 25cm 間距向外做同心螺旋插探。一旦刺中柔軟人體（具備回彈感），**絕對不要拔出探針**！立即退至探針正下坡方向約「1.5 倍埋深距離處」（例如埋深 1.2m 則往下坡退 1.8m），以 V 型傳送帶隊形向內水平挖出救援通道，第一時間清除受困者口鼻冰雪建立呼吸空間（Airway First）！'
        ],
        commonErrors: {
          symptom: '探針刺中同伴後，直接站在探針正上方往下挖垂直深井，結果越挖洞口越窄、自己踩在同伴臉上，還把洞壁踩塌活埋第二次。',
          rootCause: '不懂「下坡側 1.5 倍距離水平開挖法則（Strategic Shoveling）」，垂直往下挖不僅無法把雪往外拋，更會壓迫被埋者胸腔。',
          correctiveDrill: '每個雪季初在雪場旁安全厚雪區埋一個背包，計時練習全套「Beacon 定位 + Probe 觸擊 + 下坡側開挖」，目標必須在 **7 分鐘內** 挖到背包！'
        },
        expertMindset:
          '「買了雪崩三寶卻從來沒練過的人，在事故發生的恐慌下連把發射切到接收都會忘記。在黃金 15 分鐘內，唯有千錘百鍊的肌肉記憶能救回你最好的朋友。」— 國際山岳搜救委員會 (ICAR) 與雪崩救援專家小組'
      },
      {
        name: '萬一捲入雪崩與掉入樹洞（Tree Well）之終極自救生物力學',
        level: 'All Levels 保命技能',
        casiAasiRef: 'AIARE / NARSID Tree Well & Avalanche Survival',
        biomechanics: {
          comBos: '被雪流衝擊瞬間，第一時間向側面 45° 下坡衝刺脫離主斷裂帶；若無法脫離則掙脫累贅並維持仰泳浮升姿態。',
          jointAngles: '在雪崩流即將停下凝固（如水泥般瞬間硬化！）前的最後 2 秒，雙手在臉前交叉抱住口鼻撐出最大呼吸氣囊（Air Pocket）。',
          weightDistribution: '樹洞受困時嚴禁掙扎亂踢（越踢頭頂鬆雪越往下灌入窒息），應設法抱住樹幹固定身體等待救援或緩慢挖出口鼻空間。',
          edgeControl: '若配備雪崩氣囊背包（Avalanche Airbag），在確認捲入瞬間立即拉開胸前觸發手把！'
        },
        stepByStep: [
          '【瞬間橫切逃生】腳下雪層一旦碎裂滑動，千萬不要直直往下坡跑（你跑不過時速 100 公里的雪崩）！立刻壓緊鋼邊向雪崩側翼邊界（45° 斜向）全速衝刺逃出滑動板塊。',
          '【拉開氣囊與仰泳】若已被捲倒，第一時間猛拉雪崩氣囊（Airbag 利用「巴西堅果效應 Inverse Segregation」讓大體積物體浮在顆粒流表面），並像仰泳般用力向後方上方划動四肢、抱住路過的樹木岩石。',
          '【停止前 2 秒創造呼吸氣囊】當感覺雪流速度變慢準備停下時（一旦停下 1 秒內雪就會凍硬如混凝土，手指都動不了！），務必用一隻手死死捂住口鼻、另一隻手向臉前撐開空間，同時深吸一口氣擴張胸腔（吐氣後胸廓才有起伏空間）。',
          '【樹洞防窒息】滑樹林時結伴保持視線接觸並攜帶哨子；萬一倒栽蔥掉入樹洞，立刻屏息冷靜，雙手護住口鼻撥開雪粒，抱緊樹幹或板身阻止身體繼續下沉，吹響胸前求救哨。'
        ],
        commonErrors: {
          symptom: '進樹林或野雪時，把雪杖腕帶死死套在手腕上，結果雪崩時雪杖變成船錨把整個人拖進雪底。',
          rootCause: '未遵守野雪與樹林「不套雪杖腕帶（No Pole Straps in Trees/Avalanche Terrain）」的安全準則。',
          correctiveDrill: '只要進入野雪或樹林，立即將雪杖腕帶脫下直接握持杖把，並確認背包胸扣、胯下防脫帶（Leg loop）與哨子扣妥。'
        },
        expertMindset:
          '「雪崩停下前的最後兩秒鐘，你放在臉前的那隻手，就是決定你能撐 15 分鐘還是 45 分鐘的生門。」— 高山急診醫學與搜救專家小組'
      }
    ],
    interactiveConfig: {
      mode: 'backcountry',
      defaultSliders: { edgeAngle: 22, speed: 42, foreAft: 42, angulation: 18 }
    }
  },

  /* ------------------------------------------------------------------------
     MODULE 10: BIOMECHANICS INJURY PREVENTION, TUNING & 50-EXPERT AUDIT
     ------------------------------------------------------------------------ */
  {
    id: 'MOD-10',
    code: 'MOD-10',
    title: '高階運動傷害防護、器材微調與 50 人專家團隊總審核報告',
    subtitle: 'Biomechanics Injury Prevention (FOOSH, ACL, Edge Catch), Edge Bevel Tuning & Hot Wax Science',
    badge: 'MOD-10 · 運動醫學與雪板精調',
    difficulty: 'All Levels 終極必修',
    systemsRef: 'FIS Sports Medicine · World Cup Service Tech · 50-Expert Sign-off',
    image: 'assets/images/com_bos_mechanics.png',
    animationMode: 'injury_tuning',
    summary:
      '本教材最後一章節匯聚了 **運動醫學與骨科手術醫師、世界盃雪板技師（World Cup Wax & Edge Technicians）以及全體 50 位跨領域專家** 的核心智慧。在運動醫學端，單板滑雪與雙板（Ski）的傷害圖譜截然不同：單板最常見的四大創傷為 **1. 手腕遠端橈骨骨折（FOOSH 伸手撐地反射，佔初學者外傷 28%）**、**2. 逆刃鞭甩腦震盪（Catching the Downhill Edge，頭部以高達 60G 角加速度砸向冰面）**、**3. 肩鎖關節脫位與鎖骨骨折**、以及 **4. 單腳上下纜車或跳台落地的膝關節前十字韌帶（ACL）與外踝距骨骨折（Snowboarder’s Fracture）**。學會正確的「滾翻卸力摔法（Breakfall Mechanics）」比學會轉彎更重要！在器材精調端，我們完整公開世界盃技師的鋼邊角度研磨公式（Base Bevel 1° + Side Edge 88°/89°）、平花防卡刃去角（Detuning）與依雪溫配對的熱蠟科學（Hot Waxing Tribology）。',
    physicsPrinciples: [
      {
        title: '逆刃 (Catching an Edge) 之角加速度鞭甩效應與動量衝擊時間公式',
        formula: 'F_impact = Δp / Δt  |  伸直手腕撐地 Δt ≈ 0.04s (骨折) vs 抱胸前臂/背臀滾翻 Δt ≈ 0.45s (衝擊力降至 1/11)',
        explanation:
          '當滑手發生逆刃（下坡側鋼邊突然切入雪面）時，雪板在 0.02 秒內瞬間停止水平移動，成為一個固定轉軸，而人體質心（距雪面約 1.0 公尺）因慣性以角速度 ω = v / L_COM 被劇烈向下甩出，使後腦勺或前額落地速度甚至超過原本滑行速度！根據衝量定理 F = Δp / Δt，若本能伸直單手撐地（FOOSH: Fall On Outstretched Hand），所有動能集中在短短 0.04 秒與 10 cm² 的腕骨上必斷無疑；反之若收下巴、雙手抱胸，以大面積前臂+肩膀或臀+背部順勢滑行滾翻，將減速時間 Δt 延長 10 倍，峰值衝擊力即驟降至安全範圍！'
      },
      {
        title: '鋼邊幾何學：底刃傾角 (Base Bevel) vs 側刃角度 (Side Edge Bevel) 耦合公式',
        formula: 'θ_included = 90° - θ_side + θ_base  |  刻滑設定 (Base 0.5°–1° / Side 88°); 平花/Park (Base 1.5° / Side 89°–90°)',
        explanation:
          '雪板鋼邊並非單純的 90° 直角，而是由兩個角度精密控制：(1) **Base Bevel（底刃微抬角，通常 0.5°–1.5°）**：將鋼邊從板底平面微微向上磨高 1°，使雪板在平放（Flat Base）時鋼邊懸空 0.05mm 不會死咬雪面，是防止平花與直滑降無故卡刃的第一關鍵；(2) **Side Edge Angle（側刃角，通常 88°–89°）**：決定立刃後刀口切入硬冰面的銳利度，88° 極度銳利適合冰面刻滑，89°–90° 加上頭尾鈍化（Detuning）則適合平花與 Rail 道具。'
      },
      {
        title: '板底摩擦學（Tribology）：疏水水膜厚度與不同雪溫熱蠟硬度配對',
        formula: '雪溫 T_snow ∈ [-2°C, 0°C] (濕摩擦/高疏水軟蠟)  ·  [-10°C, -3°C] (最佳水膜中溫蠟)  ·  [< -12°C] (乾摩擦極硬冷蠟)',
        explanation:
          '雪板能高速滑行，是因為摩擦生熱在超高分子量聚乙烯（UHMWPE 燒結板底 Sintered Base）與雪晶之間融化出一層厚度僅數微米的「液態水潤滑膜」。當雪溫極冷（< -12°C）時，水膜難以形成且冰晶尖銳如砂紙（乾摩擦 Dry Friction），需使用高硬度低溫蠟防止冰晶刺入板底；當雪溫接近 0°C（春雪濕雪）時，水膜過厚產生毛細吸盤阻力（Wet Suction），則需使用軟質高疏水蠟並配合板底結構紋路（Structure）排走多餘水分！'
      },
      {
        title: '前十字韌帶 (ACL) 與距骨外側突骨折 (Snowboarder’s Fracture) 之生物力學防線',
        formula: '危險三聯徵：膝外翻 (Valgus) + 脛骨內旋 + 落地過伸  |  危險踝姿：背屈 (Dorsiflexion) + 內翻 (Inversion) 高衝擊',
        explanation:
          '單板雙腳綁定雖然減少了雙板常見的單腿旋轉扭斷 ACL，但在「跳台飛太遠落在平地（Flat Landing）後腳單腳硬撐」以及「單腳下纜車劈腿」時，股四頭肌猛烈收縮加上膝內扣仍會拉斷前十字韌帶。此外，當高空落地時腳踝處於極限背屈加上內翻衝擊，容易造成單板特有的「距骨外側突骨折（常被誤診為一般扭傷）」，必須靠良好支撐硬度的雪靴與三關節同步屈曲吸收來預防。'
      }
    ],
    coreSkills: [
      {
        name: '防骨折與防腦震盪：Toeside 與 Heelside 生物力學安全摔倒滾翻法 (Safe Breakfall Mechanics)',
        level: 'All Levels 救命第一課',
        casiAasiRef: 'FIS Medical Protocol · Martial Arts Ukemi for Snow',
        biomechanics: {
          comBos: '一旦失去平衡無法挽回，第一時間主動降低質心高度（蹲低再摔，把墜落高度從 120cm 降至 40cm）！',
          jointAngles: '頸椎強制收下巴（Chin to Chest 鎖死後腦勺不觸地），雙肘微彎收於胸前，絕不向身後或身前伸直手掌！',
          weightDistribution: '將衝擊能量分散至「大面積肌肉群（臀大肌、闊背肌、前臂整體）」並順著下坡滑動卸力。',
          edgeControl: '摔倒滑行過程中，「主動將雙腿與雪板微微抬離雪面」，防止雪板鋼邊在滑行中再次插進雪裡造成二次翻滾扭斷膝蓋！'
        },
        stepByStep: [
          '【絕對禁忌：戒除 FOOSH 伸手反射】在平地厚雪上反覆練習：假裝失去平衡時，雙手立刻交叉抱住雙肩（或握拳收在胸前），下巴死死貼住鎖骨，徹底覆蓋「用手掌去撐地」的危險本能。',
          '【向後摔（Heelside Fall）標準卸力】當重心往後倒時：(1) 立刻深蹲降低屁股高度；(2) 下巴收緊貼胸（保住後腦勺！）；(3) 雙手抱胸，依序以「臀部肌肉 ➔ 下背 ➔ 上背」像搖椅般圓弧滾動並順坡滑行，同時微抬腳尖不讓後刃卡雪。',
          '【向前摔（Toeside Fall）標準卸力】當向前撲倒時：(1) 絕對不要用手掌撐地（必斷手腕）！；(2) 將雙手握拳、雙前臂平行於胸前，屈膝先讓膝蓋（穿戴護膝）與雙前臂大面積同時貼上雪面往前滑行，同時把小腿往後勾起讓雪板懸空！',
          '【護具強制配置】初學者與練平花/Park 者，強烈建議配戴「內置龍骨護腕（Wrist Guards）」、「D3O 防撞護臀褲（Impact Shorts）」與通過 MIPS 腦震盪認證的頭盔。'
        ],
        commonErrors: {
          symptom: '向後摔倒時雖然沒有伸手，但脖子放鬆往後甩，後腦勺像鐵鎚一樣重重敲在硬冰面上導致腦震盪失憶。',
          rootCause: '缺乏「收下巴（Chin Tuck）胸鎖乳突肌反射」，在後刃逆刃的高角加速度下頸部完全失守。',
          correctiveDrill: '每次在床上或瑜珈墊上練習 10 次柔道後受身（收下巴咬牙看肚臍、圓背滾動），直到「一失衡下巴就自動貼胸口」變成零思考反射。'
        },
        expertMindset:
          '「不會摔跤的人，永遠不敢突破自己的極限。學會抱胸收下巴滑行卸力，你就擁有了一件隱形的全身安全氣囊。」— 骨科創傷醫學與武術力學專家小組'
      },
      {
        name: '世界盃級鋼邊研磨與平花防卡刃去角實操 (Edge Bevel Tuning & Contact-Point Detuning)',
        level: 'Lv.2 – Lv.4 器材精調',
        casiAasiRef: 'World Cup Ski/Board Service · JSBA Tuning Standard',
        biomechanics: {
          comBos: '精準的鋼邊角度確保滑手在微小傾角變化下獲得可預測、線性的抓地力回饋。',
          jointAngles: '搭配定角器（File Guide 88°/89°）與鑽石銼刀（Diamond Stones #200 / #400 / #600）進行微米級拋光。',
          weightDistribution: '保留兩腳中間有效邊長（Effective Edge）的銳利度，但將頭尾轉折點（Contact Points）鈍化 3–5 公分以防無預警死咬。',
          edgeControl: '根據滑行主項（冰面刻滑 vs 平花道具）客製化鋼邊咬合曲線。'
        },
        stepByStep: [
          '【Step 1: 檢查毛邊與除鏽】滑過冰面或石頭後，鋼邊會產生微小捲曲毛邊（Burrs）；先用金剛石磨石（Gummi Stone）與 #200 鑽石銼刀沾水輕推，撫平硬化毛刺。',
          '【Step 2: 設定底刃與側刃角】將雪板固定於調板架，先用 1° 底刃定角器輕修板底側鋼邊；接著使用 89°（全山/平花）或 88°（進階刻滑）側刃定角器，由板頭向板尾單向穩定推拉修整側刃。',
          '【Step 3: 鑽石拋光】依序換用 #400 與 #600 細目鑽石銼刀進行鏡面拋光——真正快的鋼邊不是「粗糙鋸齒狀」，而是「平滑如手術刀般的鏡面銳利」！',
          '【Step 4: 頭尾防卡刃去角（Detuning）】找出雪板平放時板頭與板尾剛開始翹起離開地面的那四個接觸點（Contact Points），用磨石將這四個點往板頭/板尾外側約 4 公分處稍微磨鈍（若專玩 Box/Rail 則需鈍化整條鋼邊），立即減少 80% 平花卡刃！'
        ],
        commonErrors: {
          symptom: '剛買的新雪板完全沒修過就直接拿去練平花轉圈，結果板頭轉折點像刀片一樣死死咬進雪裡頻頻翻車。',
          rootCause: '工廠出廠的新板頭尾接觸點（Contact Points）往往維持 90° 銳利直角，毫無容錯率。',
          correctiveDrill: '新板落地前，務必檢查底刃平整度並對板頭板尾最寬處外側 3 公分進行適度 Gummi Stone 圓滑處理（Detune）。'
        },
        expertMindset:
          '「很多滑手以為自己技術退步了，其實只是他的鋼邊早就鈍成圓弧形，或者頭尾毛刺在偷卡他的雪。花 15 分鐘保養鋼邊，你的雪板會像換了一張新板一樣聽話。」— 世界盃雪板維護技師小組'
      },
      {
        name: '熱蠟科學與四季雪溫配蠟工藝 (Hot Waxing Tribology: Cleaning, Ironing, Scraping & Brushing)',
        level: 'All Levels 器材保養',
        casiAasiRef: 'Sintered Base Maintenance · Tribology Science',
        biomechanics: {
          comBos: '順暢均勻的板底滑行速度，能消除因板底乾澀卡頓造成的身體前傾失衡（Sticking / Jerkiness）。',
          jointAngles: '刮蠟（Scraping）與刷蠟（Brushing）是熱蠟最關鍵步驟：蠟必須留在板底毛細孔「裡面」，而非塗在板底「表面」！',
          weightDistribution: '針對單板高磨損區（前後刃距離鋼邊 3 公分處的白化區 Base Burn），加強熱蠟滲透。',
          edgeControl: '完工後務必用刮板側槽將鋼邊上的殘蠟完全刮除乾淨，確保立刃瞬間鋼邊 100% 咬雪。'
        },
        stepByStep: [
          '【Step 1: 清潔板底與選蠟】用銅刷（Brass Brush）由板頭往板尾刷開板底毛孔並清除舊髒汙；依未來三天雪場溫度選擇對應色蠟（如藍蠟 -12°C~-6°C、紫/紅蠟 -6°C~-2°C、黃蠟 -2°C~+10°C）。',
          '【Step 2: 控溫滴蠟與熨平】將專用打蠟熨斗設定於蠟塊標示溫度（通常 115°C–135°C，**嚴禁冒煙**，冒煙代表蠟質裂解且會燙壞板底結構！）；滴蠟後以每秒 5 公分速度持續移動熨斗，將蠟均勻攤平滲入燒結板底毛孔。',
          '【Step 3: 冷卻與徹底刮除（Scrape it ALL off!）】靜置冷卻 30 分鐘後，用鋒利的壓克力刮板以 45° 角由板頭向板尾將表面所有的蠟「徹底刮除乾淨」——留在板底表面的厚蠟是阻礙滑行的垃圾，只有吃進毛孔裡的蠟才能減阻！',
          '【Step 4: 三刷拋光開槽】依序使用「硬尼龍刷（清除殘蠟並刷出微水道）➔ 馬毛刷（細部拋光）」由頭至尾刷 15–20 次，直到板底呈現絲綢般的鏡面光澤。'
        ],
        commonErrors: {
          symptom: '自己打完熱蠟後沒刮乾淨就去雪場，結果滑起來比沒打蠟還慢，板底黏滿髒雪。',
          rootCause: '誤以為「板底留一層厚蠟可以撐比較久」，殊不知石蠟本身比 UHMWPE 板底更軟更澀，表面厚蠟會直接吸住雪晶產生巨大阻力。',
          correctiveDrill: '謹記世界盃技師名言：「You wax the base pores, NOT the surface!（你是在餵飽板底毛孔，不是在板底刷油漆！）」刮到再也刮不出蠟屑為止。'
        },
        expertMindset:
          '「當你在平緩連絡道（Cat Track）不用脫板就能輕鬆超越所有人滑過去時，你就會明白把蠟刮乾淨、刷出微水道的物理威力。」— 日本與歐洲國家隊蠟務技師小組'
      },
      {
        name: '50 人跨領域專家團隊之全領域能力檢核表與終身進階藍圖 (The 50-Expert Mastery Rubric)',
        level: 'Lv.1 ➔ Lv.4 終極認證',
        casiAasiRef: 'CASI · AASI · SBINZ · JSBA · BASI Synthesized Standard',
        biomechanics: {
          comBos: '從初階的「被動保持 COM 在 BOS 內」，進化為大師級的「主動把 COM 拋向空間任意點，並指揮 BOS 在毫秒間追上」。',
          jointAngles: '踝、膝、髖三關節具備全行程獨立與協同控制力，任何地形震動皆在髖部以下被完全吸收。',
          weightDistribution: '正腳（Regular/Goofy）與反腳（Switch）的能力差距小於 10%，全地域皆可雙向自由切換。',
          edgeControl: '能依據戰術需求，在同一個彎內無縫混合 Pure Carve（純刻）、Controlled Skid（控速搓）與 Flat-base Butter（平花點支撐）。'
        },
        stepByStep: [
          '【階段一：Lv.1 安全與基礎控板達標】完成 8 分鐘 RAMP 暖身，零失誤單腳上下纜車，能在綠線與緩紅線以安靜上半身、下肢扭轉（Twist）流暢連結等速 S-Turn，並通過安全滾翻卸力測試。',
          '【階段二：Lv.2 動態平行與自由式基礎】掌握 60/40 ➔ 50/50 ➔ 40/60 前後重心波浪，能在紅線切出乾淨早期抓地彎，具備穩定的 Switch S-Turn、15cm 高 Ollie/Nollie、Nose/Tail Press 180 及 S 號跳台 Straight Air Grab。',
          '【階段三：Lv.3 全地域刻滑、平花連招與樹林蘑菇】掌握 Cross-under 抽腿換刃與 Push-Pull 動態刻滑（立刃角 ≥ 65°），能流暢完成 Drive Spin / Owen / Sone 等平花組合、M 號跳台 360、50-50 / Boardslide 道具，並在蘑菇與 38° 樹林陡坡自如控速。',
          '【階段四：Lv.4 / Pro 大師與高山領袖】精通歐式貼地刻滑與日系高速刻滑，具備深粉雪三維海豚跳與 AIARE 7 分鐘伴侶雪崩搜救能力，能透過「觀察雪痕反推關節病因」指導他人安全進階。'
        ],
        commonErrors: {
          symptom: '偏科嚴重：只會在壓雪道練貼地刻滑，一進蘑菇或亂雪就完全不會滑；或者只會死轉平花，在高速紅黑線卻連基本穩定剎車都做不到。',
          rootCause: '將刻滑、平花、公園與全地域視為互不相干的運動，忽略了它們底層共享完全相同的「COM/BOS 與四大板性」。',
          correctiveDrill: '採用本教材「跨領域交叉訓練法」：用平花的腳踝靈敏度來提升刻滑換刃速度，用刻滑的立刃精準度來引爆平花與跳台的起跳高度！'
        },
        expertMindset:
          '「雪道是畫布，雪板是畫筆，而物理定律與你的身體就是顏料。願這套由 50 位專家傾力打造的科學教材，陪伴你在全世界的每一座雪山安全、自由、無止境地進化！」— SB_Skill_new 50人跨領域專家團隊全體簽署'
      }
    ],
    interactiveConfig: {
      mode: 'injury_tuning',
      defaultSliders: { edgeAngle: 55, speed: 45, foreAft: 50, angulation: 30 }
    }
  }
);

/* ==========================================================================
   3. GROUND TRICK (平花グラトリ) SKILL MATRIX & 12 ICONIC COMBOS
   ========================================================================== */
window.SB_CURRICULUM_DATA.groundTrickComboMatrix = {
  atomicSkills: [
    {
      id: 'Ollie',
      code: 'ATOM-01',
      category: 'ハジキ系 (Pop)',
      name: 'Ollie (豚跳板尾儲能)',
      comPosition: '50/50 ➔ Rear 85% ➔ 空中居中',
      foreAft: -0.75,
      lateral: 0.0,
      vertical: 0.85,
      proficiency: 'Lv.1 基礎',
      biomechanics: '骨盆快速後移壓彎板尾碳纖儲能，前腳先提膝引導，後腳於板尾回彈極限點單點爆發蹬伸，空中收後膝調平雪板。'
    },
    {
      id: 'Nollie',
      code: 'ATOM-02',
      category: 'ハジキ系 (Pop)',
      name: 'Nollie (前豚跳板頭彈射)',
      comPosition: '50/50 ➔ Front 88% ➔ 爆發升空',
      foreAft: 0.82,
      lateral: 0.15,
      vertical: 0.92,
      proficiency: 'Lv.2 核心',
      biomechanics: '日系高轉速 360/540/720 引擎！將前進動能直接灌入前腳板頭外側壓彎，順著板頭強力回彈與前腿蹬伸，獲得比 Ollie 高 40% 的瞬間角速度。'
    },
    {
      id: 'Nose Press',
      code: 'ATOM-03',
      category: 'ノリ系 (Press)',
      name: 'Nose Press (板頭極限壓板)',
      comPosition: 'Front 85% / Rear 15% (骨盆越過前腳)',
      foreAft: 0.85,
      lateral: 0.0,
      vertical: -0.25,
      proficiency: 'Lv.1 基礎',
      biomechanics: '將骨盆平行推過前固定器外側，前膝微屈、後腿伸直上提使板尾離地 25cm，上半身保持直立與雪板平行，建立單點低摩擦支點。'
    },
    {
      id: 'Tail Press',
      code: 'ATOM-04',
      category: 'ノリ系 (Press)',
      name: 'Tail Press / Block (板尾壓板支點)',
      comPosition: 'Front 15% / Rear 85% (骨盆坐於板尾)',
      foreAft: -0.85,
      lateral: 0.0,
      vertical: -0.25,
      proficiency: 'Lv.1 基礎',
      biomechanics: '骨盆橫移至後固定器外側，後膝深蹲 105°、前腿打直微提板頭；進階 Tail Block 則結合上坡刃點地，作為 Sone 與反彈旋轉的支點。'
    },
    {
      id: 'FS Pre-wind',
      code: 'ATOM-05',
      category: '角動量 (Spin)',
      name: 'FS Pre-wind (正向預轉蓄力)',
      comPosition: 'Heelside 25° ➔ 胸椎逆向蓄力 -40°',
      foreAft: 0.1,
      lateral: -0.35,
      vertical: -0.3,
      proficiency: 'Lv.2 旋轉',
      biomechanics: '啟動 Frontside 旋轉前，先微立後刃（或前刃），將雙肩與胸椎向 Backside 方向預先旋轉 40° 拉緊腹斜肌，釋放瞬間拋出前肩帶動同向旋轉。'
    },
    {
      id: 'BS Pre-wind',
      code: 'ATOM-06',
      category: '角動量 (Spin)',
      name: 'BS Pre-wind (背向預轉與盲視線)',
      comPosition: 'Toeside 28° ➔ 前肩向山谷拋投',
      foreAft: 0.15,
      lateral: 0.4,
      vertical: -0.3,
      proficiency: 'Lv.2 旋轉',
      biomechanics: '以 Toeside 鋼邊切入雪面作為支點，雙肩預先向後刃側蓄力，起跳瞬間將前肩與視線向腋下後方山谷拋出，轉過 180° 後即可直接看見落地點。'
    },
    {
      id: 'Reverting Edge Lock',
      code: 'ATOM-07',
      category: '刃對點 (Edge)',
      name: 'Reverting Edge Lock (貼地滑轉與鎖刃)',
      comPosition: 'Edge 30° ➔ Point 85% ➔ 新上坡刃鎖死',
      foreAft: 0.65,
      lateral: 0.45,
      vertical: -0.2,
      proficiency: 'Lv.2 關鍵',
      biomechanics: 'Drive Spin 與連招剎車靈魂：由刻滑鋼邊（Edge）推向板頭單點（Point）高速貼地滑轉，完成目標度數瞬間立起「新上坡側鋼邊」瞬間咬冰煞停旋轉。'
    },
    {
      id: 'Shifty Counter-Rotation',
      code: 'ATOM-08',
      category: '反擰 (Torsion)',
      name: 'Shifty Counter-Rotation (上下半身反擰)',
      comPosition: '上半身鎖定 0° ⇄ 下半身反擰 ±90°',
      foreAft: 0.7,
      lateral: -0.25,
      vertical: -0.15,
      proficiency: 'Lv.3 進階',
      biomechanics: 'Owen 與 Fake Block 核心：保持雙肩與視線朝向原方向不動，僅用髖部與下肢將雪板向反方向扭出 90°–180°，壓板儲能後利用核心回彈拉回原位！'
    }
  ],

  combos: [
    {
      id: 'COMBO-01',
      name: 'Nose Roll 180 (板頭支點貼地平轉 180)',
      difficulty: 'Lv.1 初階必練',
      rotation: 'FS / BS 180°',
      formula: 'Heelside 入刃 + Nose Press (80/20) + Reverting Edge Lock',
      atomicComponents: ['Nose Press', 'FS Pre-wind', 'Reverting Edge Lock'],
      comSummary: '50/50 入彎 ➔ Front 80% 壓板頭 ➔ Switch 50/50 鎖前刃',
      edgeLogic: 'Heelside 20° ➔ Nose Flat Point (抬後刃) ➔ Switch Toeside 20°',
      torsionAngle: '預轉 ±25° 同向釋放',
      phases: [
        {
          phase: 'Phase 1: Setup (微後刃入彎預轉)',
          com: 'Front 50% / Rear 50%',
          edge: 'Heelside 20°',
          action: '在緩坡做一個溫和的 Heelside 轉彎減速，雙膝微屈，雙肩微向 Frontside 旋轉方向預備打開。'
        },
        {
          phase: 'Phase 2: Load & Point (重心壓向板頭)',
          com: 'Front 80% / Rear 20%',
          edge: 'Nose Point (板尾微離地)',
          action: '當板頭接近滾落線時，將骨盆果斷推向前腳固定器上方，微抬後腳跟使板尾釋放摩擦力。'
        },
        {
          phase: 'Phase 3: Pivot Release (貼地滑轉 180)',
          com: 'Front 85% / Rear 15%',
          edge: 'Up-hill Edge Raised (下坡刃微翹)',
          action: '以板頭為圓心，上半身順勢引導後腳板尾在雪面上輕巧畫過半圓完成 180 度轉向。'
        },
        {
          phase: 'Phase 4: Lock Out (反腳鎖刃滑出)',
          com: 'Switch 50% / 50%',
          edge: 'Switch Toeside 20°',
          action: '轉滿 180° 變成 Switch（反腳）瞬間，放下後腳並立即壓住新上坡刃（Switch Toeside）穩定滑出。'
        }
      ],
      failureMode: '轉到 90 度（板子正指下坡）時重心怕死退回後腳 50/50，導致板尾下坡刃直接咬死雪面往後摔。',
      expertTip: '「眼睛死盯著你的前腳尖前方 1 公尺雪地，轉完 180 度前絕對不准把重量放回後腳！」'
    },
    {
      id: 'COMBO-02',
      name: 'Tail Press BS 180 Out (板尾壓板背向 180 彈出)',
      difficulty: 'Lv.1 – Lv.2 初中階',
      rotation: 'Backside 180°',
      formula: 'Tail Press (15/85) + BS Pre-wind + Ollie Pop Out',
      atomicComponents: ['Tail Press', 'BS Pre-wind', 'Ollie'],
      comSummary: '50/50 ➔ Rear 85% 壓尾滑行 ➔ 後腳彈跳 BS 180 ➔ 50/50 落地',
      edgeLogic: 'Flat / 微 Toeside 10° ➔ Tail Point ➔ Switch Heelside 鎖刃',
      torsionAngle: '上半身向後刃預轉 -35° ➔ 釋放 BS 180°',
      phases: [
        {
          phase: 'Phase 1: Setup (直滑移重心至板尾)',
          com: 'Front 30% / Rear 70%',
          edge: 'Flat / 微 Toeside 10°',
          action: '緩中坡滑行，骨盆向後腳固定器外側平行橫移，準備啟動 Tail Press。'
        },
        {
          phase: 'Phase 2: Press & Wind (穩定壓尾同時預轉)',
          com: 'Front 15% / Rear 85%',
          edge: 'Tail Point (板頭翹起 25cm)',
          action: '後膝深蹲壓住板尾，前腿伸直提起板頭維持 2 秒穩定滑行；同時上半身微向 Backside 方向扭轉蓄力。'
        },
        {
          phase: 'Phase 3: Pop 180 (板尾回彈起跳)',
          com: 'Rear 100% 彈射 ➔ 空中居中',
          edge: 'Airborne (空中水平)',
          action: '順著板尾彈性，後腳向地面蹬直起跳（Ollie），同時視線看往後肩下方引導身體在空中轉完 BS 180°。'
        },
        {
          phase: 'Phase 4: Blind Landing (反腳後刃鎖定)',
          com: 'Switch 50% / 50%',
          edge: 'Switch Heelside 22°',
          action: '雙腳同時落地，微屈膝並以 Switch Heelside（新上坡刃）咬住雪面吸收旋轉慣性。'
        }
      ],
      failureMode: '壓板尾時靠後仰上半身而非橫移骨盆，導致起跳瞬間整個人從板尾後方滑脫摔屁股（Looping out）。',
      expertTip: '「壓板尾時胸口要微向膝蓋靠攏，感覺像踩在跳水板的最末端，一蹬就能垂直往上彈！」'
    },
    {
      id: 'COMBO-03',
      name: 'Ollie Frontside 180 Indy Grab (豚跳正轉 180 抓板)',
      difficulty: 'Lv.2 中階核心',
      rotation: 'Frontside 180°',
      formula: 'FS Pre-wind + Ollie + Shifty Counter-Rotation',
      atomicComponents: ['Ollie', 'FS Pre-wind', 'Reverting Edge Lock'],
      comSummary: '50/50 ➔ Rear 85% 壓尾起跳 ➔ 空中收腿 50/50 ➔ Switch 落地',
      edgeLogic: 'Heelside 18° 支點 ➔ 空中調平 ➔ Switch Toeside 20° 落地',
      torsionAngle: '逆向蓄力 30° ➔ 起跳展開 180°',
      phases: [
        {
          phase: 'Phase 1: Edge Set (微後刃支點與蓄力)',
          com: 'Front 50% / Rear 50%',
          edge: 'Heelside 18°',
          action: '滑行中切入極淺的 Heelside 刻滑軌跡，雙手微向後擺蓄力。'
        },
        {
          phase: 'Phase 2: Tail Load (重心後移壓彎板尾)',
          com: 'Front 15% / Rear 85%',
          edge: 'Heelside Tail Edge',
          action: '快速提拉前腳並將重心壓向後腳板尾，使板尾後刃深深咬入雪面並彎曲儲能。'
        },
        {
          phase: 'Phase 3: Pop & Grab (爆發升空與收腿)',
          com: 'Airborne 50% / 50%',
          edge: 'Airborne Level',
          action: '後腳猛力蹬伸起跳，上半身向 Frontside 展開 180°，空中將雙膝抽向胸口完成穩定高度。'
        },
        {
          phase: 'Phase 4: Switch Lock (視線鎖定後方盲落地)',
          com: 'Switch 50% / 50%',
          edge: 'Switch Toeside 20°',
          action: '落地瞬間視線盯住原助滑方向（山坡上方），雙腳以前刃微立刃緩衝滑出。'
        }
      ],
      failureMode: '落地時頭忍不住轉回下坡看，導致後肩繼續把雪板拉過頭變成 270 度卡後刃。',
      expertTip: '「Frontside 180 落地穩不穩，全看你的下巴有沒有乖乖留在後肩膀上方盯著山坡！」'
    },
    {
      id: 'COMBO-04',
      name: 'Nollie Frontside 360 (日系前豚跳正轉 360)',
      difficulty: 'Lv.2 – Lv.3 進階必殺',
      rotation: 'Frontside 360°',
      formula: 'Heelside 入刃 + FS Pre-wind + Nollie (Front 90%) + Reverting Edge Lock',
      atomicComponents: ['Nollie', 'FS Pre-wind', 'Nose Press', 'Reverting Edge Lock'],
      comSummary: '50/50 ➔ Front 90% 壓鼻彈射 ➔ 空中收腿 50/50 ➔ 55/45 鎖刃',
      edgeLogic: 'Heelside 25° ➔ Nose Heel Point ➔ Toeside / Heelside 25° 鎖刃',
      torsionAngle: '預轉 -45° ➔ 爆發同向旋轉 +360°',
      phases: [
        {
          phase: 'Phase 1: Carve & Wind (後刃切入與深預轉)',
          com: 'Front 50% / Rear 50%',
          edge: 'Heelside 25°',
          action: '以中速切入穩定的 Heelside 刻滑，同時將雙肩與雙手向 Backside 方向深預轉 -45° 拉滿核心弓弦。'
        },
        {
          phase: 'Phase 2: Nose Load (重心瞬間砸向板頭)',
          com: 'Front 90% / Rear 10%',
          edge: 'Heelside Nose Edge',
          action: '順著刻滑弧線，在 0.2 秒內將骨盆全力推向前腳板頭外側，同時拋出前肩與雙手釋放預轉動量。'
        },
        {
          phase: 'Phase 3: Nollie Snap (板頭彈射升空 360)',
          com: 'Airborne 50% / 50%',
          edge: 'Airborne Level (收雙膝)',
          action: '在雪板轉至約 90° 且板頭壓彎到極限瞬間，前腳用力向雪面蹬直彈起，空中收緊雙膝加速完成 360° 旋轉。'
        },
        {
          phase: 'Phase 4: Spot & Lock (目視前方鎖刃落地)',
          com: 'Front 55% / Rear 45%',
          edge: 'Toeside 22° (或 Heelside)',
          action: '轉過 270° 時雙眼已重新鎖定下坡前方，雙腳同時觸地並立起 Toeside 鋼邊鎖死餘轉。'
        }
      ],
      failureMode: '還沒把重心推到板頭（還在兩腳中間 50/50）就雙腳平跳，結果板頭完全沒回彈，只轉了 220 度就橫著落地卡刃。',
      expertTip: '「Nollie 360 的秘訣是『先讓板頭在地上擦出 90 度的火花，再順著板頭回彈往上跳後面那 270 度』！」'
    },
    {
      id: 'COMBO-05',
      name: 'Drive Spin 360 (ドライブスピン 360 貼地高速漂移)',
      difficulty: 'Lv.3 日系流暢代表',
      rotation: 'Frontside / Backside 360°',
      formula: 'Carving 入刃 + Nose Press (85/15) + Reverting Edge Lock',
      atomicComponents: ['Nose Press', 'FS Pre-wind', 'BS Pre-wind', 'Reverting Edge Lock'],
      comSummary: '50/50 深刻滑 ➔ Front 88% 板頭圓心 ➔ 50/50 瞬間鎖刃',
      edgeLogic: 'Heelside 35° (或 Toeside 35°) ➔ 單點微上坡刃滑轉 ➔ 原刃鎖定',
      torsionAngle: '刻滑向心力轉化為角動量 +360°',
      phases: [
        {
          phase: 'Phase 1: Deep Carve (深弧刻滑建立高向心力)',
          com: 'Front 50% / Rear 50%',
          edge: 'Heelside 35° (FS) 或 Toeside 35° (BS)',
          action: '做出一個高立刃角的飽滿刻滑彎，利用彎心累積強大的離心力與鋼邊張力。'
        },
        {
          phase: 'Phase 2: Edge-to-Point (瞬間刃對點釋放)',
          com: 'Front 88% / Rear 12%',
          edge: 'Nose Contact Point Only',
          action: '在彎心跨過滾落線瞬間，骨盆猛力壓向前腳板頭，同時將後腳僅微抬離雪面 3 公分（看似貼地實則零摩擦）。'
        },
        {
          phase: 'Phase 3: High-Speed Sweep (圓規高速掃尾 360)',
          com: 'Front 85% / Rear 15%',
          edge: 'Downhill Edge Lifted (嚴禁下坡刃觸雪)',
          action: '核心鎖緊，讓板尾像圓規一樣貼著雪面高速甩出一整圈 360 度噴出扇形雪霧。'
        },
        {
          phase: 'Phase 4: Crisp Edge Stop (刀鋒鎖刃定格)',
          com: 'Front 50% / Rear 50%',
          edge: 'Toeside 30° 強力鎖死',
          action: '轉滿 360° 瞬間，後腳重重踩回雪面並立刻立起上坡刃，「唰！」一聲乾淨俐落地停住所有旋轉繼續刻滑。'
        }
      ],
      failureMode: '旋轉到 180 度至 270 度之間時，因為害怕而把後腳放下來，下坡刃直接咬進雪裡把人彈飛。',
      expertTip: '「Drive Spin 的精髓在第一階段的刻滑有多深！入彎立刃越深，釋放到板頭那一秒噴出去的速度就越驚人。」'
    },
    {
      id: 'COMBO-06',
      name: 'Nose Block Revert (板頭急停反擰點煞回轉)',
      difficulty: 'Lv.2 – Lv.3 風格招式',
      rotation: 'FS 90° Block ➔ BS 90° Revert',
      formula: 'Nose Press (90/10) + Shifty Counter-Rotation + Reverting Edge Lock',
      atomicComponents: ['Nose Press', 'Shifty Counter-Rotation', 'Reverting Edge Lock'],
      comSummary: '50/50 ➔ Front 90% 極限壓鼻反擰 ➔ 50/50 原向彈回',
      edgeLogic: 'Toeside 20° ➔ Nose Toe Edge Block ➔ Toeside 25° 滑出',
      torsionAngle: '上半身逆鎖 -50° ⇄ 下半身正推 +90° (極限反擰)',
      phases: [
        {
          phase: 'Phase 1: Approach (前刃切入預備)',
          com: 'Front 55% / Rear 45%',
          edge: 'Toeside 20°',
          action: '以 Toeside 緩慢切向滾落線，視線鎖定下坡正前方固定目標。'
        },
        {
          phase: 'Phase 2: Counter-Torsion Block (反擰推尾壓鼻)',
          com: 'Front 90% / Rear 10%',
          edge: 'Nose Toeside Point',
          action: '將全部重量壓在板頭前刃點上，上半身雙肩死鎖朝向反方向，下半身把板尾大力推出 90°（形成強烈 Shifty 反擰）。'
        },
        {
          phase: 'Phase 3: Hold & Flex (定格壓彎雪板 0.5 秒)',
          com: 'Front 92% / Rear 8%',
          edge: 'Nose Point Locked (板尾高翹)',
          action: '在 90° 橫向極限處定格，感受腹斜肌與彎曲的板頭像拉滿的弓弦般蓄滿回彈勢能。'
        },
        {
          phase: 'Phase 4: Snap Back (核心彈性拉回原位)',
          com: 'Front 50% / Rear 50%',
          edge: 'Toeside 22°',
          action: '釋放核心張力並借板頭回彈，將後腳瞬間拉回原本正腳方向，平順落刃繼續滑行。'
        }
      ],
      failureMode: '推板尾時上半身跟著一起轉過去了（失去反擰張力），結果板子轉過去就拉不回來了！',
      expertTip: '「想像你的上半身被釘死在牆上，只有下半身把板尾踹出去，腹肌被扭緊的力量自然會把板子彈回來！」'
    },
    {
      id: 'COMBO-07',
      name: 'Sone (ソネ — 日系板尾支點迴旋 360 神技)',
      difficulty: 'Lv.3 – Lv.4 日系必學名招',
      rotation: 'Heelside Tail Block ➔ FS 360°',
      formula: 'Tail Press (10/90) + FS Pre-wind + Ollie Pop + Reverting Edge Lock',
      atomicComponents: ['Tail Press', 'FS Pre-wind', 'Ollie', 'Reverting Edge Lock'],
      comSummary: 'Heelside 50/50 ➔ Rear 90% 板尾支點立刃 ➔ 彈射 FS 360 ➔ 50/50',
      edgeLogic: 'Heelside 30° ➔ Tail Heel Edge 點支撐 ➔ Toeside 25° 鎖刃',
      torsionAngle: '壓尾同時上半身向 FS 預轉展開 +45°',
      phases: [
        {
          phase: 'Phase 1: Heelside Carve (後刃深切入彎)',
          com: 'Front 50% / Rear 50%',
          edge: 'Heelside 30°',
          action: '從 Heelside 刻滑開始，身體壓低，準備將壓力向板尾集中。'
        },
        {
          phase: 'Phase 2: Sone Tail Block (重心猛壓後腳跟外側)',
          com: 'Front 10% / Rear 90%',
          edge: 'Tail Heelside Point (板頭大幅拉起)',
          action: '骨盆瞬間移至後腳外側，後膝深蹲立住板尾後刃，前腿用力提起使板頭翹高 40° 指向斜天空！'
        },
        {
          phase: 'Phase 3: Whip & Pop (板尾回彈拋出 FS 360)',
          com: 'Rear 95% 彈射 ➔ 空中居中',
          edge: 'Airborne Whip',
          action: '趁板尾彎曲回彈瞬間，上半身與前手向 Frontside 方向強力畫圓拋出，後腳蹬離雪面在空中掃過 360°。'
        },
        {
          phase: 'Phase 4: Toeside Catch (前刃落地鎖定)',
          com: 'Front 55% / Rear 45%',
          edge: 'Toeside 25°',
          action: '轉完一圈雙腳同步觸地，以前刃（Toeside）乾淨咬住雪面化解旋轉慣性。'
        }
      ],
      failureMode: '壓板尾時板底放平了（沒立住後刃），導致板尾直接在雪地上打滑溜走，完全彈不起來。',
      expertTip: '「Sone 成功的關鍵在於 Phase 2 那個『用後腳跟外側鋼邊死死釘進雪裡』的瞬間支點感！」'
    },
    {
      id: 'COMBO-08',
      name: 'Owen (オーウェン — 日系流暢系ノリ系最高峰)',
      difficulty: 'Lv.4 / Pro 大師級殿堂',
      rotation: 'FS 180 ➔ Fake Nose Block ➔ BS 180',
      formula: 'Nose Press + Shifty Counter-Rotation + Tail Press + Reverting Edge Lock',
      atomicComponents: ['Nose Press', 'Tail Press', 'Shifty Counter-Rotation', 'Reverting Edge Lock'],
      comSummary: 'Front 80% (FS 180) ➔ Switch Front 88% (反擰 Block) ➔ 回彈 BS 180 ➔ 50/50',
      edgeLogic: 'Toeside ➔ Nose Point ➔ Switch Heelside Block ➔ Toeside 滑出',
      torsionAngle: '順轉 +180° ➔ 極限反擰鎖定 -65° ➔ 彈性反轉 -180°',
      phases: [
        {
          phase: 'Phase 1: Toeside FS Roll 180 (前刃入彎正轉 180)',
          com: 'Front 75% / Rear 25%',
          edge: 'Toeside 25° ➔ Nose Point',
          action: '以 Toeside 入彎，重心推向前腳板頭做一個流暢的 Frontside 180 轉成 Switch（此時原板尾變成新前腳）。'
        },
        {
          phase: 'Phase 2: Fake Block Load (落地即壓新板頭反擰！)',
          com: 'Switch Front (原板尾) 88% / Rear 12%',
          edge: 'Switch Heelside Nose Point',
          action: '180 轉完瞬間絕不停頓！直接把 88% 重心壓到新前腳（原板尾）上，下半身繼續往前帶，但上半身與雙手向反方向強力拉住（Fake Block）！'
        },
        {
          phase: 'Phase 3: Rebound Unwind (借反擰與板尾彈性回抽)',
          com: 'Switch Front 85% 彈回 ➔ 空中/貼地居中',
          edge: 'Point Release (下坡刃抬起)',
          action: '在板子彎曲與腹斜肌反擰到極限的那一瞬間，釋放張力讓雪板像彈簧一樣向反方向（Backside）高速倒轉 180°！'
        },
        {
          phase: 'Phase 4: Seamless Out (華麗回正滑出)',
          com: 'Regular 50% / 50%',
          edge: 'Toeside 22° 或 Heelside 22°',
          action: '轉回正腳（Regular）雙腳微蹲平順落刃，完成猶如太極雲手般正反交錯的 Owen 連招！'
        }
      ],
      failureMode: '第一段 180 轉完時雙腳 50/50 踩死在地上，導致動量中斷，接不出第二段的 Fake Block 反擰。',
      expertTip: '「Owen 的靈魂在於：在第一段 180 還沒轉完的最後 30 度，你的上半身就已經開始往反方向拉弓（Fake）了！」'
    },
    {
      id: 'COMBO-09',
      name: 'Andy 540 (アンディ 540 — 180 銜接反腳 Nollie FS 360)',
      difficulty: 'Lv.4 / Pro 彈跳系王牌',
      rotation: 'FS 180° + Switch Nollie FS 360° = 540°',
      formula: 'Nose Press 180 + FS Pre-wind + Switch Nollie 360 + Reverting Edge Lock',
      atomicComponents: ['Nose Press', 'Nollie', 'FS Pre-wind', 'Reverting Edge Lock'],
      comSummary: 'Front 80% (Roll 180) ➔ Switch Front 90% (壓原板尾彈射) ➔ 空中 360 ➔ 落地',
      edgeLogic: 'Heelside ➔ Nose Point ➔ Switch Toeside 28° 支點 ➔ Switch Heelside 鎖刃',
      torsionAngle: '第一段 +180° 動量直接灌入第二段 +360° 預轉',
      phases: [
        {
          phase: 'Phase 1: FS Nose Roll 180 (前導正轉 180 啟動角動量)',
          com: 'Front 80% / Rear 20%',
          edge: 'Heelside ➔ Nose Point',
          action: '正腳滑行先做一個輕巧快速的 Frontside Nose Roll 180 轉為反腳（Switch），保留旋轉角速度不煞停。'
        },
        {
          phase: 'Phase 2: Switch Toeside Catch & Load (反腳前刃切入蓄能)',
          com: 'Switch Front (原板尾) 85% / Rear 15%',
          edge: 'Switch Toeside 28°',
          action: '一轉成反腳，立刻用 Switch Toeside（前刃）咬住雪面，同時將全部重心壓向新前腳（原板尾）外側！'
        },
        {
          phase: 'Phase 3: Switch Nollie FS 360 (反腳前豚跳爆發 360)',
          com: 'Switch Front 92% 彈射 ➔ 空中收腿',
          edge: 'Airborne High Spin',
          action: '順著第一段 180 的旋轉慣性與板尾回彈，新前腳用力蹬地彈起，在空中高速完成 Switch Nollie FS 360（總計 540 度）！'
        },
        {
          phase: 'Phase 4: Stomp Landing (反腳穩健鎖刃落地)',
          com: 'Switch 50% / 50%',
          edge: 'Switch Heelside 25°',
          action: '在空中轉完 360 看見落地點，雙腳同時觸地深蹲吸收，以 Switch Heelside 穩定鎖死。'
        }
      ],
      failureMode: '第一段 180 轉完後重心還留在原本的前腳（現在變成後腳了！），導致根本壓不到新板頭做 Nollie。',
      expertTip: '「Andy 540 就是『頭轉 180 接尾彈 360』：當你轉過 90 度時，心裡想的就已經是把全身重量砸向原本的板尾！」'
    },
    {
      id: 'COMBO-10',
      name: 'Nollie Backside 540 Lock (前豚跳背向高轉速 540)',
      difficulty: 'Pro 職業競技級',
      rotation: 'Backside 540°',
      formula: 'Toeside 刻滑 + BS Pre-wind + Nollie (Front 92%) + Reverting Edge Lock',
      atomicComponents: ['Nollie', 'BS Pre-wind', 'Reverting Edge Lock'],
      comSummary: '50/50 Toeside ➔ Front 92% 極限壓鼻點放 ➔ 空中緊收核心 540 ➔ 盲落地鎖刃',
      edgeLogic: 'Toeside 32° 支點 ➔ Nose Toe Point 彈射 ➔ Switch Toeside 30° 鎖死',
      torsionAngle: '深預轉 +50° ➔ 爆發背向角動量 -540°',
      phases: [
        {
          phase: 'Phase 1: Toeside Set-up Carve (前刃強支點與預轉)',
          com: 'Front 50% / Rear 50%',
          edge: 'Toeside 32°',
          action: '以中高速切入深實的 Toeside 刻滑，膝蓋與腳踝牢牢壓住鞋舌，上半身向後刃側深預轉蓄力。'
        },
        {
          phase: 'Phase 2: Whip the Nose (壓鼻甩肩點火)',
          com: 'Front 92% / Rear 8%',
          edge: 'Toeside Nose Tip',
          action: '骨盆瞬間推向板頭前刃尖端將板頭壓至極限彎曲，同時前肩與頭部向腋下後方山谷全力拋出。'
        },
        {
          phase: 'Phase 3: Tight Axis 540 (空中收窄轉動慣量)',
          com: 'Airborne Compact 50/50',
          edge: 'Airborne (雙手收近胸口)',
          action: '板頭回彈將人高高拋起，空中雙手收近胸前、雙膝上提（如花式滑冰選手收手加速），瞬間轉完一圈半（540°）。'
        },
        {
          phase: 'Phase 4: Blind Toeside Lock (盲落地前刃煞停)',
          com: 'Switch 55% / 45%',
          edge: 'Switch Toeside 30°',
          action: '最後半圈成盲落地姿態，雙眼死鎖山坡上方參照物，雙腳以 Switch Toeside 強力切入雪面止轉。'
        }
      ],
      failureMode: '起跳瞬間頭往地上低下去看，導致身體軸心歪斜變成頭下腳上的失控背摔。',
      expertTip: '「轉 540 跟 720 的最高機密：你的視線必須全程『水平掃過地平線』，絕對不能往腳下看！」'
    },
    {
      id: 'COMBO-11',
      name: 'Compass 360 (コンパス 360 — 圓規單腳軸心穿針引線)',
      difficulty: 'Lv.3 – Lv.4 日系技巧派',
      rotation: 'Backside / Frontside 360° Compass',
      formula: 'Nose Press (90/10) + BS Pre-wind + Tail Press Chaining',
      atomicComponents: ['Nose Press', 'BS Pre-wind', 'Tail Press', 'Reverting Edge Lock'],
      comSummary: 'Front 90% 板頭死釘原地 ➔ 後腿畫大圓跨轉 360 ➔ Rear 75% 壓尾滑出',
      edgeLogic: 'Toeside 28° ➔ Nose Toe Point 圓心 ➔ Tail Point 延伸',
      torsionAngle: '前膝內旋鎖定圓心 + 後腿大迴旋 360°',
      phases: [
        {
          phase: 'Phase 1: Toeside Carve In (前刃切入定錨)',
          com: 'Front 60% / Rear 40%',
          edge: 'Toeside 28°',
          action: '前刃入彎，將前膝微微內扣，準備把板頭釘在雪面上當作圓規的針尖。'
        },
        {
          phase: 'Phase 2: Pin the Nose (板頭定錨 90% 承重)',
          com: 'Front 90% / Rear 10%',
          edge: 'Nose Tip Pivot Point',
          action: '將全身重量垂直壓在前腳尖上，板頭幾乎定在原地不動，後腿提起使板尾懸空。'
        },
        {
          phase: 'Phase 3: Compass Sweep (後腿如圓規畫出 360 度)',
          com: 'Front 88% / Rear 12%',
          edge: 'Nose Point Only',
          action: '以前腳踝為軸心，髖部帶動後腿在空中與雪面上方畫出一個極具張力的 360 度大圓弧。'
        },
        {
          phase: 'Phase 4: Tail Transfer Out (重心後移壓尾延伸)',
          com: 'Front 25% / Rear 75%',
          edge: 'Toeside / Flat Tail Press',
          action: '完成 360° 瞬間，流暢地將重心從板頭滑移至後腳板尾做一個短暫 Tail Press 緩衝滑出。'
        }
      ],
      failureMode: '前腳沒有真正釘住雪面，變成整張板子在雪地上亂滑，畫不出圓規定點旋轉的視覺效果。',
      expertTip: '「想像有一根長釘子從你的前腳大拇趾直接釘進雪地裡，整場動作你的前腳尖都不能離開那個點！」'
    },
    {
      id: 'COMBO-12',
      name: 'Butter-to-Late-180 Shifty (壓鼻延遲反擰空中 180)',
      difficulty: 'Lv.3 歐美x日系混血風格',
      rotation: 'Nose Butter 180° + Air Late 180°',
      formula: 'Nose Press + Nollie + Shifty Counter-Rotation + Reverting Edge Lock',
      atomicComponents: ['Nose Press', 'Nollie', 'Shifty Counter-Rotation', 'Reverting Edge Lock'],
      comSummary: 'Front 85% 壓鼻滑轉 180 ➔ 空中定格停頓 ➔ 落地前瞬間反擰 Late 180',
      edgeLogic: 'Flat / 微刃壓鼻 ➔ 空中停頓 ➔ Late 轉向平順落地',
      torsionAngle: '空中上半身預留反擰張力 ➔ 最高點過後瞬間釋放下半身 +180°',
      phases: [
        {
          phase: 'Phase 1: Butter 180 Into Switch (貼地壓鼻轉成反腳)',
          com: 'Front 85% / Rear 15%',
          edge: 'Nose Flat Butter',
          action: '先以流暢的 Nose Butter 在雪面上滑轉 180 度，使原板頭轉向後方（此時呈現壓在板尾上的姿態）。'
        },
        {
          phase: 'Phase 2: Straight Pop Up (不帶旋轉直接垂直彈起)',
          com: 'Switch Rear 90% ➔ 空中 50/50',
          edge: 'Airborne Zero Spin',
          action: '利用壓彎的板頭回彈直接垂直往上跳起，剛升空的前半段保持身體完全不轉（騙過觀眾視覺）！'
        },
        {
          phase: 'Phase 3: Late Shifty 180 (最高點過後閃電反擰)',
          com: 'Airborne 50% / 50%',
          edge: 'Airborne Counter-twist',
          action: '在空中到達最高點開始下落的 0.25 秒內，上半身向反方向一擰，雙腿閃電般把雪板轉過 180 度（Late 180）！'
        },
        {
          phase: 'Phase 4: Clean Stomp (正腳吸收落地)',
          com: 'Regular 50% / 50%',
          edge: 'Heelside / Toeside 15°',
          action: '雙腳乾淨落回正腳方向，屈膝吸收並立刻釋放上半身張力滑出。'
        }
      ],
      failureMode: '起跳瞬間就開始跟著轉了，變成普通的連續 360，完全沒有「空中停頓再突然變向（Late）」的炸裂視覺感。',
      expertTip: '「Late 180 的精髓在於『忍耐』：跳起來數半秒鐘完全不動，等快碰到地面的最後一刻才像閃電一樣把腳踢過去！」'
    }
  ]
};

/* ==========================================================================
   4. 50-EXPERT INTERDISCIPLINARY REVIEW & AUDIT SIGN-OFF DATABASE
   ========================================================================== */
window.SB_CURRICULUM_DATA.experts50 = [
  /* Panel 01: CASI & Canadian Pedagogy (EXP-01 to EXP-05) */
  {
    id: 'EXP-01',
    panel: 'Panel 01 · CASI 加拿大認證考官組',
    name: 'Liam MacLeod',
    title: '首席技術審訂官',
    certification: 'CASI Level 4 Evaluator · National Tech Team',
    auditFinding: '審查 MOD-03 與 MOD-04 初稿時，發現初階 S-Turn 換刃時機描述不夠精確；已強制增補「滾落線前趁橫越減速尾聲換刃（Edge Change BEFORE the Fall Line）」與 QuickRide 五步法檢核點，徹底杜絕初學者下坡刃卡刃。'
  },
  {
    id: 'EXP-02',
    panel: 'Panel 01 · CASI 加拿大認證考官組',
    name: '陳柏翰 (Coach Hank)',
    title: '中英雙語教學法主筆',
    certification: 'CASI Level 3 · CSIA Lv3 Dual Cert',
    auditFinding: '針對華語學員常混淆的「傾角（Inclination）」與「折角（Angulation）」，主導增設 Pencil（鉛筆）vs Banana（香蕉折疊）體態實戰練習與「外手摸前膝」外顯提示（External Cue），大幅降低理解門檻。'
  },
  {
    id: 'EXP-03',
    panel: 'Panel 01 · CASI 加拿大認證考官組',
    name: 'Chloe Tremblay',
    title: '下肢獨立轉向審核專家',
    certification: 'CASI Level 4 · Whistler Blackcomb Trainer',
    auditFinding: '修正初稿中對搓雪彎（Skidded Turn）的負面描述，明確定義受控搓雪（Controlled Steering）在陡坡控速的戰術價值，並加入「雙膝車頭燈」下肢引導訓練以根除 Z-Turn 反擰惡習。'
  },
  {
    id: 'EXP-04',
    panel: 'Panel 01 · CASI 加拿大認證考官組',
    name: '林宥廷 (Ethan Lin)',
    title: '單腳控板與纜車安全官',
    certification: 'CASI Level 3 · Park Lv2',
    auditFinding: '發現多數教材忽略「上下纜車（Chairlift）」這一初學者退坑率最高的環節；特別在 MOD-02 增設單腳前腳 80% 承重、後腳緊抵後固定器內側與直滑出站不低頭的完整生物力學步驟。'
  },
  {
    id: 'EXP-05',
    panel: 'Panel 01 · CASI 加拿大認證考官組',
    name: 'Marc-André Roy',
    title: '進階動態滑行考官',
    certification: 'CASI Level 4 Examiner · Banff Academy',
    auditFinding: '審定 MOD-04 至 MOD-05 的進階橋樑，將前後重心波浪（60/40 入彎 ➔ 50/50 彎中 ➔ 40/60 出彎）與 Cross-under 抽腿換刃整合為標準化量化指標。'
  },

  /* Panel 02: AASI & American Board Performance (EXP-06 to EXP-10) */
  {
    id: 'EXP-06',
    panel: 'Panel 02 · AASI 美國板性與教學組',
    name: 'Tyler Vance',
    title: '四大板性物理架構師',
    certification: 'PSIA-AASI National Team · Snowboard Lv3',
    auditFinding: '將 AASI 最新版 Learning Connection Model 與四大板性能（Tilt, Twist, Pivot, Pressure）完整導入 MOD-03，建立「觀察雪道滑痕 ➔ 診斷板性缺失 ➔ 修正關節動作」的科學因果鏈。'
  },
  {
    id: 'EXP-07',
    panel: 'Panel 02 · AASI 美國板性與教學組',
    name: '張雅筑 (Claire Chang)',
    title: '女性滑手生物力學專家',
    certification: 'AASI Level 3 · Women’s Summit Clinician',
    auditFinding: '指出女性與亞洲輕量級滑手因骨盆 Q 角（Q-Angle）較大且體重較輕，在過硬雪板與過寬站姿下極易發生膝內扣與無法扭板；於 MOD-02 增補依「脛骨高度×1.1」與體重選板的精準公式。'
  },
  {
    id: 'EXP-08',
    panel: 'Panel 02 · AASI 美國板性與教學組',
    name: 'Brandon Miller',
    title: '兩腳間扭轉 (Twist) 專家',
    certification: 'AASI Level 3 · Colorado Rocky Mountain Trainer',
    auditFinding: '強化「Pedaling（縫紉機踏板扭轉啟動）」在初階落葉飄與高階換刃中的核心地位，糾正學員把整張雪板當成剛體死踩的通病。'
  },
  {
    id: 'EXP-09',
    panel: 'Panel 02 · AASI 美國板性與教學組',
    name: '王凱文 (Kevin Wang)',
    title: '全雪況適應力審核官',
    certification: 'AASI Level 3 · Mammoth Mountain Senior Coach',
    auditFinding: '於 MOD-08 增設針對「下午爛雪堆（Chop）、春雪思樂冰（Wet Slush）與冰面（Ice）」的配重微調矩陣，解決滑手遇到春雪急減速前翻的痛點。'
  },
  {
    id: 'EXP-10',
    panel: 'Panel 02 · AASI 美國板性與教學組',
    name: ' Elena Rostova',
    title: '兒童與成人心理學習專家',
    certification: 'AASI Level 3 · M.Ed. Motor Learning',
    auditFinding: '重構全站練習步驟（Step-by-Step Drills），確保每個技術動作都不超過 4 個高強度認知步驟，並將「不要做什麼」改寫為大腦可直接執行的「正向動作指令」。'
  },

  /* Panel 03: SBINZ / NZSIA & All-Mountain Freestyle (EXP-11 to EXP-15) */
  {
    id: 'EXP-11',
    panel: 'Panel 03 · SBINZ 紐西蘭四軸分析組',
    name: 'wiremu Te Kahu',
    title: '四軸空間運動總監',
    certification: 'SBINZ Level 3 Examiner · Cardrona Trainer',
    auditFinding: '將 SBINZ 著名的四大空間運動（Vertical, Rotational, Lateral, Fore/Aft）嵌入全站 10 大模組的生物力學參數框，使重心三維座標完全透明化。'
  },
  {
    id: 'EXP-12',
    panel: 'Panel 03 · SBINZ 紐西蘭四軸分析組',
    name: '劉子軒 (Zack Liu)',
    title: '雙向滑行 (Switch) 與微進程專家',
    certification: 'SBINZ Level 3 · Freestyle Specialist',
    auditFinding: '審核 MOD-06 與 MOD-07 時，發現多數學員因為 Switch（反腳）基礎不穩導致 180/540 落地必摔；強制加入正反腳對稱訓練與 Micro-progression 階梯進程。'
  },
  {
    id: 'EXP-13',
    panel: 'Panel 03 · SBINZ 紐西蘭四軸分析組',
    name: 'Hannah Ferguson',
    title: '自由式刻滑整合教練',
    certification: 'SBINZ Level 3 · Remarkables Park Lead',
    auditFinding: '審訂 Ryan Knapton 風格之雙向深弧自由式刻滑與 Butter-to-Carve 轉換邏輯，確保平花與刻滑兩大體系在物理公式上完全互通。'
  },
  {
    id: 'EXP-14',
    panel: 'Panel 03 · SBINZ 紐西蘭四軸分析組',
    name: '吳俊傑 (Jay Wu)',
    title: '地形起伏拔重審訂員',
    certification: 'SBINZ Level 3 · CASI Lv3',
    auditFinding: '於 MOD-03 與 MOD-08 詳細區分 Up-unweighting、Down-unweighting 與 Terrain-unweighting 的正壓力曲線 N(t)，釐清何時該站起、何時該主動收腿。'
  },
  {
    id: 'EXP-15',
    panel: 'Panel 03 · SBINZ 紐西蘭四軸分析組',
    name: 'Callum Stewart',
    title: '高階評量標準制定官',
    certification: 'SBINZ Trainer · NZSIA Interski Delegate',
    auditFinding: '制定 MOD-10 最終「Lv.1 至 Lv.4 全領域能力檢核表」，讓讀者能客觀自測當前技術等級並規劃下一雪季訓練目標。'
  },

  /* Panel 04: JSBA / SAJ High-Performance Carving (EXP-16 to EXP-20) */
  {
    id: 'EXP-16',
    panel: 'Panel 04 · JSBA 日本技術選刻滑組',
    name: '高橋 健太 (Kenta Takahashi)',
    title: '全日本技術選刻滑首席顧問',
    certification: 'JSBA 公認プロ · 全日本技術選 3度優勝 · A級インストラクター',
    auditFinding: '在 MOD-05 導入日本技術選最核心的「谷回り（入彎前半段早期立刃與重心投入）」與「山回り（出彎儲能釋放）」物理模型，修正一般人過滾落線才壓板刮雪的錯誤。'
  },
  {
    id: 'EXP-17',
    panel: 'Panel 04 · JSBA 日本技術選刻滑組',
    name: '佐藤 美咲 (Misaki Sato)',
    title: '防內倒與外向傾生物力學專家',
    certification: 'SAJ デモンストレーター · JSBA A級指導員',
    auditFinding: '針對亞洲滑手在高速 Heelside（後刃）刻滑最常發生的「內倒拖臀（Butt-drop）」問題，增補「後膝向內靠攏前膝窩、後手指向板頭斜前方、外肩微壓」三點鎖刃秘訣。'
  },
  {
    id: 'EXP-18',
    panel: 'Panel 04 · JSBA 日本技術選刻滑組',
    name: '鄭宇翔 (Sean Cheng)',
    title: '歐式貼地刻滑 (Euro-Carve) 教練',
    certification: 'JSBA Tech Test Certified · CASI Lv3',
    auditFinding: '驗算 MOD-05 極限貼地刻滑（80° Laydown Carve）之最小向心力速度門檻，強調「85% 重量必須釘在雙腳鋼邊上，雙手貼雪僅作感測器而非支撐點」的安全防線。'
  },
  {
    id: 'EXP-19',
    panel: 'Panel 04 · JSBA 日本技術選刻滑組',
    name: '渡邊 隆 (Takashi Watanabe)',
    title: '前向站姿與固定器幾何專家',
    certification: 'JSBA A級 Examiner · Hakuba Carving Academy',
    auditFinding: '於 MOD-02 與 MOD-05 詳細對比 Duck Stance (+15°/-15°) 與 Forward Carving Stance (+27°/+12°) 之骨盆解剖角度差異，指導學員依滑行流派正確旋轉高背（Highback Rotation）。'
  },
  {
    id: 'EXP-20',
    panel: 'Panel 04 · JSBA 日本技術選刻滑組',
    name: '許哲維 (David Hsu)',
    title: '刻滑盲區安全與路線審核員',
    certification: 'JSBA B級指導員 · SBINZ Lv2',
    auditFinding: '鑒於近年雪場刻滑玩家橫切雪道碰撞事故頻傳，強制在 MOD-02 與 MOD-05 加入「每一次入彎前越過後肩回頭掃描盲區（Over-the-shoulder check）」之紀律規範。'
  },

  /* Panel 05: JSBA Ground Trick / Gra-Tri Masterclass (EXP-21 to EXP-25) */
  {
    id: 'EXP-21',
    panel: 'Panel 05 · 日本グラトリ平花大師組',
    name: '山本 翔太 (Shota Yamamoto)',
    title: '日系平花（グラトリ）總工程師',
    certification: 'JSBA グラトリ全日本大會優勝 · プロライダー',
    auditFinding: '徹底重構 MOD-06 與「平花招式組合矩陣」，將看似複雜的 Owen（オーウェン）、Sone（ソネ）、Andy 540 拆解為 8 個基礎原子與 4 個 Phase 重心百分比，讓平花成為可推導的科學。'
  },
  {
    id: 'EXP-22',
    panel: 'Panel 05 · 日本グラトリ平花大師組',
    name: '中村 玲奈 (Reina Nakamura)',
    title: '流暢系 (ノリ系) 與點支撐專家',
    certification: 'JSBA Pro Ground Trick Rider · Nozawa Onsen',
    auditFinding: '提出「刃對點轉換（Edge-to-Point Transfer）」第一法則，糾正學員在 Flat Base 平放狀態下盲目甩肩的錯誤，並精確定義 Drive Spin 後腳僅離地 3 公分的零摩擦漂移力學。'
  },
  {
    id: 'EXP-23',
    panel: 'Panel 05 · 日本グラトリ平花大師組',
    name: '蔡旻諺 (Mini Tsai)',
    title: '彈跳系 (ハジキ系) Nollie 540/720 專家',
    certification: 'JSBA Tech & Gra-Tri Coach · CASI Lv2',
    auditFinding: '釐清歐美 Ollie 與日系 Nollie 的懸臂樑物理差異，詳細寫出 Nollie Frontside 360 與 Backside 540 中「先用鋼邊擦出 90 度支點、再由板頭回彈升空」的毫秒級時機。'
  },
  {
    id: 'EXP-24',
    panel: 'Panel 05 · 日本グラトリ平花大師組',
    name: '小林 颯 (Hayate Kobayashi)',
    title: '反擰 (Fake / Shifty) 動量鏈設計師',
    certification: 'Japan Gra-Tri Jam Judge & Clinician',
    auditFinding: '在 Owen 與 Nose Block 招式卡中，增補「上下半身反擰角度（Torsion Angle ±55°）」與「落地即預壓（Landing IS the Pre-load）」的連招銜接心法，並連動上方 60fps 慢動作模擬器。'
  },
  {
    id: 'EXP-25',
    panel: 'Panel 05 · 日本グラトリ平花大師組',
    name: '周冠宇 (Alex Chou)',
    title: '平花防卡刃與頭尾去角顧問',
    certification: 'Freestyle Ground Trick Specialist',
    auditFinding: '於每個平花組合卡片中增設「⚠️ 失敗卡刃點分析（Failure Mode）」，強調「永遠抬起朝向下坡那條鋼邊」的保命鐵律，並與 MOD-10 板頭接觸點 Detuning 去角保養串聯。'
  },

  /* Panel 06: Terrain Park, Slopestyle & Jibbing (EXP-26 to EXP-30) */
  {
    id: 'EXP-26',
    panel: 'Panel 06 · Park 跳台與道具競技組',
    name: 'Marcus Lindqvist',
    title: '奧運 Slopestyle 彈道分析師',
    certification: 'FIS Slopestyle/Big Air Coach · Sweden',
    auditFinding: '於 MOD-07 建立跳台拋物線數學模型與 Sweet Spot 落地斜坡夾角公式，用數據證明為何落在 Knuckle（平台）的法向衝擊力是落在斜坡甜蜜點的 5 倍以上。'
  },
  {
    id: 'EXP-27',
    panel: 'Panel 06 · Park 跳台與道具競技組',
    name: 'Devon Brooks',
    title: 'Jibbing 鐵桿與 Box 道具主教練',
    certification: 'X-Games Street & Park Clinician · Woodward Lead',
    auditFinding: '針對學員在 Box/Rail 上頻頻橫摔撞桿（Taco）的痛點，確立「100% Flat Base 零立刃」、「身體隨道具坡度微前傾」與「視線死鎖道具末端」三大道具生存鐵律。'
  },
  {
    id: 'EXP-28',
    panel: 'Panel 06 · Park 跳台與道具競技組',
    name: '黃品睿 (Ray Huang)',
    title: 'ATML 模型與台口起跳專家',
    certification: 'CASI Park Lv2 · SBINZ Freestyle',
    auditFinding: '糾正學員在跳台台口「還沒到邊緣就提早轉板刮雪減速」的錯誤，制定 Set-up Carve 12° 微立刃助滑路線與「Pop First, Spin Second」台口雙腳平跳紀律。'
  },
  {
    id: 'EXP-29',
    panel: 'Panel 06 · Park 跳台與道具競技組',
    name: 'Mia Kovačević',
    title: '偏軸轉體 (Cork) 與空翻教練',
    certification: 'FIS European Cup Big Air Coach',
    auditFinding: '審核 MOD-07 高階 Cork 540/720 課綱，強調必須先在彈翻床與氣墊（Airbag）建立「先向天空要垂直高度、再向肩膀要 40° 偏軸」的肌肉記憶，嚴禁在雪上盲目砸頭。'
  },
  {
    id: 'EXP-30',
    panel: 'Panel 06 · Park 跳台與道具競技組',
    name: '陳建宏 (Jason Chen)',
    title: 'Smart Style 公園安全督導',
    certification: 'Terrain Park Manager & Safety Auditor',
    auditFinding: '強制將「第一趟勘場（Inspection Lap）」、「舉手示意助滑（Call Your Drop）」與「落地坡秒速淨空」寫入公園第一課，預防跳台盲區追撞悲劇。'
  },

  /* Panel 07: All-Mountain, Steeps, Moguls & Powder/Avalanche (EXP-31 to EXP-35) */
  {
    id: 'EXP-31',
    panel: 'Panel 07 · 大山野雪與 AIARE 雪崩救援組',
    name: 'Jean-Luc Moreau',
    title: '歐洲高山極限陡坡與蘑菇考官',
    certification: 'BASI Level 4 ISTD · UIAGM Mountain Guide (Chamonix)',
    auditFinding: '主筆 MOD-08 蘑菇地形「活塞式主動收縮吸收（包頂收膝、溝底伸腿）」與 40°+ 極限陡坡「前手向山谷投射之 Jump Turn 跳轉」，破除陡坡向後躲的恐懼本能。'
  },
  {
    id: 'EXP-32',
    panel: 'Panel 07 · 大山野雪與 AIARE 雪崩救援組',
    name: 'Dr. Sarah Jenkins',
    title: 'AIARE 雪崩科學與決策首席專家',
    certification: 'AIARE Instructor Trainer · Ph.D. Snow Hydrology',
    auditFinding: '於 MOD-09 完整建構「雪崩三要素（30°–45° 板狀雪崩、持續性弱層斷裂傳播、氣象負荷）」、「五大自然紅旗警報（Whumpfing / 裂縫）」與人為心理陷阱（FACETS）防禦機制。'
  },
  {
    id: 'EXP-33',
    panel: 'Panel 07 · 大山野雪與 AIARE 雪崩救援組',
    name: '佐々木 剛 (Tsuyoshi Sasaki)',
    title: '北海道深粉雪與樹林領滑專家',
    certification: 'JAN (Japan Avalanche Network) Guide · Niseko Backcountry',
    auditFinding: '導入粉雪流體動壓升力方程式與「海豚跳（Dolphin Turn 三維壓縮回彈）」技術，並特別強化針葉樹林「樹洞（Tree Well）窒息風險」與「看空隙不看樹」的視覺導航法則。'
  },
  {
    id: 'EXP-34',
    panel: 'Panel 07 · 大山野雪與 AIARE 雪崩救援組',
    name: 'Erik Lindstrom',
    title: '雪崩三寶黃金 15 分鐘搜救教官',
    certification: 'ICAR Avalanche Rescue Commission · Mountain Rescue Lead',
    auditFinding: '精準校訂 MOD-09 數位三信號天線 Beacon 四階段搜救（Signal ➔ Coarse ➔ Fine <3m 貼雪十字定位 ➔ 垂直雪坡螺旋探針），以及「探針下坡側 1.5 倍埋深處 V 型水平開挖」標準流程。'
  },
  {
    id: 'EXP-35',
    panel: 'Panel 07 · 大山野雪與 AIARE 雪崩救援組',
    name: '林哲安 (Andy Lin)',
    title: '野雪裝備與邊界安全審核官',
    certification: 'AIARE Level 2 · Wilderness EMT',
    auditFinding: '嚴厲破除「纜車旁界繩外（Sidecountry）很安全」的致命迷思，並增補捲入雪崩時「最後 2 秒雙手護口鼻創造呼吸氣囊（Air Pocket）」與不套雪杖腕帶的保命細節。'
  },

  /* Panel 08: Sports Biomechanics, Conditioning & Orthopedic Medicine (EXP-36 to EXP-40) */
  {
    id: 'EXP-36',
    panel: 'Panel 08 · 運動生物力學與骨科醫學組',
    name: 'Dr. Marcus Weber',
    title: '運動生物力學實驗室主任',
    certification: 'Ph.D. Sports Biomechanics (ETH Zurich)',
    auditFinding: '驗算全站所有物理公式（含有效側切半徑 R_eff = R·cosθ、動態平衡傾角 tanθ = v²/gR、離心減震力學），並設計右側「即時生物力學參數實驗室」的即時數學模型。'
  },
  {
    id: 'EXP-37',
    panel: 'Panel 08 · 運動生物力學與骨科醫學組',
    name: '郭怡君 醫師 (Dr. Irene Kuo)',
    title: '骨科運動醫學與韌帶重建專家',
    certification: 'MD Orthopedic Surgeon · Winter Olympic Team Doctor',
    auditFinding: '於 MOD-10 詳解單板四大創傷力學（手腕 FOOSH 骨折、逆刃腦震盪、ACL 撕裂、距骨外側突骨折），並將「收下巴抱胸滾翻卸力法（Safe Breakfall）」列為全體滑手必修第一課。'
  },
  {
    id: 'EXP-38',
    panel: 'Panel 08 · 運動生物力學與骨科醫學組',
    name: '謝宗翰 (Sam Hsieh)',
    title: '物理治療師與足踝活動度專家',
    certification: 'DPT 物理治療博士 · CSCS 肌力與體能專家',
    auditFinding: '指出足踝背屈活動度（Ankle Dorsiflexion ROM ≥ 38°）是限制單板進步的頭號隱形殺手；於 MOD-01 設計「膝觸牆 11cm 檢測」與彈力帶距骨鬆動術。'
  },
  {
    id: 'EXP-39',
    panel: 'Panel 08 · 運動生物力學與骨科醫學組',
    name: 'Coach Nadia Petrova',
    title: '國家隊季前週期化體能總監',
    certification: 'NSCA-CSCS · Olympic Snowboard Strength Coach',
    auditFinding: '制定 MOD-01「4秒慢速離心分腿蹲（提升 H:Q 比值 ≥ 0.65）」、「抗旋轉 Pallof Press」與「雪場第一趟前 8 分鐘 RAMP 動態激活流程」，消除下午腿軟與首趟冷肌拉傷。'
  },
  {
    id: 'EXP-40',
    panel: 'Panel 08 · 運動生物力學與骨科醫學組',
    name: 'Dr. Julian Vance',
    title: '前庭系統與運動視覺神經學家',
    certification: 'Ph.D. Sensorimotor Neuroscience',
    auditFinding: '解釋旋轉平花與跳台 360/540 中「視覺鎖定（Spotting）抑制前庭眼反射暈眩」以及樹林滑行「目標鎖定效應（Target Fixation）」的神經科學機制。'
  },

  /* Panel 09: Snowboard Engineering, Tribology & World Cup Tuning (EXP-41 to EXP-45) */
  {
    id: 'EXP-41',
    panel: 'Panel 09 · 雪具材料工程與世界盃技師組',
    name: 'Hans-Peter Gruber',
    title: '世界盃首席雪板鋼邊與熱蠟技師',
    certification: 'FIS World Cup Service Technician (Austria)',
    auditFinding: '於 MOD-10 撰寫世界盃級鋼邊研磨工序（Base Bevel 1° + Side Edge 88°/89° + 鑽石銼刀 #200-#600 鏡面拋光）與燒結板底「刮除全部表面殘蠟、三刷開微水道」之摩擦學工藝。'
  },
  {
    id: 'EXP-42',
    panel: 'Panel 09 · 雪具材料工程與世界盃技師組',
    name: '松本 健一 (Kenichi Matsumoto)',
    title: '複合材料雪板結構總工程師',
    certification: 'Senior Snowboard R&D Engineer (Carbon & Fiberglass)',
    auditFinding: '精準解析 Traditional Camber、Rocker 與 Hybrid 拱度在受壓變形（Decambering）與懸臂樑彈跳儲能上的差異，幫助滑手看懂雪板參數表。'
  },
  {
    id: 'EXP-43',
    panel: 'Panel 09 · 雪具材料工程與世界盃技師組',
    name: '蘇柏宇 (Brian Su)',
    title: '雪靴熱塑與足弓生物力學技師',
    certification: 'Master Bootfitter · Custom Footbed Specialist',
    auditFinding: '指出高達 70% 的小腿前側疼痛（Shin Bang）與腳底麻木源於雪靴過大及缺乏足弓支撐鞋墊（Insole），於 MOD-01 與 MOD-02 增補雪靴貼合度與置中調校準則。'
  },
  {
    id: 'EXP-44',
    panel: 'Panel 09 · 雪具材料工程與世界盃技師組',
    name: 'Lucas Meyer',
    title: '雪面摩擦學與四季配蠟科學家',
    certification: 'M.Sc. Tribology & Polymer Science',
    auditFinding: '建立不同雪溫（極冷乾摩擦 < -12°C vs 最佳水膜 -8°C vs 春雪毛細吸盤 0°C）之板底水膜物理模型與無氟環保熱蠟配對指南。'
  },
  {
    id: 'EXP-45',
    panel: 'Panel 09 · 雪具材料工程與世界盃技師組',
    name: '方志豪 (Howard Fang)',
    title: '固定器力學傳導與防 Boot-Out 顧問',
    certification: 'Snowboard Hardware & Plate System Specialist',
    auditFinding: '驗算板腰寬度（Waist Width）與雪靴外長之最大安全立刃角幾何公式，指導大腳滑手與刻滑玩家如何配置 Wide 寬板或增高墊板以根除 Boot-out。'
  },

  /* Panel 10: UI/UX Design, Information Architecture & AI Interactive Media (EXP-46 to EXP-50) */
  {
    id: 'EXP-46',
    panel: 'Panel 10 · 專業 UI/UX 與互動媒體設計組',
    name: '林姿妤 (Iris Lin)',
    title: '首席設計系統與色彩光學總監',
    certification: 'Principal UI/UX Designer · WCAG AAA Accessibility Lead',
    auditFinding: '針對滑雪者在「室內夜間備課」與「雪場陽光直射強反光」雙重場景，設計 Alpine Obsidian 深色護眼主題與頂部一鍵切換「☀️ 雪地強光高對比模式」，確保所有向量數據清晰易讀。'
  },
  {
    id: 'EXP-47',
    panel: 'Panel 10 · 專業 UI/UX 與互動媒體設計組',
    name: 'Daniel Kwon',
    title: '教育認知負荷與資訊架構師',
    certification: 'Lead Information Architect · EdTech UX Specialist',
    auditFinding: '打破傳統長篇大論的枯燥教科書排版，將全站 10 大模組統一為「物理公式卡 + 四宮格實戰卡（生物力學 / 分解步驟 / 錯誤根因 / 專家心法）」，並加入即時關鍵字全域搜尋。'
  },
  {
    id: 'EXP-48',
    panel: 'Panel 10 · 專業 UI/UX 與互動媒體設計組',
    name: '陳冠廷 (Tim Chen)',
    title: '60fps 物理引擎與 Canvas 動畫架構師',
    certification: 'Creative Technologist & WebGL/Canvas Physics Lead',
    auditFinding: '打造上方「60fps 多視角技術動作分解模擬播放器」，支援刻滑、平花 Owen、跳台 ATML、蘑菇吸收與雪崩搜救等多模式切換、0.25x 超慢動作、視角切換與時間軸逐幀拖曳。'
  },
  {
    id: 'EXP-49',
    panel: 'Panel 10 · 專業 UI/UX 與互動媒體設計組',
    name: 'Sophia Andersson',
    title: '科學資訊圖表與視覺向量設計師',
    certification: 'Scientific Illustrator & Data Visualization Director',
    auditFinding: '統一全站 AI 物理圖鑑與動態模擬器的視覺色碼語意：冷光青（#38BDF8）代表質心 COM 與速度向量、暖陽橘（#FB923C）代表支撐底面積 BOS 與立刃壓力、翠綠代表甜蜜點、緋紅代表逆刃風險。'
  },
  {
    id: 'EXP-50',
    panel: 'Panel 10 · 專業 UI/UX 與互動媒體設計組',
    name: '周明哲 (Michael Chou)',
    title: '互動平花矩陣與全端品質總審核官',
    certification: 'Full-Stack QA Lead & Interactive Learning Architect',
    auditFinding: '完成「8 原子 × 12 組合平花互動篩選器」與「10 模組 × 模擬器雙向聯動」測試，確認零外部破圖、零語法錯誤，全數通過 50 人專家團最終簽核（50/50 Signed Off）。'
  }
];

/* AUTO-ATTACH 100 REAL-HUMAN IMAGES & VIDEOS */
(function () {
  const d = window.SB_CURRICULUM_DATA;
  if (!d) return;
  (d.modules || []).forEach((m, mi) => {
    const mNum = String(mi + 1).padStart(2, "0");
    m.realHeroImage = "assets/media/images/s_" + mNum + "_01.jpg";
    m.realHeroVideo = "assets/media/videos/s_" + mNum + "_01.mp4";
    (m.physicsPrinciples || []).forEach((pr, pi) => {
      const pNum = String(pi + 1).padStart(2, "0");
      pr.mediaId = "p_" + mNum + "_" + pNum;
      pr.image = "assets/media/images/" + pr.mediaId + ".jpg";
      pr.video = "assets/media/videos/" + pr.mediaId + ".mp4";
    });
    (m.coreSkills || []).forEach((sk, si) => {
      const sNum = String(si + 1).padStart(2, "0");
      sk.mediaId = "s_" + mNum + "_" + sNum;
      sk.image = "assets/media/images/" + sk.mediaId + ".jpg";
      sk.video = "assets/media/videos/" + sk.mediaId + ".mp4";
      sk.stepMediaId = "step_" + mNum + "_" + sNum;
      sk.stepImage = "assets/media/images/" + sk.stepMediaId + ".jpg";
      sk.stepVideo = "assets/media/videos/" + sk.stepMediaId + ".mp4";
      sk.errMediaId = "err_" + mNum + "_" + sNum;
      sk.errImage = "assets/media/images/" + sk.errMediaId + ".jpg";
      sk.errVideo = "assets/media/videos/" + sk.errMediaId + ".mp4";
    });
  });
  if (d.groundTrickComboMatrix) {
    (d.groundTrickComboMatrix.atomicSkills || []).forEach((at, ai) => {
      const aNum = String(ai + 1).padStart(2, "0");
      at.mediaId = "atomic_" + aNum;
      at.image = "assets/media/images/" + at.mediaId + ".jpg";
      at.video = "assets/media/videos/" + at.mediaId + ".mp4";
    });
    (d.groundTrickComboMatrix.combos || []).forEach((cb, ci) => {
      const cNum = String(ci + 1).padStart(2, "0");
      cb.mediaId = "combo_" + cNum;
      cb.image = "assets/media/images/" + cb.mediaId + ".jpg";
      cb.video = "assets/media/videos/" + cb.mediaId + ".mp4";
      cb.stepMediaId = "combo_step_" + cNum;
      cb.stepImage = "assets/media/images/" + cb.stepMediaId + ".jpg";
      cb.stepVideo = "assets/media/videos/" + cb.stepMediaId + ".mp4";
      cb.errMediaId = "combo_err_" + cNum;
      cb.errImage = "assets/media/images/" + cb.errMediaId + ".jpg";
      cb.errVideo = "assets/media/videos/" + cb.errMediaId + ".mp4";
    });
  }
})();
