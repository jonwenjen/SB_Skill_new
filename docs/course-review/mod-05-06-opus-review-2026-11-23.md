> Human-readable extraction of the `result` field from Claude output `carving_freestyle.json` (run `run-20261123-122432-full`; raw JSON archived locally). This is a proposal record, not coach, medical, or safety approval. The run completed 3/5 roles; see the audit status for scope and limits.

# MOD-05、MOD-06 唯讀內容稽核報告

我沒有修改任何檔案。這次工作階段停用了 Bash，所以 `scripts/run_course_review.py`、`scripts/build_animation_specs.py` 和單元測試都沒有執行。也因為不能寫檔，我無法建立 plan file，報告直接寫在這裡。

**結論：**
- 最需要優先處理的是 MOD-06 的兩處用刃互相矛盾：COMBO-01 的「Up-hill Edge Raised (下坡刃微翹)」，以及 Drive Spin 停轉時要鎖哪一側的刃。
- MOD-05 歐式貼地刻滑的向心加速度單位錯了：寫成 5.67 m/s²，依原稿自己的公式應約為 55.6 m/s²（約 5.7 g）。
- 外部來源只支持兩件事：理想化條件下的刻滑半徑公式，以及「手腕是單板最常見受傷部位」。原稿其餘的精確數字、招式定義和專家署名，我都找不到可開啟的可靠來源。

**範圍：**
- Repo：分支 `feat/snowboard-course-review-skill`，commit `9bc25ba977ef584897391b91f414afeac64273f3`
- `js/curriculum_data.js`：MOD-05（第 696–839 行）、MOD-06（第 841–984 行）、`groundTrickComboMatrix`（第 1572–2145 行）、相關專家資料 EXP-05、12、13、16–25（第 2150–2358 行）
- 資料流向：`js/app.js:440–462` 與 `js/app.js:762–807`、`index.html:251–300`、`index.html:386–457`、`js/simulators.js:991–1014`、`README.md`
- 存取日期：2026-11-23

---

## 一、發現事項（MOD-05 刻滑）

**F01｜high｜CONTRADICTED**：`js/curriculum_data.js:732`，以及 `:2300`（EXP-18）
- 原稿：「`v_min = √(g · R_eff · tan(θ_laydown))  |  當 θ = 80° 時需 a_centripetal ≥ 5.67 m/s²`」
- 證據：
  - 依原稿自己的公式，a_c = g·tan80° ≈ 9.81 × 5.671 ≈ **55.6 m/s²（約 5.7 g）**。5.67 只是 tan80° 的值，原稿把它誤當成加速度。
  - Jentschura & Fahrbach 的理想刻滑模型給出 R = R_SC cos φ（式 6）。照原稿 8 m 側切的例子，80° 時 R 約 1.39 m，需要的速度約 8.8 m/s，向心加速度約 5.7 g。
  - EXP-18 寫「驗算 MOD-05 極限貼地刻滑…最小向心力速度門檻」，與這個計算錯誤互相矛盾。
- 建議：刪除「5.67 m/s²」這個精確門檻，標為待核驗。EXP-18 的「已驗算」敘述不應保留成已驗證。
- 核可：需要合格教練，物理部分也需要專業人士。

**F02｜medium｜CONTEXT_DEPENDENT（cos 部分）／UNVERIFIED（坡度項）**：`:714`、`:716`；另見 `js/simulators.js:996–997`
- 原稿：「`R_eff = R_sidecut · cos(θ_edge) / cos(α_slope)`」，說明文字寫「在受壓彎曲（Reverse Camber Decambering）下，有效轉彎半徑會瞬間縮小一半」。
- 證據：
  - 來源的式 (6) 與式 (28) 只有 R = R_SC cos φ，沒有「/cos(α_slope)」這一項。
  - 該模型假設沒有滑移，也不模擬雪板形變。
  - 原稿第 716 行的說明和模擬器都省略了坡度項，與第 714 行不一致。
  - 6.9 m、4.0 m、2.1 m 三個數值，在 cos 公式下算術是一致的。
- 建議：坡度項標為待核驗。註明這只是理想化模型，不能涵蓋板身受壓形變的效果。
- 核可：需要教練或物理審查。

**F03｜medium｜CONTEXT_DEPENDENT**：`:732–734`
- 原稿：「入彎初速 v 必須足夠高…撐住 75°–82° 的極限傾角」
- 證據：
  - 同一篇論文指出，速度明顯超過 v_limit = √(g R_SC cos α)（式 36）時，就無法維持理想刻滑。也就是說，速度也有上限，不只有下限。
  - 論文的傾角在式 (6) 指雪板面相對坡面的角度，在式 (28) 指質心連線的傾角，兩者並未完全調和。
  - 原稿把雪板立刃角直接當成身體傾角代入 tanθ，但同章又教折角／外向傾，兩者前提衝突。
