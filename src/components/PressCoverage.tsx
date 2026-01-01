const PressCoverage: React.FC = () => {
  const logos = [
    { src: '/images/logos/cropped-BoldJourney-logo.png', alt: 'Bold Journey' },
    { src: '/images/logos/las-vegas-journal-logo.png', alt: 'Las Vegas Review-Journal' },
    { src: '/images/logos/peta-logo.svg', alt: 'PETA' },
    { src: '/images/logos/doordash-logo.png', alt: 'DoorDash' },
    { src: '/images/logos/google-logo.png', alt: 'Google' },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-primary-teal relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-teal via-primary-teal to-primary-teal/95 opacity-100"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-12 sm:mb-16 md:mb-20 text-center tracking-tight">
          As Seen In
        </h2>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-32 sm:h-40 md:h-48 lg:h-56 px-4 transition-transform duration-300 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressCoverage;

