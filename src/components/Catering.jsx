/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Catering = () => {
  return (
    <div className="catering-section my-5 py-5">
      <Container>
        <Row>
          <Col md={6} className="my-auto">
            <h2 className="section-title mb-4">Catering Services</h2>
            <p className="mb-4">
              We offer professional catering services for all kinds of events, big or small. From weddings to corporate events, we can provide delicious and authentic Thai cuisine to impress your guests.
            </p>
            <Button variant="secondary">Learn More</Button>
          </Col>
          <Col md={6}>
            <img src="https://source.unsplash.com/random/800x600/?catering" alt="Catering" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Catering;
