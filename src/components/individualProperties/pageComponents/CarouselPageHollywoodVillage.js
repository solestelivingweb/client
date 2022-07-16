import React, { Component } from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBContainer,
} from "mdbreact";

// 2022
import hv1 from "../../../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 1.jpg"
import hv2 from "../../../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 2.jpg"
import hv3 from "../../../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 3.jpg"
import hv4 from "../../../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 4.jpg"
import hv5 from "../../../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 5.jpg"
import hv6 from "../../../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 6.jpg"
import hv7 from "../../../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 1.jpg"


const sliderImages = [
    // 2022
    hv1,
    hv2,
    hv3,
    hv4,
    hv5,
    hv6,
    hv7
];

class CarouselPageWestgate extends Component {
    render() {
        return (
            <div className="mt-5 pt-5 mb-5 pb-5 carauselPage">
                <MDBContainer>
                    <MDBCarousel
                        activeItem={0}
                        length={7}
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

export default CarouselPageWestgate;
