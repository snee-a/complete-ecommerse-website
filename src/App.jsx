import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import MoreProductsSection from './components/MoreProductsSection';
import ProductDetail from './pages/ProductDetail';
import CategoryProducts from './pages/CategoryProducts'; // ✅ NEW IMPORT
// import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductSection />
              <MoreProductsSection />
           
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* <Route path="/category/:category" element={<CategoryProducts />} /> ✅ New Route
         */}
         <Route path="/category/:category" element={<CategoryProducts />} />
         <Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/faqs" element={<FAQs />} />


      </Routes>
      <Footer/>
    </>
  );
}

export default App;