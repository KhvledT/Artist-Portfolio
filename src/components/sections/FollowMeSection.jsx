import { Instagram, Twitter, ExternalLink } from 'lucide-react';
import { contactData } from '../../data';

const FollowMeSection = () => {
  const { socialMedia } = contactData.contactInfo;
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Follow Me</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Stay updated with my latest work and behind-the-scenes content.</p>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {socialMedia.platforms.slice(0, 2).map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg sm:rounded-xl ${platform.bgColor} hover:opacity-80 transition-all duration-300 hover:scale-105 group`}
          >
            {platform.name === 'Instagram' && <Instagram className={`h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 ${platform.color}`} />}
            {platform.name === 'Twitter' && <Twitter className={`h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 ${platform.color}`} />}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 text-xs sm:text-sm lg:text-base truncate">{platform.name}</p>
              <p className="text-xs sm:text-sm text-gray-500 truncate">{platform.handle}</p>
            </div>
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 ml-auto group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FollowMeSection;
