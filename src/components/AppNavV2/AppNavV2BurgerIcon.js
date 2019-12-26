import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import solestelogo from "../../images/general/soleste-logo.png";

export default ({ open, close, ...props }) => (
  <div className="appnav-v2-burger-icon-div">
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
            <div className="bar1" key="b1" />
            <div className="bar2" key="b2" />
            <div className="bar3" key="b3" />
          </div>
          <Link to="/">
            <img src={solestelogo} className="img-fluid" alt=""></img>
          </Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
);
