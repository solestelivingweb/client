import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";
import PropertyDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleTop";
import PropertyDescriptionLeft from "../components/individualProperties/pageComponents/PropertyDescriptionLeft";
import PropertyDescriptionRight from "../components/individualProperties/pageComponents/PropertyDescriptionRight";
// import PropertyDescriptionMiddleBottom from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleBottom";
import CarouselPageAlameda from "../components/individualProperties/pageComponents/CarouselPageAlameda";
import BlueNAC from "../components/individualProperties/NearbyAttractionsCarousel/BlueNAC";
import ContactThisProperty from "../components/individualProperties/ContactThisProperty";
import FooterPage from "../components/FooterPage";
// import alamedamiddletopimg from "../images/individualProperties/alameda/alameda-mid-top-img.jpg";
import alamedaMiddletopvid from "../videos/Soleste Alameda.mp4";
import alamedaleftimg from "../images/individualProperties/alameda/alameda-left-img.jpg";
import alamedarightimg from "../images/individualProperties/alameda/alameda-right-img.jpg";
// import alamedamiddlebottomimg from "../images/individualProperties/alameda/alameda-mid-bottom-img.jpg";

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
  "Children's Playground",
  "Bike Parking",
  "Controlled access garage parking",
  "Car charging stations",
  "Outdoor Kitchen and Grilling",
  "Sky lounge with life size chess and ping pong",
  "Dog Wash Station",
  "Bike Shop w/repair station",
  "Dry cleaning lockers"
];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
  (i, index) => <li key={index}>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
  (i, index) => <li key={index}>{i}</li>
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
  (i, index) => <li key={index}>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
  (i, index) => <li key={index}>{i}</li>
);

export default class Alameda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSocial: true,
      isVideo: true,
      contactUs: true,
      are1: false, //Grapeland Park
      are2: true, //Miracle Mile
      are3: true, //Venetian Pool
      are4: false, //Granada Gold Course
      are5: false, //The Biltmore Hotel
      are6: false, //Wynwood Walls
      are7: false, //Vizcaya Museum and Gardens
      are8: true, //Brickell City Center
      are9: true, //Tropical Park
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
      are21: true, //Calle Ocho
      are22: false, //Coconut Grove
      are23: false, //Coral Reef Park
      are24: true, //Country Club Prado
      are25: false, //Dolphin Mall
      are26: false, //Doral City Center
      are27: false, //Downtown Dadeland
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
          <title>Soleste Living | Alameda</title>
          <meta name="description" content="Soleste Alameda" />
          <meta name="keywords" content="Soleste Alameda" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-alameda-header-bg"
          pageNAME="ALAMEDA"
        ></EachPageHeader>
        <PropertyDescriptionMiddleTop
          propertyComponentTitle="AN ADDRESS OF CASUAL SOPHISTICATION"
          propertyComponentDescription="Studio, One, and Two-Bedroom Apartment Homes"
          propertyComponentParagraph="Located in West Miami, just a short distance from the Miami International Airport and the Coral
Gables neighborhood, Soleste Alameda offers hotel-inspired amenities including a resort-style
pool with private cabanas as well as a yoga and spin studio and expansive sun deck. Discover
your new home today."
          propertyComponentPrice="none"
          // propertyComponentImage={alamedamiddletopimg}
          isVideo={this.state.isVideo}
          propertyComponentVideo={alamedaMiddletopvid}
          propertyNOWLEASING="NOW LEASING"
          // propertyMOVEINDATE="MOVE-IN MARCH 2020"
          contactUs={this.state.contactUs}
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
        {/* <PropertyDescriptionMiddleBottom
          propertyComponentImage={alamedamiddlebottomimg}
        ></PropertyDescriptionMiddleBottom> */}
        <CarouselPageAlameda></CarouselPageAlameda>
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
          propertyNAME="ALAMEDA"
          propertyADDRESS="6320 Southwest 8th Street, West Miami, FL"
          facebookLink="https://www.facebook.com/solestealameda/"
          instagramLink="https://www.instagram.com/soleste_alameda/?hl=en"
          mapPhotoClass="mapPhoto mPAlameda"
          googlemap="..."
          isSocial={this.state.isSocial}
          contactUs={this.state.contactUs}
          embedMap="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=6320%20SW%208th%20St+(Alameda)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
