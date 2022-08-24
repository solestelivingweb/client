import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";
import PropertySGONLYDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertySGONLYDescriptionMiddleTop";
import PropertyDescriptionLeft from "../components/individualProperties/pageComponents/PropertyDescriptionLeft";
import PropertyDescriptionRight from "../components/individualProperties/pageComponents/PropertyDescriptionRight";
// import PropertyDescriptionMiddleBottom from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleBottom";
import BlueNAC from "../components/individualProperties/NearbyAttractionsCarousel/BlueNAC";
import ContactThisProperty from "../components/individualProperties/ContactThisProperty";
import FooterPage from "../components/FooterPage";
import onthebaymiddletopimg from "../images/individualProperties/onthebay/Soleste on the Bay Rendering 1 copy.jpg";
import onthebaymiddlebottomimg from "../images/individualProperties/onthebay/Soleste on the Bay Rendering 1.jpg";
import wfh2 from "../images/individualProperties/onthebay/wfh2.jpeg";
import sn1 from "../images/individualProperties/onthebay/sn1.jpg";
import CarouselPageTmp from "../components/individualProperties/pageComponents/CarouselPageTmp";

const sliderImages = [
  onthebaymiddlebottomimg,
  onthebaymiddletopimg,
  onthebaymiddlebottomimg,
];

const propertyComponentListShortArrLeft = [
  "Health Club with Hi-Tech Cardio Gear & Free Weights",
  "Yoga, Spin & Aerobics Room with On-Demand Fitness",
  "Social and Gaming Lounge ",
  "Al-Fresco Dining featuring Summer Kitchen & Grills ",
];

const propertyComponentListLongArrLeft = [
  "Health Club with Hi-Tech Cardio Gear & Free Weights",
  "Yoga, Spin & Aerobics Room with On-Demand Fitness",
  "Social and Gaming Lounge ",
  "Al-Fresco Dining featuring Summer Kitchen & Grills ",
  "Hotel-Inspired Swimming Pool",
  "Poolside Cabanas With Daybeds",
  "Cyber Lobby with Co-Working Spaces",
  "Bark Parks & Pet Washing Station",
  "Community Sponsored Resident Events",
  "24/7 Package Concierge System",
  "Dry Cleaning & Laundry Services",
  "Resident Portal With Online Rent Payment & Service Requests",
  "Complimentary Wi-Fi In Amenity Spaces",
  "On-Site Management & 24-Hour Maintenance Team",
  "Controlled Access Parking",
  "Onsite Bike Parking and Storage",
  "Electric Car Charging Stations",
  "Community Recycling Services",
  "Green Building Certification",
  "Additional Storage Units",
  "Convenient North Miami Beach Location",
];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
  (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
  (i) => <li key={i}>{i}</li>
);

// right
const propertyComponentListShortArrRight = [
  "Studio, One,Two & Three Bedroom Apartment Homes And Penthouse Residences",
  "Sleek & Spacious Modern Kitchens",
  "Elegant Quartz Countertops & Tile Backsplash",
  "Gourmet Stainless Steel Appliance Package",
];

const propertyComponentListLongArrRight = [
  "Studio, One,Two & Three Bedroom Apartment Homes And Penthouse Residences",
  "Sleek & Spacious Modern Kitchens",
  "Elegant Quartz Countertops & Tile Backsplash",
  "Gourmet Stainless Steel Appliance Package",
  "Designer Lighting",
  "European Style Two-Tone Cabinetry",
  "Luxury Ceramic Tiled Flooring Throughout",
  "Kitchen Islands with Overhang Seating Space",
  "Frameless Showers and Deep Soaking Tubs",
  "Full-Size Washer & Dryer",
  "Ultra-Modern Ceiling Fans ",
  "Spacious Walk-In Closets",
  "Floor-To-Ceiling Impact Windows and Sliding Glass Doors",
  "Sprawling Terraces with City Views",
  "Space-Saving Pantry & Linen Closets",
  "Undermount Kitchen Sinks",
  "Convenient Keyless Entry",
  "In-Unit USB Outlets",
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
  (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
  (i) => <li key={i}>{i}</li>
);

export default class OnTheBay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSocial: false,
      contactUs: true,
      are41: true, // Oleta River Outdoor Center
      are45: true, // Aventura Mall
      are46: true, // Sunny Isles Beach
      are43: true, // Tidal Cove Water Park
      are47: true, // Judge Arthur Snyder Tennis Center
      are64: true, // Moca North Miami
      are65: true, // The Ancient Spanish Monastery
      are66: true, // IPIC Theaters
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | ON THE BAY</title>
          <meta name="description" content="Soleste ON THE BAY" />
          <meta name="keywords" content="Soleste ON THE BAY" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="individual-property-onthebay-header-bg"
          pageNAME="ON THE BAY"
        ></EachPageHeader>
        <PropertySGONLYDescriptionMiddleTop
          propertyComponentTitle="LIVE EFFORTLESSLY WITH LUXURY"
          propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes"
          propertyComponentParagraph="Enter into a world of unrivaled luxury with Soleste on the Bay. Located in North Miami Beach, Soleste on the Bay sits near some of the city’s most popular attractions. Spend your days strolling through Aventura Mall or lay back and unwind at Sunny Isles Beach. Regardless of how you decide to spend your time, Soleste on the Bay welcomes you home to an abundance of luxe comfort."
          propertyComponentPrice=""
          propertyComponentImage={onthebaymiddletopimg}
          propertyNOWLEASING="COMING SOON"
          // propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertySGONLYDescriptionMiddleTop>
        <PropertyDescriptionLeft
          propertyComponentImage={sn1}
          propertyComponentListShort={propertyComponentListShortLeft}
          propertyComponentListLong={propertyComponentListLongLeft}
        ></PropertyDescriptionLeft>
        <PropertyDescriptionRight
          propertyComponentImage={wfh2}
          propertyComponentListShort={propertyComponentListShortRight}
          propertyComponentListLong={propertyComponentListLongRight}
        ></PropertyDescriptionRight>
        {/* <PropertyDescriptionMiddleBottom
          propertyComponentImage={onthebaymiddlebottomimg}
        ></PropertyDescriptionMiddleBottom> */}
        <CarouselPageTmp sliderImages={sliderImages} length={2} />
        <BlueNAC
          are41={this.state.are41}
          are45={this.state.are45}
          are46={this.state.are46}
          are43={this.state.are43}
          are47={this.state.are47}
          are64={this.state.are64}
          are65={this.state.are65}
          are66={this.state.are66}
        ></BlueNAC>
        <ContactThisProperty
          propertyNAME="ON THE BAY"
          propertyADDRESS="16375 Biscayne Boulevard, North Miami Beach, FL 33160"
          facebookLink="..."
          instagramLink="..."
          mapPhotoClass="mapPhoto mPSpringGardens"
          googlemap="https://goo.gl/maps/csHdEHXx8EzZP9MY7"
          isSocial={this.state.isSocial}
          contactUs={this.state.contactUs}
          embedMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.2189850599266!2d-80.1522347!3d25.928033499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ada51140488b%3A0x32e7114741abb7c3!2s16375%20Biscayne%20Blvd%2C%20Aventura%2C%20FL%2033160!5e0!3m2!1sen!2sus!4v1657750659497!5m2!1sen!2sus"
        ></ContactThisProperty>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
