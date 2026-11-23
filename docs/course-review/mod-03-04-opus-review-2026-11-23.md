> Human-readable extraction of the `result` field from Claude output `biomechanics_progression.json` (run `run-20261123-122432-full`; raw JSON archived locally). This is a proposal record, not coach, medical, or safety approval. The run completed 3/5 roles; see the audit status for scope and limits.

我完成了 MOD-03 和 MOD-04 的唯讀審查，沒有修改任何檔案。本來應該寫 plan 檔，但這個工作階段沒有可用的寫檔工具，所以完整報告直接列在下面。

# MOD-03／MOD-04 唯讀內容稽核報告（2026-11-23）

## 範圍與方法
- **版本**：分支 `feat/snowboard-course-review-skill`，HEAD `9bc25ba`（取自工作階段開始時的 git 快照，我沒有另外執行 git）。
- **審閱的檔案**：
  - `js/curriculum_data.js`：第 400–694 行（兩個模組），以及引用 MOD-03／04 的 `experts50` 資料（第 2150–2209 行）。
  - `index.html`：第 386–457 行。
  - `js/app.js`：第 439–460 行、第 760–806 行。
  - `js/simulators.js`：第 105 行。
- **實際開啟並讀完的來源**（存取日期 2026-11-23）：
  - **[A]** PSIA-AASI《AASI Snowboard Certification Standards》（Updated September 2026），全 19 頁。
  - **[C]** CASI《QuickRide Teaching Guide》（©2026），全 32 頁。
  - **[K]** Komissarov,〈Balanced carving turns in alpine skiing〉，*Sports Biomechanics* 22(9):1209–1242，同行評審，我讀的是作者接受稿。這是滑雪模型，作者在 p.29 說明也可套用到單板。
- **無法開啟或沒有開啟的來源**：
  - SBINZ／NZSIA 的頁面回傳 HTTP 403，無法讀取。
  - BASI、JSBA 的教材和 AASI《Snowboard Technical Manual》都沒有開啟。
  - repo 內既有的 `docs/course-review/mod-03-04-review-2026-11-23.md` 只作參照，不當證據；下面的每一項都由我自己重新核對來源。
  - 搜尋結果的摘要沒有拿來當證據。

## 發現項目

### MOD-03

**F1｜中｜CONTRADICTED（BOS 定義）／UNVERIFIED（1.2 mm）｜需教練核可**
- **位置**：`summary`，`js/curriculum_data.js:414`
- **原文**：「BOS（Base of Support 支撐底面積，即當前與雪面接觸的那條約 1.2 公釐寬的鋼邊或板底）」
- **證據**：[C] p.11 寫的是 "The COM stays closer to the centre line of the board (the BOS)"，也就是說 CASI 用「板的中線」來指 BOS，不是固定寬度的鋼邊。我開啟的來源都沒有 1.2 mm 這個數字。
- **建議**：刪除 1.2 mm，或標成「待核驗」；BOS 的定義交給教練決定。

**F2｜高｜CONTRADICTED（作為通用公式）｜需力學審查者與教練核可**
- **位置**：`physicsPrinciples[0].formula`，`:418`
- **原文**：`tan(θ_eq) = F_centrifugal / F_gravity = v² / (g · R_eff · cosα)`
- **證據**：[K] p.9 式(25) 的完整形式是 `tan Φ = v²/(gR cosα) − tan α cos β`。教材少了 `−tanα·cosβ` 這一項，只有在 β=90°（正沿滾落線移動）時兩式才相等。
- **建議**：把公式標成「待核驗」，或註明只適用於滾落線；不要自行改寫成新公式。

