import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";
import PropertyDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleTop";
import PropertyDescriptionLeft from "../components/individualProperties/pageComponents/PropertyDescriptionLeft";
import PropertyDescriptionRight from "../components/individualProperties/pageComponents/PropertyDescriptionRight";
import CarouselPageBlueLagoon from "../components/individualProperties/pageComponents/CarouselPageBlueLagoon";
import BlueNAC from "../components/individualProperties/NearbyAttractionsCarousel/BlueNAC";
import ContactThisProperty from "../components/individualProperties/ContactThisProperty";
import FooterPage from "../components/FooterPage";
// import bluelagoonmiddletopimg from "../images/individualProperties/bluelagoon/bluelagoon-mid-top-img.jpg";
import blueLagoonMiddletopvid from "../videos/Soleste Blue Lagoon Full Tour LPC.mp4";
import bluelagoonleftimg from "../images/individualProperties/bluelagoon/bluelagoon-left-img.jpg";
import bluelagoonrightimg from "../images/individualProperties/bluelagoon/bluelagoon-right-img.jpg";
const propertyComponentListShortArrLeft = [
  "Lakeside pool and jacuzzi",
  "Expansive sun deck",
  "Private cabanas",
  "Summer kitchen and grills",
  "Mail and business center",
];

const propertyComponentListLongArrLeft = [
  "Lakeside pool and jacuzzi",
  "Expansive sun deck",
  "Private cabanas",
  "Summer kitchen and grills",
  "Mail and business center",
  "Aerial Yoga",
  "Spin studio",
  "State of the art health and fitness club featuring high tech cardio equipment and free weights",
  "Sky lounge with life size chess, pool table and games",
  "Bicycle storage",
  "Serenity Garden with hammock and yoga lawn",
  "Doggy Lane",
  "Co-ed steam room and sauna",
  "Luxer Package Room",
  "Dry cleaning lockers",
  "Storage rooms",
  "Controlled access garage parking",
  "Car charging stations",
];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
  (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
  (i) => <li key={i}>{i}</li>
);

// right
const propertyComponentListShortArrRight = [
  "Sleek, modern kitchens with custom cabinets",
  "Quartz countertops",
  "Stainless steel appliances",
  "Designer lighting",
  "Chef's island*",
  "Gourmet kitchen appliances package",
];

