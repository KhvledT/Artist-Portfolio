const GetInTouchSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h3>
      <div className="space-y-4 sm:space-y-6">
        <div className="group">
          <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/50 transition-all duration-300">
            <div className="p-2 sm:p-3 rounded-lg bg-blue-50 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
              <div className="flex items-center space-x-2">
                <p className="text-gray-600 font-medium text-sm sm:text-base">artist@example.com</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">I'll respond within 24 hours</p>
              <a
                href="mailto:artist@example.com"
                className="inline-flex items-center text-xs sm:text-sm text-blue-600 hover:text-blue-700 mt-2 group/link"
              >
                <span>Contact via Email</span>
                <svg className="h-3 w-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
