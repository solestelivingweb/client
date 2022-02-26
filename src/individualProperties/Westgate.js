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
import westgatemiddletopimg from "../images/Feb-2022-Westgate/18181-3d Site-Scene 2-1.png";
import westgatemiddlebottomimg from "../images/Feb-2022-Westgate/18181-Lauderhill - Rendering 1.jpg";

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
    "Sauna & Steam Room",
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
    "Chef’s Island*",
    "Gourmet Kitchen Appliances Package",
    "Full-Size Washer & Dryer",
    "Double Master-En-Suites & Private Balcones",
    "Ceiling Fans",
    "Spacious Walk-In Closets",
    "Impact Resistant Windows & Sliding Glass Doors",
    "Over-Sized Terraces*",
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
            are50: true, //DRV PNK Stadium
            are51: true, //Lauderdale Beach
            are52: true, //Uncle Bernie’s Amusement Park
            are53: true, //BB&T Center
            are54: false, //Round Up

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
                    propertyComponentTitle="FEATURING LUXURIOUS AMENITIES AND RESORT-STYLE LIVING"
                    propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes"
                    // propertyComponentParagraph="Step into our community where our staff will welcome you at our lobby and reception area. Featuring luxurious amenities and resort-style living, Soleste NoMi Beach invites you to comfort and leisure, a place you can proudly call home. Located in between Sunny Isles and Aventura, a haven for commuters, beach goers and shoppers there’s an array of convenient and attractive locations just a few miles away."
                    propertyComponentPrice=""
                    propertyComponentImage={westgatemiddletopimg}
                    propertyNOWLEASING="TO BE ANNOUNCED"
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
                    propertyComponentImage={westgatemiddlebottomimg}
                ></PropertyDescriptionMiddleBottom>
                {/* <NearbyAttractionsCarousel></NearbyAttractionsCarousel> */}
                <BlueNAC
                    are48={this.state.are48}
                    are49={this.state.are49}
                    are50={this.state.are50}
                    are51={this.state.are51}
                    are52={this.state.are52}
                    are53={this.state.are53}
                    are54={this.state.are54}
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
