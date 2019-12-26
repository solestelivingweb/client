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

import alamedamiddletopimg from "../images/individualProperties/alameda/alameda-mid-top-img.jpg";
import alamedaleftimg from "../images/individualProperties/alameda/alameda-left-img.jpg";
import alamedarightimg from "../images/individualProperties/alameda/alameda-right-img.jpg";
import alamedamiddlebottomimg from "../images/individualProperties/alameda/alameda-mid-bottom-img.jpg";

const propertyComponentListShortArrLeft = [
  "Hotel-inspired pool",
  "Expansive sun deck",
  "Private cabanas",
  "Resident lounge complete with cyber café",
  "Business center"
];

const propertyComponentListLongArrLeft = [
  "Hotel-inspired pool",
  "Expansive sun deck",
  "Private cabanas",
  "Resident lounge complete with cyber café",
  "Business center",
  "Yoga & Spin studio",
  "State of the art health and fitness club featuring high tech cardio equipment and free weights",
  "Serenity Garden",
  "Bark park",
  "Children's Playground",
  "Bike Parking",
  "Controlled access garage parking",
  "Car charging stations"
];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
  i => <li>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
  i => <li>{i}</li>
);

// right
const propertyComponentListShortArrRight = [
  "Sleek, modern kitchens with custom cabinets",
  "Quartz Countertops",
  "Stainless Steel Appliances",
  "Designer lighting",
  "Chef's island"
];

const propertyComponentListLongArrRight = [
  "Sleek, modern kitchens with custom cabinets",
  "Quartz Countertops",
  "Stainless Steel Appliances",
  "Designer lighting",
  "Chef's island",
  "Gourmet kitchen appliances package",
  "Porcelain flooring in living areas",
  "Full size washer and dryer",
  "Double master en suites and private balconies",
  "Ceiling fans in every room",
  "Spacious walk-in closets",
  "Impact resistant windows and sliding glass doors",
  "Over-sized terraces *",
  "Pantry and linen closet *"
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
  i => <li>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
  i => <li>{i}</li>
);

export default class Alameda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      are1: false, //grapeland
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
          <title>Soleste Living | Alameda</title>
          <meta name="description" content="Helmet application" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-alameda-header-bg"
          pageNAME="ALAMEDA"
        ></EachPageHeader>
        <PropertyDescriptionMiddleTop
          propertyComponentTitle="AN ADDRESS OF CASUAL SOPHISTICATION"
          propertyComponentDescription="Studio, One, and Two-Bedroom Apartment Homes starting"
          propertyComponentParagraph="Located in West Miami, just a short distance from the Miami International Airport and the Coral
Gables neighborhood, Soleste Alameda offers hotel-inspired amenities including a resort-style
pool with private cabanas as well as a yoga and spin studio and expansive sun deck. Discover
your new home today."
          propertyComponentPrice="1,475"
          propertyComponentImage={alamedamiddletopimg}
          propertyNOWLEASING="PRE-LEASING JANUARY 2020"
          propertyMOVEINDATE="MOVE-IN MARCH 2020"
        ></PropertyDescriptionMiddleTop>
        <PropertyDescriptionLeft
          propertyComponentImage={alamedaleftimg}
          propertyComponentListShort={propertyComponentListShortLeft}
          propertyComponentListLong={propertyComponentListLongLeft}
        ></PropertyDescriptionLeft>
        <PropertyDescriptionRight
          propertyComponentImage={alamedarightimg}
          propertyComponentListShort={propertyComponentListShortRight}
          propertyComponentListLong={propertyComponentListLongRight}
        ></PropertyDescriptionRight>
        <PropertyDescriptionMiddleBottom
          propertyComponentImage={alamedamiddlebottomimg}
        ></PropertyDescriptionMiddleBottom>
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
          propertyNAME="ALAMEDA"
          // propertyADDRESS="undefined address"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
