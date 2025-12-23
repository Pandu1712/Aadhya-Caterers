import { useNavigate } from "react-router-dom";
import { categoriesData } from "../data/menuData";

const Categories = () => {
  const navigate = useNavigate();
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
  return (
    <section id="categories" className="py-20 bg-[#F6F4FB]">
      <div className="max-w-6xl mx-auto px-4">
        

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
        <h2 className="text-4xl font-bold text-center mb-12">
          Choose <span className="text-[#3C1285]">Category</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categoriesData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/services/${cat.id}`)}
              className="p-10 rounded-2xl bg-white shadow-lg hover:shadow-xl transition text-center"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-[#3C1285]">
                {cat.name}
              </h3>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
