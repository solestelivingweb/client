import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
// import Fade from "react-reveal/Fade";

class PropertyRight extends Component {
  render() {
    return (
      <div className="propertyRight">
        <MDBContainer>
          <MDBRow>
            <MDBCol className="col-left">
              {/* <Fade> */}
                <h6>SOLESTE</h6>
              {/* </Fade> */}
              {/* <Fade> */}
                <h1 className="d-flex justify-content-start fontSize-92 text-left mt-2">
                  {this.props.propertyNAME}
                </h1>
              {/* </Fade> */}
              {/* --- */}
              {/* <Fade> */}
                <p className="d-flex justify-content-start">
                  <b>{this.props.propertyNOWLEASING}</b>
                </p>
              {/* </Fade> */}
              {/* <Fade> */}
                <p className="d-flex justify-content-start">
                  <b>{this.props.propertyMOVEINDATE}</b>
                </p>
              {/* </Fade> */}
              {/* --- */}
              {/* <Fade> */}
                <p className="d-flex justify-content-start fontSize-14 text-left text-dark mt-5">
                  {this.props.propertyDESCRIPTION}
                  <br />
                  {this.props.propertyDESCRIPTION2}
                </p>
              {/* </Fade> */}
              <br />
              {/* <Fade> */}
                <p>
                  <b className="d-flex justify-content-start">
                    {this.props.propertyPRICE}
                  </b>
                </p>
              {/* </Fade> */}
              {/* <Fade> */}
                <Link to={this.props.propertyPAGE}>
                  <MDBBtn
                    color="unique"
                    className="float-left mt-5 ml-0 button-on-white"
                  >
                    LEARN MORE
                  </MDBBtn>
                </Link>
              {/* </Fade> */}
            </MDBCol>
            <MDBCol>
              <div className="imgs-div">
                {/* <Fade> */}
                  <img
                    src={this.props.propertyIMAGE2}
                    className="img-fluid propertyRight-absolute-img"
                    alt=""
                  />
                {/* </Fade> */}
                {/* <Fade> */}
                  <img
                    src={this.props.propertyIMAGE1}
                    className="img-fluid"
                    alt=""
                  />
                {/* </Fade> */}
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default PropertyRight;
