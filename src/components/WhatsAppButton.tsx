import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = "Hello! I'm interested in your catering services. Please provide more details.";
    const whatsappUrl = `https://wa.me/919398183297?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl">
          <MessageCircle className="w-8 h-8" />
        </div>
      </div>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <p className="font-semibold text-sm">Chat with us!</p>
      </div>
    </button>
  );
};

export default WhatsAppButton;
