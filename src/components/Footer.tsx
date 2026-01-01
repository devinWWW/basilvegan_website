import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-teal text-neutral-cream py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Basil Vegan Thai & Sushi
            </h3>
            <p className="text-base text-neutral-cream/90 leading-relaxed mb-4">
              Authentic plant-based Thai cuisine and creative vegan sushi in Green Valley, Henderson.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/basilveganthai/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-cream hover:text-secondary-orange transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/BasilVeganThai" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-cream hover:text-secondary-orange transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://www.tiktok.com/@basilveganthai" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-neutral-cream hover:text-secondary-orange transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Explore</h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-base text-neutral-cream/90 hover:text-secondary-orange transition-colors">Home</Link>
              <Link to="/about" className="block text-base text-neutral-cream/90 hover:text-secondary-orange transition-colors">About Us</Link>
              <a href="https://order.toasttab.com/online/basil-vegan-thai" target="_blank" rel="noopener noreferrer" className="block text-base text-neutral-cream/90 hover:text-secondary-orange transition-colors">Menu</a>
              <Link to="/contact" className="block text-base text-neutral-cream/90 hover:text-secondary-orange transition-colors">Contact</Link>
              <Link to="/faq" className="block text-base text-neutral-cream/90 hover:text-secondary-orange transition-colors">FAQ</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-base text-neutral-cream/90">
              <p><a href="tel:+17023573837" className="hover:text-secondary-orange transition-colors">(702) 357-3837</a></p>
              <p><a href="mailto:basilveganthai01@gmail.com" className="hover:text-secondary-orange transition-colors">basilveganthai01@gmail.com</a></p>
              <p>500 E Windmill Ln #145<br/>Las Vegas, NV 89123</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Join Our Newsletter</h3>
            <p className="text-base text-neutral-cream/90 leading-relaxed mb-4">
              Get updates on new dishes, special offers, and events.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-l-md text-dark-text focus:outline-none focus:ring-2 focus:ring-secondary-orange"
                />
                <button
                  type="submit"
                  className="bg-secondary-orange text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Awards & Trust Badges */}
        <div className="mt-12 border-t border-white/20 pt-8 pb-6">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm">
            <a
              href="https://www.restaurantji.com/nv/las-vegas/basil-vegan-thai-sushi-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-cream/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-accent-gold">★</span> Restaurantji Recommended
            </a>
            <a
              href="https://www.yelp.com/biz/basil-vegan-thai-and-sushi-las-vegas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-cream/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-accent-gold">★</span> 4.8★ Yelp
            </a>
            <a
              href="https://www.google.com/maps/search/Basil+Vegan+Thai+500+E+Windmill+Ln+Las+Vegas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-cream/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-accent-gold">★</span> 4.9★ Google
            </a>
            <a
              href="https://www.daikonvegansushi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-cream/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-secondary-orange">→</span> Sister: Daikon Vegan Sushi
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-cream/70">
          <p>&copy; {currentYear} Basil Vegan Thai & Sushi. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="hover:text-secondary-orange transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-secondary-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
