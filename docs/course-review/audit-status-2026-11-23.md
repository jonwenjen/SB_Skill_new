# 課程內容審查狀態 — 2026-11-23

## 結論與範圍

**所有 10 個模組現已有唯讀審查覆蓋；但來源逐項核驗、合格專業人士簽核及教練核准仍未完成。本 repo 不可宣稱已通過完整課程、安全或教練審核。** 本文件記錄可追溯的局部發現與待辦；提案不是核准後的教學內容，沒有直接改寫 `js/curriculum_data.js` 的技術／安全指引。

2026-11-23 01:30 的 Claude Code／Opus 執行索引顯示 5 個審查角色中僅 1 個完成：`carving_freestyle`（MOD-05／06）。`foundations_safety`（MOD-01／02）、`biomechanics_progression`（MOD-03／04）、`park_terrain`（MOD-07／08）皆達到 12-turn 上限；`backcountry_integrity`（MOD-09／10）遇到 Claude session limit。06:54 的全角色續跑亦僅 1/5 完成。07:13 的選擇性續跑以 24-turn 上限請求其餘 4 角色，但只完成 `foundations_safety`（MOD-01／02）；另外 3 角色因 Claude session limit 失敗，索引記錄額度於 11:40（台灣時間）重設。三份索引位於 `docs/course-review/run-20261123-0130/index.json`、`docs/course-review/run-20261123-065438/index.json`、`docs/course-review/run-20261123-071334/index.json`；均不能視為完整全課審查。

另有五份獨立唯讀模組配對補充報告；MOD-01／02 的補充只抽查指定高風險主張，不代表整個模組逐項覆核。較新的 Claude run `run-20261123-172606-complete` 完成 4/5 角色（MOD-01–08）；`backcountry_integrity`（MOD-09／10）達 24-turn 上限。單角色重試 `run-20261123-180057-backcountry-retry` 完成 0/1，失敗原因是 Claude session limit，額度重設時間為 22:20（台灣時間）。其後完成一項精簡、有界替代覆核，聚焦五項 MOD-09／10 高風險主張；發現已在 [MOD-09／10 報告](mod-09-10-review-2026-11-23.md)中依程式與一手／同行評審來源核對後整合，但它不等於缺失的 Opus 角色、完整全來源稽核或專業簽核。已保存的人類可讀報告仍以表列文件為準；新的原始 JSON 僅作本機工作檔案，不作為公開審查文件。所有檢視均為唯讀，未改教材或模擬器指引。

| 模組 | 可追溯狀態 |
|---|---|
| MOD-01／02 | 最新 Claude run 有唯讀報告，另有一組獨立複核；詳見 [MOD-01／02 Opus 報告](mod-01-02-opus-review-2026-11-23.md)及 [選定高風險主張核對](mod-01-02-selected-review-2026-11-23.md)。精確傷害比例、生理門檻等仍待醫療／教練核准。 |
| MOD-03／04 | 最新 Claude run 有唯讀報告，另有一組獨立複核；詳見 [MOD-03／04 Opus 報告](mod-03-04-opus-review-2026-11-23.md)及 [有界來源補充報告](mod-03-04-review-2026-11-23.md)。公式條件、協會分類及專家背書仍待核驗／核准。 |
| MOD-05／06 | 最新 Claude run 有唯讀報告，另有一組獨立複核，詳見 [MOD-05／06 Opus 報告](mod-05-06-opus-review-2026-11-23.md)。報告列出 17 項發現；多數是「未核實／情境依賴」，不等於內容已被證明錯誤。 |
| MOD-07／08 | 有界來源審查列出 12 項發現，另有一組獨立複核，見 [MOD-07／08 報告](mod-07-08-review-2026-11-23.md)。17:26 Claude run 的 `park_terrain` 角色完成；這不是教練核准或安全簽核。 |
| MOD-09／10 | 有界來源審查及程式路徑核對，另有一組獨立複核，見 [MOD-09／10 報告](mod-09-10-review-2026-11-23.md)。補充報告核實 40 m 搜尋者間距、約 3 m 進入 fine search、25 cm 探針間距、fine-search 持機方式與挖掘者 1 m 隊列；`>80%` 電量、`1.5×` 挖掘位置、7 分鐘目標仍未核實。JAMA 歷史／現代存活統計已區分 cohort 與時間分組；另記錄一般生物力學 Lab 在約 36.88 G 輸出綠色診斷的程式行為，效度未核實。Claude `backcountry_integrity` 角色仍未完成；精簡替代覆核不等於完整全來源稽核或專業簽核。 |

