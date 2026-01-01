import { useState, useEffect } from 'react';

const ReviewsSection: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const allReviews = [
    {
      quote: "As a meat eater, this place definitely hits the spot. Not only are the dishes beautifully plated, it taste amazing.",
      author: "Satisfied Customer",
      context: "Yelp Review",
      rating: 5
    },
    {
      quote: "This is the best vegan sushi I have ever had! Been vegan for five years and love sushi, this definitely hits the spot.",
      author: "Long-time Vegan",
      context: "Yelp Review",
      rating: 5
    },
    {
      quote: "Total game-changer for Thai and sushi lovers. So delicious, it might just convince you to go vegan. The food is amazing and perfectly flavored.",
      author: "Happy Customer",
      context: "Google Review",
      rating: 5
    },
    {
      quote: "Food came out very fast and the staff are lovely. Everything was amazing and perfectly flavored. Will definitely be back!",
      author: "First-time Visitor",
      context: "Yelp Review",
      rating: 5
    },
    {
      quote: "My wife and I love the Daikon location on the north side of town. We were so happy to hear something was closer to Henderson area. The menu features vegan sushi of all kinds and it's all incredible!",
      author: "Regular Customer",
      context: "Google Review",
      rating: 5
    },
    {
      quote: "Busy Friday night but staff was attentive, friendly, and fast. Food was wonderful!",
      author: "Weekend Diner",
      context: "Yelp Review",
      rating: 5
    },
    {
      quote: "Amazing and perfectly flavored dishes. The staff are lovely and the atmosphere is great. This is now our go-to spot for Thai food!",
      author: "Local Resident",
      context: "Google Review",
      rating: 5
    },
    {
      quote: "Best vegan Thai food in Henderson! The curries are rich and flavorful, and the sushi rolls are creative and delicious. Highly recommend!",
      author: "Food Enthusiast",
      context: "Yelp Review",
      rating: 5
    }
  ];

  // Auto-advance reviews
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % allReviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, allReviews.length]);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-white relative">
      {/* Top decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-teal/15 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-dark-text font-body max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Don't just take our word for it—see what our guests are saying about their experience at Basil Vegan Thai & Sushi
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://wanderlog.com/place/details/13765648/basil-vegan-thai--sushi"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-2 text-primary-teal hover:text-secondary-orange font-semibold transition-colors text-sm sm:text-base px-2 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2"
              aria-label="Read more Yelp reviews (opens in new tab)"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Read More Yelp Reviews
            </a>
            <span className="hidden sm:inline text-gray-300" aria-hidden="true">|</span>
            <a
              href="https://www.google.com/maps/place/Basil+Vegan+Thai+%26+Sushi/@36.0397,-115.1175,15z/data=!4m6!3m5!1s0x0:0x0!8m2!3d36.0397!4d-115.1175!16s%2Fg%2F11c0vx8x9q?entry=ttu&g_ep=EgoyMDI1MDEwNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-2 text-primary-teal hover:text-secondary-orange font-semibold transition-colors text-sm sm:text-base px-2 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2"
              aria-label="Read Google reviews (opens in new tab)"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Read Google Reviews
            </a>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {allReviews.map((review, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 sm:p-10 md:p-12">
                    {/* Star Rating */}
                    <div className="flex justify-center gap-1 mb-6" aria-label={`${review.rating} out of 5 stars`}>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${
                            i < (review.rating || 5) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg sm:text-xl md:text-2xl text-dark-text font-body leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                      <span className="text-secondary-orange text-4xl sm:text-5xl leading-none mr-2">"</span>
                      {review.quote}
                      <span className="text-secondary-orange text-4xl sm:text-5xl leading-none ml-2">"</span>
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center justify-center pt-6 border-t border-gray-100">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-teal to-secondary-orange rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0 shadow-lg">
                        {review.author.charAt(0).toUpperCase()}
                      </div>
                      <div className="ml-4 text-center sm:text-left">
                        <p className="font-semibold text-dark-text text-base sm:text-lg">{review.author}</p>
                        {review.context && (
                          <p className="text-sm text-gray-500 mt-1">{review.context}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2" role="tablist" aria-label="Testimonials carousel">
            {allReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? 'w-8 bg-primary-teal'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
                aria-selected={index === currentReview}
              />
            ))}
          </div>
        </div>

        {/* Review Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16">
          <div className="text-center bg-gradient-to-br from-neutral-cream to-white p-6 sm:p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-primary-teal/10">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-teal mb-3" aria-label="4.9 out of 5 stars">4.9</div>
            <div className="flex justify-center gap-1 sm:gap-1.5 mb-3" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <div className="text-sm sm:text-base text-dark-text font-semibold mb-1">Yelp Rating</div>
            <div className="text-xs sm:text-sm text-dark-text text-opacity-70">191 Reviews</div>
          </div>
          <div className="text-center bg-gradient-to-br from-neutral-cream to-white p-6 sm:p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-primary-teal/10">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-teal mb-3" aria-label="4.9 out of 5 stars">4.9</div>
            <div className="flex justify-center gap-1 sm:gap-1.5 mb-3" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <div className="text-sm sm:text-base text-dark-text font-semibold mb-1">Google Rating</div>
            <div className="text-xs sm:text-sm text-dark-text text-opacity-70">Multiple 5-Star Reviews</div>
          </div>
          <div className="text-center bg-gradient-to-br from-neutral-cream to-white p-6 sm:p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-primary-teal/10">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-teal mb-3">100%</div>
            <div className="text-sm sm:text-base text-dark-text font-semibold mb-1">Plant-Based</div>
            <div className="text-xs sm:text-sm text-dark-text text-opacity-70">Every Single Dish</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

