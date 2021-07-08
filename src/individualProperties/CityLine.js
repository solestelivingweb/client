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
import citylinemiddletopimg from "../images/individualProperties/cityline/cityline-mid-top-img.jpg";
import citylineleftimg from "../images/individualProperties/cityline/cityline-left-img.jpg";
import citylinerightimg from "../images/individualProperties/cityline/cityline-right-img.jpg";
import citylinemiddlebottomimg from "../images/individualProperties/cityline/cityline-mid-bottom-img.jpg";

const propertyComponentListShortArrLeft = [
  'Luxer Package Room',
  'Dry Cleaning Lockers',
  'Bark Park',
  'Outdoor Fitness Area',
  'Pet Wash Station',
];

const propertyComponentListLongArrLeft = [
  'Luxer Package Room',
  'Dry Cleaning Lockers',
  'Bark Park',
  'Outdoor Fitness Area',
  'Pet Wash Station',
  'Resident Fitness Center featuring Hi-Tech Cardio Gear & Free Weights',
  'Yoga & Spin Studio',
  'Sauna & Steam Room',
  'Resort-Inspired Pool',
  'Cabanas',
  'Social Lounge',
  'Al-Fresco Dining featuring Summer Kitchen & Grills'
];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
  (i) => <li key={i}>{i}</li>
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
  'Double Master-En-Suites & Private Balcones',
  'Ceiling Fans',
  'Spacious Walk-In Closets',
  'Impact Resistant Windows & Sliding Glass Doors',
  'Over-Sized Terraces*',
  'Pantry & Linen Closet*',
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
  (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
  (i) => <li key={i}>{i}</li>
);

export default class CityLine extends Component {
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
      are25: false, //Dolphin Mall
      are26: false, //Doral City Center
      are27: false, //Downtown Dadeland
      are28: false, //Downtown Miami
      are29: false, //Lincoln Road
      are30: false, //Miami International Airport
      are31: false, //Port of Miami
      are32: false, //Virgin Trains
      // 2020
      are33: true, //Dania Beach
      are34: true, //Dania Pointe (shopping)
      are35: true, //Fort Lauderdale-Hollywood International Airport
      are36: true, //Seminole Hardrock Hotel and Casino
      are37: true, //Las Olas
      are38: true, //Brightline Fort Lauderdale
      are39: true, //Broward center of performing arts
      are40: true, //Th awharf
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | Cityline</title>
          <meta name="description" content="Soleste Cityline" />
          <meta name="keywords" content="Soleste Cityline" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-cityline-header-bg"
          pageNAME="CITYLINE"
        ></EachPageHeader>
        <PropertySGONLYDescriptionMiddleTop
          propertyComponentTitle="A COASTAL INDULGENCE OF DWELLING"
          propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes"
          propertyComponentParagraph="Just a few miles off the coast of beautiful beaches and located 
          in downtown Dania Beach will reside Soleste Cityline. Adventure out to see the sights and city-life 
          or stay in and enjoy the sensational amenities that this incredible building offers. However you prefer 
          to spend your time, there is so much to see and do. It’s all waiting for you at Soleste Cityline."
          propertyComponentPrice=""
          propertyComponentImage={citylinemiddletopimg}
          propertyNOWLEASING="PRELEASING SUMMER 2022"
        // propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertySGONLYDescriptionMiddleTop>
        <PropertyDescriptionLeft
          propertyComponentImage={citylineleftimg}
          propertyComponentListShort={propertyComponentListShortLeft}
          propertyComponentListLong={propertyComponentListLongLeft}
        ></PropertyDescriptionLeft>
        <PropertyDescriptionRight
          propertyComponentImage={citylinerightimg}
          propertyComponentListShort={propertyComponentListShortRight}
          propertyComponentListLong={propertyComponentListLongRight}
        ></PropertyDescriptionRight>
        <PropertyDescriptionMiddleBottom
          propertyComponentImage={citylinemiddlebottomimg}
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
          // 2020
          are33={this.state.are33}
          are34={this.state.are34}
          are35={this.state.are35}
          are36={this.state.are36}
          are37={this.state.are37}
          are38={this.state.are38}
          are39={this.state.are39}
          are40={this.state.are40}
        ></BlueNAC>
        <ContactThisProperty
          propertyNAME="CITYLINE"
          propertyADDRESS="4 North Federal Highway Dania Beach, FL 33004"
          facebookLink="..."
          instagramLink="..."
          mapPhotoClass="mapPhoto mPSpringGardens"
          googlemap="https://goo.gl/maps/ehUoTnxNhxd6swd38"
          isSocial={this.state.isSocial}
          contactUs={this.state.contactUs}
          embedMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.4199055384242!2d-80.1454566849731!3d26.052529983505583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9aa5f5158dcd1%3A0xaf2a9b35e69833f3!2s4%20N%20Federal%20Hwy%2C%20Dania%20Beach%2C%20FL%2033004!5e0!3m2!1sen!2sus!4v1606860647671!5m2!1sen!2sus"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
