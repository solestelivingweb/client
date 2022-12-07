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
import hollywoodvillagemiddletopimg from "../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 3 2.jpg";
// import hollywoodvillagemiddlebottomimg from "../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 1.jpg";
import ps2 from '../images/individualProperties/hollywoodvillage/ps2.jpg';
import cf1 from '../images/individualProperties/hollywoodvillage/cf1.jpg';

import CarouselPageTmp from '../components/individualProperties/pageComponents/CarouselPageTmp';
import hv1 from "../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 1.jpg"
import hv2 from "../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 2.jpg"
import hv3 from "../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 3.jpg"
import hv4 from "../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 4.jpg"
import hv5 from "../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 5.jpg"
import hv6 from "../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 6.jpg"
import hv7 from "../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 1.jpg"

const sliderImages = [hv1, hv2, hv3, hv4, hv5, hv6, hv7];

const propertyComponentListShortArrLeft = [
    "Health Club with Hi-Tech Cardio Gear & Free Weights",
    "Yoga, Spin & Aerobics Room with On-Demand Fitness",
    "Social and Gaming Lounge",
    "Al-Fresco Dining featuring Summer Kitchen & Grills",
];

const propertyComponentListLongArrLeft = [
    "Health Club with Hi-Tech Cardio Gear & Free Weights",
    "Yoga, Spin & Aerobics Room with On-Demand Fitness",
    "Social and Gaming Lounge",
    "Al-Fresco Dining featuring Summer Kitchen & Grills",
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
    "Convenient Hollywood Location"

];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
    (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
    (i) => <li key={i}>{i}</li>
);

// right
const propertyComponentListShortArrRight = [
    "Studio, One, Two Bedroom Apartment Homes",
    "Sleek & Spacious Modern Kitchens",
    "Elegant Quartz Countertops & Tile Backsplash",
    "Gourmet Stainless Steel Appliance Package",
];

const propertyComponentListLongArrRight = [
    "Studio, One, Two Bedroom Apartment Homes",
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

export default class HollywoodVillage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSocial: false,
            contactUs: true,
            are84: true, // Hollywood Beach Broadwalk
            are85: true, // Young Circle Shopping Center
            are83: true, // Hollywood Beach Golf Club
            are86: true, // West Lake Park
            are87: true, // Art and Coulture Center
            are82: true, // Fort Lauderdale-Hollywood International Airport
        };
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Soleste Living | Hollywood Village</title>
                    <meta name="description" content="Soleste Hollywood Village" />
                    <meta name="keywords" content="Soleste Hollywood Village" />
                </Helmet>
                <EachPageHeader
                    pageBACKGROUND="individual-property-hollywoodvillage-header-bg"
                    pageNAME="HOLLYWOOD VILLAGE"
                ></EachPageHeader>
                <PropertySGONLYDescriptionMiddleTop
                    propertyComponentTitle="AN ALLURING AND ULTRAMODERN LIFESTYLE"
                    propertyComponentDescription="Studio Suites, One, and Two Bedroom Apartment Homes"
                    propertyComponentParagraph="Located in Hollywood FL, Soleste Hollywood Village is the newest elevated living residence on the block. Live in a fresh new community that offers modernistic amenities and cutting-edge interior design. Take a quick bike ride to the Hollywood Beach Broadwalk, then end your evenings with a stroll to Hollywood Boulevard where the nearby restaurants and shops await you. Exceptional living is right at your fingertips."
                    propertyComponentPrice=""
                    propertyComponentImage={hollywoodvillagemiddletopimg}
                    propertyNOWLEASING="COMING SOON"
                // propertyMOVEINDATE="MOVE-IN JUNE 2021"
                ></PropertySGONLYDescriptionMiddleTop>
                <PropertyDescriptionLeft
                    propertyComponentImage={ps2}
                    propertyComponentListShort={propertyComponentListShortLeft}
                    propertyComponentListLong={propertyComponentListLongLeft}
                ></PropertyDescriptionLeft>
                <PropertyDescriptionRight
                    propertyComponentImage={cf1}
                    propertyComponentListShort={propertyComponentListShortRight}
                    propertyComponentListLong={propertyComponentListLongRight}
                ></PropertyDescriptionRight>
                {/* <PropertyDescriptionMiddleBottom
                    propertyComponentImage={hollywoodvillagemiddlebottomimg}
                ></PropertyDescriptionMiddleBottom> */}
                <CarouselPageTmp sliderImages={sliderImages} length={6} />
                <BlueNAC
                    are84={this.state.are84}
                    are85={this.state.are85}
                    are83={this.state.are83}
                    are86={this.state.are86}
                    are87={this.state.are87}
                    are82={this.state.are82}
                ></BlueNAC>
                <ContactThisProperty
                    propertyNAME="HOLLYWOOD VILLAGE"
                    propertyADDRESS="2000 Van Buren Street, Hollywood, FL 33020"
                    facebookLink="..."
                    instagramLink="..."
                    mapPhotoClass="mapPhoto mPSpringGardens"
                    googlemap="https://goo.gl/maps/raFTcq1zsitBSWmx9"
                    isSocial={this.state.isSocial}
                    contactUs={this.state.contactUs}
                    embedMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.7409228797546!2d-80.1471464!3d26.0093029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ab9f3d367545%3A0x6751b66f535e6580!2s2000%20Van%20Buren%20St%2C%20Hollywood%2C%20FL%2033020!5e0!3m2!1sen!2sus!4v1657756261786!5m2!1sen!2sus"
                ></ContactThisProperty>
                <FooterPage></FooterPage>
            </div>
        );
    }
}
