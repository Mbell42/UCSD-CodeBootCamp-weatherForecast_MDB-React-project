//Dependencies
import React from "react";
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Component
function ForecastHeader () {
      return (
        <MDBContainer className="mt-5 mb-3">
          <MDBRow>
            <MDBCol>
              <h3>Forecast Header Data</h3>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
  }
  
  export default ForecastHeader;