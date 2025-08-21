import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    company: 'Technology Executive',
    message: 'Fiduciary Partners has been instrumental in managing my investment portfolio. Their expertise and personalized approach have helped me achieve my financial goals while maintaining peace of mind. I highly recommend their services.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    company: 'Healthcare Professional',
    message: 'Working with Fiduciary Partners for estate planning was a game-changer. They took the time to understand my complex family situation and created a comprehensive plan that protects my assets and provides for my loved ones.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'robert-johnson',
    name: 'Robert Johnson',
    company: 'Business Owner',
    message: 'The team\'s tax planning expertise saved me thousands of dollars. Their proactive approach to tax-efficient strategies and year-round planning has been invaluable to my business and personal finances.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'maria-garcia',
    name: 'Maria Garcia',
    company: 'Real Estate Investor',
    message: 'I\'ve worked with many financial advisors, but Fiduciary Partners stands out for their transparency and fiduciary responsibility. They truly put my interests first and have helped me build a secure financial future.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'michael-brown',
    name: 'Michael Brown',
    company: 'Attorney',
    message: 'As an attorney, I appreciate the thoroughness and compliance expertise that Fiduciary Partners brings to every client engagement. Their attention to detail and regulatory knowledge is exceptional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'sarah-wilson',
    name: 'Sarah Wilson',
    company: 'Retired Teacher',
    message: 'Planning for retirement was overwhelming until I found Fiduciary Partners. They simplified the process and created a retirement strategy that gives me confidence in my financial future.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? 'text-warning' : 'text-muted'}`}
      ></i>
    ));
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4 fw-bold text-dark mb-3">What Our Clients Say</h2>
            <p className="lead text-muted fs-5">
              Trusted by individuals and families for over 25 years
            </p>
          </Col>
        </Row>

        {/* Desktop Grid View */}
        <div className="d-none d-lg-block">
          <Row className="g-4">
            {testimonials.map((testimonial, idx) => (
              <Col lg={4} md={6} key={testimonial.id}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>

                    <Card.Text className="mb-4 fst-italic">
                      "{testimonial.message}"
                    </Card.Text>

                    <div className="d-flex align-items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                      <div>
                        <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.company}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Mobile Carousel View */}
        <div className="d-lg-none">
          <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <Card className="border-0 shadow-sm mx-3">
                  <Card.Body className="p-4 text-center">
                    <div className="d-flex justify-content-center mb-3">
                      {renderStars(testimonial.rating)}
                    </div>

                    <Card.Text className="mb-4 fst-italic fs-5">
                      "{testimonial.message}"
                    </Card.Text>

                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <div>
                        <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.company}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Trust Indicators */}
        <Row className="mt-5 py-4 bg-light rounded-3 text-center">
          <Col lg={3} md={6} className="mb-3">
            <div className="d-flex flex-column align-items-center">
              <i className="fas fa-users text-primary fs-1 mb-2"></i>
              <h4 className="fw-bold text-dark mb-1">500+</h4>
              <small className="text-muted">Happy Clients</small>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-3">
            <div className="d-flex flex-column align-items-center">
              <i className="fas fa-star text-warning fs-1 mb-2"></i>
              <h4 className="fw-bold text-dark mb-1">4.9/5</h4>
              <small className="text-muted">Average Rating</small>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-3">
            <div className="d-flex flex-column align-items-center">
              <i className="fas fa-shield-alt text-success fs-1 mb-2"></i>
              <h4 className="fw-bold text-dark mb-1">100%</h4>
              <small className="text-muted">Regulatory Compliant</small>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-3">
            <div className="d-flex flex-column align-items-center">
              <i className="fas fa-clock text-info fs-1 mb-2"></i>
              <h4 className="fw-bold text-dark mb-1">25+</h4>
              <small className="text-muted">Years of Service</small>
            </div>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="mt-5 text-center">
          <Col>
            <div className="bg-primary text-white p-5 rounded-3">
              <h3 className="fw-bold mb-3">Join Our Family of Satisfied Clients</h3>
              <p className="lead mb-4">
                Experience the difference that fiduciary responsibility and personalized service can make in your financial journey.
              </p>
              <Button
                variant="light"
                size="lg"
                onClick={scrollToContact}
                className="px-5 py-3"
              >
                Start Your Journey Today
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;