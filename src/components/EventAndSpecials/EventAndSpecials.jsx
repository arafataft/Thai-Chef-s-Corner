import { Container, Row, Col, Card } from 'react-bootstrap';

const EventAndSpecials = () => {
  const eventsAndSpecials = [
    {
      name: 'Thai Food Festival',
      date: 'August 15-20, 2023',
      location: 'Thai Chef\'s Corner',
      description: 'Join us for a week-long celebration of Thai cuisine! Experience an array of authentic dishes, live performances, and cultural activities.',
    },
    {
      name: 'Weekend Special: Pad Thai Delight',
      date: 'Every Saturday and Sunday',
      location: 'Thai Chef\'s Corner',
      description: 'Indulge in our special Pad Thai Delight every weekend. Savor the perfect balance of stir-fried rice noodles, shrimp, tofu, and tangy tamarind sauce.',
    },
  ];

  return (
    <Container className='mt-5'>
      <h2 className='text-center pb-2'>Events and Specials</h2>
      <Row>
        {eventsAndSpecials.map((event, index) => (
          <Col key={index} md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                <Card.Text>{event.location}</Card.Text>
                <Card.Text>{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventAndSpecials;
