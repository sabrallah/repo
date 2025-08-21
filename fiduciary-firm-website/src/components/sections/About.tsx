import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4 fw-bold text-dark mb-3">About Fiduciary Partners</h2>
            <p className="lead text-muted fs-5">
              Excellence in fiduciary services since 1998
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col lg={6}>
            <h3 className="fw-bold mb-4">Our Mission</h3>
            <p className="fs-5 mb-4">
              To serve as trusted stewards of our clients' financial well-being,
              providing personalized fiduciary services with unwavering integrity,
              expertise, and dedication.
            </p>
            <p className="text-muted mb-4">
              We believe that everyone deserves access to professional financial guidance
              and fiduciary services. Our team combines decades of experience with cutting-edge
              financial strategies to help you achieve your financial goals.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#team');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Meet Our Team
            </Button>
          </Col>
          <Col lg={6}>
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Professional team meeting"
                className="img-fluid rounded-3 shadow-lg"
                style={{ height: '400px', width: '100%', objectFit: 'cover' }}
              />
              <div
                className="position-absolute top-0 end-0 bg-primary text-white p-3 rounded-3 shadow"
                style={{ transform: 'translate(20px, -20px)' }}
              >
                <h4 className="mb-1">25+</h4>
                <small>Years Experience</small>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h3 className="text-center fw-bold mb-5">Why Choose Us</h3>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={4} md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-shield-alt text-primary fs-1"></i>
                </div>
                <Card.Title className="fw-bold">Fiduciary Responsibility</Card.Title>
                <Card.Text className="text-muted">
                  We act as legal fiduciaries, putting your interests first in all financial decisions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-chart-line text-primary fs-1"></i>
                </div>
                <Card.Title className="fw-bold">Expert Analysis</Card.Title>
                <Card.Text className="text-muted">
                  Our team provides sophisticated financial analysis and personalized investment strategies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-handshake text-primary fs-1"></i>
                </div>
                <Card.Title className="fw-bold">Personalized Service</Card.Title>
                <Card.Text className="text-muted">
                  Every client receives individualized attention and customized financial solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-lock text-primary fs-1"></i>
                </div>
                <Card.Title className="fw-bold">Regulatory Compliance</Card.Title>
                <Card.Text className="text-muted">
                  Fully registered and regulated by SEC, FINRA, and state regulatory authorities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-globe text-primary fs-1"></i>
                </div>
                <Card.Title className="fw-bold">Global Expertise</Card.Title>
                <Card.Text className="text-muted">
                  International financial markets knowledge with local expertise and global reach.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-clock text-primary fs-1"></i>
                </div>
                <Card.Title className="fw-bold">Long-term Partnership</Card.Title>
                <Card.Text className="text-muted">
                  Building lasting relationships based on trust, transparency, and consistent results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Statistics Section */}
        <Row className="mt-5 py-5 bg-white rounded-3">
          <Col>
            <h3 className="text-center fw-bold mb-5">Our Impact</h3>
          </Col>
        </Row>

        <Row className="text-center">
          <Col lg={3} md={6} className="mb-4">
            <div className="bg-primary text-white p-4 rounded-3">
              <h2 className="display-4 fw-bold mb-2">$2.5B+</h2>
              <p className="mb-0">Assets Under Management</p>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <div className="bg-success text-white p-4 rounded-3">
              <h2 className="display-4 fw-bold mb-2">500+</h2>
              <p className="mb-0">Satisfied Clients</p>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <div className="bg-info text-white p-4 rounded-3">
              <h2 className="display-4 fw-bold mb-2">98%</h2>
              <p className="mb-0">Client Retention Rate</p>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <div className="bg-warning text-white p-4 rounded-3">
              <h2 className="display-4 fw-bold mb-2">25+</h2>
              <p className="mb-0">Years of Excellence</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;