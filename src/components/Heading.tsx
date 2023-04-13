import { Container, Row, Col } from "react-bootstrap";

const Heading = () => (
  <Container className="text-center py-4">
    <Row>
      <Col md={8} className="mx-auto">
        <h1>Welcome to Spacelight</h1>
        <p className="lead text-muted">Discover the best publication that space professionals throughout the world!</p>
      </Col>
    </Row>
  </Container>
);

export default Heading;