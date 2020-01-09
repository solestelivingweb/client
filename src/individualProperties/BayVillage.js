import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";
import PropertyDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleTop";
import PropertyDescriptionLeft from "../components/individualProperties/pageComponents/PropertyDescriptionLeft";
import PropertyDescriptionRight from "../components/individualProperties/pageComponents/PropertyDescriptionRight";
import PropertyDescriptionMiddleBottom from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleBottom";
import BlueNAC from "../components/individualProperties/NearbyAttractionsCarousel/BlueNAC";
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
      are10: true, //The Falls
      are11: true, //Deering Estate
      are12: true, //Zoo Miami
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
      are23: true, //Coral Reef Park
      are24: false, //Country Club Prado
      are25: false, //Dolphin Mall
      are26: false, //Doral City Center
      are27: true, //Downtown Dadeland
      are28: false, //Downtown Miami
      are29: false, //Lincoln Road
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
          <title>Soleste Living | Bay Village</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-bayvillage-header-bg"
          pageNAME="BAY VILLAGE"
        ></EachPageHeader>
        <PropertyDescriptionMiddleTop
          propertyComponentTitle="AN ADDRESS OF CASUAL SOPHISTICATION"
          propertyComponentDescription="Studio, One, Two, and Three-Bedroom Apartment Homes starting"
          propertyComponentParagraph="A respite from the bustling city, Soleste Bay Village is located in Palmetto Bay, just South of
Dadeland. Enjoy the relaxation of this quiet community tucked away from Downtown Miami,
without sacrificing the convenience of urban-style amenities. Call today to explore all that Soleste
Bay Village has to offer."
          propertyComponentPrice="1,500"
          propertyComponentImage={bayvillagemiddletopimg}
          propertyExternalWebsite="http://solestebayvillage.com/"
          propertyNOWLEASING="PRE-LEASING NOVEMBER 2019"
          propertyMOVEINDATE="MOVE-IN MARCH 2020"
          contactUs={this.state.contactUs}
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
          propertyNAME="BAY VILLAGE"
          propertyADDRESS="18055 S Dixie Hwy, Palmetto Bay, FL 33157"
          facebookLink="..."
          instagramLink="..."
          websiteLink="http://solestebayvillage.com/"
          mapPhotoClass="mapPhoto mPBayVillage"
          googlemap="..."
          isSocial={this.state.isSocial}
          contactUs={this.state.contactUs}
          embedMap="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=18301%20S%20Dixie%20Hwy%2C%20Miami%2C%20FL%2033157+(Bay%20Village)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed"
        ></ContactThisProperty>

        <FooterPage></FooterPage>
      </div>
    );
  }
}
