import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= NAV LINKS ================= */
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/categories" },

    // ✅ Required 3 menus
    { name: "Veg Menu", href: "/services/veg" },
    { name: "Non-Veg Menu", href: "/services/nonveg" },
    { name: "Wedding", href: "/wedding-plans" },

    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    {
      name: "Reviews",
      href: "https://www.google.com/search?sca_esv=5fac567e9ca3e148&sxsrf=AE3TifPBgZmJoP2jmna_0kdOqhKIsalo2g:1766550427929&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E37efH6aweGaAgikOLEZIc_zvqJC2Z6kdxz0vaWZBZ5h1dcEBCSgNOPDCicpucl27pjxGl2-xjvvZSbQMaO3usPMkWVVGls9IAtjCr-Bckn39VpdnnEHCTvvuvswkJ0UYHTKaYcrDOnOZ_WNyvtIbV6KQhTd&q=Aadhya+Caterers+%7C+Best+Catering+Service+Hyderabad+Reviews&sa=X&ved=2ahUKEwjw6e-VsdWRAxXoSmwGHYWAMRoQ0bkNegQIMBAE&biw=1536&bih=695&dpr=1.25",
      external: true,
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-sm border-b" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Go to Home"
          >
            <div className="h-14 w-14 bg-[#3C1285] rounded-full flex items-center justify-center shadow-md">
              <img
                src="https://res.cloudinary.com/dd4oiwnep/image/upload/1000422935_1_x2mqpb.png"
                alt="Aadhya Caterers"
                className="h-10 w-10 object-contain"
              />
            </div>
            <span className="hidden md:block text-lg font-semibold text-[#3C1285]">
              Aadhya Caterers
            </span>
          </Link>

          {/* ================= DESKTOP LINKS ================= */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#3C1285] transition"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-black hover:text-[#3C1285] transition"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* ================= DESKTOP CALL ================= */}
          <div className="hidden md:flex">
            <a
              href="tel:+919398183297"
              className="flex items-center gap-2 px-5 py-2 rounded-full
              bg-[#3C1285] text-white text-sm font-semibold
              hover:bg-[#2a0d5c] transition"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* ================= MOBILE ACTIONS ================= */}
          <div className="flex items-center gap-4 md:hidden">
            <a
              href="tel:+919398183297"
              className="p-2 rounded-full bg-[#3C1285] text-white"
              aria-label="Call Now"
            >
              <Phone size={24} />
            </a>

            <button onClick={() => setIsOpen(true)} aria-label="Open menu">
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div className={`fixed inset-0 z-50 ${isOpen ? "visible" : "invisible"}`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity
          ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <span className="text-lg font-semibold text-[#3C1285]">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col px-6 py-6 gap-6 font-medium">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#3C1285]"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#3C1285]"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
