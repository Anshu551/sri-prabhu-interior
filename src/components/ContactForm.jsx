import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 lg:py-40 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-2/5">
            <span className="text-accent uppercase tracking-[0.4em] font-semibold text-sm mb-6 inline-block">Consultation</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-8">
              Let's Create <span className="serif italic text-accent">Luxury</span>
            </h2>
            <p className="text-white/40 mb-16 font-light leading-relaxed">
              Ready to redefine your space? Contact us today for a personalized consultation with our expert design team.
            </p>

            <div className="space-y-12">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">Phone</p>
                  <p className="text-lg font-bold hover:text-accent transition-colors">+91 8925472510</p>
                  <p className="text-lg font-bold hover:text-accent transition-colors">+91 8925472510</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">Email</p>
                  <p className="text-lg font-bold hover:text-accent transition-colors lowercase">suryaprakash.57762@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">Location</p>
                  <p className="text-lg font-bold">Pallavaram, Chennai,<br />Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              {/* WhatsApp Card */}
              <motion.a 
                href="https://wa.me/918925472510?text=Hello%20SRI%20PRABHU%20INTERIOR%2C%20I'd%20like%20to%20start%20a%20luxury%20design%20project."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                className="p-12 bg-primary border border-accent/20 rounded-3xl flex flex-col items-center justify-center text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare size={32} className="text-[#25D366]" />
                </div>
                <h3 className="text-2xl font-bold serif italic mb-2">Consult Now</h3>
                <p className="text-white/40 text-sm mb-8">Instant consultation & quotes</p>
                <div className="btn-premium w-full !py-4">Message Now</div>
              </motion.a>

              {/* Call Card */}
              <motion.a 
                href="tel:+918925472510"
                whileHover={{ y: -10 }}
                className="p-12 bg-primary border border-white/10 rounded-3xl flex flex-col items-center justify-center text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold serif italic mb-2">Call Now</h3>
                <p className="text-white/40 text-sm mb-8">Direct project discussion</p>
                <div className="px-10 py-4 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm w-full hover:bg-white hover:text-primary transition-colors">Dial +91 8925472510</div>
              </motion.a>
            </div>

            {/* Availability Note */}
            <div className="p-6 border border-white/5 rounded-2xl bg-white/5 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">
                Available Monday - Saturday: 9:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
