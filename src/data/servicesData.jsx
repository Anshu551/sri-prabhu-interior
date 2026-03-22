import React from 'react';
import { Home, ChefHat, Layers, Lightbulb, PaintBucket, Image as ImageIcon, Layout, Armchair, Palette, Building2 } from 'lucide-react';

// ─── HOME INTERIOR CHECKLIST ────────────────────────────────────────────────
const homeChecklist = [
  {
    category: 'Structural & Surface',
    items: ['Flooring', 'Wall finish', 'Ceiling', 'False ceiling', 'Doors', 'Windows'],
  },
  {
    category: 'Walls & Ceiling',
    items: ['Paint', 'Wallpaper', 'Wall panels', 'POP / Gypsum ceiling', 'Wooden ceiling panels'],
  },
  {
    category: 'Lighting',
    items: ['LED lights', 'Ceiling lights', 'Spotlights', 'Wall lights', 'Pendant lights'],
  },
  {
    category: 'Furniture',
    items: ['Sofa', 'Center table', 'Dining table', 'Dining chairs', 'Bed', 'Bedside table', 'Wardrobe', 'TV unit', 'Study table', 'Bookshelf'],
  },
  {
    category: 'Kitchen Interior',
    items: ['Modular kitchen cabinets', 'Kitchen countertop', 'Chimney', 'Hob / Stove', 'Sink', 'Storage racks'],
  },
  {
    category: 'Bathroom Interior',
    items: ['Wash basin', 'Mirror', 'Shower', 'WC', 'Bathroom cabinets', 'Towel rods'],
  },
  {
    category: 'Soft Furnishings',
    items: ['Curtains', 'Blinds', 'Carpets', 'Rugs', 'Cushions'],
  },
  {
    category: 'Decor Items',
    items: ['Wall art', 'Photo frames', 'Indoor plants', 'Clocks', 'Decorative mirrors'],
  },
];

// ─── OFFICE INTERIOR CHECKLIST ───────────────────────────────────────────────
const officeChecklist = [
  {
    category: 'Structural & Surface',
    items: ['Flooring', 'Wall finish', 'Ceiling', 'Glass partitions', 'Doors'],
  },
  {
    category: 'Walls & Branding',
    items: ['Paint', 'Wallpaper', 'Company logo signage', 'Wall graphics', 'Notice boards'],
  },
  {
    category: 'Lighting',
    items: ['LED panel lights', 'Tube lights', 'Spotlights', 'Task lights'],
  },
  {
    category: 'Furniture',
    items: ['Workstations', 'Office desks', 'Office chairs', 'Manager table', 'Manager chair', 'Conference table', 'Conference chairs', 'Reception desk', 'Visitor chairs'],
  },
  {
    category: 'Storage',
    items: ['File cabinets', 'Drawer units', 'Storage shelves', 'Lockers'],
  },
];

