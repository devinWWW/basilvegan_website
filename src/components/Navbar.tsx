import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const prevPathnameRef = useRef(location.pathname);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  const navLinks = useMemo(() => [
    { name: 'About', path: '/about' },
    { name: 'Menu', path: 'https://order.toasttab.com/online/basil-vegan-thai', external: true },
    { name: 'Reservation', path: 'https://basilveganthai.com', external: true },
    { name: 'Gift Card', path: 'https://order.toasttab.com/egiftcards/basil-vegan-thai', external: true },
  ], []);

  const contactDropdownItems = useMemo(() => [
    { name: 'Promotions', path: '/promotions' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
  ], []);

  const shouldBeWhite = useMemo(() => !isHomePage || isScrolled, [isHomePage, isScrolled]);

  // Close mobile menu when route changes
  // This is necessary to close menus when navigating via browser back/forward or programmatic navigation
  useEffect(() => {
    const pathname = location.pathname;
    if (prevPathnameRef.current !== pathname) {
      // Batch state updates to avoid cascading renders
      requestAnimationFrame(() => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      });
      prevPathnameRef.current = pathname;
    }
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          shouldBeWhite
            ? 'bg-white shadow-lg py-2 sm:py-3 md:py-4'
            : 'bg-transparent py-3 sm:py-4 md:py-6'
        }`}
        aria-label="Primary navigation"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-16">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center cursor-pointer">
              <div className="bg-white rounded-md p-1 sm:p-1.5">
                <img
                  src="/images/logos/basil-vegan-thai-logo.webp"
                  alt="Logo"
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                  style={{ objectPosition: 'center', maxWidth: '100px' }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-body font-medium transition-all px-3 py-2 rounded-lg cursor-pointer ${
                      shouldBeWhite
                        ? 'text-dark-text hover:text-secondary-orange hover:bg-secondary-orange hover:bg-opacity-10'
                        : 'text-white hover:text-secondary-orange hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-body font-medium transition-all px-3 py-2 rounded-lg cursor-pointer ${
                      location.pathname === link.path
                        ? 'bg-secondary-orange text-white font-semibold'
                        : shouldBeWhite
                        ? 'text-dark-text hover:text-secondary-orange hover:bg-secondary-orange hover:bg-opacity-10'
                        : 'text-white hover:text-secondary-orange hover:bg-white hover:bg-opacity-10'
                    }`}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                )
              )}
              
              {/* Contact & FAQ Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setIsDropdownOpen(false);
                    }
                  }}
                  className={`font-body font-medium transition-all px-3 py-2 rounded-lg flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2 cursor-pointer ${
                    location.pathname === '/contact' || location.pathname === '/promotions' || location.pathname === '/faq' || location.pathname === '/blog'
                      ? 'bg-secondary-orange text-white font-semibold'
                      : shouldBeWhite
                      ? 'text-dark-text hover:text-secondary-orange hover:bg-secondary-orange hover:bg-opacity-10'
                      : 'text-white hover:text-secondary-orange hover:bg-white hover:bg-opacity-10'
                  }`}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Contact & FAQ menu"
                >
                  Contact & FAQ
                  <svg
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-[100]"
                    role="menu"
                    aria-label="Contact & FAQ submenu"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {contactDropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDropdownOpen(false);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') {
                            setIsDropdownOpen(false);
                          }
                        }}
                        className={`block px-4 py-3 font-body font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-inset cursor-pointer ${
                          location.pathname === item.path
                            ? 'bg-secondary-orange bg-opacity-10 text-secondary-orange font-semibold'
                            : 'text-primary-teal hover:bg-neutral-cream'
                        }`}
                        role="menuitem"
                        aria-current={location.pathname === item.path ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape' && isMobileMenuOpen) {
                  setIsMobileMenuOpen(false);
                }
              }}
              className={`md:hidden min-w-[44px] min-h-[44px] p-2 rounded-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2 cursor-pointer ${
                isMobileMenuOpen
                  ? 'bg-secondary-orange text-white'
                  : shouldBeWhite
                    ? 'text-primary-teal hover:bg-neutral-cream'
                    : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="primary-navigation"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navLinks={navLinks}
            contactDropdownItems={contactDropdownItems}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
