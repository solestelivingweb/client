import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import { MDBView, MDBBtn } from "mdbreact";

import img1 from "../../../images/individualProperties/NACimg1.jpg";
import img2 from "../../../images/individualProperties/NACimg2.jpg";
import img3 from "../../../images/individualProperties/NACimg3.jpg";

// Each image
class AttractionsImage extends Component {
  render() {
    return (
      <div className="Section3NBACarousel-image">
        <MDBView hover>
          <img
            width="95%"
            src={this.props.nbaIMAGE}
            className="img-fluid"
            alt=""
          />
        </MDBView>
        <h1 className="text-center mt-5">{this.props.nbaNAME}</h1>
        <p className="text-center mt-4">{this.props.nbaDESCRIPTION}</p>
      </div>
    );
  }
}
// Carousel
export default class T2NAC extends Component {
  render() {
    const settings = {
      dots: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 1500
    };

    return (
      <div className="Section3NBACarousel">
        <div className="absoluteDiv">
          <div className="absoluteDiv2">
            <h1>NEARBY ATTRACTIONS</h1>
          </div>
        </div>
        <Slider {...settings}>
          {/* item */}
          <div>
            <AttractionsImage
              nbaIMAGE={img1}
              nbaNAME="Miracle Mile"
              nbaDESCRIPTION="Miami Beach is a south Florida island city, connected by
                   bridges to mainland Miami. Wide beaches stretch from North
                   Shore Open Space Park."
            />
          </div>
          {/* item */}
          <div>
            <AttractionsImage
              nbaIMAGE={img2}
              nbaNAME="Venetian Pool"
              nbaDESCRIPTION="From life-sized murals to colorful drawings, Wynwood Walls
                   feature a constantly rotating mixture of artists and their
                   highly regarded creations."
            />
          </div>
          {/* item */}
          <div>
            <AttractionsImage
              nbaIMAGE={img3}
              nbaNAME="Granada Golf Course"
              nbaDESCRIPTION="A National Historic Landmark, Freedom Tower illustrates the
                   important story of the Cuban exodus to the United States and
                   resettlement during the Cold War."
            />
          </div>
          {/* item */}
          <div>
            <AttractionsImage
              nbaIMAGE={img3}
              nbaNAME="The Biltmore"
              nbaDESCRIPTION="A National Historic Landmark, Freedom Tower illustrates the
                   important story of the Cuban exodus to the United States and
                   resettlement during the Cold War."
            />
          </div>
          {/* item */}
          <div>
            <AttractionsImage
              nbaIMAGE={img3}
              nbaNAME="Matheson Hammock Park"
              nbaDESCRIPTION="A National Historic Landmark, Freedom Tower illustrates the
                   important story of the Cuban exodus to the United States and
                   resettlement during the Cold War."
            />
          </div>
          {/* item */}
          <div>
            <AttractionsImage
              nbaIMAGE={img3}
              nbaNAME="Brickell City Center"
              nbaDESCRIPTION="A National Historic Landmark, Freedom Tower illustrates the
                   important story of the Cuban exodus to the United States and
                   resettlement during the Cold War."
            />
          </div>
          {/* item */}
          <div>
            <AttractionsImage
              nbaIMAGE={img3}
              nbaNAME="Coconut Grove"
              nbaDESCRIPTION="A National Historic Landmark, Freedom Tower illustrates the
                   important story of the Cuban exodus to the United States and
                   resettlement during the Cold War."
            />
          </div>
        </Slider>
        <Fade>
          <div className="text-center pt-5 nbabtn">
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
