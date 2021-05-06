import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import NavbarTem from "./reactstrap_tem/NavbarTem";
import ContantTem from "./reactstrap_tem/home/ContantTem";
import HomepageTem from "./reactstrap_tem/home/HomepageTem";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="">
        {/* <Container className="themed-container" fluid={true}>.container-fluid</Container> */}
        <Container fluid={true} className="bg-dark">
          <Container>
            <NavbarTem />
          </Container>
        </Container>

        <Container fluid={true} className="bg-light">
          <Container>
            <HomepageTem />
          </Container>
        </Container>

        <Container>
          <ContantTem />
        </Container>
      </div>
    );
  }
}
export default App;
