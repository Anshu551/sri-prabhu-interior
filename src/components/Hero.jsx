import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-span", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power4.out"
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Parallax effect for background image
      gsap.to(".hero-bg", {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-32 lg:pt-40"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
          alt="Best Luxury Home Interior Design in Chennai" 
          className="hero-bg w-full h-[120%] object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full mix-blend-screen" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div ref={textRef} className="pt-24 lg:pt-0">
          <span className="hero-span inline-block text-accent uppercase tracking-[0.4em] font-semibold text-[10px] md:text-sm mb-6">
            Designing Timeless Luxury Spaces
          </span>
          <h1 className="hero-title text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 uppercase tracking-tighter">
            SRI PRABHU <br />
            <span className="serif text-accent italic">INTERIOR</span>
          </h1>
          <p className="hero-span text-base md:text-lg lg:text-xl text-white/50 mb-12 max-w-lg font-light leading-relaxed">
            The <span className="text-accent font-medium">best interior designers in Chennai</span> for Complete Home, Office & Commercial Interiors. We turn your vision into architectural reality.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-6">
            <a 
              href="https://wa.me/918925472510" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-premium flex items-center gap-3"
            >
              <MessageSquare size={18} />
              Consult Now
            </a>
            <a 
              href="tel:+918925472510" 
              className="px-10 py-5 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500 rounded-sm inline-flex items-center justify-center gap-3"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          {/* Floating Luxury Image Card */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-accent/20 group">
            <img 
               src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000"
               alt="Interior Design Detail"
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl">
               <p className="text-accent uppercase tracking-widest text-[10px] font-bold mb-1">Premium Quality</p>
               <h3 className="text-xl font-bold serif italic">Timeless Elegance</h3>
            </div>
          </div>
          
          {/* Accent Glows */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: -1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] vertical-text">Scroll</span>
        <div className="w-[1px] h-12 bg-accent/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
