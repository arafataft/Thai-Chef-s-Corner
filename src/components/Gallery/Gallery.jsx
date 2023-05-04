/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://source.unsplash.com/random/800x600/?Food',
      alt: 'Thai Food',
    },
    {
      id: 2,
      src: 'https://source.unsplash.com/random/800x601/?Food',
      alt: 'Thai Food',
    },
    {
      id: 3,
      src: 'https://source.unsplash.com/random/800x602/?food',
      alt: 'Thai Food',
    },
    {
      id: 4,
      src: 'https://source.unsplash.com/random/800x603/?food',
      alt: 'Thai Food',
    },
    {
      id: 5,
      src: 'https://source.unsplash.com/random/800x604/?food',
      alt: 'Thai Food',
    },
    {
      id: 6,
      src: 'https://source.unsplash.com/random/800x605/?food',
      alt: 'Thai Food',
    },
    {
      id: 7,
      src: 'https://source.unsplash.com/random/800x606/?food',
      alt: 'Thai Food',
    },
    {
      id: 8,
      src: 'https://source.unsplash.com/random/800x607/?food',
      alt: 'Thai Food',
    },
  ];

  return (
    <div className="gallery-section">
      <Container>
        <h2 className="section-title">Our Gallery</h2>
        <Row>
          {images.map((image) => (
            <Col xs={6} md={3} key={image.id} className="mb-4">
              <div className="gallery-image-wrapper">
                <Image src={image.src} alt={image.alt} fluid />
                <div className="gallery-image-overlay">
                  <p className="gallery-image-caption">{image.alt}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
