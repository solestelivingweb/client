import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

import Fade from "react-reveal/Fade";

let isSafari =
  /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

export default class PropertyDescriptionMiddleTop extends Component {
  render() {
    return (
      <div className="PropertyDescriptionMiddleTop">
        <MDBContainer className="pt-5 pb-5">
          <MDBRow>
            <MDBCol>
              <Fade>
                <h1>{this.props.propertyComponentTitle}</h1>
                <p className="mt-4">{this.props.propertyComponentParagraph}</p>
              </Fade>
            </MDBCol>
            <MDBCol>
              {/* --- */}
              <Fade>
                <p className="d-flex justify-content-end mt-3">
                  <b>{this.props.propertyNOWLEASING}</b>
                </p>
              </Fade>
              <Fade>
                <p className="d-flex justify-content-end">
                  <b>{this.props.propertyMOVEINDATE}</b>
                </p>
              </Fade>
              {/* --- */}
              <Fade>
                <p className="d-flex justify-content-end fontSize-14 text-left text-dark mt-5">
                  {this.props.propertyComponentDescription}
                </p>
                {this.props.propertyComponentPrice === "none" ? (
                  <p className="d-flex justify-content-end"></p>
                ) : (
                  <p className="d-flex justify-content-end">
                    at&nbsp;<b>{`$${this.props.propertyComponentPrice}`}</b>
                  </p>
                )}
              </Fade>
              <Fade>
                {this.props.propertyExternalWebsite === undefined ? (
                  <Link to="/contact">
                    <MDBBtn
                      color="unique"
                      className="float-right mt-5 button-on-white"
                    >
                      {this.props.contactUs ? "CONTACT US" : "LEASE NOW"}
                    </MDBBtn>
                  </Link>
                ) : (
                  <a
                    href={this.props.propertyExternalWebsite}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MDBBtn
                      color="unique"
                      className="float-right mt-5 button-on-white"
                    >
                      {this.props.contactUs ? "CONTACT US" : "LEASE NOW"}
                    </MDBBtn>
                  </a>
                )}
              </Fade>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-5 mb-5 pt-5 pb-5">
            <MDBCol>
              <MDBView hover>
                <Fade>
                  {this.props.isVideo === true ? (
                    <div className="embed-responsive embed-responsive-16by9">
                      {isSafari ? (
                        <video
                          type="video/mp4"
                          muted
                          title="embedsPage"
                          className="embed-responsive-item"
                          src={this.props.propertyComponentVideo}
                          preload="yes"
                          allowfullscreen
                          loop
                          autoplay
                          controls="true"
                        ></video>
                      ) : (
                        <video
                          type="video/mp4"
                          title="embedsPage"
                          className="embed-responsive-item"
                          src={this.props.propertyComponentVideo}
                          preload="yes"
                          allowfullscreen
                          loop
                          autoplay
                          controls="true"
                        ></video>
                      )}
                    </div>
                  ) : (
                    <img
                      src={this.props.propertyComponentImage}
                      className="img-fluid"
                      alt=""
                    />
                  )}
                </Fade>
              </MDBView>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
