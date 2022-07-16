import React, { Component } from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBContainer,
} from "mdbreact";

// 2022
import cl1 from "../../../images/individualProperties/cityline-2022/CityLine Rendering 1.png"
import cl2 from "../../../images/individualProperties/cityline-2022/CityLine Rendering 2.png"
import cl3 from "../../../images/individualProperties/cityline-2022/CityLine Rendering 3.png"
import cl4 from "../../../images/individualProperties/cityline-2022/CityLine Rendering 4.jpg"
import cl5 from "../../../images/individualProperties/cityline-2022/CityLine Rendering 5.jpg"
import cl6 from "../../../images/individualProperties/cityline-2022/CityLine Rendering 6.jpg"
import cl7 from "../../../images/individualProperties/cityline-2022/CityLine Rendering 7.jpg"
import cl8 from "../../../images/individualProperties/cityline-2022/CityLine Rendering 1.png"

const sliderImages = [
    // 2022
    cl1,
    cl2,
    cl3,
    cl4,
    cl5,
    cl6,
    cl7,
    cl8,
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