- 建議：刪除「v_min」這種單向門檻的說法，改為「模型假設待核驗」。
- 核可：需要教練。

**F04｜high｜UNVERIFIED（部分 CONTEXT_DEPENDENT）**：`:815–829`（歐式貼地刻滑）
- 原稿：
  - 「坡度 18°–25°…時速 40–50 km/h」
  - 「前臂與胸口順勢平貼於雪面上滑行」
  - 「85% 的重量永遠在雙腳鋼邊上，手套貼雪只承受不到 15%」
  - 「立刃角高達 78°–85°」
  - 膝 85°、160°，髖 165°
- 證據：
  - 這些數字我找不到可開啟的來源。
  - 「必先做盲區回頭掃描」與 NSAA 責任守則第 1、2、4 條方向一致：保持控制、下方的人有優先權、出發或匯入前看上方。但守則沒有規定每個彎都要回頭看。
  - 守則第 1 條要求「必須能停下或避開他人」。原稿在高速下指示身體貼地，與這條的關係需要教練判斷。
  - 本段完全沒有護具或教練監督的門檻。
- 建議：保留原文，標 `needs_coach_review`。刪除或改標「85/15 鐵律」等精確數字，不要自行補新的指令。
- 核可：需要教練；受傷風險部分建議醫療人員一併審查。

**F05｜medium｜CONTEXT_DEPENDENT**：`:818`
- 原稿：「必須使用寬板（Waist ≥ 260mm）或增高墊板（Riser Plate）避免固定器觸雪」
- 證據：沒有開到權威來源。一份非權威的愛好者彙整（alpinecarving.com）建議用調大固定器角度等方式處理 boot-out，可見「必須」加上單一門檻值的說法沒有依據。我沒有把這份資料當作證據。
- 建議：刪除「必須」和 260mm 這個門檻，改為「依鞋碼、角度、板寬而定，待核驗」。
- 核可：需要教練或器材專業人士。

**F06｜medium｜CONTRADICTED（內部）＋UNVERIFIED**：`:710` 對照 `:746`
- 原稿：第 710 行寫「Zero Lateral Skid…板尾 100% 沿著板頭切開的 2 公釐細溝」，第 746 行寫「寬度不超過 2 公分的深溝」。
- 證據：「2 公釐」和「2 公分」互相矛盾。來源中的「理想刻滑」是模型假設，不是說實際的彎完全沒有側滑。
- 建議：刪除精確寬度，並把「零滑移」「100%」這類絕對說法標為待核驗。
- 核可：需要教練，因為這是技術檢核標準。

**F07｜medium｜UNVERIFIED**：`:722`、`:765`
- 原稿：
  - Cross-under「換刃時間縮短 60%」
  - Cross-through「（日本技術選稱「谷回りへの抜け」）」
  - 參照「CASI Cross-Under · SBINZ Vertical Retraction」
- 證據：
  - CASI Reference Guide 我沒能開啟。SBINZ Manual 2017 PDF 回傳 404，NZSIA 學習頁回傳 403。
  - 前述非權威網站把 cross-through 定義為「cross-over 與 cross-under 的結合」，與原稿不同，可見各處定義不一致。
- 建議：刪除「60%」。術語定義和機構對照都標為待核驗。
- 核可：需要教練。

**F08｜medium｜UNVERIFIED**：`:725–728`、`:2284`（EXP-16）
- 原稿：「谷回り…就已經把質心大膽丟入彎內建立 60° 以上高立刃角」
- 證據：用日文搜尋時，找不到可開啟的 JSBA 或 SAJ 正式教材，來說明谷回り、山回り的定義或 60° 這個數字。
- 建議：術語和「60° 以上」都標為待核驗。
- 核可：需要教練（JSBA 體系）。

**F09｜medium｜UNVERIFIED**：`:744–745`、`:749`、`:768–769`、`:792–794`、`:816–817`
- 原稿：
  - 「踝 38° · 膝 115° · 髖 110°」
  - 「約 25 km/h…耐心等待 1.5 秒」
  - 「膝屈曲最深（95°）」「膝 135°–145°」「承受高達 2.0G」
  - 「前腳 60%…後腳 60%」
- 證據：這些數字都沒有可開啟的來源。
- 建議：移除精確數值，或統一標為「原稿數值待核驗」。
- 核可：需要教練。

