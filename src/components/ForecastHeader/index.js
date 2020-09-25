//Dependencies
import React, {useState} from "react";
import {MDBRow, MDBCol } from "mdbreact";

import getForecast from "../../util/api";
//Component
function ForecastHeader () {

  //API Call
  let [responseObj, setResponseObj] = useState({});

  getForecast();

  //JSX
  return (
    <MDBRow className="mt-5 mb-3" style={{ minHeight: "60px", background:"#57bd74" }}>
      <MDBCol>
        <h3>Current Weather Conditions</h3>
        <div>
          {JSON.stringify(responseObj)}
        </div>
        <button onClick={getForecast}>Get Forecast</button>
      </MDBCol>
    </MDBRow>
  );
  }
export default ForecastHeader;