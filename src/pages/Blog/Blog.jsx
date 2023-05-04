/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Tell us the differences between uncontrolled and controlled components.',
      answer: "Uncontrolled components in React have their values determined by the user's input and are managed by the DOM, while controlled components have their values managed by React through state. Controlled components provide a more predictable and maintainable way to manage form data, while uncontrolled components can be simpler to set up and use, but are less predictable and can be more difficult to maintain over time.",
    },
    {
      id: 2,
      title: 'How to validate React props using PropTypes',
      answer: 'To validate React props using PropTypes, we need to import the PropTypes library, define the propTypes property on the component, specify the propTypes for each prop using the available validators, and validate the props passed to the component. This helps ensure that the component receives the expected data types for its props and can prevent bugs and improve code maintainability.',
    },
    {
      id: 3,
      title: 'Tell us the difference between nodejs and express js.',
      answer: "Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside the browser. It is used for building server-side applications, handling tasks such as reading and writing files, creating and listening to network sockets, and handling HTTP requests and responses.   Express.js is a web application framework for Node.js that provides a set of tools and features to simplify building web applications on top of Node.js. It provides routing, middleware, and view rendering, and handles HTTP requests and responses. It is designed to make it easier for developers to build web applications by providing a simpler and more concise API for handling HTTP requests and responses.",
    },
    {
      id: 4,
      title: 'What is a custom hook, and why will you create a custom hook?',
      answer: "Custom hooks are reusable functions in React that start with the word ' and can contain stateful logic and other hooks. They allow us to encapsulate complex logic and state management in one place and reuse it across our application wherever it's needed. Custom hooks can be used to simplify components, avoid code duplication, and improve the overall maintainability of our code. By creating a custom hook, we can keep our components focused on their specific tasks and reduce the amount of repetitive code that needs to be written. We would create a custom hook to reuse a set of logic that is currently used in multiple components or to abstract away complex logic from the components that use it. Custom hooks allow us to keep our components focused on their specific tasks, making them easier to understand, maintain, and test. By creating a custom hook, we can reduce code duplication and improve the overall maintainability of our code. Custom hooks are useful when we have several components that need to perform the same task, such as fetching data from an API or handling loading and error states.",
    },
  ];

  return (
    <div className="blog-section">
      <Container>
      <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="section-title">Q&A Blog </h2>
          <Button variant="primary">View All</Button>
        </div>
        <Row>
          {blogPosts.map((post) => (
            <Col md={4} key={post.id} className="mb-4" height={500}>
              <Card style={{minHeight: '100%'}}>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.answer}</Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
