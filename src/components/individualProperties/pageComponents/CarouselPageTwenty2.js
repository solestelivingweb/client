import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

import twenty2middlebottomimg1 from "../../../images/individualProperties/twenty2/Twenty2-1.jpg";
import twenty2middlebottomimg2 from "../../../images/individualProperties/twenty2/Twenty2-2.jpg";
import twenty2middlebottomimg3 from "../../../images/individualProperties/twenty2/Twenty2-3.jpg";
import twenty2middlebottomimg4 from "../../../images/individualProperties/twenty2/Twenty2-4.jpg";
import twenty2middlebottomimg5 from "../../../images/individualProperties/twenty2/Twenty2-5.jpg";
import twenty2middlebottomimg6 from "../../../images/individualProperties/twenty2/Twenty2-6.jpg";
import twenty2middlebottomimg7 from "../../../images/individualProperties/twenty2/Twenty2-7.jpg";
import twenty2middlebottomimg8 from "../../../images/individualProperties/twenty2/Twenty2-8.jpg";
import twenty2middlebottomimg9 from "../../../images/individualProperties/twenty2/Twenty2-9.jpg";
import twenty2middlebottomimg10 from "../../../images/individualProperties/twenty2/Twenty2-10.jpg";
import twenty2middlebottomimg11 from "../../../images/individualProperties/twenty2/Twenty2-11.jpg";
import twenty2middlebottomimg12 from "../../../images/individualProperties/twenty2/Twenty2-12.jpg";
import twenty2middlebottomimg13 from "../../../images/individualProperties/twenty2/Twenty2-13.jpg";
import twenty2middlebottomimg14 from "../../../images/individualProperties/twenty2/Twenty2-14.jpg";
import twenty2middlebottomimg15 from "../../../images/individualProperties/twenty2/Twenty2-15.jpg";

const sliderImages = [
  twenty2middlebottomimg1,
  twenty2middlebottomimg2,
  twenty2middlebottomimg3,
  twenty2middlebottomimg4,
  twenty2middlebottomimg5,
  twenty2middlebottomimg6,
  twenty2middlebottomimg7,
  twenty2middlebottomimg8,
  twenty2middlebottomimg9,
  twenty2middlebottomimg10,
  twenty2middlebottomimg11,
  twenty2middlebottomimg12,
  twenty2middlebottomimg13,
  twenty2middlebottomimg14,
  twenty2middlebottomimg15
];

class CarouselPageTwenty2 extends Component {
  render() {
    return (
      <div className="mt-5 pt-5 mb-5 pb-5 carauselPage">
        <MDBContainer>
          <MDBCarousel
            activeItem={0}
            length={14}
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

export default CarouselPageTwenty2;
