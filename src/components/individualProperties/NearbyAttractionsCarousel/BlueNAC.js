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

// 2nd round of changes
import tropicalPark from "../../../images/undef/tropical-park.jpg";
import theFalls from "../../../images/undef/thefalls.jpg";
import deeringEstate from "../../../images/undef/deeringstate.jpg";
import zooMiami from "../../../images/undef/miami-zoo.jpg";
import miamiSeaquarium from "../../../images/undef/seaquarium.jpg";
import childrensMuseul from "../../../images/undef/miami-childrens-museum.jpg";
import baysideMarketplace from "../../../images/undef/bayside.jpg";
import jungleIsland from "../../../images/undef/jungle-island.jpg";
import parezArt from "../../../images/undef/perez-art-museum.jpg";
import aaa from "../../../images/undef/aaarena.jpg";
import frostMuseum from "../../../images/undef/frost-science-museum.jpg";

// 3rd batch
import adrienne from "../../../images/undef2/adrienne-arsht-center.jpg";
import calleocho from "../../../images/undef2/calle-ocho.jpg";
import cocogrove from "../../../images/undef2/coconut-grove.jpg";
import coralreefpark from "../../../images/undef2/coral-reef-park.jpg";
import countryclubprado from "../../../images/undef2/country-club-prado.jpg";
import dolphinmall from "../../../images/undef2/dolphin-mall.jpg";
import doralcitycenter from "../../../images/undef2/dora-city-center.jpg";
import downtowndadeland from "../../../images/undef2/downtown-dadeland.jpg";
import dtmiami from "../../../images/undef2/downtown-miami.jpg";
import lincolnrd from "../../../images/undef2/lincoln-road.jpg";
import miamiairport from "../../../images/undef2/miami-airport.jpg";
import portmiami from "../../../images/undef2/port-miami.jpg";
import virgintrains from "../../../images/undef2/virgin-trains.jpg";

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

// 2nd round of changes
function Are9() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={tropicalPark}
        nbaNAME="Tropical Park"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are10() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={theFalls}
        nbaNAME="The Falls"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are11() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={deeringEstate}
        nbaNAME="Deering Estate"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are12() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={zooMiami}
        nbaNAME="Zoo Miami"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are13() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={miamiSeaquarium}
        nbaNAME="Miami Seaquarium"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are14() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={childrensMuseul}
        nbaNAME="Miami Children’s Museum"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are15() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={baysideMarketplace}
        nbaNAME="Bayside Marketplace"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are16() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={jungleIsland}
        nbaNAME="Jungle Island"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are17() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={parezArt}
        nbaNAME="Perez Art Museum"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are18() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={aaa}
        nbaNAME="American Airlines Arena"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are19() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={frostMuseum}
        nbaNAME="Frost Museum"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

// batch 3
function Are20() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={adrienne}
        nbaNAME="Adrienne Arsht Center"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are21() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={calleocho}
        nbaNAME="Calle Ocho"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are22() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={cocogrove}
        nbaNAME="Coconut Grove"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are23() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={coralreefpark}
        nbaNAME="Coral Reef Park"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are24() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={countryclubprado}
        nbaNAME="Country Club Prado"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are25() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={dolphinmall}
        nbaNAME="Dolphin Mall"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are26() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={doralcitycenter}
        nbaNAME="Doral City Center"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are27() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={downtowndadeland}
        nbaNAME="Downtown Dadeland"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are28() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={dtmiami}
        nbaNAME="Downtown Miami"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are29() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={lincolnrd}
        nbaNAME="Lincoln Road"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are30() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={miamiairport}
        nbaNAME="Miami International Airport"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are31() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={portmiami}
        nbaNAME="Port of Miami"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
      />
    </div>
  );
}

function Are32() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={virgintrains}
        nbaNAME="Virgin Trains"
        nbaDESCRIPTION="Lorem Ipsum Text, Lorwm Ipsum Text, Lorem Ipsum Text"
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
          {this.props.are9 ? <Are9></Are9> : ""}
          {/* item */}
          {this.props.are10 ? <Are10></Are10> : ""}
          {/* item */}
          {this.props.are11 ? <Are11></Are11> : ""}
          {/* item */}
          {this.props.are12 ? <Are12></Are12> : ""}
          {/* item */}
          {this.props.are13 ? <Are13></Are13> : ""}
          {/* item */}
          {this.props.are14 ? <Are14></Are14> : ""}
          {/* item */}
          {this.props.are15 ? <Are15></Are15> : ""}
          {/* item */}
          {this.props.are16 ? <Are16></Are16> : ""}
          {/* item */}
          {this.props.are17 ? <Are17></Are17> : ""}
          {/* item */}
          {this.props.are18 ? <Are18></Are18> : ""}
          {/* item */}
          {this.props.are19 ? <Are19></Are19> : ""}
          {/* item */}
          {this.props.are20 ? <Are20></Are20> : ""}
          {/* item */}
          {this.props.are21 ? <Are21></Are21> : ""}
          {/* item */}
          {this.props.are22 ? <Are22></Are22> : ""}
          {/* item */}
          {this.props.are23 ? <Are23></Are23> : ""}
          {/* item */}
          {this.props.are24 ? <Are24></Are24> : ""}
          {/* item */}
          {this.props.are25 ? <Are25></Are25> : ""}
          {/* item */}
          {this.props.are26 ? <Are26></Are26> : ""}
          {/* item */}
          {this.props.are27 ? <Are27></Are27> : ""}
          {/* item */}
          {this.props.are28 ? <Are28></Are28> : ""}
          {/* item */}
          {this.props.are29 ? <Are29></Are29> : ""}
          {/* item */}
          {this.props.are30 ? <Are30></Are30> : ""}
          {/* item */}
          {this.props.are31 ? <Are31></Are31> : ""}
          {/* item */}
          {this.props.are32 ? <Are32></Are32> : ""}
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
