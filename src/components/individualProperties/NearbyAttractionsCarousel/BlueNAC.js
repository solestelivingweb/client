import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import { MDBView, MDBBtn } from 'mdbreact';

import venetianPool from '../../../images/undef/venetian-pool.jpg';
import wynwoodWalls from '../../../images/undef/wynwood-walls.jpg';
import viscaya from '../../../images/undef/viscaya.jpg';
import GrapelandWaterPark from '../../../images/undef/GrapelandWaterPark.jpg';
import micracleMile from '../../../images/undef/micracle-mile.jpg';
import granadaGolfCourse from '../../../images/undef/granada-golf-course.jpg';
import brickellCityCenter from '../../../images/undef/brickell-city-center.jpg';
import biltmore from '../../../images/undef/biltmore.jpg';

// 2nd round of changes
import tropicalPark from '../../../images/undef/tropical-park.jpg';
import theFalls from '../../../images/undef/thefalls.jpg';
import deeringEstate from '../../../images/undef/deeringstate.jpg';
import zooMiami from '../../../images/undef/miami-zoo.jpg';
import miamiSeaquarium from '../../../images/undef/seaquarium.jpg';
import childrensMuseul from '../../../images/undef/miami-childrens-museum.jpg';
import baysideMarketplace from '../../../images/undef/bayside.jpg';
import jungleIsland from '../../../images/undef/jungle-island.jpg';
import parezArt from '../../../images/undef/perez-art-museum.jpg';
import aaa from '../../../images/undef/aaarena.jpg';
import frostMuseum from '../../../images/undef/frost-science-museum.jpg';

// 3rd batch
import adrienne from '../../../images/undef2/adrienne-arsht-center.jpg';
import calleocho from '../../../images/undef2/calle-ocho.jpg';
import cocogrove from '../../../images/undef2/coconut-grove.jpg';
import coralreefpark from '../../../images/undef2/coral-reef-park.jpg';
import countryclubprado from '../../../images/undef2/country-club-prado.jpg';
import dolphinmall from '../../../images/undef2/dolphin-mall.jpg';
import doralcitycenter from '../../../images/undef2/dora-city-center.jpg';
import downtowndadeland from '../../../images/undef2/downtown-dadeland.jpg';
import dtmiami from '../../../images/undef2/downtown-miami.jpg';
import lincolnrd from '../../../images/undef2/lincoln-road.jpg';
import miamiairport from '../../../images/undef2/miami-airport.jpg';
import portmiami from '../../../images/undef2/port-miami.jpg';
import virgintrains from '../../../images/undef2/virgin-trains.jpg';

// 2020
import daniabeach from '../../../images/undef3/dania-beach.jpg';
import daniapointe from '../../../images/undef3/dania-pointe.jpg';
import fta from '../../../images/undef3/fta.png';
import seminole from '../../../images/undef3/seminole-casino.jpg';
import lasolas from '../../../images/undef3/lasolas.jpg';
import brightlineft from '../../../images/undef3/brightline.jpeg';
import browardcenter from '../../../images/undef3/broward-center.jpg';
import thewharft from '../../../images/undef3/the-wharft.jpg';

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
        nbaDESCRIPTION="Tropical Park is the ideal spot in Olympia Heights for a nature getaway. With miles of paved pathways, this is the perfect spot for cycling, running, or simply enjoying a walk."
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
        nbaDESCRIPTION="With over 100 stores to explore, The Falls is an upscale shopping haven located in Kendall. Whether you’re shopping or dining, you’ll always find something the whole family can enjoy.
