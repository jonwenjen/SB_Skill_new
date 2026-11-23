> Human-readable extraction of the `result` field from Claude output `foundations_safety.json` (run `run-20261123-122432-full`; raw JSON archived locally). This is a proposal record, not coach, medical, or safety approval. The run completed 3/5 roles; see the audit status for scope and limits.

# MOD-01／MOD-02 唯讀內容稽核報告

**範圍：** 依 session 起始的 git 快照，branch 為 `feat/snowboard-course-review-skill`，HEAD 為 `9bc25ba`。主要審閱 `js/curriculum_data.js:113–398`（MOD-01、MOD-02）。另外核對了同檔 `:1–14`、`:2150–2510` 中提到這兩個模組的專家宣稱，以及 `js/app.js` 的呈現方式、`index.html` 與 `README.md` 的對外說明。

**方法與限制：**
- 所有外部來源都在 2026-11-23 實際開啟。
- FIS 的 PDF 我直接讀了全文。其餘網頁與期刊摘要是透過擷取工具取得文字，引文是工具回傳的片段，不是我逐字比對原頁的結果。期刊只讀到摘要，沒有讀全文。
- CASI QuickRide PDF 無法解析，所有以 CASI 為依據的說法都標為 UNVERIFIED。
- 已有一份前次的自動審查結果 an earlier partial automatic-review output (kept locally; not used as evidence)。我讀了它，但沒有沿用它的結論當證據，以下每一項都是重新開啟來源後判定的。
- **沒有修改任何檔案。** 目前是 plan mode，而且這次沒有寫入工具，所以也沒有建立 plan 檔。

---

## 一、MOD-01：體能、生理與暖身

**A1｜high｜UNVERIFIED｜`:124`**
- **原稿：**「高達 68% 的雪場初期運動傷害…源於『足踝背屈活動度不足（…< 35°）』…第一趟冷肌直接滑行」；「奧運國家隊季前 8 週週期化體能課表」。
- **證據：** Kim 2012［S12］的資料來自佛蒙特州單一雪場（1988–2006）。摘要指出手腕傷是單板最常見的傷害，占 27.6%；ACL 占 1.7%；21.8% 發生在地形公園。摘要中沒有 68%，也沒有提到背屈或冷肌。
- **另外注意：** MOD-01 的傷害論述完全沒提到手腕傷，而這份來源指出它最常見。這一點應交醫療人員評估要不要補充，我不自行撰寫新內容。
- **建議：** 把 68%、<35° 與國家隊課表標為「待核驗」，或刪除。
- **核可：** 需運動醫學或物理治療人員。

**A2｜high｜「H:Q 比值可預測 ACL」CONTRADICTED；數值 UNVERIFIED｜`:128–130`**
- **原稿：**「目標 H:Q Ratio ≥ 0.65」；「低於 0.60…ACL 撕裂風險暴增 3.4 倍」；「G-force 可達 1.8G–2.5G」。
- **證據：** Kellis 2023 系統性回顧［S10］的結論是「The H:Q ratio has limited value for the prediction of ACL and hamstring injuries」，摘要中沒有任何門檻值。
- **建議：** 移除 H:Q 比值可預測 ACL 的說法；0.65、0.60、3.4 倍和 G 值都標「待核驗」或刪除。
- **核可：** 需醫療或運動科學人員。

**A3｜medium｜UNVERIFIED，且模組內數字互相矛盾｜`:124, :135–136, :206, :211, :222`**
- **原稿：** 背屈門檻在不同地方分別寫成 <35°、≥38°、<32°、28°。膝觸牆距離一處寫「≥10–12 cm」，另一處寫「11 公分處…≥38°」。
- **證據：** Bennell 1998［S11］只有 13 名健康受試者。它把「腳趾到牆的距離」和「脛骨與垂直線的夾角」當成兩種獨立的量法，信度 ICC 為 0.97–0.99，但沒有提供公分換算角度的方法，也沒有判定門檻。
- **建議：** 把距離和角度分開陳述，所有門檻與換算都標「待核驗」。
- **核可：** 需物理治療師。

