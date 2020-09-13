//Dependencies
import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import ForecastCard from "../ForecastCard";
//Component
function SearchCard () {
      return (
          <MDBRow className="mt-5 mb-3">
            <MDBCol>
              <MDBFormInline className="md-form">
                <MDBIcon icon="search" />
                  <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search Here" aria-label="Search" />
              </MDBFormInline>
            </MDBCol>
          </MDBRow>
      );
  }
export default SearchCard;