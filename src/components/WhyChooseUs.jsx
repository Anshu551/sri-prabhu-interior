import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const points = [
  { title: 'Premium Quality Materials', desc: 'We source only the finest materials from globally recognized luxury brands to ensure long-lasting elegance.' },
  { title: 'Modern Luxury Designs', desc: 'Our design philosophy blends contemporary trends with timeless sophistication tailored to your unique taste.' },
  { title: 'End-to-End Execution', desc: 'From conceptualization to the final handover, our team manages every detail of the project seamlessly.' },
  { title: 'On-Time Delivery', desc: 'We value your time. Our efficient process ensures that your masterpiece is delivered on the promised schedule.' },
  { title: 'Customer Satisfaction', desc: 'Our relationship doesn’t end with the project. We offer ongoing support to ensure your space remains perfect.' },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-card", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".why-grid",
          start: "top 80%",
        }
      });

      // Simple counter animation
      const counterItems = document.querySelectorAll(".counter-num");
      counterItems.forEach(item => {
        const val = parseInt(item.innerText);
        gsap.fromTo(item, { innerText: 0 }, {
          innerText: val,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-40 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24">
          <div>
            <span className="text-accent uppercase tracking-[0.4em] font-semibold text-sm mb-6 inline-block">The Difference</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-12 lg:pr-10">
              Why Choose <br /> <span className="serif italic text-accent">SRI PRABHU</span>
            </h2>
            
            <div className="why-grid space-y-6 md:space-y-8">
              {points.map((point, index) => (
                <div key={index} className="why-card group flex flex-col md:flex-row gap-4 md:gap-8 p-6 hover:bg-white/5 transition-colors rounded-sm">
                  <div className="mt-1 text-accent group-hover:scale-125 transition-transform shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 uppercase tracking-wider">{point.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed text-sm md:text-base">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 h-full">
              <div className="space-y-6 md:space-y-8">
                <div className="bg-primary p-8 md:p-12 aspect-square flex flex-col justify-center items-center text-center border border-white/5 rounded-2xl gold-glow-hover">
                  <p className="text-5xl md:text-7xl font-bold text-accent mb-4"><span className="counter-num">15</span>+</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50">Years</p>
                </div>
                <div className="bg-primary p-8 md:p-12 aspect-square flex flex-col justify-center items-center text-center border border-white/5 rounded-2xl gold-glow-hover md:translate-y-12">
                  <p className="text-5xl md:text-7xl font-bold text-accent mb-4"><span className="counter-num">120</span>+</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50">Homes</p>
                </div>
              </div>
              <div className="space-y-6 md:space-y-8 pt-0 sm:pt-20">
                <div className="bg-primary p-8 md:p-12 aspect-square flex flex-col justify-center items-center text-center border border-white/5 rounded-2xl gold-glow-hover">
                  <p className="text-5xl md:text-7xl font-bold text-accent mb-4"><span className="counter-num">45</span>+</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50">Hotels</p>
                </div>
                <div className="bg-primary p-8 md:p-12 aspect-square flex flex-col justify-center items-center text-center border border-white/5 rounded-2xl gold-glow-hover md:translate-y-12">
                  <p className="text-5xl md:text-7xl font-bold text-accent mb-4"><span className="counter-num">80</span>+</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50">Offices</p>
                </div>
              </div>
            </div>
            {/* Absolute element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/20 blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
