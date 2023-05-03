/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SingleRecipe = ({recipe}) => {
    const {name, ingredients, method, rating }=recipe;

    return (
        
            <Col lg={4} md={6} className='mb-4'>
            <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', minHeight: '500px' }}>
              <Card.Body >
                <Card.Title >Recipe Name: {name}</Card.Title>
                <Card.Text>
                <span className='fw-bold'>Ingredients:</span> {ingredients.map((ingredient,index)=><li key={index}>{ingredient} </li>
                )} 
                </Card.Text>
                <Card.Text>
                <span className='fw-bold'>Cooking Method:</span> {method}
                </Card.Text>
                <Card.Text>
                <span className='fw-bold'>Rating:</span> {rating}
                </Card.Text>
              </Card.Body>
              <div className="mt-auto mb-1 text-center">
                <Button variant="primary">Favorite</Button>
              </div>
            </Card>

          </Col>
       
    );
};

export default SingleRecipe;