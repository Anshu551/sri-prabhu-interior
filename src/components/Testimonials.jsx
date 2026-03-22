import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Arjun Vikram', role: 'CEO, TechNexus', text: 'SRI PRABHU INTERIOR transformed our office into a collaborative masterpiece. Their attention to detail and luxury finishes are unparalleled.', rating: 5 },
  { name: 'Meera Sharma', role: 'Homeowner', text: 'My home feels like a luxury hotel now. Every guest is in awe of the modular kitchen and the bespoke living room designs. Highly recommended!', rating: 5 },
  { name: 'David Wilson', role: 'Restaurateur', text: 'The design team understood our brand vision perfectly. They delivered a sophisticated commercial space ahead of schedule with premium quality.', rating: 5 },
  { name: 'Priya Raj', role: 'Director, ArtSpace', text: 'Exceptional craftsmanship and professional execution. The before and after transformation was truly magical. Aetheria is the best!', rating: 5 },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(".testimonial-content", {
      opacity: 0,
      x: 20
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-24 lg:py-40 bg-primary overflow-hidden border-b border-white/5 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-accent uppercase tracking-[0.4em] font-semibold text-sm mb-6 inline-block">Voices of Trust</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-12 l">
              Elite <span className="serif italic text-accent">Testimonials</span>
            </h2>
            <p className="text-white/40 max-w-lg font-light leading-relaxed mb-12">
              Our clients are our greatest ambassadors. We take pride in delivering spaces that exceed expectations and foster long-lasting relationships.
            </p>
            
            <div className="flex gap-4">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1 transition-all duration-500 rounded-full ${activeIndex === idx ? 'w-12 bg-accent' : 'w-4 bg-white/20'}`}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="testimonial-content min-h-[400px] flex flex-col justify-center p-8 md:p-16 bg-[#0E0E0E] rounded-3xl border border-white/5 shadow-2xl relative group hover:border-accent/30 transition-all duration-500">
              <div className="absolute top-[-20px] left-[-20px] text-accent/20 text-9xl serif leading-none pointer-events-none">“</div>
              
              <div className="flex gap-1 mb-10">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-xl md:text-3xl serif italic text-white/90 leading-relaxed mb-12">
                {testimonials[activeIndex].text}
              </p>

              <div>
                <h4 className="text-xl font-bold uppercase tracking-widest text-accent mb-1 underline decoration-accent/20">{testimonials[activeIndex].name}</h4>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">{testimonials[activeIndex].role}</p>
              </div>

              <div className="absolute top-10 right-10 w-20 h-20 border-r border-t border-accent/10 pointer-events-none" />
              <div className="absolute bottom-10 left-10 w-20 h-20 border-l border-b border-accent/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