**F3｜高｜CONTEXT_DEPENDENT｜需教練核可**
- **位置**：`:414`、`:420`
- **原文**：「合向量…永遠精準穿過正在工作的鋼邊」；「總合力向量 F_total 必須精準穿過工作鋼邊…若小於平衡角，就會被離心力甩出彎外或發生逆刃」
- **證據**：
  - [K] p.10 確實是在「力矩平衡」的假設下，讓 Fn 與有效重力沿著質心到鋼邊的連線作用。
  - 但同一篇摘要說這個假設 "too restrictive"；p.32 說 "in reality the balance can be only approximate"；換刃過渡期則寫 "a skier cannot not be in balance"（原文措辭照錄，意思是換刃時滑手無法處於平衡）。
  - 「發生逆刃」這個後果沒有任何來源支持。
- **建議**：標明這是簡化模型，刪除「永遠／精準」，並把「逆刃」標成待核驗。

**F4｜中｜大致 SUPPORTED，「最大」為 UNVERIFIED｜需教練核可**
- **位置**：`physicsPrinciples[1]`，`:424–426`
- **原文**：「將質心拉回雪板上方以保住最大抓地壓力！」
- **證據**：
  - [C] p.11："Angulation… increase the edge angle while maintaining balance over a relatively small base of support"。
  - [K] p.25：折角帶來 "a better safety margin against accidental side-slipping"，且 Θ = Ψ − Φ，和教材的公式相同。
  - [K] p.28–29 也指出，強折角時骨架不再疊直，"increased risk of injury"。
- **建議**：保留定性說明，刪掉「最大」。

**F5｜中｜CONTEXT_DEPENDENT｜建議教練核可**
- **位置**：`:410`（"AASI 4×3 Matrix"）、`:430–432`
- **原文**：「AASI 四大雪板性能」；「任何彎形都是這四種板性能的排列組合」
- **證據**：
  - [A] p.16 列的是 6 項 Snowboard Technical Fundamentals：板長方向的 COM/BOS、板寬方向的 COM/BOS、壓力大小、tilt、pivot、twist。
  - 「四大」這個說法和「4×3 Matrix」在 [A] 裡都找不到；AASI Technical Manual 我沒有開啟，所以列為 UNVERIFIED。
  - 另外，`ω_z` 是角速度符號，卻被標成「偏航角」，屬於低嚴重度的記號不一致。
- **建議**：註明「四項」是教材自己整理的架構，或改列 AASI 的六項。

**F6｜高｜UNVERIFIED｜需教練核可**
- **位置**：`physicsPrinciples[3]`，`:436–438`
- **原文**：「必須在換刃瞬間創造『短暫減重期』」；「當 a_z < 0 時正壓力 N 瞬間下降實現零阻力換刃」；「質心高度不變」
- **證據**：
  - [C] p.11 談壓力的 "Create & Release"；p.18 的 Novice Turns 寫 "'release' the COM before, and flex after the fall line"。
  - [A] p.16 寫 pivot／twist 是透過 flexion/extension 與 rotation 來控制。
  - 這些來源都沒說「每次換刃都必須減重」。
  - 就公式本身來看，只有 a_z = −g·cosα 時 N 才會等於 0，所以「零阻力」是過度宣稱。
- **建議**：刪除「必須」和「零阻力」，整段標成待核驗。

**F7｜低｜內部不一致／UNVERIFIED**
- **位置**：`:406`、`:410`、`:414`
- **問題**：標題寫「三大身體運動」，`systemsRef` 卻寫 "SBINZ 4 Movements"。SBINZ 原文因 403 無法讀取，所以無法核實。

**F8｜中｜UNVERIFIED，部分有張力｜需教練核可**
- **位置**：`coreSkills[0]`，`:447–449`、`:455`
- **原文**：「踝關節 40% · 膝關節 40% · 髖關節 20%」；「第二薦椎 S2 前方」；「前腳 60% / 後腳 40%」；「與固定器連線平行」；「視線平視前方 15 公尺」
- **證據**：[C] p.10 寫的是 "ankles, knees, and hip joints equally flexed"、"Body weight distributed evenly between both feet"、"Shoulders and hips positioned square to the front foot angle"、"Arms relaxed… alongside the body"。
- **判斷**：
  - 40:40:20 和 CASI 的 "equally" 有張力，而且教材沒定義這個百分比是什麼的比例。
  - S2、60/40、15 m 都沒有來源。
