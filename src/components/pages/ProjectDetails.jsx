import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Share2, Heart, Calendar, Clock, Tag, User, Eye } from 'lucide-react';
import { workData, imageData } from '../../data';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);

  // Create gallery images from imageData and workData
  const galleryImages = [
    // Include featured projects first (these have specific IDs that match the FeaturedProjectsSection)
    ...workData.featuredProjects.projects.map(project => ({
      id: project.id,
      src: project.image,
      alt: project.title,
      title: project.title,
      category: project.category,
      description: project.description,
      techniques: project.tags || ['Digital Art', 'Color Theory', 'Composition'],
      date: project.date,
      duration: project.duration,
      client: project.client,
      rating: project.rating,
      views: project.views,
      likes: Math.floor(project.views * 0.1) // Calculate likes based on views
    })),
    // Include project details projects (these have specific IDs that match the ProjectDetailsSection)
    ...workData.projectDetails.projects.map(project => ({
      id: project.id,
      src: project.image,
      alt: project.title,
      title: project.title,
      category: project.category,
      description: project.description,
      techniques: project.techniques || project.tags || ['Digital Art', 'Color Theory', 'Composition'],
      date: project.date,
      duration: project.duration,
      client: project.client,
      rating: project.rating,
      views: project.views,
      likes: project.likes || Math.floor(project.views * 0.1)
    })),
    // Then include gallery images with sequential IDs
    ...imageData.digitalArt.map((img, index) => ({
      id: `digital-${index}`,
      src: img.src,
      alt: img.alt,
      title: img.title || `Digital Art ${index + 1}`,
      category: 'Digital Art',
      description: img.description || 'Digital artwork showcasing modern techniques',
      techniques: ['Digital Art', 'Color Theory', 'Composition'],
      date: '2024-01-15',
      duration: '3 weeks',
      client: 'Modern Gallery',
      rating: 4.9,
      views: 1250,
      likes: 45
    })),
    ...imageData.mixedMedia.map((img, index) => ({
      id: `mixed-${index}`,
      src: img.src,
      alt: img.alt,
      title: img.title || `Mixed Media ${index + 1}`,
      category: 'Mixed Media',
      description: img.description || 'Mixed media artwork combining various techniques',
      techniques: ['Mixed Media', 'Traditional', 'Digital'],
      date: '2024-01-08',
      duration: '4 weeks',
      client: 'Art Foundation',
      rating: 4.8,
      views: 980,
      likes: 32
    })),
    ...imageData.painting.map((img, index) => ({
      id: `painting-${index}`,
      src: img.src,
      alt: img.alt,
      title: img.title || `Painting ${index + 1}`,
      category: 'Painting',
      description: img.description || 'Traditional painting with contemporary vision',
      techniques: ['Oil Painting', 'Acrylic', 'Watercolor'],
      date: '2024-01-01',
      duration: '2 weeks',
      client: 'Art Gallery',
      rating: 4.7,
      views: 750,
      likes: 28
    })),
    ...imageData.photography.map((img, index) => ({
      id: `photography-${index}`,
      src: img.src,
      alt: img.alt,
      title: img.title || `Photography ${index + 1}`,
      category: 'Photography',
      description: img.description || 'Capturing moments and emotions through photography',
      techniques: ['Photography', 'Lighting', 'Composition'],
      date: '2023-12-20',
      duration: '1 week',
      client: 'City Magazine',
      rating: 4.6,
      views: 1100,
      likes: 41
    }))
  ];

  useEffect(() => {
    // Find project by ID
    const foundProject = galleryImages.find(img => img.id === id);
    if (foundProject) {
      setProject(foundProject);
      
      // Get related projects (same category, excluding current)
      const related = galleryImages
        .filter(img => img.category === foundProject.category && img.id !== foundProject.id)
        .slice(0, 3);
      setRelatedProjects(related);
    }
  }, [id]);

  const handleBack = () => {
    navigate('/work');
  };


  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <button
            onClick={handleBack}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Work
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-6000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-8000"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 mb-4 text-white hover:text-blue-300 transition-colors"
              >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Work</span>
            </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm shadow-2xl border border-white/20">
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-contain"
              />
            </div>
            
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {project.category}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-300">2024</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description || `This is a detailed description of the ${project.title} project. The project showcases innovative techniques and creative vision in the field of ${project.category}.`}
              </p>
              
              {project.techniques && project.techniques.length > 0 && (
                <p className="text-gray-300 leading-relaxed">
                  This project utilizes advanced techniques including {project.techniques.join(', ')} to create a unique artistic expression.
                </p>
              )}
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                <h3 className="font-semibold text-white mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">Completed: {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">Duration: {project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">Client: {project.client}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                <h3 className="font-semibold text-white mb-4">Techniques Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techniques.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/10 text-white border border-white/20"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <h3 className="font-semibold text-white mb-4">Project Stats</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{project.views.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{project.rating}</div>
                  <div className="text-sm text-gray-300">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{project.likes}</div>
                  <div className="text-sm text-gray-300">Likes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => navigate(`/project/${relatedProject.id}`)}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-white/20"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProject.src}
                      alt={relatedProject.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-white mb-2">{relatedProject.title}</h3>
                    <p className="text-sm text-gray-300">{relatedProject.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
