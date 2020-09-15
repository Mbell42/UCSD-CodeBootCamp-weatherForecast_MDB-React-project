//Dependencies
import React, {useState} from "react";
import {MDBRow, MDBCol } from "mdbreact";

import getForecast from "../../util/api";
//Component
function ForecastHeader () {

  //API Call
  let [responseObj, setResponseObj] = useState({});

  // function getForecast() {
  //   fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  //       "x-rapidapi-key": "**"
	//     }
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //     setResponseObj(response)
  //   })
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

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