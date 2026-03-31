# 👟 URBNSTEP - 城市語境下的街頭機能鞋電商

URBNSTEP 是一個致力於打造「風格與功能並存」的鞋履電商平台。以「Urban + Step」為核心理念，透過高品質的視覺呈現與品牌敘事，捕捉都市生活的節奏，將鞋履從純粹的商品轉化為穿戴者的自我表達。

🔗 **[點此線上預覽成品](https://snoesugar.github.io/URBNSTEP/index.html)**

---

## 🎯 開發動機與品牌理念

開發初衷是為了建立一個能傳遞「城市語言」的數位空間。
* **品牌敘事**：捕捉都市街角不被刻意編排的時刻，縮短品牌與消費者間的情感距離。
* **美學堅持**：相信美是由內而外的呼吸，產品目錄設計強調「真實場景」的氛圍感，而非單純的商品陳列。

---

## 🛠️ 技術重點與工程實踐

本專案展現了在開發初期即具備的**系統化思維**與**對 UI 細節的極致追求**：

### 1. 模組化開發架構 (EJS)
* **組件封裝**：運用 **EJS (Embedded JavaScript templates)** 實作組件化開發，將 Navbar、Footer 等重複性元素進行模組化引入。
* **開發效率優化**：透過 EJS 達成「一處修改，全站更新」，大幅降低維護成本並確保頁面間的一致性。

### 2. 進階樣式架構管理 (SASS/SCSS)
* **7-1 Pattern**：導入嚴謹的 SCSS 7-1 資料夾結構，確保 CSS 程式碼在大型專案中依然清晰且具備高度擴充性。
* **像素級精確切版 (Pixel-perfect)**：挑戰將設計稿細節完美還原，展現對網頁佈局（Grid & Flexbox）的深厚操控力。

### 3. 使用者體驗與導航 (UX & Interaction)
* **收藏功能 (Like System)**：實作愛心點擊收藏功能，模擬電商平台的使用者留存互動邏輯。
* **麵包屑導航 (Breadcrumb)**：整合 Bootstrap 的導航元件，優化產品目錄的檢索路徑，提升 SEO 友善度。
* **高質感 RWD**：基於 Bootstrap 5 進行深度開發，確保在行動端也能呈現如雜誌般的高質感視覺排版。

---

## 🚀 技術棧 (Tech Stack)

* **Core:** HTML5, JavaScript (ES6+)
* **Template Engine:** EJS
* **Styling:** SASS/SCSS (7-1 Pattern), Bootstrap 5
* **Build Tool:** Vite / Gulp
