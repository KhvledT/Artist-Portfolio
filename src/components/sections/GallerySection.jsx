import { useState, useEffect, useMemo, useCallback } from 'react';
import { workData, imageData } from '../../data';
import { 
  CategoriesFilter, 
  ViewToggle, 
  GalleryGrid, 
  GalleryList, 
  ImageModal, 
  LoadMore 
} from './gallery';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleImages, setVisibleImages] = useState(8);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const { gallery } = workData;

  // Create gallery images from imageData
  const galleryImages = useMemo(() => {
    const allImages = [];
    
    // Digital Art
    imageData.digitalArt.forEach((img, index) => {
      allImages.push({
        id: `digital-${index}`,
        src: img.src,
        alt: img.alt,
        title: img.title || `Digital Art ${index + 1}`,
        category: 'Digital Art',
        description: img.description || 'Digital artwork showcasing modern techniques'
      });
    });
    
    // Mixed Media
    imageData.mixedMedia.forEach((img, index) => {
      allImages.push({
        id: `mixed-${index}`,
        src: img.src,
        alt: img.alt,
        title: img.title || `Mixed Media ${index + 1}`,
        category: 'Mixed Media',
        description: img.description || 'Mixed media artwork combining various techniques'
      });
    });
    
    // Painting
    imageData.painting.forEach((img, index) => {
      allImages.push({
        id: `painting-${index}`,
        src: img.src,
        alt: img.alt,
        title: img.title || `Painting ${index + 1}`,
        category: 'Painting',
        description: img.description || 'Traditional painting with contemporary vision'
      });
    });
    
    // Photography
    imageData.photography.forEach((img, index) => {
      allImages.push({
        id: `photography-${index}`,
        src: img.src,
        alt: img.alt,
        title: img.title || `Photography ${index + 1}`,
        category: 'Photography',
        description: img.description || 'Capturing moments and emotions through photography'
      });
    });
    
    return allImages;
  }, []);

  // Pre-compute category mapping for faster filtering
  const categoryMapping = useMemo(() => {
    const map = new Map();
    galleryImages.forEach(image => {
      const categoryName = image.category.toLowerCase().replace(/\s+/g, '');
      const categoryId = {
        'digitalart': 'digital',
        'photography': 'photography', 
        'painting': 'painting',
        'mixedmedia': 'mixed'
      }[categoryName];
      if (categoryId) {
        if (!map.has(categoryId)) {
          map.set(categoryId, []);
        }
        map.get(categoryId).push(image);
      }
    });
    return map;
  }, [galleryImages]);

  // Shuffle function to randomize array order
  const shuffleArray = useCallback((array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Filter images based on active category - much faster with pre-computed mapping
  const filteredImages = useMemo(() => {
    let images;
    if (activeCategory === 'all') {
      images = galleryImages;
    } else {
      images = categoryMapping.get(activeCategory) || [];
    }
    // Shuffle the images for random display order
    return shuffleArray(images);
  }, [activeCategory, categoryMapping, shuffleArray]);

  // Get displayed images - optimized with useMemo
  const displayedImages = useMemo(() => {
    return filteredImages.slice(0, visibleImages);
  }, [filteredImages, visibleImages]);

  // Reset visible images when category changes
  useEffect(() => {
    setVisibleImages(8);
  }, [activeCategory]);

  // Modal handlers
  const handleImageClick = useCallback((image) => {
    const index = filteredImages.findIndex(img => img.id === image.id);
    setCurrentImageIndex(index);
    setSelectedImage(image);
  }, [filteredImages]);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    const nextIndex = currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  }, [currentImageIndex, filteredImages]);

  const prevImage = useCallback(() => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  }, [currentImageIndex, filteredImages]);

  // Category and view mode handlers
  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  const handleViewModeChange = useCallback((mode) => {
    setViewMode(mode);
  }, []);

  // Load more handler
  const loadMore = useCallback(async () => {
    setIsLoading(true);
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setVisibleImages(prev => Math.min(prev + 8, filteredImages.length));
    setIsLoading(false);
  }, [filteredImages.length]);

  const hasMore = visibleImages < filteredImages.length;

  return (
    <>
      {/* Categories Section */}
      <section className="pt-12 sm:pt-16 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {gallery.title.main}
              <span className={`block ${gallery.title.highlightColor}`}>{gallery.title.highlight}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              {gallery.subtitle}
            </p>
          </div>
          
          <div className="space-y-6">
            <CategoriesFilter 
              activeCategory={activeCategory} 
              onCategoryChange={handleCategoryChange} 
            />
            
            <ViewToggle 
              viewMode={viewMode} 
              onViewModeChange={handleViewModeChange} 
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-responsive bg-gray-50">
        <div className="container-responsive">
          {viewMode === 'grid' ? (
            <GalleryGrid 
              images={displayedImages} 
              onImageClick={handleImageClick} 
            />
          ) : (
            <GalleryList 
              images={displayedImages} 
              onImageClick={handleImageClick} 
            />
          )}
          
          <LoadMore 
            isLoading={isLoading} 
            onLoadMore={loadMore} 
            hasMore={hasMore} 
          />
        </div>
      </section>

      {/* Modal */}
      <ImageModal
        selectedImage={selectedImage}
        currentImageIndex={currentImageIndex}
        filteredImages={filteredImages}
        onClose={closeModal}
        onPrevImage={prevImage}
        onNextImage={nextImage}
      />
    </>
  );
};

export default GallerySection;