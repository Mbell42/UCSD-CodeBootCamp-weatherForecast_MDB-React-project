//Dependencies
import React from "react";
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Component
function Header () {
      return (
        <MDBContainer  className="mt-5 mb-3">
          <MDBRow>
            <MDBCol>
              <h1>Weather Forecast App</h1>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
  }
  
  export default Header;