const propertyComponentListLongArrRight = [
  "Sleek, modern kitchens with custom cabinets",
  "Quartz countertops",
  "Stainless steel appliances",
  "Designer lighting",
  "Chef's island*",
  "Gourmet kitchen appliances package",
  "Wood tile flooring throughout",
  "Full size washer and dryer",
  "Double master-en-suites and private balconies",
  "Ceiling fans in every room",
  "Spacious walk-in closets",
  "Impact resistant windows and sliding glass doors",
  "Over-sized terraces *",
  "Pantry and linen closet *",
  "Expansive views of Blue Lagoon*",
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
  (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
  (i) => <li key={i}>{i}</li>
);

export default class BlueLagoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSocial: true,
      isVideo: true,
      are1: true, //Grapeland Park
      are2: true, //Miracle Mile
      are3: false, //Venetian Pool
      are4: false, //Granada Gold Course
      are5: false, //The Biltmore Hotel
      are6: false, //Wynwood Walls
      are7: false, //Vizcaya Museum and Gardens
      are8: false, //Brickell City Center
      are9: false, //Tropical Park
      are10: false, //The Falls
      are11: false, //Deering Estate
      are12: false, //Zoo Miami
      are13: false, //Miami Seaquarium
      are14: false, //Miami Children’s Museum
      are15: false, //Bayside Marketplace
      are16: false, //Jungle Island
      are17: false, //Perez Art Museum
      are18: false, //American Airlines Arena
      are19: false, //Frost Museum
      are20: false, //Adrienne Arsht Center
      are21: false, //Calle Ocho
      are22: false, //Coconut Grove
      are23: false, //Coral Reef Park
      are24: false, //Country Club Prado
      are25: true, //Dolphin Mall
      are26: true, //Doral City Center
      are27: false, //Downtown Dadeland
      are28: false, //Downtown Miami
      are29: false, //Lincoln Road
      are30: true, //Miami International Airport
      are31: false, //Port of Miami
      are32: false, //Virgin Trains
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | Blue Lagoon</title>
          <meta name="description" content="Soleste Blue Lagoon" />
          <meta name="keywords" content="Soleste Blue Lagoon" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-bluelagoon-header-bg"
          pageNAME="BLUE LAGOON"
        ></EachPageHeader>
        <PropertyDescriptionMiddleTop
          propertyComponentTitle="LAKESIDE LIVING IN THE HEART OF MIAMI"
          propertyComponentDescription="Studio, One, Two, and Three-Bedroom Apartment Homes"
          propertyComponentParagraph="Soleste Blue Lagoon is an oasis of conveniences. From its prominent location near Miami International Airport and Waterford Business Park, to the convenient access to all major expressways and the incredible amenities offered. Relax in our co-ed sauna and steam room, cool off at our lakeside pool or feel the energy of our fitness club complete with spinning and yoga studio. At Soleste Blue Lagoon, you’ll find luxury living within your reach."
          propertyComponentPrice="none"
          // propertyComponentImage={bluelagoonmiddletopimg}
          isVideo={this.state.isVideo}
          propertyComponentVideo={blueLagoonMiddletopvid}
          propertyExternalWebsite="https://www.solestebluelagoon.com/"
          propertyNOWLEASING="NOW LEASING"
          propertyMOVEINDATE="MOVE-IN OCTOBER 2019"
        ></PropertyDescriptionMiddleTop>
        <PropertyDescriptionLeft
          propertyComponentImage={bluelagoonleftimg}
          propertyComponentListShort={propertyComponentListShortLeft}
          propertyComponentListLong={propertyComponentListLongLeft}
        ></PropertyDescriptionLeft>
        <PropertyDescriptionRight
          propertyComponentImage={bluelagoonrightimg}
          propertyComponentListShort={propertyComponentListShortRight}
          propertyComponentListLong={propertyComponentListLongRight}
        ></PropertyDescriptionRight>
        <CarouselPageBlueLagoon></CarouselPageBlueLagoon>
        <BlueNAC
          are1={this.state.are1}
          are2={this.state.are2}
          are3={this.state.are3}
          are4={this.state.are4}
          are5={this.state.are5}
          are6={this.state.are6}
          are7={this.state.are7}
          are8={this.state.are8}
          are9={this.state.are9}
          are10={this.state.are10}
          are11={this.state.are11}
          are12={this.state.are12}
          are13={this.state.are13}
          are14={this.state.are14}
          are15={this.state.are15}
          are16={this.state.are16}
          are17={this.state.are17}
          are18={this.state.are18}
          are19={this.state.are19}
          are20={this.state.are20}
          are21={this.state.are21}
          are22={this.state.are22}
          are23={this.state.are23}
          are24={this.state.are24}
          are25={this.state.are25}
          are26={this.state.are26}
          are27={this.state.are27}
          are28={this.state.are28}
          are29={this.state.are29}
          are30={this.state.are30}
          are31={this.state.are31}
          are32={this.state.are32}
        ></BlueNAC>
        <ContactThisProperty
          propertyNAME="BLUE LAGOON"
          propertyADDRESS="5375 NW 7th Street - Miami, FL 33126"
          facebookLink="https://www.facebook.com/Soleste-Blue-Lagoon-Luxury-Apartments-in-Miami-684982218585223/"
          instagramLink="https://www.instagram.com/solestebluelagoon/"
          websiteLink="https://www.solestebluelagoon.com/"
          mapPhotoClass="mapPhoto mPBlueLagoon"
          googlemap="https://goo.gl/maps/pcLdGgNPtTqMxTYp6"
          isSocial={this.state.isSocial}
          embedMap="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=5375%20NW%207th%20St%2C%20Miami%2C%20FL%2033126+(Blue%20Lagoon)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
