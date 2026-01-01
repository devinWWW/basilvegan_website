const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden min-h-[85vh] sm:min-h-screen flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero/basil-vegan-thai-restaurant-henderson-interior.webp"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="/Animated_Sushi_Image_with_Fast_Forwarding_Background.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="/images/hero/basil-vegan-thai-restaurant-henderson-interior.webp"
            alt="Restaurant interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-12 sm:py-16">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-[1.1] tracking-tight px-2">
            Basil Vegan Thai & Sushi
          </h1>
          <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-body font-light text-white/95 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Authentic Plant-Based Thai Cuisine & Sushi in Henderson
          </p>
        </div>

        <p className="text-lg sm:text-lg md:text-xl font-body text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Experience authentic vegan Thai flavors and creative plant-based sushi crafted with care in Green Valley, Henderson.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 items-center justify-center px-2">
          <a
            href="https://basilveganthai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[56px] sm:min-h-[56px] flex items-center justify-center bg-secondary-orange hover:bg-secondary-orange/90 text-white font-body font-semibold px-10 sm:px-10 md:px-12 py-4 sm:py-4 md:py-4.5 rounded-lg text-lg sm:text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-secondary-orange focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Make a Reservation
          </a>
          <a
            href="https://order.toasttab.com/online/basil-vegan-thai"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[56px] sm:min-h-[56px] flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white hover:bg-white hover:text-primary-teal font-body font-semibold px-10 sm:px-10 md:px-12 py-4 sm:py-4 md:py-4.5 rounded-lg text-lg sm:text-lg md:text-xl transition-all duration-300 hover:border-white hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white">
          <span className="text-xs sm:text-sm font-body font-medium mb-1 sm:mb-2 tracking-wide">Scroll</span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
