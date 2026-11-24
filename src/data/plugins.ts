import {
  AudioLines,
  BookImage,
  ChartColumn,
  Egg,
  EyeOff,
  FileText,
  Globe,
  Grid3x3,
  Moon,
  Rows3,
  ScrollText,
  Sparkles,
  Sun,
  Tags,
  Timer,
  type LucideIcon,
} from "lucide-react";

/*
 * The plugins that can be downloaded: the default plugins (hoard repo plugins/,
 * also installed with the App) and the examples (examples/plugins/), without
 * test plugins. Versions follow each manifest.json; update them when a
 * manifest changes, since the download link is <id>-<version>.zip.
 */

export type BrandIcon = "pixiv" | "x" | "patreon" | "pinterest" | "reddit";
export type PluginIconRef = { lucide: LucideIcon } | { brand: BrandIcon } | { letter: string };

export interface PluginEntry {
  id: string;
  name: string;
  version: string;
  /** Shipped with the App, or an example to install yourself. */
  bundled: boolean;
  icon: PluginIconRef;
  /** The source color (dark-theme value of the manifest's `color`). */
  color?: string;
  summary: string;
}

export const PLUGINS: PluginEntry[] = [
  { id: "twitter", name: "X.com", version: "1.27.0", bundled: false, icon: { brand: "x" }, color: "#e7e9ea", summary: "收藏 X 貼文的圖片與影片，也能從資料封存匯入以前的按讚。" },
  { id: "pixiv", name: "Pixiv", version: "1.17.0", bundled: false, icon: { brand: "pixiv" }, color: "#61a0ff", summary: "收原圖、留言與標籤，按讚或加入收藏時也能一起收。" },
  { id: "fanbox", name: "FANBOX", version: "1.6.2", bundled: false, icon: { letter: "F" }, color: "#faf18a", summary: "收 FANBOX 貼文與附件，一鍵抓取創作者全部作品。" },
  { id: "patreon", name: "Patreon", version: "1.7.2", bundled: false, icon: { brand: "patreon" }, color: "#ff7b69", summary: "收 Patreon 貼文，留言自動載到完，一鍵抓取創作者全部作品。" },
  { id: "pinterest", name: "Pinterest", version: "1.6.1", bundled: false, icon: { brand: "pinterest" }, color: "#ff5a6e", summary: "收 Pin 的原圖、影片與留言，看板整批收進同名資料夾。" },
  { id: "comic-reader", name: "漫畫閱讀器", version: "2.2.1", bundled: false, icon: { lucide: BookImage }, color: "#f5c15c", summary: "OpenComic 等級的閱讀器與書架：CBZ、壓縮檔、EPUB 都能讀。" },
  { id: "pdf", name: "PDF", version: "1.1.0", bundled: false, icon: { lucide: FileText }, summary: "直接看 PDF：文字可選取、搜尋、目錄，記得讀到第幾頁。" },
  { id: "html", name: "網頁", version: "1.6.0", bundled: false, icon: { lucide: Globe }, summary: "看存下來的網頁（HTML、MHTML、SingleFile），在隔離的框架裡顯示。" },
  { id: "ai-metadata", name: "AI 生成參數", version: "1.7.1", bundled: false, icon: { lucide: Sparkles }, summary: "讀出 AI 生圖寫在檔案裡的提示詞、模型與 LoRA，還能依模型篩選。" },
  { id: "audio", name: "音訊", version: "1.6.1", bundled: false, icon: { lucide: AudioLines }, summary: "音效庫的好幫手：波形封面、空白鍵試聽、依長度與取樣率篩選。" },
  { id: "aseprite", name: "Aseprite 像素圖", version: "1.3.0", bundled: false, icon: { lucide: Grid3x3 }, summary: ".aseprite 直接播動畫、切圖層，卡片封面就是會動的像素圖。" },
  { id: "timeline", name: "時間軸", version: "1.3.1", bundled: false, icon: { lucide: Rows3 }, summary: "像社群動態一樣，一欄一篇完整貼文。" },
  { id: "desktop-pet", name: "桌寵", version: "1.0.0", bundled: false, icon: { lucide: Egg }, color: "#0c8599", summary: "桌面上的小龍「囤囤」：把圖片拖到牠身上就收進 hoard。" },
  { id: "theme-black", name: "黑色主題", version: "1.0.5", bundled: true, icon: { lucide: Moon }, summary: "中性黑灰階介面，hoard 的預設主題。" },
  { id: "theme-white", name: "白色主題", version: "1.0.5", bundled: true, icon: { lucide: Sun }, summary: "白底灰階介面。" },
  { id: "reddit", name: "Reddit", version: "0.6.0", bundled: false, icon: { brand: "reddit" }, color: "#ff4500", summary: "圖集、留言樹、仿 Reddit 的詳情頁與社群版型。" },
  { id: "e621", name: "e621", version: "2.2.0", bundled: false, icon: { letter: "e" }, color: "#4a7bc8", summary: "追蹤作者標籤，新作品自動收進來。" },
  { id: "cover-wall", name: "封面牆", version: "1.0.2", bundled: false, icon: { lucide: Grid3x3 }, summary: "只顯示封面的密集方格版型。" },
  { id: "auto-tag", name: "自動加來源標籤", version: "1.0.0", bundled: false, icon: { lucide: Tags }, summary: "新收藏進來時自動加上「來源:平台」標籤。" },
  { id: "library-stats", name: "收藏統計", version: "1.0.1", bundled: false, icon: { lucide: ChartColumn }, summary: "側欄多一頁：數量、來源、常用標籤與最近加入的作品。" },
  { id: "blur", name: "作品模糊", version: "1.0.0", bundled: false, icon: { lucide: EyeOff }, summary: "把所有作品的圖片蓋上模糊，在公共場合也能打開。" },
  { id: "hello-lifecycle", name: "生命週期示範", version: "1.0.0", bundled: false, icon: { lucide: Timer }, summary: "插件入門：設定、計時器、事件的自動清理與熱重載。" },
  { id: "theme-paper", name: "紙本主題", version: "1.0.1", bundled: false, icon: { lucide: ScrollText }, summary: "米白紙張配朱紅強調色。" },
];
