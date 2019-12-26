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

import grandcentralmiddletopimg from "../images/individualProperties/grandcentral/grandcentral-mid-top-img.jpg";
import grandcentralleftimg from "../images/individualProperties/grandcentral/grandcentral-left-img.jpg";
import grandcentralrightimg from "../images/individualProperties/grandcentral/grandcentral-right-img.jpg";
import grandcentralmiddlebottomimg from "../images/individualProperties/grandcentral/grandcentral-mid-bottom-img.jpg";

const propertyComponentListShortArrLeft = [
  "Vegas style pool with spa, sun deck, and private cabanas",
  "Resident lounge complete with cyber café",
  "Sports lounge",
  "Gaming room with billiards, poker, table tennis and air hockey",
  "Indoor Children’s play house"
];

const propertyComponentListLongArrLeft = [
  "Vegas style pool with spa, sun deck, and private cabanas",
  "Resident lounge complete with cyber café",
  "Sports lounge",
  "Gaming room with billiards, poker, table tennis and air hockey",
  "Indoor Children’s play house",
  "Library with conference facilities and business center",
  "State of the art health and fitness club featuring high tech cardio equipment and free weights",
  "PAVIGYM Motion Fitness Center",
  "Yoga and Spin studio",
  "Spa with steam room, sauna, massage therapy rooms and relaxation lounge",
  "Dog spa and bark park",
  "Rooftop tanning deck, bar, BBQ stations and outdoor theater",
  "24/7 Controlled Access Luxor One package systems",
  "Car charging stations",
  "Controlled access garage parking",
  "Flex rentable office spaces",
  "Dry-cleaning lockers"
];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
  i => <li>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
  i => <li>{i}</li>
);

// right
const propertyComponentListShortArrRight = [
  "Distinctive Studio, One, Two and Three Bedroom Apartment Homes",
  "Sleek, modern kitchens with custom cabinets, quartz countertops, subway tile backsplash and designer lighting",
  "Gourmet stainless steel kitchen appliances",
  "Under mount kitchen and bathroom sinks",
  "Chef’s Islands"
];

const propertyComponentListLongArrRight = [
  "Distinctive Studio, One, Two and Three Bedroom Apartment Homes",
  "Sleek, modern kitchens with custom cabinets, quartz countertops, subway tile backsplash and designer lighting",
  "Gourmet stainless steel kitchen appliances",
  "Under mount kitchen and bathroom sinks",
  "Chef’s Islands",
  "Wood style porcelain flooring throughout",
  "Full size in-unit washer and dryer",
  "Master-en-suites and private balconies",
  "Ceiling fans in every room",
  "Spacious walk-in closets",
  "Impact resistant windows and sliding glass doors",
  "Electronic entry door lock systems",
  "Frameless glass showers and oversized tubs"
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
  i => <li>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
  i => <li>{i}</li>
);

export default class GrandCentral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      are1: true, //grapeland
      are2: false, //miracleMile
      are3: false, //venetian pool
      are4: false, //grandGolfCourse
      are5: false, //biltmore
      are6: true, //wynwoodwalls
      are7: true, //viscaya
      are8: true // brickellcc
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | Grand Central</title>
          <meta name="description" content="Helmet application" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-grandcentral-header-bg"
          pageNAME="GRAND CENTRAL"
        ></EachPageHeader>
        <PropertyDescriptionMiddleTop
          propertyComponentTitle="AN ADDRESS OF CASUAL SOPHISTICATION"
          propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes "
          propertyComponentParagraph="Downtown Miami's newest residential gem, Soleste Grand Central is ideal for the urban dweller. Cutting edge amenities, stylish apartments and a superior location"
          propertyComponentPrice="1,500"
          propertyComponentImage={grandcentralmiddletopimg}
          propertyNOWLEASING="PRE-LEASING JANUARY 2021"
          propertyMOVEINDATE="MOVE-IN MARCH 2021"
        ></PropertyDescriptionMiddleTop>
        <PropertyDescriptionLeft
          propertyComponentImage={grandcentralleftimg}
          propertyComponentListShort={propertyComponentListShortLeft}
          propertyComponentListLong={propertyComponentListLongLeft}
        ></PropertyDescriptionLeft>
        <PropertyDescriptionRight
          propertyComponentImage={grandcentralrightimg}
          propertyComponentListShort={propertyComponentListShortRight}
          propertyComponentListLong={propertyComponentListLongRight}
        ></PropertyDescriptionRight>
        <PropertyDescriptionMiddleBottom
          propertyComponentImage={grandcentralmiddlebottomimg}
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
          propertyNAME="GRAND CENTRAL"
          // propertyADDRESS="undefined address"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
