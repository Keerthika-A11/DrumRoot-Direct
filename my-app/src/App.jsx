import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Navbar & WhatsApp Button
import Navbar from './components/Navbar';
import WhatsAppButton from './WhatsApp/WhatsAppButton'; // Ungaloda path ku etha maari maththikonga

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar ella page-layum varum */}
      <Navbar />

      {/* Pages switch aagum */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>

      {/* *** IMPORTANT: Routes-kku veliya irukurathunala, intha WhatsAppButton moththa website-layum (ella page-layum) floating-ah kaattum *** */}
      <WhatsAppButton />

    </BrowserRouter>
  );
}

export default App;