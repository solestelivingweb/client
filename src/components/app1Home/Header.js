import React from "react";
import Carousel from "./Carousel";

function Header() {
  return (
    <div className="app1Home-header-bg fade-in-css-anim">
      {/* <MDBContainer>
        <MDBRow>
          <MDBCol>
            <h6 className="text-white text-center">
              SOLESTE IS THE NEW STANDARD IN LUXURY APARTMENT LIVING
            </h6>
            <h1 className="text-center mt-5 text-white">CONTEMPORARY LIVING</h1>
            <div className="text-center mt-5">
              <Link to="/collection">
                <MDBBtn
                  color="unique"
                  className="app1Home-header-btn"
                  size="lg"
                  outline
                >
                  SEE PROJECTS
                </MDBBtn>
              </Link>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
      <Carousel></Carousel>
    </div>
  );
}
export default Header;
