import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import { MDBMask, MDBView, MDBBtn } from "mdbreact";

import bluelag from "../../images/app/z-home-soleste-bluelagoon.jpg";
import tw2 from "../../images/app/z-home-soleste-twenty2.jpg";
import alameda from "../../images/Oct-2020-Alameda/1. Homepage/Soleste Alameda (48).JPG";
import bayv from "../../images/Oct-2020-Bay-Village/1. Homepage/Soleste Bay Village (16).JPG";
import grandcentral from "../../images/app/z-home-soleste-grandcentral.jpg";
import springgard from "../../images/app/z-home-soleste-springgardens.jpg";
import cityline from "../../images/app/z-home-soleste-cityline.jpg";

// Each image
class PropertyImage extends Component {
  render() {
    return (
      <div className="Section3CollectionCarousel-image">
        <MDBView hover>
          <img
            width="95%"
            src={this.props.propertyIMAGE}
            className="img-fluid"
            alt=""
          />
          <MDBMask
            className="flex-center"
            overlay="red-strong"
            style={{ width: "95%" }}
          >
            <Link to={this.props.propertyPAGE}>
              <h3 className="white-text">{this.props.propertyNAME}</h3>
            </Link>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
// Carousel
export default class Section3CollectionCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 1500,
    };

    return (
      <div className="Section3CollectionCarousel">
        <div className="absoluteDiv">
          <div className="absoluteDiv2">
            <h1>COLLECTIONS</h1>
          </div>
        </div>
        <Slider {...settings}>
          <div>
            <PropertyImage
              propertyIMAGE={bluelag}
              propertyNAME="SOLESTE BLUE LAGOON"
              propertyPAGE="/bluelagoon"
            />
          </div>
          {/* <div>
            <PropertyImage
              propertyIMAGE={tw2}
              propertyNAME="SOLESTE TWENTY2"
              propertyPAGE="/twenty2"
            />
          </div> */}
          <div>
            <PropertyImage
              propertyIMAGE={alameda}
              propertyNAME="SOLESTE ALAMEDA"
              propertyPAGE="/alameda"
            />
          </div>
          <div>
            <PropertyImage
              propertyIMAGE={bayv}
              propertyNAME="SOLESTE BAY VILLAGE"
              propertyPAGE="/bayvillage"
            />
          </div>
          <div>
            <PropertyImage
              propertyIMAGE={grandcentral}
              propertyNAME="SOLESTE GRAND CENTRAL"
              propertyPAGE="/grandcentral"
            />
          </div>
          <div>
            <PropertyImage
              propertyIMAGE={springgard}
              propertyNAME="SOLESTE SPRING GARDENS"
              propertyPAGE="/springgardens"
            />
          </div>
          <div>
            <PropertyImage
              propertyIMAGE={cityline}
              propertyNAME="SOLESTE CITYLINE"
              propertyPAGE="/cityline"
            />
          </div>
        </Slider>
        <Fade>
          <div className="text-center pt-5">
            <Link to="/collection">
              <MDBBtn color="unique" className="mt-5 ml-0 button-on-white">
                view all communities
              </MDBBtn>
            </Link>
          </div>
        </Fade>
      </div>
    );
  }
}
