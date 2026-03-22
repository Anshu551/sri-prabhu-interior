import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionAbout = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        }
      });

      gsap.from(".about-image", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
        }
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-24 lg:py-40 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="about-image relative aspect-square lg:aspect-video rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
              alt="Luxury Interior Design" 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 border-[10px] md:border-[20px] border-primary/20 pointer-events-none" />
            {/* Accent Border */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 w-full h-full border border-accent/20 -z-10 translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="about-content space-y-8 lg:space-y-10">
            <div>
              <span className="text-accent uppercase tracking-[0.4em] font-semibold text-xs md:text-sm mb-4 md:mb-6 inline-block">Our Story</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-tight">
                Crafting <span className="serif italic text-accent">Excellence</span> <br /> Since Inception
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed serif italic">
              "As the leading <span className="text-accent underline decoration-accent/30 underline-offset-8">interior designers in Chennai</span>, we specialize in luxury modular kitchens, ceilings, and custom furniture tailored to your lifestyle."
            </p>
            
            <p className="text-lg text-white/50 leading-relaxed font-light">
              Based in Chennai, Tamil Nadu, we deliver the best interior design services near you with attention to detail, elegance, and modern design principles. Our expertise covers all major locations across Chennai.
            </p>

            <div className="flex gap-12 pt-6 items-center">
              <div>
                <p className="text-4xl font-bold text-accent mb-2">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Years of Passion</p>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div>
                <p className="text-4xl font-bold text-accent mb-2">250+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Luxury Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
