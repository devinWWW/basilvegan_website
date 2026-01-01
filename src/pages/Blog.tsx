import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Chef Mindy Lim's Bold Journey: From Vision to Vegan Culinary Excellence",
      excerpt: "The inspiring story behind Henderson's premier plant-based Thai restaurant. Discover how a transformative dream led Chef Mindy to create award-winning vegan cuisine.",
      image: "/images/about/chef-mindy-lim-yellow-magic-roll-peta-award.webp",
      path: "/blog/chef-mindy-journey",
      date: "November 2024",
      category: "Chef's Story",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Art of Vegan Tom Yum: Chef Mindy's Authentic Henderson Recipe",
      excerpt: "Discover how we create Henderson's favorite plant-based Tom Yum soup. Learn about the authentic ingredients and traditional techniques that make our Tom Yum special.",
      image: "/images/menu/vegan-tom-yum-soup-henderson-thai.webp",
      path: "/blog/vegan-tom-yum-henderson",
      date: "November 2024",
      category: "Menu Spotlight",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Why Green Valley Residents Love Basil Vegan Thai",
      excerpt: "Henderson's premier plant-based Thai restaurant has become a community favorite. Learn why Green Valley residents choose us for authentic flavors and compassionate dining.",
      image: "/images/hero/basil-vegan-thai-restaurant-henderson-interior.webp",
      path: "/blog/green-valley-vegan-restaurant",
      date: "November 2024",
      category: "Community",
      readTime: "4 min read"
    }
  ];

  return (
    <>
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-teal to-secondary-orange py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2">
            Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-opacity-90 px-2 mb-3 sm:mb-4 font-medium">
            Stories, Recipes & Insights from Henderson's Premier Vegan Thai Restaurant
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white text-opacity-80 px-2">
            Discover authentic vegan Thai cuisine, chef stories, and local dining insights from Basil Vegan Thai & Sushi in Green Valley, Henderson
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-neutral-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-8 sm:mb-10 text-center">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <Link to={post.path} className="block">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-contain sm:group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-secondary-orange text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                      <span>{post.date}</span>
                      <span className="mx-1.5 sm:mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-primary-teal mb-2 sm:mb-3 group-hover:text-secondary-orange transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm sm:text-base text-dark-text leading-relaxed mb-3 sm:mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary-teal font-semibold group-hover:text-secondary-orange transition-colors text-sm sm:text-base">
                      Read More
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-primary-teal">
        <div className="max-w-4xl mx-auto text-center px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3 sm:mb-4">
            Stay Connected
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white text-opacity-90 mb-6 sm:mb-8">
            Follow us on social media for the latest updates, new menu items, and special offers
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
      </section>
    </div>
    </>
  );
};

export default Blog;

