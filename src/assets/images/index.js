// Import all images for proper Vite bundling
import artistImage from './Artist.jpeg';

// Digital Art images
import digitalArt1 from './projects/Digital Art/Digital-Art-1.jpeg';
import digitalArt2 from './projects/Digital Art/Digital-Art-2.jpeg';
import digitalArt3 from './projects/Digital Art/Digital-Art-3.jpeg';
import digitalArt4 from './projects/Digital Art/Digital-Art-4.jpeg';
import digitalArt5 from './projects/Digital Art/Digital-Art-5.jpeg';
import digitalArt6 from './projects/Digital Art/Digital-Art-6.jpeg';
import digitalArt7 from './projects/Digital Art/Digital-Art-7.jpeg';
import digitalArt8 from './projects/Digital Art/Digital-Art-8.jpeg';

// Mixed Media images
import mixedMedia1 from './projects/Mixed Media/Mixed-Media-1.jpeg';
import mixedMedia2 from './projects/Mixed Media/Mixed-Media-2.jpeg';
import mixedMedia3 from './projects/Mixed Media/Mixed-Media-3.jpeg';
import mixedMedia4 from './projects/Mixed Media/Mixed-Media-4.jpeg';
import mixedMedia5 from './projects/Mixed Media/Mixed-Media-5.jpeg';
import mixedMedia6 from './projects/Mixed Media/Mixed-Media-6.jpeg';

// Painting images
import painting1 from './projects/Painting/Painting-1.jpeg';
import painting2 from './projects/Painting/Painting-2.jpeg';
import painting3 from './projects/Painting/Painting-3.jpeg';
import painting4 from './projects/Painting/Painting-4.jpeg';
import painting5 from './projects/Painting/Painting-5.jpeg';
import painting6 from './projects/Painting/Painting-6.jpeg';
import painting7 from './projects/Painting/Painting-7.jpeg';
import painting8 from './projects/Painting/Painting-8.jpeg';
import painting9 from './projects/Painting/Painting-9.jpeg';

// Photography images
import photography1 from './projects/Photography/Photography-1.jpeg';
import photography2 from './projects/Photography/Photography-2.jpg';
import photography3 from './projects/Photography/Photography-3.jpeg';
import photography4 from './projects/Photography/Photography-4.jpeg';
import photography5 from './projects/Photography/Photography-5.jpeg';
import photography6 from './projects/Photography/Photography-6.jpeg';
import photography7 from './projects/Photography/Photography-7.jpeg';
import photography8 from './projects/Photography/Photography-8.jpeg';
import photography9 from './projects/Photography/Photography-9.jpg';
import photography10 from './projects/Photography/Photography-10.jpeg';

// Legacy project images (for backward compatibility) - now using organized structure
// These are now mapped to the organized images below

// Testimonial images
import testimonial1 from './Testimonials/Testimonial-1.jpeg';
import testimonial2 from './Testimonials/Testimonial-2.jpeg';
import testimonial3 from './Testimonials/Testimonial-3.jpeg';

export const images = {
  // Artist image
  artist: artistImage,
  
  // Digital Art images
  digitalArt: {
    digitalArt1,
    digitalArt2,
    digitalArt3,
    digitalArt4,
    digitalArt5,
    digitalArt6,
    digitalArt7,
    digitalArt8
  },
  
  // Mixed Media images
  mixedMedia: {
    mixedMedia1,
    mixedMedia2,
    mixedMedia3,
    mixedMedia4,
    mixedMedia5,
    mixedMedia6
  },
  
  // Painting images
  painting: {
    painting1,
    painting2,
    painting3,
    painting4,
    painting5,
    painting6,
    painting7,
    painting8,
    painting9
  },
  
  // Photography images
  photography: {
    photography1,
    photography2,
    photography3,
    photography4,
    photography5,
    photography6,
    photography7,
    photography8,
    photography9,
    photography10
  },
  
  // Legacy project images (for backward compatibility) - mapped to organized images
  project1: digitalArt1, // Map to digital art
  project2: photography1, // Map to photography
  project3: painting1, // Map to painting
  project4: mixedMedia1, // Map to mixed media
  project5: photography2, // Map to photography
  
  // Testimonial images
  testimonial1,
  testimonial2,
  testimonial3
};

export default images;
