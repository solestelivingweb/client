import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";
import PropertySGONLYDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertySGONLYDescriptionMiddleTop";
import PropertyDescriptionLeft from "../components/individualProperties/pageComponents/PropertyDescriptionLeft";
import PropertyDescriptionRight from "../components/individualProperties/pageComponents/PropertyDescriptionRight";
import PropertyDescriptionMiddleBottom from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleBottom";
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
      are1: false, //Grapeland Park
      are2: false, //Miracle Mile
      are3: false, //Venetian Pool
      are4: false, //Granada Gold Course
      are5: false, //The Biltmore Hotel
      are6: false, //Wynwood Walls
      are7: true, //Vizcaya Museum and Gardens
      are8: true, //Brickell City Center
      are9: false, //Tropical Park
      are10: false, //The Falls
      are11: false, //Deering Estate
      are12: false, //Zoo Miami
      are13: true, //Miami Seaquarium
      are14: true, //Miami Children’s Museum
      are15: true, //Bayside Marketplace
      are16: true, //Jungle Island
      are17: false, //Perez Art Museum
      are18: false, //American Airlines Arena
      are19: false, //Frost Museum
      are20: false, //Adrienne Arsht Center
      are21: false, //Calle Ocho
      are22: false, //Coconut Grove
      are23: false, //Coral Reef Park
      are24: false, //Country Club Prado
      are25: false, //Dolphin Mall
      are26: false, //Doral City Center
      are27: false, //Downtown Dadeland
      are28: false, //Downtown Miami
      are29: true, //Lincoln Road
      are30: false, //Miami International Airport
      are31: false, //Port of Miami
      are32: false //Virgin Trains
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
          propertyNAME="SPRING GARDENS"
          propertyADDRESS="1025 Spring Garden Road, Miami, FL 33136"
          facebookLink="..."
          instagramLink="..."
          websiteLink="https://www.solesteliving.com/copy-of-soleste-grand-central"
          mapPhotoClass="mapPhoto mPSpringGardens"
          googlemap="https://goo.gl/maps/ehUoTnxNhxd6swd38"
          isSocial={this.state.isSocial}
          contactUs={this.state.contactUs}
          embedMap="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1033%20Spring%20Garden%20Road%2C%20Miami%2C%20FL+(Spring%20Gardens)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