**F10｜high｜UNVERIFIED／CONTEXT_DEPENDENT**：`:774`
- 原稿：「在紅線中高速滑行，出彎瞬間不要往上站起來…主動…把雙膝『往上抽向胸口』」
- 證據：NSAA 守則第 1 條要求「必須能停下或避開他人」。原稿沒有地形、人流或監督的條件限制。
- 建議：標 `needs_coach_review`，不要自行加速度限制。
- 核可：需要教練。

**F11｜high｜UNVERIFIED**：`:794`、`:797`、`:799`、`:800`、`:808`
- 原稿：
  - 「即使在硬雪與冰面上也絕不發生後刃抽動滑脫」
  - 「+24°/+9° 或 +27°/+12°」
  - 「主動將後腳膝蓋朝前腳膝蓋後方靠攏下壓，這會形成強大的機械鎖定」
  - 「將彎外（山谷側）的肩膀微向下壓」
  - 「瞬間從 45 度突破到 75 度」
- 證據：
  - 都沒有來源。
  - 「絕不」「瞬間」是過度保證。
  - 主動內收膝蓋涉及膝關節負荷，我無法核實。
  - 一個彎的外側並不一直是下坡側，「彎外＝山谷側」這個對應有歧義。
- 建議：刪除絕對保證的說法。膝部提示交給專業人員審查，術語標為待釐清。
- 核可：需要教練；膝部提示建議運動醫學或物理治療人員審查。

## 二、發現事項（MOD-06 平花）

**F12｜high（建議最優先）｜CONTRADICTED（內部）**：`:1702`（COMBO-01 Phase 3，難度 Lv.1）
- 原稿：用刃欄寫「`Up-hill Edge Raised (下坡刃微翹)`」
- 證據：英文說抬起上坡刃，括號卻說抬起下坡刃，兩者相反。第 877–879 行的防摔鐵律是「永遠抬起下坡側鋼邊」。初學者照英文標籤做，等於把重量壓在下坡刃上。
- 建議：保留原文，標 `needs_coach_review`，由教練決定正確的標籤。
- 核可：需要教練。

**F13｜high｜CONTRADICTED（內部）**：`:939`、`:945` 對照 `:1840`、`:1846`、`:1864`
- 原稿：
  - 第 939 行：「Frontside Drive Spin：由 Heelside 刻滑入刃 ➔…➔ Toeside 鎖刃停住」
  - COMBO-05 第 1840 行的 edgeLogic：「原刃鎖定」
  - Phase 1 第 1846 行寫 FS 用「Heelside 35°」，Phase 4 第 1864 行卻寫「Toeside 30° 強力鎖死」
- 證據：360 轉完後要鎖哪一側的刃，同一份資料給了互相衝突的答案。這一點直接決定會不會卡刃。
- 建議：標 `needs_coach_review`。
- 核可：需要教練。

**F14｜medium｜CONTRADICTED（內部）**：`:861`、`:867`，對照 `:896`、`:1684`、`:1723`、`:1729`、`:2113`、`:2119`；另見 `index.html:280`
- 原稿：
  - 第 867 行：「嚴禁 Flat Base 無支點空甩」
  - 第 861 行：Ollie/Nollie「這是高轉速 540/720 的唯一物理來源」
- 證據：
  - 多個招式本身就用平底：COMBO-01 第 1684 行「Nose Flat Point」、COMBO-02 第 1723 行「Flat / 微 Toeside」、COMBO-12 第 2119 行「Nose Flat Butter」，第 896 行也寫「板底平放」。
  - 第 867 行和第 873 行又把鋼邊支點和預轉列為角動量來源，與「唯一物理來源」矛盾。
- 建議：刪除「唯一」「嚴禁」這類絕對用語，交給教練統一說法。
- 核可：需要教練。

**F15｜medium｜CONTEXT_DEPENDENT**：`:867`、`:871`、`:873`
- 原稿：
  - 「`L_total = I_upper · ω_upper + I_lower · ω_lower = 0 (無外力矩空中反擰守恆)`」，卻套用在第 873 行的「落地或壓板後」。
  - 「100% 轉化為旋轉角速度 ω」
- 證據：這是物理推論，沒有開來源。角動量守恆只在不受外力矩時成立，在雪面上不適用。「100%」是過度陳述。
- 建議：限定只用在空中，刪除「100%」。
- 核可：需要教練或物理審查。

