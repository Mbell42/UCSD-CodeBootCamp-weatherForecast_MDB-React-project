//Dependencies
import React from "react";
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Component
function SearchCard () {
      return (
        <MDBContainer className="mt-5 mb-3">
          <MDBRow>
            <MDBCol>
              <h3>Search Here...</h3>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
  }
  
  export default SearchCard;