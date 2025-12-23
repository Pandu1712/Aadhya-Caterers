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
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Wedding Catering',
    'Birthday Parties',
    'Corporate Events',
    'Anniversary Celebrations',
    'Religious Functions',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-[#F6F4FB] text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ================= TOP GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#3C1285] p-2 rounded-full">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
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
                  <div>+91 98765 43210</div>
                  <div>+91 98765 43211</div>
                </div>
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <Mail className="w-5 h-5 text-[#3C1285] mr-2 mt-0.5" />
                info@aadhyacaterers.com
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