**A4｜medium｜UNVERIFIED｜`:129, :136, :140–142`**
- **原稿：** F_ecc 公式、「踝:膝:髖 = 40:40:20 黃金緩衝比例」、「η_loss < 8%」、核心角動量耗散的說法。
- **證據：** 沒有找到可支持的來源。
- **建議：** 精確數字標「待核驗」。
- **核可：** 需生物力學專業人員。

**A5｜medium｜UNVERIFIED｜`:146`**
- **原稿：**「T_muscle ↑ 2.0°C ➔ 神經傳導速率 ↑ 14% · 肌腱黏滯阻力 ↓ 22%」。
- **證據：** 沒有開啟到可支持的來源。
- **建議：** 標「待核驗」或刪除。

**A6｜medium｜相對於系統性回顧的合併估計 CONTRADICTED｜`:148`；相關的 `:242` 為 UNVERIFIED**
- **原稿：**「靜態拉筋會降低爆發力達 9%」。
- **證據：** Behm 2016［S9］報告靜態伸展平均造成 −3.7% 的表現變化。每個肌群伸展 ≥60 秒約 −4.6%，<60 秒約 −1.1%，在較長肌肉長度下反而有 +2.2%。
- **限制：** 我只讀了摘要，沒有查證個別研究的最大值。
- **相關未核驗主張（`:242`）：**「靜態拉伸會暫時抑制肌梭反射」、「坐雪地會導致血管收縮、溫度驟降」，都沒有開啟到可支持的來源。
- **建議：** 刪除 9%。若要保留研究數據，必須同時寫明伸展時長。
- **核可：** 需運動科學人員。

**A7｜high｜UNVERIFIED｜`:148, :246`**
- **原稿：**「8 分鐘內喚醒…」、「8 分鐘 RAMP 能把全天韌帶拉傷機率降低 50% 以上」。
- **證據：**
  - Jeffreys 2007 的摘要頁［S13］沒有提到 8 分鐘，沒有傷害降幅，也沒有在頁面上定義 R、A、M、P 各代表什麼。
  - Behm 2016［S9］指出靜態伸展與 PNF 伸展「no clear effect on all-cause or overuse injuries; no data are available for DS」（DS 指動態伸展）。
- **建議：** 刪除 50% 的效果宣稱，固定「8 分鐘」的說法標「待核驗」。
- **核可：** 需運動醫學人員。

**A8｜high｜高風險動作指令，UNVERIFIED｜`:212, :214, :236, :238, :243`**
- **原稿：**
  - `:212` 彈力帶套在距骨頸上做自我鬆動術
  - `:214` 閉眼單腳站立 30 秒
  - `:238` 只扣前腳做單腳小跳，最後雙腳扣入做微幅 Ollie
  - `:243`「第一趟只滑 60% 速度」
- **問題：** 這些是自我徒手治療、有跌倒風險的動作，或缺乏依據的數字，都找不到可核對的來源。
- **建議：** 保留原文，標註「需合格人員指導／待教練核可」，不要另寫替代動作。
- **核可：** 距骨鬆動與閉眼平衡需物理治療師；雪上跳躍需合格教練。

**A9｜low｜疑似內部矛盾；處方 UNVERIFIED｜`:158–159, :164–166`**
- **原稿：**「4-0-1-0 節奏」與「在最低點…停留 1 秒」並列。依常見的節奏記號，第二格才是最低點的停頓，那一格寫的是 0，因此兩者可能矛盾。不過我沒有開啟定義這套記號的來源，所以狀態列為 UNVERIFIED。
- **其他未核驗的處方數字：**「10–12 下 × 4 組」、「60 秒…100° 靠牆靜蹲」、「踝 36°·膝 95°·髖 85°」、「85%/15%」。
- **核可：** 需肌力與體能（S&C）教練。

**A10｜low｜UNVERIFIED｜`:181–183`**
- **原稿：**「15cm」、「踝 28°·膝 125°·髖 120°」、「±5%」。

