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
// 2022
import onthebaymiddletopimg from "../images/individualProperties/onthebay/Soleste on the Bay Rendering 2.jpg";
import onthebaymiddlebottomimg from "../images/individualProperties/onthebay/Soleste on the Bay Rendering 1.jpg";

const propertyComponentListShortArrLeft = [
    "Health Club with Hi-Tech Cardio Gear & Free Weights",
    "Yoga, Spin & Aerobics Room with On-Demand Fitness",
    "Social and Gaming Lounge ",
    "Al-Fresco Dining featuring Summer Kitchen & Grills "
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
    "In-Unit USB Outlets ",
    "Electric Car Charging Stations",
    "Community Recycling Services",
    "Green Building Certification",
    "Extra-Space Storage Units ",
    "Convenient North Miami Beach Location"
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
    "Undermount dual sinks",
    "Convenient keyless entry"
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
            are65: true, // The Ancient Spanish Monastery
            are41: true, // Oleta River Outdoor Center
            are66: true, // IPIC Theaters
            are45: true, // Aventura Mall
            are64: true, // Moca North Miami
            are46: true, // Sunny Isles Beach
            are43: true, // Tidal Cove Water Park
            are47: true, // Judge Arthur Snyder Tennis Center
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
                    pageBACKGROUND="individual-property-westgate-header-bg"
                    pageNAME="ON THE BAY"
                ></EachPageHeader>
                <PropertySGONLYDescriptionMiddleTop
                    propertyComponentTitle="FEATURING LUXURIOUS AMENITIES AND RESORT-STYLE LIVING"
                    propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes"
                    propertyComponentParagraph=""
                    propertyComponentPrice=""
                    propertyComponentImage={onthebaymiddletopimg}
                    propertyNOWLEASING="COMING SOON"
                // propertyMOVEINDATE="MOVE-IN JUNE 2021"
                ></PropertySGONLYDescriptionMiddleTop>
                <PropertyDescriptionLeft
                    propertyComponentImage={'https://images.unsplash.com/photo-1544843776-7c98a52e08a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'}
                    propertyComponentListShort={propertyComponentListShortLeft}
                    propertyComponentListLong={propertyComponentListLongLeft}
                ></PropertyDescriptionLeft>
                <PropertyDescriptionRight
                    propertyComponentImage={'https://images.unsplash.com/photo-1592502007211-ac3b1ca5510e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'}
                    propertyComponentListShort={propertyComponentListShortRight}
                    propertyComponentListLong={propertyComponentListLongRight}
                ></PropertyDescriptionRight>
                <PropertyDescriptionMiddleBottom
                    propertyComponentImage={onthebaymiddlebottomimg}
                ></PropertyDescriptionMiddleBottom>
                <BlueNAC
                    // The Ancient Spanish Monastery
                    are41={this.state.are41}
                    // IPIC Theaters
                    are45={this.state.are45}
                    // Moca North Miami
                    are46={this.state.are46}
                    are43={this.state.are43}
                    are47={this.state.are47}
                    are64={this.state.are64}
                    are65={this.state.are65}
                    are66={this.state.are66}
                ></BlueNAC>
                <ContactThisProperty
                    propertyNAME="ON THE BAY"
                    propertyADDRESS="16375 Biscayne BoulevardNorth Miami Beach, FL 33160"
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
