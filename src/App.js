//Dependencies
import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";
  //Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchCard from "./components/SearchCard";
import PreviousSearches from "./components/PreviousSearches";
import ForecastHeader from "./components/ForecastHeader";
import ForecastGraphic from "./components/ForecastGraphic";
import ForecastCard from "./components/ForecastCard";


//App
class App extends Component {
  render() {
    return (
      <MDBContainer style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <MDBRow center>
          <MDBCol middle="true" sm="8" className="text-center">
            <Header></Header>
            {/* Main */}
            {/* main row 1 - Search and ForecastHeader row */}
            <MDBRow>
              <MDBCol>
                <SearchCard></SearchCard>
              </MDBCol>
              <MDBCol>
                <ForecastHeader></ForecastHeader>
              </MDBCol>
            </MDBRow>
            {/* End Search and ForecastHeader row */}

            {/* main row 2 - PreviousSearches and ForecastGraphic row */}
            <MDBRow>
              <MDBCol>
                <PreviousSearches></PreviousSearches>
              </MDBCol>
              <MDBCol>
                <ForecastGraphic></ForecastGraphic>
              </MDBCol>
            </MDBRow>
            {/* End PreviousSearches and ForecastGraphic row */}

            <h4>5-day Forecast</h4>
            {/* main row 3 - ForecastCards(x5) row */}
            <MDBRow>
              <MDBCol>
                <ForecastCard></ForecastCard>
              </MDBCol>
              <MDBCol>
                <ForecastCard></ForecastCard>
              </MDBCol>
              <MDBCol>
                <ForecastCard></ForecastCard>
              </MDBCol>
              <MDBCol>
                <ForecastCard></ForecastCard>
              </MDBCol>
              <MDBCol>
                <ForecastCard></ForecastCard>
              </MDBCol>
            </MDBRow>
            {/* End ForecastCards row */}
            {/* End Main */}
            <Footer></Footer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
