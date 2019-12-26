import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import solestelogo from "../images/general/soleste-logo.png";
import footerpagetbclogo from "../images/footerPage/footer-page-tbc-logo.png";

import Fade from "react-reveal/Fade";

function ScrollToTop() {
  window.scrollTo(0, 0);
}

function FooterPage() {
  return (
    <div className="FooterPage pt-5">
      <MDBContainer>
        <MDBRow className="pt-5">
          <MDBCol>
            {/* <MDBRow> */}
            <Fade>
              <div className="text-center">
                <img
                  src={solestelogo}
                  className="solestelogo-footer"
                  alt="aligment"
                  onClick={ScrollToTop}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </Fade>
            <MDBRow>
              <Fade>
                <p
                  className="mt-5 text-light fontSize-14 text-center"
                  style={{ marginRight: "15vw", marginLeft: "15vw" }}
                >
                  Soleste is the new standard in luxury apartment living.
                  Offering the style and conveniences of urban life while
                  maintaining the essence of a boutique neighborhood.
                </p>
              </Fade>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        {/* second row */}
        <MDBRow className="mt-5 pb-5 second-row">
          <MDBCol className="mt-5 mb-5 pl-0">
            <div className="text-center">
              <a
                href="http://www.wearebrandcollective.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={footerpagetbclogo}
                  className="img-fluid footerpagetbclogo"
                  alt=""
                />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default FooterPage;
