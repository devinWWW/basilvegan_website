import { useMemo } from 'react';
import { menuData } from '../data/menuData';

const MenuHighlights: React.FC = () => {
  const featuredItems = useMemo(() => {
    return menuData.filter(item => item.featured).slice(0, 6);
  }, []);

  return (
    <section id="menu-highlights" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-white relative">
      {/* Top decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-teal/15 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-teal mb-2 sm:mb-3 md:mb-4">
            Our Menu Highlights
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark-text font-body max-w-2xl mx-auto mb-2 sm:mb-3 md:mb-4 px-2">
            Authentic Plant-Based Thai & Japanese Cuisine
          </p>
          <p className="text-sm sm:text-base md:text-lg text-dark-text font-body max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 px-2">
            From traditional Thai curries to creative sushi rolls, every dish is crafted with
            fresh ingredients and authentic techniques.
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white sm:hover:bg-gradient-to-br sm:hover:from-neutral-cream sm:hover:to-white p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-500 border border-gray-100 sm:border-transparent sm:hover:border-secondary-orange sm:hover:border-opacity-30 sm:hover:shadow-2xl transform sm:hover:scale-105"
            >
              {item.image && (
                <div className="mb-2 sm:mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center min-h-[120px] sm:min-h-[192px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto max-h-[120px] sm:max-h-[192px] object-contain opacity-90 sm:group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              )}

              <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                <div className="flex-1 min-w-0 pr-1.5 sm:pr-2">
                  <h3 className="text-sm sm:text-lg md:text-xl font-heading font-semibold text-primary-teal sm:group-hover:text-secondary-orange transition-colors leading-tight">
                    {item.name}
                  </h3>
                  {item.chefsSpecial && (
                    <span className="inline-block mt-0.5 sm:mt-1 text-[10px] sm:text-xs font-bold text-secondary-orange bg-secondary-orange bg-opacity-10 px-1.5 sm:px-2 py-0.5 rounded">
                      Chef's Special
                    </span>
                  )}
                </div>
                <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
                  {item.spicy && (
                    <span className="text-red-500 text-xs sm:text-sm font-semibold" title="Spicy" aria-label="Spicy">Spicy</span>
                  )}
                </div>
              </div>
              <p className="text-dark-text font-body leading-relaxed text-[11px] sm:text-sm md:text-base line-clamp-3 sm:line-clamp-none mb-2 sm:mb-3">
                {item.description}
              </p>
              {item.orderLink && (
                <a
                  href={item.orderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto text-center text-[10px] sm:text-xs md:text-sm font-body font-semibold text-primary-teal hover:text-secondary-orange transition-colors mt-2 sm:mt-3 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2"
                >
                  Order Now →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <a
              href="https://order.toasttab.com/online/basil-vegan-thai"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center justify-center font-body font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 sm:transform sm:hover:scale-105 shadow-lg bg-secondary-orange text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary-orange focus:ring-offset-2"
            >
              Order Online
            </a>
            <a
              href="https://tables.toasttab.com/restaurants/a4a4b733-46d7-4ab4-875d-fbcedafc13ca/findTime"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center justify-center font-body font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 sm:transform sm:hover:scale-105 shadow-lg bg-primary-teal text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2"
            >
              Make a Reservation
            </a>
          </div>

          {/* Full Menu Link */}
          <div className="bg-gradient-to-br from-neutral-cream to-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-primary-teal/10 transform transition-all duration-300 hover:scale-105">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-teal mb-3 sm:mb-4">
              Explore Our Complete Menu
            </h4>
            <p className="text-base sm:text-lg text-dark-text font-body mb-4 sm:mb-6 leading-relaxed">
              Discover all our Thai entrees, sushi rolls, appetizers, and more
            </p>
            <a
              href="https://order.toasttab.com/online/basil-vegan-thai"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center font-body font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-xl transition-all duration-300 bg-primary-teal text-white hover:bg-opacity-90 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2 text-base sm:text-lg"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
