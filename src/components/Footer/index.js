//Dependencies
import React from "react";
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Component
function Footer () {
      return (
          <MDBRow className="mt-5 mb-3 pt-5 d-flex flex-column justify-content-center text-align-center" style={{ minHeight: "100px", background: "#EEEEEE" }}>
            <MDBCol>
              <h5>Page created by Matthew Bell</h5>
            </MDBCol>
          </MDBRow>
      );
  }
  
  export default Footer;

  // background: #EEEEEE