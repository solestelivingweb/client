import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

import blueLagoonmiddlebottomimg1 from "../../../images/individualProperties/bluelagoon/BlueLagoon-1.jpg";
import blueLagoonmiddlebottomimg2 from "../../../images/individualProperties/bluelagoon/BlueLagoon-2.jpg";
import blueLagoonmiddlebottomimg3 from "../../../images/individualProperties/bluelagoon/BlueLagoon-3.jpg";
import blueLagoonmiddlebottomimg4 from "../../../images/individualProperties/bluelagoon/BlueLagoon-4.jpg";
import blueLagoonmiddlebottomimg5 from "../../../images/individualProperties/bluelagoon/BlueLagoon-5.jpg";
import blueLagoonmiddlebottomimg6 from "../../../images/individualProperties/bluelagoon/BlueLagoon-6.jpg";
import blueLagoonmiddlebottomimg7 from "../../../images/individualProperties/bluelagoon/BlueLagoon-7.jpg";
import blueLagoonmiddlebottomimg8 from "../../../images/individualProperties/bluelagoon/BlueLagoon-8.jpg";
import blueLagoonmiddlebottomimg9 from "../../../images/individualProperties/bluelagoon/BlueLagoon-9.jpg";
import blueLagoonmiddlebottomimg10 from "../../../images/individualProperties/bluelagoon/BlueLagoon-10.jpg";
import blueLagoonmiddlebottomimg11 from "../../../images/individualProperties/bluelagoon/BlueLagoon-11.jpg";
import blueLagoonmiddlebottomimg12 from "../../../images/individualProperties/bluelagoon/BlueLagoon-12.jpg";
import blueLagoonmiddlebottomimg13 from "../../../images/individualProperties/bluelagoon/BlueLagoon-13.jpg";
import blueLagoonmiddlebottomimg14 from "../../../images/individualProperties/bluelagoon/BlueLagoon-14.jpg";
import blueLagoonmiddlebottomimg15 from "../../../images/individualProperties/bluelagoon/BlueLagoon-15.jpg";

const sliderImages = [
  blueLagoonmiddlebottomimg1,
  blueLagoonmiddlebottomimg2,
  blueLagoonmiddlebottomimg3,
  blueLagoonmiddlebottomimg4,
  blueLagoonmiddlebottomimg5,
  blueLagoonmiddlebottomimg6,
  blueLagoonmiddlebottomimg7,
  blueLagoonmiddlebottomimg8,
  blueLagoonmiddlebottomimg9,
  blueLagoonmiddlebottomimg10,
  blueLagoonmiddlebottomimg11,
  blueLagoonmiddlebottomimg12,
  blueLagoonmiddlebottomimg13,
  blueLagoonmiddlebottomimg14,
  blueLagoonmiddlebottomimg15
];

class CarouselPageBlueLagoon extends Component {
  render() {
    return (
      <div className="mt-5 pt-5 mb-5 pb-5">
        <MDBContainer>
          <MDBCarousel
            activeItem={0}
            length={14}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              {/* <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={this.props.propertyComponentImage1}
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem> */}
              {sliderImages.map((img, index) => (
                <MDBCarouselItem itemId={index}>
                  <MDBView>
                    <img className="d-block w-100" src={img} alt="slide" />
                  </MDBView>
                </MDBCarouselItem>
              ))}
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}

export default CarouselPageBlueLagoon;
