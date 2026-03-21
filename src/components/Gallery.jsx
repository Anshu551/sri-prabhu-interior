import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Luminary Loft', category: 'Residential', img: '/images/loft.png' },
  { id: 2, title: 'Azure Atrium', category: 'Commercial', img: '/images/atrium.png' },
  { id: 3, title: 'Minimalist Manor', category: 'Residential', img: '/images/manor.png' },
  { id: 4, title: 'Velvet Villa', category: 'Hospitality', img: '/images/villa.png' },
  { id: 5, title: 'Onyx Office', category: 'Commercial', img: '/images/office.png' },
  { id: 6, title: 'Gilded Garden', category: 'Residential', img: 'https://images.unsplash.com/photo-1616137422495-1e9e47e217c2?auto=format&fit=crop&q=80' },
];

const Gallery = () => {
  return (
    <section id="portfolio" className="bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold uppercase tracking-[0.3em] font-semibold text-sm mb-6 block">
            Our Work
          </span>
          <h2 className="section-title">Interior <span className="serif italic">Masterpieces</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-gold text-xs uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold serif">{project.title}</h3>
              </div>
              <div className="absolute top-8 right-8 w-12 h-[1px] bg-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