"
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
        nbaDESCRIPTION="One of Miami’s cultural landmarks, The Deering Estate preserves the 1920s home of Charles Deering. Enjoy tours, art exhibits, nature hikes, and more at this historical destination."
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
        nbaDESCRIPTION="The only subtropical zoo in the US, the Miami Zoo is one of South Florida’s best family friendly destinations! Interact with wildlife and endangered species at Florida’s biggest zoological garden."
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
        nbaDESCRIPTION="The Miami Seaquarium is one of South Florida’s favorite visitor attractions! Get up close and personal with marine life with extraordinary exhibits at Miami’s favorite aquarium."
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
        nbaDESCRIPTION="A dreamland for every kid, the Miami Children’s Museum is a non-profit educational space that encourages kids to use their imagination and proves that learning can be fun!"
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
        nbaDESCRIPTION="Located in Downtown Miami, Bayside Marketplace is one of Miami’s top shopping and dining destinations. Enjoy a drink by the water and explore this iconic South Florida spot!"
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
        nbaDESCRIPTION="Jungle Island is one of Miami’s most famous tourist destinations! Enjoy beautiful landscapes and exotic animals right before your eyes at one of Miami’s best landmarks."
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
        nbaDESCRIPTION="The famous flagship museum of Miami, The Perez Art Museum exhibits international art of the 20th and 21st centuries. Experience modern art while enjoying beautiful seaside views."
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
        nbaDESCRIPTION="Miami’s top destination for all things sports and entertainment, the American Airlines Arena is a hub for the hottest live events in town. Check out their site for info on upcoming events."
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
        nbaDESCRIPTION="The Frost Museum is sure to entice visitors of all ages with the wonders of science! Experience features such as the aquarium and an array of interactive exhibits for the whole family to enjoy."
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
        nbaDESCRIPTION="Located in the heart of Downtown Miami, the Adrienne Arsht Center is one of the leading performing arts centers in the country. Visit their website for information on upcoming live events."
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
        nbaDESCRIPTION="Experience Miami’s Cuban culture at the world famous Calle Ocho! Located in Little Havana, Calle Ocho’s colorful restaurants, art, and more are sure to transport you to the heart of Havana."
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
        nbaDESCRIPTION="A hidden gem in Miami, Coconut Grove is a charming destination to enjoy brunch in one of the numerous sidewalk cafes or linger in one of the many art galleries."
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
        nbaDESCRIPTION="Coral Reef Park is any nature lover’s heaven. Spanning across 50 acres, this park is complete with sports fields, green spaces, and a beautifully tranquil canal."
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
        nbaDESCRIPTION="One of the most beautiful spots in Coral Gables, Country Club Prado is the perfect place to spend your evening enjoying the gorgeous scenery this local area has to offer."
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
        nbaDESCRIPTION="Miami’s largest shopping center, the Dolphin Mall is a hub for retail, dining, and entertainment. Featuring over 240 retail outlets, it is the perfect place to spend an afternoon in West Miami."
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
        nbaDESCRIPTION="City Place Doral is the newest addition to the area for retail shopping and entertainment. Featuring weekly live entertainment, bowling, and cinemas, you’ll never be bored here."
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
        nbaDESCRIPTION="Located just across the street from Dadeland Mall, Downtown Dadeland is filled with the finest restaurants, shops, fitness centers, and more to fill your day."
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
        nbaDESCRIPTION="Downtown Miami is truly the heart of the city. Spend your day walking through this cultural hub filled with restaurants, open-air malls, and department stores.
"
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
        nbaDESCRIPTION="Lincoln Road is Miami’s premier shopping and entertainment center. Experience the over 200 luxury stores, fine dining restaurants, and the best bars South Florida has to offer."
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
        nbaDESCRIPTION="
Conveniently catch domestic and international flights from the Miami International Airport, and enjoy easy commuting to surrounding areas through their taxi and shuttle services."
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
        nbaDESCRIPTION="The Port of Miami is the largest passenger port in the world! Whether your boarding a cruise or simply ship watching, your sure to get the best ocean views from this port."
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
        nbaDESCRIPTION="Whether you're commuting to work, or exploring Miami, Virgin Trains can take you anywhere you need to go. With speeds up to 79 mph, you’ll never have to worry about being late again."
      />
    </div>
  );
}

