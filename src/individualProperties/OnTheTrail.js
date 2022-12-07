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
import onthetrailemiddletopimg from "../images/individualProperties/onthetrail/On the Trail Rendering 1 copy.png";
// import hollywoodvillagemiddlebottomimg from "../images/individualProperties/hollywoodvillage/Hollywood Village Rendering 1.jpg";
import ck1 from '../images/individualProperties/onthetrail/ck1.jpg';
import pl1 from '../images/individualProperties/onthetrail/pl1.jpg';

import CarouselPageTmp from '../components/individualProperties/pageComponents/CarouselPageTmp';
import ott1 from "../images/individualProperties/onthetrail/On the Trail Rendering 1.png"
import ott2 from "../images/individualProperties/onthetrail/On the Trail Rendering 2.png"
import ott3 from "../images/individualProperties/onthetrail/On the Trail Rendering 3.png"
import ott4 from "../images/individualProperties/onthetrail/On the Trail Rendering 4.png"
import ott5 from "../images/individualProperties/onthetrail/On the Trail Rendering 5.png"
import ott6 from "../images/individualProperties/onthetrail/On the Trail Rendering 6.png"
import ott7 from "../images/individualProperties/onthetrail/On the Trail Rendering 7.png"
import ott8 from "../images/individualProperties/onthetrail/On the Trail Rendering 8.png"
import ott9 from "../images/individualProperties/onthetrail/On the Trail Rendering 9.png"
import ott10 from "../images/individualProperties/onthetrail/On the Trail Rendering 10.png"
import ott11 from "../images/individualProperties/onthetrail/On the Trail Rendering 11.png"
import ott12 from "../images/individualProperties/onthetrail/On the Trail Rendering 12.png"
import ott13 from "../images/individualProperties/onthetrail/On the Trail Rendering 13.png"
import ott14 from "../images/individualProperties/onthetrail/On the Trail Rendering 14.png"
import ott15 from "../images/individualProperties/onthetrail/On the Trail Rendering 1.png"

const sliderImages = [ott1, ott2, ott3, ott4, ott5, ott6, ott7, ott8, ott9, ott10, ott11, ott12, ott13, ott14, ott15];

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
    "Convenient West Palm Beach Location"

];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
    (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
    (i) => <li key={i}>{i}</li>
);

// right
const propertyComponentListShortArrRight = [
    "One, Two & Three Bedroom Apartment Homes",
    "Sleek & Spacious Modern Kitchens",
    "Elegant Quartz Countertops & Tile Backsplash",
    "Gourmet Stainless Steel Appliance Package",
];

const propertyComponentListLongArrRight = [
    "One, Two & Three Bedroom Apartment Homes",
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
    "Sprawling Patios with Dramatic Garden Views",
    "Space-Saving Pantry & Linen Closets",
    "Undermount Kitchen Sinks",
    "Convenient Keyless Entry",
    "In-Unit USB Outlets ",

];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
    (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
    (i) => <li key={i}>{i}</li>
);

export default class OnTheTrail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSocial: false,
            contactUs: true,
            are81: true, // West Palm Beach International Airport
            are80: true, // The Gardens Mall
            are79: true, // Ball Park of the Palm Beaches
            are78: true, // John D MacArthur Beach State Park
            are77: true, // Palm Beach Zoo & Conservation Society
            are76: true, // Manatee Lagoon
            are75: true, // Rapids Water Park

        };
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Soleste Living | On The Trail</title>
                    <meta name="description" content="Soleste On The Trail" />
                    <meta name="keywords" content="Soleste On The Trail" />
                </Helmet>
                <EachPageHeader
                    pageBACKGROUND="individual-property-onthetrail-header-bg"
                    pageNAME="ON THE TRAIL"
                ></EachPageHeader>
                <PropertySGONLYDescriptionMiddleTop
                    propertyComponentTitle="A PREMIUM RESIDENCE WITH AFFLUENCE"
                    propertyComponentDescription="One, Two, and Three-bedroom Apartment Homes"
                    propertyComponentParagraph="Be among the first to experience Soleste on the Trail where living with comfort and ease is not only encouraged but exalted. Located in West Palm Beach, Soleste on the Trail is the ideal sanctuary for those who enjoy lounging by the pool, and those who appreciate their daily fitness kick with On-Demand fitness. With state-of-the-art amenities and modernistic interiors, this is luxury living."
                    propertyComponentPrice=""
                    propertyComponentImage={onthetrailemiddletopimg}
                    propertyNOWLEASING="TO BE ANNOUNCED"
                // propertyMOVEINDATE="MOVE-IN JUNE 2021"
                ></PropertySGONLYDescriptionMiddleTop>
                <PropertyDescriptionLeft
                    propertyComponentImage={pl1}
                    propertyComponentListShort={propertyComponentListShortLeft}
                    propertyComponentListLong={propertyComponentListLongLeft}
                ></PropertyDescriptionLeft>
                <PropertyDescriptionRight
                    propertyComponentImage={ck1}
                    propertyComponentListShort={propertyComponentListShortRight}
                    propertyComponentListLong={propertyComponentListLongRight}
                ></PropertyDescriptionRight>
                {/* <PropertyDescriptionMiddleBottom
                    propertyComponentImage={hollywoodvillagemiddlebottomimg}
                ></PropertyDescriptionMiddleBottom> */}
                <CarouselPageTmp sliderImages={sliderImages} length={14} />
                <BlueNAC
                    are81={this.state.are81}
                    are80={this.state.are80}
                    are79={this.state.are79}
                    are78={this.state.are78}
                    are77={this.state.are77}
                    are76={this.state.are76}
                    are75={this.state.are75}
                ></BlueNAC>
                <ContactThisProperty
                    propertyNAME="ON THE TRAIL"
                    propertyADDRESS="7920 North Military Trail, West Palm Beach, FL 33410"
                    facebookLink="..."
                    instagramLink="..."
                    mapPhotoClass="mapPhoto mPSpringGardens"
                    googlemap="https://goo.gl/maps/aMDWrsL4z8stoHsPA"
                    isSocial={this.state.isSocial}
                    contactUs={this.state.contactUs}
                    embedMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.4479645392707!2d-80.106281!3d26.793861399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d92a9b01578c47%3A0x35e7782e87ea5ba5!2s7920%20N%20Military%20Trl%2C%20West%20Palm%20Beach%2C%20FL%2033410%2C%20USA!5e0!3m2!1sen!2sca!4v1657982503157!5m2!1sen!2sca"
                ></ContactThisProperty>
                <FooterPage></FooterPage>
            </div>
        );
    }
}