- **建議**：刪除精確數字，或標成待核驗。

**F9｜高（安全）｜CONTEXT_DEPENDENT｜需教練核可**
- **位置**：`coreSkills[1].stepByStep[2]`，`:479`
- **原文**：「【J-Turn 閉眼感知】…感受兩側立刃角達到 45° 時…」
- **證據**：
  - [C] p.5 雪場行為準則第 1 條："Always stay in control. You must be able to stop, or avoid other people or objects."
  - [C] p.10："Head and eyes directed to face the direction of travel."
  - 我開啟的來源都不支持閉眼滑行；45° 也沒有來源。
- **建議**：在教練核可之前，先停用「閉眼」這個要素。我不提出替代練習。

**F10｜中｜UNVERIFIED｜需教練及醫療人員核可**
- **位置**：`:472`、`:484`、`:488`、`:480`
- **原文**：「Heelside 由於踝關節背屈受高背限制」；「Toeside 用踮腳尖（腓腸肌向心收縮）…」；「靠肌肉硬撐三趟就抽筋」；「後輪打滑」
- **判斷**：這幾句是解剖學和抽筋成因的說法，都沒有來源。「後輪」是用詞錯誤，但它是技術用語，改字仍需教練核可。

**F11｜高（安全絕對語）｜概念 SUPPORTED，數字與絕對語 UNVERIFIED**
- **位置**：`coreSkills[2]`，`:496`、`:498`
- **原文**：「壓低 5°–8°…延遲 0.2–0.3 秒」；「零卡刃風險的入彎啟動」
- **證據**：
  - [A] p.16："Control the twist (torsional flex) of the board through flexion/extension and rotation"。
  - [C] p.9 列有 "Turning with the lower body"。
- **建議**：刪除「零卡刃風險」，數字標成待核驗。

**F12｜中｜UNVERIFIED｜需教練核可**
- **位置**：`coreSkills[3]`，`:517`、`:520–522`、`:533`、`:536`
- **原文**：「立刃角 55°–70°，髖…18°–25°，膝…22°」；「1.5G–2.2G」；「最強大的『防滑脫』保險機制」；「身體會自動形成完美的髖部折角」；「0.4 秒」
- **證據**：
  - 我用 [K] 式(31) g-force = cosα/cosΦ 粗估：在 α=15°、身體疊直、Φ=55–70° 的條件下，約為 1.7–2.8 G，和教材的 1.5–2.2 G 對不上。不過折角會讓立刃角和身體傾角脫鉤，所以這只是待推導的疑點，不是結論。
  - [K] 只說折角提供 "better safety margin"（較好的安全邊際），沒有說它是「最強大」的。
  - BASI 和 JSBA 的出處都沒有開啟。

**F13｜高（不實權威）｜UNVERIFIED**
- **位置**：每項技能 `expertMindset` 的署名，`:464`、`:488`、`:512`、`:536`、`:615`、`:639`、`:663`、`:687`（例如「— CASI 國家考官專家小組」、「— 50人專家團…」）；另有 `experts50.auditFinding`，`:2158`、`:2190`、`:2200`，宣稱有人審過 MOD-03／04。
- **證據**：
  - `index.html:391–393` 自己寫明 repo「沒有足以獨立核實專家身分…簽核紀錄」的證據。
  - `app.js:447` 雖然把這些內容標成「原稿提示（待來源與教練核實）」，但署名文字仍然會顯示給讀者。
  - 專家卡片區塊在 `index.html:452–457` 是隱藏的，但資料仍留在檔案裡。
  - `:2200` 把 "Learning Connection Model" 和「四大板性能」掛在一起。[A] p.3 的 Learning Connection 其實是「人際／教學／技術」三種技能的架構。

