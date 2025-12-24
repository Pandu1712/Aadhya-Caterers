import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  const phoneNumber = "+919398183297"; // change to your number

  return (
    <a
      href={`tel:${phoneNumber}`}
      aria-label="Call us"
      className="
        fixed
        bottom-5 left-5
        sm:bottom-6 sm:left-6
        z-50
        flex items-center justify-center
        w-14 h-14 sm:w-16 sm:h-16
        rounded-full
        bg-green-600
        text-white
        shadow-lg
        hover:bg-green-700
        active:scale-95
        transition-all
      "
    >
      <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
    </a>
  );
};

export default FloatingCallButton;
