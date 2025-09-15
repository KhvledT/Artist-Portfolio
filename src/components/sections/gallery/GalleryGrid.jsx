import { useNavigate } from 'react-router-dom';

const GalleryGrid = ({ images, onImageClick }) => {
  const navigate = useNavigate();

  const handleViewDetails = (e, image) => {
    e.stopPropagation(); // Prevent modal from opening
    navigate(`/project/${image.id}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {images.map((image) => (
        <div
          key={image.id}
          className={`group relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square sm:aspect-[4/5] md:aspect-[4/5] lg:aspect-[3/4]`}
          onClick={() => onImageClick(image)}
        >
           <div className="h-full overflow-hidden">
             <img
               src={image.src}
               alt={image.alt}
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
               loading="lazy"
               decoding="async"
               sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
             />
           </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-1">{image.title}</h3>
              <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3">{image.category}</p>
              <button
                onClick={(e) => handleViewDetails(e, image)}
                className="bg-white text-black bg-opacity-20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-opacity-30 transition-all duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
