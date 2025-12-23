import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Royal Biryani',
    },
    {
      url: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Traditional Thali',
    },
    {
      url: 'https://images.pexels.com/photos/1861785/pexels-photo-1861785.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Indian Sweets',
    },
    {
      url: 'https://images.pexels.com/photos/4449064/pexels-photo-4449064.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Paneer Tikka',
    },
    {
      url: 'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Butter Chicken',
    },
    {
      url: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dal Makhani',
    },
    {
      url: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Wedding Feast',
    },
    {
      url: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Catering Arrangement',
    },
    {
      url: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Freshly Baked Naan',
    },
  ];

  return (
    <section className="py-20 bg-[#F6F4FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#3C1285]">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse of our traditional flavors, grand feasts, and memorable celebrations
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.url)}
              className="group cursor-pointer rounded-2xl overflow-hidden
              bg-white border border-[#E3DDF5]
              hover:border-[#3C1285]
              transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover
                  group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  flex items-end">
                  <p className="text-white text-sm font-medium p-4">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50
          flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#3C1285] transition"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
