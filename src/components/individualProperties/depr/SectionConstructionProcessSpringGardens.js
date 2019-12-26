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
import construction1 from "../../images/individualProperties/springgardens/construction/construction-1.webp";

const constructionImagesAlameda = [{ key: 1, value: construction1 }];

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
        length={1}
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

function SectionConstructionProcessSpringGardens() {
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
export default SectionConstructionProcessSpringGardens;
