import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import SectionAbout from '../components/SectionAbout';
import SectionServices from '../components/SectionServices';
import SectionPortfolio from '../components/SectionPortfolio';
import GallerySection from '../components/GallerySection';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  useEffect(() => {
    // Scroll to section if hash exists
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main>
      <div id="home"><Hero /></div>
      <div id="about"><SectionAbout /></div>
      <div id="services"><SectionServices /></div>
      <div id="portfolio"><SectionPortfolio /></div>
      <GallerySection />
      <BeforeAfterSlider />
      <WhyChooseUs />
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><ContactForm /></div>
    </main>
  );
};

export default HomePage;
