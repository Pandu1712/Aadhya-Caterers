import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://svcaterers.com/wp-content/uploads/2025/10/gallery10.jpeg',
   
    },
    {
      url: 'https://svcaterers.com/wp-content/uploads/2025/10/gallery14.jpg',
   
    },
    {
      url: 'https://svcaterers.com/wp-content/uploads/2025/10/gallery13.jpg',
    },
    {
      url: 'https://svcaterers.com/wp-content/uploads/2025/10/gallery9.jpg',
    },
    {
      url: 'https://svcaterers.com/wp-content/uploads/2025/10/gallery8.jpg',
    
    },
    {
      url: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1765031545/WhatsApp_Image_2025-12-06_at_09.38.05_3463ee08_ijfbiz.jpg',
     
    },
    {
      url: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1765031546/WhatsApp_Image_2025-12-06_at_09.38.05_b5595bee_qr6qeq.jpg',
    
    },
    {
      url: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1765031546/WhatsApp_Image_2025-12-06_at_09.38.04_035c9d76_s3hh4m.jpg',
    
    },
    {
      url: 'https://svcaterers.com/wp-content/uploads/2025/10/gallery7.webp',
   
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
        
                  className="w-full h-full object-cover
                  group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  flex items-end">
                  <p className="text-white text-sm font-medium p-4">
                  
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
