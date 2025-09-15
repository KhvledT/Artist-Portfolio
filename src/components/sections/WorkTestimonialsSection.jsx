import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { workData } from '../../data';

const WorkTestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { workTestimonials } = workData;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % workTestimonials.testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, workTestimonials.testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % workTestimonials.testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + workTestimonials.testimonials.length) % workTestimonials.testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const current = workTestimonials.testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Quote className="h-4 w-4" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {workTestimonials.title.main}
            <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600`}>
              {workTestimonials.title.highlight}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {workTestimonials.subtitle}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-200">Project: {current.project}</p>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Quote className="h-12 w-12 text-blue-100 mb-4" />
                  <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                    "{current.content}"
                  </blockquote>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{current.name}</h4>
                      <p className="text-gray-600">{current.role}</p>
                      <p className="text-blue-600 font-medium">{current.company}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {current.project}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-2">
              {workTestimonials.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkTestimonialsSection;
