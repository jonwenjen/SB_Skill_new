# MOD-01／MOD-02 選定高風險主張獨立核對（2026-11-23）

## 範圍與限制

本報告只獨立核對指定高風險主張與 `js/curriculum_data.js` 對應行，不是 MOD-01／MOD-02 全面複核，更不是全課程審查。唯讀，未修改教材。來源無法支持某個數值，不等於已證明它為假；下列修正都是待合格教練、運動醫學／運動科學人員或器材技師核准的有限提案。

## 已開啟來源

- [11] Kim et al., *Snowboarding injuries: trends over time and comparisons with alpine skiing injuries*: https://pubmed.ncbi.nlm.nih.gov/22268231/
- [12] Myer et al., *The relationship of hamstrings and quadriceps strength to anterior cruciate ligament injury in female athletes*: https://pubmed.ncbi.nlm.nih.gov/19124976/
- [13] Kellis et al., *Is hamstrings-to-quadriceps torque ratio useful for predicting anterior cruciate ligament and hamstring injuries? A systematic and critical review*: https://pubmed.ncbi.nlm.nih.gov/35065297/
- [14] Behm et al., *Acute effects of muscle stretching on physical performance, range of motion, and injury incidence in healthy active individuals: a systematic review*: https://pubmed.ncbi.nlm.nih.gov/26642915/
- [15] Bennell et al., *Intra-rater and inter-rater reliability of a weight-bearing lunge measure of ankle dorsiflexion*: https://pubmed.ncbi.nlm.nih.gov/11676731/
- [16] FIS, *Code of Conduct for Skiers and Snowboarders*: https://assets.fis-ski.com/f/252177/49280306c8/fis-code-of-conduct-for-skiers-and-snowboarders-en.pdf
- [17] NSAA, *Your Responsibility Code (2022)*: https://nsaa.org/NSAA/NSAA/Safety/Your_Responsibility_Code/Your_Responsibility_Code.aspx
- [19] Burton, *Goofy vs. Regular: The Official Guide to Snowboard Stances*: https://www.burton.com/en-us/blogs/the-burton-blog/goofy-vs-regular
- [21] Jeffreys, *Warm-up revisited: The ramp method of optimizing performance preparation*: https://pure.southwales.ac.uk/en/publications/warm-up-revisited-the-ramp-method-of-optimizing-performance-prepa/

## MOD-01：體能、生理與熱身

1. **「高達 68%」初期傷害／技術卡關由背屈不足 `<35°`、股四頭肌離心耐力或冷肌滑行造成；並稱採用奧運國家隊季前 8 週課表**（`js/curriculum_data.js:120,124`）
   **狀態：UNVERIFIED｜嚴重度：高。** 所查雪板傷害研究分析單一佛蒙特雪場 1988–2006 年傷害資料，報告傷害類型與比例，未報告「68%」或上述因果歸因。[11] 負重膝觸牆研究評估 13 名健康受試者的量測信度，並非雪板傷害、技術停滯或運動隊課表研究。[15]
   **提案：** 將 68%、背屈門檻、因果歸因及國家隊課表來源標為待核實；補可追溯研究／課表並由合格專業人員審核前，不作為診斷或傷害預測。

2. **H:Q 目標 ≥0.65；低於 0.60 使 ACL 風險增加 3.4 倍；並稱滑行達 1.8–2.5G**（`:128–130`）
   **狀態：部分支持一般肌力差異研究；列出的門檻、風險倍數及雪板 G 值未核實｜嚴重度：高。** Myer 等研究是在球類運動女性 ACL 個案與對照間比較肌力，報告個案組相較男性對照腿後肌力量低 15%，不支持雪板滑手的 0.60／0.65 門檻或 3.4 倍風險。[12] 系統性回顧指出 H:Q ratio 對 ACL／腿後肌傷害預測的價值有限；研究沒有建立教材列出的單板門檻。[13]
   **提案：** 將精確比例、風險倍數及 G 值標為待核實；不可把球類運動研究外推為單板滑雪診斷／處方，交由合格醫療或運動科學人員核准。

