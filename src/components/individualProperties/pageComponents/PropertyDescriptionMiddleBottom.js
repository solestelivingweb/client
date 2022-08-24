import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";

import Fade from "react-reveal/Fade";

export default class PropertyDescriptionMiddleBottom extends Component {
  render() {
    return (
      <div className="mt-5 pt-5 mb-5 pb-5">
        <MDBContainer>
          <MDBRow>
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
