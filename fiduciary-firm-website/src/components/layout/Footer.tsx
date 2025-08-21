import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5 className="text-white mb-3">Fiduciary Partners</h5>
            <p className="mb-3">
              Your trusted partner in financial management and fiduciary services.
              We provide comprehensive solutions tailored to your unique needs.
            </p>
            <div className="d-flex">
              <i className="fab fa-linkedin me-3 fs-4"></i>
              <i className="fab fa-twitter me-3 fs-4"></i>
              <i className="fab fa-facebook me-3 fs-4"></i>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h6 className="text-white mb-3">Quick Links</h6>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-light p-0 mb-2">Home</Nav.Link>
              <Nav.Link href="#about" className="text-light p-0 mb-2">About Us</Nav.Link>
              <Nav.Link href="#services" className="text-light p-0 mb-2">Services</Nav.Link>
              <Nav.Link href="#team" className="text-light p-0 mb-2">Team</Nav.Link>
            </Nav>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h6 className="text-white mb-3">Services</h6>
            <Nav className="flex-column">
              <Nav.Link href="#services" className="text-light p-0 mb-2">Investment Management</Nav.Link>
              <Nav.Link href="#services" className="text-light p-0 mb-2">Estate Planning</Nav.Link>
              <Nav.Link href="#services" className="text-light p-0 mb-2">Trust Administration</Nav.Link>
              <Nav.Link href="#services" className="text-light p-0 mb-2">Financial Planning</Nav.Link>
            </Nav>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <h6 className="text-white mb-3">Contact Info</h6>
            <div className="mb-2">
              <i className="fas fa-map-marker-alt me-2"></i>
              123 Financial District<br />
              New York, NY 10004
            </div>
            <div className="mb-2">
              <i className="fas fa-phone me-2"></i>
              (555) 123-4567
            </div>
            <div className="mb-2">
              <i className="fas fa-envelope me-2"></i>
              info@fiduciarypartners.com
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0">
              © 2024 Fiduciary Partners. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <Nav className="justify-content-md-end">
              <Nav.Link href="#" className="text-light me-3">Privacy Policy</Nav.Link>
              <Nav.Link href="#" className="text-light me-3">Terms of Service</Nav.Link>
              <Nav.Link href="#" className="text-light">Accessibility</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;