import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

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
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-full">
                <svg
                  className="w-8 h-8 text-white"
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
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Spice Caterings
                </h3>
                <p className="text-xs text-gray-400">Traditional Taste</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Bringing authentic flavors and memorable experiences to your special occasions for
              over 15 years.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-gray-800 p-2 rounded-full ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-gray-700`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <div>+91 98765 43210</div>
                  <div>+91 98765 43211</div>
                </div>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>info@spicecaterings.com</div>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>123 Spice Street, Food District, Mumbai, Maharashtra 400001</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} Spice Caterings. All rights reserved. | Designed with{' '}
                <Heart className="w-4 h-4 inline text-red-500 animate-pulse" /> for food lovers
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-sm font-semibold">
            Book Now for Your Next Event - Limited Slots Available!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
