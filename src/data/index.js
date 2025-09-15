// Main data export file
import { homeData } from './home/index.js';
import { workData } from './work/index.js';
import { contactData } from './contact/index.js';
import { imageData, images, getImagesByCategory, getFeaturedImages, getImageById, getAllImages } from './images.js';

// Re-export for named imports
export { homeData, workData, contactData, imageData, images, getImagesByCategory, getFeaturedImages, getImageById, getAllImages };

// Navigation data
export const navigationData = {
  items: [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'Work', path: '/work', icon: 'Briefcase' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ],
  logo: {
    text: 'Artist Portfolio',
    icon: 'Palette'
  }
};

// Site-wide configuration
export const siteConfig = {
  name: 'Artist Portfolio',
  description: 'Creative artist portfolio showcasing digital art, photography, painting, and mixed media works.',
  url: 'https://artist-portfolio.com',
  author: 'Creative Artist',
  keywords: ['art', 'portfolio', 'digital art', 'photography', 'painting', 'mixed media', 'creative'],
  social: {
    instagram: 'https://instagram.com/artist_portfolio',
    twitter: 'https://twitter.com/artist_creative',
    linkedin: 'https://linkedin.com/in/artist-creative',
    behance: 'https://behance.net/artist-portfolio'
  },
  contact: {
    email: 'artist@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Art Street, Creative City, CC 12345',
    socialMedia: {
      instagram: 'https://instagram.com/artist_portfolio',
      twitter: 'https://twitter.com/artist_creative',
      linkedin: 'https://linkedin.com/in/artist-creative',
      behance: 'https://behance.net/artist-portfolio'
    }
  }
};

// Common UI data
export const uiData = {
  loadingStates: {
    default: 'Loading...',
    images: 'Loading images...',
    content: 'Loading content...',
    form: 'Processing...'
  },
  errorStates: {
    default: 'Something went wrong',
    network: 'Network error. Please check your connection.',
    notFound: 'Content not found',
    form: 'Please check your input and try again'
  },
  successStates: {
    formSubmitted: 'Message sent successfully!',
    emailSent: 'Email sent successfully!',
    actionCompleted: 'Action completed successfully!'
  }
};

export default {
  homeData,
  workData,
  contactData,
  imageData,
  images,
  navigationData,
  siteConfig,
  uiData
};
