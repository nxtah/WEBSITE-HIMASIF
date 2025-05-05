import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  Alert, 
  Navbar, 
  Nav, 
  Form, 
  FormControl 
} from 'react-bootstrap';

const BootstrapDemo = () => {
  return (
    <Container className="mt-4">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">HIMASIF</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Alert */}
      <Alert variant="success" className="mb-4">
        <Alert.Heading>React Bootstrap is ready!</Alert.Heading>
        <p>
          You've successfully set up React Bootstrap in your project. Now you can use all the
          components provided by the library.
        </p>
      </Alert>

      {/* Cards */}
      <h2 className="mb-3">Featured Content</h2>
      <Row>
        {[
          { title: 'Events', text: 'Check out our upcoming events and activities.' },
          { title: 'News', text: 'Latest news and updates from HIMASIF.' },
          { title: 'Projects', text: 'Explore our current and past projects.' }
        ].map((item, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`https://picsum.photos/id/${idx + 10}/300/200`} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Button Variants */}
      <h2 className="mb-3">Button Styles</h2>
      <div className="mb-4">
        {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(
          (variant, idx) => (
            <Button
              key={idx}
              variant={variant}
              className="me-2 mb-2"
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          )
        )}
      </div>

      {/* Grid System Demo */}
      <h2 className="mb-3">Grid System</h2>
      <Row className="mb-4">
        <Col md={6} className="mb-2">
          <div className="p-3 bg-light border">Column 1 (md=6)</div>
        </Col>
        <Col md={6} className="mb-2">
          <div className="p-3 bg-light border">Column 2 (md=6)</div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4} className="mb-2">
          <div className="p-3 bg-light border">Column 1 (md=4)</div>
        </Col>
        <Col md={4} className="mb-2">
          <div className="p-3 bg-light border">Column 2 (md=4)</div>
        </Col>
        <Col md={4} className="mb-2">
          <div className="p-3 bg-light border">Column 3 (md=4)</div>
        </Col>
      </Row>
    </Container>
  );
};

export default BootstrapDemo;
