import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import FeaturedWorkSection from '../components/sections/FeaturedWorkSection';
import ProcessSection from '../components/sections/ProcessSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedWorkSection />
      <ProcessSection />
    </div>
  );
};

export default Home;
