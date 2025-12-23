import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  weddingPdfUrls,
  WeddingPlan,
  WeddingType,
} from "../data/weddingPdfConfig";

const WeddingSelector = () => {
  const navigate = useNavigate();
  const [type, setType] = useState<WeddingType | null>(null);

  const handlePlanClick = (plan: WeddingPlan) => {
    if (!type) return;

    const pdfUrl = weddingPdfUrls[type][plan];
    if (pdfUrl) {
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F6F4FB]">
      <div className="max-w-4xl mx-auto px-4 mt-8">

        {/* BACK */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-[#3C1285] font-semibold"
        >
          ← Back to Categories
        </button>

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-[#3C1285]">
          Wedding Catering Plans
        </h2>

        {/* STEP 1: VEG / NON-VEG */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg mb-10">
          <h3 className="text-lg font-semibold mb-6 text-center text-[#3C1285]">
            Choose Wedding Type
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => setType("veg")}
              className={`px-8 py-4 rounded-2xl font-semibold border transition text-lg ${
                type === "veg"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white hover:bg-green-600 hover:text-white border-green-600"
              }`}
            >
              🌿 Veg Wedding
            </button>

            <button
              onClick={() => setType("nonveg")}
              className={`px-8 py-4 rounded-2xl font-semibold border transition text-lg ${
                type === "nonveg"
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white hover:bg-red-600 hover:text-white border-red-600"
              }`}
            >
              🍗 Non-Veg Wedding
            </button>
          </div>
        </div>

        {/* STEP 2: PLANS */}
        {type && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg">
            <h3 className="text-lg font-semibold mb-6 text-center text-[#3C1285]">
              Choose Plan
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.keys(weddingPdfUrls[type]).map((plan) => (
                <button
                  key={plan}
                  onClick={() => handlePlanClick(plan as WeddingPlan)}
                  className="px-8 py-5 rounded-2xl bg-[#3C1285] text-white font-semibold text-lg hover:bg-[#2b0e63] transition shadow-md"
                >
                  {plan.toUpperCase()} PLAN
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              Selecting a plan will open the detailed menu PDF.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WeddingSelector;