## 動畫規格狀態

`docs/animation/animation-specs.json` schema 1.1 有 204 個唯一 media ID、516 個 phase，是首輪分鏡骨架，不是可拍攝成品。程式只擷取原文中的字面部位／刃向／重心／方向／角度詞作為未核實候選：369 個 phase 有部位詞、126 個有刃向詞、233 個有重心詞、206 個有方向詞、160 個有角度候選。標為核准的 phase 部位／刃向／重心值皆為 0；實際箭頭為 0，時間碼皆未填。候選不可當成正確技術或直接繪製；教練須逐 phase 指派、覆核並核准後，才可稱為可拍攝規格。

## 可追溯發現與建議（均待核准）

1. **MOD-01 — 68% 傷害歸因：未核實。** 原稿 `js/curriculum_data.js:124` 把「68%」以及踝背屈、離心耐力與第一趟冷肌滑行等因素連成因果主張；早期審查紀錄未找到能核對比例、研究對象或因果歸因的來源。建議先刪除或標示該統計與因果句為待來源核實；不可自行填入替代數字。這不是證明所有相關風險因素都不存在。

2. **MOD-03 — AASI 名稱／分類可能不符現行標準。** 原稿 `js/curriculum_data.js:407, 410, 429–432` 使用「AASI 4×3 Matrix」及四項 `Tilt · Twist · Pivot · Pressure` 描述。PSIA-AASI 官方 *Snowboard Certification Standards*（PDF 標示 Updated September 2026）列出六項 Snowboarding Fundamentals，包括沿板長／板寬控制壓力、調節壓力量級、控制板身 tilt、pivot 與 twist。這表示原稿至少不應不加版本說明地當作現行官方分類。建議作者／合格教練先確認原稿所指來源與版本；未確認前把協會對應標成「原稿標籤、未核實」，不要改寫成另一套教學內容。

3. **MOD-05 — 刻滑公式與單位有需專業覆核的差異。** Opus 報告指出原稿 `js/curriculum_data.js:732` 把 80° 代入後寫成至少 `5.67 m/s²`；在報告所用簡化式 `g·tan(80°)` 下，獨立計算得到 `5.671 g ≈ 55.616 m/s²`。所引 Jentschura & Fahrbach 論文描述的是理想刻滑模型，角度定義涉及滑手軌跡／質心傾角；不應直接把它當作實際教學處方或等同板身立刃角。另，原稿 `R_eff` 式中的 `/cos(α_slope)` 與同報告引用的側切半徑關係式及原稿數值例子不一致。**提案：先隱去或標成待審數值／公式，交由物理專業者及合格教練核准後才修改。**

4. **MOD-05 — 歐式貼地刻滑與裝備的精確處方：未核實。** 報告未找到支持指定速度、坡度、配重百分比與 260 mm 板寬的可開啟來源；「胸口貼雪」等動作提示也需教練評估。提案：移除或明確標記這些精確門檻待核實；不可由本報告推出新的安全範圍。

5. **MOD-06 — 傷害比例與跳高倍數不可由引用資料推出。** 原稿「90% 自學者」傷害敘述未由所引研究支持：Seleznev et al. 研究的是 2010–2016 年美國急診就診的單板相關骨折，並非自學者中所有傷害的比例。原稿「垂直起跳高度提升 1.6–2.2 倍」也未由已核對的資料支持；Huber et al. 2024 探討雪板設計最佳化並指出仍需更真實的騎乘者互動研究，Fushimi et al. 的動作學研究涵蓋一位進階與一位中級滑手。提案：移除或標記 90%／1.6–2.2 倍待醫療／研究來源核實，不以不同母體的資料替換。

