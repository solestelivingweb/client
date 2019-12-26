import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import { MDBView, MDBBtn } from "mdbreact";

import venetianPool from "../../../images/undef/venetian-pool.jpg";
import wynwoodWalls from "../../../images/undef/wynwood-walls.jpg";
import viscaya from "../../../images/undef/viscaya.jpg";
import GrapelandWaterPark from "../../../images/undef/GrapelandWaterPark.jpg";
import micracleMile from "../../../images/undef/micracle-mile.jpg";
import granadaGolfCourse from "../../../images/undef/granada-golf-course.jpg";
import brickellCityCenter from "../../../images/undef/brickell-city-center.jpg";
import biltmore from "../../../images/undef/biltmore.jpg";

// --------------------------------------
function Are1() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={GrapelandWaterPark}
        nbaNAME="Grapeland Water Park"
        nbaDESCRIPTION="Perfect for families, the Grapeland Water Park features 4 pools with interactive activities for kids of all ages. It is open seasonally. Visit website for hours of operation."
      />
    </div>
  );
}

function Are2() {
  return (
    <div>
      <div>
        <AttractionsImage
          nbaIMAGE={micracleMile}
          nbaNAME="Miracle Mile"
          nbaDESCRIPTION="Located near the Business District in Coral Gables, Miracle Mile is the Gables’ favorite hot spot for dining, boutique shopping, and discovering local art. Take the trolley for easy commuting."
        />
      </div>
    </div>
  );
}

function Are3() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={venetianPool}
        nbaNAME="Venetian Pool"
        nbaDESCRIPTION="Open seasonally for swimmers, the Venetian Pool is a public pool fed with natural spring water. Originally built in 1923, the pool maintains much of its original charm and beauty."
      />
    </div>
  );
}

function Are4() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={granadaGolfCourse}
        nbaNAME="Granada Golf Course"
        nbaDESCRIPTION="Florida’s oldest 9-hole course, the Granada Golf Course is a favorite attraction for locals and visitors alike. The course features a variety of options for golfers of any skill level."
      />
    </div>
  );
}

function Are5() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={biltmore}
        nbaNAME="The Biltmore"
        nbaDESCRIPTION="A luxury hotel in the heart of Coral Gables, The Biltmore is the perfect place to enjoy a relaxing stay. Enjoy a dip in the stunning pool or indulge in their Sunday Brunch."
      />
    </div>
  );
}

function Are6() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={wynwoodWalls}
        nbaNAME="Wynwood Walls"
        nbaDESCRIPTION="Established in 2009 and grown to become one of Miami’s favorite artistic destinations, the Wynwood Walls is a public exhibition featuring urban graffiti wall art from global artists."
      />
    </div>
  );
}

function Are7() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={viscaya}
        nbaNAME="Vizcaya Museum & Gardens"
        nbaDESCRIPTION="Experience a piece of history in Miami’s backyard. Originally built in 1916, Vizcaya Museum & Gardens is a 10-acre property filled with gardens, a 34-room estate, and waterfront views."
      />
    </div>
  );
}

function Are8() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={brickellCityCenter}
        nbaNAME="Brickell City Centre"
        nbaDESCRIPTION="One of Brickell’s most notable attractions, Brickell City Centre is a crossroads for fashion and cuisine, while offering the best in residential and office spaces."
      />
    </div>
  );
}

// --------------------------------------

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
export default class BlueNAC extends Component {
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
          {this.props.are1 ? <Are1></Are1> : ""}
          {/* item */}
          {this.props.are2 ? <Are2></Are2> : ""}
          {/* item */}
          {this.props.are3 ? <Are3></Are3> : ""}
          {/* item */}
          {this.props.are4 ? <Are4></Are4> : ""}
          {/* item */}
          {this.props.are5 ? <Are5></Are5> : ""}
          {/* item */}
          {this.props.are6 ? <Are6></Are6> : ""}
          {/* item */}
          {this.props.are7 ? <Are7></Are7> : ""}
          {/* item */}
          {this.props.are8 ? <Are8></Are8> : ""}
          {/* item */}
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
