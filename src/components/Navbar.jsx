import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      const section = path.split('#')[1];
      if (window.location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-primary/95 backdrop-blur-md py-4 border-b border-accent/20" : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-full relative">
        {/* Logo Side */}
        <Link 
          to="/#home" 
          onClick={(e) => handleNavClick(e, '/#home')}
          className="flex items-center gap-3 sm:gap-4 shrink-0 transition-transform duration-500 hover:scale-105 mr-4 sm:mr-12 xl:mr-20 relative z-[70]"
        >
          <img src="/logo.png" alt="SRI PRABHU INTERIOR" className="h-14 sm:h-20 w-auto object-contain bg-white p-1 rounded-sm shadow-lg" />
          <div className="flex flex-col border-l border-accent/30 pl-3 sm:pl-4 h-10 sm:h-12 justify-center">
            <span className="text-sm sm:text-xl font-bold tracking-[0.1em] serif text-accent leading-none mb-1">SRI PRABHU</span>
            <span className="text-[7px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/40 leading-none">INTERIOR</span>
          </div>
        </Link>

        {/* Right Side: Desktop Nav + Contact */}
        <div className="hidden lg:flex items-center gap-12 xl:gap-20">
          {/* Desktop Nav */}
          <div className="flex gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="group relative text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-accent transition-colors duration-300 whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Direct Contact Buttons */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+918925472510" 
              className="flex items-center gap-2 px-6 py-3 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all duration-500 rounded-sm whitespace-nowrap"
            >
              <Phone size={14} />
              Call Now
            </a>
            <a 
              href="https://wa.me/918925472510?text=Hello%20SRI%20PRABHU%20INTERIOR%2C%20I%20would%20like%20to%20discuss%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-premium flex items-center gap-2 !px-6 !py-3 whitespace-nowrap"
            >
              <MessageSquare size={14} />
              Consult Now
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-accent focus:outline-none z-[110]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[100] bg-primary/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    to={link.path}
                    className="text-2xl font-bold uppercase tracking-[0.4em] text-white/70 hover:text-accent transition-colors"
                    onClick={(e) => handleNavClick(e, link.path)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-4 mt-8 w-full px-10">
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.1 }}
                  href="tel:+918925472510" 
                  className="w-full flex items-center justify-center gap-3 py-5 border border-accent/30 text-accent text-sm font-bold uppercase tracking-widest rounded-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={18} />
                  Call Now
                </motion.a>
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 2) * 0.1 }}
                  href="https://wa.me/918925472510" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-premium w-full flex items-center justify-center gap-3 py-5"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageSquare size={18} />
                  Consult Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