**F16｜medium｜部分 SUPPORTED／部分 UNVERIFIED**：`:855`
- 原稿：「90% 的自學者…頻繁發生逆刃腦震盪或手腕骨折」
- 證據：
  - SUPPORTED 的部分：Kim 等人（AJSM 2012）指出「The most common type of injury for snowboarders was a wrist injury」，佔單板傷害的 27.6%，且單板的腦震盪比雙板多。Slaney 等人（MJA 2008）寫手腕佔所有單板傷害的 21.6%。
  - 「90% 自學者」以及把傷害歸因到平花，都沒有來源。
- 建議：刪除「90%」，傷害敘述改為引用可查證的研究。
- 核可：需要醫療人員。

**F17｜medium-high｜缺漏（有證據支持的提案）**：MOD-06 全章，第 841–984 行
- 證據：
  - 全章教旋轉和盲落地，卻沒有任何護具說明。
  - Rønning 等人（AJSM 2001）做了 5,029 人的隨機試驗，戴護腕組有 8 例手腕受傷，對照組有 29 例。結論為「wrist braces are effective in protecting snowboarders against wrist injury」。
  - Slaney 等人建議初學者使用護腕，但也觀察到護腕與較多肘部軟組織傷有關聯。
- 建議：另外提出「護具說明」的修正提案。具體寫法由教練和醫療人員決定。
- 核可：需要教練與醫療人員。

**F18｜medium｜UNVERIFIED＋多處 CONTRADICTED（內部）**：招式定義，第 956–977、1833–2104 行
- 原稿：Owen、Sone、Andy 540、Drive Spin、Compass 的拆解方式。
- 證據：
  - 搜尋不到可開啟的權威定義，日文搜尋結果都是無關內容。
  - 內部不一致：
    - 反擰角在第 962 行和第 2350 行寫「±55°」，第 1958 行寫「-65°」。
    - Sone 在第 966 行寫「180/360」，第 1914 行只寫 360°。
    - 第 968 行寫「540 度空中旋轉」，但第 2003 行的第一段是貼地的 Nose Roll。
    - COMBO-03 名稱有「Indy Grab」，但各階段都沒有抓板。它的 formula 列出 Shifty（第 1759 行），atomicComponents 卻是 Reverting Edge Lock（第 1760 行）。
- 建議：招式定義整體標為待核驗，由教練統一數字。
- 核可：需要教練。

**F19｜high｜UNVERIFIED**：COMBO-09、COMBO-10，第 1989–2065 行
- 原稿：Switch Nollie 360、Nollie BS 540 和盲落地。原稿自己的失敗模式寫著「頭下腳上的失控背摔」（第 2063 行）。
- 證據：沒有任何先備條件、場地、護具或監督的門檻，相關進程也沒有來源。
- 建議：標 `needs_coach_review`。
- 核可：需要教練。

**F20｜medium｜UNVERIFIED＋內部不一致**：
- 原稿：
  - 第 860 行「1.6x–2.2x」
  - 第 929 行與第 1599 行「強上 40%／高 40%」
  - 第 913 行「0.15 秒…165°」
  - 第 962 行「0.4 秒週期」
  - 第 891 行「85% / 15%」「95% / 5%」
- 內部不一致：
  - Drive Spin 前腳配重在第 938 行寫 85%、第 943 行寫 80%、第 1852 行寫 88%。
  - 翹起高度在第 894 行寫 30 公分，第 1611 行與第 1735 行寫 25cm。
- 建議：移除精確數字，或統一標為待核驗。
- 核可：需要教練。

## 三、權威與署名宣稱

**F21｜high｜UNVERIFIED**
- 原稿：
  - 第 855 行：「本教材由日本 JSBA 平花大賽冠軍與自由式生物力學專家聯合拆解」
  - expertMindset 的署名，如「— CASI Lv4 與 AASI 刻滑專家小組」「— 50人專家團日系平花總教練組」（第 760、784、808、832、906、929、953、977 行）
  - EXP-16 到 EXP-25 的具名人物，例如第 2283 行的「全日本技術選 3度優勝」
  - 第 703 行與第 710 行把真實人物 Ryan Knapton 與 CASI Lv4 並列
- 資料流向：
  - `js/app.js:447` 已把這些內容標成「原稿提示（待來源與教練核實）」，但署名仍會顯示。
  - `js/app.js:799` 對每張專家卡都輸出「✓ 教材 · 真人圖解 · 正誤連續影片 驗收通過」。這些卡片放在 `index.html:452` 與 `index.html:457` 的隱藏容器中，但仍然存在於 DOM 裡。
  - F01 的計算錯誤也直接駁斥了 EXP-18 的「已驗算」說法。
- 建議：在身分、資格、同意和日期都查證之前，移除或改標這些署名。
- 核可：需要專案負責人處理身分與授權，這不屬於教練職權。

