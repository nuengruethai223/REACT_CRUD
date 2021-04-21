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
  Card,
  Row,
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
        <Nav.Link href="/" className="fontBrand">ART@FOOD</Nav.Link>
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
        <Card>

        </Card>
        <Navbar className="navcolor" siz="1">
          <Nav className="fontinBar">good luck</Nav>
        </Navbar>
      </div>
    </div>
  );
}
export default App;