3. **膝觸牆 10–12 cm 等同背屈 38°；另用 `<32°` 或 `<35°` 判定不足**（`:124,134–136,206`）
   **狀態：UNVERIFIED｜嚴重度：中。** 所查研究使用腳趾至牆距離、或傾角儀測量脛骨與垂直線的角度，支持這兩種量法具有信度；沒有提供 10–12 cm、11 cm＝38°或 32°／35°作為通用門檻，也未驗證其互換換算。[15]
   **提案：** 先區分距離與角度量測；數值和換算標待核實，由物理治療師確認適用人群及判定方式。

4. **「靜態拉筋會降低爆發力達 9%」**（`:145–148`）
   **狀態：部分支持立即測試時可能有表現變化；固定 9% 未獲支持｜嚴重度：中。** 系統性回顧報告立即測試時靜態伸展平均表現變化約 −3.7%，且結果依伸展時間與測試情境而變；沒有支持一概降低 9% 的單板爆發力說法。[14]
   **提案：** 刪除或標明 9% 待核實；如保留研究數字，限定伸展時長、測試時間與所測指標。

5. **8 分鐘 RAMP 可使「全天韌帶拉傷機率降低 50% 以上」**（`:145–148,225–246`）
   **狀態：UNVERIFIED｜嚴重度：高。** Jeffreys 文章摘要介紹建立有效熱身的模型，未提供本教材的 8 分鐘雪場流程或 50% 韌帶傷害降幅。[21] Behm 等回顧討論伸展與表現／傷害結果，沒有支持 RAMP 的固定 50% 效果。[14]
   **提案：** 移除或標註 50% 待核實；取得能直接核對人群、傷害定義、流程與時間的研究前，不宣稱特定降幅。

## MOD-02：雪場規則與器材設定

6. **把規則命名為「FIS Alpine Responsibility Code」／「FIS 10 Rules」**（`js/curriculum_data.js:262,265,298–300`）
   **狀態：名稱錯置｜嚴重度：中。** FIS 文件正式標題為 *FIS Code of Conduct for Skiers and Snowboarders*；NSAA 使用 *Your Responsibility Code*。CASI 指南另以 *The Alpine Responsibility Code* 為一節標題，不能據此把該名稱歸屬 FIS。[16][17][9]
   **提案：** 請作者先確認實際採用的規則版本，再使用相應發布機構的正式名稱和連結。

7. **下坡者有「絕對路權」、後方者負「100% 避讓責任」**（`:308`）
   **狀態：部分支持，但絕對化字眼超出來源｜嚴重度：中。** FIS 規則要求後方滑手選擇不危及前方滑手的路線；NSAA 明確稱前方／下坡者有優先權、後方者應避讓。兩者都沒有教材的「絕對」或「100%」字樣；規則亦另有重新起步／併入雪道前觀察的要求。[16][17]
   **提案：** 請教練核准後改成貼近所採用規則原文的限定敘述，刪除無來源的絕對程度詞。

8. **Regular 後方視野死角 135°；75% 嚴重碰撞發生於交會或坡頂盲區**（`:269`）
   **狀態：UNVERIFIED｜嚴重度：高。** 本行未提供這兩個數字的可辨識來源；所查雪板傷害研究報告傷害類型及發生位置，並未報告 135° 視野角或 75% 嚴重碰撞比例。[11]
   **提案：** 將數字標待核實；要保留須提供可追溯事故資料、分母、嚴重度定義及量測方法。未核實前，安全提醒不應依賴這些精確數字。

9. **纜車流程列出承重 75–80%、直滑 3 m、抵頂前 15 m 抬欄等通用數值**（`:350–364`）
   **狀態：一般安全原則有來源；教材所列精確數字未核實｜嚴重度：高。** NSAA 要求知道如何安全乘坐與上下纜車，不確定時詢問纜車工作人員；其規則未提供教材中的承重比例或距離數值。[17]
   **提案：** 把精確數值標待核實；以現場標示、工作人員指示及經核准的纜車教學材料為準，請合格教練審核實作流程。

