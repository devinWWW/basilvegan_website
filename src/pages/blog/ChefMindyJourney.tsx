import { Link } from 'react-router-dom';

const ChefMindyJourney: React.FC = () => {
  return (
    <>
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-teal to-secondary-orange py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2 leading-tight">
            Chef Mindy Lim's Bold Journey: From Vision to Vegan Culinary Excellence
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-opacity-90 px-2">
            The inspiring story behind Henderson's premier plant-based Thai restaurant
          </p>
          <p className="text-xs sm:text-sm text-white text-opacity-75 mt-3 sm:mt-4">
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
              In the heart of Henderson, Nevada, Chef Mindy Lim has created something extraordinary: 
              Basil Vegan Thai & Sushi, a restaurant that proves plant-based cuisine can be both 
              authentic and exceptional. But this culinary journey didn't begin in a kitchen—it started 
              with a dream that would change everything.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              The Transformative Dream
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              In 2014, Chef Mindy experienced a profound moment that would reshape her entire culinary 
              philosophy. In a dream, she found herself preparing fish that looked into her eyes and cried. 
              This powerful vision awakened something deep within her—a recognition that the food we choose 
              to eat matters, not just for our health, but for the compassion we show to all living beings.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              That moment marked the beginning of a six-year journey. Chef Mindy immediately became vegetarian 
              and dedicated herself to perfecting plant-based recipes that would honor traditional culinary 
              techniques while embracing a compassionate approach to food.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              Building a Culinary Legacy
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              With over 20 years of culinary expertise and experience managing three restaurants, Chef Mindy 
              brought a wealth of knowledge to her plant-based mission. In late 2020, she opened Daikon Vegan 
              Sushi & More in Las Vegas, quickly establishing it as a destination for innovative vegan sushi 
              and Japanese cuisine.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              The success of Daikon proved that plant-based dining could be extraordinary. The restaurant's 
              Yellow Magic Roll was recognized as one of PETA's Top 10 Vegan Sushi Rolls in the United States 
              in 2024, bringing national recognition to Chef Mindy's innovative approach to plant-based cuisine.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              But Chef Mindy's vision didn't stop there. Recognizing the unique opportunity to bring authentic 
              Thai flavors to the Henderson community, she expanded her culinary empire with Basil Vegan Thai 
              & Sushi, located at 500 E Windmill Ln in Green Valley.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              The "Peace on a Plate" Philosophy
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Both Daikon and Basil Vegan Thai share a mission: "Peace on a Plate." This philosophy represents 
              more than just a tagline—it's a commitment to creating food that is compassionate, sustainable, 
              and delicious. Every dish at Basil Vegan Thai is crafted with care, using fresh ingredients and 
              traditional Thai techniques adapted for a plant-based future.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              "We believe that vegan food can be just as delicious, satisfying, and authentic as traditional 
              cuisine," Chef Mindy explains. "Our goal is to prove that you don't have to compromise on flavor 
              to make an ethical choice."
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              Bringing Authentic Thai Flavors to Henderson
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              At Basil Vegan Thai, Chef Mindy brings her expertise to Thai cuisine, creating dishes that honor 
              traditional flavors while being entirely plant-based. From the aromatic Tom Yum Soup to rich 
              Green Curry and creative sushi rolls, every dish tells a story of innovation and respect for 
              culinary tradition.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              The restaurant has quickly become a favorite among Henderson residents, particularly in Green Valley, 
              where it serves as a gathering place for vegans, vegetarians, and anyone seeking high-quality, 
              compassionate dining options.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              A Vision for the Future
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Chef Mindy's journey from that transformative dream to running two successful plant-based restaurants 
              demonstrates the power of vision, dedication, and culinary excellence. Her commitment to "Peace on a 
              Plate" has created not just restaurants, but communities centered around compassionate dining.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              As Basil Vegan Thai continues to grow and serve the Henderson community, Chef Mindy remains committed 
              to innovation, authenticity, and the belief that plant-based cuisine can change the world—one plate 
              at a time.
            </p>
          </section>

          {/* Related Links */}
          <div className="bg-neutral-cream p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-heading font-bold text-primary-teal mb-4">
              Learn More About Chef Mindy's Story
            </h3>
            <p className="text-dark-text mb-4">
              Read the full interview with Chef Mindy Lim on the{' '}
              <a 
                href="https://www.daikonvegansushi.com/blog/mindy-lim-bold-journey-interview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-teal hover:text-secondary-orange underline font-semibold"
              >
                Daikon Vegan Sushi blog
              </a>
              , where she shares more about her journey, philosophy, and the inspiration behind both restaurants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                to="/about"
                className="bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-6 py-3 rounded-lg text-center transition-all transform hover:scale-105"
              >
                Learn More About Basil Vegan Thai
              </Link>
              <a
                href="https://order.toasttab.com/online/basil-vegan-thai"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-semibold px-6 py-3 rounded-lg text-center transition-all"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
    </>
  );
};

export default ChefMindyJourney;

