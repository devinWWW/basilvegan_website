import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import ScrollToTop from './components/ScrollToTop';

// Lazy load routes for code splitting and faster initial load
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Catering = lazy(() => import('./pages/Catering'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Promotions = lazy(() => import('./pages/Promotions'));
const Blog = lazy(() => import('./pages/Blog'));
const ChefMindyJourney = lazy(() => import('./pages/blog/ChefMindyJourney'));
const VeganTomYumHenderson = lazy(() => import('./pages/blog/VeganTomYumHenderson'));
const GreenValleyVeganRestaurant = lazy(() => import('./pages/blog/GreenValleyVeganRestaurant'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-neutral-cream">
    <div className="text-center">
      <div className="inline-block w-8 h-8 border-4 border-primary-teal border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-primary-teal font-body">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-grow pb-20 sm:pb-20 md:pb-0" tabIndex={-1}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/chef-mindy-journey" element={<ChefMindyJourney />} />
              <Route path="/blog/vegan-tom-yum-henderson" element={<VeganTomYumHenderson />} />
              <Route path="/blog/green-valley-vegan-restaurant" element={<GreenValleyVeganRestaurant />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <MobileNavigation />
      </div>
    </Router>
  );
}

export default App;
