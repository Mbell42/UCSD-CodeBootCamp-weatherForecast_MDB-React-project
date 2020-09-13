//Dependencies
import React from "react";
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Component
function Header () {
      return (
          <MDBRow className="mt-5 mb-3 p-2">
            <MDBCol>
              <h1>Weather Forecast App</h1>
            </MDBCol>
          </MDBRow>  
      );
  }
  
  export default Header;