import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Calendar, Clock, Tag, User, ArrowRight, Star, Eye } from 'lucide-react';
import { workData } from '../../data/work/index.js';

const FeaturedProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const navigate = useNavigate();

  const handleViewProject = (projectId) => {
    navigate(`/project/${projectId}`);
  };


  // Get featured projects from data file
  const featuredProjects = workData.featuredProjects.projects;

  return (
    <section id="award-winning-projects" className="section-responsive bg-white">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Star className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {workData.featuredProjects.title.main}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {workData.featuredProjects.title.highlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            {workData.featuredProjects.subtitle}
          </p>
        </div>

        {/* Featured Projects Grid - Mobile 2-column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                transform: hoveredProject === project.id ? 'translateY(-4px) sm:translateY(-8px)' : 'translateY(0)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-responsive group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                        {project.year}
                      </span>
                      <span className="bg-blue-500/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  <button 
                    onClick={() => window.open(project.image, '_blank')}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                    title="Open Full Size"
                  >
                    <ExternalLink className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                    <span className="text-xs sm:text-sm font-medium text-gray-600">{project.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                  {project.description}
                </p>

                {/* Project Meta - Mobile Optimized */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="truncate">{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{project.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>

                {/* Tags - Mobile Optimized */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA Button - Mobile Optimized */}
                <button 
                  onClick={() => handleViewProject(project.id)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group/btn text-sm sm:text-base"
                >
                  <span>View Project</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
