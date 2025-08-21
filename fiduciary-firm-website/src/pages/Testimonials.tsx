import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Testimonials from '../components/sections/Testimonials';
import { trackPageView } from '../utils/analytics';

const TestimonialsPage: React.FC = () => {
  useEffect(() => {
    trackPageView('/testimonials');
  }, []);

  return (
    <>
      <Helmet>
        <title>Client Testimonials - Fiduciary Partners | What Our Clients Say</title>
        <meta name="description" content="Read testimonials from satisfied clients who trust Fiduciary Partners with their financial planning, investment management, and estate planning needs." />
        <meta name="keywords" content="client testimonials, financial planning reviews, investment management feedback, trusted advisors" />
        <link rel="canonical" href="https://fiduciarypartners.com/testimonials" />
      </Helmet>

      <main>
        <div className="pt-5 mt-5">
          <Testimonials />
        </div>
      </main>
    </>
  );
};

export default TestimonialsPage;