**A11｜high（可信度問題）｜UNVERIFIED｜`:174, :222, :246`，以及 `:2468, :2476`**
- **原稿：** 掛名「奧運體能專家小組」、「50人專家團」的引述，內含 90%、28°、50% 等統計。另外 `:2468`、`:2476` 是具名專家的 auditFinding，宣稱 MOD-01 的 38°、11 cm、H:Q 0.65、8 分鐘 RAMP 等內容出自他們。
- **問題：** 這些人的身分、證照與簽核紀錄都沒有可核對的證據。
- **核可：** 由專案負責人決定處置。

---

## 二、MOD-02：安全規範、器材與纜車

**B1｜low｜名稱 CONTRADICTED｜`:262`（subtitle）、`:298`、`:300`**
- **原稿：**「FIS Alpine Responsibility Code」、「FIS Alpine Code」。
- **證據：** FIS 官方 PDF［S1］的標題是「FIS Code of Conduct for Skiers and Snowboarders」，內容為 Rule 1–10。「Responsibility Code」其實是美國 NSAA 規範的名稱［S2］。
- **補充：** 範圍外的 `:97` 也有同樣的命名問題。

**B2｜medium｜原稿自稱「完整」與實際內容不符｜`:269` 對照 `:307–312`**
- **原稿：**`:269` 寫「完整拆解國際十大安全準則」，但 `:307–312` 只列出四條「鐵律」。
- **證據：** FIS［S1］中有幾條規則在 MOD-02 完全沒有出現：
  - Rule 7（徒步上下行要靠雪道邊緣）
  - Rule 8（遵守標誌與標記）
  - Rule 9「At accidents, every skier or snowboarder is duty bound to assist.」
  - Rule 10（事故後交換身分資料）
- **建議：** 刪掉「完整」二字（見第四節）。是否補上 FIS 官方原文由教練決定；補充時只引用原文，不另外撰寫。

**B3｜medium｜CONTEXT_DEPENDENT｜`:308`**
- **原稿：**「擁有絕對路權」、「負有 100% 避讓責任」。
- **證據：**
  - FIS Rule 3：「A skier or snowboarder coming from behind must choose their route in such a way that they do not endanger skiers or snowboarders ahead.」
  - NSAA 第 2 點：「People ahead or downhill of you have the right-of-way. You must avoid them.」
  - 兩份來源都沒有「絕對」或「100%」的說法。而且 FIS Rule 1、2、5、6 也規範了前方滑手自己的義務。
- **建議：** 改用所引用規範的原文，移除絕對化字眼。
- **核可：** 需教練。

**B4｜low｜SUPPORTED（停留位置原則）｜`:309, :316`**
- **證據：**
  - FIS Rule 6：「must avoid stopping on the piste, in narrow places or where visibility is restricted」。
  - NSAA 第 3 點：「Stop only where you are visible from above」。
- **補充：**
  - 原稿另外點名的「跳台落地坡」不在這兩份規範中，屬於 CONTEXT_DEPENDENT，應以雪場標示為準。
  - `:316`「絕對看不到你」措辭過於絕對，但背後原則與 NSAA 第 3 點一致。

**B5｜high｜CONTEXT_DEPENDENT，且內部矛盾｜`:293, :305, :310`**
- **原稿：**`:293` 寫回頭掃描「0.5 秒」，`:305` 寫「入彎前 1.5 秒完成」，兩處不一致；`:310` 寫「每一個 Heelside 入彎點都必須轉頭看向後肩上方山坡」。
- **證據：** FIS Rule 5 要求在「entering a marked run, starting again after stopping or moving upwards」時上下看；NSAA 第 4 點是「before starting downhill or entering a trail」。兩份規範都沒有要求每個彎道前回頭。
- **建議：** 不要把它寫成國際準則的規定。保留原文並送教練審核，兩處時間不一致也一併送審。

