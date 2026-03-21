import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/918925472510" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-500 hover:scale-110 hover:-translate-y-2 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-[#25D366] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Consult Now
        <div className="absolute bottom-[-4px] right-4 w-2 h-2 bg-[#25D366] rotate-45" />
      </div>
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
