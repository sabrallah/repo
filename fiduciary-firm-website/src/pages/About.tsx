import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/sections/About';
import { trackPageView } from '../utils/analytics';

const AboutPage: React.FC = () => {
  useEffect(() => {
    trackPageView('/about');
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Fiduciary Partners | 25+ Years of Financial Excellence</title>
        <meta name="description" content="Learn about Fiduciary Partners, a trusted financial advisory firm with over 25 years of experience in investment management, estate planning, and trust administration." />
        <meta name="keywords" content="about fiduciary partners, financial firm history, investment advisors, trusted financial planning" />
        <link rel="canonical" href="https://fiduciarypartners.com/about" />
      </Helmet>

      <main>
        <div className="pt-5 mt-5">
          <About />
        </div>
      </main>
    </>
  );
};

export default AboutPage;