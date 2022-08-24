import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

import blueLagoonmiddlebottomimg1 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-1-min.jpg";
import blueLagoonmiddlebottomimg2 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-2-min.jpg";
import blueLagoonmiddlebottomimg3 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-3-min.jpg";
import blueLagoonmiddlebottomimg4 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-4-min.jpg";
import blueLagoonmiddlebottomimg5 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-5-min.jpg";
import blueLagoonmiddlebottomimg6 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-6-min.jpg";
import blueLagoonmiddlebottomimg7 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-7-min.jpg";
import blueLagoonmiddlebottomimg8 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-8-min.jpg";
import blueLagoonmiddlebottomimg9 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-9-min.jpg";
import blueLagoonmiddlebottomimg10 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-10-min.jpg";
import blueLagoonmiddlebottomimg11 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-11-min.jpg";
import blueLagoonmiddlebottomimg12 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-12-min.jpg";
import blueLagoonmiddlebottomimg13 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-13-min.jpg";
import blueLagoonmiddlebottomimg14 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-14-min.jpg";
import blueLagoonmiddlebottomimg15 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-15-min.jpg";
import blueLagoonmiddlebottomimg16 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-16-min.jpg";
import blueLagoonmiddlebottomimg17 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-17-min.jpg";
import blueLagoonmiddlebottomimg18 from "../../../images/individualProperties/bluelagoon2/BlueLagoon-18-min.jpg";

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
  blueLagoonmiddlebottomimg15,
  blueLagoonmiddlebottomimg16,
  blueLagoonmiddlebottomimg17,
  blueLagoonmiddlebottomimg18,
];

class CarouselPageBlueLagoon extends Component {
  render() {
    return (
      <div className="mt-5 pt-5 mb-5 pb-5 carauselPage">
        <MDBContainer>
          <MDBCarousel
            activeItem={0}
            length={17}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
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
                <MDBCarouselItem itemId={index} key={index}>
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
