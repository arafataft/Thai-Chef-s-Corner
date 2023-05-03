/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const SingleChef = ({Chef}) => {
    const {name, image, experience, numOfLike, description, numOfRecipe}=Chef;

    return (
        <div className='container my-5'>
    <Card className="shadow border p-3">
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Card.Img variant="top" src={image} style={{ width: '350px', height: '300px' }} />
        </Col>
        <Col md={6}>
          <Card.Body className="d-flex align-items-center">
            <div>
              <Card.Title><h2 className='fw-bold'>{name}</h2></Card.Title>
              <Card.Text>
              <span className='fw-bold'>Description:</span> {description}
              </Card.Text>
              <Card.Text>
               <span className='fw-bold'> Likes:</span>  {numOfLike}
                
              </Card.Text>
              <Card.Text>
                <span className='fw-bold'> Recipes:</span>  {numOfRecipe}
                
              </Card.Text>
              <Card.Text>
                <span className='fw-bold'>Experience:</span>  {experience}
                
              </Card.Text>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>

        </div>
    );
};

export default SingleChef;