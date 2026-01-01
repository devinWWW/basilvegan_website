import { menuData } from '../data/menuData';
import type { MenuItem } from '../data/menuData';

const FeaturedDishes: React.FC = () => {
  // Get featured items from menu data, prioritizing Thai specialties
  // Select: Tom Yum Soup (Thai soup), Golden Knights Roll (sushi), Green Curry (Thai curry)
  const selectedItems: MenuItem[] = [
    menuData.find(item => item.id === 11), // Tom Yum Soup
    menuData.find(item => item.id === 1),  // Golden Knights Roll
    menuData.find(item => item.id === 10), // Green Curry
  ].filter((item): item is MenuItem => item !== undefined); // Remove any undefined items
  
  return (
    <section 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-primary-teal relative overflow-hidden"
    >
      {/* Top decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-orange rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
            Our Signature Dishes
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-body max-w-3xl mx-auto px-2 leading-relaxed">
            Experience authentic Thai flavors crafted entirely from plants
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
          {selectedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex flex-col"
            >
              {/* Image Section */}
              {item.image && (
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
                  <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              {/* Content Section */}
              <div className="flex-1 flex flex-col text-center">
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                  {item.name}
                </h3>
                <p className="text-white/90 font-body text-base sm:text-lg leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                {item.orderLink && (
                  <div className="mt-auto">
                    <a
                      href={item.orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-secondary-orange hover:bg-opacity-90 text-white font-body font-semibold px-8 py-3 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-teal"
                    >
                      Order Now
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
