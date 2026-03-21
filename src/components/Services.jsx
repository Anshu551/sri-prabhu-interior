import React from 'react';
import { motion } from 'framer-motion';
import { Home, Utensils, Grid, Lightbulb, PaintBucket, Image, Layers, Sofa, Palette } from 'lucide-react';

const services = [
  { 
    id: 1, 
    icon: <Home size={40} className="text-gold" />, 
    title: 'Complete Interior Design', 
    desc: 'End-to-end interior design solutions tailored to your unique aesthetic and lifestyle.' 
  },
  { 
    id: 2, 
    icon: <Utensils size={40} className="text-gold" />, 
    title: 'Modular Kitchen', 
    desc: 'Smart, efficient, and beautifully designed modular kitchens for the modern home.' 
  },
  { 
    id: 3, 
    icon: <Grid size={40} className="text-gold" />, 
    title: 'Flooring', 
    desc: 'Premium flooring options that perfectly complement your interior space.' 
  },
  { 
    id: 4, 
    icon: <Lightbulb size={40} className="text-gold" />, 
    title: 'Lighting', 
    desc: 'Custom lighting designs to enhance the mood and functionality of every room.' 
  },
  { 
    id: 5, 
    icon: <PaintBucket size={40} className="text-gold" />, 
    title: 'Painting', 
    desc: 'Professional painting services with meticulous attention to detail and color curation.' 
  },
  { 
    id: 6, 
    icon: <Image size={40} className="text-gold" />, 
    title: 'Wallpapers', 
    desc: 'Exclusive wallpaper collections to add texture, pattern, and personality to your walls.' 
  },
  { 
    id: 7, 
    icon: <Layers size={40} className="text-gold" />, 
    title: 'All Type of False Ceiling', 
    desc: 'Innovative false ceiling designs for enhanced aesthetics and structural elegance.' 
  },
  { 
    id: 8, 
    icon: <Sofa size={40} className="text-gold" />, 
    title: 'Furniture Works', 
    desc: 'Custom, luxurious furniture pieces crafted specifically for your home.' 
  },
  { 
    id: 9, 
    icon: <Palette size={40} className="text-gold" />, 
    title: 'Wall Art and Decor', 
    desc: 'Curated art and decor pieces to perfectly finish your interior spaces.' 
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-primary border-t border-white/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-gold uppercase tracking-[0.3em] font-semibold text-sm mb-6 block">
            Expertise
          </span>
          <h2 className="section-title text-center inline-block">Curated <span className="serif italic">Services</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-12 border border-white/10 hover:border-gold/50 transition-colors duration-500 group"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl mb-6 serif">{service.title}</h3>
              <p className="text-muted leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
