import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div className="min-h-screen">

        <Navbar />

        {/* ================= PAGES ================= */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/categories" element={<Categories />} />
        <Route path="/services/:categoryId" element={<Services />} />
        </Routes>

        <Footer />
        <WhatsAppButton />

      </div>
    </Router>
  );
}

export default App;
