import { workData } from '../../../data';
import { cn } from '../../../lib/utils';

const CategoriesFilter = ({ activeCategory, onCategoryChange }) => {
  const { gallery } = workData;

  // Use categories from gallery data with color mapping
  const categories = gallery.categories.map(category => ({
    ...category,
    color: {
      'all': 'from-blue-500 to-blue-600',
      'digital': 'from-purple-500 to-purple-600',
      'photography': 'from-green-500 to-green-600',
      'painting': 'from-orange-500 to-orange-600',
      'mixed': 'from-pink-500 to-pink-600'
    }[category.id] || 'from-gray-500 to-gray-600'
  }));

  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "relative px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 rounded-full font-medium transition-all duration-75 text-sm sm:text-base",
              "hover:scale-105 hover:shadow-lg",
              activeCategory === category.id
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            )}
          >
            {category.name}
            {category.count > 0 && (
              <span className={cn(
                "ml-1 sm:ml-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold",
                activeCategory === category.id
                  ? "bg-white bg-opacity-20"
                  : "bg-gray-100 text-gray-600"
              )}>
                {category.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFilter;
