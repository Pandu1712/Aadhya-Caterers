import { useState } from 'react';
import { Check, Send, Leaf, Drumstick, Heart } from 'lucide-react';

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

  const menuData: Record<string, Record<string, Plan>> = {
    veg: {
      silver: {
        name: 'Silver Plan',
        icon: '🥈',
        items: [
          {
            category: 'Sweets',
            items: [
              { id: 'v-s-s1', name: 'Gulab Jamun' },
              { id: 'v-s-s2', name: 'Rasgulla' },
              { id: 'v-s-s3', name: 'Jalebi' },
            ],
          },
          {
            category: 'Hot Items',
            items: [
              { id: 'v-s-h1', name: 'Paneer Butter Masala' },
              { id: 'v-s-h2', name: 'Dal Tadka' },
              { id: 'v-s-h3', name: 'Mix Veg Curry' },
            ],
          },
          {
            category: 'Rice & Breads',
            items: [
              { id: 'v-s-r1', name: 'Jeera Rice' },
              { id: 'v-s-r2', name: 'Roti' },
              { id: 'v-s-r3', name: 'Naan' },
            ],
          },
        ],
      },
      basic: {
        name: 'Basic Plan',
        icon: '🥉',
        items: [
          {
            category: 'Sweets',
            items: [
              { id: 'v-b-s1', name: 'Gulab Jamun' },
              { id: 'v-b-s2', name: 'Kheer' },
            ],
          },
          {
            category: 'Hot Items',
            items: [
              { id: 'v-b-h1', name: 'Dal Fry' },
              { id: 'v-b-h2', name: 'Aloo Gobi' },
            ],
          },
          {
            category: 'Rice & Breads',
            items: [
              { id: 'v-b-r1', name: 'Plain Rice' },
              { id: 'v-b-r2', name: 'Chapati' },
            ],
          },
        ],
      },
      standard: {
        name: 'Standard Plan',
        icon: '⭐',
        items: [
          {
            category: 'Sweets',
            items: [
              { id: 'v-st-s1', name: 'Gulab Jamun' },
              { id: 'v-st-s2', name: 'Rasgulla' },
              { id: 'v-st-s3', name: 'Jalebi' },
              { id: 'v-st-s4', name: 'Mysore Pak' },
            ],
          },
          {
            category: 'Hot Items',
            items: [
              { id: 'v-st-h1', name: 'Paneer Butter Masala' },
              { id: 'v-st-h2', name: 'Dal Makhani' },
              { id: 'v-st-h3', name: 'Veg Kolhapuri' },
              { id: 'v-st-h4', name: 'Mushroom Masala' },
            ],
          },
          {
            category: 'Rice & Biryani',
            items: [
              { id: 'v-st-r1', name: 'Veg Biryani' },
              { id: 'v-st-r2', name: 'Pulao' },
              { id: 'v-st-r3', name: 'Curd Rice' },
            ],
          },
          {
            category: 'Breads',
            items: [
              { id: 'v-st-b1', name: 'Butter Naan' },
              { id: 'v-st-b2', name: 'Tandoori Roti' },
              { id: 'v-st-b3', name: 'Paratha' },
            ],
          },
        ],
      },
      traditional: {
        name: 'Traditional Plan',
        icon: '👑',
        items: [
          {
            category: 'Sweets',
            items: [
              { id: 'v-t-s1', name: 'Gulab Jamun' },
              { id: 'v-t-s2', name: 'Rasgulla' },
              { id: 'v-t-s3', name: 'Jalebi' },
              { id: 'v-t-s4', name: 'Mysore Pak' },
              { id: 'v-t-s5', name: 'Kaju Katli' },
            ],
          },
          {
            category: 'Hot Items',
            items: [
              { id: 'v-t-h1', name: 'Shahi Paneer' },
              { id: 'v-t-h2', name: 'Dal Makhani' },
              { id: 'v-t-h3', name: 'Malai Kofta' },
              { id: 'v-t-h4', name: 'Palak Paneer' },
              { id: 'v-t-h5', name: 'Veg Kolhapuri' },
            ],
          },
          {
            category: 'Rice & Biryani',
            items: [
              { id: 'v-t-r1', name: 'Hyderabadi Veg Biryani' },
              { id: 'v-t-r2', name: 'Kashmiri Pulao' },
              { id: 'v-t-r3', name: 'Curd Rice' },
              { id: 'v-t-r4', name: 'Lemon Rice' },
            ],
          },
          {
            category: 'Breads',
            items: [
              { id: 'v-t-b1', name: 'Butter Naan' },
              { id: 'v-t-b2', name: 'Garlic Naan' },
              { id: 'v-t-b3', name: 'Tandoori Roti' },
              { id: 'v-t-b4', name: 'Stuffed Paratha' },
            ],
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
            category: 'Sweets',
            items: [
              { id: 'nv-s-s1', name: 'Gulab Jamun' },
              { id: 'nv-s-s2', name: 'Rasgulla' },
            ],
          },
          {
            category: 'Hot Items',
            items: [
              { id: 'nv-s-h1', name: 'Chicken Curry' },
              { id: 'nv-s-h2', name: 'Mutton Gravy' },
              { id: 'nv-s-h3', name: 'Egg Curry' },
            ],
          },
          {
            category: 'Biryani',
            items: [
              { id: 'nv-s-b1', name: 'Chicken Biryani' },
              { id: 'nv-s-b2', name: 'Plain Rice' },
            ],
          },
          {
            category: 'Breads',
            items: [
              { id: 'nv-s-br1', name: 'Roti' },
              { id: 'nv-s-br2', name: 'Naan' },
            ],
          },
        ],
      },
      basic: {
        name: 'Basic Plan',
        icon: '🥉',
        items: [
          {
            category: 'Sweets',
            items: [{ id: 'nv-b-s1', name: 'Gulab Jamun' }],
          },
          {
            category: 'Hot Items',
            items: [
              { id: 'nv-b-h1', name: 'Chicken Curry' },
              { id: 'nv-b-h2', name: 'Egg Masala' },
            ],
          },
          {
            category: 'Rice',
            items: [{ id: 'nv-b-r1', name: 'Plain Rice' }],
          },
          {
            category: 'Breads',
            items: [{ id: 'nv-b-br1', name: 'Chapati' }],
          },
        ],
      },
      standard: {
        name: 'Standard Plan',
        icon: '⭐',
        items: [
          {
            category: 'Sweets',
            items: [
              { id: 'nv-st-s1', name: 'Gulab Jamun' },
              { id: 'nv-st-s2', name: 'Rasgulla' },
              { id: 'nv-st-s3', name: 'Jalebi' },
            ],
          },
          {
            category: 'Hot Items',
            items: [
              { id: 'nv-st-h1', name: 'Butter Chicken' },
              { id: 'nv-st-h2', name: 'Mutton Rogan Josh' },
              { id: 'nv-st-h3', name: 'Fish Curry' },
              { id: 'nv-st-h4', name: 'Prawn Masala' },
            ],
          },
          {
            category: 'Biryani',
            items: [
              { id: 'nv-st-b1', name: 'Chicken Biryani' },
              { id: 'nv-st-b2', name: 'Mutton Biryani' },
            ],
          },
          {
            category: 'Breads',
            items: [
              { id: 'nv-st-br1', name: 'Butter Naan' },
              { id: 'nv-st-br2', name: 'Tandoori Roti' },
              { id: 'nv-st-br3', name: 'Paratha' },
            ],
          },
        ],
      },
      traditional: {
        name: 'Traditional Plan',
        icon: '👑',
        items: [
          {
            category: 'Sweets',
            items: [
              { id: 'nv-t-s1', name: 'Gulab Jamun' },
              { id: 'nv-t-s2', name: 'Rasgulla' },
              { id: 'nv-t-s3', name: 'Jalebi' },
              { id: 'nv-t-s4', name: 'Kaju Katli' },
            ],
          },
          {
            category: 'Hot Items',
            items: [
              { id: 'nv-t-h1', name: 'Butter Chicken' },
              { id: 'nv-t-h2', name: 'Mutton Rogan Josh' },
              { id: 'nv-t-h3', name: 'Fish Tikka Masala' },
              { id: 'nv-t-h4', name: 'Prawn Curry' },
              { id: 'nv-t-h5', name: 'Chicken Tikka' },
            ],
          },
          {
            category: 'Biryani',
            items: [
              { id: 'nv-t-b1', name: 'Hyderabadi Chicken Biryani' },
              { id: 'nv-t-b2', name: 'Mutton Dum Biryani' },
              { id: 'nv-t-b3', name: 'Fish Biryani' },
            ],
          },
          {
            category: 'Breads',
            items: [
              { id: 'nv-t-br1', name: 'Butter Naan' },
              { id: 'nv-t-br2', name: 'Garlic Naan' },
              { id: 'nv-t-br3', name: 'Tandoori Roti' },
              { id: 'nv-t-br4', name: 'Kulcha' },
            ],
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
            items: [
              { id: 'w-s-st1', name: 'Veg Samosa' },
              { id: 'w-s-st2', name: 'Paneer Tikka' },
              { id: 'w-s-st3', name: 'Chicken 65' },
            ],
          },
          {
            category: 'Sweets',
            items: [
              { id: 'w-s-s1', name: 'Gulab Jamun' },
              { id: 'w-s-s2', name: 'Rasgulla' },
              { id: 'w-s-s3', name: 'Jalebi' },
            ],
          },
          {
            category: 'Main Course',
            items: [
              { id: 'w-s-m1', name: 'Paneer Butter Masala' },
              { id: 'w-s-m2', name: 'Chicken Curry' },
              { id: 'w-s-m3', name: 'Dal Tadka' },
            ],
          },
          {
            category: 'Rice & Biryani',
            items: [
              { id: 'w-s-r1', name: 'Veg Biryani' },
              { id: 'w-s-r2', name: 'Chicken Biryani' },
            ],
          },
        ],
      },
      basic: {
        name: 'Basic Wedding',
        icon: '🥉',
        items: [
          {
            category: 'Starters',
            items: [
              { id: 'w-b-st1', name: 'Veg Pakora' },
              { id: 'w-b-st2', name: 'Chicken Kebab' },
            ],
          },
          {
            category: 'Sweets',
            items: [
              { id: 'w-b-s1', name: 'Gulab Jamun' },
              { id: 'w-b-s2', name: 'Kheer' },
            ],
          },
          {
            category: 'Main Course',
            items: [
              { id: 'w-b-m1', name: 'Dal Fry' },
              { id: 'w-b-m2', name: 'Chicken Curry' },
            ],
          },
          {
            category: 'Rice',
            items: [{ id: 'w-b-r1', name: 'Jeera Rice' }],
          },
        ],
      },
      standard: {
        name: 'Standard Wedding',
        icon: '⭐',
        items: [
          {
            category: 'Starters',
            items: [
              { id: 'w-st-st1', name: 'Paneer Tikka' },
              { id: 'w-st-st2', name: 'Chicken 65' },
              { id: 'w-st-st3', name: 'Fish Fry' },
              { id: 'w-st-st4', name: 'Veg Manchurian' },
            ],
          },
          {
            category: 'Sweets',
            items: [
              { id: 'w-st-s1', name: 'Gulab Jamun' },
              { id: 'w-st-s2', name: 'Rasgulla' },
              { id: 'w-st-s3', name: 'Jalebi' },
              { id: 'w-st-s4', name: 'Mysore Pak' },
            ],
          },
          {
            category: 'Main Course Veg',
            items: [
              { id: 'w-st-mv1', name: 'Paneer Butter Masala' },
              { id: 'w-st-mv2', name: 'Malai Kofta' },
              { id: 'w-st-mv3', name: 'Dal Makhani' },
            ],
          },
          {
            category: 'Main Course Non-Veg',
            items: [
              { id: 'w-st-mn1', name: 'Butter Chicken' },
              { id: 'w-st-mn2', name: 'Mutton Rogan Josh' },
              { id: 'w-st-mn3', name: 'Fish Curry' },
            ],
          },
          {
            category: 'Biryani',
            items: [
              { id: 'w-st-b1', name: 'Veg Biryani' },
              { id: 'w-st-b2', name: 'Chicken Biryani' },
              { id: 'w-st-b3', name: 'Mutton Biryani' },
            ],
          },
        ],
      },
      traditional: {
        name: 'Traditional Wedding',
        icon: '👑',
        items: [
          {
            category: 'Welcome Drinks',
            items: [
              { id: 'w-t-wd1', name: 'Fresh Juice' },
              { id: 'w-t-wd2', name: 'Soft Drinks' },
              { id: 'w-t-wd3', name: 'Lassi' },
            ],
          },
          {
            category: 'Starters',
            items: [
              { id: 'w-t-st1', name: 'Paneer Tikka' },
              { id: 'w-t-st2', name: 'Chicken 65' },
              { id: 'w-t-st3', name: 'Fish Fry' },
              { id: 'w-t-st4', name: 'Prawn Fry' },
              { id: 'w-t-st5', name: 'Veg Manchurian' },
            ],
          },
          {
            category: 'Sweets',
            items: [
              { id: 'w-t-s1', name: 'Gulab Jamun' },
              { id: 'w-t-s2', name: 'Rasgulla' },
              { id: 'w-t-s3', name: 'Jalebi' },
              { id: 'w-t-s4', name: 'Mysore Pak' },
              { id: 'w-t-s5', name: 'Kaju Katli' },
              { id: 'w-t-s6', name: 'Ice Cream' },
            ],
          },
          {
            category: 'Main Course Veg',
            items: [
              { id: 'w-t-mv1', name: 'Shahi Paneer' },
              { id: 'w-t-mv2', name: 'Malai Kofta' },
              { id: 'w-t-mv3', name: 'Dal Makhani' },
              { id: 'w-t-mv4', name: 'Palak Paneer' },
              { id: 'w-t-mv5', name: 'Veg Kolhapuri' },
            ],
          },
          {
            category: 'Main Course Non-Veg',
            items: [
              { id: 'w-t-mn1', name: 'Butter Chicken' },
              { id: 'w-t-mn2', name: 'Mutton Rogan Josh' },
              { id: 'w-t-mn3', name: 'Fish Tikka Masala' },
              { id: 'w-t-mn4', name: 'Prawn Curry' },
              { id: 'w-t-mn5', name: 'Chicken Tikka' },
            ],
          },
          {
            category: 'Biryani',
            items: [
              { id: 'w-t-b1', name: 'Hyderabadi Veg Biryani' },
              { id: 'w-t-b2', name: 'Chicken Dum Biryani' },
              { id: 'w-t-b3', name: 'Mutton Dum Biryani' },
              { id: 'w-t-b4', name: 'Fish Biryani' },
            ],
          },
          {
            category: 'Breads',
            items: [
              { id: 'w-t-br1', name: 'Butter Naan' },
              { id: 'w-t-br2', name: 'Garlic Naan' },
              { id: 'w-t-br3', name: 'Tandoori Roti' },
              { id: 'w-t-br4', name: 'Kulcha' },
              { id: 'w-t-br5', name: 'Stuffed Paratha' },
            ],
          },
        ],
      },
    },
  };

  const categories = [
    { id: 'veg', name: 'Vegetarian', icon: Leaf, color: 'from-green-500 to-emerald-600' },
    {
      id: 'nonveg',
      name: 'Non-Vegetarian',
      icon: Drumstick,
      color: 'from-red-500 to-orange-600',
    },
    { id: 'wedding', name: 'Wedding Special', icon: Heart, color: 'from-pink-500 to-rose-600' },
  ];

  const plans = ['silver', 'basic', 'standard', 'traditional'];

  const handleItemToggle = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const sendToWhatsApp = () => {
    if (selectedItems.length === 0) {
      alert('Please select at least one item');
      return;
    }

    const currentPlan = menuData[selectedCategory][selectedPlan];
    let message = `*Spice Caterings - Order Request*\n\n`;
    message += `*Category:* ${categories.find((c) => c.id === selectedCategory)?.name}\n`;
    message += `*Plan:* ${currentPlan.name} ${currentPlan.icon}\n\n`;
    message += `*Selected Items:*\n`;

    currentPlan.items.forEach((section) => {
      const sectionItems = section.items.filter((item) => selectedItems.includes(item.id));
      if (sectionItems.length > 0) {
        message += `\n*${section.category}:*\n`;
        sectionItems.forEach((item) => {
          message += `✓ ${item.name}\n`;
        });
      }
    });

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentPlan = menuData[selectedCategory][selectedPlan];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Catering <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your category, select your plan, and customize your menu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedItems([]);
                }}
                className={`relative p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-br ${category.color} text-white shadow-2xl scale-105`
                    : 'bg-white text-gray-700 hover:shadow-xl'
                }`}
              >
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold">{category.name}</h3>
                {selectedCategory === category.id && (
                  <div className="absolute top-4 right-4">
                    <Check className="w-6 h-6" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {plans.map((plan) => {
            const planData = menuData[selectedCategory][plan];
            return (
              <button
                key={plan}
                onClick={() => {
                  setSelectedPlan(plan);
                  setSelectedItems([]);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedPlan === plan
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-400'
                }`}
              >
                <span className="mr-2">{planData.icon}</span>
                {planData.name}
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              {currentPlan.name}
            </span>{' '}
            - Menu Selection
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPlan.items.map((section) => (
              <div
                key={section.category}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200"
              >
                <h4 className="text-xl font-bold mb-4 text-orange-800 border-b-2 border-orange-300 pb-2">
                  {section.category}
                </h4>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center space-x-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleItemToggle(item.id)}
                        className="w-5 h-5 text-orange-600 border-2 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer"
                      />
                      <span className="text-gray-700 group-hover:text-orange-600 transition-colors duration-200">
                        {item.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {selectedItems.length > 0 && (
            <div className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl px-6 py-3 mb-6">
                <p className="text-lg font-semibold text-gray-700">
                  <span className="text-orange-600 text-2xl">{selectedItems.length}</span> items
                  selected
                </p>
              </div>
              <button
                onClick={sendToWhatsApp}
                className="group relative px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Send className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Send Order to WhatsApp
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
