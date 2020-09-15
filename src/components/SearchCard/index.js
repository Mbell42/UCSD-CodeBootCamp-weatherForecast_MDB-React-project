//Dependencies
import React from "react";
import {MDBRow, MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
//Component
function SearchCard () {
  return (
        <MDBCol className="mt-5 mb-3" style={{ minHeight: "60px", background:"#57bd74" }}>
          <MDBFormInline className="md-form mr-auto mb-4">
            <MDBRow>
              <MDBCol sm="6" md="6" lg="6" xl="8" className="mr-2 p-1">
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