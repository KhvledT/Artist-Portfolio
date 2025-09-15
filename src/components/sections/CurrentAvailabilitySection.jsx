const CurrentAvailabilitySection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Availability</h3>
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-white rounded-xl">
          <div className="flex items-center space-x-3">
            <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium text-gray-900">Status</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              Available
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-white rounded-xl">
          <div className="flex items-center space-x-3">
            <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium text-gray-900">Response Time</span>
          </div>
          <span className="text-gray-600 font-medium">Within 24 hours</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-white rounded-xl">
          <div className="flex items-center space-x-3">
            <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="font-medium text-gray-900">Preferred Contact</span>
          </div>
          <span className="text-gray-600 font-medium">Email or Form</span>
        </div>

        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <div className="flex items-start space-x-3">
            <svg className="h-5 w-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-semibold text-yellow-800 mb-1">Next Available Slot</h4>
              <p className="text-yellow-700 text-sm">Starting new projects in 2 weeks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentAvailabilitySection;
