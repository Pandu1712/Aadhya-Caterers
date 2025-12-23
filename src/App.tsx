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
import WeddingSelector from './components/WeddingSelector';
import ScrollToTop from './components/ScrollToTop';
import FloatingCallButton from './components/FloatingCallButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
            <Route path="/wedding-plans" element={<WeddingSelector />} />

        <Route path="/services/:categoryId" element={<Services />} />
        </Routes>
<FloatingCallButton />

        <Footer />
        <WhatsAppButton />

      </div>
    </Router>
  );
}

export default App;
