import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';
import { Service } from '../../types';

const services: Service[] = [
  {
    id: 'investment-management',
    title: 'Investment Management',
    description: 'Comprehensive investment portfolio management tailored to your financial goals and risk tolerance.',
    icon: 'fas fa-chart-line',
    features: [
      'Portfolio diversification',
      'Risk assessment & management',
      'Performance monitoring',
      'Tax-efficient strategies'
    ]
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    description: 'Comprehensive estate planning services to protect and preserve your wealth for future generations.',
    icon: 'fas fa-file-contract',
    features: [
      'Will and trust preparation',
      'Estate tax planning',
      'Asset protection strategies',
      'Charitable giving plans'
    ]
  },
  {
    id: 'trust-administration',
    title: 'Trust Administration',
    description: 'Professional administration of trusts with meticulous attention to legal requirements and beneficiary needs.',
    icon: 'fas fa-shield-alt',
    features: [
      'Trust setup and administration',
      'Beneficiary communication',
      'Compliance and reporting',
      'Asset management'
    ]
  },
  {
    id: 'retirement-planning',
    title: 'Retirement Planning',
    description: 'Strategic retirement planning to ensure financial security throughout your retirement years.',
    icon: 'fas fa-sun',
    features: [
      'Retirement income strategies',
      'Social Security optimization',
      '401(k) & IRA management',
      'Long-term care planning'
    ]
  },
  {
    id: 'tax-services',
    title: 'Tax Planning & Services',
    description: 'Advanced tax planning strategies to minimize tax liability and maximize after-tax returns.',
    icon: 'fas fa-calculator',
    features: [
      'Tax-efficient investment strategies',
      'Tax loss harvesting',
      'Estate tax planning',
      'Year-round tax planning'
    ]
  },
  {
    id: 'financial-planning',
    title: 'Comprehensive Financial Planning',
    description: 'Holistic financial planning that integrates all aspects of your financial life into a cohesive strategy.',
    icon: 'fas fa-map-marked-alt',
    features: [
      'Goal setting and prioritization',
      'Cash flow analysis',
      'Insurance review',
      'Education funding strategies'
    ]
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleInquiry = (service: Service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowModal(false);
  };

  return (
    <section id="services" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4 fw-bold text-dark mb-3">Our Services</h2>
            <p className="lead text-muted fs-5">
              Comprehensive fiduciary services tailored to your unique financial needs
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={service.id}>
              <Card className="h-100 border-0 shadow-hover" style={{ transition: 'transform 0.3s ease' }}>
                <Card.Body className="d-flex flex-column p-4">
                  <div className="text-center mb-4">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                      <i className={`${service.icon} text-primary fs-2`}></i>
                    </div>
                    <Card.Title className="fw-bold fs-4">{service.title}</Card.Title>
                  </div>

                  <Card.Text className="text-muted mb-4 flex-grow-1">
                    {service.description}
                  </Card.Text>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">Key Features:</h6>
                    <ul className="list-unstyled">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="fas fa-check text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant="primary"
                      className="w-100 mb-2"
                      onClick={() => handleInquiry(service)}
                    >
                      Learn More & Inquire
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="w-100"
                      onClick={scrollToContact}
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Service Inquiry Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              Inquiry About {selectedService?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedService && (
              <div>
                <p className="mb-4">
                  Thank you for your interest in our {selectedService.title} service.
                  We're here to help you understand how this service can benefit your financial situation.
                </p>

                <div className="bg-light p-3 rounded mb-4">
                  <h6 className="fw-bold mb-2">What's included:</h6>
                  <ul className="mb-0">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <p className="mb-0">
                  <strong>Next steps:</strong> Schedule a complimentary consultation to discuss
                  your specific needs and goals.
                </p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={scrollToContact}>
              Schedule Consultation
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Call to Action Section */}
        <Row className="mt-5 py-5 bg-primary text-white rounded-3 text-center">
          <Col>
            <h3 className="fw-bold mb-3">Ready to Get Started?</h3>
            <p className="lead mb-4">
              Contact us today for a complimentary consultation and discover how our fiduciary services can help you achieve your financial goals.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Button
                variant="light"
                size="lg"
                onClick={scrollToContact}
                className="px-4 py-3"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-3"
              >
                Learn More About Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  );
};

export default Services;