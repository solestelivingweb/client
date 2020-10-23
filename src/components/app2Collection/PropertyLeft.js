import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
// import Fade from "react-reveal/Fade";

class PropertyLeft extends Component {
  render() {
    return (
      <div className="propertyLeft">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <div className="imgs-div">
                {/* <Fade> */}
                  <img
                    src={this.props.propertyIMAGE1}
                    className="img-fluid"
                    alt=""
                  />
                {/* </Fade> */}
                {/* <Fade> */}
                  <img
                    src={this.props.propertyIMAGE2}
                    className="img-fluid propertyLeft-absolute-img"
                    id={this.props.idfor2020}
                    alt=""
                  />
                {/* </Fade> */}
              </div>
            </MDBCol>
            <MDBCol className="col-right">
              <div>
                {/* <Fade> */}
                  <h6 className="d-flex justify-content-end text-right">
                    SOLESTE
                  </h6>
                {/* </Fade> */}

                {/* <Fade> */}
                  <h1 className="d-flex justify-content-end fontSize-92 text-right mt-2">
                    {this.props.propertyNAME}
                  </h1>
                {/* </Fade> */}
                {/* --- */}
                {/* <Fade> */}
                  <p className="d-flex justify-content-end">
                    <b>{this.props.propertyNOWLEASING}</b>
                  </p>
                {/* </Fade> */}
                {/* <Fade> */}
                  <p className="d-flex justify-content-end">
                    <b>{this.props.propertyMOVEINDATE}</b>
                  </p>
                {/* </Fade> */}
                {/* --- */}
                {/* <Fade> */}
                  <p className="d-flex justify-content-end fontSize-14 text-right text-dark mt-5">
                    {this.props.propertyDESCRIPTION}
                    <br />
                    {this.props.propertyDESCRIPTION2}
                  </p>
                {/* </Fade> */}
                {/* <Fade> */}
                  <p className="d-flex justify-content-end">
                    <b>{this.props.propertyPRICE}</b>
                  </p>
                {/* </Fade> */}
              </div>
              {/* <Fade> */}
                <Link to={this.props.propertyPAGE}>
                  <MDBBtn
                    color="unique"
                    className="float-right mt-5 mr-0 button-on-white"
                  >
                    LEARN MORE
                  </MDBBtn>
                </Link>
              {/* </Fade> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default PropertyLeft;
