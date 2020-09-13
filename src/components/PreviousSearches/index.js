//Dependencies
import React from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBListGroupItem } from "mdbreact";
//Component
function PreviousSearches () {
  return (
    <MDBCol className="mt-5 mb-3">
      <MDBRow>
        <MDBCol className="text-center">
          <h5>
            Previous Searches
          </h5>
        </MDBCol>
      </MDBRow>
      <MDBRow>
          <MDBListGroup style={{ width:"22rem" }}>
            <MDBListGroupItem>Placeholder 1</MDBListGroupItem>
            <MDBListGroupItem>Placeholder 2</MDBListGroupItem>
            <MDBListGroupItem>Placeholder 3</MDBListGroupItem>
          </MDBListGroup>
      </MDBRow>
    </MDBCol>
  );
}
export default PreviousSearches;