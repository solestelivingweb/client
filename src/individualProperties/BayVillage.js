import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";

import PropertyDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleTop";
import PropertyDescriptionLeft from "../components/individualProperties/pageComponents/PropertyDescriptionLeft";
import PropertyDescriptionRight from "../components/individualProperties/pageComponents/PropertyDescriptionRight";
import PropertyDescriptionMiddleBottom from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleBottom";
// import NearbyAttractionsCarousel from "../components/individualProperties/NearbyAttractionsCarousel";
// import BlueNAC from "../components/individualProperties/NearbyAttractionsCarousel/BlueNAC";
import ContactThisProperty from "../components/individualProperties/ContactThisProperty";
import FooterPage from "../components/FooterPage";

import bayvillagemiddletopimg from "../images/individualProperties/bayvillage/bayvillage-mid-top-img.jpg";
import bayvillageleftimg from "../images/individualProperties/bayvillage/bayvillage-left-img.jpg";
import bayvillagerightimg from "../images/individualProperties/bayvillage/bayvillage-right-img.jpg";
import bayvillagemiddlebottomimg from "../images/individualProperties/bayvillage/bayvillage-mid-bottom-img.jpg";

const propertyComponentListShortArrLeft = [
  "Hotel-inspired pool",
  "Expansive sun deck",
  "Private cabanas",
  "Resident lounge complete with cyber café and business center",
  "Yoga & Spin studio"
];

const propertyComponentListLongArrLeft = [
  "Hotel-inspired pool",
  "Expansive sun deck",
  "Private cabanas",
  "Resident lounge complete with cyber café and business center",
  "Yoga & Spin studio",
  "State of the art health and fitness club featuring high tech cardio equipment and free weights",
  "Serenity Garden",
  "Bark park",
  "Children's Playground",
  "Bike Parking",
  "Controlled access garage parking",
  "Luxer Package Room",
  "Dry cleaning lockers",
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
  "Quartz countertops",
  "Stainless steel appliances",
  "Designer lighting",
  "Chef's island*"
];

const propertyComponentListLongArrRight = [
  "Sleek, modern kitchens with custom cabinets",
  "Quartz countertops",
  "Stainless steel appliances",
  "Designer lighting",
  "Chef's island*",
  "Gourmet kitchen appliances package",
  "Wood tile porcelain flooring throughout",
  "Full size washer and dryer",
  "Double master en suites and private balconies",
  "Ceiling fans in every room",
  "Spacious walk-in closets",
  "Impact resistant windows and sliding glass doors",
  "Over-sized terraces *",
  "Pantry and linen close*"
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
  i => <li>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
  i => <li>{i}</li>
);

export default class BayVillage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSocial: false,
      are1: false, //grapeland
      are2: false, //miracleMile
      are3: false, //venetian pool
      are4: false, //grandGolfCourse
      are5: false, //biltmore
      are6: false, //wynwoodwalls
      are7: false, //viscaya
      are8: false, // brickellcc
      are9: false, //tropical park
      are10: false, // the falls
      are11: false, //deering estates
      are12: false, //zoo miami
      are13: false, // miami sequarium
      are14: false, //children museum
      are15: false, //bay side market
      are16: false, // jungle island
      are17: false, // parez art
      are18: false, //aaa
      are19: false //frost museum
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | Bay Village</title>
          <meta name="description" content="Helmet application" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-bayvillage-header-bg"
          pageNAME="BAY VILLAGE"
        ></EachPageHeader>
        <PropertyDescriptionMiddleTop
          propertyComponentTitle="AN ADDRESS OF CASUAL SOPHISTICATION"
          propertyComponentDescription="Studio, One, Two, and Three-Bedroom Apartment Homes starting"
          propertyComponentParagraph="A respite from the bustling city, Soleste Bay Village is located in the village of Palmetto Bay,
just South of Kendall. Enjoy the relaxation of this quiet community tucked away from Downtown
Miami, without sacrificing the convenience of urban-style amenities. Call today to
explore all that Soleste Bay Village has to offer."
          propertyComponentPrice="1,500"
          propertyComponentImage={bayvillagemiddletopimg}
          propertyExternalWebsite="http://solestebayvillage.com/"
          propertyNOWLEASING="PRE-LEASING NOVEMBER 2019"
          propertyMOVEINDATE="MOVE-IN MARCH 2020"
        ></PropertyDescriptionMiddleTop>
        <PropertyDescriptionLeft
          propertyComponentImage={bayvillageleftimg}
          propertyComponentListShort={propertyComponentListShortLeft}
          propertyComponentListLong={propertyComponentListLongLeft}
        ></PropertyDescriptionLeft>
        <PropertyDescriptionRight
          propertyComponentImage={bayvillagerightimg}
          propertyComponentListShort={propertyComponentListShortRight}
          propertyComponentListLong={propertyComponentListLongRight}
        ></PropertyDescriptionRight>
        <PropertyDescriptionMiddleBottom
          propertyComponentImage={bayvillagemiddlebottomimg}
        ></PropertyDescriptionMiddleBottom>
        {/* <BlueNAC
           are1={this.state.are1}
          are2={this.state.are2}
          are3={this.state.are3}
          are4={this.state.are4}
          are5={this.state.are5}
          are6={this.state.are6}
          are7={this.state.are7}
          are8={this.state.are8}
          are1={this.state.are9}
          are2={this.state.are10}
          are3={this.state.are11}
          are4={this.state.are12}
          are5={this.state.are13}
          are6={this.state.are14}
          are7={this.state.are15}
          are8={this.state.are16}
          are8={this.state.are17}
          are8={this.state.are18}
          are8={this.state.are19}
        ></BlueNAC> */}
        <ContactThisProperty
          propertyNAME="BAY VILLAGE"
          propertyADDRESS="..."
          facebookLink="..."
          instagramLink="..."
          websiteLink="http://solestebayvillage.com/"
          mapPhotoClass="mapPhoto mPBayVillage"
          googlemap="..."
          isSocial={this.state.isSocial}
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
