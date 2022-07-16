import React, { Component } from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBContainer,
} from "mdbreact";

// 2022
import wg1 from "../../../images/individualProperties/westage-2022/SWG Rending 9.jpg"
import wg2 from "../../../images/individualProperties/westage-2022/SWG Rending 8.jpg"
import wg3 from "../../../images/individualProperties/westage-2022/SWG Rending 7.jpg"
import wg4 from "../../../images/individualProperties/westage-2022/SWG Rending 6.jpg"
import wg5 from "../../../images/individualProperties/westage-2022/SWG Rending 5.jpg"
import wg6 from "../../../images/individualProperties/westage-2022/SWG Rending 4.jpg"
import wg7 from "../../../images/individualProperties/westage-2022/SWG Rending 3.jpg"
import wg8 from "../../../images/individualProperties/westage-2022/SWG Rending 2.jpg"
import wg9 from "../../../images/individualProperties/westage-2022/SWG Rending 1.jpg"
import wg10 from "../../../images/individualProperties/westage-2022/SWG Rending 9.jpg"

const sliderImages = [
    // 2022
    wg1,
    wg2,
    wg3,
    wg4,
    wg5,
    wg6,
    wg7,
    wg8,
    wg9,
    wg10
];

class CarouselPageWestgate extends Component {
    render() {
        return (
            <div className="mt-5 pt-5 mb-5 pb-5 carauselPage">
                <MDBContainer>
                    <MDBCarousel
                        activeItem={0}
                        length={9}
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
