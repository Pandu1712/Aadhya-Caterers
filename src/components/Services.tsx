import { useState } from 'react';
import { Check, Send, Leaf, Drumstick, Heart } from 'lucide-react';

/* ================= ICON SERVICES (TOP) ================= */
const serviceIcons = [
  { name: 'Wedding Catering', icon: '💍' },
  { name: 'Housewarming', icon: '🏠' },
  { name: 'Kitty Party', icon: '🎉' },
  { name: 'Outdoor Catering', icon: '⛺' },
  { name: 'Birthday Catering', icon: '🎂' },
  { name: 'Anniversary', icon: '❤️' },
  { name: 'Family Parties', icon: '👨‍👩‍👧‍👦' },
  { name: 'Pooja at Home', icon: '🪔' },
  { name: 'Cultural Events', icon: '🎭' },
];

interface MenuItem {
  id: string;
  name: string;
}

interface Plan {
  name: string;
  icon: string;
  items: {
    category: string;
    items: MenuItem[];
  }[];
}

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('veg');
  const [selectedPlan, setSelectedPlan] = useState('silver');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  /* ================= CATEGORY BUTTONS ================= */
  const categories = [
    { id: 'veg', name: 'Vegetarian', icon: Leaf },
    { id: 'nonveg', name: 'Non-Vegetarian', icon: Drumstick },
    { id: 'wedding', name: 'Wedding Special', icon: Heart },
  ];

  const plans = ['silver', 'basic', 'standard', 'traditional'];

  /* ================= MENU DATA ================= */
  const menuData: Record<string, Record<string, Plan>> = {
    veg: {
      silver: {
        name: 'Silver Plan',
        icon: '🥈',
        items: [
          {
            category: 'Sweets',
            items: [
              { id: 'v1', name: 'Gulab Jamun' },
              { id: 'v2', name: 'Rasgulla' },
              { id: 'v3', name: 'Jalebi' },
            ],
          },
          {
            category: 'Curries',
            items: [
              { id: 'v4', name: 'Paneer Butter Masala' },
              { id: 'v5', name: 'Dal Tadka' },
              { id: 'v6', name: 'Mix Veg Curry' },
            ],
          },
        ],
      },
      basic: {
        name: 'Basic Plan',
        icon: '🥉',
        items: [
          {
            category: 'Curries',
            items: [
              { id: 'v7', name: 'Dal Fry' },
              { id: 'v8', name: 'Aloo Gobi' },
            ],
          },
        ],
      },
      standard: {
        name: 'Standard Plan',
        icon: '⭐',
        items: [
          {
            category: 'Biryani',
            items: [{ id: 'v9', name: 'Veg Biryani' }],
          },
        ],
      },
      traditional: {
        name: 'Traditional Plan',
        icon: '👑',
        items: [
          {
            category: 'Full Course',
            items: [{ id: 'v10', name: 'Traditional Veg Thali' }],
          },
        ],
      },
    },

    nonveg: {
      silver: {
        name: 'Silver Plan',
        icon: '🥈',
        items: [
          {
            category: 'Curries',
            items: [
              { id: 'n1', name: 'Chicken Curry' },
              { id: 'n2', name: 'Egg Curry' },
            ],
          },
        ],
      },
      basic: {
        name: 'Basic Plan',
        icon: '🥉',
        items: [
          {
            category: 'Curries',
            items: [{ id: 'n3', name: 'Egg Masala' }],
          },
        ],
      },
      standard: {
        name: 'Standard Plan',
        icon: '⭐',
        items: [
          {
            category: 'Biryani',
            items: [{ id: 'n4', name: 'Chicken Biryani' }],
          },
        ],
      },
      traditional: {
        name: 'Traditional Plan',
        icon: '👑',
        items: [
          {
            category: 'Full Course',
            items: [{ id: 'n5', name: 'Royal Non-Veg Thali' }],
          },
        ],
      },
    },

    wedding: {
      silver: {
        name: 'Silver Wedding',
        icon: '🥈',
        items: [
          {
            category: 'Starters',
            items: [{ id: 'w1', name: 'Paneer Tikka' }],
          },
        ],
      },
      basic: {
        name: 'Basic Wedding',
        icon: '🥉',
        items: [
          {
            category: 'Main Course',
            items: [{ id: 'w2', name: 'Chicken Curry' }],
          },
        ],
      },
      standard: {
        name: 'Standard Wedding',
        icon: '⭐',
        items: [
          {
            category: 'Biryani',
            items: [{ id: 'w3', name: 'Mutton Biryani' }],
          },
        ],
      },
      traditional: {
        name: 'Traditional Wedding',
        icon: '👑',
        items: [
          {
            category: 'Grand Feast',
            items: [{ id: 'w4', name: 'Complete Wedding Menu' }],
          },
        ],
      },
    },
  };

  const currentPlan = menuData[selectedCategory][selectedPlan];

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  /* ================= WHATSAPP FUNCTION (FIXED) ================= */
  const sendToWhatsApp = () => {
    if (selectedItems.length === 0) {
      alert('Please select at least one item');
      return;
    }

    let message = `*Aadhya Caterers – Order Enquiry*\n\n`;
    message += `*Category:* ${selectedCategory.toUpperCase()}\n`;
    message += `*Plan:* ${currentPlan.name}\n\n`;

    currentPlan.items.forEach((section) => {
      const selected = section.items.filter((i) =>
        selectedItems.includes(i.id)
      );

      if (selected.length > 0) {
        message += `*${section.category}:*\n`;
        selected.forEach((i) => {
          message += `• ${i.name}\n`;
        });
        message += `\n`;
      }
    });

    const phone = '919876543210'; // CHANGE NUMBER IF REQUIRED
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section className="py-20 bg-[#F6F4FB]">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= TOP ICON SERVICES ================= */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-[#3C1285]">Catering Services</span>
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 mt-10">
            {serviceIcons.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full border-2 border-[#3C1285] bg-white flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <p className="text-sm font-medium text-[#3C1285]">{s.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CATEGORY ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedItems([]);
                }}
                className={`p-6 rounded-2xl border transition ${
                  selectedCategory === cat.id
                    ? 'bg-[#3C1285] text-white'
                    : 'bg-white border-[#E3DDF5]'
                }`}
              >
                <Icon className="w-10 h-10 mx-auto mb-2" />
                <h3 className="font-semibold">{cat.name}</h3>
              </button>
            );
          })}
        </div>

        {/* ================= PLANS ================= */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {plans.map((plan) => (
            <button
              key={plan}
              onClick={() => {
                setSelectedPlan(plan);
                setSelectedItems([]);
              }}
              className={`px-6 py-3 rounded-full font-semibold border ${
                selectedPlan === plan
                  ? 'bg-[#3C1285] text-white'
                  : 'bg-white border-[#E3DDF5]'
              }`}
            >
              {menuData[selectedCategory][plan].icon}{' '}
              {menuData[selectedCategory][plan].name}
            </button>
          ))}
        </div>

        {/* ================= MENU ================= */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#3C1285]">
            {currentPlan.name}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPlan.items.map((sec) => (
              <div key={sec.category} className="border rounded-xl p-4">
                <h4 className="font-semibold mb-3 text-[#3C1285]">
                  {sec.category}
                </h4>
                {sec.items.map((item) => (
                  <label key={item.id} className="flex gap-2 items-center">
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
            <div className="text-center mt-10">
              <button
                onClick={sendToWhatsApp}
                className="px-10 py-4 bg-[#3C1285] text-white rounded-full flex items-center gap-2 mx-auto hover:opacity-90 transition"
              >
                <Send className="w-5 h-5" />
                Send Order to WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
