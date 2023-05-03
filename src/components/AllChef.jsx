/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const AllChef = () => {
  const [chefInfo, setChefInfo]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/')
    .then(res=>res.json())
    .then(data=>setChefInfo(data))
    .catch(error=>console.error(error))
  },[])

  

  return (
    // <div className='container'>
    //   <Row xs={1} md={2} className="g-4">
    //     {Array.from({ length: 4 }).map((_, idx) => (
    //       <Col>
    //         <Card>
    //           <Card.Img variant="top" src="holder.js/100px160" />
    //           <Card.Body>
    //             <Card.Title>Card title</Card.Title>
    //             <Card.Text>
    //               This is a longer card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </div>

    <div className='container'>

    {/* <Row>
      <Col lg={4}>
        <Card shadow>
          <Card.Img variant="top" src="https://img.freepik.com/free-photo/male-chef-with-apron-cooking-pasta_23-2148763166.jpg?w=900&t=st=1683082743~exp=1683083343~hmac=efb051793047276adf97cc0ae5209088e3b774f812e3c9f862870a9503f37a83" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card content.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4}>
        <Card shadow>
          <Card.Img variant="top" src="image2.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card content.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4}>
        <Card shadow>
          <Card.Img variant="top" src="image3.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card content.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row> */}

<Row>
      <Col lg={4}>
        <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', minHeight: '420px' }}>
          <div className='text-center pt-2'>
          <Card.Img variant="top" src="https://img.freepik.com/free-photo/japanese-woman-posing-restaurant_23-2149319388.jpg" className="rounded-circle" style={{ height: '200px', width: '200px' }} />
          </div>
          <Card.Body>
            <Card.Title className='text-center'>Card Title</Card.Title>
            <Card.Text>
              Experience:
            </Card.Text>
            <Card.Text>
              Recipes:
            </Card.Text>
            <Card.Text>
              Likes:
            </Card.Text>
          </Card.Body>
          <div className="mt-auto mb-1 text-center">
            <Button variant="primary">Go somewhere</Button>
          </div>
        </Card>
      </Col>
      <Col lg={4}>
        <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', minHeight: '420px' }}>
          <div className='text-center pt-2'>
          <Card.Img variant="top" src="https://img.freepik.com/free-photo/japanese-woman-posing-restaurant_23-2149319388.jpg" className="rounded-circle" style={{ height: '200px', width: '200px' }} />
          </div>
          <Card.Body>
            <Card.Title className='text-center'>Card Title</Card.Title>
            <Card.Text>
              Experience:
            </Card.Text>
            <Card.Text>
              Recipes:
            </Card.Text>
            <Card.Text>
              Likes:
            </Card.Text>
          </Card.Body>
          <div className="mt-auto mb-1 text-center">
            <Button variant="primary">Go somewhere</Button>
          </div>
        </Card>
      </Col>
      <Col lg={4}>
        <Card style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', minHeight: '420px' }}>
          <div className='text-center pt-2'>
          <Card.Img variant="top" src="https://img.freepik.com/free-photo/japanese-woman-posing-restaurant_23-2149319388.jpg" className="rounded-circle" style={{ height: '200px', width: '200px' }} />
          </div>
          <Card.Body>
            <Card.Title className='text-center'>Card Title</Card.Title>
            <Card.Text>
              Experience:
            </Card.Text>
            <Card.Text>
              Recipes:
            </Card.Text>
            <Card.Text>
              Likes:
            </Card.Text>
          </Card.Body>
          <div className="mt-auto mb-1 text-center">
            <Button variant="primary">Go somewhere</Button>
          </div>
        </Card>
      </Col>
      
    </Row>

    </div>

  );
};

export default AllChef;