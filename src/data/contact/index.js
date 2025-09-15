// Contact page data structure
import { imageData } from '../images.js';

export const contactData = {
  // Contact Hero Section Data
  contactHero: {
    title: {
      main: "Let's",
      highlight: "Connect",
      highlightGradient: "from-blue-400 to-purple-400"
    },
    subtitle: "Ready to bring your creative vision to life? I'd love to hear about your project and discuss how we can work together to create something amazing.",
    background: {
      type: "gradient",
      gradient: "from-gray-900 via-blue-900 to-purple-900",
      animations: {
        floatingElements: true,
        particles: true
      }
    },
    testimonials: [
      "Amazing work! Exceeded all expectations.",
      "Professional, creative, and reliable.",
      "Transformed our vision into reality.",
      "Highly recommend for any creative project."
    ],
    quickActions: [
      {
        icon: "Mail",
        title: "Email Me",
        subtitle: "artist@example.com",
        description: "I'll respond within 24 hours",
        color: "text-blue-400",
        bgColor: "bg-blue-500/20",
        action: "mailto:artist@example.com"
      },
      {
        icon: "Phone",
        title: "Call Me",
        subtitle: "+1 (555) 123-4567",
        description: "Mon-Fri, 9AM-6PM EST",
        color: "text-green-400",
        bgColor: "bg-green-500/20",
        action: "tel:+15551234567"
      },
      {
        icon: "MessageCircle",
        title: "Live Chat",
        subtitle: "Available Now",
        description: "Instant response",
        color: "text-purple-400",
        bgColor: "bg-purple-500/20",
        action: "#contact-form"
      }
    ],
    trustIndicators: [
      {
        icon: "CheckCircle",
        text: "100% Client Satisfaction",
        color: "text-green-400"
      },
      {
        icon: "Clock",
        text: "24hr Response Time",
        color: "text-blue-400"
      },
      {
        icon: "Sparkles",
        text: "50+ Projects Completed",
        color: "text-purple-400"
      }
    ]
  },

  // Contact Form Section Data
  contactForm: {
    title: "Send me a message",
    subtitle: "Fill out the form below and I'll get back to you as soon as possible.",
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Your full name",
        required: true
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "your.email@example.com",
        required: true
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "+1 (555) 123-4567",
        required: false
      },
      {
        name: "projectType",
        label: "Project Type",
        type: "select",
        placeholder: "Select a project type",
        required: true,
        options: [
          { value: "digital-art", label: "Digital Art" },
          { value: "photography", label: "Photography" },
          { value: "painting", label: "Painting" },
          { value: "mixed-media", label: "Mixed Media" },
          { value: "consultation", label: "Consultation" },
          { value: "other", label: "Other" }
        ]
      },
      {
        name: "budget",
        label: "Budget Range",
        type: "select",
        placeholder: "Select budget range",
        required: false,
        options: [
          { value: "under-1000", label: "Under $1,000" },
          { value: "1000-5000", label: "$1,000 - $5,000" },
          { value: "5000-10000", label: "$5,000 - $10,000" },
          { value: "over-10000", label: "Over $10,000" },
          { value: "discuss", label: "Let's discuss" }
        ]
      },
      {
        name: "timeline",
        label: "Project Timeline",
        type: "select",
        placeholder: "Select timeline",
        required: false,
        options: [
          { value: "asap", label: "ASAP" },
          { value: "1-month", label: "Within 1 month" },
          { value: "2-3-months", label: "2-3 months" },
          { value: "flexible", label: "Flexible" }
        ]
      },
      {
        name: "message",
        label: "Project Details",
        type: "textarea",
        placeholder: "Tell me about your project, vision, and any specific requirements...",
        required: true,
        rows: 5
      }
    ],
    submitButton: {
      text: "Send Message",
      loadingText: "Sending...",
      successText: "Message Sent!"
    },
    successMessage: "Thank you for your message! I'll get back to you within 24 hours.",
    errorMessage: "There was an error sending your message. Please try again or contact me directly."
  },

  // Contact Info Section Data
  contactInfo: {
    title: "Get in Touch",
    subtitle: "Multiple ways to reach me and start our creative collaboration.",
    contactMethods: [
      {
        icon: "Mail",
        title: "Email",
        value: "artist@example.com",
        description: "For project inquiries and general questions",
        action: "mailto:artist@example.com",
        color: "text-blue-600",
        bgColor: "bg-blue-100"
      },
      {
        icon: "Phone",
        title: "Phone",
        value: "+1 (555) 123-4567",
        description: "Call for urgent matters or quick discussions",
        action: "tel:+15551234567",
        color: "text-green-600",
        bgColor: "bg-green-100"
      },
      {
        icon: "MapPin",
        title: "Location",
        value: "123 Art Street, Creative City, CC 12345",
        description: "Based in Creative City, serving clients worldwide",
        action: "https://maps.google.com",
        color: "text-purple-600",
        bgColor: "bg-purple-100"
      },
      {
        icon: "Clock",
        title: "Availability",
        value: "Mon-Fri, 9AM-6PM EST",
        description: "Response time: 24 hours or less",
        action: null,
        color: "text-orange-600",
        bgColor: "bg-orange-100"
      }
    ],
    socialMedia: {
      title: "Follow My Work",
      subtitle: "Stay updated with my latest projects and creative process",
      platforms: [
        {
          name: "Instagram",
          handle: "@artist_portfolio",
          url: "https://instagram.com/artist_portfolio",
          icon: "Instagram",
          color: "text-pink-600",
          bgColor: "bg-pink-100",
          followers: "5.2K"
        },
        {
          name: "Twitter",
          handle: "@artist_creative",
          url: "https://twitter.com/artist_creative",
          icon: "Twitter",
          color: "text-blue-600",
          bgColor: "bg-blue-100",
          followers: "3.8K"
        },
        {
          name: "LinkedIn",
          handle: "Artist Creative",
          url: "https://linkedin.com/in/artist-creative",
          icon: "Linkedin",
          color: "text-blue-700",
          bgColor: "bg-blue-100",
          followers: "2.1K"
        },
        {
          name: "Behance",
          handle: "Artist Portfolio",
          url: "https://behance.net/artist-portfolio",
          icon: "Behance",
          color: "text-blue-500",
          bgColor: "bg-blue-100",
          followers: "1.5K"
        }
      ]
    },
    businessHours: {
      title: "Business Hours",
      hours: [
        { day: "Monday - Friday", time: "9:00 AM - 6:00 PM EST" },
        { day: "Saturday", time: "10:00 AM - 4:00 PM EST" },
        { day: "Sunday", time: "Closed" }
      ],
      note: "Emergency projects can be discussed outside business hours via email."
    }
  },

  // Map Section Data
  map: {
    title: "Find Me Here",
    subtitle: "Located in the heart of Creative City, easily accessible by public transport and car.",
    location: {
      address: "123 Art Street, Creative City, CC 12345",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      },
      zoom: 15
    },
    markers: [
      {
        id: "studio",
        position: { lat: 40.7128, lng: -74.0060 },
        title: "Artist Studio",
        description: "My creative workspace where the magic happens"
      }
    ],
    nearbyLandmarks: [
      {
        name: "Creative City Art Museum",
        distance: "0.3 miles",
        description: "Major art museum with rotating exhibitions"
      },
      {
        name: "Art District Metro Station",
        distance: "0.1 miles",
        description: "Direct access to all city areas"
      },
      {
        name: "Creative Coffee Co.",
        distance: "0.2 miles",
        description: "Perfect spot for client meetings"
      }
    ]
  },

  // Contact Testimonials Section Data
  contactTestimonials: {
    title: {
      main: "Client",
      highlight: "Testimonials",
      highlightColor: "text-blue-600"
    },
    subtitle: "Hear what clients say about working with me and the quality of my creative services.",
    testimonials: [
      {
        id: "contact-testimonial-1",
        name: "Sarah Johnson",
        role: "Gallery Director",
        company: "Modern Art Gallery",
        content: "Working with this artist was an absolute pleasure. Their professionalism, creativity, and attention to detail made our collaboration seamless and successful.",
        rating: 5,
        project: "Contemporary Art Exhibition",
        year: 2023,
        image: imageData.testimonials[0].src
      },
      {
        id: "contact-testimonial-2",
        name: "Michael Chen",
        role: "Creative Director",
        company: "Digital Agency",
        content: "The communication throughout the project was excellent. The artist kept us updated at every step and delivered exactly what we envisioned.",
        rating: 5,
        project: "Brand Campaign Visuals",
        year: 2023,
        image: imageData.testimonials[1].src
      },
      {
        id: "contact-testimonial-3",
        name: "Emily Rodriguez",
        role: "Art Collector",
        company: "Private Collection",
        content: "From initial consultation to final delivery, the entire process was smooth and professional. I highly recommend their services.",
        rating: 5,
        project: "Private Art Collection",
        year: 2023,
        image: imageData.testimonials[2].src
      }
    ]
  }
};

export default contactData;
