import { useEffect, useState } from 'react';
import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery'; // ✅ IMPORT
import Reviews from './Reviews';
import About from './About';
import Contact from './Contact';
import Categories from './Categories';
import TermsAndConditions from './TermsAndConditions';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Traditional Indian Catering',
      subtitle: 'Authentic flavors for your special occasions',
      image:
"https://www.kanakamahalakshmicatering.com/extra-images/gallery/ga1.jpg"    },
    {
      title: 'Wedding Specialists',
      subtitle: 'Making your big day memorable with exquisite cuisine',
      image:
"https://webestcateringservices.com/wp-content/uploads/al_opt_content/IMAGE/webestcateringservices.com/wp-content/uploads/2024/06/catering-services-in-vizag.jpeg.bv.webp?bv_host=webestcateringservices.com"    },
    {
      title: 'Royal Biryani Experience',
      subtitle: 'Aromatic spices and premium ingredients',
      image:
"https://svcaterers.com/wp-content/uploads/2025/10/gallery14.jpg"    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section id="home" className="relative min-h-screen overflow-hidden bg-[#3C1285]">

        {/* SLIDES */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105"
            />

            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3C1285]/90 via-black/30 to-transparent" />
          </div>
        ))}

        {/* CONTENT */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-5 w-full">
            <div className="max-w-3xl text-center lg:text-left">

              <h1 className="text-white font-serif font-bold leading-tight
                text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6">
                {slides[currentSlide].title}
              </h1>

              <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-10">
                {slides[currentSlide].subtitle}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/categories"
                  className="inline-flex items-center justify-center gap-2
                    px-8 py-4 rounded-full
                    bg-white text-[#3C1285] font-semibold
                    hover:bg-opacity-90 transition"
                >
                  <ChefHat className="w-5 h-5" />
                  View Menu
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center
                    px-8 py-4 rounded-full
                    border border-white text-white
                    hover:bg-white hover:text-[#3C1285]
                    transition"
                >
                  Contact Us
                </Link>
              </div>

              {/* STATS */}
             

            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <About/>
       <Categories/>
       <TermsAndConditions/>
      <Gallery />
     
      <Reviews/>
      <Contact/>
    </>
  );
};

export default Hero;
