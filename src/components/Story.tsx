import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Story: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-neutral-cream relative">
      {/* Top decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-teal/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl bg-gray-50 flex items-center justify-center min-h-[224px] sm:min-h-[256px] md:min-h-[320px]">
              <img
                src="/images/about/chef-mindy-lim-yellow-magic-roll-peta-award.webp"
                alt="Chef Mindy Lim"
                className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[600px] object-contain"
              />
            </div>
          </div>

          {/* Story Text */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-teal mb-3 sm:mb-4 md:mb-6">
              Meet Chef Mindy Lim
            </h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg text-dark-text font-body leading-relaxed">
              <p>
                <Link to="/about" className="text-primary-teal hover:text-secondary-orange underline font-semibold transition-colors">
                  Chef Mindy Lim's
                </Link> culinary journey spans over 20 years, bringing authentic Thai and Japanese flavors
                to life through compassionate, plant-based cuisine.
              </p>
              <p>
                After years of perfecting traditional recipes and adapting them for vegan diners,
                Chef Mindy opened <span className="font-semibold text-primary-teal">Basil Vegan Thai & Sushi</span> in
                Green Valley, Henderson. Her passion for authentic Thai cuisine shines through every dish,
                from her signature Tom Yum soup to creative sushi rolls.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Located in the heart of Henderson, Basil stands as a testament to the fact that
                plant-based dining can be both <span className="font-semibold text-secondary-orange">authentic and delicious</span>,
                appealing to vegans and food lovers alike.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-5 sm:mt-6 md:mt-8 flex flex-col gap-3 sm:gap-4">
              <Link
                to="/about"
                className="min-h-[44px] w-full flex items-center justify-center bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg transition-all duration-300 sm:transform sm:hover:scale-105 shadow-xl sm:hover:shadow-2xl"
              >
                Learn About Chef Mindy's Journey
              </Link>
              <a
                href="https://order.toasttab.com/online/basil-vegan-thai"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] w-full flex items-center justify-center border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 sm:transform sm:hover:scale-105 text-sm sm:text-base"
              >
                View Our Menu
              </a>
            </div>

            {/* Location Badge */}
            <div className="mt-6 sm:mt-8 w-full max-w-sm mx-auto md:mx-0 bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 border-2 border-accent-gold rounded-2xl px-6 sm:px-8 py-4 sm:py-5 text-center md:text-left shadow-lg transform transition-all duration-300 hover:scale-105">
              <p className="text-primary-teal font-heading font-bold text-lg sm:text-xl md:text-2xl leading-tight">
                Henderson's Premier Plant-Based Thai Restaurant
              </p>
              <p className="text-dark-text font-body font-semibold text-sm sm:text-base md:text-lg mt-2">Green Valley Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
