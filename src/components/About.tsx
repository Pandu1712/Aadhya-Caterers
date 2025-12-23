import { Users, Award, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Chefs',
      description:
        'Highly skilled chefs with deep knowledge of traditional Indian cuisine and modern presentation.',
    },
    {
      icon: Award,
      title: 'Premium Ingredients',
      description:
        'Fresh, high-quality ingredients sourced carefully to maintain authentic taste and hygiene.',
    },
    {
      icon: Clock,
      title: 'Timely Execution',
      description:
        'Well-planned service and punctual delivery ensuring smooth and stress-free events.',
    },
    {
      icon: ThumbsUp,
      title: 'Trusted by Families',
      description:
        'A reputation built on trust, consistency, and customer satisfaction across generations.',
    },
  ];

  const stats = [
    { value: '30+', label: 'Years of Experience' },
    { value: '5000+', label: 'Events Catered' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Speciality Dishes' },
  ];

  return (
    <section className="py-20 bg-[#F6F4FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= TOP CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#3C1285]">Aadhya Caterers</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With more than <strong>15 years of excellence</strong>, Aadhya Caterers
              has become a trusted name for traditional Indian catering. Our journey
              is rooted in authentic flavors, time-honored recipes, and heartfelt hospitality.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From intimate family functions to grand weddings, we bring passion,
              precision, and cultural richness to every celebration we serve.
            </p>

            {/* PROMISE */}
            <div className="bg-gradient-to-r from-[#3C1285] to-[#5B3BBE] text-white rounded-2xl p-6 shadow-md max-w-lg">
              <p className="text-xl font-semibold mb-1">Our Promise</p>
              <p className="text-sm text-white/90">
                Authentic taste, hygienic preparation, and service that truly honors traditions.
              </p>
            </div>
          </div>

          {/* IMAGES */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765031544/WhatsApp_Image_2025-12-06_at_09.38.11_9edaad83_aslx3j.jpg",
                "https://res.cloudinary.com/dd4oiwnep/image/upload/v1765031546/WhatsApp_Image_2025-12-06_at_09.38.04_c62cd42b_reeb6q.jpg",
                "https://svcaterers.com/wp-content/uploads/2025/10/gallery12.jpg",
                "https://svcaterers.com/wp-content/uploads/2025/10/gallery14.jpg"
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Catering moments"
                  className={`rounded-2xl object-cover h-64 w-full shadow-md hover:scale-105 transition ${
                    i % 2 !== 0 ? 'mt-8' : ''
                  }`}
                />
              ))}
            </div>

            {/* EXPERIENCE BADGE */}
            <div className="absolute -bottom-6 -left-6 bg-[#3C1285] text-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm tracking-wide">Years of Experience</div>
            </div>
          </div>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#E3DDF5]
                hover:border-[#3C1285] transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3C1285] to-[#5B3BBE]
                flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================= STATS (2×2 GRID – BOTTOM) ================= */}
        {/* ================= STATS (RESPONSIVE) ================= */}
<div className="mt-20 flex justify-center">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
    {stats.map((item, i) => (
      <div
        key={i}
        className="
          bg-gradient-to-br from-[#3C1285] to-[#5B3BBE]
          text-white
          rounded-2xl
          p-8
          text-center
          shadow-lg
        "
      >
        <div className="text-3xl sm:text-4xl font-bold mb-2">
          {item.value}
        </div>
        <div className="text-sm sm:text-base text-white/90">
          {item.label}
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
};

export default About;
