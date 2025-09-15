import { imageData } from '../images.js';

// Work page data structure
export const workData = {
  // Portfolio Hero Section Data
  portfolioHero: {
    title: {
      main: "My Creative",
      highlight: "Portfolio",
      highlightGradient: "from-blue-400 to-purple-400"
    },
    subtitle: "A comprehensive collection of my artistic journey, showcasing diverse creative expressions across digital art, photography, painting, and mixed media.",
    background: {
      type: "gradient",
      gradient: "from-gray-900 via-blue-900 to-purple-900",
      animations: {
        floatingElements: true,
        particles: true
      }
    }
  },

  // Gallery Section Data
  gallery: {
    title: {
      main: "Creative",
      highlight: "Gallery",
      highlightColor: "text-blue-600"
    },
    subtitle: "Explore my diverse collection of artistic works, organized by category and style. Each piece tells a unique story and represents a different facet of my creative journey.",
    categories: [
      {
        id: "all",
        name: "All Work",
        count: imageData.digitalArt.length + imageData.mixedMedia.length + imageData.painting.length + imageData.photography.length
      },
      {
        id: "digital",
        name: "Digital Art",
        count: imageData.digitalArt.length
      },
      {
        id: "mixed",
        name: "Mixed Media",
        count: imageData.mixedMedia.length
      },
      {
        id: "painting",
        name: "Painting",
        count: imageData.painting.length
      },
      {
        id: "photography",
        name: "Photography",
        count: imageData.photography.length
      }
    ],
    viewOptions: [
      { id: "grid", name: "Grid View", icon: "Grid3X3" },
      { id: "list", name: "List View", icon: "List" }
    ],
    itemsPerPage: 12,
    loadMoreText: "Load More Work"
  },

  // Featured Projects Section Data
  featuredProjects: {
    title: {
      main: "Award-Winning",
      highlight: "Projects",
      highlightColor: "text-blue-600"
    },
    subtitle: "Discover my most celebrated creative works that have earned recognition and acclaim in the art community.",
    projects: [
      {
        id: "digital-art-1",
        title: "Digital Art Revolution",
        category: "Digital Art",
        date: "2024-01-15",
        duration: "3 weeks",
        description: "A groundbreaking digital art series that explores the intersection of technology and human emotion through innovative visual storytelling techniques.",
        image: imageData.digitalArt[0].src,
        client: "Modern Gallery",
        rating: 4.9,
        views: 1250,
        tags: ["Digital Art", "Innovation", "Technology"],
        featured: true,
        year: "2024"
      },
      {
        id: "photography-1",
        title: "Urban Photography Mastery",
        category: "Photography",
        date: "2024-01-08",
        duration: "2 weeks",
        description: "Street photography series capturing the raw essence of urban life, architecture, and human stories in metropolitan environments.",
        image: imageData.photography[0].src,
        client: "City Magazine",
        rating: 4.8,
        views: 980,
        tags: ["Photography", "Urban", "Street"],
        featured: true,
        year: "2024"
      },
      {
        id: "mixed-media-1",
        title: "Mixed Media Innovation",
        category: "Mixed Media",
        date: "2023-12-20",
        duration: "4 weeks",
        description: "Interactive art installation combining traditional painting techniques with cutting-edge digital elements and immersive experiences.",
        image: imageData.mixedMedia[0].src,
        client: "Art Foundation",
        rating: 4.9,
        views: 2100,
        tags: ["Mixed Media", "Interactive", "Installation"],
        featured: true,
        year: "2023"
      }
    ]
  },

  // Stats Section Data
  stats: {
    title: {
      main: "By the",
      highlight: "Numbers",
      highlightGradient: "from-blue-400 to-purple-400"
    },
    subtitle: "A comprehensive look at my creative journey, achievements, and the impact of my work across the globe.",
    background: {
      type: "gradient",
      gradient: "from-gray-900 via-blue-900 to-purple-900",
      animations: {
        floatingElements: true,
        particles: true
      }
    },
    stats: [
      {
        icon: "Award",
        value: 50,
        label: "Projects Completed",
        suffix: "+",
        color: "from-blue-500 to-blue-600",
        description: "Creative projects delivered with excellence"
      },
      {
        icon: "Users",
        value: 25,
        label: "Happy Clients",
        suffix: "+",
        color: "from-green-500 to-green-600",
        description: "Satisfied clients worldwide"
      },
      {
        icon: "Clock",
        value: 3,
        label: "Years Experience",
        suffix: "+",
        color: "from-purple-500 to-purple-600",
        description: "Professional creative experience"
      },
      {
        icon: "Star",
        value: 100,
        label: "Client Satisfaction",
        suffix: "%",
        color: "from-yellow-500 to-orange-500",
        description: "Consistently high satisfaction rate"
      },
      {
        icon: "Globe",
        value: 15,
        label: "Countries Served",
        suffix: "+",
        color: "from-cyan-500 to-blue-500",
        description: "Global reach and impact"
      },
      {
        icon: "TrendingUp",
        value: 8,
        label: "Awards Won",
        suffix: "+",
        color: "from-pink-500 to-rose-500",
        description: "Recognition and achievements"
      }
    ],
    additionalInfo: {
      title: "Trusted by Creative Professionals Worldwide",
      description: "From individual artists to major galleries and international brands, my work has been recognized and celebrated across diverse creative communities and industries.",
      badges: [
        "Best Digital Artist 2023",
        "Innovation Award Winner",
        "Client Choice Award",
        "Creative Excellence Recognition"
      ]
    }
  },

  // Work Testimonials Section Data
  workTestimonials: {
    title: {
      main: "What Clients",
      highlight: "Say",
      highlightColor: "text-blue-600"
    },
    subtitle: "Hear from the amazing people I've had the pleasure of working with on their creative projects.",
    testimonials: [
      {
        id: "testimonial-1",
        name: "Sarah Johnson",
        role: "Gallery Director",
        company: "Modern Art Gallery",
        content: "Working with this artist was an absolute pleasure. Their attention to detail and creative vision brought our exhibition to life in ways we never imagined possible.",
        rating: 5,
        image: imageData.testimonials[0].src,
        project: "Contemporary Art Exhibition",
        year: 2023
      },
      {
        id: "testimonial-2",
        name: "Michael Chen",
        role: "Creative Director",
        company: "Digital Agency",
        content: "The digital art pieces created for our campaign exceeded all expectations. The artist's ability to translate complex concepts into stunning visuals is remarkable.",
        rating: 5,
        image: imageData.testimonials[1].src,
        project: "Brand Campaign Visuals",
        year: 2023
      },
      {
        id: "testimonial-3",
        name: "Emily Rodriguez",
        role: "Art Collector",
        company: "Private Collection",
        content: "I've commissioned several pieces and each one has been a masterpiece. The artist's versatility across different mediums is truly impressive.",
        rating: 5,
        image: imageData.testimonials[2].src,
        project: "Private Art Collection",
        year: 2023
      }
    ]
  },

  // Project Details Section Data
  projectDetails: {
    title: {
      main: "Recent",
      highlight: "Projects",
      highlightColor: "text-blue-600"
    },
    subtitle: "Detailed insights into my latest creative endeavors, the processes behind them, and the impact they've made.",
    projects: [
      {
        id: "digital-art-2",
        title: "Digital Art Series",
        category: "Digital Art",
        date: "2024-01-15",
        duration: "2 weeks",
        description: "A groundbreaking collection of abstract digital artworks that explore the intricate relationship between nature and technology. This series pushes the boundaries of digital creativity while maintaining deep emotional resonance.",
        image: imageData.digitalArt[1].src,
        client: "Modern Gallery",
        rating: 4.9,
        views: 1250,
        likes: 89,
        tags: ["Abstract", "Nature", "Technology", "Innovation"],
        featured: true,
        year: "2024",
        techniques: ["Digital Painting", "3D Modeling", "Color Theory"],
        challenges: "Balancing organic forms with geometric precision",
        outcomes: "Featured in 3 major exhibitions, 500+ social shares"
      },
      {
        id: "photography-2",
        title: "Urban Photography",
        category: "Photography",
        date: "2024-01-08",
        duration: "1 week",
        description: "An intimate street photography series that captures the raw essence of urban life and architectural beauty. Each frame tells a story of human connection within the urban landscape.",
        image: imageData.photography[1].src,
        client: "City Magazine",
        rating: 4.8,
        views: 980,
        likes: 67,
        tags: ["Street", "Architecture", "Urban", "Human Stories"],
        featured: false,
        year: "2024",
        techniques: ["Street Photography", "Natural Light", "Composition"],
        challenges: "Capturing authentic moments in fast-paced urban environments",
        outcomes: "Published in 5 magazines, won City Photography Award"
      },
      {
        id: "mixed-media-2",
        title: "Mixed Media Installation",
        category: "Mixed Media",
        date: "2023-12-20",
        duration: "3 weeks",
        description: "An innovative interactive art installation that seamlessly blends traditional painting techniques with cutting-edge digital elements, creating an immersive sensory experience.",
        image: imageData.mixedMedia[1].src,
        client: "Art Foundation",
        rating: 4.9,
        views: 2100,
        likes: 156,
        tags: ["Interactive", "Installation", "Traditional", "Digital"],
        featured: true,
        year: "2023",
        techniques: ["Oil Painting", "Digital Projection", "Interactive Design"],
        challenges: "Integrating physical and digital elements seamlessly",
        outcomes: "Visited by 10,000+ people, featured in Art & Technology Journal"
      }
    ]
  }
};

export default workData;
