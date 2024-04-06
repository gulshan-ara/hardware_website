import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Career = () => {
  return (
    <Container>
      <h2 className="mt-5 mb-4">Open job positions</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <Card.Body>
              <Card.Title>Job Title 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
              <Button variant="primary" href="#">Apply</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <Card.Body>
              <Card.Title>Job Title 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
              <Button variant="primary" href="#">Apply</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <Card.Body>
              <Card.Title>Job Title 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
              <Button variant="primary" href="#">Apply</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <Card.Body>
              <Card.Title>Job Title 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
              <Button variant="primary" href="#">Apply</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Career;
