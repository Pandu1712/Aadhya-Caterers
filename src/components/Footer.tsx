import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
   { name: 'Home', href: '/' },
  { name: 'Services', href: '/categories' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  {name:'Reviews',href:'https://www.google.com/search?sca_esv=c54719d661e4c3a9&rlz=1C1CHBD_enIN1128IN1128&sxsrf=AE3TifNl7vLmOUjGbj6yeksEltZqeJ294g:1766456748997&q=aadhya+caterers&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E37efH6aweGaAgikOLEZIc98BbKKrF4cqSJcGY8YS3tU8jcJR8zftqHiQFP2bB-tG2IhHfKbjSf0qmwYwvM5QvRQ1LxPVMEVCViO-wPt6-4eegcP2azMuTZ6rlSNY-ngShvkrSLkWCM84f4acUupwa5F_TTR&sa=X&ved=2ahUKEwjTzqOY1NKRAxWDRmwGHcrdHJQQrrQLegQIGxAB&biw=1536&bih=695&dpr=1.25'}
  ];

  const services = [
    'Wedding Catering',
    'Birthday Parties',
    'Corporate Events',
    'Anniversary Celebrations',
    'Religious Functions',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Aadhyacaterers/100083312080646/' },
    { icon: Instagram, href: 'https://www.instagram.com/aadhyacaterers/' },
    { icon: Twitter, href: 'https://x.com/aadhyacaterers' },
    { icon: Youtube, href: 'https://youtube.com/@aadhyacaterers?si=mG8IAcJmoEVnv6fV' },
  ];

  return (
    <footer className="bg-[#F6F4FB] text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ================= TOP GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
             <div className=" p-2 rounded-full flex items-center justify-center">
  <img
    src="https://res.cloudinary.com/dd4oiwnep/image/upload/AadhyaLogo_npj15z.png"   // 👈 change path if needed
    alt="Aadhya Caterers Logo"
    className="w-14 h-14 object-contain"
  />
</div>

              <div>
                <h3 className="text-xl font-semibold text-[#3C1285]">
                  Aadhya Caterers
                </h3>
                <p className="text-xs text-gray-500">Traditional Taste</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Bringing authentic flavors and memorable experiences to your
              special occasions with elegance and care.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-full bg-white border
                    border-gray-200 text-gray-500
                    hover:text-[#3C1285] hover:border-[#3C1285]
                    transition"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#3C1285]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#3C1285] transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#3C1285]">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 flex items-start"
                >
                  <span className="text-[#3C1285] mr-2">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#3C1285]">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-gray-600">
                <Phone className="w-5 h-5 text-[#3C1285] mr-2 mt-0.5" />
                <div>
                  <div>+91 9494 055 353</div>
                  <div>+91 9398 183 297</div>
                </div>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <Mail className="w-5 h-5 text-[#3C1285] mr-2 mt-0.5" />
                aadhyacaterers01@gmail.com
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <MapPin className="w-5 h-5 text-[#3C1285] mr-2 mt-0.5" />
                Hyderabad, Telangana, India
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © {currentYear} Aadhya Caterers. Made with{' '}
            <Heart className="inline w-4 h-4 text-[#3C1285]" /> for food lovers
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-[#3C1285] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#3C1285] transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* ================= CTA STRIP ================= */}
      <div className="bg-gradient-to-r from-[#3C1285] to-[#5B3BBE] py-3">
        <p className="text-center text-white text-sm font-medium">
          Book Now for Your Next Event – Limited Slots Available!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
