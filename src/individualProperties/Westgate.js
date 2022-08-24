import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";
import PropertySGONLYDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertySGONLYDescriptionMiddleTop";
import PropertyDescriptionLeft from "../components/individualProperties/pageComponents/PropertyDescriptionLeft";
import PropertyDescriptionRight from "../components/individualProperties/pageComponents/PropertyDescriptionRight";
// import PropertyDescriptionMiddleBottom from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleBottom";
import CarouselPageWestgate from "../components/individualProperties/pageComponents/CarouselPageWestgate";
import BlueNAC from "../components/individualProperties/NearbyAttractionsCarousel/BlueNAC";
import ContactThisProperty from "../components/individualProperties/ContactThisProperty";
import FooterPage from "../components/FooterPage";
// 2022
import westgatemiddletopimg from "../images/individualProperties/westgate-2022/Feb-2022-Westgate/18181-3d Site-Scene 2-1.png";
// import westgatemiddlebottomimg from "../images/Feb-2022-Westgate/18181-Lauderhill - Rendering 1.jpg";

const propertyComponentListShortArrLeft = [
    "Luxer Package Room",
    "Dry Cleaning Lockers",
    "Bark Park",
    "Outdoor Fitness Area",
];

const propertyComponentListLongArrLeft = [
    "Luxer Package Room",
    "Dry Cleaning Lockers",
    "Bark Park",
    "Outdoor Fitness Area",
    "Pet Wash Station",
    "Resident Fitness Center featuring Hi-Tech Cardio Gear & Free Weights",
    "Yoga & Spin Studio",
    "Resort-Inspired Pool",
    "Cabanas",
    "Residents Social & Gaming Lounge",
    "Work/Study & Computer Station",
    "Al-Fresco Dining featuring Summer Kitchen & Grills",

];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
    (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
    (i) => <li key={i}>{i}</li>
);

// right
const propertyComponentListShortArrRight = [
    "Sleek, Modern Kitchens with Custom Cabinets",
    "Quartz Countertops",
    "Stainless Steel Appliances",
    "Designer Lighting",
];

const propertyComponentListLongArrRight = [
    "Sleek, Modern Kitchens with Custom Cabinets",
    "Quartz Countertops",
    "Stainless Steel Appliances",
    "Designer Lighting",
    "Gourmet Kitchen Appliances Package",
    "Full-Size Washer & Dryer",
    "Double Master-En-Suites & Private Balconies",
    "Ceiling Fans",
    "Spacious Walk-In Closets",
    "Impact Resistant Windows & Sliding Glass Doors",
    "Pantry & Linen Closet*",
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
    (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
    (i) => <li key={i}>{i}</li>
);

export default class Westgate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSocial: false,
            contactUs: true,
            are48: true, //Hard Rock Stadium
            are49: true, //Swamp Shop & Thunderbird Drive-In Theater
            are51: true, //Lauderdale Beach
            are53: true, //BB&T Center
            are54: false, //Round Up
            are55: true, //Seminole
            are62: true, //sawgrassmillsoutlets
        };
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Soleste Living | Westgate</title>
                    <meta name="description" content="Soleste Westgate" />
                    <meta name="keywords" content="Soleste Westgate" />
                </Helmet>
                <EachPageHeader
                    pageBACKGROUND="individual-property-westgate-header-bg"
                    pageNAME="WESTGATE"
                ></EachPageHeader>
                <PropertySGONLYDescriptionMiddleTop
                    propertyComponentTitle="WHERE LEISURE LIVING MEETS MODERN COMFORT"
                    propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes"
                    propertyComponentParagraph="Lauderhill, Florida is set to get a new residential multifamily development, Soleste Westgate. Characterized by state-of-the-art amenities and indulgent interiors, Soleste Westgate is the best way to experience what the city has to offer. A peaceful community to live, work and play, it’s all at your fingertips. Welcome home - comfort and leisure await you."
                    propertyComponentPrice=""
                    propertyComponentImage={westgatemiddletopimg}
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
                {/* <PropertyDescriptionMiddleBottom
                    propertyComponentImage={westgatemiddlebottomimg}
                ></PropertyDescriptionMiddleBottom> */}
                <CarouselPageWestgate></CarouselPageWestgate>
                <BlueNAC
                    are48={this.state.are48}
                    are49={this.state.are49}
                    are51={this.state.are51}
                    are53={this.state.are53}
                    are54={this.state.are54}
                    are55={this.state.are55}
                    are62={this.state.are62}
                ></BlueNAC>
                <ContactThisProperty
                    propertyNAME="WESTGATE"
                    propertyADDRESS="7730 West Commercial Boulevard, Lauderhill, FL 33351"
                    facebookLink="..."
                    instagramLink="..."
                    mapPhotoClass="mapPhoto mPSpringGardens"
                    googlemap="https://goo.gl/maps/k1cdtRpKFfKdeGBx5"
                    isSocial={this.state.isSocial}
                    contactUs={this.state.contactUs}
                    embedMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.171790261387!2d-80.25573718497029!3d26.191089383443586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d905dd9d900d4d%3A0xa93d571c0a581fe6!2s7730%20W%20Commercial%20Blvd%2C%20Lauderhill%2C%20FL%2033351!5e0!3m2!1sen!2sus!4v1645904642683!5m2!1sen!2sus"
                ></ContactThisProperty>
                <FooterPage></FooterPage>
            </div>
        );
    }
}
