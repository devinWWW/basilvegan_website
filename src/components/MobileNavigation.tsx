import { Link, useLocation } from 'react-router-dom';

const MobileNavigation: React.FC = () => {
  const location = useLocation();

  const bottomNavItems = [
    {
      name: 'Home',
      path: '/',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: 'Deals',
      path: '/promotions',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
    },
    {
      name: 'Order',
      path: 'https://order.toasttab.com/online/basil-vegan-thai',
      external: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h12M17 19a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      ),
    },
    {
      name: 'Book',
      path: 'https://tables.toasttab.com/restaurants/a4a4b733-46d7-4ab4-875d-fbcedafc13ca/findTime',
      external: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Rewards',
      path: 'https://rewards.vegansushilv.com/scan',
      external: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg safe-area-inset-bottom" aria-label="Mobile bottom navigation">
      <div className="flex items-center justify-around py-1.5 sm:py-2">
        {bottomNavItems.map((item) => (
          <div key={item.name} className="flex-1 min-w-0">
            {item.external ? (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center min-h-[56px] py-1.5 px-1 text-dark-text hover:text-secondary-orange transition-colors active:bg-gray-50"
                aria-label={`${item.name} - Opens in new tab`}
              >
                <div className={`mb-0.5 sm:mb-1 ${location.pathname === item.path ? 'text-secondary-orange' : ''}`}>
                  {item.icon}
                </div>
                <span className="text-[10px] sm:text-xs font-body font-medium leading-tight text-center">{item.name}</span>
              </a>
            ) : (
              <Link
                to={item.path}
                className="flex flex-col items-center justify-center min-h-[56px] py-1.5 px-1 text-dark-text hover:text-secondary-orange transition-colors active:bg-gray-50"
                aria-label={item.name}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                <div className={`mb-0.5 sm:mb-1 ${location.pathname === item.path ? 'text-secondary-orange' : ''}`}>
                  {item.icon}
                </div>
                <span className="text-[10px] sm:text-xs font-body font-medium leading-tight text-center">{item.name}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavigation;
