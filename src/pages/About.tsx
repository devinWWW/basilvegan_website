import { Link } from 'react-router-dom';
import VideoSection from '../components/VideoSection';

const About: React.FC = () => {
  return (
    <>
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-teal to-secondary-orange py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2">
            About Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-opacity-90 leading-relaxed px-2">
            The story behind Henderson's premier plant-based Thai restaurant
          </p>
        </div>
      </section>

      {/* Chef's Story */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-neutral-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/about/chef-mindy-lim-yellow-magic-roll-peta-award.webp"
                alt="Chef Mindy Lim"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-6">
                Meet Chef Mindy Lim
              </h2>
              <div className="space-y-4 text-lg text-dark-text leading-relaxed">
                <p>
                  Chef Mindy Lim is the visionary behind both Basil Vegan Thai & Sushi and Daikon Vegan Sushi & More, 
                  bringing over 20 years of culinary expertise to the Las Vegas vegan dining scene. Her journey into 
                  plant-based cooking began with a transformative dream in 2014, where she saw herself preparing fish 
                  that looked into her eyes and cried.
                </p>
                <p>
                  This profound moment led her to become vegetarian immediately and dedicate six years to perfecting 
                  plant-based recipes before opening Daikon Vegan Sushi in late 2020. Building on that success, Chef 
                  Mindy expanded her culinary vision with Basil Vegan Thai & Sushi in Henderson, bringing authentic 
                  Thai flavors to the Green Valley community.
                </p>
                <p className="font-semibold text-primary-teal">
                  At Basil Vegan Thai, we use only the freshest, highest-quality ingredients. Every dish is prepared 
                  daily with care, ensuring food safety and exceptional taste. Our commitment to freshness means you'll 
                  always enjoy meals made with premium, carefully selected plant-based ingredients.
                </p>
                <p>
                  With experience managing three restaurants and a deep commitment to compassionate cuisine, Chef Mindy 
                  has proven that plant-based dining can be extraordinary without compromising on flavor or authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-8 text-center">
            Our Journey
          </h2>
          <div className="space-y-6 text-lg text-dark-text leading-relaxed">
            <p>
              After years of perfecting traditional Thai and Japanese recipes and adapting them for plant-based diners, 
              Chef Mindy opened Daikon Vegan Sushi in late 2020, quickly establishing it as a destination for innovative 
              vegan sushi. The restaurant's Yellow Magic Roll was recognized as one of PETA's Top 10 Vegan Sushi Rolls 
              in the United States in 2024, bringing national recognition to Chef Mindy's innovative approach.
            </p>
            <p>
              Recognizing the opportunity to bring authentic Thai cuisine to Henderson, Chef Mindy expanded her culinary 
              empire with Basil Vegan Thai & Sushi. Located at 500 E Windmill Ln in Green Valley, Basil serves the Henderson 
              community with the same commitment to quality, authenticity, and compassion that defines Daikon.
            </p>
            <p>
              Both restaurants share the "Peace on a Plate" mission—a philosophy that represents more than just a tagline. 
              It's a commitment to creating food that is compassionate, sustainable, and delicious, proving that ethical 
              dining choices don't require sacrificing flavor or authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 bg-primary-teal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-4 text-center">
                PETA 2024 Top 10 Vegan Sushi Roll
              </h3>
              <p className="text-white text-opacity-90 text-center leading-relaxed">
                The Yellow Magic Roll from our sister restaurant, Daikon Vegan Sushi, was recognized as one of PETA's 
                Top 10 Vegan Sushi Rolls in the United States in 2024, bringing national recognition to Chef Mindy's 
                innovative plant-based creations.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-4 text-center">
                Media Features
              </h3>
              <ul className="text-white text-opacity-90 space-y-2 text-center">
                <li>Vegas Eater - Featured coverage</li>
                <li>96.3 KKLZ Radio - Radio feature</li>
                <li>HappyCow - Listed and reviewed</li>
                <li>Find Me Gluten Free - Listed for gluten-free options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-6">
            Peace on a Plate
          </h2>
          <p className="text-xl text-dark-text leading-relaxed mb-8">
            Our philosophy is simple: compassionate, 100% plant-based cuisine that proves vegan dining can be 
            extraordinary without compromising on flavor or authenticity. Every dish is crafted with care, using 
            fresh ingredients and traditional techniques adapted for a sustainable future.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-neutral-cream p-6 rounded-lg">
              <h3 className="text-xl font-heading font-bold text-primary-teal mb-2">100% Plant-Based</h3>
              <p className="text-dark-text">Completely plant-based, always. No compromises, no exceptions.</p>
            </div>
            <div className="bg-neutral-cream p-6 rounded-lg">
              <h3 className="text-xl font-heading font-bold text-primary-teal mb-2">Authentic</h3>
              <p className="text-dark-text">Traditional Thai recipes & techniques, adapted for compassionate dining.</p>
            </div>
            <div className="bg-neutral-cream p-6 rounded-lg">
              <h3 className="text-xl font-heading font-bold text-primary-teal mb-2">Compassionate</h3>
              <p className="text-dark-text">Food that's good for you, the planet, and all living beings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sister Restaurant */}
      <section className="py-16 px-4 bg-neutral-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-6 text-center">
            Two Locations, One Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-teal mb-4">
                Basil Vegan Thai & Sushi
              </h3>
              <p className="text-dark-text mb-4">
                Located in Henderson's Green Valley, Basil focuses on authentic Thai cuisine alongside creative 
                plant-based sushi rolls. We're proud to serve Henderson, East Las Vegas, and surrounding areas 
                with 100% plant-based Thai dishes.
              </p>
              <div className="space-y-2 text-dark-text">
                <p><strong>Location:</strong> 500 E Windmill Ln #145, Las Vegas, NV 89123</p>
                <p><strong>Phone:</strong> <a href="tel:+17023573837" className="text-primary-teal hover:text-secondary-orange">(702) 357-3837</a></p>
                <p><strong>Hours:</strong> Mon-Sat: 11:30 AM - 9:30 PM | Sun: 3:00 PM - 9:30 PM</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-teal mb-4">
                Daikon Vegan Sushi & More
              </h3>
              <p className="text-dark-text mb-4">
                Our sister restaurant in Las Vegas focuses on innovative vegan sushi and Japanese cuisine. 
                Home to the award-winning Yellow Magic Roll, Daikon serves West Las Vegas, Summerlin, and 
                surrounding areas.
              </p>
              <div className="space-y-2 text-dark-text">
                <p><strong>Location:</strong> 7210 W Lake Mead Blvd, Ste 1, Las Vegas, NV 89128</p>
                <p><strong>Phone:</strong> <a href="tel:+17027493283" className="text-primary-teal hover:text-secondary-orange">(702) 749-3283</a></p>
                <p><strong>Hours:</strong> Mon-Sat: 11:00 AM - 9:00 PM | Sun: 3:00 PM - 9:00 PM</p>
              </div>
              <a
                href="https://www.daikonvegansushi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary-teal hover:text-secondary-orange font-semibold underline"
              >
                Visit Daikon Website →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary-teal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Experience Authentic Plant-Based Thai Cuisine
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Visit us in Henderson or learn more about our story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://rewards.vegansushilv.com/book/basil"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Make a Reservation
            </a>
            <a
              href="https://order.toasttab.com/online/basil-vegan-thai"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-teal font-body font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              Order Online
            </a>
            <Link
              to="/blog/chef-mindy-journey"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-teal font-body font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              Read Chef Mindy's Story
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />
    </div>
    </>
  );
};

export default About;
