import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../components/sections/Contact';
import { trackPageView } from '../utils/analytics';

const ContactPage: React.FC = () => {
  useEffect(() => {
    trackPageView('/contact');
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - Fiduciary Partners | Get in Touch Today</title>
        <meta name="description" content="Contact Fiduciary Partners for personalized financial advice. Schedule a consultation with our experienced financial advisors and get started on your financial planning journey." />
        <meta name="keywords" content="contact fiduciary partners, financial consultation, schedule appointment, financial advisors contact" />
        <link rel="canonical" href="https://fiduciarypartners.com/contact" />
      </Helmet>

      <main>
        <div className="pt-5 mt-5">
          <Contact />
        </div>
      </main>
    </>
  );
};

export default ContactPage;