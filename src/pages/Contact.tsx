import Testimonials from '../components/Testimonials';

const Contact: React.FC = () => {
  // Testimonials addressing service/speed concerns for large groups
  const serviceTestimonials = [
    {
      quote: "Busy Friday night but staff was attentive, friendly, and fast. Food was wonderful!",
      author: "Happy Customer",
      context: "Yelp Review"
    }
  ];

  return (
    <>
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-teal to-secondary-orange py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2">
            Visit Basil Vegan Thai on Windmill Lane in Henderson
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-opacity-90 px-2 mb-3 sm:mb-4 font-medium">
            Authentic Vegan Thai Restaurant Serving Green Valley & Las Vegas
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white text-opacity-80 px-2">
            Visit either of our Las Vegas locations or reach out for reservations, takeout, or catering inquiries
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-neutral-cream">
        <div className="max-w-7xl mx-auto">
          {/* Basil Vegan Thai Location */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Map */}
                <div className="h-96 md:h-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.8761234567!2d-115.1175!3d36.0397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDAyJzIyLjkiTiAxMTXCsDA3JzAzLjAiVw!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                  />
                </div>
                
                {/* Contact Details */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
                      Basil Vegan Thai & Sushi
                    </h2>
                    <h3 className="text-xl font-heading font-semibold text-primary-teal mb-4">
                      Green Valley Location - Henderson, NV
                    </h3>
                    <div className="space-y-4 text-dark-text">
                      <div>
                        <p className="font-semibold text-primary-teal mb-1">Address</p>
                        <div>
                          <p>500 E Windmill Ln #145</p>
                          <p>Las Vegas, NV 89123</p>
                          <p className="text-sm text-primary-teal font-semibold mt-1">Serving Green Valley & Henderson</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-teal mb-1">Phone</p>
                        <a href="tel:+17023573837" className="text-primary-teal hover:text-secondary-orange font-semibold">
                          (702) 357-3837
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-teal mb-1">Email</p>
                        <a href="mailto:basilveganthai01@gmail.com" className="text-primary-teal hover:text-secondary-orange">
                          basilveganthai01@gmail.com
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-teal mb-1">Hours</p>
                        <div>
                          <p>Mon-Sat: 11:30 AM - 9:30 PM</p>
                          <p>Sunday: 3:00 PM - 9:30 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=500+E+Windmill+Ln+145+Las+Vegas+NV+89123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-6 py-3 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
                    >
                      Get Directions
                    </a>
                    <a
                      href="https://www.basilveganthai.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-semibold px-6 py-3 rounded-lg text-center transition-all"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daikon Vegan Sushi Location */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Map */}
                <div className="h-96 md:h-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.123456789!2d-115.2345!3d36.1987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYsMTEsNDMuOCJOIDExNSwxNCwwLjQiVw!5e0!3m2!1sen!2sus!4v1234567890124"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                  />
                </div>
                
                {/* Contact Details */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
                      Daikon Vegan Sushi & More
                    </h2>
                    <h3 className="text-xl font-heading font-semibold text-primary-teal mb-4">
                      West Las Vegas Location
                    </h3>
                    <div className="space-y-4 text-dark-text">
                      <div>
                        <p className="font-semibold text-primary-teal mb-1">Address</p>
                        <div>
                          <p>7210 W Lake Mead Blvd, Ste 1</p>
                          <p>Las Vegas, NV 89128</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-teal mb-1">Phone</p>
                        <a href="tel:+17027493283" className="text-primary-teal hover:text-secondary-orange font-semibold">
                          (702) 749-3283
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-teal mb-1">Email</p>
                        <a href="mailto:daikonvegan01@gmail.com" className="text-primary-teal hover:text-secondary-orange">
                          daikonvegan01@gmail.com
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-teal mb-1">Hours</p>
                        <div>
                          <p>Mon-Sat: 11:00 AM - 9:00 PM</p>
                          <p>Sunday: 3:00 PM - 9:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=7210+W+Lake+Mead+Blvd+Ste+1+Las+Vegas+NV+89128"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-6 py-3 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
                    >
                      Get Directions
                    </a>
                    <a
                      href="https://www.daikonvegansushi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-semibold px-6 py-3 rounded-lg text-center transition-all"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-6 sm:mb-8 text-center">
            What Our Customers Say
          </h2>
          <Testimonials testimonials={serviceTestimonials} />
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-primary-teal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Have Questions?
          </h2>
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-white text-opacity-95 mb-6">
            Visit Our Vegan Thai Restaurant in Henderson
          </h3>
          <p className="text-xl text-white text-opacity-90 mb-6">
            Feel free to call or email us. We're here to help!
          </p>
          <p className="text-lg text-white text-opacity-80 mb-8">
            Learn more about{' '}
            <a href="/about" className="underline hover:text-secondary-orange">
              Chef Mindy's story
            </a>
            , explore our{' '}
            <a href="https://www.daikonvegansushi.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary-orange">
              award-winning vegan sushi
            </a>
            , or discover our{' '}
            <a href="/menu" className="underline hover:text-secondary-orange">
              plant-based menu options
            </a>
            .
          </p>
          <p className="text-lg text-white text-opacity-90 font-semibold">
            We look forward to serving you soon at our Henderson location or our Las Vegas location!
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
