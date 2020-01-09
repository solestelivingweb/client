import React from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";
import FooterPage from "../components/FooterPage";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function ParkView() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soleste Living | Park View</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <EachPageHeader
        pageBACKGROUND="individual-property-parkview-header-bg"
        pageNAME="PARK VIEW"
      ></EachPageHeader>
      <MDBContainer>
        <MDBRow>
          <MDBCol className="text-center m-5 p-5">
            <img
              src="https://static.wixstatic.com/media/7f6c44_d6ea4d6aedf7488a80dcda3bd07cee6e~mv2.jpg/v1/fill/w_488,h_245,al_c,q_80,usm_0.66_1.00_0.01/7f6c44_d6ea4d6aedf7488a80dcda3bd07cee6e~mv2.webp"
              alt="thumbnail"
              className="img-thumbnail m-5 p-5"
            />
            <h1 className="text-light">Soleste Park View</h1>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <FooterPage></FooterPage>
    </div>
  );
}
