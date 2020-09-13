//Dependencies
import React from "react";
import {MDBRow, MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
//Component
function SearchCard () {
  return (
        <MDBCol className="mt-5 mb-3">
          <MDBFormInline className="md-form mr-auto mb-4">
            <MDBRow>
            <MDBCol sm="9" md="9" lg="9" xl="8" className="mr-2">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </MDBCol>
            <MDBCol sm="2" md="2" lg="2" xl="3" className="ml-2">
              <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                Search
              </MDBBtn>
            </MDBCol>
            </MDBRow>
          </MDBFormInline>
        </MDBCol>
  );
}
export default SearchCard;