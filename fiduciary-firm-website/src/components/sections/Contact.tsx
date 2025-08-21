import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '../../types';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      setIsLoading(false);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4 fw-bold text-dark mb-3">Contact Us</h2>
            <p className="lead text-muted fs-5">
              Ready to take the next step? Get in touch with our team of experts.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Contact Information */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <h3 className="fw-bold mb-4">Get In Touch</h3>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Office Location</h6>
                      <p className="text-muted mb-0">123 Financial District<br />New York, NY 10004</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Phone</h6>
                      <p className="text-muted mb-0">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="text-muted mb-0">info@fiduciarypartners.com</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <i className="fas fa-clock text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Business Hours</h6>
                      <p className="text-muted mb-0">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="mt-5">
                  <h6 className="fw-bold mb-3 text-center">Trusted & Secure</h6>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <div className="text-center">
                      <i className="fas fa-shield-alt text-success fs-2 mb-2"></i>
                      <br />
                      <small className="text-muted">SEC Registered</small>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-lock text-primary fs-2 mb-2"></i>
                      <br />
                      <small className="text-muted">Bank-Level Security</small>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-user-secret text-info fs-2 mb-2"></i>
                      <br />
                      <small className="text-muted">FINRA Member</small>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-gavel text-warning fs-2 mb-2"></i>
                      <br />
                      <small className="text-muted">SIPC Protected</small>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="fw-bold mb-4">Send Us a Message</h3>

                {isSubmitted && (
                  <Alert variant="success" className="mb-4">
                    <i className="fas fa-check-circle me-2"></i>
                    Thank you for your message! We'll get back to you within 24 hours.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your full name"
                          {...register('name', { required: 'Name is required' })}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="your.email@example.com"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="(555) 123-4567"
                          {...register('phone')}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject *</Form.Label>
                        <Form.Select
                          {...register('subject', { required: 'Please select a subject' })}
                          isInvalid={!!errors.subject}
                        >
                          <option value="">Choose a subject</option>
                          <option value="investment-management">Investment Management</option>
                          <option value="estate-planning">Estate Planning</option>
                          <option value="trust-administration">Trust Administration</option>
                          <option value="retirement-planning">Retirement Planning</option>
                          <option value="tax-services">Tax Services</option>
                          <option value="consultation">General Consultation</option>
                          <option value="other">Other</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.subject?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Tell us about your financial goals and how we can help..."
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters'
                        }
                      })}
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="w-100 py-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <i className="fas fa-spinner fa-spin me-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </Button>

                  <small className="text-muted d-block text-center mt-3">
                    <i className="fas fa-lock me-1"></i>
                    Your information is secure and will never be shared with third parties.
                  </small>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Map Placeholder */}
        <Row className="mt-5">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-0">
                <div
                  className="bg-light d-flex align-items-center justify-content-center"
                  style={{ height: '300px' }}
                >
                  <div className="text-center text-muted">
                    <i className="fas fa-map-marker-alt fs-1 mb-3"></i>
                    <h5>Interactive Map</h5>
                    <p>123 Financial District, New York, NY 10004</p>
                    <small>Map integration would be added here in production</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;