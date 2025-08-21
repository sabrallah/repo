import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { TeamMember } from '../../types';

const teamMembers: TeamMember[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    position: 'Managing Director & CEO',
    bio: 'Sarah brings 20+ years of experience in investment management and fiduciary services. She oversees all client relationships and strategic initiatives.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    linkedin: '#'
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    position: 'Chief Investment Officer',
    bio: 'Michael is a CFA charterholder with expertise in portfolio management and financial analysis. He leads our investment strategy and research team.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#'
  },
  {
    id: 'emily-rodriguez',
    name: 'Emily Rodriguez',
    position: 'Senior Estate Planning Attorney',
    bio: 'Emily specializes in estate planning and trust administration. She helps clients protect their wealth and plan for future generations.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: '#'
  },
  {
    id: 'david-thompson',
    name: 'David Thompson',
    position: 'Tax Planning Specialist',
    bio: 'David is a CPA with deep expertise in tax-efficient strategies and compliance. He ensures our clients optimize their tax positions legally.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#'
  },
  {
    id: 'lisa-parker',
    name: 'Lisa Parker',
    position: 'Client Relationship Manager',
    bio: 'Lisa coordinates client services and ensures seamless communication between our team and clients. She\'s dedicated to exceptional client experiences.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    linkedin: '#'
  },
  {
    id: 'james-miller',
    name: 'James Miller',
    position: 'Compliance Officer',
    bio: 'James ensures all our operations comply with regulatory requirements. His expertise keeps our firm at the forefront of industry standards.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#'
  }
];

const Team: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4 fw-bold text-dark mb-3">Meet Our Team</h2>
            <p className="lead text-muted fs-5">
              Experienced professionals dedicated to your financial success
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {teamMembers.map((member, index) => (
            <Col lg={4} md={6} key={member.id}>
              <Card className="h-100 border-0 shadow-sm team-member-card">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    alt={member.name}
                    className="team-member-image"
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="team-member-overlay">
                    <div className="d-flex gap-2">
                      {member.linkedin && (
                        <Button
                          variant="light"
                          size="sm"
                          className="rounded-circle"
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Button>
                      )}
                      <Button
                        variant="light"
                        size="sm"
                        className="rounded-circle"
                        onClick={scrollToContact}
                      >
                        <i className="fas fa-envelope"></i>
                      </Button>
                    </div>
                  </div>
                </div>

                <Card.Body className="text-center">
                  <Card.Title className="fw-bold fs-4 mb-1">{member.name}</Card.Title>
                  <Card.Subtitle className="text-primary mb-3">{member.position}</Card.Subtitle>

                  <div className="mb-3">
                    {index === 0 && <Badge bg="primary" className="me-2">CEO</Badge>}
                    {index === 1 && <Badge bg="success" className="me-2">CFA</Badge>}
                    {index === 2 && <Badge bg="info" className="me-2">JD</Badge>}
                    {index === 3 && <Badge bg="warning" className="me-2">CPA</Badge>}
                    <Badge bg="secondary">FINRA</Badge>
                  </div>

                  <Card.Text className="text-muted">
                    {member.bio}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Team Stats */}
        <Row className="bg-white p-4 rounded-3 text-center">
          <Col lg={3} md={6} className="mb-3">
            <h3 className="text-primary fw-bold">25+</h3>
            <p className="text-muted mb-0">Years Combined Experience</p>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <h3 className="text-primary fw-bold">6</h3>
            <p className="text-muted mb-0">Professional Certifications</p>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <h3 className="text-primary fw-bold">100%</h3>
            <p className="text-muted mb-0">Regulatory Compliance</p>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <h3 className="text-primary fw-bold">24/7</h3>
            <p className="text-muted mb-0">Client Support Available</p>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="mt-5 text-center">
          <Col>
            <h3 className="fw-bold mb-3">Ready to Work with Our Experts?</h3>
            <p className="lead text-muted mb-4">
              Schedule a consultation with our experienced team and take the first step toward achieving your financial goals.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToContact}
              className="px-5 py-3"
            >
              Schedule Consultation
            </Button>
          </Col>
        </Row>
      </Container>

      <style>{`
        .team-member-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .team-member-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
        }

        .team-member-image {
          transition: transform 0.3s ease;
        }

        .team-member-card:hover .team-member-image {
          transform: scale(1.05);
        }

        .team-member-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 123, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .team-member-card:hover .team-member-overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Team;