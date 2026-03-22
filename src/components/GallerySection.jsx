import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';

const categories = ['All', 'Interior', 'Flooring', 'Ceiling', 'Wallpaper', 'Paint', 'Half Built', 'Completed'];

const galleryImages = [
  { id: 1,  category: 'Interior',    title: 'Luxury Living Room',         img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80' },
  { id: 2,  category: 'Interior',    title: 'Modern Bedroom Suite',       img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80' },
  { id: 3,  category: 'Flooring',    title: 'Marble Flooring',            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: 4,  category: 'Ceiling',     title: 'POP False Ceiling',          img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80' },
  { id: 5,  category: 'Wallpaper',   title: 'Textured Wall Design',       img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80' },
  { id: 6,  category: 'Paint',       title: 'Designer Paint Finish',      img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80' },
  { id: 7,  category: 'Half Built',  title: 'Work in Progress',           img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80' },
  { id: 8,  category: 'Completed',   title: 'Completed Executive Office', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80' },
  { id: 9,  category: 'Interior',    title: 'Premium Kitchen Design',     img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80' },
  { id: 10, category: 'Flooring',    title: 'Hardwood Flooring',          img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80' },
  { id: 11, category: 'Ceiling',     title: 'Gypsum Ceiling Work',        img: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?w=800&q=80' },
  { id: 12, category: 'Wallpaper',   title: 'Floral Wallpaper Accent',    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80' },
  { id: 13, category: 'Paint',       title: 'Textured Wall Paint',        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
  { id: 14, category: 'Half Built',  title: 'Interior In Progress',       img: 'https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=800&q=80' },
  { id: 15, category: 'Completed',   title: 'Luxury Home Completed',      img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80' },
  { id: 16, category: 'Interior',    title: 'Elegant Dining Space',       img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80' },
  { id: 17, category: 'Flooring',    title: 'Vitrified Tile Work',        img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80' },
  { id: 18, category: 'Ceiling',     title: 'LED Cove Ceiling',           img: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80' },
  { id: 19, category: 'Wallpaper',   title: 'Geometric Wall Pattern',     img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80' },
  { id: 20, category: 'Completed',   title: 'Royal Master Bedroom',       img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80' },
  { id: 21, category: 'Interior',    title: 'Modern Study Room',          img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80' },
  { id: 22, category: 'Half Built',  title: 'Civil Work in Progress',     img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80' },
  { id: 23, category: 'Paint',       title: 'Royale Play Finish',         img: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80' },
  { id: 24, category: 'Completed',   title: 'Commercial Interior Done',   img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { id: 25, category: 'Interior',    title: 'Kids Room Design',           img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80' },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const filtered = activeFilter === 'All' ? galleryImages : galleryImages.filter(i => i.category === activeFilter);

  return (
    <section id="gallery" style={{ opacity: 1, visibility: 'visible', background: '#070707', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'inline-block', color: '#D4AF37',
            letterSpacing: '0.4em', fontWeight: 800, fontSize: '0.75rem',
            textTransform: 'uppercase', marginBottom: '1rem',
            textShadow: '0 0 20px rgba(212,175,55,0.5)',
          }}>
            ✦ &nbsp; Our Works &nbsp; ✦
          </span>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800,
            color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em',
            lineHeight: 1.1, margin: '0 0 1rem',
          }}>
            Work <span style={{ color: '#D4AF37', fontStyle: 'italic', fontFamily: '"Playfair Display", serif', textShadow: '0 0 30px rgba(212,175,55,0.4)' }}>Gallery</span>
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', margin: '0 auto 1.5rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            A glimpse into our craft — from first brick to final reveal.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <FilterBtn key={cat} label={cat} active={activeFilter === cat} onClick={() => setActiveFilter(cat)} />
          ))}
        </div>

        {/* Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: '1rem',
        }}>
          {filtered.map((item) => (
            <GalleryCard key={item.id} item={item} onClick={() => setSelectedImg(item)} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <Lightbox item={selectedImg} onClose={() => setSelectedImg(null)} />
      )}
    </section>
  );
};

const FilterBtn = ({ label, active, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.2em',
        fontWeight: 800, padding: '0.5rem 1.2rem',
        border: active ? '1px solid #D4AF37' : hov ? '1px solid rgba(255,255,255,0.35)' : '1px solid rgba(255,255,255,0.1)',
        background: active ? 'rgba(212,175,55,0.13)' : 'transparent',
        color: active ? '#D4AF37' : hov ? '#fff' : 'rgba(255,255,255,0.4)',
        transition: 'all 0.3s', cursor: 'pointer', borderRadius: '2px',
        boxShadow: active ? '0 0 16px rgba(212,175,55,0.2)' : 'none',
      }}
    >{label}</button>
  );
};

const GalleryCard = ({ item, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        aspectRatio: '4/3', borderRadius: '2px',
        border: hov ? '1px solid rgba(212,175,55,0.4)' : '1px solid rgba(255,255,255,0.05)',
        transition: 'border-color 0.4s, transform 0.4s, box-shadow 0.4s',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hov ? '0 16px 40px rgba(212,175,55,0.15)' : 'none',
      }}
    >
      <img src={item.img} alt={item.title}
        onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1a1a1a, #2a2a2a)'; }}
        style={{
        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
        transform: hov ? 'scale(1.08)' : 'scale(1)',
        transition: 'transform 0.7s ease',
      }} />
      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
        opacity: hov ? 1 : 0.5, transition: 'opacity 0.4s',
      }} />
      {/* Category badge */}
      <div style={{
        position: 'absolute', top: '0.8rem', left: '0.8rem',
        background: 'rgba(212,175,55,0.9)', color: '#000',
        fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em',
        textTransform: 'uppercase', padding: '0.25rem 0.6rem', borderRadius: '2px',
      }}>{item.category}</div>
      {/* Title */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem',
        transform: hov ? 'translateY(0)' : 'translateY(6px)',
        transition: 'transform 0.4s',
      }}>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', margin: 0, letterSpacing: '0.04em' }}>{item.title}</p>
        <p style={{ color: '#D4AF37', fontSize: '0.65rem', marginTop: '0.2rem', opacity: hov ? 1 : 0, transition: 'opacity 0.3s' }}>
          Click to enlarge →
        </p>
      </div>
    </div>
  );
};

const Lightbox = ({ item, onClose }) => {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <style>{`@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }`}</style>

      {/* Modal Box */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#111', borderRadius: '4px',
          border: '1px solid rgba(212,175,55,0.3)',
          maxWidth: '800px', width: '100%',
          boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', width: '36px', height: '36px', borderRadius: '50%',
            cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        ><X size={18} /></button>

        {/* Image */}
        <img src={item.img} alt={item.title} style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />

        {/* Info + CTA */}
        <div style={{ padding: '1.8rem 2rem' }}>
          <span style={{ color: '#D4AF37', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase' }}>{item.category}</span>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, margin: '0.4rem 0 1.2rem', letterSpacing: '0.04em' }}>{item.title}</h3>

          <a
            href="mailto:suryaprakash.57762@gmail.com?subject=Inquiry%20About%20Your%20Work&body=Hello%20SRI%20PRABHU%20INTERIOR%2C%20I%20am%20interested%20in%20your%20work%20and%20would%20like%20to%20discuss%20a%20project."
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'linear-gradient(135deg, #D4AF37, #b8960c)',
              color: '#000', padding: '0.75rem 1.8rem',
              borderRadius: '2px', fontWeight: 800, fontSize: '0.72rem',
              letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(212,175,55,0.4)',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Mail size={15} />
            Inquire About This Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
