//Dependencies
import React from "react";
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Component
function Footer () {
      return (
        <MDBContainer  className="mt-5 mb-3 p-1 d-flex flex-column justify-content-center text-align-center" style={{ minHeight: "100px" }}>
          <MDBRow>
            <MDBCol>
              <h5>Page created by Matthew Bell</h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
  }
  
  export default Footer;