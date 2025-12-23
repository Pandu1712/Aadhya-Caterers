export type WeddingType = "veg" | "nonveg";

export type WeddingPlan =
  | "silver"
  | "gold"
  | "diamond"
  | "standard";

/* ================= IMPORT LOCAL PDFs ================= */
import vegDiamondPdf from "../Assets/aadhyacaterers-Diamond-Menu-Veg.pdf";
import vegSilver from "../Assets/aadhyacaterers-Silver-Menu-Veg.pdf";
import vegGold from "../Assets/aadhyacaterers-Gold-Menu-Veg.pdf";
import nonSilver from "../Assets/aadhya-Silver-Menu-Non-Veg.pdf";
import nonGold from "../Assets/aadhya-Gold-Menu-Non-Veg.pdf";
import nonSta from "../Assets/aadhya_Menu_Non-Veg_Standard.pdf";

/* ================= TYPE ================= */
interface WeddingPdfMap {
  [type: string]: {
    [plan: string]: string;
  };
}

/* ================= CONFIG ================= */
export const weddingPdfUrls: WeddingPdfMap = {
  veg: {
    silver: vegSilver, // ✅ CORRECT
    diamond:  vegDiamondPdf,
    gold: vegGold,
  },
  nonveg: {
    silver: nonSilver,
    gold: nonGold,
    standrad: nonSta,
  },
};
