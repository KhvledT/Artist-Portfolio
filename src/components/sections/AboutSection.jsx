import { Heart, Users, Award, Lightbulb } from 'lucide-react';
import { homeData } from '../../data';

const AboutSection = () => {
  const { about } = homeData;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                {about.title.main}
                <span className={`block ${about.title.highlightColor}`}>{about.title.highlight}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {about.content.main}
              </p>
            </div>

            <div className="space-y-6">
              {about.content.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              {about.values.map((value, index) => {
                const iconMap = {
                  Heart,
                  Users,
                  Award,
                  Lightbulb
                };
                const IconComponent = iconMap[value.icon];
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className={`h-6 w-6 ${value.color} mt-1`} />
                    <div>
                      <h3 className="font-semibold text-gray-900">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden">
              <img
                src={about.image.src}
                alt={about.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {about.stats.map((stat, index) => (
              <div key={index} className={`absolute ${index === 0 ? '-bottom-6 -left-6' : '-top-6 -right-6'} bg-white rounded-2xl p-6 shadow-lg border border-gray-200`}>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
