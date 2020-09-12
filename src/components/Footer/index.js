//Dependencies
import React from "react";
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Component
function Footer () {
      return (
        <MDBContainer  className="mt-5 mb-3">
          <MDBRow>
            <MDBCol>
              <h4>Page created by Matthew Bell</h4>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
  }
  
  export default Footer;