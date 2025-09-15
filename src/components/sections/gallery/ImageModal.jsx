import { Download, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageModal = ({ 
  selectedImage, 
  currentImageIndex, 
  filteredImages, 
  onClose, 
  onPrevImage, 
  onNextImage 
}) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 h-screen">
      <div className="relative max-w-6xl max-h-full w-full h-full">
        {/* Close Button - Top Left */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-full p-3 hover:bg-opacity-70 transition-colors z-50"
          aria-label="Close image modal"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {/* Navigation - Left/Right */}
        {filteredImages.length > 1 && (
          <>
            <button
              onClick={onPrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-70 transition-colors z-50 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>
            <button
              onClick={onNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-70 transition-colors z-50 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </button>
          </>
        )}

        {/* Image */}
        <div className="flex items-center justify-center h-full">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt || `${selectedImage.title} - ${selectedImage.category} artwork`}
            className="max-w-full max-h-full object-contain rounded-lg"
            loading="eager"
          />
        </div>

        {/* Download Button - Top Right */}
        <div className="absolute top-4 right-4 z-50">
          <button 
            className="bg-black bg-opacity-50 backdrop-blur-sm rounded-full p-3 hover:bg-opacity-70 transition-colors shadow-lg"
            aria-label={`Download ${selectedImage.title}`}
            onClick={() => {
              const link = document.createElement('a');
              link.href = selectedImage.src;
              link.download = `${selectedImage.title}.jpg`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Image Info - Bottom */}
        <div className="absolute bottom-4 left-4 right-4 w-fit bg-black bg-opacity-50 rounded-lg text-white z-50 mx-5">
          <div className=" bg-opacity-50 rounded-lg p-4">
            <h3 className="text-3xl font-bold mb-2">{selectedImage.title}</h3>
            <p className="text-xl text-gray-200 mb-2">{selectedImage.category}</p>
            {selectedImage.description && (
              <p className="text-gray-300 mb-3 max-w-2xl leading-relaxed">
                {selectedImage.description}
              </p>
            )}
            <p className="text-sm text-gray-300">
              {currentImageIndex + 1} of {filteredImages.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
