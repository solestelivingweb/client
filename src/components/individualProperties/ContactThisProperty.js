import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import faceLogo from "../../images/individualProperties/faceLogo.png";
import instLogo from "../../images/individualProperties/instLogo.png";
import pinLogo from "../../images/individualProperties/pinLogo.png";

import Fade from "react-reveal/Fade";

export default class ContactThisProperty extends Component {
  render() {
    return (
      <div className="section-construction-process-div">
        <MDBRow className="heightRow">
          <MDBCol className="mt-5">
            <MDBContainer>
              <MDBRow>
                <MDBCol className="mr-5 ml-5 pr-5 pl-5">
                  <div className="contact-div">
                    <Fade>
                      <h1 className="mt-5">
                        CONTACT <br /> {`SOLESTE ${this.props.propertyNAME}`}
                      </h1>
                    </Fade>
                    <Fade>
                      <p className="text-light mt-5">
                        {this.props.propertyADDRESS}
                      </p>
                    </Fade>
                    <Fade>
                      <div className="pl-0 mb-5">
                        {this.props.isSocial ? (
                          <div>
                            <a
                              href={this.props.instagramLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                className="mr-3 social-row-button-white-shadow"
                                src={instLogo}
                                alt=""
                              />
                            </a>
                            <a
                              href={this.props.facebookLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={faceLogo}
                                className="social-row-button-white-shadow"
                                alt=""
                              />
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Fade>
                    <Fade>
                      <a
                        href={this.props.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MDBBtn color="unique" className="pr-5 pl-5">
                          {this.props.contactUs ? "CONTACT US" : "LEASE NOW"}
                        </MDBBtn>
                      </a>
                    </Fade>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
          <MDBCol>
            <a
              href={this.props.googlemap}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={this.props.mapPhotoClass}></div>
            </a>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