**F22｜low｜CONTRADICTED（內部，編輯問題）**：第 848 行與第 855 行，對照第 1576–1672 行、第 977 行、第 2326 行、`index.html:258`
- 原稿寫「6 Atomic Skills／六大基礎原子技能」，但資料裡實際有 8 個原子技能，第 977 行和 `index.html:258` 也寫「8」。
- 「四大法則」在第 855 行和 `index.html:258`、`:280` 的寫法也不同。

---

## 四、可直接做的低風險文字修正

這些只修字或格式，不改變任何技術意涵：
1. `index.html:258`：「与」改為「與」。
2. `index.html:277`：「黄金」改為「黃金」。
3. `js/curriculum_data.js:906`：`        },` 的縮排改為 6 格，與相鄰物件一致。
4. `js/curriculum_data.js:968`：「540 度空中旋轉」刪去「空中」，與同一段的貼地 Nose Roll 一致。招式本身的定義仍待核驗。
5. F22 的「六大」與 8 個原子技能不一致：需要先由編輯決定採用哪一套分類，才能改數字。如果要改寫技能清單本身，就需要教練核可。

## 五、需人工核准（待教練核可，`needs_coach_review`）

- **優先**：F12（用刃標籤矛盾）、F13（Drive Spin 鎖刃）、F01（加速度單位與 EXP-18）
- **高**：F04（歐式貼地刻滑）、F10（紅線高速練習）、F11（後刃提示，含膝部）、F19（Pro 級旋轉缺門檻）
- **中**：F02、F03、F05、F06（2 公釐與 2 公分）、F07、F08、F09、F14、F15、F18、F20
- **需醫療人員一併審查**：F16（傷害統計）、F17（護具提案）、F11 的膝部提示、F04
- **需專案負責人處理**：F21（署名、身分與授權）

## 六、未能核驗清單

- 第 744–829 行與第 888–1000 行中所有關節角度、配重百分比、G 值、速度、秒數和高度
- 谷回り、山回り的定義；「谷回りへの抜け」；cross-through 的定義；「縮短 60%」
- CASI、AASI、SBINZ、JSBA 的對照名稱（`casiAasiRef`、`systemsRef`）
- Owen、Sone、Andy 540、Drive Spin、Compass 的招式定義
- 「Waist ≥ 260mm」、「85/15 鐵律」、「1.6x–2.2x」、「40%」、「90% 自學者」
- 所有專家身分、證照與簽核宣稱，以及 Ryan Knapton 與 CASI 的關聯
- **沒能開啟的來源**：
  - Russell 等人的護腕系統性回顧：PubMed 有 cookie 牆，只看到搜尋摘要，沒有當作證據。
  - NSAA 舊網址回傳 404。
  - SBINZ Manual 2017 PDF 回傳 404。
  - NZSIA 學習頁回傳 403。
  - CASI Reference Guide 沒有開啟。
  - JSBA 正式教材和日文平花來源都找不到。
  - Kim 2012 只讀到摘要，沒有全文。

## 七、參考來源（存取日期 2026-11-23）

- Jentschura U.D. & Fahrbach F., "Physics of Skiing: The Ideal-Carving Equation and Its Applications", *Can. J. Phys.* 82(4):249–261 (2004), arXiv:physics/0310086 — [ar5iv 全文](https://ar5iv.labs.arxiv.org/html/physics/0310086)。用於式 (6)、(28)、(36)、(40)，以及理想刻滑的定義與模型假設。
- NSAA, *Your Responsibility Code* (2022) — [nsaa.org/safety](https://www.nsaa.org/safety/)。用於第 1、2、4 條。
- Kim S. et al., "Snowboarding injuries: trends over time and comparisons with alpine skiing injuries", *Am J Sports Med* 40(4):770–776 (2012), PMID 22268231 — [Europe PMC 摘要](https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1177/0363546511433279&resultType=core&format=json)
- Rønning R. et al., "The efficacy of wrist protectors in preventing snowboarding injuries", *Am J Sports Med* 29(5):581–585 (2001) — [Europe PMC 摘要](https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:11573916%20AND%20SRC:MED&resultType=core&format=json)
- Slaney G.M. et al., "Wrist guards and wrist and elbow injury in snowboarders", *Med J Aust* 189(7):412 (2008)，致編輯信 — [MJA](https://www.mja.com.au/journal/2008/189/7/wrist-guards-and-wrist-and-elbow-injury-snowboarders)
- 非權威資料，只用來說明各處定義不一致，沒有當作證據：The Carver's Almanac — [alpinecarving.com/technique.html](https://www.alpinecarving.com/technique.html)
