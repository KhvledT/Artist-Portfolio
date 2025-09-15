import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Tag, User, ExternalLink, ArrowRight, Star, Eye, Heart, Share2 } from 'lucide-react';
import { workData } from '../../data/work/index.js';

const ProjectDetailsSection = () => {
  const [, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const handleViewProject = (projectId) => {
    navigate(`/project/${projectId}`);
  };


  // Get recent projects from data file
  const recentProjects = workData.projectDetails.projects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-6000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-8000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {workData.projectDetails.title.main}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {workData.projectDetails.title.highlight}
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {workData.projectDetails.subtitle}
          </p>
        </div>

        <div className="space-y-24">
          {recentProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        {project.featured && (
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        )}
                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="absolute top-6 right-6 flex space-x-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{project.rating}</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium text-gray-700">{project.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(project.date).toLocaleDateString()}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1 text-blue-400">
                      <Tag className="h-4 w-4" />
                      <span className="font-medium">{project.category}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-gray-300">
                      <User className="h-4 w-4" />
                      <span>{project.client}</span>
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Techniques Used</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {project.techniques.map((technique, techIndex) => (
                          <li key={techIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span>{technique}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Key Challenge</h4>
                      <p className="text-sm text-gray-300">{project.challenges}</p>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="p-4 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl">
                    <h4 className="font-semibold text-green-300 mb-2">Project Outcomes</h4>
                    <p className="text-sm text-green-200">{project.outcomes}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleViewProject(project.id)}
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span>View Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => window.open(project.image, '_blank')}
                    className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-white/30 text-white hover:border-white/50 hover:bg-white/10 font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
                  >
                    <span>View Full Size</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectDetailsSection;
