import React from 'react';
import { Link } from 'react-router-dom';
import FAQItem from '../components/FAQItem';

interface FAQItemType {
  question: string;
  answer: string | React.ReactNode;
}

const FAQ: React.FC = () => {
  const faqs: FAQItemType[] = [
    {
      question: 'Is Basil Vegan Thai & Sushi 100% plant-based?',
      answer: 'Yes! Basil Vegan Thai & Sushi is 100% plant-based. Every dish on our menu is made entirely from plants, ensuring a completely vegan dining experience. We never use any animal products, making us the perfect choice for vegans, vegetarians, and anyone looking for compassionate dining options in Henderson, NV.'
    },
    {
      question: 'Where is Basil Vegan Thai located in Henderson?',
      answer: (
        <>
          We're located at 500 E Windmill Ln #145, Las Vegas, NV 89123, in the heart of Green Valley, Henderson. Our restaurant is easily accessible from I-215 and is in the Windmill Square shopping center. We serve Henderson, Green Valley, East Las Vegas, and surrounding areas.{' '}
          <Link to="/contact" className="text-primary-teal hover:text-secondary-orange underline font-semibold">
            Visit our contact page
          </Link>{' '}
          for detailed directions and map.
        </>
      )
    },
    {
      question: 'What are your hours of operation?',
      answer: 'We\'re open Monday through Saturday from 11:30 AM to 9:30 PM, and Sunday from 3:00 PM to 9:30 PM. We offer dine-in, takeout, and delivery services during these hours.'
    },
    {
      question: 'Do you offer gluten-free options?',
      answer: (
        <>
          Yes! Many of our dishes are gluten-free and are clearly marked on our menu with a "GF" label. We understand the importance of accommodating dietary restrictions, and our team is happy to help you find options that meet your needs. Popular gluten-free dishes include our Tom Yum Soup, Green Curry, and many of our specialty sushi rolls. Check out our{' '}
          <a 
            href="https://order.toasttab.com/online/basil-vegan-thai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary-teal hover:text-secondary-orange underline font-semibold"
          >
            online menu
          </a>{' '}
          to see all gluten-free options.
        </>
      )
    },
    {
      question: 'Can I make a reservation online?',
      answer: 'Absolutely! You can make a reservation online through our booking system at rewards.vegansushilv.com/book/basil. We also accept phone reservations by calling (702) 357-3837. Reservations are recommended for weekend dining and special occasions.'
    },
    {
      question: 'Do you offer online ordering and delivery?',
      answer: 'Yes! You can order online for pickup or delivery through our Toast ordering system at order.toasttab.com/online/basil-vegan-thai. We also partner with DoorDash and Uber Eats (ubereats.com/store/basil-vegan-thai-%26-sushis/h3J43JHpVFabfsYCWHaqlg) for delivery throughout the Las Vegas valley. Online ordering is available during our regular business hours.'
    },
    {
      question: 'What makes Basil Vegan Thai different from other Thai restaurants in Henderson?',
      answer: (
        <>
          Basil Vegan Thai is Henderson's premier 100% plant-based Thai restaurant. Unlike other Thai restaurants that offer vegan options, we are completely vegan, eliminating any risk of cross-contamination. Our chef,{' '}
          <Link to="/about" className="text-primary-teal hover:text-secondary-orange underline font-semibold">
            Mindy Lim
          </Link>
          , brings over 20 years of culinary expertise and has won awards for her innovative plant-based cuisine. We focus on authentic Thai flavors while being entirely compassionate and sustainable.{' '}
          <Link to="/about" className="text-primary-teal hover:text-secondary-orange underline font-semibold">
            Learn more about Chef Mindy's story
          </Link>{' '}
          and our mission.
        </>
      )
    },
    {
      question: 'Do you offer catering services?',
      answer: (
        <>
          Yes! We offer comprehensive plant-based Thai catering services for corporate events, weddings, private parties, and group gatherings in Henderson and Las Vegas. Our catering menu includes everything from Thai curry bars to sushi platters.{' '}
          <Link to="/catering" className="text-primary-teal hover:text-secondary-orange underline font-semibold">
            Visit our catering page
          </Link>{' '}
          to learn more about our services, or contact us at (702) 357-3837 or basilveganthai01@gmail.com to discuss your catering needs and receive a custom quote.
        </>
      )
    },
    {
      question: 'What is your most popular dish?',
      answer: (
        <>
          Our Tom Yum Soup is a Henderson favorite! This authentic spicy and sour Thai soup features lemongrass, galangal, and lime leaves. Other popular dishes include our Green Curry, Golden Knights Roll, and Basil Eggplant and Tofu Rice. All dishes are 100% plant-based and bursting with authentic Thai flavors.{' '}
          <Link to="/blog/vegan-tom-yum-henderson" className="text-primary-teal hover:text-secondary-orange underline font-semibold">
            Read more about our Tom Yum Soup
          </Link>{' '}
          on our blog, or{' '}
          <a
            href="https://order.toasttab.com/online/basil-vegan-thai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-teal hover:text-secondary-orange underline font-semibold"
          >
            view our full menu
          </a>
          .
        </>
      )
    },
    {
      question: 'Is Basil Vegan Thai related to Daikon Vegan Sushi?',
      answer: (
        <>
          Yes! Basil Vegan Thai & Sushi is the sister restaurant to Daikon Vegan Sushi & More. Both restaurants are owned and operated by{' '}
          <Link to="/about" className="text-primary-teal hover:text-secondary-orange underline font-semibold">
            Chef Mindy Lim
          </Link>{' '}
          and share the "Peace on a Plate" mission. While Daikon focuses on innovative vegan sushi and Japanese cuisine, Basil emphasizes authentic Thai dishes alongside creative plant-based sushi rolls.{' '}
          <Link to="/about" className="text-primary-teal hover:text-secondary-orange underline font-semibold">
            Learn more about our connection
          </Link>{' '}
          and Chef Mindy's culinary journey.
        </>
      )
    },
    {
      question: 'Do you have a rewards program?',
      answer: (
        <>
          Yes! We offer a rewards program that you can join by scanning the QR code at rewards.vegansushilv.com/scan. Earn points with every purchase and enjoy exclusive benefits, special offers, and discounts. The rewards program is shared with our sister restaurant, Daikon Vegan Sushi, so you can earn and redeem points at both locations.{' '}
          <Link to="/promotions" className="text-primary-teal hover:text-secondary-orange underline font-semibold">
            Check out our promotions page
          </Link>{' '}
          for current rewards program benefits and special offers.
        </>
      )
    },
    {
      question: 'Are you open on holidays?',
      answer: (
        <>
          We're open most holidays, but hours may vary. We recommend calling ahead at (702) 357-3837 or checking our social media pages (@basilveganthai on Instagram and Facebook) for holiday hours and special announcements. You can also{' '}
          <Link to="/contact" className="text-primary-teal hover:text-secondary-orange underline font-semibold">
            visit our contact page
          </Link>{' '}
          for the most up-to-date information.
        </>
      )
    },
    {
      question: 'Do you accommodate food allergies?',
      answer: 'Yes, we take food allergies seriously. Many of our dishes can be modified to accommodate various dietary restrictions. We clearly label gluten-free (GF), nut-free (N/F), and onion/garlic-free (OF) options on our menu. Please inform your server about any allergies when ordering, and our team will work with you to ensure a safe and enjoyable dining experience.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, all major credit cards, and digital payment methods. We also offer gift cards that can be purchased online or in-store. Gift cards can be used at both Basil Vegan Thai and our sister restaurant, Daikon Vegan Sushi.'
    },
    {
      question: 'Is parking available at your Henderson location?',
      answer: (
        <>
          Yes! We have convenient parking available in the Windmill Square shopping center where we're located. Parking is free and easily accessible. Our location is also convenient for those coming from Green Valley Ranch, Silverado Ranch, and other nearby Henderson neighborhoods.{' '}
          <Link to="/contact" className="text-primary-teal hover:text-secondary-orange underline font-semibold">
            See our location details
          </Link>{' '}
          for directions and parking information.
        </>
      )
    },
    {
      question: 'Do you offer happy hour specials?',
      answer: (
        <>
          Yes! We offer an Everyday Happy Hour for dine-in customers. Check with our staff or visit us during happy hour times for special pricing on select menu items and beverages. Follow us on social media for updates on happy hour specials and promotions.{' '}
          <Link to="/promotions" className="text-primary-teal hover:text-secondary-orange underline font-semibold">
            Visit our promotions page
          </Link>{' '}
          to see current specials and offers.
        </>
      )
    }
  ];

  return (
    <>
      <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-teal to-secondary-orange py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-white text-opacity-95 mb-4 font-medium">
            Everything You Need to Know About Basil Vegan Thai & Sushi
          </p>
          <p className="text-lg md:text-xl text-white text-opacity-90">
            Your questions answered about Henderson's premier plant-based Thai restaurant in Green Valley
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-neutral-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-teal mb-8 text-center">
            Common Questions About Our Henderson Location
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-primary-teal rounded-lg p-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-6">
              We're here to help! Reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17023573837"
                className="bg-secondary-orange hover:bg-opacity-90 text-white font-body font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Call (702) 357-3837
              </a>
              <a
                href="mailto:basilveganthai01@gmail.com"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-teal font-body font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
              >
                Email Us
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-teal font-body font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 inline-block text-center"
              >
                Visit Our Location
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default FAQ;

