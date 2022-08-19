import React, { Component } from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBContainer,
} from "mdbreact";

// import gcci1 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-1.jpg";
// import gcci2 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-2.jpg";
// import gcci3 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-3.png";
// import gcci4 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-4.png";
// import gcci5 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-5.jpg";
// import gcci6 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-6.png";
// import gcci7 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-7.jpg";
// import gcci8 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-8.jpg";
// import gcci9 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-9.png";
// import gcci10 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-10.png";

// import gcci11 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-11.png";
// import gcci12 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-12.png";
// import gcci13 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-13.jpg";
// import gcci14 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-14.jpg";
// import gcci15 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-15.png";
// import gcci16 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-16.png";
// import gcci17 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-17.png";
// import gcci18 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-18.png";
// import gcci19 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-19.jpg";
// import gcci20 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-20.jpg";

// import gcci21 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-21.png";
// import gcci22 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-22.png";
// import gcci23 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-23.png";
// import gcci24 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-24.jpg";
// import gcci25 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-25.jpg";
// import gcci26 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-26.jpg";
// import gcci27 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-27.jpg";
// import gcci28 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-28.jpg";
// import gcci29 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-29.png";
// import gcci30 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-30.png";

// import gcci31 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-31.png";
// import gcci32 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-32.png";
// import gcci33 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-33.png";
// import gcci34 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-34.png";
// import gcci35 from "../../../images/individualProperties/grandcentral/CarauselRenderings/GrandCentral-35.png";

// 2022
import gcci36 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-36.jpg"
import gcci37 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-37.jpg"
import gcci38 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-38.jpg"
import gcci39 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-39.jpg"
import gcci40 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-40.jpg"
import gcci41 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-41.jpg"
import gcci42 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-42.jpg"
import gcci43 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-43.jpg"
import gcci44 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-44.jpg"
import gcci45 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-45.jpg"
import gcci46 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-46.jpg"
import gcci47 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-47.jpg"
import gcci48 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-48.jpg"
import gcci49 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-49.jpg"
import gcci50 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-50.jpg"
import gcci51 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-51.jpg"
import gcci52 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-52.jpg"
import gcci53 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-53.jpg"
import gcci54 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-54.jpg"
import gcci55 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-55.jpg"
import gcci56 from "../../../images/individualProperties/soleste-grand-2022/GrandCentral-56.jpg"

const sliderImages = [
    // gcci1,
    // gcci2,
    // gcci3,
    // gcci4,
    // gcci5,
    // gcci6,
    // gcci7,
    // gcci8,
    // gcci9,
    // gcci10,
    // gcci11,
    // gcci12,
    // gcci13,
    // gcci14,
    // gcci15,
    // gcci16,
    // gcci17,
    // gcci18,
    // gcci19,
    // gcci20,
    // gcci21,
    // gcci22,
    // gcci23,
    // gcci24,
    // gcci25,
    // gcci26,
    // gcci27,
    // gcci28,
    // gcci29,
    // gcci30,
    // gcci31,
    // gcci32,
    // gcci33,
    // gcci34,
    // gcci35,
    // 2022
    gcci36,
    gcci37,
    gcci38,
    gcci39,
    gcci40,
    gcci41,
    gcci42,
    gcci43,
    gcci44,
    gcci45,
    gcci46,
    gcci47,
    gcci48,
    gcci49,
    gcci50,
    gcci51,
    gcci52,
    gcci53,
    gcci54,
    gcci55,
    gcci56
];

class CarouselPageGrandCentral extends Component {
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

export default CarouselPageGrandCentral;
