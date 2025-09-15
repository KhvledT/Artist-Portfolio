// Import all images for proper Vite bundling
import artistImage from '../assets/images/Artist.jpeg';

// Digital Art images
import digitalArt1 from '../assets/images/projects/Digital Art/Digital-Art-1.jpeg';
import digitalArt2 from '../assets/images/projects/Digital Art/Digital-Art-2.jpeg';
import digitalArt3 from '../assets/images/projects/Digital Art/Digital-Art-3.jpeg';
import digitalArt4 from '../assets/images/projects/Digital Art/Digital-Art-4.jpeg';
import digitalArt5 from '../assets/images/projects/Digital Art/Digital-Art-5.jpeg';
import digitalArt6 from '../assets/images/projects/Digital Art/Digital-Art-6.jpeg';
import digitalArt7 from '../assets/images/projects/Digital Art/Digital-Art-7.jpeg';
import digitalArt8 from '../assets/images/projects/Digital Art/Digital-Art-8.jpeg';

// Mixed Media images
import mixedMedia1 from '../assets/images/projects/Mixed Media/Mixed-Media-1.jpeg';
import mixedMedia2 from '../assets/images/projects/Mixed Media/Mixed-Media-2.jpeg';
import mixedMedia3 from '../assets/images/projects/Mixed Media/Mixed-Media-3.jpeg';
import mixedMedia4 from '../assets/images/projects/Mixed Media/Mixed-Media-4.jpeg';
import mixedMedia5 from '../assets/images/projects/Mixed Media/Mixed-Media-5.jpeg';
import mixedMedia6 from '../assets/images/projects/Mixed Media/Mixed-Media-6.jpeg';

// Painting images
import painting1 from '../assets/images/projects/Painting/Painting-1.jpeg';
import painting2 from '../assets/images/projects/Painting/Painting-2.jpeg';
import painting3 from '../assets/images/projects/Painting/Painting-3.jpeg';
import painting4 from '../assets/images/projects/Painting/Painting-4.jpeg';
import painting5 from '../assets/images/projects/Painting/Painting-5.jpeg';
import painting6 from '../assets/images/projects/Painting/Painting-6.jpeg';
import painting7 from '../assets/images/projects/Painting/Painting-7.jpeg';
import painting8 from '../assets/images/projects/Painting/Painting-8.jpeg';
import painting9 from '../assets/images/projects/Painting/Painting-9.jpeg';

// Photography images
import photography1 from '../assets/images/projects/Photography/Photography-1.jpeg';
import photography2 from '../assets/images/projects/Photography/Photography-2.jpg';
import photography3 from '../assets/images/projects/Photography/Photography-3.jpeg';
import photography4 from '../assets/images/projects/Photography/Photography-4.jpeg';
import photography5 from '../assets/images/projects/Photography/Photography-5.jpeg';
import photography6 from '../assets/images/projects/Photography/Photography-6.jpeg';
import photography7 from '../assets/images/projects/Photography/Photography-7.jpeg';
import photography8 from '../assets/images/projects/Photography/Photography-8.jpeg';
import photography9 from '../assets/images/projects/Photography/Photography-9.jpg';
import photography10 from '../assets/images/projects/Photography/Photography-10.jpeg';

// Testimonial images
import testimonial1 from '../assets/images/Testimonials/Testimonial-1.jpeg';
import testimonial2 from '../assets/images/Testimonials/Testimonial-2.jpeg';
import testimonial3 from '../assets/images/Testimonials/Testimonial-3.jpeg';

