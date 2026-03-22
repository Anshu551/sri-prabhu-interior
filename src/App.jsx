import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import FloatingButtons from './components/FloatingButtons';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Scroll Progress Indicator
    const progress = document.querySelector(".scroll-progress");
    gsap.to(progress, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary text-white selection:bg-accent selection:text-primary relative">
        {/* Scroll Progress */}
        <div className="scroll-progress fixed top-0 left-0 w-full h-[2px] bg-accent origin-left scale-x-0 z-[60] shadow-[0_0_10px_rgba(212,175,55,0.8)]" />

        <LoadingScreen />

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:id" element={<ServicePage />} />
        </Routes>

        <FloatingButtons />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

