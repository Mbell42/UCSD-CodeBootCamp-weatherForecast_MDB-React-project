//Dependencies
import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";
  //Components
import Header from "./components/Header";
import Footer from "./components/Footer";


//App
class App extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow center style={{ height: "100vh" }}>
          <MDBCol middle="true" sm="8" className="text-center">
            <Header></Header>
            {/* Main */}
            {/* End Main */}

            <Footer></Footer>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
