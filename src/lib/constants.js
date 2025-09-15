// Legacy constants - now using data from the data folder
// This file is kept for backward compatibility

import { imageData, navigationData, siteConfig } from '../data';

// Navigation items for the navbar
export const navigationItems = navigationData.items;

// Gallery images from the portfolio - organized by category
export const galleryImages = [
  ...imageData.digitalArt,
  ...imageData.mixedMedia,
  ...imageData.painting,
  ...imageData.photography
];

// Dynamic category counting utility
export const getCategoryCounts = (images) => {
  const categoryCounts = new Map();
  
  images.forEach(image => {
    const categoryName = image.category.toLowerCase().replace(/\s+/g, '');
    const categoryId = {
      'digitalart': 'digital',
      'photography': 'photography', 
      'painting': 'painting',
      'mixedmedia': 'mixed'
    }[categoryName];
    
    if (categoryId) {
      categoryCounts.set(categoryId, (categoryCounts.get(categoryId) || 0) + 1);
    }
  });
  
  return categoryCounts;
};

// Contact information
export const contactInfo = siteConfig.contact;
