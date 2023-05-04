/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import './AllChef.css';

const AllChef = () => {
  const [chefInfo, setChefInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://b7a10-chef-recipe-hunter-server-side-arafataft-arafataft.vercel.app/')
      .then(res => res.json())
      .then(data => {
        setChefInfo(data);
        setLoading(false);
      })
      .catch(error => console.error(error))
  }, [])

  if (loading) {
    return <Spinner animation="border" role="status" className="d-block mx-auto my-5">
             <span className="sr-only"></span>
           </Spinner>;
  }

  return (
    <div className='container my-5'>
      <h1 className='text-center'>The Chef's</h1>
      <Row className='py-4'>
        {chefInfo.map(chef =>
          <Col key={chef.id} lg={4} md={6} className='mb-4'>
            <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', minHeight: '420px' }}>
              <LazyLoad className='text-center pt-2'>
                <Card.Img variant="top" src={chef.image} className="rounded-circle" style={{ height: '200px', width: '200px' }} />
              </LazyLoad>
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
