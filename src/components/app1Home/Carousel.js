import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdbreact";

import img1 from "../../images/app/app-header.jpg";
import img2 from "../../images/app/app-header-2.jpg";
import img3 from "../../images/app/app-header-3.jpg";
import img4 from "../../images/app/app-header-4.jpg";

function Cont2() {
  return (
    <div className="app1Home-header-inner-content-2">
      <MDBContainer>
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
      </MDBContainer>
    </div>
  );
}

const CarouselPage = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={4}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner className="carImgs">
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100 app1Home-header-img"
              src={img1}
              alt="First slide"
            />
            <MDBMask />
          </MDBView>
          <MDBCarouselCaption className="app1Home-header-inner-content">
            <Cont2></Cont2>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 app1Home-header-img"
              src={img2}
              alt="Second slide"
            />
            <MDBMask />
          </MDBView>
          <MDBCarouselCaption className="app1Home-header-inner-content">
            <Cont2></Cont2>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100 app1Home-header-img"
              src={img3}
              alt="Third slide"
            />
            <MDBMask />
          </MDBView>
          <MDBCarouselCaption className="app1Home-header-inner-content">
            <Cont2></Cont2>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100 app1Home-header-img"
              src={img4}
              alt="Fourth slide"
            />
            <MDBMask />
          </MDBView>
          <MDBCarouselCaption className="app1Home-header-inner-content">
            <Cont2></Cont2>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default CarouselPage;
