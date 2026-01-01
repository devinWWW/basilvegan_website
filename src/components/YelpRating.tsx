
const YelpRating: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        {/* Yelp Rating */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-2xl sm:text-3xl font-bold text-dark-text" aria-label="4.9 out of 5 stars">4.9</span>
          </div>
          <p className="text-xs sm:text-sm text-dark-text text-opacity-70 mb-1.5 sm:mb-2">191 Yelp Reviews</p>
          <a
            href="https://wanderlog.com/place/details/13765648/basil-vegan-thai--sushi"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center text-primary-teal hover:text-secondary-orange font-semibold text-xs sm:text-sm transition-colors"
          >
            Read on Yelp →
          </a>
        </div>
        
        <div className="h-12 sm:h-16 w-px bg-gray-300 hidden sm:block"></div>
        
        {/* Google Rating */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-2xl sm:text-3xl font-bold text-dark-text" aria-label="4.9 out of 5 stars">4.9</span>
          </div>
          <p className="text-xs sm:text-sm text-dark-text text-opacity-70 mb-1.5 sm:mb-2">Google Reviews</p>
          <a
            href="https://www.google.com/maps/place/Basil+Vegan+Thai+%26+Sushi/@36.0397,-115.1175,15z/data=!4m6!3m5!1s0x0:0x0!8m2!3d36.0397!4d-115.1175!16s%2Fg%2F11c0vx8x9q?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center text-primary-teal hover:text-secondary-orange font-semibold text-xs sm:text-sm transition-colors"
          >
            Read on Google →
          </a>
        </div>
      </div>
    </div>
  );
};

export default YelpRating;

