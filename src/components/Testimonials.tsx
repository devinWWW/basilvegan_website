import { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  author?: string;
  context?: string;
}

const Testimonials: React.FC<{ testimonials: Testimonial[]; autoRotate?: boolean }> = ({ 
  testimonials, 
  autoRotate = false 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoRotate || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoRotate, testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="flex items-start mb-4 sm:mb-6">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-secondary-orange opacity-60 flex-shrink-0 mr-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <blockquote className="text-base sm:text-lg md:text-xl text-dark-text font-body leading-relaxed mb-6 sm:mb-8 font-medium break-words">
          "{currentTestimonial.quote}"
        </blockquote>
        {currentTestimonial.author && (
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-teal to-primary-teal/80 rounded-full flex items-center justify-center text-white font-bold mr-3 sm:mr-4 flex-shrink-0 shadow-md">
              {currentTestimonial.author.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-dark-text text-base sm:text-lg break-words">{currentTestimonial.author}</p>
              {currentTestimonial.context && (
                <p className="text-sm sm:text-base text-dark-text text-opacity-70 break-words">{currentTestimonial.context}</p>
              )}
            </div>
          </div>
        )}
      </div>

      {testimonials.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-secondary-orange focus:ring-offset-2 ${
                index === currentIndex
                  ? 'bg-secondary-orange scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              role="tab"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={index === currentIndex}
              tabIndex={index === currentIndex ? 0 : -1}
            >
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;

