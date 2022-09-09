import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";
import PropertySGONLYDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertySGONLYDescriptionMiddleTop";
import PropertyDescriptionLeft from "../components/individualProperties/pageComponents/PropertyDescriptionLeft";
import PropertyDescriptionRight from "../components/individualProperties/pageComponents/PropertyDescriptionRight";
// import PropertyDescriptionMiddleBottom from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleBottom";
// import CarouselPageHollywoodVillage from "../components/individualProperties/pageComponents/CarouselPageHollywoodVillage";
import BlueNAC from "../components/individualProperties/NearbyAttractionsCarousel/BlueNAC";
import ContactThisProperty from "../components/individualProperties/ContactThisProperty";
import FooterPage from "../components/FooterPage";
import palmstationmiddletopimg from "../images/individualProperties/palmstation/Palm Station Rendering 1 2.jpg"
// import hollywoodvillagemiddlebottomimg from "../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 1.jpg";
import gl1 from '../images/individualProperties/palmstation/gl1.jpg';
import wfh1 from '../images/individualProperties/palmstation/wfh1.jpeg';

import CarouselPageTmp from '../components/individualProperties/pageComponents/CarouselPageTmp';
import ps1 from "../images/individualProperties/palmstation/Palm Station Rendering 1.jpg"
import ps2 from "../images/individualProperties/palmstation/Palm Station Rendering 2.png"
import ps3 from "../images/individualProperties/palmstation/Palm Station Rendering 3.png"
import ps4 from "../images/individualProperties/palmstation/Palm Station Rendering 1.jpg"

const sliderImages = [ps1, ps2, ps3, ps4];

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
    "Convenient Location"
];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
    (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
    (i) => <li key={i}>{i}</li>
);

// right
const propertyComponentListShortArrRight = [
    "Studio, One, Two & Three Bedroom Apartment Homes And Penthouse Residences",
    "Sleek & Spacious Modern Kitchens",
    "Elegant Quartz Countertops & Tile Backsplash",
    "Gourmet Stainless Steel Appliance Package",
];

const propertyComponentListLongArrRight = [
    "Studio, One, Two & Three Bedroom Apartment Homes And Penthouse Residences",
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
    "Convenient Keyless Entry ",
    "In-Unit USB Outlets ",
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
    (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
    (i) => <li key={i}>{i}</li>
);

export default class PalmStation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSocial: false,
            contactUs: true,
            are74: true, // AMC CityPlace 20
            are73: true, // Green Complex for Sports & Recreation
            are72: true, // Worth Avenue
            are71: true, // Flagler Museum
            are70: true, // Palm Beach Island
            are69: true, // The Square
            are68: true, // Palm Beach International Airport
            are67: true // Meyer Ampitheater

        };
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Soleste Living | Palm Station</title>
                    <meta name="description" content="Soleste Palm Station" />
                    <meta name="keywords" content="Soleste Palm Station" />
                </Helmet>
                <EachPageHeader
                    pageBACKGROUND="individual-property-palmstation-header-bg"
                    pageNAME="PALM STATION"
                ></EachPageHeader>
                <PropertySGONLYDescriptionMiddleTop
                    propertyComponentTitle="A MODERNISTIC TAKE ON BLISSFUL LIVING"
                    propertyComponentDescription="Studio Suites, One, Two, and Three Bedroom Apartment Homes"
                    propertyComponentParagraph="Capture a glimpse of Soleste Palm Station, nestled in the heart of Downtown West Palm Beach. This upscale residence is near The Square, a contemporary lifestyle destination for retail, cuisines, and nightlife. Soleste Palm Station offers poolside cabanas and daybeds so you can decompress during your days, or you can explore nearby to enjoy LIVE entertainment by night."
                    propertyComponentPrice=""
                    propertyComponentImage={palmstationmiddletopimg}
                    propertyNOWLEASING="COMING SOON"
                // propertyMOVEINDATE="MOVE-IN JUNE 2021"
                ></PropertySGONLYDescriptionMiddleTop>
                <PropertyDescriptionLeft
                    propertyComponentImage={gl1}
                    propertyComponentListShort={propertyComponentListShortLeft}
                    propertyComponentListLong={propertyComponentListLongLeft}
                ></PropertyDescriptionLeft>
                <PropertyDescriptionRight
                    propertyComponentImage={wfh1}
                    propertyComponentListShort={propertyComponentListShortRight}
                    propertyComponentListLong={propertyComponentListLongRight}
                ></PropertyDescriptionRight>
                {/* <PropertyDescriptionMiddleBottom
                    propertyComponentImage={hollywoodvillagemiddlebottomimg}
                ></PropertyDescriptionMiddleBottom> */}
                <CarouselPageTmp sliderImages={sliderImages} length={3} />
                <BlueNAC
                    are74={this.state.are74}
                    are73={this.state.are73}
                    are72={this.state.are72}
                    are71={this.state.are71}
                    are70={this.state.are70}
                    are69={this.state.are69}
                    are68={this.state.are68}
                    are67={this.state.are67}
                ></BlueNAC>
                <ContactThisProperty
                    propertyNAME="PALM STATION"
                    propertyADDRESS="550 N Rosemary Ave, West Palm Beach, FL 33401"
                    facebookLink="..."
                    instagramLink="..."
                    mapPhotoClass="mapPhoto mPSpringGardens"
                    googlemap="https://goo.gl/maps/z1qeZjP2dYpy42WYA"
                    isSocial={this.state.isSocial}
                    contactUs={this.state.contactUs}
                    embedMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8409334826706!2d-80.0569209!3d26.717528199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d6632e0e897f%3A0xf26376daaf972634!2s550%20N%20Rosemary%20Ave%2C%20West%20Palm%20Beach%2C%20FL%2033401%2C%20USA!5e0!3m2!1sen!2sca!4v1657982244195!5m2!1sen!2sca"
                ></ContactThisProperty>
                <FooterPage></FooterPage>
            </div>
        );
    }
}
