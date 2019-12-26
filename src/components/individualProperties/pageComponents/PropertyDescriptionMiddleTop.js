import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

import Fade from "react-reveal/Fade";

export default class PropertyDescriptionMiddleTop extends Component {
  render() {
    return (
      <div>
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
                <p className="d-flex justify-content-end">
                  at&nbsp;<b>{`$${this.props.propertyComponentPrice}`}</b>
                </p>
              </Fade>
              <Fade>
                {this.props.propertyExternalWebsite === undefined ? (
                  <Link to="/contact">
                    <MDBBtn
                      color="unique"
                      className="float-right mt-5 button-on-white"
                    >
                      LEASE NOW
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
                      LEASE NOW
                    </MDBBtn>
                  </a>
                )}
              </Fade>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-5 mb-5 pt-5 pb-5">
            <MDBCol>
              <MDBView hover zoom>
                <Fade>
                  <img
                    src={this.props.propertyComponentImage}
                    className="img-fluid"
                    alt=""
                  />
                </Fade>
              </MDBView>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
