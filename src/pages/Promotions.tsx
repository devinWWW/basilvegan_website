import { Link } from 'react-router-dom';

const Promotions: React.FC = () => {
  const currentPromotions = [
    {
      id: 1,
      title: 'Free Tantanmen',
      subtitle: 'December Special • Basil Only',
      description: 'Spend $50 or more at Basil Vegan Thai and receive a FREE Tantanmen! Our rich, creamy vegan ramen is the perfect winter comfort food. Valid December 1 - January 1.',
      seasonal: true,
      cta: {
        text: 'Order Now',
        link: 'https://order.toasttab.com/online/basil-vegan-thai',
        external: true
      }
    },
    {
      id: 2,
      title: 'New Member Welcome',
      subtitle: 'Free Cocobanana Smoothie • Both Locations',
      description: 'Join our rewards program and get a FREE Cocobanana Smoothie with any $25 purchase! Made with fresh coconut and banana—no artificial ingredients. Valid at both Basil Vegan Thai and Daikon Vegan Sushi. Use code COCO25 at checkout.',
      seasonal: true,
      cta: {
        text: 'Join Rewards',
        link: 'https://www.toasttab.com/basil-vegan-thai/rewardsSignup',
        external: true
      }
    },
    {
      id: 3,
      title: 'Join Rewards Program',
      subtitle: 'Get Rewarded',
      description: 'Sign up for our rewards program and receive FREE Thai Iced Tea + Golden State Roll when you spend $75 or more. Earn points with every purchase and unlock exclusive benefits.',
      cta: {
        text: 'Join Now',
        link: 'https://www.toasttab.com/basil-vegan-thai/rewardsSignup',
        external: true
      }
    },
    {
      id: 4,
      title: 'Holiday Gift Cards',
      subtitle: 'Give the Gift of Great Food',
      description: 'Purchase a gift card and get up to $20 bonus value! Perfect for the holidays, birthdays, or any special occasion. Gift cards can be used at both Basil Vegan Thai and our sister restaurant, Daikon Vegan Sushi.',
      cta: {
        text: 'Buy Gift Card',
        link: 'https://order.toasttab.com/egiftcards/basil-vegan-thai',
        external: true
      }
    }
  ];

  return (
    <>
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-teal to-secondary-orange py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2">
            Promotions & Special Offers
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-opacity-95 px-2 mb-3 sm:mb-4 font-medium">
            Great Deals at Our Henderson Vegan Thai Restaurant
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white text-opacity-80 px-2">
            Discover special offers and promotions at Basil Vegan Thai & Sushi in Green Valley, Henderson
          </p>
        </div>
      </section>

      {/* Current Promotions */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-neutral-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-3 sm:mb-4">
              Current Promotions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-dark-text max-w-2xl mx-auto px-2">
              Take advantage of these special offers and promotions available at our Henderson location
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {currentPromotions.map((promo) => (
              <div
                key={promo.id}
                className={`bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 ${
                  promo.seasonal ? 'border-2 border-accent-gold' : ''
                }`}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-primary-teal mb-2 text-center">
                  {promo.title}
                </h3>
                {promo.subtitle && (
                  <p className="text-xs sm:text-sm text-secondary-orange font-semibold mb-3 sm:mb-4 text-center uppercase tracking-wide">
                    {promo.subtitle}
                  </p>
                )}
                <p className="text-sm sm:text-base text-dark-text leading-relaxed mb-4 sm:mb-5 md:mb-6 text-center">
                  {promo.description}
                </p>
                {promo.cta && (
                  <div className="text-center">
                    {promo.cta.external ? (
                      <a
                        href={promo.cta.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] inline-flex items-center justify-center bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all sm:transform sm:hover:scale-105 shadow-lg text-sm sm:text-base"
                      >
                        {promo.cta.text}
                      </a>
                    ) : (
                      <Link
                        to={promo.cta.link}
                        className="min-h-[44px] inline-flex items-center justify-center bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all sm:transform sm:hover:scale-105 shadow-lg text-sm sm:text-base"
                      >
                        {promo.cta.text}
                      </Link>
                    )}
                  </div>
                )}
                {promo.seasonal && (
                  <div className="mt-4 text-center">
                    <span className="bg-accent-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Seasonal
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Stay Updated */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto px-2">
          <div className="bg-primary-teal rounded-lg p-6 sm:p-7 md:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3 sm:mb-4">
              Stay Updated on New Promotions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white text-opacity-90 mb-6 sm:mb-8">
              Follow us on social media to be the first to know about new deals, special offers, and seasonal promotions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://www.instagram.com/basilveganthai/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center bg-white hover:bg-opacity-90 text-primary-teal font-body font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all sm:transform sm:hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Follow on Instagram
              </a>
              <a
                href="https://www.facebook.com/BasilVeganThai"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary-teal font-body font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all sm:transform sm:hover:scale-105 text-sm sm:text-base"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 bg-neutral-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-sm text-dark-text text-opacity-70">
            <p className="mb-2">
              <strong>Terms & Conditions:</strong> Promotions are subject to availability and may be modified or discontinued at any time without notice. 
              Some offers may not be combined with other promotions. Gift card bonus values apply to qualifying purchases. Please contact us at (702) 357-3837 for current promotion details.
            </p>
            <p>
              Visit us at <strong>500 E Windmill Ln #145, Las Vegas, NV 89123</strong> or call{' '}
              <a href="tel:+17023573837" className="text-primary-teal hover:text-secondary-orange underline">
                (702) 357-3837
              </a>{' '}
              for more information.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Promotions;