### MOD-04

**F14｜中｜CONTRADICTED｜低風險文字修正**
- **位置**：`summary`，`:565`
- **原文**：「QuickRide 五步法（Basics ➔ Sliding ➔ Control ➔ Turning ➔ Linking）」
- **證據**：[C] p.12 寫 "5. FLOW — To learn to explore the mountain safely."，第五步是 Flow，不是 Linking。

**F15｜高｜CONTRADICTED（作為通用的初學規則）／UNVERIFIED（100%）｜需教練核可**
- **位置**：`:565`、`:576–577`
- **原文**：「Edge Change BEFORE the Fall Line」；「先用舊鋼邊把板頭轉向滾落線…才試圖換到新鋼邊…產生 100% 的逆刃翻摔」
- **證據**：
  - [C] p.12、p.17 的 Turning 目標是 "To learn to turn (changing edges in the fall line)"，也就是在滾落線上換刃。
  - [C] p.18 Flow 階段說的是在滾落線前 "'release' the COM"（釋放質心），沒有要求在滾落線前完成換刃。
- **建議**：由教練依 QuickRide 各階段重寫換刃時機，並刪除「100%」。

**F16｜高｜CONTEXT_DEPENDENT（內部幾何一致性）｜需教練核可**
- **位置**：`:629`，對照 `:577`
- **原文**：「在緩坡橫滑減速至接近靜止時…同時將重心跨過雪板換到新鋼邊」
- **問題**：板子還橫在坡上時，新鋼邊就是下坡側的那條邊。這和教材自己在 `:577` 警告的「下坡刃迎面撞擊雪流」互相矛盾。這只是幾何上的觀察，我不提出替代的技術指令。

**F17｜中｜公式 UNVERIFIED，定性 SUPPORTED**
- **位置**：`:569`
- **原文**：`F_brake = μ_kinetic · N · sin(θ_edge)`
- **證據**：
  - [K] p.4–5 用的是庫侖摩擦 Ff = μFn，並在 p.2 說雪的反作用力取決於攻角（板身與行進方向的夾角）和立刃角，沒有 sin(θ) 這種形式。
  - [K] p.2 支持定性描述："to halt side-slipping… skiers increase the edge angle"。
- **建議**：刪除公式，或標成「示意」。

**F18｜中｜進程位置 SUPPORTED，數字 UNVERIFIED**
- **位置**：`:596`、`:599–600`、`:604`、`:615`
- **證據**：[C] p.16 的 Control 階段列出 Sideslipping、Pendulum、"Gas Pedal Exercise"。
- **判斷**：「踝 32° · 膝 120° · 髖 115°」、「55%」、「3°–5°」、「學 S 彎只需要 20 分鐘」都沒有來源。

**F19｜中｜CONTEXT_DEPENDENT**
- **位置**：`:620–639`
- **證據**：
  - [C] p.25 有 "Chicken-Out Turns (Garland)"，p.26 有 "Fall-line pivot (garland)"。
  - [C] p.17 的 Turning 練習是 J-Turns、Walking Through Turns、Beginner Turns；教材的進程沒有包含這些。
- **判斷**：「膝 145°／115°」、「60/40」、「前 20% / 後 80%」都沒有來源；「…一條物理定律」是誇大的框架說法。

**F20｜低至中｜SUPPORTED，但有一處 CONTEXT_DEPENDENT**
- **位置**：`:644–659`
- **證據**：
  - 雙膝車頭燈：[C] p.28 有 'Headlight on Knees' Exercise。
  - 上半身穩定：[C] p.26 寫 "quiet upper body"。
  - 用彎形控速：[C] p.18 寫 "Speed = Shape, Size, Slope"。
  - 但 `:659` 把 Counter-rotation（反轉）一律當成錯誤，而 [C] p.10 寫 "Counter rotation is a quick way to pivot the board, for a limited distance"。
