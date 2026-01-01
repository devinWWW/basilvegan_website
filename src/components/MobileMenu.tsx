import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; path: string; external?: boolean }[];
  contactDropdownItems: { name: string; path: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks, contactDropdownItems }) => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  if (!isOpen) return null;

  return (
    <div
      id="primary-navigation"
      className="md:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden z-[100] relative"
    >
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-lg font-heading font-bold text-primary-teal">Basil Vegan Thai & Sushi</h3>
        <p className="text-sm text-dark-text font-body">Authentic plant-based Thai cuisine</p>
      </div>
      <div className="py-2">
        {navLinks.map((link) =>
          link.external ? (
            <a
              key={link.path}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="min-h-[44px] flex items-center px-4 py-3 font-body font-medium text-dark-text hover:bg-neutral-cream active:bg-neutral-cream border-b border-gray-50 cursor-pointer touch-manipulation"
            >
              {link.name}
            </a>
          ) : (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`min-h-[44px] flex items-center px-4 py-3 font-body font-medium border-b border-gray-50 cursor-pointer touch-manipulation ${
                location.pathname === link.path
                  ? 'text-white bg-secondary-orange'
                  : 'text-dark-text hover:bg-neutral-cream active:bg-neutral-cream'
              }`}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.name}
            </Link>
          )
        )}

        {/* Contact & FAQ Dropdown in Mobile */}
        <div className="border-b border-gray-50">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsDropdownOpen(!isDropdownOpen);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setIsDropdownOpen(false);
              }
            }}
            className={`min-h-[44px] w-full flex items-center justify-between px-4 py-3 font-body font-medium text-left focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-inset cursor-pointer touch-manipulation ${
              location.pathname === '/contact' || location.pathname === '/promotions' || location.pathname === '/faq' || location.pathname === '/blog'
                ? 'text-white bg-secondary-orange'
                : 'text-dark-text hover:bg-neutral-cream active:bg-neutral-cream'
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
            <div className="bg-gray-50 relative z-[200]">
              {contactDropdownItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(false);
                    onClose();
                  }}
                  className={`min-h-[52px] flex items-center px-8 py-4 font-body font-medium text-base cursor-pointer touch-manipulation active:bg-neutral-cream relative z-[201] ${
                    location.pathname === item.path
                      ? 'text-secondary-orange font-semibold bg-white'
                      : 'text-dark-text hover:bg-neutral-cream'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
