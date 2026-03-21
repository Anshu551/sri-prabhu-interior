import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        }
      });

      tl.from(".loader-logo", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
      .to(".loader-progress", {
        width: "100%",
        duration: 1.5,
        ease: "power1.inOut"
      })
      .to(".loader-logo", {
        y: -20,
        opacity: 0,
        duration: 0.5,
      })
      .to(overlayRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut"
      });

      // Safety Timeout
      const timeout = setTimeout(() => {
        gsap.to(overlayRef.current, {
          y: "-100%",
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: () => gsap.set(overlayRef.current, { display: "none" })
        });
      }, 4000);

      return () => clearTimeout(timeout);
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="loader-logo flex flex-col items-center mb-10">
        <img src="/logo.png" alt="Logo" className="h-20 w-auto mb-6" />
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold tracking-[0.3em] serif text-accent leading-none uppercase">SRI PRABHU</span>
          <span className="text-xs tracking-[0.5em] uppercase text-white/40 mt-2">INTERIOR</span>
        </div>
      </div>
      
      <div className="w-64 h-[1px] bg-white/5 relative">
        <div className="loader-progress absolute top-0 left-0 w-0 h-full bg-accent shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
      </div>
      
      <p className="mt-8 text-[10px] uppercase tracking-[0.5em] text-accent/50 animate-pulse font-bold">Initializing Luxury</p>
    </div>
  );
};

export default LoadingScreen;
