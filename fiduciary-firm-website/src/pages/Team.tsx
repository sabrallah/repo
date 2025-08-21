import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Team from '../components/sections/Team';
import { trackPageView } from '../utils/analytics';

const TeamPage: React.FC = () => {
  useEffect(() => {
    trackPageView('/team');
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Team - Fiduciary Partners | Expert Financial Advisors</title>
        <meta name="description" content="Meet our experienced team of financial advisors, certified professionals, and industry experts dedicated to providing exceptional fiduciary services." />
        <meta name="keywords" content="financial advisors, certified professionals, investment experts, fiduciary team" />
        <link rel="canonical" href="https://fiduciarypartners.com/team" />
      </Helmet>

      <main>
        <div className="pt-5 mt-5">
          <Team />
        </div>
      </main>
    </>
  );
};

export default TeamPage;