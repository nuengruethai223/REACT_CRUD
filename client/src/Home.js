import Axios from "axios";
import {useState} from 'react'
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
  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const [pass, setPass] = useState("");
  const [c_pass, setC_pass] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  

  const submitRegistering = () => {
    Axios.post("http://localhost:3001/registering", {
      F_name: f_name,
      L_name: l_name,
      Position: position,
      Age: age,
      Email: email,
      Country: country,
      Pass: pass,
      C_pass: c_pass,
    }).then(() => {
      alert("successful insert");
    });
  };
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
                    name="f_name"
                    onChange={(e)=>{
                      setF_name(e.target.value)
                    }}
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
                    name="l_name"
                    onChange={(e)=>{
                      setL_name(e.target.value)
                    }}
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
                    name="email"
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }
                  }
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
                    name="position"
                    onChange={(e)=>{
                      setPosition(e.target.value)
                    }
                  }
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
                    name="age"
                    onChange={(e)=>{
                      setAge(e.target.value)
                    }
                  }
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
                    name="country"
                    onChange={(e)=>{
                      setCountry(e.target.value)
                    }}
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
                    name="pass"
                    onChange={(e)=>{
                      setPass(e.target.value)
                    }
                  }
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
                    name="C_pass"
                    onChange={(e)=>{
                      setC_pass(e.target.value)
                    }
                  }
                  />
                </div>
                <Button variant="success" onClick={submitRegistering}>
                  Save
                </Button>{" "}
                <Button variant="outline-danger">Delete</Button>{" "}
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
