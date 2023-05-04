/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://source.unsplash.com/random/800x600',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'https://source.unsplash.com/random/800x601',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: 'https://source.unsplash.com/random/800x602',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: 'https://source.unsplash.com/random/800x603',
      alt: 'Image 4',
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
