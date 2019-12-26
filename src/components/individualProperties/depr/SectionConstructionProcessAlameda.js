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
import construction1 from "../../images/individualProperties/alameda/construction/construction-1.webp";
import construction2 from "../../images/individualProperties/alameda/construction/construction-2.webp";
import construction3 from "../../images/individualProperties/alameda/construction/construction-3.webp";
import construction4 from "../../images/individualProperties/alameda/construction/construction-4.webp";
import construction5 from "../../images/individualProperties/alameda/construction/construction-5.webp";
import construction6 from "../../images/individualProperties/alameda/construction/construction-6.webp";

const constructionImages = [
  { key: 1, value: construction1 },
  { key: 2, value: construction2 },
  { key: 3, value: construction3 },
  { key: 4, value: construction4 },
  { key: 5, value: construction5 },
  { key: 6, value: construction6 }
];

const listItems = constructionImages.map(xi => (
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
        length={6}
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

function SectionConstructionProcessAlameda() {
  return (
    <div className="section-construction-process-div">
      {/* <MDBContainer> */}
      <MDBRow>
        <MDBCol className="mt-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol className="mr-5 ml-5 pr-5 pl-5">
                <Fade>
                  <h1 className="mt-5">FOLLOW OUR CONSTRUCTION PROCESS</h1>
                </Fade>
                <Fade>
                  <p className="text-light mt-5">
                    Building luxury starts with a solid foundation. Join our
                    list to stay tuned with our property developments.
                  </p>
                </Fade>
                <Fade>
                  <Link to="/contact">
                    <MDBBtn color="unique" className="mt-5">
                      JOIN OUR WAITLIST
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
export default SectionConstructionProcessAlameda;
