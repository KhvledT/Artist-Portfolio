import { Filter } from 'lucide-react';
import { workData } from '../../../data';
import { cn } from '../../../lib/utils';

const ViewToggle = ({ viewMode, onViewModeChange }) => {
  const { gallery } = workData;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Grid3X3':
        return (
          <div className="grid grid-cols-2 gap-1 w-4 h-4">
            <div className="bg-current rounded-sm"></div>
            <div className="bg-current rounded-sm"></div>
            <div className="bg-current rounded-sm"></div>
            <div className="bg-current rounded-sm"></div>
          </div>
        );
      case 'List':
        return (
          <div className="flex flex-col space-y-1 w-4 h-4">
            <div className="bg-current rounded-sm h-1"></div>
            <div className="bg-current rounded-sm h-1"></div>
            <div className="bg-current rounded-sm h-1"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center space-x-2 sm:space-x-4 justify-center">
      <div className="hidden sm:flex items-center space-x-2">
        <Filter className="h-5 w-5 text-gray-600" />
        <span className="text-gray-700 font-medium">View Mode:</span>
      </div>
      
      <div className="flex bg-gray-100 rounded-lg p-2">
        {gallery.viewOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onViewModeChange(option.id)}
            className={cn(
              "flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-2 rounded-md transition-all duration-200",
              viewMode === option.id
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            )}
          >
            {renderIcon(option.icon)}
            <span className="text-xs sm:text-sm font-medium px-1 sm:px-2">{option.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ViewToggle;
