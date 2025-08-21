import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Services from '../components/sections/Services';
import { trackPageView } from '../utils/analytics';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    trackPageView('/services');
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services - Fiduciary Partners | Comprehensive Financial Solutions</title>
        <meta name="description" content="Explore our comprehensive financial services including investment management, estate planning, trust administration, retirement planning, and tax optimization strategies." />
        <meta name="keywords" content="investment management, estate planning, trust administration, retirement planning, financial services" />
        <link rel="canonical" href="https://fiduciarypartners.com/services" />
      </Helmet>

      <main>
        <div className="pt-5 mt-5">
          <Services />
        </div>
      </main>
    </>
  );
};

export default ServicesPage;