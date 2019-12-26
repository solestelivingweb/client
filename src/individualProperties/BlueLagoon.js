import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";

import PropertyDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleTop";
import PropertyDescriptionLeft from "../components/individualProperties/pageComponents/PropertyDescriptionLeft";
import PropertyDescriptionRight from "../components/individualProperties/pageComponents/PropertyDescriptionRight";
import PropertyDescriptionMiddleBottom from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleBottom";
// import NearbyAttractionsCarousel from "../components/individualProperties/NearbyAttractionsCarousel";
import BlueNAC from "../components/individualProperties/NearbyAttractionsCarousel/BlueNAC";
import ContactThisProperty from "../components/individualProperties/ContactThisProperty";
import FooterPage from "../components/FooterPage";

import bluelagoonmiddletopimg from "../images/individualProperties/bluelagoon/bluelagoon-mid-top-img.jpg";
import bluelagoonleftimg from "../images/individualProperties/bluelagoon/bluelagoon-left-img.jpg";
import bluelagoonrightimg from "../images/individualProperties/bluelagoon/bluelagoon-right-img.jpg";
import bluelagoonmiddlebottomimg from "../images/individualProperties/bluelagoon/bluelagoon-mid-bottom-img.jpg";

const propertyComponentListShortArrLeft = [
  "Lakeside pool and jacuzzi",
  "Expansive sun deck",
  "Private cabanas",
  "Summer kitchen and grills",
  "Mail and business center"
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
  "Car charging stations"
];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
  i => <li key={i}>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
  i => <li key={i}>{i}</li>
);

// right
const propertyComponentListShortArrRight = [
  "Sleek, modern kitchens with custom cabinets",
  "Quartz countertops",
  "Stainless steel appliances",
  "Designer lighting",
  "Chef's island*",
  "Gourmet kitchen appliances package"
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
  "Expansive views of Blue Lagoon*"
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
  i => <li key={i}>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
  i => <li key={i}>{i}</li>
);

export default class BlueLagoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      are1: true, //grapeland
      are2: true, //miracleMile
      are3: true, //venetian pool
      are4: true, //grandGolfCourse
      are5: true, //biltmore
      are6: false, //wynwoodwalls
      are7: false, //viscaya
      are8: false // brickellcc
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | Blue Lagoon</title>
          <meta name="description" content="Helmet application" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-bluelagoon-header-bg"
          pageNAME="BLUE LAGOON"
        ></EachPageHeader>
        <PropertyDescriptionMiddleTop
          propertyComponentTitle="LAKESIDE LIVING IN THE HEART OF MIAMI"
          propertyComponentDescription="Studio, One, Two, and Three-Bedroom Apartment Homes starting"
          propertyComponentParagraph="Soleste Blue Lagoon is an oasis of conveniences. From its prominent location near Miami International Airport and Waterford Business Park, to the convenient access to all major expressways and the incredible amenities offered. Relax in our co-ed sauna and steam room, cool off at our lakeside pool or feel the energy of our fitness club complete with spinning and yoga studio. At Soleste Blue Lagoon, you’ll find luxury living within your reach."
          propertyComponentPrice="1,499"
          propertyComponentImage={bluelagoonmiddletopimg}
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
        <PropertyDescriptionMiddleBottom
          propertyComponentImage={bluelagoonmiddlebottomimg}
        ></PropertyDescriptionMiddleBottom>
        {/* <NearbyAttractionsCarousel></NearbyAttractionsCarousel> */}
        <BlueNAC
          are1={this.state.are1}
          are2={this.state.are2}
          are3={this.state.are3}
          are4={this.state.are4}
          are5={this.state.are5}
          are6={this.state.are6}
          are7={this.state.are7}
          are8={this.state.are8}
        ></BlueNAC>
        <ContactThisProperty
          propertyNAME="BLUE LAGOON"
          propertyADDRESS="5375 NW 7th Street - Miami, FL 33128"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
