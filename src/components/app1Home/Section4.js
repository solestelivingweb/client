import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import appsection4img from "../../images/app/app-section4-img.jpg";
import appsection4imgsymbol from "../../images/app/app-section4-symbol.png";

import Fade from "react-reveal/Fade";

function Section4() {
  return (
    <div className="mt-5 mb-5 app-section-4">
      <MDBContainer className="marginClass-1">
        <MDBRow>
          <MDBCol>
            <div className="app-section-4-imgs">
              <Fade>
                <img
                  src={appsection4imgsymbol}
                  className="img-fluid app-section-4-symbol"
                  alt=""
                />
              </Fade>
              <Fade>
                <img
                  src={appsection4img}
                  className="img-fluid z-depth-1"
                  alt=""
                />
              </Fade>
            </div>
          </MDBCol>
          <MDBCol>
            <Fade>
              <h6 className="d-flex justify-content-end text-right">
                SOLESTE LIVING
              </h6>
            </Fade>
            <Fade>
              <h1 className="fontSize-92 d-flex justify-content-end text-right mt-2">
                IN THE HEART
                <br /> OF&nbsp;SOUTH&nbsp;FLORIDA
              </h1>
            </Fade>
            <Fade>
              <p className="d-flex justify-content-end text-right float-right">
                Savor South Florida’s unrivaled culture of fine dining, elegant
                boutiques, and enticing destinations. Whether you check out the
                local art scene at Wynwood, stroll the sidewalk cafes of Coconut
                Grove, party at the dusk-til-dawn clubs in South Beach, shop the
                Design District, or cruise the famous Overseas Highway down to
                the relaxing Florida Keys, South Florida will introduce you to
                an envious lifestyle of unparalleled indulgences.
              </p>
            </Fade>
            <Fade>
              <Link to="/about">
                <MDBBtn
                  color="unique"
                  className="float-right mt-5 button-on-white"
                >
                  LEARN MORE
                </MDBBtn>
              </Link>
            </Fade>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Section4;
