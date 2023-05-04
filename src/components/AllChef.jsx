/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllChef = () => {
  const [chefInfo, setChefInfo] = useState([]);

  useEffect(() => {
    fetch('https://b7a10-chef-recipe-hunter-server-side-arafataft-arafataft.vercel.app/')
      .then(res => res.json())
      .then(data => setChefInfo(data))
      .catch(error => console.error(error))
  }, [])


  return (

    <div className='container my-5'>
      <h1 className='text-center'>Chef's Corner</h1>
      <Row className='py-4'>
        {chefInfo.map(chef =>
          <Col key={chef.id} lg={4} md={6} className='mb-4'>
            <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', minHeight: '420px' }}>
              <div className='text-center pt-2'>
                <Card.Img variant="top" src={chef.image} className="rounded-circle" style={{ height: '200px', width: '200px' }} />
              </div>
              <Card.Body className='text-center'>
                <Card.Title >{chef.name}</Card.Title>
                <Card.Text>
                  Experience:  {chef.experience}
                </Card.Text>
                <Card.Text>
                  Recipes: {chef.numOfRecipe}
                </Card.Text>
                <Card.Text>
                  Likes: {chef.numOfLike}
                </Card.Text>
              </Card.Body>
              <div className="mt-auto mb-1 text-center">
                <Link to={`/chefDetails/${chef.id}`}><Button variant="primary">View Recipes</Button></Link>
              </div>
            </Card>

          </Col>
        )}

      </Row>

    </div>

  );
};

export default AllChef;