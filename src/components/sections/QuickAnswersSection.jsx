const QuickAnswersSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Answers</h3>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h4 className="font-semibold text-gray-900 mb-2">What's your typical project timeline?</h4>
          <p className="text-gray-600 text-sm">Most projects take 2-6 weeks depending on complexity. I'll provide a detailed timeline during our initial consultation.</p>
        </div>
        
        <div className="border-l-4 border-green-500 pl-4">
          <h4 className="font-semibold text-gray-900 mb-2">Do you work with international clients?</h4>
          <p className="text-gray-600 text-sm">Yes! I work with clients worldwide. All communication is in English and payment can be made via various international methods.</p>
        </div>
        
        <div className="border-l-4 border-purple-500 pl-4">
          <h4 className="font-semibold text-gray-900 mb-2">What file formats do you deliver?</h4>
          <p className="text-gray-600 text-sm">I provide files in multiple formats (PNG, JPG, PDF, AI, PSD) depending on your project needs and usage requirements.</p>
        </div>

        <div className="border-l-4 border-orange-500 pl-4">
          <h4 className="font-semibold text-gray-900 mb-2">Do you offer revisions?</h4>
          <p className="text-gray-600 text-sm">Yes! I include 2-3 rounds of revisions in every project to ensure you're completely satisfied with the final result.</p>
        </div>
      </div>
    </div>
  );
};

export default QuickAnswersSection;
