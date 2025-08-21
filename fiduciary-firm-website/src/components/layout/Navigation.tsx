import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { NavigationItem } from '../../types';

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'team', label: 'Team', href: '/team' },
  { id: 'testimonials', label: 'Testimonials', href: '/testimonials' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    navigate(href);
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg border-bottom'
          : 'bg-transparent'
      }`}
      style={{ padding: isScrolled ? '0.5rem 0' : '1rem 0' }}
    >
      <Container>
        <Link
          to="/"
          className={`navbar-brand fw-bold fs-4 ${
            isScrolled ? 'text-dark' : 'text-white'
          }`}
          onClick={() => handleNavClick('/')}
        >
          Fiduciary Partners
        </Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={isScrolled ? 'text-dark' : 'text-white'}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`nav-link mx-2 ${
                  isScrolled ? 'text-dark' : 'text-white'
                } hover-primary`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline-primary"
              className="ms-lg-3 mt-3 mt-lg-0"
              onClick={() => handleNavClick('/contact')}
            >
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;