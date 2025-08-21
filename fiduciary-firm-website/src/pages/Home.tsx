import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { trackPageView, measurePerformance } from '../utils/analytics';

const Home: React.FC = () => {
  useEffect(() => {
    // Track page view
    trackPageView('/');
    measurePerformance();
  }, []);

  return (
    <>
      <Helmet>
        <title>Fiduciary Partners - Your Trusted Financial Advisors</title>
        <meta name="description" content="Professional fiduciary services including investment management, estate planning, trust administration, and comprehensive financial planning. SEC registered and FINRA member." />
        <meta name="keywords" content="fiduciary, financial advisor, investment management, estate planning, trust administration, retirement planning" />
        <link rel="canonical" href="https://fiduciarypartners.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5" style={{ minHeight: '60vh' }}>
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Your Trusted Financial Partners
              </h1>
              <p className="lead mb-4">
                With over 25 years of experience, we provide comprehensive fiduciary services
                including investment management, estate planning, and trust administration.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link to="/contact" className="btn btn-light btn-lg">
                  Get Started Today
                </Link>
                <Link to="/about" className="btn btn-outline-light btn-lg">
                  Learn More About Us
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-center">
                <img
                  src="/logo192.png"
                  alt="Fiduciary Partners Logo"
                  className="img-fluid opacity-75"
                  style={{ maxWidth: '300px' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold mb-3">Our Services</h2>
              <p className="lead text-muted">
                Comprehensive financial solutions tailored to your needs
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-chart-line fa-3x text-primary"></i>
                  </div>
                  <Card.Title className="h4">Investment Management</Card.Title>
                  <Card.Text className="text-muted">
                    Professional portfolio management and investment strategies.
                  </Card.Text>
                  <Link to="/services" className="btn btn-outline-primary">
                    Learn More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-file-contract fa-3x text-primary"></i>
                  </div>
                  <Card.Title className="h4">Estate Planning</Card.Title>
                  <Card.Text className="text-muted">
                    Complete estate planning services for your peace of mind.
                  </Card.Text>
                  <Link to="/services" className="btn btn-outline-primary">
                    Learn More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-shield-alt fa-3x text-primary"></i>
                  </div>
                  <Card.Title className="h4">Trust Administration</Card.Title>
                  <Card.Text className="text-muted">
                    Expert trust administration and fiduciary services.
                  </Card.Text>
                  <Link to="/services" className="btn btn-outline-primary">
                    Learn More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <Container className="text-center">
          <Row>
            <Col>
              <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
              <p className="lead mb-4">
                Contact us today to schedule a consultation and discover how we can help you achieve your financial goals.
              </p>
              <Link to="/contact" className="btn btn-light btn-lg">
                Schedule Consultation
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;