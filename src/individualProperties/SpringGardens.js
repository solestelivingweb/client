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

import springgardensmiddletopimg from "../images/individualProperties/springgardens/springgardens-mid-top-img.jpg";
import springgardensleftimg from "../images/individualProperties/springgardens/springgardens-left-img.jpg";
import springgardensrightimg from "../images/individualProperties/springgardens/springgardens-right-img.jpg";
import springgardensmiddlebottomimg from "../images/individualProperties/springgardens/springgardens-mid-bottom-img.jpg";

const propertyComponentListShortArrLeft = ["COMING SOON"];

const propertyComponentListLongArrLeft = ["COMING SOON"];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
  i => <li>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
  i => <li>{i}</li>
);

// right
const propertyComponentListShortArrRight = ["COMING SOON"];

const propertyComponentListLongArrRight = ["COMING SOON"];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
  i => <li>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
  i => <li>{i}</li>
);

export default class SpringGardens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      are1: true, //grapeland
      are2: false, //miracleMile
      are3: false, //venetian pool
      are4: false, //grandGolfCourse
      are5: false, //biltmore
      are6: true, //wynwoodwalls
      are7: false, //viscaya
      are8: true // brickellcc
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | Spring Gardens</title>
          <meta name="description" content="Helmet application" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-springgardens-header-bg"
          pageNAME="SPRING GARDENS"
        ></EachPageHeader>
        <PropertyDescriptionMiddleTop
          propertyComponentTitle="AN ADDRESS OF CASUAL SOPHISTICATION"
          propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes "
          propertyComponentImage={springgardensmiddletopimg}
          propertyNOWLEASING="PRE-LEASING MARCH 2021"
          propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertyDescriptionMiddleTop>
        <PropertyDescriptionLeft
          propertyComponentImage={springgardensleftimg}
          propertyComponentListShort={propertyComponentListShortLeft}
          propertyComponentListLong={propertyComponentListLongLeft}
        ></PropertyDescriptionLeft>
        <PropertyDescriptionRight
          propertyComponentImage={springgardensrightimg}
          propertyComponentListShort={propertyComponentListShortRight}
          propertyComponentListLong={propertyComponentListLongRight}
        ></PropertyDescriptionRight>
        <PropertyDescriptionMiddleBottom
          propertyComponentImage={springgardensmiddlebottomimg}
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
          propertyNAME="SPRING GARDENS"
          // propertyADDRESS="undefined address"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
