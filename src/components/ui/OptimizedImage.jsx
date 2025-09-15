import { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';

const OptimizedImage = ({
  src,
  alt,
  className,
  loading = 'lazy',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  quality: _quality = 80,
  placeholder: _placeholder = 'blur',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  // Generate WebP and responsive srcset
  const generateSrcSet = (originalSrc) => {
    const baseName = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    const extension = originalSrc.match(/\.(jpg|jpeg|png)$/i)?.[1] || 'jpg';
    
    const sizes = [640, 1024, 1920];
    const srcSet = sizes.map(size => 
      `${baseName}-${size}.webp ${size}w, ${baseName}-${size}.${extension} ${size}w`
    ).join(', ');
    
    return {
      webpSrc: `${baseName}.webp`,
      fallbackSrc: originalSrc,
      srcSet: srcSet
    };
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Load image when in view
  useEffect(() => {
    if (isInView && src) {
      const { webpSrc, fallbackSrc, srcSet } = generateSrcSet(src);
      setImageSrc({ webpSrc, fallbackSrc, srcSet });
    }
  }, [isInView, src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  if (!isInView) {
    return (
      <div 
        ref={imgRef}
        className={cn(
          'bg-gray-200 animate-pulse rounded',
          className
        )}
        style={{ aspectRatio: '4/3' }}
        {...props}
      />
    );
  }

  if (hasError) {
    return (
      <div 
        className={cn(
          'bg-gray-100 flex items-center justify-center text-gray-400',
          className
        )}
        style={{ aspectRatio: '4/3' }}
        {...props}
      >
        <span className="text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <picture className="block">
      {/* WebP source */}
      {imageSrc?.webpSrc && (
        <source
          srcSet={imageSrc.srcSet}
          sizes={sizes}
          type="image/webp"
        />
      )}
      
      {/* Fallback image */}
      <img
        ref={imgRef}
        src={imageSrc?.fallbackSrc || src}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        loading={loading}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      {/* Loading placeholder */}
      {!isLoaded && (
        <div 
          className={cn(
            'absolute inset-0 bg-gray-200 animate-pulse rounded',
            className
          )}
        />
      )}
    </picture>
  );
};

export default OptimizedImage;
