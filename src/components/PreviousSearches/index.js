//Dependencies
import React from "react";
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Component
function PreviousSearches () {
      return (
        <MDBContainer className="mt-5 mb-3">
          <MDBRow>
            <MDBCol>
              <h3>Previous Searches</h3>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
  }
  
  export default PreviousSearches;