**B6｜medium｜目的 SUPPORTED，方法 UNVERIFIED｜`:311`**
- **證據：** NSAA 第 5 點：「You must prevent runaway equipment.」
- **未核驗：** 原稿的具體作法「倒放（固定器朝下貼雪）＋單腳踩住」沒有找到權威來源。
- **核可：** 需教練。

**B7｜high｜UNVERIFIED（含醫療因果主張）｜`:269, :287`**
- **原稿：**「135° 視野死角」、「75% 嚴重碰撞事故」、「直接造成…MCL 慢性扭傷」、「消除後膝…內扣扭力」。
- **證據：** Kim 2012 的摘要［S12］沒有碰撞資料，也沒有視野角度。
- **建議：** 這些數字與因果主張標「待核驗」或刪除。
- **核可：** 需醫療人員。

**B8｜medium｜UNVERIFIED（物理一致性）｜`:291–293`**
- **原稿：**`E = ½·m_eff·(v_1 − v_2)²` 用的是兩個速率的純量差，但同一段又說兩條軌跡以 60°–90° 交角交會，兩者敘述不一致。
- **建議：** 送物理專業人員審核。

**B9｜medium｜UNVERIFIED，與廠商指引的作法不同｜`:273–275, :332`；`:2208`**
- **原稿：**「W_stance = H_tibial_tuberosity × (1.05~1.15)」、「L × 1.10」、「超過 1.22 倍…髖關節會被外展鎖死」。`:2208` 的專家宣稱把它稱為「精準公式」，還附帶 Q 角、女性與亞洲滑手的說法。
- **證據：**
  - Burton［S4］：「slightly wider than shoulder width to start」、「stance is largely preferential」。
  - Burton［S6］：「start at the reference stance of your snowboard」。
  - 兩份都沒有任何脛骨倍數公式。
- **建議：** 不要稱為「精準公式」，相關數值標「待核驗」。
- **核可：** 需器材技師或教練。

**B10｜medium｜CONTEXT_DEPENDENT｜`:285, :333`**
- **原稿：** 建議初學者設前腳 +15°、後腳 −9° 或 −12°。
- **證據：**
  - Burton［S4］：Positive／Zero「is the recommended stance angle setting for beginners」。
  - Burton［S6］：一般範圍是前腳 +6 到 +22、後腳 −15 到 +15。
  - 原稿的初學者設定落在 Burton 的一般範圍內，但和它對初學者的建議不同。Carving 的 +27° 超出一般前腳範圍，可能是針對硬鞋的情境。
- **限制：** CASI 的建議因 PDF 無法讀取而沒有核對。Burton 只是一家廠商，它的建議不能代表 CASI 或 AASI 的課綱。
- **建議：** 改寫成「可選設定之一」，不要寫成通用處方。

**B11｜high｜對初學者 CONTRADICTED（以 Burton 指引為準）｜`:323, :327, :335, :287, :340`**
- **原稿：** 這項技能標示適用「Lv.1–Lv.4」，卻要求前傾「調至 F2（約 12°–14°）」；`:287` 寫前傾「+2 至 +4 格」；`:340` 的矯正方法是「調高 2 格」。
- **證據：**
  - Burton［S5］：「we recommend most beginners apply "zero" forward lean until they have a few days on the mountain」。
  - Burton［S6］：「More forward lean results in quicker turns and more response」。這只支持 `:287` 所說的作用方向；「格」和 F2 的度數換算是品牌特定的，屬於 UNVERIFIED。
- **建議：** 移除對所有程度通用的前傾數值。
- **核可：** 需器材技師或教練。

**B12｜low｜概念 SUPPORTED；「完全一致」CONTEXT_DEPENDENT；誤差值 UNVERIFIED｜`:326, :328, :334, :340`**
- **證據：** Burton［S6］：
  - 置中可以「prevent toe drag and maximize power」。
  - 檢查方法是把板底傾斜 45° 時，兩側鞋子都不觸地。
  - 建議每次移動「¼-inch (6-millimeters)」。
  - 小腳配寬板時，應「shift your bindings toward the toe edge」，所以「前後突出量完全一致」並非在所有情況下都成立。
