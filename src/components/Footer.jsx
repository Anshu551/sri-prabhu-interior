import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-8">
              <img src="/logo.png" alt="SRI PRABHU INTERIOR" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-[0.2em] serif text-accent leading-none uppercase">SRI PRABHU</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">INTERIOR</span>
              </div>
            </a>
            <p className="text-white/40 mb-10 leading-relaxed font-light">
              Crafting ultra-luxury, modern spaces with architectural precision and artistic vision. Based in Chennai, serving excellence.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-accent transition-colors text-sm uppercase tracking-widest flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-8">Services</h4>
            <ul className="space-y-4">
              {['Modular Kitchen', 'False Ceiling', 'Wallpapers', 'Furniture', 'Flooring'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/40 hover:text-accent transition-colors text-sm uppercase tracking-widest flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="text-sm text-white/40 leading-relaxed uppercase tracking-widest">
                <span className="text-white font-bold block mb-1">Address</span>
                Pallavaram, Chennai,<br />Tamil Nadu, India
              </li>
              <li className="text-sm text-white/40 leading-relaxed uppercase tracking-widest">
                <span className="text-white font-bold block mb-1">Inquiries</span>
                +91 8925472510<br />
                suryaprakash.57762@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
            © {currentYear} SRI PRABHU INTERIOR. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
