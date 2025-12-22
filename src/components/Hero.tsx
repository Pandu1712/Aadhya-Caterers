import { useEffect, useState } from 'react';
import { ChefHat, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Traditional Indian Catering',
      subtitle: 'Authentic flavors for your special occasions',
      image:
        'https://images.pexels.com/photos/1861785/pexels-photo-1861785.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      title: 'Wedding Specialists',
      subtitle: 'Making your big day memorable with exquisite cuisine',
      image:
        'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      title: 'Royal Biryani Experience',
      subtitle: 'Aromatic spices and premium ingredients',
      image:
        'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>
      ))}

      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6 animate-fade-in">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm">
                Premium Catering Services
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {slides[currentSlide].title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up-delay">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay">
              <a
                href="#services"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <ChefHat className="w-5 h-5 mr-2" />
                  Explore Menu
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>

              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 text-center"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8 animate-fade-in-delay-2">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-gray-300">Events Catered</div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">50+</div>
                <div className="text-sm text-gray-300">Menu Items</div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">100%</div>
                <div className="text-sm text-gray-300">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-orange-500 w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
