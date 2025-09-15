import PortfolioHero from '../components/sections/PortfolioHero';
import GallerySection from '../components/sections/GallerySection';
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection';
import StatsSection from '../components/sections/StatsSection';
import WorkTestimonialsSection from '../components/sections/WorkTestimonialsSection';
import ProjectDetailsSection from '../components/sections/ProjectDetailsSection';

const Work = () => {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <GallerySection />
      <FeaturedProjectsSection />
      <StatsSection />
      <WorkTestimonialsSection />
      <ProjectDetailsSection />
    </div>
  );
};

export default Work;
