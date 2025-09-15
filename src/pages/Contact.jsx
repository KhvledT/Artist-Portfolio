import ContactHero from '../components/sections/ContactHero';
import ContactForm from '../components/sections/ContactForm';
import ContactInfo from '../components/sections/ContactInfo';
import MapSection from '../components/sections/MapSection';
import GetInTouchSection from '../components/sections/GetInTouchSection';
import FollowMeSection from '../components/sections/FollowMeSection';
import CurrentAvailabilitySection from '../components/sections/CurrentAvailabilitySection';
import QuickAnswersSection from '../components/sections/QuickAnswersSection';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="container-responsive section-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <ContactForm />
          <div className="space-y-6 sm:space-y-8">
            <GetInTouchSection />
            <FollowMeSection />
          </div>
        </div>
      </div>

      {/* Moved sections to bottom */}
      <div className="bg-gray-50 section-responsive">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <CurrentAvailabilitySection />
            <QuickAnswersSection />
          </div>
        </div>
      </div>

      <MapSection />
    </div>
  );
};

export default Contact;
