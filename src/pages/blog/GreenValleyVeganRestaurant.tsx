import { Link } from 'react-router-dom';

const GreenValleyVeganRestaurant: React.FC = () => {
  return (
    <>
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-teal to-secondary-orange py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2 leading-tight">
            Why Green Valley Residents Love Basil Vegan Thai
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-opacity-90 px-2">
            Henderson's premier plant-based Thai restaurant has become a community favorite
          </p>
          <p className="text-sm text-white text-opacity-75 mt-4">
            Published: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto prose prose-sm sm:prose-base md:prose-lg">
          {/* Back to Blog Link */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-teal hover:text-secondary-orange font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
          <div className="mb-8">
            <p className="text-xl text-dark-text leading-relaxed font-body">
              Nestled in the heart of Green Valley, Henderson, Basil Vegan Thai & Sushi has quickly 
              become more than just a restaurant—it's a gathering place for the community. Located at 
              500 E Windmill Ln #145, we've found our home among families, professionals, and food 
              enthusiasts who value authentic flavors, compassionate dining, and exceptional quality.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              A Perfect Location for Green Valley
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Green Valley is known for its family-friendly atmosphere, excellent schools, and strong 
              sense of community. When Chef Mindy Lim chose this location for Basil Vegan Thai, she 
              recognized that the area's health-conscious residents would appreciate a restaurant that 
              offers both exceptional food and ethical dining choices.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Our location in the Windmill Square shopping center makes us easily accessible from 
              Green Valley Ranch, Silverado Ranch, and surrounding Henderson neighborhoods. Whether 
              you're coming from I-215 or traveling through Green Valley Parkway, we're conveniently 
              located for both quick lunches and family dinners.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              Meeting Green Valley's Dining Needs
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Green Valley residents have diverse dining needs, and Basil Vegan Thai meets them all:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-dark-text mb-4 ml-4">
              <li><strong>Family-Friendly Dining</strong> - Our welcoming atmosphere and diverse menu appeal to all ages</li>
              <li><strong>Health-Conscious Options</strong> - 100% plant-based menu with gluten-free choices</li>
              <li><strong>Convenient Takeout</strong> - Easy online ordering for busy families</li>
              <li><strong>Catering Services</strong> - Perfect for school events, parties, and community gatherings</li>
              <li><strong>Authentic Flavors</strong> - Real Thai cuisine that satisfies adventurous palates</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              Building Community Connections
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Since opening, Basil Vegan Thai has become a regular spot for Green Valley families, 
              professionals working nearby, and residents seeking high-quality plant-based dining. Our 
              "Peace on a Plate" mission resonates with a community that values both health and 
              compassion.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              We've had the pleasure of serving:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-dark-text mb-4 ml-4">
              <li>Families celebrating special occasions</li>
              <li>Professionals enjoying lunch meetings</li>
              <li>Couples on date nights</li>
              <li>Groups hosting private parties</li>
              <li>Individuals exploring plant-based dining</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              What Makes Us Different
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              While Green Valley has many dining options, Basil Vegan Thai stands out as the area's 
              only dedicated 100% plant-based Thai restaurant. This means:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-dark-text mb-4 ml-4">
              <li><strong>No Cross-Contamination</strong> - Complete peace of mind for vegans and those with dietary restrictions</li>
              <li><strong>Chef-Driven Quality</strong> - Over 20 years of culinary expertise in every dish</li>
              <li><strong>Award-Winning Innovation</strong> - Chef Mindy's PETA-recognized approach to plant-based cuisine</li>
              <li><strong>Authentic Thai Flavors</strong> - Traditional recipes adapted for compassionate dining</li>
              <li><strong>Local Focus</strong> - Designed specifically for the Henderson and Green Valley community</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              Convenient for Green Valley Living
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              Our location and services are designed with Green Valley residents in mind:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-dark-text mb-4 ml-4">
              <li><strong>Easy Parking</strong> - Free parking in Windmill Square shopping center</li>
              <li><strong>Online Ordering</strong> - Order ahead for quick pickup</li>
              <li><strong>Delivery Available</strong> - Through DoorDash and Uber Eats</li>
              <li><strong>Flexible Hours</strong> - Open Monday-Saturday 11:30 AM - 9:30 PM, Sunday 3:00 PM - 9:30 PM</li>
              <li><strong>Reservations Welcome</strong> - Book online for weekend dining</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-teal mb-6">
              Join the Green Valley Community
            </h2>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              We're proud to be part of the Green Valley community and grateful for the warm welcome 
              we've received. Whether you're a long-time resident or new to the area, we invite you 
              to experience what makes Basil Vegan Thai special.
            </p>
            <p className="text-lg text-dark-text leading-relaxed mb-4">
              From our authentic Tom Yum soup to our creative sushi rolls, every dish is crafted with 
              care and designed to bring people together around great food and shared values.
            </p>
          </section>

          {/* CTA Section */}
          <div className="bg-neutral-cream p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-heading font-bold text-primary-teal mb-4">
              Visit Basil Vegan Thai in Green Valley
            </h3>
            <p className="text-dark-text mb-6">
              Located at 500 E Windmill Ln #145, we're conveniently situated for Green Valley residents. 
              Call us at (702) 357-3837 or visit us to experience Henderson's premier plant-based Thai restaurant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://basilveganthai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-6 py-3 rounded-lg text-center transition-all transform hover:scale-105"
              >
                Make a Reservation
              </a>
              <Link
                to="/contact"
                className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-semibold px-6 py-3 rounded-lg text-center transition-all"
              >
                Get Directions
              </Link>
              <a
                href="https://order.toasttab.com/online/basil-vegan-thai"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white font-body font-semibold px-6 py-3 rounded-lg text-center transition-all"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
    </>
  );
};

export default GreenValleyVeganRestaurant;

