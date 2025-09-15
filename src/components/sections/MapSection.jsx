import { useState } from 'react';
import { MapPin, Clock, Coffee, Phone, Mail } from 'lucide-react';
import { contactData } from '../../data';

const MapSection = () => {
  useState(false); // Map loaded state (currently unused)
  const { map, contactInfo  } = contactData;


  const businessHours = contactInfo.businessHours.hours;
  const contactMethods = contactInfo.contactMethods;


  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-6000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-8000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {map.title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Studio
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {map.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="space-y-6">
            {/* Interactive Map */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/20">
              <div className="aspect-video relative">
                <iframe 
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28781.577884702965!2d${map.location.coordinates.lng}!3d${map.location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2seg!4v1757729037384!5m2!1sar!2seg`}
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                ></iframe>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Contact</h3>
              <div className="space-y-3">
                {contactMethods.slice(0, 2).map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    {method.icon === 'Phone' && <Phone className="w-5 h-5 text-green-400" />}
                    {method.icon === 'Mail' && <Mail className="w-5 h-5 text-blue-400" />}
                    <span className="text-gray-300 group-hover:text-white">{method.value}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* call to action */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Call to Action</h3>
              <p className="text-gray-300 text-sm">Get in touch with us to discuss your project.</p>
              <button
               className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
               onClick={() => {}}
               >Get in touch</button>
            </div>

            
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-400" />
                Business Hours
              </h3>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-white/20 last:border-b-0">
                    <span className="font-medium text-white">{schedule.day}</span>
                    <span className="text-gray-300">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-500/20 rounded-lg border border-blue-400/30">
                <p className="text-sm text-blue-200">
                  <strong>Note:</strong> {contactInfo.businessHours.note}
                </p>
              </div>
            </div>

                {/* Nearby Places - Separate section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Nearby</h3>
              {map.nearbyLandmarks.map((landmark, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Coffee className="w-5 h-5 text-orange-400" />
                    <h4 className="font-semibold text-white">{landmark.name}</h4>
                  </div>
                  <p className="text-gray-300 text-sm">{landmark.description}</p>
                  <p className="text-gray-400 text-sm">{landmark.distance}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MapSection;
