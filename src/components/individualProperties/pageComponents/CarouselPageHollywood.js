import React, { Component } from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBContainer,
} from "mdbreact";

// 2022
import hbci1 from "../../../images/individualProperties/hollywood-2022/Soleste Hollywood Rendering 9.jpg"
import hbci2 from "../../../images/individualProperties/hollywood-2022/Soleste Hollywood Rendering 8.jpg"
import hbci3 from "../../../images/individualProperties/hollywood-2022/Soleste Hollywood Rendering 7.jpg"
import hbci4 from "../../../images/individualProperties/hollywood-2022/Soleste Hollywood Rendering 6.jpg"
import hbci5 from "../../../images/individualProperties/hollywood-2022/Soleste Hollywood Rendering 5.jpg"
import hbci6 from "../../../images/individualProperties/hollywood-2022/Soleste Hollywood Rendering 4.jpg"
import hbci7 from "../../../images/individualProperties/hollywood-2022/Soleste Hollywood Rendering 3.jpg"
import hbci8 from "../../../images/individualProperties/hollywood-2022/Soleste Hollywood Rendering 2.jpg"
import hbci9 from "../../../images/individualProperties/hollywood-2022/Soleste Hollywood Rendering 1.jpg"
import hbci10 from "../../../images/individualProperties/hollywood-2022/New Renderings.jpg"
import hbci11 from "../../../images/individualProperties/hollywood-2022/New Renderings 3.jpg"
import hbci12 from "../../../images/individualProperties/hollywood-2022/New Renderings 2.jpg"
import hbci13 from "../../../images/individualProperties/hollywood-2022/Soleste Hollywood Rendering 9.jpg"

const sliderImages = [
    // 2022
    hbci1,
    hbci2,
    hbci3,
    hbci4,
    hbci5,
    hbci6,
    hbci7,
    hbci8,
    hbci9,
    hbci10,
    hbci11,
    hbci12,
    hbci13
];

class CarouselPageHollywood extends Component {
    render() {
        return (
            <div className="mt-5 pt-5 mb-5 pb-5 carauselPage">
                <MDBContainer>
                    <MDBCarousel
                        activeItem={0}
                        length={12}
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

export default CarouselPageHollywood;
