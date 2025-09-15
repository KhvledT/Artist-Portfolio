import { Search, Lightbulb, Palette, CheckCircle } from 'lucide-react';
import { homeData } from '../../data';

const ProcessSection = () => {
  const { process } = homeData;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {process.title.main}
            <span className={`block ${process.title.highlightColor}`}>{process.title.highlight}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((step, index) => {
            const iconMap = {
              Search,
              Lightbulb,
              Palette,
              CheckCircle
            };
            const colorMap = {
              "from-blue-500 to-blue-600": "text-blue-500",
              "from-purple-500 to-purple-600": "text-purple-500",
              "from-green-500 to-green-600": "text-green-500",
              "from-orange-500 to-orange-600": "text-orange-500"
            };
            const IconComponent = iconMap[step.icon];
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white group-hover:bg-gray-50 transition-colors duration-300 border border-gray-200`}>
                    <IconComponent className={`h-8 w-8 ${colorMap[step.color] || 'text-gray-500'}`} />
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-8 left-8 w-[calc(100%-4rem)] h-0.5 bg-gray-200 -translate-y-1/2 z-0">
                      <div className="absolute top-0 left-0 w-0 h-full bg-blue-600 group-hover:w-full transition-all duration-500 delay-200"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-4 text-sm font-medium text-blue-600">
                  {step.number}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Timeline for Mobile */}
        <div className="lg:hidden mt-12">
          <div className="space-y-8">
            {process.steps.map((step, index) => {
              const iconMap = {
                Search,
                Lightbulb,
                Palette,
                CheckCircle
              };
              const colorMap = {
                "from-blue-500 to-blue-600": "text-blue-500",
                "from-purple-500 to-purple-600": "text-purple-500",
                "from-green-500 to-green-600": "text-green-500",
                "from-orange-500 to-orange-600": "text-orange-500"
              };
              const IconComponent = iconMap[step.icon];
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <IconComponent className={`h-6 w-6 ${colorMap[step.color] || 'text-gray-500'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
