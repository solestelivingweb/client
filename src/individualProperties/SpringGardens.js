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

const propertyComponentListShortArrLeft = [
  "State of the art Fitness center featuring high tech cardio equipment and free weights",
  "Yoga and spin studio",
  "Hotel-inspired Pool",
  "Expansive Sun deck",
  "Resident Lounge",
];

const propertyComponentListLongArrLeft = [
  "State of the art Fitness center featuring high tech cardio equipment and free weights",
  "Yoga and spin studio",
  "Hotel-inspired Pool",
  "Expansive Sun deck",
  "Resident Lounge",
  "Package room",
  "Business Lounge",
  "Bark Park",
  "Bicycle storage",
  "Controlled access parking garage",
];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
  (i) => <li class='shortL' key={i}>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
  (i) => <li key={i}>{i}</li>
);

// right
const propertyComponentListShortArrRight = [
  'Sleek, Modern Kitchens with Custom Cabinets',
  'Quartz Countertops',
  'Stainless Steel Appliances',
  'Designer Lighting',
  'Chef’s Island*',
];

const propertyComponentListLongArrRight = [
  'Sleek, Modern Kitchens with Custom Cabinets',
  'Quartz Countertops',
  'Stainless Steel Appliances',
  'Designer Lighting',
  'Chef’s Island*',
  'Gourmet Kitchen Appliances Package',
  'Full-Size Washer & Dryer',
  'Double Master-En-Suites & Private Balconies',
  'Ceiling Fans',
  'Spacious Walk-In Closets',
  'Impact Resistant Windows & Sliding Glass Doors',
  'Over-Sized Terraces*',
  'Pantry & Linen Closet*'
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
  (i) => <li class='shortR' key={i}>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
  (i) => <li key={i}>{i}</li>
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
      are32: false, //Virgin Trains
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | Spring Gardens</title>
          <meta name="description" content="Soleste Spring Gardens" />
          <meta name="keywords" content="Soleste Spring Gardens" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-springgardens-header-bg"
          pageNAME="SPRING GARDENS"
        ></EachPageHeader>
        <PropertySGONLYDescriptionMiddleTop
          propertyComponentTitle="AN ADDRESS OF CASUAL SOPHISTICATION"
          propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes "
          propertyComponentParagraph="Situated adjacent to the University of Miami Health System, Soleste Spring Gardens is the Health
District’s newest multi-unit residential destination. Easily accessible to the Dolphin Expressway,
1-95, and more, you can stay central to it all in Miami. Join the waitlist to be the first to know when
leasing opens for this exciting new living community."
          propertyComponentPrice=""
          propertyComponentImage={springgardensmiddletopimg}
          propertyNOWLEASING="PRE-LEASING MARCH 2022"
        // propertyMOVEINDATE="MOVE-IN JUNE 2021"
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
          propertyADDRESS="1005 Spring Garden Road, Miami, FL 33136"
          facebookLink="..."
          instagramLink="..."
          mapPhotoClass="mapPhoto mPSpringGardens"
          googlemap="https://goo.gl/maps/ehUoTnxNhxd6swd38"
          isSocial={this.state.isSocial}
          contactUs={this.state.contactUs}
          embedMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1796.2724231055656!2d-80.21240032398681!3d25.78559329588647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6c0ece12a57%3A0xbed96c45709307dd!2s1005%20Spring%20Garden%20Rd%2C%20Miami%2C%20FL%2033136!5e0!3m2!1sen!2sus!4v1625834671699!5m2!1sen!2sus"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}