- **未核驗：**「誤差 < 2mm」。

**B13｜low｜SUPPORTED，但漏了限制｜`:335`**
- **原稿：** 將高背旋轉至與後刃平行。
- **證據：** Burton［S6］：「parallel to the heelside edge of your board, but by no more than 30 degrees」。原稿沒有寫出這個上限。

**B14｜high｜部分 SUPPORTED、部分 CONTEXT_DEPENDENT、多數 UNVERIFIED｜`:350–367`；`:2182`**
- **SUPPORTED：**`:357` 坐穩後再放下安全護欄。NSAA Lift Safety［S3］：「wait until everyone is seated, and slowly reach up and lower the bar」。
- **CONTEXT_DEPENDENT：**`:358`「抵達山頂前 15 公尺抬起安全欄」。NSAA［S3］只說「As you approach the top terminal, prepare to raise the bar… Look for signs」，沒有固定距離。
- **一般原則：** NSAA 第 8 點要求「know how and be able to load, ride and unload lifts safely」，需要時可請纜車人員協助。
- **UNVERIFIED：**
  - 前腳承重 80%、75%，踝 30°、膝 120°
  - 直滑 3 公尺、視線看前方 10 公尺
  - 平地單腳推進的細節（`:356`）
  - `:367`「只有一個物理原因」這種絕對化說法
  - `:2182` 專家 EXP-04 宣稱這段內容出自他的審查
- **核可：** 需合格教練。

**B15｜medium｜部分 SUPPORTED｜`:374–382`**
- **證據：** Burton 的尺寸文章［S7］（實際載入的是法文版）說，雪板能「感知」的是體重**和靴長**；各尺寸的體重範圍只是建議值；板腰太寬會讓換刃更困難，太窄則會對腳趾和腳跟造成壓力。
- **問題：**`:380` 只提體重，漏了靴長。
- **未核驗：** Flex 3–9 分級，以及各品牌軟硬度刻度能否互通（Burton 頁面沒有討論）；Setback 20–40mm；「板腰＝雪靴外長減 1.5–2.0 cm」；「US 10.5 以上…≥260mm」；「75° 以上」刻滑角。

**B16｜low｜CONTEXT_DEPENDENT｜`:279–281`**
- **原稿：** 把混合拱定義為「兩腳間正拱、頭尾微反拱」。
- **證據：** Burton［S8］的定義：
  - Camber：兩腳間向上拱，「generally great for all riders and riding styles」。
  - Rocker：「work well at low speeds in powder」。
  - 混合拱因品牌和型號而異：Flying V 是兩腳間反拱、腳下正拱；PurePop 則是兩腳間正拱。
- **結論：** 原稿的定義只是其中一種。原稿描述的 Pop、高速穩定性等性能，在我開啟的頁面中沒有找到依據，屬於 UNVERIFIED。Burton 是商業廠商，這只能代表它自家的定義。

**B17｜high（可信度問題）｜部分被 repo 內容反駁｜`:319, :343, :367, :391`；`:2208, :2308, :2316, :2510`**
- **`:343`：**「超過一半卡在 CASI Lv2 考不過的學員…」暗示引用了 CASI 的統計資料，屬於 UNVERIFIED。
- **`:2510`：** 專家 EXP-43 宣稱「於 MOD-01 與 MOD-02 增補雪靴貼合度與…鞋墊」。我在 repo 中搜尋「鞋墊｜Insole｜熱塑｜貼合度」，只在 `:2508–2510` 的專家條目本身找到，MOD-01／02 內完全沒有，所以這項宣稱與 repo 內容矛盾（CONTRADICTED）。
- **核可：** 由專案負責人處置。

---

## 三、資料流與對外宣稱

**C1｜medium｜部分技術內容在呈現時沒有「待核」標註**
- **已有標註的部分：**
  - 常見錯誤的三個欄位（`app.js:370–372`）
  - 原稿機構對照（`app.js:385`、`:480`）
  - 專家提示（`app.js:460`）
  - 物理原理區塊標題（`app.js:499`）
  - 全站警示橫幅（`index.html:59–60, :235`）與 `README.md:3`
