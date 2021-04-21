// import Axios from 'axios'
// import {usState} from 'react'
import {
  Navbar,
  Nav,
  Button,
  FormControl,
  Form,
  Carousel,
  Card,
  Row,
} from "react-bootstrap";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./custom.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
        <Nav.Link className="fontinBar">สมัครสมาชิก</Nav.Link>
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
          </Carousel.Item>
        </Carousel>

        <Card style={{ width: "2" }}>
          <div className="App container">
            <Nav className="fontHead">Create Account</Nav>
            <hr />
            <div className="infotmation">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="position" className="form-label">
                    Position:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter position"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Age"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter country"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">
                    Password:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirm pass" className="form-label">
                    Confirm Password:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <Button variant="outline-info">Save</Button>{" "}
                <Button variant="outline-danger">Delete</Button>{" "}
                {/* {registering.map((val, key) => {
             return(
               <div className="register card">
                 <div className="card-body text-left">
                   <p className="card-text">Firts Name: {val.f_name}</p>
                   <p className="card-text">Last Name: {val.l_name}</p>
                   <p className="card-text">Position: {val.position}</p>
                   <p className="card-text">Country: {val.country}</p>
                   <p className="card-text">Age: {val.age}</p>
                   <p className="card-text">Current salary: {val.c_salary}</p>
                   <p className="card-text">Expected salary: {val.e_salary}</p>
                 </div>
               </div>
             )
          })} */}
              </form>
            </div>
          </div>
        </Card>
        <Navbar className="navcolor" siz="1">
          <Nav className="fontinBar">good luck</Nav>
        </Navbar>
      </div>
    </div>
  );
}
export default App;
