import React, { useState } from 'react';

const projects = [
  { id: 1, title: 'Opulence Oasis', category: 'Home Interiors', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000' },
  { id: 2, title: 'Elite Executive', category: 'Office Interiors', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000' },
  { id: 3, title: 'Grand Gallery', category: 'Commercial Interiors', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000' },
  { id: 4, title: 'Modern Mansion', category: 'Home Interiors', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000' },
  { id: 5, title: 'Urban Understated', category: 'Office Interiors', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000' },
  { id: 6, title: 'Royal Residency', category: 'Home Interiors', img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000' },
];

const categories = ['All', 'Home Interiors', 'Office Interiors', 'Commercial Interiors'];

const SectionPortfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section
      id="portfolio"
      style={{ opacity: 1, visibility: 'visible', background: '#0A0A0A', padding: '6rem 0' }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>

          {/* Label */}
          <span style={{
            display: 'inline-block',
            color: '#D4AF37',
            letterSpacing: '0.4em',
            fontWeight: 800,
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
            textShadow: '0 0 20px rgba(212,175,55,0.6)',
          }}>
            ✦ &nbsp; Curated Gallery &nbsp; ✦
          </span>

          {/* Title */}
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            margin: '0 0 1rem',
          }}>
            Luxury{' '}
            <span style={{
              color: '#D4AF37',
              fontStyle: 'italic',
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              textShadow: '0 0 30px rgba(212,175,55,0.5)',
            }}>
              Portfolios
            </span>
          </h2>

          {/* Gold divider */}
          <div style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            margin: '0 auto 2.5rem',
          }} />

          {/* Filter Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {categories.map(cat => (
              <FilterButton
                key={cat}
                label={cat}
                active={filter === cat}
                onClick={() => setFilter(cat)}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FilterButton = ({ label, active, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  const isHighlighted = active || hovered;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '0.25em',
        fontWeight: 800,
        padding: '0.6rem 1.5rem',
        border: active ? '1px solid #D4AF37' : hovered ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.12)',
        background: active ? 'rgba(212,175,55,0.13)' : 'transparent',
        color: active ? '#D4AF37' : hovered ? '#ffffff' : 'rgba(255,255,255,0.45)',
        transition: 'all 0.3s',
        cursor: 'pointer',
        borderRadius: '2px',
        boxShadow: active ? '0 0 16px rgba(212,175,55,0.2)' : 'none',
      }}
    >
      {label}
    </button>
  );
};

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '4/5',
        background: '#0a0a0a',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.5s ease',
        borderRadius: '2px',
      }}
    >
      {/* Image */}
      <img
        src={project.img}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 1s ease',
          display: 'block',
        }}
      />

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
      }} />

      {/* Gold overlay on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(212,175,55,0.12)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.5s',
        pointerEvents: 'none',
      }} />

      {/* Corner accent */}
      <div style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem',
        width: '40px', height: '40px',
        borderTop: '1.5px solid #D4AF37',
        borderRight: '1.5px solid #D4AF37',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s 0.1s',
      }} />

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '2rem',
        transform: hovered ? 'translateY(0)' : 'translateY(8px)',
        transition: 'transform 0.4s ease',
      }}>
        <span style={{
          display: 'block',
          color: '#D4AF37',
          fontSize: '0.65rem',
          fontWeight: 800,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          {project.category}
        </span>
        <h3 style={{
          color: '#ffffff',
          fontSize: '1.3rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontFamily: '"Playfair Display", serif',
          margin: 0,
        }}>
          {project.title}
        </h3>
      </div>
    </div>
  );
};

export default SectionPortfolio;