// Comprehensive image data with metadata
export const imageData = {
  // Artist image
  artist: {
    id: 'artist-main',
    src: artistImage,
    alt: 'Creative Artist Portrait',
    title: 'Artist Portrait',
    description: 'Professional portrait of the creative artist',
    category: 'profile',
    tags: ['portrait', 'artist', 'professional'],
    dimensions: { width: 400, height: 400 },
    featured: true
  },

  // Digital Art collection
  digitalArt: [
    {
      id: 'digital-art-1',
      src: digitalArt1,
      alt: 'Neon Dreams - Digital Art',
      title: 'Neon Dreams',
      description: 'An electrifying digital composition that captures the essence of urban nightlife through vibrant neon colors and cyberpunk aesthetics. This piece explores the intersection of technology and human emotion, creating a mesmerizing visual experience that transports viewers into a futuristic dreamscape.',
      category: 'Digital Art',
      tags: ['neon', 'futuristic', 'digital', 'vibrant'],
      dimensions: { width: 800, height: 600 },
      featured: true,
      year: 2023,
      medium: 'Digital Painting',
      techniques: ['Photoshop', 'Digital Brushes', 'Color Grading']
    },
    {
      id: 'digital-art-2',
      src: digitalArt2,
      alt: 'Cyber Landscape - Digital Art',
      title: 'Cyber Landscape',
      description: 'A dystopian digital realm where towering structures pierce through layers of digital fog. This cyberpunk landscape combines architectural elements with organic forms, creating a hauntingly beautiful vision of a future where nature and technology have merged into something entirely new.',
      category: 'Digital Art',
      tags: ['cyberpunk', 'landscape', 'abstract', 'digital'],
      dimensions: { width: 800, height: 600 },
      featured: true,
      year: 2023,
      medium: 'Digital Painting',
      techniques: ['3D Modeling', 'Digital Painting', 'Post-Processing']
    },
    {
      id: 'digital-art-3',
      src: digitalArt3,
      alt: 'Virtual Reality - Digital Art',
      title: 'Virtual Reality',
      description: 'A conceptual piece exploring virtual reality themes',
      category: 'Digital Art',
      tags: ['virtual reality', 'conceptual', 'technology', 'digital'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Digital Art',
      techniques: ['Concept Art', 'Digital Illustration', '3D Elements']
    },
    {
      id: 'digital-art-4',
      src: digitalArt4,
      alt: 'Digital Fusion - Digital Art',
      title: 'Digital Fusion',
      description: 'A fusion of traditional and digital art techniques',
      category: 'Digital Art',
      tags: ['fusion', 'traditional', 'digital', 'mixed'],
      dimensions: { width: 800, height: 600 },
      featured: true,
      year: 2023,
      medium: 'Digital Mixed Media',
      techniques: ['Digital Painting', 'Photo Manipulation', 'Traditional Brushes']
    },
    {
      id: 'digital-art-5',
      src: digitalArt5,
      alt: 'Pixel Poetry - Digital Art',
      title: 'Pixel Poetry',
      description: 'A pixel art inspired piece with poetic elements',
      category: 'Digital Art',
      tags: ['pixel art', 'poetry', 'retro', 'digital'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Pixel Art',
      techniques: ['Pixel Art', 'Color Theory', 'Retro Styling']
    },
    {
      id: 'digital-art-6',
      src: digitalArt6,
      alt: 'Code Canvas - Digital Art',
      title: 'Code Canvas',
      description: 'An artistic interpretation of programming and code',
      category: 'Digital Art',
      tags: ['code', 'programming', 'abstract', 'digital'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Digital Art',
      techniques: ['Generative Art', 'Code Visualization', 'Abstract Design']
    },
    {
      id: 'digital-art-7',
      src: digitalArt7,
      alt: 'Matrix Memories - Digital Art',
      title: 'Matrix Memories',
      description: 'A matrix-inspired digital artwork with flowing data streams',
      category: 'Digital Art',
      tags: ['matrix', 'data', 'flowing', 'digital'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Digital Art',
      techniques: ['Motion Graphics', 'Data Visualization', 'Digital Effects']
    },
    {
      id: 'digital-art-8',
      src: digitalArt8,
      alt: 'Binary Beauty - Digital Art',
      title: 'Binary Beauty',
      description: 'A beautiful interpretation of binary code and digital aesthetics',
      category: 'Digital Art',
      tags: ['binary', 'beauty', 'code', 'aesthetic'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Digital Art',
      techniques: ['Algorithmic Art', 'Binary Visualization', 'Minimalist Design']
    }
  ],

  // Mixed Media collection
  mixedMedia: [
    {
      id: 'mixed-media-1',
      src: mixedMedia1,
      alt: 'Texture Fusion - Mixed Media',
      title: 'Texture Fusion',
      description: 'A mixed media piece combining various textures and materials',
      category: 'Mixed Media',
      tags: ['texture', 'fusion', 'mixed media', 'tactile'],
      dimensions: { width: 800, height: 600 },
      featured: true,
      year: 2023,
      medium: 'Mixed Media',
      techniques: ['Collage', 'Texture Layering', 'Material Experimentation']
    },
    {
      id: 'mixed-media-2',
      src: mixedMedia2,
      alt: 'Layered Stories - Mixed Media',
      title: 'Layered Stories',
      description: 'A narrative piece with multiple layers telling different stories',
      category: 'Mixed Media',
      tags: ['layers', 'stories', 'narrative', 'mixed'],
      dimensions: { width: 800, height: 600 },
      featured: true,
      year: 2023,
      medium: 'Mixed Media',
      techniques: ['Layering', 'Storytelling', 'Material Combination']
    },
    {
      id: 'mixed-media-3',
      src: mixedMedia3,
      alt: 'Collage Dreams - Mixed Media',
      title: 'Collage Dreams',
      description: 'A dreamlike collage combining various found materials',
      category: 'Mixed Media',
      tags: ['collage', 'dreams', 'found materials', 'surreal'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Collage',
      techniques: ['Found Objects', 'Collage', 'Surreal Composition']
    },
    {
      id: 'mixed-media-4',
      src: mixedMedia4,
      alt: 'Material Poetry - Mixed Media',
      title: 'Material Poetry',
      description: 'A poetic exploration of different materials and their textures',
      category: 'Mixed Media',
      tags: ['poetry', 'materials', 'texture', 'exploration'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Mixed Media',
      techniques: ['Material Study', 'Texture Exploration', 'Poetic Composition']
    },
    {
      id: 'mixed-media-5',
      src: mixedMedia5,
      alt: 'Hybrid Visions - Mixed Media',
      title: 'Hybrid Visions',
      description: 'A hybrid artwork combining traditional and modern techniques',
      category: 'Mixed Media',
      tags: ['hybrid', 'visions', 'traditional', 'modern'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Mixed Media',
      techniques: ['Traditional + Digital', 'Hybrid Techniques', 'Vision Synthesis']
    },
    {
      id: 'mixed-media-6',
      src: mixedMedia6,
      alt: 'Assembled Realities - Mixed Media',
      title: 'Assembled Realities',
      description: 'An assembled artwork creating new realities from fragments',
      category: 'Mixed Media',
      tags: ['assembled', 'realities', 'fragments', 'construction'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Assemblage',
      techniques: ['Assemblage', 'Fragment Construction', 'Reality Building']
    }
  ],

  // Painting collection
  painting: [
    {
      id: 'painting-1',
      src: painting1,
      alt: 'Brush Strokes - Painting',
      title: 'Brush Strokes',
      description: 'A passionate exploration of movement and emotion through bold, expressive brushwork. Each stroke tells a story, capturing the raw energy and spontaneity of the creative process. This oil painting demonstrates the power of traditional techniques in conveying contemporary emotions.',
      category: 'Painting',
      tags: ['brush strokes', 'traditional', 'expressive', 'oil'],
      dimensions: { width: 800, height: 600 },
      featured: true,
      year: 2023,
      medium: 'Oil on Canvas',
      techniques: ['Oil Painting', 'Expressive Brushwork', 'Color Mixing']
    },
    {
      id: 'painting-2',
      src: painting2,
      alt: 'Color Symphony - Painting',
      title: 'Color Symphony',
      description: 'A vibrant painting exploring the harmony of colors',
      category: 'Painting',
      tags: ['color', 'symphony', 'harmony', 'vibrant'],
      dimensions: { width: 800, height: 600 },
      featured: true,
      year: 2023,
      medium: 'Acrylic on Canvas',
      techniques: ['Color Theory', 'Acrylic Painting', 'Harmony Studies']
    },
    {
      id: 'painting-3',
      src: painting3,
      alt: 'Emotional Canvas - Painting',
      title: 'Emotional Canvas',
      description: 'An emotionally charged painting expressing deep feelings',
      category: 'Painting',
      tags: ['emotional', 'feelings', 'expression', 'canvas'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Mixed Media on Canvas',
      techniques: ['Emotional Expression', 'Mixed Media', 'Gesture Painting']
    },
    {
      id: 'painting-4',
      src: painting4,
      alt: 'Abstract Emotions - Painting',
      title: 'Abstract Emotions',
      description: 'An abstract painting exploring emotional landscapes',
      category: 'Painting',
      tags: ['abstract', 'emotions', 'landscapes', 'exploration'],
      dimensions: { width: 800, height: 600 },
      featured: true,
      year: 2023,
      medium: 'Acrylic on Canvas',
      techniques: ['Abstract Expressionism', 'Emotional Mapping', 'Gesture Work']
    },
    {
      id: 'painting-5',
      src: painting5,
      alt: 'Oil Dreams - Painting',
      title: 'Oil Dreams',
      description: 'A dreamlike oil painting with ethereal qualities',
      category: 'Painting',
      tags: ['oil', 'dreams', 'ethereal', 'dreamlike'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Oil on Canvas',
      techniques: ['Oil Glazing', 'Dream Imagery', 'Ethereal Effects']
    },
    {
      id: 'painting-6',
      src: painting6,
      alt: 'Watercolor Whispers - Painting',
      title: 'Watercolor Whispers',
      description: 'A delicate watercolor painting with soft, whisper-like qualities',
      category: 'Painting',
      tags: ['watercolor', 'whispers', 'delicate', 'soft'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Watercolor on Paper',
      techniques: ['Watercolor Techniques', 'Soft Blending', 'Delicate Brushwork']
    },
    {
      id: 'painting-7',
      src: painting7,
      alt: 'Acrylic Adventures - Painting',
      title: 'Acrylic Adventures',
      description: 'An adventurous acrylic painting with bold experimentation',
      category: 'Painting',
      tags: ['acrylic', 'adventures', 'bold', 'experimentation'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Acrylic on Canvas',
      techniques: ['Acrylic Techniques', 'Bold Experimentation', 'Texture Building']
    },
    {
      id: 'painting-8',
      src: painting8,
      alt: 'Canvas Chronicles - Painting',
      title: 'Canvas Chronicles',
      description: 'A narrative painting telling stories through visual elements',
      category: 'Painting',
      tags: ['canvas', 'chronicles', 'narrative', 'stories'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Oil on Canvas',
      techniques: ['Narrative Painting', 'Storytelling', 'Compositional Design']
    },
    {
      id: 'painting-9',
      src: painting9,
      alt: 'Artistic Alchemy - Painting',
      title: 'Artistic Alchemy',
      description: 'A transformative painting exploring the alchemy of art',
      category: 'Painting',
      tags: ['alchemy', 'transformative', 'art', 'magic'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Mixed Media on Canvas',
      techniques: ['Alchemical Processes', 'Transformation', 'Mixed Media']
    }
  ],

  // Photography collection
  photography: [
    {
      id: 'photography-1',
      src: photography1,
      alt: 'Urban Stories - Photography',
      title: 'Urban Stories',
      description: 'A candid moment frozen in time, revealing the hidden narratives that unfold daily in our urban landscapes. This street photography piece captures the essence of human connection and solitude within the bustling city environment, where every corner holds a story waiting to be told.',
      category: 'Photography',
      tags: ['urban', 'stories', 'street', 'life'],
      dimensions: { width: 800, height: 600 },
      featured: true,
      year: 2023,
      medium: 'Digital Photography',
      techniques: ['Street Photography', 'Urban Documentation', 'Storytelling']
    },
    {
      id: 'photography-2',
      src: photography2,
      alt: 'Street Moments - Photography',
      title: 'Street Moments',
      description: 'Capturing fleeting moments in urban environments',
      category: 'Photography',
      tags: ['street', 'moments', 'fleeting', 'urban'],
      dimensions: { width: 800, height: 600 },
      featured: true,
      year: 2023,
      medium: 'Digital Photography',
      techniques: ['Candid Photography', 'Moment Capture', 'Urban Observation']
    },
    {
      id: 'photography-3',
      src: photography3,
      alt: 'Architectural Lines - Photography',
      title: 'Architectural Lines',
      description: 'A study of architectural forms and geometric lines',
      category: 'Photography',
      tags: ['architectural', 'lines', 'geometric', 'forms'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Digital Photography',
      techniques: ['Architectural Photography', 'Geometric Composition', 'Line Studies']
    },
    {
      id: 'photography-4',
      src: photography4,
      alt: 'Natural Light - Photography',
      title: 'Natural Light',
      description: 'Exploring the beauty of natural lighting in photography',
      category: 'Photography',
      tags: ['natural', 'light', 'beauty', 'exploration'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Digital Photography',
      techniques: ['Natural Light Photography', 'Light Studies', 'Atmospheric Capture']
    },
    {
      id: 'photography-5',
      src: photography5,
      alt: 'Portrait Essence - Photography',
      title: 'Portrait Essence',
      description: 'A portrait capturing the essence of the subject',
      category: 'Photography',
      tags: ['portrait', 'essence', 'character', 'human'],
      dimensions: { width: 800, height: 600 },
      featured: true,
      year: 2023,
      medium: 'Digital Photography',
      techniques: ['Portrait Photography', 'Character Study', 'Essence Capture']
    },
    {
      id: 'photography-6',
      src: photography6,
      alt: 'City Rhythms - Photography',
      title: 'City Rhythms',
      description: 'Capturing the rhythmic patterns of city life',
      category: 'Photography',
      tags: ['city', 'rhythms', 'patterns', 'life'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Digital Photography',
      techniques: ['Urban Rhythm', 'Pattern Recognition', 'City Documentation']
    },
    {
      id: 'photography-7',
      src: photography7,
      alt: 'Framed Reality - Photography',
      title: 'Framed Reality',
      description: 'A conceptual piece exploring reality through framing',
      category: 'Photography',
      tags: ['framed', 'reality', 'conceptual', 'exploration'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Digital Photography',
      techniques: ['Conceptual Photography', 'Reality Framing', 'Visual Metaphor']
    },
    {
      id: 'photography-8',
      src: photography8,
      alt: 'Lens Poetry - Photography',
      title: 'Lens Poetry',
      description: 'A poetic approach to photography and visual storytelling',
      category: 'Photography',
      tags: ['lens', 'poetry', 'storytelling', 'visual'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Digital Photography',
      techniques: ['Poetic Photography', 'Visual Storytelling', 'Artistic Vision']
    },
    {
      id: 'photography-9',
      src: photography9,
      alt: 'Captured Emotions - Photography',
      title: 'Captured Emotions',
      description: 'Photography that captures and conveys human emotions',
      category: 'Photography',
      tags: ['emotions', 'captured', 'human', 'convey'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Digital Photography',
      techniques: ['Emotional Photography', 'Human Connection', 'Mood Capture']
    },
    {
      id: 'photography-10',
      src: photography10,
      alt: 'Visual Narratives - Photography',
      title: 'Visual Narratives',
      description: 'Creating narratives through photographic composition',
      category: 'Photography',
      tags: ['visual', 'narratives', 'composition', 'storytelling'],
      dimensions: { width: 800, height: 600 },
      featured: false,
      year: 2023,
      medium: 'Digital Photography',
      techniques: ['Narrative Photography', 'Compositional Storytelling', 'Visual Narrative']
    }
  ],

  // Testimonial images
  testimonials: [
    {
      id: 'testimonial-1',
      src: testimonial1,
      alt: 'Happy Client Testimonial',
      title: 'Client Testimonial 1',
      description: 'Portrait of a satisfied client',
      category: 'testimonial',
      tags: ['client', 'testimonial', 'satisfied', 'portrait'],
      dimensions: { width: 200, height: 200 },
      featured: true
    },
    {
      id: 'testimonial-2',
      src: testimonial2,
      alt: 'Happy Client Testimonial',
      title: 'Client Testimonial 2',
      description: 'Portrait of a satisfied client',
      category: 'testimonial',
      tags: ['client', 'testimonial', 'satisfied', 'portrait'],
      dimensions: { width: 200, height: 200 },
      featured: true
    },
    {
      id: 'testimonial-3',
      src: testimonial3,
      alt: 'Happy Client Testimonial',
      title: 'Client Testimonial 3',
      description: 'Portrait of a satisfied client',
      category: 'testimonial',
      tags: ['client', 'testimonial', 'satisfied', 'portrait'],
      dimensions: { width: 200, height: 200 },
      featured: true
    }
  ]
};

// Helper functions for image management
export const getImagesByCategory = (category) => {
  return Object.values(imageData).flat().filter(img => img.category === category);
};

export const getFeaturedImages = () => {
  return Object.values(imageData).flat().filter(img => img.featured);
};

export const getImageById = (id) => {
  return Object.values(imageData).flat().find(img => img.id === id);
};

export const getAllImages = () => {
  return Object.values(imageData).flat();
};

// Legacy compatibility - keeping the old structure for backward compatibility
export const images = {
  artist: imageData.artist.src,
  digitalArt: {
    digitalArt1: imageData.digitalArt[0].src,
    digitalArt2: imageData.digitalArt[1].src,
    digitalArt3: imageData.digitalArt[2].src,
    digitalArt4: imageData.digitalArt[3].src,
    digitalArt5: imageData.digitalArt[4].src,
    digitalArt6: imageData.digitalArt[5].src,
    digitalArt7: imageData.digitalArt[6].src,
    digitalArt8: imageData.digitalArt[7].src
  },
  mixedMedia: {
    mixedMedia1: imageData.mixedMedia[0].src,
    mixedMedia2: imageData.mixedMedia[1].src,
    mixedMedia3: imageData.mixedMedia[2].src,
    mixedMedia4: imageData.mixedMedia[3].src,
    mixedMedia5: imageData.mixedMedia[4].src,
    mixedMedia6: imageData.mixedMedia[5].src
  },
  painting: {
    painting1: imageData.painting[0].src,
    painting2: imageData.painting[1].src,
    painting3: imageData.painting[2].src,
    painting4: imageData.painting[3].src,
    painting5: imageData.painting[4].src,
    painting6: imageData.painting[5].src,
    painting7: imageData.painting[6].src,
    painting8: imageData.painting[7].src,
    painting9: imageData.painting[8].src
  },
  photography: {
    photography1: imageData.photography[0].src,
    photography2: imageData.photography[1].src,
    photography3: imageData.photography[2].src,
    photography4: imageData.photography[3].src,
    photography5: imageData.photography[4].src,
    photography6: imageData.photography[5].src,
    photography7: imageData.photography[6].src,
    photography8: imageData.photography[7].src,
    photography9: imageData.photography[8].src,
    photography10: imageData.photography[9].src
  },
  testimonial1: imageData.testimonials[0].src,
  testimonial2: imageData.testimonials[1].src,
  testimonial3: imageData.testimonials[2].src
};

export default imageData;
