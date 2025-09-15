import { workData } from '../../../data';

const LoadMore = ({ isLoading, onLoadMore, hasMore }) => {
  const { gallery } = workData;
  
  if (!hasMore) return null;

  return (
    <div className="text-center mt-12">
      <button
        onClick={onLoadMore}
        disabled={isLoading}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Loading...</span>
          </div>
        ) : (
          gallery.loadMoreText
        )}
      </button>
    </div>
  );
};

export default LoadMore;
