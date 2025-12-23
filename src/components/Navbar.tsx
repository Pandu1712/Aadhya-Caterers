import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];


  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2">
           <Link
  to="/"
  className="flex items-center gap-2 cursor-pointer"
  aria-label="Go to Home"
>
  <img
    src="./AadhyaLogo.png"
    alt="Aadhya Caterers"
    className="h-14 w-14 object-contain rounded-full"
  />
  <span className="hidden md:block text-lg font-semibold text-[#3C1285] tracking-wide">
    Aadhya Caterers
  </span>
</Link>

          </div>

          {/* DESKTOP LINKS */}
         <nav className="hidden md:flex gap-8 text-sm font-medium">
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className={`transition ${
        scrolled
          ? 'text-black hover:text-[#3C1285]'
          : 'text-black hover:text-[#3C1285]'
      }`}
    >
      {link.name}
    </a>
  ))}
</nav>


          {/* DESKTOP CALL */}
          <div className="hidden md:flex">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 px-5 py-2 rounded-full
              bg-[#3C1285] text-white text-sm font-semibold
              hover:bg-[#2a0d5c] transition"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-4 md:hidden">
            <a
              href="tel:+919999999999"
              className="p-2 rounded-full bg-[#3C1285] text-white"
              aria-label="Call Now"
            >
              <Phone size={18} />
            </a>

            <button onClick={() => setIsOpen(true)} aria-label="Open menu">
              <Menu size={26} className="text-gray-800" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE SIDE NAV ================= */}
      <div className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity
          ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <span className="text-lg font-semibold text-[#3C1285]">
              Menu
            </span>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-6 py-6 gap-6 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#3C1285]"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
