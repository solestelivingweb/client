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
      isSocial: false,
      are1: false, //Grapeland Park
      are2: false, //Miracle Mile
      are3: false, //Venetian Pool
      are4: false, //Granada Gold Course
      are5: false, //The Biltmore Hotel
      are6: true, //Wynwood Walls
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
      are17: true, //Perez Art Museum
      are18: true, //American Airlines Arena
      are19: true, //Frost Museum
      are20: true, //Adrienne Arsht Center
      are21: false, //Calle Ocho
      are22: false, //Coconut Grove
      are23: false, //Coral Reef Park
      are24: false, //Country Club Prado
      are25: false, //Dolphin Mall
      are26: false, //Doral City Center
      are27: false, //Downtown Dadeland
      are28: true, //Downtown Miami
      are29: false, //Lincoln Road
      are30: false, //Miami International Airport
      are31: true, //Port of Miami
      are32: true //Virgin Trains
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | Grand Central</title>
          <meta name="description" content="Soleste Grand Central" />
          <meta name="keywords" content="Soleste Grand Central" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-grandcentral-header-bg"
          pageNAME="GRAND CENTRAL"
        ></EachPageHeader>
        <PropertyDescriptionMiddleTop
          propertyComponentTitle="AN ADDRESS OF CASUAL SOPHISTICATION"
          propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes "
          propertyComponentParagraph="Downtown Miami’s newest residential gem, Soleste Grand Central is ideal for the urban dweller.
Cutting-edge amenities, stylish apartments, and an unmatched location characterize this stunning
multi-story building in the heart of Miami. Experience the city firsthand and easily commute using
the Brightline train, just steps away from your doorstep. Welcome home."
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
          propertyNAME="GRAND CENTRAL"
          propertyADDRESS="218 NW 8th St, Miami, FL 33136"
          facebookLink="..."
          instagramLink="..."
          websiteLink="..."
          mapPhotoClass="mapPhoto mPGrandCentral"
          googlemap="..."
          isSocial={this.state.isSocial}
          embedMap="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=218%20NW%208th%20St%2C%20Miami%2C%20FL%2033136+(Grand%20Central)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
