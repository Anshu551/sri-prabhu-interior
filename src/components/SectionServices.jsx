import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ChefHat, Layers, Lightbulb, PaintBucket, Image as ImageIcon, Layout, Armchair, Palette, Building2 } from 'lucide-react';

import { servicesData as services } from '../data/servicesData.jsx';



const SectionServices = () => {
  return (
    <section
      id="services"
      style={{ opacity: 1, visibility: 'visible', background: '#080808', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{
            display: 'inline-block',
            color: '#D4AF37',
            letterSpacing: '0.4em',
            fontWeight: 700,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
          }}>
            ✦ &nbsp; Our Expertise &nbsp; ✦
          </span>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            margin: '0 0 1.5rem',
          }}>
            Curated{' '}
            <span style={{
              color: '#D4AF37',
              fontStyle: 'italic',
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
            }}>
              Services
            </span>
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', margin: '0 auto' }} />
          <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', fontSize: '1rem', maxWidth: '500px', margin: '1.5rem auto 0', lineHeight: 1.7 }}>
            From concept to completion, we deliver unmatched interior experiences across every discipline.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/services/${service.id}`)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '2px',
        border: hovered ? '1px solid rgba(212,175,55,0.5)' : '1px solid rgba(255,255,255,0.07)',
        background: '#0f0f0f',
        transition: 'border-color 0.5s, transform 0.5s, box-shadow 0.5s',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(212,175,55,0.12)' : '0 0 0 transparent',
        cursor: 'pointer',
        minHeight: '280px',
      }}
    >
      {/* Background image overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${service.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: hovered ? 0.18 : 0.07,
        transition: 'opacity 0.6s',
        filter: 'grayscale(30%)',
      }} />

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 40%, rgba(10,10,10,0.7) 100%)',
      }} />

      {/* Gold top border animation */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
      }} />

      {/* Index number */}
      <div style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem',
        fontSize: '3.5rem',
        fontWeight: 900,
        color: hovered ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.04)',
        fontFamily: '"Playfair Display", serif',
        lineHeight: 1,
        transition: 'color 0.5s',
        userSelect: 'none',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, padding: '2.5rem' }}>
        {/* Icon */}
        <div style={{
          color: '#D4AF37',
          marginBottom: '1.5rem',
          display: 'inline-flex',
          padding: '0.8rem',
          background: 'rgba(212,175,55,0.08)',
          borderRadius: '4px',
          border: '1px solid rgba(212,175,55,0.2)',
          transition: 'background 0.4s, transform 0.4s',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}>
          {service.icon}
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: hovered ? '#D4AF37' : '#ffffff',
          marginBottom: '0.9rem',
          transition: 'color 0.4s',
        }}>
          {service.title}
        </h3>

        {/* Divider */}
        <div style={{
          width: hovered ? '50px' : '30px',
          height: '1px',
          background: '#D4AF37',
          marginBottom: '1rem',
          transition: 'width 0.4s',
        }} />

        {/* Description */}
        <p style={{
          color: hovered ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)',
          lineHeight: 1.75,
          fontSize: '0.88rem',
          transition: 'color 0.4s',
        }}>
          {service.desc}
        </p>

        {/* Learn more */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          marginTop: '1.5rem',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.4s, transform 0.4s',
          color: '#D4AF37',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
        }}>
          Explore
          <span style={{ display: 'block', width: '30px', height: '1px', background: '#D4AF37' }} />
        </div>
      </div>
    </div>
  );
};

export default SectionServices;
