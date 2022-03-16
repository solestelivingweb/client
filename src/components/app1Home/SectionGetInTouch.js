import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import Fade from "react-reveal/Fade";

function SectionGetInTouch() {
  return (
    <Fade>
      <div className="section-get-in-touch-div">
        <MDBContainer className="marginClass-1">
          <MDBRow>
            <MDBCol className="mt-5">
              <Fade>
                <h1 className="mt-5">GET IN TOUCH</h1>
              </Fade>
              <Fade>
                <p className="text-light mt-5" style={{}}>
                  Looking to learn more about our lush properties and amenities?
                  Let's talk about it. We are here to help you discover what it
                  means to live the Soleste way.
                </p>
              </Fade>
              <Fade>
                <Link to="/contact">
                  <MDBBtn color="unique" className="mt-5">
                    CONTACT US
                  </MDBBtn>
                </Link>
              </Fade>
            </MDBCol>
            <MDBCol className="mob-disp-none"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Fade>
  );
}
export default SectionGetInTouch;
