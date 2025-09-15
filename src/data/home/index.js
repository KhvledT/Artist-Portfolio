import { imageData } from '../images.js';

// Home page data structure
export const homeData = {
  // Hero Section Data
  hero: {
    title: {
      main: "Creative",
      highlight: "Artist Portfolio",
      highlightGradient: "from-cyan-300 via-blue-300 to-purple-300"
    },
    subtitle: "Diving deep into the ocean of creativity, transforming visions into visual masterpieces through digital art, photography, and underwater-inspired expression.",
    ctaButtons: [
      {
        text: "Explore My Work",
        link: "/work",
        variant: "primary",
        icon: "ArrowRight"
      },
      {
        text: "Dive In & Connect",
        link: "/contact",
        variant: "secondary"
      }
    ],
    stats: [
      {
        value: "50+",
        label: "Underwater Projects",
        color: "text-cyan-300"
      },
      {
        value: "3",
        label: "Years Diving Deep",
        color: "text-blue-300"
      },
      {
        value: "100%",
        label: "Client Satisfaction",
        color: "text-purple-300"
      }
    ],
    background: {
      type: "gradient",
      gradient: "from-blue-900 via-cyan-900 to-blue-800",
      animations: {
        waves: true,
        bubbles: true
      }
    }
  },

  // About Section Data
  about: {
    title: {
      main: "About My",
      highlight: "Creative Journey",
      highlightColor: "text-blue-600"
    },
    content: {
      main: "I'm a passionate artist and creative professional with over 3 years of experience in digital art, photography, and visual storytelling. My work is driven by a deep love for color, composition, and the power of visual communication.",
      paragraphs: [
        "From concept to completion, I bring a unique perspective to every project. Whether it's a digital illustration, a photography session, or a mixed-media piece, I strive to create work that not only looks beautiful but also tells a meaningful story.",
        "My artistic journey began with traditional drawing and painting, evolving into the digital realm where I discovered new possibilities for creative expression. Today, I blend both traditional and modern techniques to create distinctive visual experiences."
      ]
    },
    image: {
      src: imageData.artist.src,
      alt: imageData.artist.alt,
      description: "Artist at work"
    },
    values: [
      {
        icon: "Heart",
        title: "Passion",
        description: "Driven by love for art",
        color: "text-red-500"
      },
      {
        icon: "Users",
        title: "Collaboration",
        description: "Working closely with clients",
        color: "text-blue-500"
      },
      {
        icon: "Award",
        title: "Quality",
        description: "Excellence in every project",
        color: "text-yellow-500"
      },
      {
        icon: "Lightbulb",
        title: "Innovation",
        description: "Always exploring new ideas",
        color: "text-purple-500"
      }
    ],
    stats: [
      {
        value: "3+",
        label: "Years Experience",
        color: "text-blue-600"
      },
      {
        value: "50+",
        label: "Projects Completed",
        color: "text-purple-600"
      }
    ]
  },

  // Featured Work Section Data
  featuredWork: {
    title: {
      main: "Featured",
      highlight: "Work",
      highlightColor: "text-blue-600"
    },
    subtitle: "Explore a selection of my most recent and impactful creative projects, showcasing the diversity and quality of my artistic portfolio.",
    ctaButton: {
      text: "View All Projects",
      link: "/work",
      icon: "ArrowRight"
    },
    projects: imageData.digitalArt.slice(0, 4).map((project) => ({
      id: project.id,
      src: project.src,
      alt: project.alt,
      title: project.title,
      category: project.category,
      description: project.description,
      featured: project.featured
    }))
  },

  // Process Section Data
  process: {
    title: {
      main: "My Creative",
      highlight: "Process",
      highlightColor: "text-blue-600"
    },
    subtitle: "From initial concept to final masterpiece, here's how I bring your creative vision to life through a structured and collaborative approach.",
    steps: [
      {
        number: "01",
        title: "Discovery & Consultation",
        description: "We start with an in-depth conversation about your vision, goals, and creative direction. This helps me understand exactly what you're looking for.",
        icon: "Search",
        color: "from-blue-500 to-blue-600"
      },
      {
        number: "02",
        title: "Concept Development",
        description: "I create initial concepts and sketches, exploring different approaches and styles to bring your vision to life.",
        icon: "Lightbulb",
        color: "from-purple-500 to-purple-600"
      },
      {
        number: "03",
        title: "Creation & Iteration",
        description: "The main creation process begins, with regular check-ins and iterations to ensure we're on the right track.",
        icon: "Palette",
        color: "from-green-500 to-green-600"
      },
      {
        number: "04",
        title: "Refinement & Delivery",
        description: "Final refinements and polishing to ensure the work meets the highest standards before delivery.",
        icon: "CheckCircle",
        color: "from-orange-500 to-orange-600"
      }
    ]
  }
};

export default homeData;
