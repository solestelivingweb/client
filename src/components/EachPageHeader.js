import React, { Component } from "react";
import { MDBContainer, MDBCol } from "mdbreact";
import Fade from "react-reveal/Fade";

class EachPageHeader extends Component {
  render() {
    return (
      <div className={`fade-in-css-anim ${this.props.pageBACKGROUND}`}>
        <MDBContainer>
          <MDBCol>
            <Fade>
              <h1
                className="text-center text-white EachPage-header-h1 fontSize-92"
                style={this.props.style}
              >
                {this.props.pageNAME}
              </h1>
            </Fade>
          </MDBCol>
        </MDBContainer>
      </div>
    );
  }
}
export default EachPageHeader;