10. **站寬以脛骨結節高度乘 1.05–1.15（約 ×1.1）作固定「精準／個人化公式」**（`:272–275,332`）
    **狀態：通用調整概念有廠商指引；精確公式未獲支持｜嚴重度：中。** Burton 指引建議初始站寬略寬於肩寬、參考雪板型號的 reference stance，再按個人感受調整；沒有提供教材的脛骨高度乘數。[19]
    **提案：** 不稱脛骨乘數為通用精準公式；器材技師／教練確認後才保留為特定方法。

11. **初學者與全山自由式固定推薦前腳 +15°、後腳 −9°／−12°**（`:285,332–333`）
    **狀態：CONTEXT_DEPENDENT｜嚴重度：中。** Burton 指引對剛入門者建議從 Positive/0 起步，且說角度需按偏好／用途調整；CASI 初學器材段落建議 +9/−9 作為初學起點、轉彎後可改用輕微 duck stance。這些差異顯示設定因情境而異，不足以證明教材組合對所有滑手錯誤。[19][9]
    **提案：** 避免把單一角度組合寫成所有初學者的普遍處方；如保留，明示為選項並由教練／器材技師依滑手、雪板與固定器核准。

12. **Lv.1–Lv.4 一律採 F2（約 12°–14°）前傾，並將調高兩格／圓盤移一格列作通用矯正**（`:327,335,339–340`）
    **狀態：UNVERIFIED｜嚴重度：中。** 已查閱來源沒有建立跨固定器型號通用的 F2 角度換算或「幾格」調整處方；CASI 指南亦將器材選擇描述為隨學員進步而變化。[9]
    **提案：** 先標待核實；若需保留，依固定器型號原廠說明、學員狀況和教練評估限定情境。

13. **錯誤固定器角度／前傾「直接造成」MCL 慢性扭傷，或特定角度可消除膝內扣扭力**（`:269,284–287`）
    **狀態：UNVERIFIED｜嚴重度：高。** 雪板傷害研究比較各類受傷型態，沒有測試固定器角度／高背前傾對 MCL 傷害的因果作用。[11] 一項 ACL 研究對象是球類運動女性，不能證明雪板固定器設定會造成或預防 MCL 傷害。[12] Burton 站姿指引討論設定選項與個人偏好，未構成傷害預防證據。[19]
    **提案：** 移除或標示此醫療因果主張待核實；未取得直接證據及醫療專業審核前，不宣稱特定設定會造成或消除韌帶傷害／扭力。

## 結論

本報告僅核對上述指定項目，並非 MOD-01／MOD-02 全面審查，也不代表全課程審查完成。安全、醫療及器材設定的任何教材修改仍須由相應合格人士核准；原教材未修改。

## Sources

[9] https://members.casi-acms.com/documents/QuickRideEN.pdf
[11] https://pubmed.ncbi.nlm.nih.gov/22268231
[12] https://pubmed.ncbi.nlm.nih.gov/19124976
[13] https://pubmed.ncbi.nlm.nih.gov/35065297
[14] https://pubmed.ncbi.nlm.nih.gov/26642915
[15] https://pubmed.ncbi.nlm.nih.gov/11676731
[16] https://assets.fis-ski.com/f/252177/49280306c8/fis-code-of-conduct-for-skiers-and-snowboarders-en.pdf
[17] https://nsaa.org/NSAA/NSAA/Safety/Your_Responsibility_Code/Your_Responsibility_Code.aspx
[19] https://www.burton.com/en-us/blogs/the-burton-blog/goofy-vs-regular
[21] https://pure.southwales.ac.uk/en/publications/warm-up-revisited-the-ramp-method-of-optimizing-performance-prepa