export const servicesData = [
  {
    id: 'home-interior',
    icon: <Home size={36} />,
    title: 'Home Interior',
    desc: 'Complete home interior solutions — from structural work to the finest decor details.',
    img: '/images/home-interior-1.jpg',
    fullDesc: 'We transform your house into a dream home. Our complete home interior service covers every element — from structural finishes like flooring, ceiling, and walls, to furniture, lighting, soft furnishings, and decor. Our team curates every detail to create a cohesive, luxurious living space tailored to your lifestyle.',
    features: [
      'Full Home Turnkey Solutions',
      'Custom Space Planning & 3D Visualization',
      'Premium Material Sourcing',
      'Experienced In-house Execution Team',
      'Post-completion Support & Warranty',
    ],
    works: [
      '/images/home-interior-1.jpg',
      '/images/home-interior-2.jpg',
      '/images/home-interior-3.jpg',
      '/images/home-interior-4.jpg',
    ],
    checklist: homeChecklist,
  },
  {
    id: 'office-interior',
    icon: <Building2 size={36} />,
    title: 'Office Interior',
    desc: 'Professional and inspiring office interiors designed to boost productivity and brand identity.',
    img: '/images/office-interior-1.jpg',
    fullDesc: 'A well-designed office is a powerful asset. We design modern, functional, and brand-aligned office spaces that inspire teams and impress clients. From open workstations and sleek conference rooms to professional reception areas, we handle every detail with precision and expertise.',
    features: [
      'Space Planning for Productivity',
      'Branded Interior Environments',
      'Ergonomic Furniture Solutions',
      'Smart Lighting & AV Integration',
      'Glass Partitions & Acoustic Panels',
    ],
    works: [
      '/images/office-interior-1.jpg',
      '/images/office-interior-2.jpg',
      '/images/office-interior-3.jpg',
      '/images/office-interior-4.jpg',
      '/images/office-interior-5.jpg',
    ],
    checklist: officeChecklist,
  },
  {
    id: 'modular-kitchen',
    icon: <ChefHat size={36} />,
    title: 'Modular Kitchen',
    desc: 'Smart, elegant, and highly functional modular kitchen designs built for the modern home.',
    img: '/images/modular-kitchen-1.jpg',
    fullDesc: 'Create the kitchen of your dreams with our custom modular solutions. We combine ergonomics with aesthetics to deliver kitchens that are as functional as they are beautiful.',
    features: [
      'Ergonomic Work Triangle Design',
      'High-Quality Hardware (Hettich, Hafele)',
      'Waterproof & Fire Retardant Materials',
      'Maximum Space Utilization Solutions',
      'Integrated Appliance Planning',
    ],
    works: [
      '/images/modular-kitchen-1.jpg',
      '/images/modular-kitchen-2.jpg',
      '/images/modular-kitchen-3.jpg',
      '/images/modular-kitchen-4.jpg',
      '/images/modular-kitchen-5.jpg',
      '/images/modular-kitchen-6.jpg',
    ],
  },
  {
    id: 'flooring',
    icon: <Layers size={36} />,
    title: 'Flooring',
    desc: 'Premium marble, hardwood, and tile flooring solutions for every style and budget.',
    img: '/images/flooring-1.jpg',
    fullDesc: 'The foundation of any great interior is its flooring. We offer a curated selection of premium flooring materials, from exquisite Italian marble and hardwood to durable vitrified tiles and decorative wooden flooring.',
    features: [
      'Italian & Indian Marble Installation',
      'High-Grade Engineered Wooden Flooring',
      'Designer Vitrified Tiles',
      'Epoxy & Specialized Floor Coatings',
      'Precision Levelling & Grouting',
    ],
    works: [
      '/images/flooring-1.jpg',
      '/images/flooring-2.jpg',
      '/images/flooring-3.jpg',
      '/images/flooring-4.jpg',
      '/images/flooring-5.jpg',
      '/images/flooring-6.jpg',
      '/images/flooring-7.jpg',
      '/images/flooring-8.jpg',
    ],
  },
  {
    id: 'lighting',
    icon: <Lightbulb size={36} />,
    title: 'Lighting',
    desc: 'Architectural and decorative lighting crafted to set the perfect mood in every room.',
    img: '/images/lighting-1.jpg',
    fullDesc: 'Lighting is the jewelry of your home. We design lighting layers — Ambient, Task, and Accent — to create the perfect atmosphere for every occasion.',
    features: [
      'Custom Lighting Layout Design',
      'Smart Home Lighting Integration',
      'Architectural Cove & Profile Lighting',
      'Designer Fixture Sourcing',
      'Energy Efficient LED Solutions',
    ],
    works: [
      '/images/lighting-1.jpg',
      '/images/lighting-2.jpg',
      '/images/lighting-3.jpg',
      '/images/lighting-4.jpg',
      '/images/lighting-5.jpg',
    ],
  },
  {
    id: 'painting',
    icon: <PaintBucket size={36} />,
    title: 'Painting',
    desc: 'Professional painting with premium textures, royal finishes, and expert color curation.',
    img: '/images/painting-1.jpg',
    fullDesc: 'Transform your walls with our professional painting services. Beyond standard colors, we specialize in luxury finishes including royal emulsions, silk finishes, and exotic textures.',
    features: [
      'Premium Texture Painting',
      'Luxury Emulsion & Gloss Finishes',
      'Damp Proofing & Waterproofing',
      'Color Palette Consultation',
      'Dust-Free Mechanized Sanding',
    ],
    works: [
      '/images/painting-1.jpg',
      '/images/painting-2.jpg',
      '/images/painting-3.jpg',
      '/images/painting-4.jpg',
      '/images/painting-5.jpg',
    ],
  },
  {
    id: 'wallpapers',
    icon: <ImageIcon size={36} />,
    title: 'Wallpapers',
    desc: 'Exclusive designer wallpapers that add texture, drama, and personality to your spaces.',
    img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80',
    fullDesc: 'Add a touch of elegance and personality to any room with our premium wallpaper collection. We offer thousands of designs, from classic patterns to modern digital murals.',
    features: [
      'Imported Designer Wallpapers',
      'Custom 3D Digital Wall Murals',
      'Textured & Fabric Wallcoverings',
      'Seamless Professional Installation',
      'Moisture Resistant Options',
    ],
    works: [
      'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'false-ceiling',
    icon: <Layout size={36} />,
    title: 'All Type of False Ceiling',
    desc: 'POP, gypsum, wooden, and metal false ceilings that elevate every room to new heights.',
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    fullDesc: 'Elevate your interiors literally with our designer false ceiling solutions. False ceilings hide electrical conduits and AC piping while providing thermal insulation and a canvas for architectural lighting.',
    features: [
      'Designer POP & Gypsum Ceilings',
      'Bespoke Wooden Ceiling Louvers',
      'Acoustic Ceiling Treatments',
      'Integrated AC & Lighting Layouts',
      'Quality Framing & Fire Safety',
    ],
    works: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171bb3f256?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'furniture',
    icon: <Armchair size={36} />,
    title: 'Furniture Works',
    desc: 'Custom-crafted, luxury furniture built with premium materials to fit your space perfectly.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    fullDesc: 'Our master craftsmen create bespoke sofas, dining sets, wardrobes, and TV units using premium materials like solid teak, marine plywood, and designer veneers. Every piece is built to last.',
    features: [
      'Custom Wardrobe & Storage Solutions',
      'Bespoke Sofa & Upholstery Works',
      'Premium Plywood & Veneer Furniture',
      'Ergonomic Work From Home Units',
      'High-End Hardware & Soft-Close Systems',
    ],
    works: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc2f518a3?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 'wall-art',
    icon: <Palette size={36} />,
    title: 'Wall Art and Decor',
    desc: 'Curated artworks, sculptures, and decor pieces that give your interiors the final touch of brilliance.',
    img: 'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1200&q=80',
    fullDesc: 'The finishing touches are what make a space feel like a home. We curate an exclusive collection of wall art, murals, artifacts, and designer mirrors to complement your interior theme.',
    features: [
      'Hand-Painted Wall Murals',
      'Designer Mirrors & Artifacts',
      'Curated Canvas Paintings',
      'Metal Wall Art & Sculptures',
      'Thematic Decor Gifting & Placement',
    ],
    works: [
      'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?auto=format&fit=crop&w=800&q=80',
    ],
  },
];
