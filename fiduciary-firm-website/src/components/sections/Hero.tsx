import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero-section position-relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center">
          <Col lg={8} className="text-white">
            <div className="mb-4">
              <Badge bg="light" text="dark" className="px-3 py-2 fs-6 mb-3">
                🛡️ SEC Registered • FINRA Member • SIPC Protected
              </Badge>
            </div>

            <h1 className="display-3 fw-bold mb-4">
              Your Trusted Partner in
              <span className="text-warning"> Financial Excellence</span>
            </h1>

            <p className="lead fs-5 mb-4 opacity-90">
              With over 25 years of combined experience, we provide comprehensive fiduciary services,
              investment management, and estate planning solutions tailored to your unique needs.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <Button
                variant="warning"
                size="lg"
                className="px-4 py-3"
                onClick={scrollToContact}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                className="px-4 py-3"
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Our Services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="d-flex flex-wrap align-items-center gap-4">
              <div className="d-flex align-items-center">
                <i className="fas fa-shield-alt text-warning me-2"></i>
                <small className="opacity-75">Licensed & Regulated</small>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-lock text-warning me-2"></i>
                <small className="opacity-75">Bank-Level Security</small>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-clock text-warning me-2"></i>
                <small className="opacity-75">25+ Years Experience</small>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-users text-warning me-2"></i>
                <small className="opacity-75">500+ Satisfied Clients</small>
              </div>
            </div>
          </Col>

          <Col lg={4} className="text-center">
            <div
              className="bg-white p-4 rounded-3 shadow-lg"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="mb-3">
                <i className="fas fa-chart-line text-primary fs-1"></i>
              </div>
              <h4 className="text-dark mb-3">Market Insights</h4>
              <p className="text-muted mb-4">
                Get our weekly market analysis and financial planning tips.
              </p>
              <Button variant="primary" className="w-100">
                Subscribe Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Floating scroll indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <div className="animate-bounce">
          <i className="fas fa-chevron-down text-white fs-4"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;