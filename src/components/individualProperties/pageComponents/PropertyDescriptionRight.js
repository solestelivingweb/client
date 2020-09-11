import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

import Fade from "react-reveal/Fade";

export default class PropertyDescriptionRight extends Component {
  state = {
    modal6: false,
    modal7: false
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };
  render() {
    return (
      <div className="propertyDescriptionRight">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <Fade>
                <h1 className="fontSize-92 propertyDescriptionRight-heading">
                  INDIVIDUAL INDULGENCES
                </h1>
              </Fade>
              <Fade>
                <ul>{this.props.propertyComponentListShort}</ul>
              </Fade>
              <Fade>
                <MDBBtn
                  color="unique"
                  className="pr-5 pl-5 mt-5 ml-0"
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
                position="left"
                backdrop={true}
              >
                <MDBModalHeader toggle={this.toggle(8)}>
                  INDIVIDUAL INDULGENCES
                </MDBModalHeader>
                <MDBModalBody>
                  <ul className="text-left ml-4 mr-1 mt-0">
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
            <MDBCol>
              <Fade>
                <img
                  src={this.props.propertyComponentImage}
                  width="90%"
                  className="float-right"
                  alt=""
                />
              </Fade>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
