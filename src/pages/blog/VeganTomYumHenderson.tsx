import { Link } from 'react-router-dom';

const VeganTomYumHenderson: React.FC = () => {
  return (
    <>
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-teal to-secondary-orange py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2 leading-tight">
            The Art of Vegan Tom Yum: Chef Mindy's Authentic Henderson Recipe
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-opacity-90 px-2">
            Discover how we create Henderson's favorite plant-based Tom Yum soup
          </p>
          <p className="text-sm text-white text-opacity-75 mt-4">
            Published: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto prose prose-sm sm:prose-base md:prose-lg">
          {/* Back to Blog Link */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-teal hover:text-secondary-orange font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
          <div className="mb-8">
            <p className="text-xl text-dark-text leading-relaxed font-body">
              Tom Yum soup is one of Thailand's most beloved dishes—a perfect balance of spicy, sour, 
              and aromatic flavors that awaken the senses. At Basil Vegan Thai in Henderson, we've 
              perfected a 100% plant-based version that captures all the authentic flavors of this 
              traditional soup while honoring our commitment to compassionate dining.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              What Makes Tom Yum Special?
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Tom Yum (ต้มยำ) translates to "boiled mixed" and is characterized by its distinctive 
              combination of hot and sour flavors. The soup's complexity comes from a carefully 
              balanced blend of aromatic herbs and spices that create layers of flavor in every spoonful.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              At Basil Vegan Thai, our Tom Yum soup has become a Henderson favorite, drawing customers 
              from Green Valley, East Las Vegas, and beyond who are seeking authentic Thai flavors in 
              a completely plant-based format.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              The Key Ingredients
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Our vegan Tom Yum soup features the essential herbs and spices that make this dish 
              authentically Thai:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-dark-text mb-4 ml-4">
              <li><strong>Lemongrass</strong> - Provides the citrusy, fresh base note</li>
              <li><strong>Galangal</strong> - Adds a peppery, ginger-like warmth</li>
              <li><strong>Kaffir Lime Leaves</strong> - Contributes a distinctive citrus aroma</li>
              <li><strong>Thai Chilies</strong> - Delivers the signature heat</li>
              <li><strong>Lime Juice</strong> - Provides the essential sour component</li>
              <li><strong>Mushrooms</strong> - Adds umami depth and texture</li>
            </ul>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              All of these ingredients are naturally plant-based, making it easier to create an authentic 
              vegan version than many might expect. The challenge isn't in replacing animal products—it's 
              in balancing these complex flavors perfectly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              Chef Mindy's Approach
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              With over 20 years of culinary expertise, Chef Mindy Lim brings traditional Thai techniques 
              to every bowl of Tom Yum soup. Her approach respects the authentic preparation methods while 
              ensuring every ingredient is 100% plant-based.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              "The key to great Tom Yum is timing," Chef Mindy explains. "Each herb needs to be added 
              at the right moment to release its essential oils and flavors. We simmer our broth slowly, 
              allowing the lemongrass, galangal, and lime leaves to infuse the liquid with their aromatic 
              qualities."
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              Why Henderson Loves Our Tom Yum
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Our Tom Yum soup has become one of the most popular dishes at Basil Vegan Thai, particularly 
              among Henderson and Green Valley residents. Here's why:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-dark-text mb-4 ml-4">
              <li><strong>100% Plant-Based</strong> - No compromises, completely vegan</li>
              <li><strong>Gluten-Free</strong> - Safe for those with gluten sensitivities</li>
              <li><strong>Authentic Flavors</strong> - True to traditional Thai cuisine</li>
              <li><strong>Fresh Ingredients</strong> - Made daily with high-quality produce</li>
              <li><strong>Comforting & Healthy</strong> - Warming soup that's also nutritious</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              Perfect for Any Occasion
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Whether you're seeking comfort on a cool evening, looking for a healthy lunch option, or 
              wanting to explore authentic Thai flavors, our Tom Yum soup is the perfect choice. It's 
              available for dine-in, takeout, and delivery throughout Henderson and Las Vegas.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Many of our customers from Green Valley and surrounding areas make our Tom Yum soup a regular 
              part of their dining routine, appreciating both its authentic flavors and its plant-based 
              nature.
            </p>
          </section>

          {/* CTA Section */}
          <div className="bg-neutral-cream p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-heading font-bold text-primary-teal mb-4">
              Try Our Authentic Vegan Tom Yum Soup
            </h3>
            <p className="text-dark-text mb-6">
              Visit Basil Vegan Thai at 500 E Windmill Ln #145 in Henderson to experience our award-winning 
              vegan Tom Yum soup. We're open Monday-Saturday 11:30 AM - 9:30 PM and Sunday 3:00 PM - 9:30 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://order.toasttab.com/online/basil-vegan-thai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-6 py-3 rounded-lg text-center transition-all transform hover:scale-105"
              >
                Order Online
              </a>
              <Link
                to="/contact"
                className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-semibold px-6 py-3 rounded-lg text-center transition-all"
              >
                Visit Our Location
              </Link>
              <Link
                to="/menu"
                className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-semibold px-6 py-3 rounded-lg text-center transition-all"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
    </>
  );
};

export default VeganTomYumHenderson;