- **判斷**：「35°」、「115°–135°」、「4–5 公尺」、「每數 2 秒」都沒有來源。

**F21｜中｜UNVERIFIED｜需教練核可**
- **位置**：`:580–583`、`:671–683`
- **原文**：60:40 ➔ 50:50 ➔ 40:60；「多彎 8°」；「4–5 公分」；「Zero Skid in Apex」；「壓力計讀數」
- **證據**：[A] p.16 只支持 "direct pressure along the length of the board"；[C] p.26 有 "Riding fore, aft, and centred"。兩者都沒有固定百分比。

**F22｜低｜部分 SUPPORTED，另有程式格式問題**
- **位置**：`:587–589`
- **證據**：[K] p.3 寫刻滑時 "angle of attack is almost zero"、"significant reduction of energy dissipation"。
- **判斷**：
  - 12° 這個門檻沒有來源；「位能最大化保留」屬過度宣稱。
  - `:587` 的公式字串包含 `\vec`。在 JS 單引號字串裡，`\v` 會被解析成垂直定位字元（vertical tab），所以畫面會顯示成 `ec{v}…`。

## 1. 可直接做的低風險文字修正
1. `:565`：Linking → Flow（已用 [C] p.12 核對）。
2. `:432`：「侧切」→「側切」（簡體字改繁體）。
3. `:587`：`\vec` 改成 `\\vec` 或純文字記號，改完後要確認畫面顯示正確。
4. `expertMindset` 的署名移除，或標成「未核實」（F13）。這不會改到任何技術內容，但要由內容負責人決定。

## 2. 待教練核可的內容修正
F1–F6、F8–F12、F15–F21，以及 `:480`「後輪」的用詞。我的建議都只限於加註「待核驗」、刪除精確數字或絕對用語；沒有提出任何新的教學指令。

## 3. 未能核驗的清單
- **數字**：1.2 mm、40:40:20、S2、60/40 與 60/40→40/60 的壓力比例、15 m、45°、5°–8°、0.2–0.3 s、55°–70°／18°–25°／22°、1.5–2.2 G、0.4 s、各關節角度、55%、20 分鐘、12°、8°、4–5 cm。
- **體系與術語出處**：SBINZ 四種動作（403 無法讀取）；BASI Central Theme；JSBA「内倒防止」與「外向傾」；AASI Technical Manual 是否用「四大板性」；"AASI 4×3 Matrix"；"AASI Athletic Stance"；"CASI Competency #5"；"BASI Steered Turns"。
- **專家與審查宣稱**：所有專家署名，以及 `experts50` 宣稱的審查結果。
- **程式**：`progression` 動畫模式，我只看到它出現在 `simulators.js:105` 的允許清單裡，沒有往下追查實際畫面。

## 參考來源（存取日期 2026-11-23）
- [A] [AASI Snowboard Certification Standards (Sept 2026)](https://thesnowpros.org/wp-content/uploads/2025/10/AASI_Snowboard_Standards0224_updated_100325_v3.pdf)：p.3、p.16
- [C] [CASI QuickRide Teaching Guide](https://members.casi-acms.com/documents/QuickRideEN.pdf)：p.5、9–12、16–18、25–26、28
- [K] [Komissarov, *Sports Biomechanics* 22(9), doi:10.1080/14763141.2020.1795236（接受稿）](https://eprints.whiterose.ac.uk/168379/1/carving.pdf)：p.2–3、9–10、25、28–29、32
- 補充對照：[Jentschura & Fahrbach, arXiv physics/0310086](https://ar5iv.labs.arxiv.org/html/physics/0310086)。[K] 的參考文獻註明它已刊於 *Can. J. Phys.* 82:249，但期刊版我沒有開啟。
- 有開啟但無法讀取的來源（HTTP 403）：[NZSIA Four Movement Options](https://learning.nzsia.org/?p=16198)、[SBINZ Manual Section B](https://sb-elearning.nzsia.org/sbinz-manual-section-b/)
