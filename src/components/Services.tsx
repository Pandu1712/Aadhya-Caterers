import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Send } from "lucide-react";
import { categoriesData, Category, Plan } from "../data/menuData";

const Services = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = categoriesData.find(
    (c) => c.id === categoryId
  ) as Category;

  // DEFAULT PLAN AUTO SELECT
  const [selectedPlan, setSelectedPlan] = useState<Plan>(
    category.plans[0]
  );
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const sendToWhatsApp = () => {
    if (selectedItems.length === 0) {
      alert("Please select items");
      return;
    }

    let message = `*Aadhya Caterers – Order Enquiry*\n\n`;
    message += `*Category:* ${category.name}\n`;
    message += `*Plan:* ${selectedPlan.name}\n\n`;

    selectedPlan.items.forEach((sec) => {
      const chosen = sec.items.filter((i) =>
        selectedItems.includes(i.id)
      );
      if (chosen.length > 0) {
        message += `*${sec.category}:*\n`;
        chosen.forEach((i) => (message += `• ${i.name}\n`));
        message += `\n`;
      }
    });

    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-[#F6F4FB]">
      <div className="max-w-7xl mx-auto px-4">

        {/* BACK */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-[#3C1285] font-semibold"
        >
          ← Back to Categories
        </button>

        <h2 className="text-3xl font-bold text-center mb-10 text-[#3C1285]">
          {category.name} Plans
        </h2>

        {/* PLANS */}
        <div className="flex justify-center gap-6 mb-14">
          {category.plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => {
                setSelectedPlan(plan);
                setSelectedItems([]);
              }}
              className={`px-8 py-3 rounded-full font-semibold border transition ${
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-8 rounded-3xl shadow-lg">
          {selectedPlan.items.map((sec) => (
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

        {selectedItems.length > 0 && (
          <div className="text-center mt-12">
            <button
              onClick={sendToWhatsApp}
              className="px-10 py-4 bg-[#3C1285] text-white rounded-full flex items-center gap-2 mx-auto"
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
