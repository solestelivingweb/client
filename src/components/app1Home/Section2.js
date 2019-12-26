import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import appsection2img from "../../images/app/app-section2-img.jpg";
import appsection2symbol from "../../images/app/app-section2-symbol.png";

import Fade from "react-reveal/Fade";

class Section2 extends Component {
  render() {
    return (
      <div className="mt-5 mb-5 app-section-2">
        <MDBContainer className="marginClass-1">
          <MDBRow>
            <MDBCol>
              <Fade>
                <h1 className="fontSize-92 mt-5">
                  LUXURY <br /> IS A LIFESTYLE
                </h1>
              </Fade>
              <Fade>
                <p className="fontSize-14 mt-5">
                  Revel in the stunning architecture and innovated interior
                  designs curated with elegance, comfort, and satisfaction in
                  mind. At Soleste, you’ll find the perfect combination of
                  contemporary living with traditional charm.
                </p>
              </Fade>
              <Fade>
                <Link to="/about">
                  <MDBBtn color="unique" className="mt-5 ml-0 button-on-white">
                    LEARN MORE
                  </MDBBtn>
                </Link>
              </Fade>
            </MDBCol>
            <MDBCol>
              <div className="app-section-2-imgs">
                <Fade>
                  <img
                    className="app-section-2-symbol"
                    src={appsection2symbol}
                    alt=""
                  ></img>
                </Fade>
                <Fade>
                  <img
                    src={appsection2img}
                    className="img-fluid z-depth-1"
                    alt=""
                  />
                </Fade>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default Section2;