// 2020
function Are33() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={daniabeach}
        nbaNAME="Dania Beach"
        nbaDESCRIPTION="With its award-winning 'Blue Wave Beaches,' nature activities and proximity to Fort Lauderdale and Hollywood, Dania Beach is an appealing vacation spot. It's also the home of the world-famous Dania Jai Alai in the center of the city's dining and entertainment district. "
      />
    </div>
  );
}
function Are34() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={daniapointe}
        nbaNAME="Dania Pointe"
        nbaDESCRIPTION="Dania Pointe is the newest addition to the area for retail shopping and entertainment. Featuring weekly live entertainment, bowling and dining options, you’ll never be bored here."
      />
    </div>
  );
}
function Are35() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={fta}
        nbaNAME="Fort Lauderdale-Hollywood International Airport"
        nbaDESCRIPTION="Fort Lauderdale–Hollywood International Airport is a major public airport in Broward County, Florida, United States, and is one of three airports serving the Miami metropolitan area. "
      />
    </div>
  );
}
function Are36() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={seminole}
        nbaNAME="Seminole Hardrock Hotel and Casino"
        nbaDESCRIPTION="Seminole Hard Rock Hotel & Casino Hollywood is South Florida's iconic entertainment destination that fuses an electrifying nightlife scene and non-stop gaming action in one singular setting. "
      />
    </div>
  );
}
function Are37() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={lasolas}
        nbaNAME="Las Olas"
        nbaDESCRIPTION="Las Olas Boulevard is the very heart and soul of Fort Lauderdale. Stretching from the beach at A1A and rising over the fabulous Intracoastal Waterway with magnificent views. Las Olas has become the premier destination for shopping, dining, events, entertainment, galleries or even taking a nice walk. "
      />
    </div>
  );
}
function Are38() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={brightlineft}
        nbaNAME="Brightline Fort Lauderdale"
        nbaDESCRIPTION="Brightline trains are like nothing you’ve ever seen before. Fort Lauderdale station is an inter-city rail station located in City of Fort Lauderdale. Connecting you to local cities like Miami and West Palm Beach."
      />
    </div>
  );
}
function Are39() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={browardcenter}
        nbaNAME="Broward Center of Performing Arts"
        nbaDESCRIPTION="Opened in 1991, the Broward Center for the Performing Arts is the destination of choice in South Florida for spectacular entertainment. Check out their site for info on upcoming events."
      />
    </div>
  );
}
function Are40() {
  return (
    <div>
      <AttractionsImage
        nbaIMAGE={thewharft}
        nbaNAME="The Wharft Fort Lauderdale"
        nbaDESCRIPTION="An outdoor pop-up event space anchored with live music, cocktails, eats & good times in Las Olas on the banks of the New River. The place is amazingly constructed with an open format that really highlights the best parts of living downtown."
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
      autoplaySpeed: 1500,
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
          {this.props.are1 ? <Are1></Are1> : ''}
          {/* item */}
          {this.props.are2 ? <Are2></Are2> : ''}
          {/* item */}
          {this.props.are3 ? <Are3></Are3> : ''}
          {/* item */}
          {this.props.are4 ? <Are4></Are4> : ''}
          {/* item */}
          {this.props.are5 ? <Are5></Are5> : ''}
          {/* item */}
          {this.props.are6 ? <Are6></Are6> : ''}
          {/* item */}
          {this.props.are7 ? <Are7></Are7> : ''}
          {/* item */}
          {this.props.are8 ? <Are8></Are8> : ''}
          {/* item */}
          {this.props.are9 ? <Are9></Are9> : ''}
          {/* item */}
          {this.props.are10 ? <Are10></Are10> : ''}
          {/* item */}
          {this.props.are11 ? <Are11></Are11> : ''}
          {/* item */}
          {this.props.are12 ? <Are12></Are12> : ''}
          {/* item */}
          {this.props.are13 ? <Are13></Are13> : ''}
          {/* item */}
          {this.props.are14 ? <Are14></Are14> : ''}
          {/* item */}
          {this.props.are15 ? <Are15></Are15> : ''}
          {/* item */}
          {this.props.are16 ? <Are16></Are16> : ''}
          {/* item */}
          {this.props.are17 ? <Are17></Are17> : ''}
          {/* item */}
          {this.props.are18 ? <Are18></Are18> : ''}
          {/* item */}
          {this.props.are19 ? <Are19></Are19> : ''}
          {/* item */}
          {this.props.are20 ? <Are20></Are20> : ''}
          {/* item */}
          {this.props.are21 ? <Are21></Are21> : ''}
          {/* item */}
          {this.props.are22 ? <Are22></Are22> : ''}
          {/* item */}
          {this.props.are23 ? <Are23></Are23> : ''}
          {/* item */}
          {this.props.are24 ? <Are24></Are24> : ''}
          {/* item */}
          {this.props.are25 ? <Are25></Are25> : ''}
          {/* item */}
          {this.props.are26 ? <Are26></Are26> : ''}
          {/* item */}
          {this.props.are27 ? <Are27></Are27> : ''}
          {/* item */}
          {this.props.are28 ? <Are28></Are28> : ''}
          {/* item */}
          {this.props.are29 ? <Are29></Are29> : ''}
          {/* item */}
          {this.props.are30 ? <Are30></Are30> : ''}
          {/* item */}
          {this.props.are31 ? <Are31></Are31> : ''}
          {/* item */}
          {this.props.are32 ? <Are32></Are32> : ''}
          {/* item */}
          {/* 2020 */}
          {this.props.are33 ? <Are33></Are33> : ''}
          {/* item */}
          {this.props.are34 ? <Are34></Are34> : ''}
          {/* item */}
          {this.props.are35 ? <Are35></Are35> : ''}
          {/* item */}
          {this.props.are36 ? <Are36></Are36> : ''}
          {/* item */}
          {this.props.are37 ? <Are37></Are37> : ''}
          {/* item */}
          {this.props.are38 ? <Are38></Are38> : ''}
          {/* item */}
          {this.props.are39 ? <Are39></Are39> : ''}
          {/* item */}
          {this.props.are40 ? <Are40></Are40> : ''}
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
