import React, { Component } from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBContainer,
} from "mdbreact";

// 2022
import nomirendering from "../../../images/individualProperties/nomi-2022/nomirendering.jpg"
import nomirendering2 from "../../../images/individualProperties/nomi-2022/nomirendering2.jpg"
import nomirendering3 from "../../../images/individualProperties/nomi-2022/nomirendering3.jpg"
import nomirendering4 from "../../../images/individualProperties/nomi-2022/nomirendering4.jpg"
import nomirendering5 from "../../../images/individualProperties/nomi-2022/nomirendering5.jpg"
import nomirendering6 from "../../../images/individualProperties/nomi-2022/nomirendering6.jpg"
import nomirendering7 from "../../../images/individualProperties/nomi-2022/nomirendering7.jpg"
import nomirendering8 from "../../../images/individualProperties/nomi-2022/nomirendering8.jpg"
import nomirendering9 from "../../../images/individualProperties/nomi-2022/nomirendering9.jpg"
import nomirendering10 from "../../../images/individualProperties/nomi-2022/nomirendering10.jpg"
import nomirendering11 from "../../../images/individualProperties/nomi-2022/nomirendering11.jpg"
import nomirendering12 from "../../../images/individualProperties/nomi-2022/nomirendering12.jpg"
import nomirendering13 from "../../../images/individualProperties/nomi-2022/nomirendering13.png"
import nomirendering14 from "../../../images/individualProperties/nomi-2022/nomirendering14.png"
import nomirendering15 from "../../../images/individualProperties/nomi-2022/nomirendering15.png"
import nomirendering16 from "../../../images/individualProperties/nomi-2022/nomirendering16.png"
import nomirendering17 from "../../../images/individualProperties/nomi-2022/nomirendering17.png"
import nomirendering18 from "../../../images/individualProperties/nomi-2022/nomirendering18.png"
import nomirendering19 from "../../../images/individualProperties/nomi-2022/nomirendering19.png"
import nomirendering20 from "../../../images/individualProperties/nomi-2022/nomirendering20.png"
import nomirendering21 from "../../../images/individualProperties/nomi-2022/nomirendering.jpg"

const sliderImages = [
    // 2022
    nomirendering,
    nomirendering2,
    nomirendering3,
    nomirendering4,
    nomirendering5,
    nomirendering6,
    nomirendering7,
    nomirendering8,
    nomirendering9,
    nomirendering10,
    nomirendering11,
    nomirendering12,
    nomirendering13,
    nomirendering14,
    nomirendering15,
    nomirendering16,
    nomirendering17,
    nomirendering18,
    nomirendering19,
    nomirendering20,
    nomirendering21
];

class CarouselPageNomi extends Component {
    render() {
        return (
            <div className="mt-5 pt-5 mb-5 pb-5 carauselPage">
                <MDBContainer>
                    <MDBCarousel
                        activeItem={0}
                        length={20}
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

export default CarouselPageNomi;