- **沒有標註的部分：**
  - 生物力學區塊標題（`app.js:407`）
  - 步驟區塊標題「系統化分解動作與練習步驟」（`app.js:416`）
  - 模組摘要（`app.js:489`）
- **影響：** Ollie、纜車、自我鬆動等高風險步驟，會以正式指令的樣子呈現給讀者。
- **另一個問題：**`app.js:395, :430` 的媒體標題寫「多角度真人連續動作」，但 `:36–37` 自己已標明媒體來源未核實。「真人」這個說法目前沒有證據支持。

**C2｜low｜原始碼中仍保留未核實的宣稱**
- `index.html:398–449` 的 `hidden` 區塊仍含「50 人教練團隊…總驗收通過」、「408 / 408 Media Files Verified」、「WCAG AAA Contrast Verified」。
- 專家網格 `index.html:452, :457` 已隱藏，但 `app.js:764–805` 仍會把 auditFinding 渲染進這個隱藏網格。
- 頁面上看不到這些內容，但原始碼仍保留。是否刪除由專案負責人決定。

---

## 四、可直接做的低風險文字修正（已核對來源，但這次沒有套用）

1. 在 `curriculum_data.js:262, :298, :300`，把「FIS Alpine Responsibility Code」與「FIS Alpine Code」改為官方名稱「FIS Code of Conduct for Skiers and Snowboarders」，「10 條」保留不變［S1］。
2. 在 `curriculum_data.js:269`，把「完整拆解國際十大安全準則」中的「完整」刪掉，例如改為「摘錄部分安全準則」。依據是 repo 本身只列出四條鐵律，而且這個改動不會變更任何安全指令。
3. 在 `app.js:407, :416, :489`，於標題或摘要前加上「原稿（待核驗）」。這只改標籤，不動教材內容。
4. 在 `app.js:395, :430`，移除標題中的「真人」，與 `:36–37` 的說法保持一致。

除此之外，其餘看起來只是文字層面的不一致（例如 0.5 秒與 1.5 秒、4-0-1-0 節奏、各處背屈門檻），都牽涉安全規範或訓練處方，所以列到下一節。

## 五、需人工核准的內容修正（`needs_coach_review`，待教練核可）

| 核可者 | 項目 |
|---|---|
| 運動醫學或物理治療人員 | A1（含手腕傷未提及的問題）、A2、A3、A5、A6、A7、A8 中的距骨鬆動與閉眼平衡、B7 |
| 肌力與體能（S&C）教練 | A4、A9、A10 |
| 合格單板教練 | A8 中的雪上跳躍與 60% 速度、B2（是否補上 FIS 原文）、B3、B4 中的落地坡、B5、B6、B14 |
| 器材技師 | B9、B10、B11、B12、B13、B15、B16 |
| 物理專業人員 | B8 |
| 專案負責人 | A11、B17、C2 |

每一項都應保留原文、附上提案並等待核可，不要直接改寫。

## 六、未能核驗的清單

- **MOD-01 數值：**
  - 68%；背屈門檻 <35°／<32°／≥38°／28°；膝觸牆 10–12 cm、11 cm 與角度的換算
  - 1.8–2.5G；H:Q 0.65／0.60；3.4 倍
  - 40:40:20；η<8%；+2°C 對應 14%／22%
  - RAMP 的 8 分鐘與 50%；90%；60% 速度
  - 各項訓練處方（組數、角度、秒數）；4-0-1-0 節奏記號的定義
- **MOD-02 數值：**
  - 135°；75%；脛骨倍數 1.05–1.22；F2 等於 12–14°；+2 到 +4 格；誤差 <2mm
  - 纜車相關的 75–80%、3 m、10 m、15 m；±60° 頸部旋轉；30 公尺
  - Flex 3–9 分級；Setback 20–40mm；板腰公式；≥260mm；75° 刻滑角；「超過一半 CASI Lv2」
