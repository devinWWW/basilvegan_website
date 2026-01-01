import Hero from '../components/Hero';
import DaikonConnection from '../components/DaikonConnection';
import ReviewsSection from '../components/ReviewsSection';
import Story from '../components/Story';
import MenuHighlights from '../components/MenuHighlights';
import Locations from '../components/Locations';

const Home: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* Enhanced Gradient Transition */}
      <div className="relative -mt-12 z-0">
        <div className="h-20 sm:h-24 md:h-28 bg-gradient-to-b from-black/20 via-gray-100/60 to-gray-50"></div>
      </div>
      
      {/* Press Coverage Section - Compact Marquee */}
      <section className="py-6 sm:py-8 bg-gray-50 relative overflow-hidden border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Compact Section Header */}
          <h2 className="text-base sm:text-lg font-medium text-gray-500 mb-4 text-center uppercase tracking-wide">
            As Seen In
          </h2>

          {/* Compact Marquee Container */}
          <div className="relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling logos */}
            <div className="flex overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {/* First set */}
                {[
                  { src: '/images/logos/cropped-BoldJourney-logo.png', alt: 'Logo' },
                  { src: '/images/logos/las-vegas-journal-logo.png', alt: 'Logo' },
                  { src: '/images/logos/peta-logo.svg', alt: 'Logo' },
                  { src: '/images/logos/doordash-logo.png', alt: 'Logo' },
                  { src: '/images/logos/google-logo.png', alt: 'Logo' },
                  { src: '/images/logos/toast-logo.png', alt: 'Logo' },
                  { src: '/images/logos/ubereat-logo.png', alt: 'Logo' },
                ].map((logo, index) => (
                  <div
                    key={`logo-1-${index}`}
                    className="flex items-center justify-center mx-6 sm:mx-8 md:mx-10 bg-white rounded-lg px-4 py-2"
                    style={{ minWidth: '120px' }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  { src: '/images/logos/cropped-BoldJourney-logo.png', alt: 'Logo' },
                  { src: '/images/logos/las-vegas-journal-logo.png', alt: 'Logo' },
                  { src: '/images/logos/peta-logo.svg', alt: 'Logo' },
                  { src: '/images/logos/doordash-logo.png', alt: 'Logo' },
                  { src: '/images/logos/google-logo.png', alt: 'Logo' },
                  { src: '/images/logos/toast-logo.png', alt: 'Logo' },
                  { src: '/images/logos/ubereat-logo.png', alt: 'Logo' },
                ].map((logo, index) => (
                  <div
                    key={`logo-2-${index}`}
                    className="flex items-center justify-center mx-6 sm:mx-8 md:mx-10 bg-white rounded-lg px-4 py-2"
                    style={{ minWidth: '120px' }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transition to Story Section */}
      <div className="relative">
        <div className="h-16 sm:h-20 md:h-24 bg-gradient-to-b from-gray-50 via-white to-neutral-cream/90"></div>
      </div>
      
      {/* Story Section - Creates narrative flow */}
      <Story />
      
      {/* Enhanced Transition with Smooth Blend */}
      <div className="relative">
        <div className="h-16 sm:h-20 md:h-24 bg-gradient-to-b from-neutral-cream via-neutral-cream/95 via-white/80 to-white"></div>
        {/* Subtle divider line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary-teal/30 to-transparent"></div>
      </div>
      
      {/* Daikon Connection - Trust Building */}
      <DaikonConnection />
      
      {/* Enhanced Transition */}
      <div className="relative">
        <div className="h-16 sm:h-20 md:h-24 bg-gradient-to-b from-neutral-cream via-neutral-cream/95 via-white/80 to-white"></div>
        {/* Decorative accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-secondary-orange/20 via-primary-teal/30 to-transparent"></div>
      </div>
      
      {/* Menu Highlights - Showcase */}
      <MenuHighlights />
      
      {/* Enhanced Transition */}
      <div className="relative">
        <div className="h-16 sm:h-20 md:h-24 bg-gradient-to-b from-white via-white/90 via-neutral-cream/80 to-neutral-cream"></div>
        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-neutral-cream">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 Q300,10 600,40 T1200,40 L1200,60 L0,60 Z" fill="currentColor" className="text-neutral-cream"/>
          </svg>
        </div>
      </div>
      
      {/* Reviews Section - Social Proof */}
      <ReviewsSection />
      
      {/* Enhanced Transition */}
      <div className="relative">
        <div className="h-16 sm:h-20 md:h-24 bg-gradient-to-b from-white via-white/90 via-neutral-cream/80 to-neutral-cream"></div>
        {/* Subtle pattern */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-teal/20 to-transparent"></div>
      </div>
      
      {/* Enhanced Final Transition */}
      <div className="relative">
        <div className="h-16 sm:h-20 md:h-24 bg-gradient-to-b from-white via-white/95 via-neutral-cream/90 to-white"></div>
        {/* Decorative element */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-secondary-orange/30 via-primary-teal/40 to-transparent"></div>
      </div>
      
      {/* Locations - Call to Action */}
      <Locations />
    </div>
    </>
  );
};

export default Home;
