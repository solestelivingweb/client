import React from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView
} from "mdbreact";

import Fade from "react-reveal/Fade";

// Alameda images
import construction1 from "../../images/individualProperties/bluelagoon/construction/construction-1.jpeg";
import construction2 from "../../images/individualProperties/bluelagoon/construction/construction-2.jpeg";
import construction3 from "../../images/individualProperties/bluelagoon/construction/construction-3.jpeg";
import construction4 from "../../images/individualProperties/bluelagoon/construction/construction-4.jpeg";
import construction5 from "../../images/individualProperties/bluelagoon/construction/construction-5.jpeg";
import construction6 from "../../images/individualProperties/bluelagoon/construction/construction-6.jpeg";
import construction7 from "../../images/individualProperties/bluelagoon/construction/construction-7.jpeg";
import construction8 from "../../images/individualProperties/bluelagoon/construction/construction-8.jpeg";
import construction9 from "../../images/individualProperties/bluelagoon/construction/construction-9.jpeg";
import construction10 from "../../images/individualProperties/bluelagoon/construction/construction-10.jpeg";
import construction11 from "../../images/individualProperties/bluelagoon/construction/construction-11.jpeg";
import construction12 from "../../images/individualProperties/bluelagoon/construction/construction-12.jpeg";
import construction13 from "../../images/individualProperties/bluelagoon/construction/construction-13.jpeg";
import construction14 from "../../images/individualProperties/bluelagoon/construction/construction-14.jpeg";
import construction15 from "../../images/individualProperties/bluelagoon/construction/construction-15.jpeg";
import construction16 from "../../images/individualProperties/bluelagoon/construction/construction-16.jpeg";
import construction17 from "../../images/individualProperties/bluelagoon/construction/construction-17.jpeg";
import construction18 from "../../images/individualProperties/bluelagoon/construction/construction-18.jpeg";
import construction19 from "../../images/individualProperties/bluelagoon/construction/construction-19.jpeg";
import construction20 from "../../images/individualProperties/bluelagoon/construction/construction-20.jpeg";
import construction21 from "../../images/individualProperties/bluelagoon/construction/construction-21.jpeg";

const constructionImagesAlameda = [
  { key: 1, value: construction1 },
  { key: 2, value: construction2 },
  { key: 3, value: construction3 },
  { key: 4, value: construction4 },
  { key: 5, value: construction5 },
  { key: 6, value: construction6 },
  { key: 7, value: construction7 },
  { key: 8, value: construction8 },
  { key: 9, value: construction9 },
  { key: 10, value: construction10 },
  { key: 11, value: construction11 },
  { key: 12, value: construction12 },
  { key: 13, value: construction13 },
  { key: 14, value: construction14 },
  { key: 15, value: construction15 },
  { key: 16, value: construction16 },
  { key: 17, value: construction17 },
  { key: 18, value: construction18 },
  { key: 19, value: construction19 },
  { key: 21, value: construction20 },
  { key: 21, value: construction21 }
];

const listItems = constructionImagesAlameda.map(xi => (
  <MDBCarouselItem itemId={xi.key}>
    <MDBView>
      <img className="d-block w-100" src={xi.value} alt="First slide" />
    </MDBView>
  </MDBCarouselItem>
));

const CarouselPage = () => {
  return (
    <div className="section-construction-process-carouser">
      <MDBCarousel
        activeItem={1}
        length={21}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>{listItems}</MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

function SectionConstructionProcessBlueLagoon() {
  return (
    <div className="section-construction-process-div">
      {/* <MDBContainer> */}
      <MDBRow>
        <MDBCol className="mt-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol className="mr-5 ml-5 pr-5 pl-5">
                <Fade>
                  <h1 className="mt-5">GET IN TOUCH</h1>
                </Fade>
                <Fade>
                  <p className="text-light mt-5">
                    Looking to learn more about our lush properties and
                    amenities? Let's talk about it. We are here to help you
                    discover what it means to live the Soleste way.
                  </p>
                </Fade>
                <Fade>
                  <Link to="/contact">
                    <MDBBtn color="unique" className="mt-5">
                      CONTACT US
                    </MDBBtn>
                  </Link>
                </Fade>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCol>
        <MDBCol className="pr-0">
          <CarouselPage></CarouselPage>
        </MDBCol>
      </MDBRow>
      {/* </MDBContainer> */}
    </div>
  );
}
export default SectionConstructionProcessBlueLagoon;
