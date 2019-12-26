import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";

import PropertySGONLYDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertySGONLYDescriptionMiddleTop";
// import PropertyDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleTop";
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
      isSocial: false,
      contactUs: true,
      are1: true, //grapeland
      are2: false, //miracleMile
      are3: false, //venetian pool
      are4: false, //grandGolfCourse
      are5: false, //biltmore
      are6: true, //wynwoodwalls
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
          <title>Soleste Living | Spring Gardens</title>
          <meta name="description" content="Helmet application" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-springgardens-header-bg"
          pageNAME="SPRING GARDENS"
        ></EachPageHeader>
        {/* <PropertyDescriptionMiddleTop
          propertyComponentTitle="AN ADDRESS OF CASUAL SOPHISTICATION"
          propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes "
          propertyComponentPrice=""
          propertyComponentImage={springgardensmiddletopimg}
          propertyNOWLEASING="PRE-LEASING MARCH 2021"
          propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertyDescriptionMiddleTop> */}
        <PropertySGONLYDescriptionMiddleTop
          propertyComponentTitle="AN ADDRESS OF CASUAL SOPHISTICATION"
          propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes "
          propertyComponentPrice=""
          propertyComponentImage={springgardensmiddletopimg}
          propertyNOWLEASING="PRE-LEASING MARCH 2021"
          propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertySGONLYDescriptionMiddleTop>
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
        ></BlueNAC>
        <ContactThisProperty
          propertyNAME="SPRING GARDENS"
          propertyADDRESS="1025 Spring Garden Road, Miami, FL 33136"
          facebookLink="..."
          instagramLink="..."
          websiteLink="https://www.solesteliving.com/copy-of-soleste-grand-central"
          mapPhotoClass="mapPhoto mPSpringGardens"
          googlemap="https://goo.gl/maps/ehUoTnxNhxd6swd38"
          isSocial={this.state.isSocial}
          contactUs={this.state.contactUs}
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
