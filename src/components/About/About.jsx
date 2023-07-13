/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className='pt-5'>
      <Row className="mt-5 pt-5">
        <Col md={6} className='pt-5'>
          <Image src="https://source.unsplash.com/random/800x600/?thai-cuisine" alt="Thai Cuisine" fluid />
        </Col>
        <Col md={6}>
          <h2 className='text-center'>About Thai Cuisine</h2>
          <p>
            Thai cuisine is renowned for its vibrant flavors, aromatic spices, and beautiful presentation. It is a harmonious combination of flavors that balances sweet, sour, salty, and spicy tastes.
          </p>
          <p>
            Thai cuisine has a rich history and is influenced by various cultures, including Chinese, Indian, and Southeast Asian cuisines. It reflects Thailand's geography, climate, and agricultural abundance.
          </p>
          <p>
            Key ingredients used in Thai cooking include lemongrass, galangal, kaffir lime leaves, Thai basil, chili peppers, fish sauce, and coconut milk. These ingredients contribute to the distinctive and robust flavors found in Thai dishes.
          </p>
          <p>
            Traditional Thai cooking techniques involve stir-frying, grilling, steaming, and pounding herbs and spices into pastes. These methods help to preserve the natural flavors and textures of the ingredients.
          </p>
          <p>
            Thai cuisine is not just about the food; it is deeply intertwined with Thai culture and traditions. Meals are often served family-style, encouraging a sense of togetherness and sharing. Thai food is also known for its exquisite presentation, with attention to detail and artistic garnishes.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
