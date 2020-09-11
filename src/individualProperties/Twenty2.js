import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";
import PropertyDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleTop";
import PropertyDescriptionLeft from "../components/individualProperties/pageComponents/PropertyDescriptionLeft";
import PropertyDescriptionRight from "../components/individualProperties/pageComponents/PropertyDescriptionRight";
import CarouselPageTwenty2 from "../components/individualProperties/pageComponents/CarouselPageTwenty2";
import BlueNAC from "../components/individualProperties/NearbyAttractionsCarousel/BlueNAC";
import ContactThisProperty from "../components/individualProperties/ContactThisProperty";
import FooterPage from "../components/FooterPage";
import twenty2middletopimg from "../images/individualProperties/twenty2/twenty2-mid-top-img.jpg";
import twenty2leftimg from "../images/individualProperties/twenty2/twenty2-left-img.jpg";
import twenty2rightimg from "../images/individualProperties/twenty2/twenty2-right-img.jpg";

const propertyComponentListShortArrLeft = [
  "Hotel-inspired pool",
  "Expansive sun deck",
  "Private cabanas",
  "Sky deck with grill with bistro seating",
  "Dog park and washing station"
];

const propertyComponentListLongArrLeft = [
  "Hotel-inspired pool",
  "Expansive sun deck",
  "Private cabanas",
  "Sky deck with grill with bistro seating",
  "Dog park and washing station",
  "Rooftop movie theater",
  "Yoga & spin studio",
  "State of the art health and fitness club featuring high tech cardio equipment and free weights ",
  "Hammock & yoga lawn",
  "Sports lounge complete with shuffle, billiards, poker, and dominoes tables",
  "Bicycle storage",
  "Children's playground",
  "Co-ed steam room and sauna",
  "Luxer Package Room",
  "Dry cleaning lockers",
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
  "Quartz countertops",
  "Stainless steel appliances",
  "Designer lighting",
  "Chef's island"
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
  "Pantry and linen closet *",
  "Expansive views of Coral Gables*"
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
  i => <li>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
  i => <li>{i}</li>
);

export default class Twenty2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSocial: true,
      are1: false, //Grapeland Park
      are2: true, //Miracle Mile
      are3: true, //Venetian Pool
      are4: true, //Granada Gold Course
      are5: true, //The Biltmore Hotel
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
      are22: true, //Coconut Grove
      are23: false, //Coral Reef Park
      are24: false, //Country Club Prado
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
          <title>Soleste Living | Twenty2</title>
          <meta name="description" content="Soleste Twenty2" />
          <meta name="keywords" content="Soleste Twenty2" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-twenty2-header-bg"
          pageNAME="TWENTY2"
        ></EachPageHeader>
        <PropertyDescriptionMiddleTop
          propertyComponentTitle="AN ADDRESS OF CASUAL SOPHISTICATION"
          propertyComponentDescription="Studio, One, Two, and Three-Bedroom Apartment Homes starting"
          propertyComponentParagraph="
Soleste Twenty2 is nestled in the heart of West Miami, in close proximity to the most historically and architecturally significant city in South Florida, Coral Gables. Stroll the pedestrian-friendly streets of Miracle Mile or experience a sensory overload with hundreds of retailers showcasing the finest names in fashion and a de- lightful array of dining choices. From its prominent location, to its unsurpassed level of quality, exceptional charm and ultimate amenities, Soleste Twenty2 is your desired destination."
          propertyComponentPrice="1,485"
          propertyComponentImage={twenty2middletopimg}
          propertyExternalWebsite="https://www.solestetwenty2.com"
          propertyNOWLEASING="NOW LEASING"
          propertyMOVEINDATE="MOVE-IN OCTOBER 2019"
        ></PropertyDescriptionMiddleTop>
        <PropertyDescriptionLeft
          propertyComponentImage={twenty2leftimg}
          propertyComponentListShort={propertyComponentListShortLeft}
          propertyComponentListLong={propertyComponentListLongLeft}
        ></PropertyDescriptionLeft>
        <PropertyDescriptionRight
          propertyComponentImage={twenty2rightimg}
          propertyComponentListShort={propertyComponentListShortRight}
          propertyComponentListLong={propertyComponentListLongRight}
        ></PropertyDescriptionRight>
        {/* <PropertyDescriptionMiddleBottom
          propertyComponentImage={twenty2middlebottomimg}
        ></PropertyDescriptionMiddleBottom> */}
        <CarouselPageTwenty2></CarouselPageTwenty2>
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
          propertyNAME="TWENTY2"
          propertyADDRESS="2201 Ludlam Road, West Miami, FL 33155"
          facebookLink="https://www.facebook.com/solestetwenty2/"
          instagramLink="https://www.instagram.com/solestetwenty2/"
          websiteLink="https://www.solestetwenty2.com/"
          mapPhotoClass="mapPhoto mPTwenty2"
          googlemap="https://goo.gl/maps/6azsGrhagwDbGsj58"
          isSocial={this.state.isSocial}
          embedMap="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=2201%20Ludlam%20Road%2C%20Miami%2C%20FL%2033155+(Twenty2)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
// -b