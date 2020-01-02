import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import app3Aboutsolestelogo from "../../images/app3/app3About-soleste-logo.png";
import app3Aboutimg from "../../images/app3/app3About-img.jpg";

import Fade from "react-reveal/Fade";

export default function Section1() {
  return (
    <div>
      <div className="mt-5 mb-5 pt-5 pb-5 app3About-section1-div">
        <MDBContainer>
          <MDBRow>
            <MDBCol className="mt-5">
              <Fade>
                <h1>
                  SOLESTE <br /> IS THE NEW STANDARD
                </h1>
              </Fade>
              <Fade>
                <p>
                  Soleste is the new standard in luxury apartment living
                  delivered by The Estate Companies. We pride ourselves in
                  offering exceptional community-style living for the modern
                  city dweller. With every building designed to strike the
                  perfect balance between style and functionality, it's no
                  wonder that our communities stand out in the residential
                  spectrum of South Florida. In addition to creating beautiful
                  living spaces, we are also committed to delivering the utmost
                  care and attention to detail to each of our residents because
                  we believe that coming home every day should feel effortless.
                  We are passionate about creating a welcoming environment for
                  our residents to flourish in. At Soleste, you're certain to
                  find a home you can thrive in with the perfect mix of
                  contemporary living and traditional charm.
                </p>
              </Fade>
            </MDBCol>
            <MDBCol>
              <div className="float-right">
                <Fade>
                  <img
                    src={app3Aboutimg}
                    className="img-fluid z-depth-1"
                    alt=""
                  />
                </Fade>
                <Fade>
                  <img
                    src={app3Aboutsolestelogo}
                    className="img-fluid app3About-section1-absolute-img"
                    alt=""
                  />
                </Fade>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="app3About-section1-div-mobile">
        <MDBContainer>
          <MDBRow>
            <MDBCol className="mt-5 pt-5">
              <Fade>
                <h1 className="text-center">
                  Soleste <br /> is The New Standard
                </h1>
              </Fade>
              <Fade>
                <p className="text-center mt-5">
                  SOLESTE is the new standard in luxury apartment living.
                  Offering the style and conveniences of urban life while
                  maintaining the essence of a boutique neighborhood. Revel in
                  the stunning architecture and innovative interior designs
                  curated with elegance, comfort and satisfaction in mind. Work
                  from home in our specially designed live-work residences or be
                  inspired by the modern, chic décor each morning and relax in a
                  private cabana in the evening. At SOLESTE, you'll find the
                  perfect combination of contemporary living with traditional
                  charm.
                </p>
              </Fade>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <div className="float-right mt-5 pt-5">
                <Fade>
                  <img
                    src={app3Aboutimg}
                    className="img-fluid z-depth-1"
                    alt=""
                  />
                </Fade>
                <Fade>
                  <img
                    src={app3Aboutsolestelogo}
                    className="img-fluid app3About-section1-absolute-img"
                    alt=""
                  />
                </Fade>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}
