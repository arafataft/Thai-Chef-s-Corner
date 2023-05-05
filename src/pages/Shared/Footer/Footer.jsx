/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Thai Chef Corner</h5>
            <p> ThaiChef Corner is a website dedicated to helping foodies discover new restaurants and chefs in their area.</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@thaichef.com<br />Phone: 012345678910</p>
          </Col>
          <Col md={4}>
            <h5>Join Our Newsletter</h5>
            <p>Sign up to receive updates on the latest restaurant and chef news in your area.</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-light" type="submit">Subscribe</button>
              </div>
            </form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="text-center">&copy; 2023 Thai Chef Corner. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
