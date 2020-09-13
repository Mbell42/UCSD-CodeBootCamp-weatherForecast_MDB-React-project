//Dependencies
import React from "react";
import {MDBRow, MDBCol } from "mdbreact";
//Component
function ForecastHeader () {
      return (
          <MDBRow className="mt-5 mb-3" style={{ minHeight: "60px", background:"#57bd74" }}>
            <MDBCol>
              <h3>Forecast Header Data</h3>
            </MDBCol>
          </MDBRow>
      );
  }
export default ForecastHeader;