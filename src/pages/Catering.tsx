const Catering: React.FC = () => {
  return (
    <>
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-teal to-secondary-orange py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2">
            Plant-Based Thai Catering in Henderson & Las Vegas
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-opacity-90 leading-relaxed px-2 mb-3 sm:mb-4 font-medium">
            Authentic Vegan Thai Catering Services
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white text-opacity-80 leading-relaxed px-2">
            Bring authentic vegan Thai cuisine to your next event in Henderson, Green Valley, or Las Vegas
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-4 sm:mb-6">
            Vegan Thai Catering for Henderson & Las Vegas Events
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark-text leading-relaxed">
            Whether it's a corporate gathering, wedding, private party, or special celebration in Henderson, Green Valley, or Las Vegas, we offer
            custom plant-based Thai catering packages that bring the authentic flavors of Thailand to your event.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-neutral-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-teal mb-4">
                Custom Menu Planning
              </h3>
              <p className="text-dark-text leading-relaxed">
                Work directly with our team to create a menu perfectly tailored to your event, preferences,
                and dietary needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-teal mb-4">
                Authentic Cuisine
              </h3>
              <p className="text-dark-text leading-relaxed">
                From traditional Thai curries to creative sushi rolls, all dishes are 100% plant-based
                and bursting with authentic flavors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-teal mb-4">
                Flexible Service Options
              </h3>
              <p className="text-dark-text leading-relaxed">
                Choose from buffet-style, individually plated meals, or family-style service to match
                your event's atmosphere.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-teal mb-4">
                All Dietary Needs
              </h3>
              <p className="text-dark-text leading-relaxed">
                Gluten-free, nut-free, and other dietary restrictions? We've got you covered with
                delicious options for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Menu Items */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-8 text-center">
            Popular Catering Selections
          </h2>
          <div className="bg-neutral-cream p-8 rounded-lg">
            <ul className="space-y-4 text-lg text-dark-text">
              <li className="flex items-start">
                <span className="text-secondary-orange text-2xl mr-3">•</span>
                <div>
                  <span className="font-semibold">Thai Curry Bar</span> - Green and Massaman curries with rice and toppings
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-orange text-2xl mr-3">•</span>
                <div>
                  <span className="font-semibold">Sushi Platter</span> - Assorted specialty rolls and nigiri
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-orange text-2xl mr-3">•</span>
                <div>
                  <span className="font-semibold">Appetizer Selection</span> - Spring rolls, satay, and dumplings
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-orange text-2xl mr-3">•</span>
                <div>
                  <span className="font-semibold">Noodle Bar</span> - Pad Thai, Drunken Noodles, and more
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-orange text-2xl mr-3">•</span>
                <div>
                  <span className="font-semibold">Full Thai Feast</span> - Complete multi-course experience
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary-teal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Contact us today to discuss your catering needs and receive a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17023573837"
              className="inline-block bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-10 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Call (702) 357-3837
            </a>
            <a
              href="mailto:basilveganthai01@gmail.com"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary-teal font-body font-bold px-10 py-4 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Catering;
