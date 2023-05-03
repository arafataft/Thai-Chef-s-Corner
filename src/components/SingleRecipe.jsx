/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleRecipe = ({recipe}) => {
    const {name, ingredients, method, rating }=recipe;

    const notify = () => toast("The Recipe is your Favorite");
    const handleClick=(e)=>{
      notify();
      e.currentTarget.disabled = true;
    };

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
                <Button onClick={handleClick} variant="primary">Favorite</Button>
              </div>
            </Card>

          </Col>
       
    );
};

export default SingleRecipe;