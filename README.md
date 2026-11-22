# SB_Skill_new

這是一個單板滑雪課程網站原型，含 10 個模組、互動介面及 `assets/media/` 圖片／影片素材。網站提及的協會、證照、人員、審查、統計數字與安全／技術主張，均不得僅因出現在 repo 而視為已證實；目前需要有資格的教練及可靠來源逐項核驗。未完成核驗前，請勿將本網站當成專業訓練、安全或醫療指引，也不要依未核准內容嘗試高風險動作。這些資料不構成任何協會背書。

## Repo 結構

- `index.html`, `css/`, `js/`：靜態網站與互動邏輯。
- `js/curriculum_data.js`：課程內容資料；其中的數值、引述、專家／審查宣稱尚須逐項驗證。
- `assets/images/`, `assets/media/images/`, `assets/media/videos/`：網站素材。檔案存在不證明影片是真人拍攝、內容正確、取得授權或可正常播放。
- `.agents/skills/snowboard-course-review/SKILL.md`：Hermes Agent 專案 Skill。
- `.claude/skills/snowboard-course-review/SKILL.md`：Claude Code 專案 Skill（與 Hermes 版本保持一致）。

## 課程審查與動畫重製規格

先執行測試並產生逐素材規格：

```sh
python3 -m unittest discover -s tests -v
python3 scripts/build_animation_specs.py
```

輸出為 `docs/animation/animation-specs.json`。規格由教材既有 ID 與步驟資料產生；原稿中的動作／數值均標示待核驗，不捏造時間碼或新技術提示，也不產生或覆蓋影片。

需要已登入且可執行 `claude -p` 的 Claude Code CLI。審查器採唯讀工具，分五個獨立角色依序檢查 MOD-01–10；代理不會改教材。只有來源可核實且低風險的文字修正才可直接處理；涉及安全或技術的變更先記為提案，待有資格的教練核可：

目前審查未完成；請先看[審查狀態與待核准提案](docs/course-review/audit-status-2026-11-23.md)，勿將原稿視為已通過教練或安全審查。

```sh
python3 scripts/run_course_review.py --output-dir docs/course-review/run-YYYYMMDD-HHMMSS
```

每次執行會保存代理原始回覆與索引。若一個審查器失敗，該次執行會回報未完成，不得把部分結果宣稱為完整審查。查看 `docs/course-review/README.md` 了解限制和審查標準。

## 可核對的素材盤點

`docs/course-review/media-inventory.json` 記錄基礎 `main` commit 的 Git tree 檔名與規格 ID 比對。這只能證明 Git tree 中有相應檔案；不能證明媒體來源、真人身分、授權、動作正確性或播放品質。
