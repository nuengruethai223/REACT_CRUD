// import Axios from 'axios'
// import {usState} from 'react'
import {
  Navbar,
  Nav,
  Button,
  FormControl,
  Form,
  Carousel,
  Spinner,
  CardDeck,
  Card,
  CardColumns,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./custom.css";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // const [registering, setRegiter] = usState([]);
  // const getRegister = () =>{
  //   Axios.get('http://localhost:3001/registering').then((Response) => {
  //     setRegiter(Response.data);

  //   });
  //}
  return (
    <div>
      <Navbar className="navcolor">
        <Nav.Link href="/" className="fontBrand">
          ART@FOOD
        </Nav.Link>
        <Nav className="mr-auto"></Nav>
        <Nav.Link href="login" className="fontinBar">
          เข้าสู่ระบบ
        </Nav.Link>
        <Nav.Link href="home" className="fontinBar">
          สมัครสมาชิก
        </Nav.Link>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              width="800 auto"
              height="500 auto"
              className="d-block w-100 h-10"
              src={
                "image/ice-cream-5928048_1920.jpg?text=First slide&bg=20232a"
              }
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              width="800 auto"
              height="500 auto"
              className="d-block w-100 h-10"
              src={"image/pancakes-5989136_1280.jpg?text=First slide&bg=20232a"}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="800 auto"
              height="500 auto"
              className="d-block w-100 h-10"
              src={"image/cooking-5880136_1280.jpg?text=First slide&bg=20232a"}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <card>
          <Row>
            <Col md="2">
              <Card border="warning" style={{ width: "16rem" }}>
                <Card.Header>
                  <Card.Title>Warning Card Title</Card.Title>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={{ span: 8, offset: 1 }}>
              <CardDeck>
                <Card>
                  <Card.Img
                    variant="top"
                    src="image/pancakes-5989136_1280.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img
                    variant="top"
                    src="image/es-doger.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img
                    variant="top"
                    src="image/4DQpjUtzLUwmJZZJ3XdXpnxvgejMYhiZu1QcXTpCVtcY.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </CardDeck>
              <CardColumns>
                <Card>
                  <Card.Img
                    variant="top"
                    src="image/a34601030d398be10dfd064d6d33032f.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <blockquote className="blockquote mb-0 card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </Card>
                <Card>
                  <Card.Img variant="top" src="image/65-Dessert-Italy-10.jpg" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card className="cardsmall">
                  <blockquote className="blockquote mb-0 card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </Card>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                    <Card.Text>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img src="image/1B9CFCE0C55A484B86F8E88FF218D7EE.jpg" />
                </Card>
                <Card className="text-right">
                  <blockquote className="blockquote mb-0 card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                    <Card.Text>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <Card style={({ width: "12rem" }, { height: "25rem" })}>
                <Card.Body className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/um8T29MP-_o"
                    allowfullscreen
                    // use after watch?v=
                  ></iframe>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
        </card>
        <Navbar className="navcolor" siz="1">
          <Nav className="fontinBar">good luck</Nav>
        </Navbar>
      </div>
    </div>
  );
}
export default App;