6. **MOD-06 — 招式／動量說法、數字與分類有待教練核准。** Opus 報告指出多處固定關節角度、配重、G 值、時間、速度與旋轉度數沒有可開啟的來源；反扭轉公式被延伸到人仍接觸雪面的情境；部分數字前後不一致。摘要的「六大原子技能」與另一份八項矩陣也互相矛盾。提案：技術／安全主張標成待來源與教練核驗；物理式由物理審核者檢查適用條件；分類數量由作者決定後統一。報告另把 Andy 540 的「540 度空中旋轉」列為用詞需釐清，但招式定義仍須平花教練確認。

7. **MOD-06 — 雪場規則只能支持到來源原文範圍。** NSAA《Your Responsibility Code》(2022) 第 4 點要求開始下滑或進入雪道前向上坡觀察、避讓他人；它沒有在原文中規定「每次入彎前回頭」。提案：如需引用，採用來源範圍內的中性措辭，並由教練覆核情境；不要把一次規則擴大為額外的技術口訣。

8. **跨章節 — 專家、認證與真人媒體宣稱沒有獨立佐證。** 本次報告未驗證專家名冊身分／證照、機構背書、真人身分、素材授權或動作真實性。repo 有 204 組媒體檔名配對，只能證明基礎 Git tree 中存在對應 JPG／MP4 路徑，不證明檔案能播放、內容是真人、來源正確或已取得授權。建議保持網站明確警示，不再宣稱 50 位專家已簽核或「真人示範已驗收」。

## 代表性已核對來源（2026-11-23）

- Jentschura & Fahrbach, [*Physics of Skiing: The Ideal-Carving Equation and Its Applications*](https://arxiv.org/abs/physics/0310086)（理想模型；非教學／安全標準）。
- PSIA-AASI, [*Snowboard Certification Standards, Levels 1–3*](https://thesnowpros.org/wp-content/uploads/2025/10/AASI_Snowboard_Standards0224_updated_100325_v3.pdf)（PDF 標示 Updated September 2026）。
- NSAA, [*Your Responsibility Code (2022)*](https://nsaa.org/NSAA/NSAA/Safety/Your_Responsibility_Code/Your_Responsibility_Code.aspx)。
- Seleznev et al., [*Trends of snowboarding-related fractures that presented to emergency departments in the United States, 2010 to 2016*](https://pmc.ncbi.nlm.nih.gov/articles/PMC6035969/), *Annals of Translational Medicine* (2018), doi:10.21037/atm.2018.04.32。
- Huber et al., [*Design optimization of a snowboard performing an ollie*](https://doi.org/10.1007/s12283-024-00470-8), *Sports Engineering* (2024)。
- Fushimi et al., [*Studies on kinematics analysis of Ollie motions in snowboarding*](https://www.jstage.jst.go.jp/article/jskisciences/15/1/15_1/_article/-char/en) (2018; J-STAGE 2019)。
- Avalanche Canada, AvySavvy: [Signal Search](https://avysavvy.avalanche.ca/en-ca/signal-search), [Fine Search](https://avysavvy.avalanche.ca/en-ca/fine-search), [Probing](https://avysavvy.avalanche.ca/en-ca/probing), and [Shovelling](https://avysavvy.avalanche.ca/en-ca/shovelling) (specific rescue techniques and spacing; not evidence for the course's unverified battery, digging-position, or 7-minute thresholds).
- [*Avalanche Survival Rates in Switzerland, 1981-2020*](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2824053), *JAMA Network Open* (2024; reports historical and later cohorts separately).
- [*Head impact in a snowboarding accident*](https://pubmed.ncbi.nlm.nih.gov/27185578/) (modelled head-impact scenarios; not an observed wrist-fracture rate or a safety certification for the simulator).

## 核准與未完成事項

- 此報告不取代教練審核、醫療審核、物理覆核、機構確認或媒體授權查核。
- 未經合格教練核可，不應把此處提案改寫為新技術／安全指引，也不應讓高風險動作以「已驗證」的方式呈現。
- 最新 Claude run 完成 4/5 角色；MOD-09／10 的 `backcountry_integrity` 未完成（先達 turn 上限，後遇 session limit）。精簡替代覆核補充核對五項高風險主張，但未替代完整來源逐項核驗或專業核准。任何報告都須由相關專業人員逐項確認後，才可改教材或宣稱已獲安全／教練簽核。動畫規格目前是待教練補完的分鏡骨架，不能作為攝影／製作指令。
