import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center bg-neutral-cream">
        <div className="text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-heading font-bold text-primary-teal mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-dark-text mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-dark-text mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
            Let us help you find your way back to delicious plant-based Thai cuisine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Return Home
            </Link>
            <a
              href="https://order.toasttab.com/online/basil-vegan-thai"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              View Menu
            </a>
            <Link
              to="/contact"
              className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-heading font-semibold text-primary-teal mb-3">
              Looking for something specific?
            </h3>
            <ul className="text-dark-text space-y-2">
              <li>
                <Link to="/about" className="text-primary-teal hover:text-secondary-orange underline">
                  About Chef Mindy & Our Story
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-teal hover:text-secondary-orange underline">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/catering" className="text-primary-teal hover:text-secondary-orange underline">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-teal hover:text-secondary-orange underline">
                  Our Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
