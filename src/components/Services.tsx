import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { categoriesData, Category, Plan } from "../data/menuData";

const Services = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const category: Category | undefined = categoriesData.find(
    (c) => c.id === categoryId
  );

  /* ---------------- SAFE REDIRECT ---------------- */
  useEffect(() => {
    if (!category) {
      navigate("/");
    }
  }, [category, navigate]);

  if (!category || !category.plans || category.plans.length === 0) {
    return null;
  }

  /* ---------------- SAFE STATE INIT ---------------- */
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(
    category.plans[0] ?? null
  );
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  if (!selectedPlan) {
    return null;
  }

  /* ---------------- HANDLERS ---------------- */
  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const sendToWhatsApp = () => {
    if (selectedItems.length === 0) return;

    let message = `*Aadhya Caterers – Order Enquiry*\n\n`;
    message += `*Category:* ${category.name}\n`;
    message += `*Plan:* ${selectedPlan.name}\n\n`;

    selectedPlan.items?.forEach((sec) => {
      const chosen = sec.items.filter((i) =>
        selectedItems.includes(i.id)
      );

      if (chosen.length > 0) {
        message += `*${sec.category}:*\n`;
        chosen.forEach((i) => {
          message += `• ${i.name}\n`;
        });
        message += `\n`;
      }
    });

    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* ---------------- UI ---------------- */
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F6F4FB]">
      <div className="max-w-7xl mx-auto px-4 mt-8">

        {/* BACK */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-[#3C1285] font-semibold"
        >
          ← Back to Categories
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#3C1285]">
          {category.name} Plans
        </h2>

        {/* PLANS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {category.plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => {
                setSelectedPlan(plan);
                setSelectedItems([]);
              }}
              className={`px-6 py-3 rounded-full font-semibold border transition ${
                selectedPlan.id === plan.id
                  ? "bg-[#3C1285] text-white"
                  : "bg-white hover:bg-[#3C1285] hover:text-white"
              }`}
            >
              {plan.icon} {plan.name}
            </button>
          ))}
        </div>

        {/* ITEMS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-white p-6 sm:p-8 rounded-3xl shadow-lg">
          {selectedPlan.items?.map((sec) => (
            <div key={sec.category} className="border rounded-xl p-4">
              <h4 className="font-semibold mb-3 text-[#3C1285]">
                {sec.category}
              </h4>

              {sec.items.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center gap-2 text-sm mb-1"
                >
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleItem(item.id)}
                  />
                  {item.name}
                </label>
              ))}
            </div>
          ))}
        </div>

        {/* WHATSAPP */}
        {selectedItems.length > 0 && (
          <div className="text-center mt-10">
            <button
              onClick={sendToWhatsApp}
              className="px-8 py-3 bg-[#3C1285] text-white rounded-full flex items-center gap-2 mx-auto"
            >
              <Send className="w-5 h-5" />
              Send to WhatsApp
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
