import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData.jsx';
import { ChevronLeft, ArrowRight, CheckCircle2, CheckSquare } from 'lucide-react';

const ServicePage = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-accent underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover opacity-40 scale-110"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
        </div>

        <div className="container relative z-10 text-center px-6">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-8 hover:opacity-70 transition-opacity"
          >
            <ChevronLeft size={16} />
            Back to Services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold serif mb-6"
          >
            <span className="text-white">{service.title.split(' ')[0]}</span>{' '}
            <span className="text-gold italic">{service.title.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            {service.desc}
          </motion.p>
        </div>
      </section>

      <div className="container px-6 mx-auto">
        {/* Overview + Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Detailed Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-accent" />
              Overview
            </h2>
            <p className="text-white/70 leading-relaxed mb-10 text-lg">
              {service.fullDesc}
            </p>

            <div className="grid grid-cols-1 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-sm border border-white/10">
                  <CheckCircle2 className="text-accent shrink-0" size={20} />
                  <span className="font-semibold text-sm tracking-wide">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Image Grid — handles 1 or 2 images safely */}
          <div className={`grid gap-4 ${service.works.length >= 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {service.works.map((work, idx) => (
              <div key={idx} className={idx === 0 ? '' : 'pt-8'}>
                <img
                  src={work}
                  className="w-full h-72 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                  alt={`Work ${idx + 1}`}
                  onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Completed Works Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-accent text-[10px] uppercase font-bold tracking-[0.4em] mb-4 block">PORTFOLIO</span>
              <h2 className="text-4xl font-bold serif">Completed <span className="text-gold italic">Works</span></h2>
            </div>
            <Link to="/#portfolio" className="btn-premium flex items-center gap-2">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className={`grid gap-6 ${service.works.length >= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            {service.works.map((work, idx) => (
              <div key={idx} className="group relative overflow-hidden aspect-[16/9]">
                <img
                  src={work}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={`Completed work ${idx + 1}`}
                  onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-accent text-[10px] uppercase font-bold tracking-widest mb-1">LUXURY PROJECT</p>
                  <p className="text-xl font-bold">Residency Highlight</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── What's Included Checklist (only if checklist data exists) ── */}
        {service.checklist && service.checklist.length > 0 && (
          <section className="mb-32">
            <div className="mb-12">
              <span className="text-accent text-[10px] uppercase font-bold tracking-[0.4em] mb-4 block">COMPLETE SCOPE</span>
              <h2 className="text-4xl font-bold serif">What's <span className="text-gold italic">Included</span></h2>
              <p className="text-white/50 mt-4 max-w-xl">
                A complete breakdown of every element we cover in a {service.title} project — nothing is overlooked.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {service.checklist.map((group, gIdx) => (
                <motion.div
                  key={gIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gIdx * 0.08 }}
                  className="bg-white/5 border border-white/10 rounded-sm p-6 hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <CheckSquare size={18} className="text-accent shrink-0" />
                    <h3 className="text-accent text-xs font-bold uppercase tracking-widest">
                      {group.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-3 text-white/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="bg-accent/10 p-12 md:p-20 text-center border border-accent/20 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 serif">Ready to transform your <span className="text-gold italic">space?</span></h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Schedule a personalized consultation with our design experts today and take the first step towards your dream interior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/918925472510" target="_blank" rel="noopener noreferrer" className="btn-premium px-12 py-5 text-sm font-bold tracking-widest uppercase">
                Consult Now
              </a>
              <a href="tel:+918925472510" className="px-12 py-5 border border-white/10 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all duration-300">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;
