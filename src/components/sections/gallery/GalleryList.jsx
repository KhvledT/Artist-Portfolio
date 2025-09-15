import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GalleryList = ({ images, onImageClick }) => {
  const navigate = useNavigate();

  const handleViewDetails = (e, image) => {
    e.stopPropagation(); // Prevent modal from opening
    navigate(`/project/${image.id}`);
  };
  return (
    <div className="space-y-6">
      {images.map((image) => (
        <div
          key={image.id}
          className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
          onClick={() => onImageClick(image)}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 h-64 md:h-auto">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ maxWidth: '400px', height: 'auto' }}
              />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{image.category}</p>
                <p className="text-gray-600 leading-relaxed">
                  {image.description}
                </p>
              </div>
              <div className="flex items-center justify-end mt-6">
                <button 
                  onClick={(e) => handleViewDetails(e, image)}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                >
                  <span>View Details</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryList;
