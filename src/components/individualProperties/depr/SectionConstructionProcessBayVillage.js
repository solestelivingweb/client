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
import construction1 from "../../images/individualProperties/bayvillage/construction/construction-1.webp";
import construction2 from "../../images/individualProperties/bayvillage/construction/construction-2.webp";
import construction3 from "../../images/individualProperties/bayvillage/construction/construction-3.webp";
import construction4 from "../../images/individualProperties/bayvillage/construction/construction-4.webp";
import construction5 from "../../images/individualProperties/bayvillage/construction/construction-5.webp";
import construction6 from "../../images/individualProperties/bayvillage/construction/construction-6.webp";
import construction7 from "../../images/individualProperties/bayvillage/construction/construction-7.webp";
import construction8 from "../../images/individualProperties/bayvillage/construction/construction-8.webp";
import construction9 from "../../images/individualProperties/bayvillage/construction/construction-9.webp";
import construction10 from "../../images/individualProperties/bayvillage/construction/construction-10.webp";
import construction11 from "../../images/individualProperties/bayvillage/construction/construction-11.webp";

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
  { key: 11, value: construction11 }
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
        length={11}
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

function SectionConstructionProcessBayVillage() {
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
export default SectionConstructionProcessBayVillage;
