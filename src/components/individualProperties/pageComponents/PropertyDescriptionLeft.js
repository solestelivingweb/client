import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

import Fade from "react-reveal/Fade";

export default class PropertyDescriptionLeft extends Component {
  state = {
    modal6: false,
    modal7: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <div className="propertyDescriptionLeft">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <Fade>
                <img
                  src={this.props.propertyComponentImage}
                  width="90%"
                  alt=""
                />
              </Fade>
            </MDBCol>
            <MDBCol>
              <Fade>
                <h1 className="fontSize-92 propertyDescriptionLeft-heading text-right">
                  COLLECTIVE LUXURIES
                </h1>
              </Fade>
              <Fade>
                <ul className="text-right">
                  {this.props.propertyComponentListShort}
                </ul>
              </Fade>
              <Fade>
                <MDBBtn
                  color="unique"
                  className="float-right pr-5 pl-5 mt-5 mr-0"
                  onClick={this.toggle(8)}
                >
                  SEE ALL
                </MDBBtn>
              </Fade>
              {/* Modal */}
              <MDBModal
                isOpen={this.state.modal8}
                toggle={this.toggle(8)}
                fullHeight
                position="right"
                backdrop={true}
              >
                <MDBModalHeader toggle={this.toggle(8)}>
                  COLLECTIVE LUXURIES
                </MDBModalHeader>
                <MDBModalBody>
                  <ul className="text-right mr-4 ml-1 mt-0">
                    {this.props.propertyComponentListLong}
                  </ul>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="unique" onClick={this.toggle(8)}>
                    Close
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
              {/* Modal */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
