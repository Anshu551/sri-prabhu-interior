import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX || event.touches[0].clientX) - rect.left) / rect.width;
    setSliderPosition(Math.max(0, Math.min(1, x)) * 100);
  };

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = () => {
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchEnd = () => {
    window.removeEventListener('touchmove', handleMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <section className="py-24 lg:py-40 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-accent uppercase tracking-[0.4em] font-semibold text-sm mb-6 inline-block">Visual Transformation</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
            Before <span className="serif italic text-accent">&</span> After
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-light">
            Slide to see the incredible transformation from raw spaces to luxurious realities. Our meticulous design process ensures every detail is perfect.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative max-w-5xl mx-auto aspect-square md:aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 cursor-ew-resize select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Before Image */}
          <div className="absolute inset-0 grayscale contrast-125">
            <img src="/images/slider-before.png" alt="Before" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 md:top-5 md:left-5 bg-black/60 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 border border-white/10 rounded-sm">
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">Before</span>
            </div>
          </div>

          {/* After Image */}
          <div 
            className="absolute inset-0 overflow-hidden" 
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img src="/images/slider-after.png" alt="After" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 md:top-5 md:left-5 bg-accent/80 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 border border-white/10 rounded-sm z-20">
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-primary">After</span>
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-accent z-30"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-black/80">
              <div className="flex gap-1">
                <div className="w-[2px] h-4 bg-primary" />
                <div className="w-[2px] h-4 bg-primary" />
              </div>
            </div>
          </div>
          
          {/* Gold Border Effect */}
          <div className="absolute inset-0 border border-accent/20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
