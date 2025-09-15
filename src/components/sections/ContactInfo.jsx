import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Twitter, Linkedin, Github, ExternalLink, Copy, Check } from 'lucide-react';
import { contactData } from '../../data';

const ContactInfo = () => {
  const [copiedField, setCopiedField] = useState(null);
  const { contactInfo } = contactData;

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Handle copy error silently
    }
  };

  const socialLinks = contactInfo.socialMedia.platforms.map(platform => {
    const iconMap = {
      Instagram,
      Twitter,
      Linkedin,
      Behance: Github // Using Github as placeholder for Behance
    };
    return {
      name: platform.name,
      icon: iconMap[platform.icon],
      url: platform.url,
      color: platform.color,
      bgColor: platform.bgColor,
      hoverColor: 'hover:bg-pink-100'
    };
  });

  const contactMethods = contactInfo.contactMethods.map(method => {
    const iconMap = {
      Mail,
      Phone,
      MapPin,
      Clock
    };
    return {
      icon: iconMap[method.icon],
      title: method.title,
      value: method.value,
      description: method.description,
      color: method.color,
      bgColor: method.bgColor,
      action: method.action
    };
  });

  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{contactInfo.title}</h3>
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                <div className={`p-3 rounded-lg ${method.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`h-6 w-6 ${method.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                  <div className="flex items-center space-x-2">
                    <p className="text-gray-600 font-medium">{method.value}</p>
                    <button
                      onClick={() => copyToClipboard(method.value, method.title)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 hover:bg-gray-200 rounded"
                    >
                      {copiedField === method.title ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">{method.description}</p>
                  <a
                    href={method.action}
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mt-2 group/link"
                  >
                    <span>Contact via {method.title}</span>
                    <ExternalLink className="h-3 w-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{contactInfo.socialMedia.title}</h3>
        <p className="text-gray-600 mb-6">{contactInfo.socialMedia.subtitle}</p>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-3 p-4 rounded-xl ${social.bgColor} ${social.hoverColor} transition-all duration-300 hover:scale-105 group`}
            >
              <social.icon className={`h-6 w-6 ${social.color}`} />
              <div>
                <p className="font-medium text-gray-900">{social.name}</p>
                <p className="text-sm text-gray-500">Follow for updates</p>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 ml-auto group-hover:translate-x-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ContactInfo;
