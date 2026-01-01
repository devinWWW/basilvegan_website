
const Locations: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-white relative">
      {/* Top decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-teal/15 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-teal mb-3 sm:mb-4">
            Visit Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-dark-text font-body max-w-2xl mx-auto px-2">
            Visit either of our Las Vegas locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
          {/* Basil Location */}
          <div className="bg-gradient-to-br from-neutral-cream to-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-primary-teal/10">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary-teal mb-3 sm:mb-4 md:mb-6">
              Basil Vegan Thai & Sushi
            </h3>
            <p className="text-xs sm:text-sm font-body font-semibold text-dark-text mb-3 sm:mb-4 uppercase tracking-wide text-opacity-70">
              Henderson Location
            </p>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div>
                <h4 className="font-body font-semibold text-dark-text mb-1.5 sm:mb-2 text-sm sm:text-base">Address</h4>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=500+E+Windmill+Ln+145+Las+Vegas+NV+89123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text hover:text-primary-teal transition-colors text-sm sm:text-base"
                >
                  500 E Windmill Ln #145<br />
                  Las Vegas, NV 89123
                </a>
              </div>

              <div>
                <h4 className="font-body font-semibold text-dark-text mb-1.5 sm:mb-2 text-sm sm:text-base">Phone</h4>
                <a href="tel:+17023573837" className="text-primary-teal hover:text-secondary-orange transition-colors font-semibold text-sm sm:text-base">
                  (702) 357-3837
                </a>
              </div>

              <div>
                <h4 className="font-body font-semibold text-dark-text mb-1.5 sm:mb-2 text-sm sm:text-base">Hours</h4>
                <div className="text-dark-text text-xs sm:text-sm space-y-1">
                  <p>Monday - Saturday: 11:30 AM - 9:30 PM</p>
                  <p>Sunday: 3:00 PM - 9:30 PM</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <a
                href="https://rewards.vegansushilv.com/book/basil"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center w-full bg-secondary-orange hover:bg-opacity-90 text-white font-body font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-center transition-all sm:transform sm:hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Make a Reservation
              </a>
              <a
                href="https://order.toasttab.com/online/basil-vegan-thai"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center w-full border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-center transition-all text-sm sm:text-base"
              >
                Order Online
              </a>
            </div>
          </div>

          {/* Daikon Location */}
          <div className="bg-gradient-to-br from-neutral-cream to-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-primary-teal/10">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary-teal mb-3 sm:mb-4 md:mb-6">
              Daikon Vegan Sushi & More
            </h3>
            <p className="text-xs sm:text-sm font-body font-semibold text-dark-text mb-3 sm:mb-4 uppercase tracking-wide text-opacity-70">
              Summerlin Location
            </p>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div>
                <h4 className="font-body font-semibold text-dark-text mb-1.5 sm:mb-2 text-sm sm:text-base">Address</h4>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=7210+W+Lake+Mead+Blvd+Ste+1+Las+Vegas+NV+89128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text hover:text-primary-teal transition-colors text-sm sm:text-base"
                >
                  7210 W Lake Mead Blvd, Ste 1<br />
                  Las Vegas, NV 89128
                </a>
              </div>

              <div>
                <h4 className="font-body font-semibold text-dark-text mb-1.5 sm:mb-2 text-sm sm:text-base">Phone</h4>
                <a href="tel:+17027493283" className="text-primary-teal hover:text-secondary-orange transition-colors font-semibold text-sm sm:text-base">
                  (702) 749-3283
                </a>
              </div>

              <div>
                <h4 className="font-body font-semibold text-dark-text mb-1.5 sm:mb-2 text-sm sm:text-base">Hours</h4>
                <div className="text-dark-text text-xs sm:text-sm space-y-1">
                  <p>Monday - Saturday: 11:00 AM - 9:00 PM</p>
                  <p>Sunday: 3:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <a
                href="https://rewards.vegansushilv.com/book/daikon"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center w-full bg-secondary-orange hover:bg-opacity-90 text-white font-body font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-center transition-all sm:transform sm:hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Make a Reservation
              </a>
              <a
                href="https://www.daikonvegansushi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center w-full border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-center transition-all text-sm sm:text-base"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary-teal/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.8761234567!2d-115.1175!3d36.0397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDAyJzIyLjkiTiAxMTXCsDA3JzAzLjAiVw!5e0!3m2!1sen!2sus!4v1234567890123"
            width="100%"
            height="300"
            className="sm:h-[400px] md:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;