- **主張類：** MCL 因果關係；拱型性能描述；脫板後倒放的具體方法；平地單腳推進技術；「坐雪地造成血管收縮」與「靜態伸展抑制肌梭反射」。
- **來源問題：** CASI QuickRide PDF 無法解析，所有 CASI／AASI／JSBA／BASI 的對照都沒有核對。期刊來源只讀了摘要。
- **人員：** 所有具名專家的身分、證照與簽核紀錄。

## 參考來源（存取日期：2026-11-23）

- [S1] [FIS Code of Conduct for Skiers and Snowboarders（PDF，直接讀取全文）](https://assets.fis-ski.com/f/252177/49280306c8/fis-code-of-conduct-for-skiers-and-snowboarders-en.pdf)
- [S2] [NSAA, Your Responsibility Code (2022)](https://nsaa.org/NSAA/NSAA/Safety/Your_Responsibility_Code/Your_Responsibility_Code.aspx)
- [S3] [NSAA, Lift Safety](https://nsaa.org/liftsafety/)
- [S4] [Burton, Goofy vs. Regular: The Official Guide to Snowboard Stances](https://www.burton.com/en-us/blogs/the-burton-blog/goofy-vs-regular)
- [S5] [Burton, A Beginner's Guide on How to Set up a Snowboard](https://www.burton.com/blogs/the-burton-blog/how-to-set-up-a-snowboard)
- [S6] [Burton, How to Adjust Snowboard Bindings](https://www.burton.com/en-au/blogs/the-burton-blog/how-to-adjust-snowboard-bindings)
- [S7] [Burton, snowboard size（實際載入的是法文版頁面）](https://www.burton.com/blogs/the-burton-blog/snowboard-size-chart)
- [S8] [Burton, Rocker Snowboard Guide](https://www.burton.com/en-us/blogs/the-burton-blog/rocker-snowboard-guide)
- [S9] Behm et al., *Appl Physiol Nutr Metab* 2016, PMID 26642915（[Europe PMC 摘要](https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:26642915%20AND%20SRC:MED&resultType=core&format=json)）
- [S10] Kellis et al., *J Sport Health Sci* 2023, PMID 35065297（[Europe PMC 摘要](https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:35065297%20AND%20SRC:MED&resultType=core&format=json)）
- [S11] Bennell et al., *Aust J Physiother* 1998, PMID 11676731（[Europe PMC 摘要](https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:11676731%20AND%20SRC:MED&resultType=core&format=json)）
- [S12] Kim et al., *Am J Sports Med* 2012, PMID 22268231（[Europe PMC 摘要](https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:22268231%20AND%20SRC:MED&resultType=core&format=json)）
- [S13] [Jeffreys 2007, Warm-up revisited: the RAMP method（摘要頁）](https://pure.southwales.ac.uk/en/publications/warm-up-revisited-the-ramp-method-of-optimizing-performance-prepa/)
- **嘗試開啟但無法讀取：** [CASI QuickRide PDF](https://members.casi-acms.com/documents/QuickRideEN.pdf)
- **出現在搜尋結果中但未採為證據：**
  - 安全護欄相關：[Colorado Ski Country](https://www.coloradoski.com/safety/lift-safety/)、[KPCW](https://www.kpcw.org/ski-resorts/2024-12-26/chairlift-falls-highlight-the-importance-of-safety-bars)、[Technical Safety BC](https://blog.technicalsafetybc.ca/tips-10-safety-tips-know-riding-chairlift)、[Go Ski Alberta](https://goskialberta.com/?p=5171)、[NSAA Journal 護欄專欄](https://www.nsp-pnwd.org/uploads/1/1/9/6/119634168/restrain_bar_column_nsaa_journal.pdf)
  - 拱型相關：[REI](https://www.rei.com/learn/expert-advice/snowboard-rocker-technology.html)、[Red Bull](https://www.redbull.com/us-en/camber-vs-rocker-snowboards)
