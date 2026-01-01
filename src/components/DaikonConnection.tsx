import { Link } from 'react-router-dom';

const DaikonConnection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-neutral-cream via-white to-neutral-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-teal blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-secondary-orange blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-gold blur-3xl"></div>
      </div>


      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-teal/30 via-secondary-orange/30 to-transparent"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Decorative badge */}
        <div className="inline-flex items-center gap-2 bg-primary-teal/10 border border-primary-teal/20 rounded-full px-4 py-2 mb-6">
          <span className="text-xs sm:text-sm font-medium text-primary-teal uppercase tracking-wide">Award-Winning Restaurant Family</span>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 lg:p-16 transform transition-all duration-300 hover:shadow-3xl border border-gray-100">
          {/* Daikon Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/logos/daikon-vegan-sushi-logo.webp"
              alt="Daikon logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Header */}
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-teal">
              From the Creators of Daikon Vegan Sushi
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-dark-text font-body leading-relaxed mb-4 sm:mb-6 px-2">
            After years of success with Daikon Vegan Sushi in Las Vegas, we're thrilled to bring our
            award-winning plant-based cuisine to Henderson and Green Valley. Basil Vegan Thai & Sushi
            combines the beloved vegan sushi that made Daikon a local favorite with authentic Thai
            flavors, creating a unique dining experience that celebrates both culinary traditions.
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-teal/20 to-transparent"></div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-teal/20 to-transparent"></div>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-dark-text font-body leading-relaxed mb-6 sm:mb-8 px-2">
            Every dish reflects our commitment to excellence, innovation, and plant-based dining. Whether
            you're a longtime Daikon fan or discovering us for the first time, you'll find the same
            dedication to quality ingredients, creative recipes, and exceptional service that has earned
            us recognition throughout the Las Vegas Valley.
          </p>

          {/* Button group */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.daikonvegansushi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center justify-center gap-2 bg-primary-teal hover:bg-opacity-90 text-white font-body font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all sm:transform sm:hover:scale-105 text-sm sm:text-base shadow-lg hover:shadow-xl"
            >
              Visit Daikon Vegan Sushi
            </a>
            <Link
              to="/about"
              className="min-h-[44px] flex items-center justify-center gap-2 border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all text-sm sm:text-base"
            >
              Learn Our Story
            </Link>
          </div>
        </div>

        {/* Bottom stats or trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-heading font-bold text-primary-teal">2</div>
            <div className="text-xs sm:text-sm text-gray-600">Locations</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-heading font-bold text-primary-teal">100%</div>
            <div className="text-xs sm:text-sm text-gray-600">Plant-Based</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-heading font-bold text-primary-teal">10+</div>
            <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-orange/30 via-primary-teal/30 to-transparent"></div>
    </section>
  );
};

export default DaikonConnection;

