import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "../components/EachPageHeader";
import PropertySGONLYDescriptionMiddleTop from "../components/individualProperties/pageComponents/PropertySGONLYDescriptionMiddleTop";
import PropertyDescriptionLeft from "../components/individualProperties/pageComponents/PropertyDescriptionLeft";
import PropertyDescriptionRight from "../components/individualProperties/pageComponents/PropertyDescriptionRight";
// import PropertyDescriptionMiddleBottom from "../components/individualProperties/pageComponents/PropertyDescriptionMiddleBottom";
import CarouselPageNomi from "../components/individualProperties/pageComponents/CarouselPageNomi";
import BlueNAC from "../components/individualProperties/NearbyAttractionsCarousel/BlueNAC";
import ContactThisProperty from "../components/individualProperties/ContactThisProperty";
import FooterPage from "../components/FooterPage";
// import citylinemiddletopimg from "../images/individualProperties/cityline/cityline-mid-top-img.jpg";
// 2021
import citylinemiddletopimg from "../images/individualProperties/nomi/1 (1).png";
// import citylineleftimg from "../images/individualProperties/cityline/cityline-left-img.jpg";
// 2021
import citylineleftimg from "../images/individualProperties/nomi/lefteris-kallergis-19Zv3B385AE-unsplash.jpg";
// import citylinerightimg from "../images/individualProperties/cityline/cityline-right-img.jpg";
// 2021
import citylinerightimg from "../images/individualProperties/nomi/ishan-seefromthesky-2jlRllahuMk-unsplash.jpg";
// import citylinemiddlebottomimg from "../images/individualProperties/cityline/cityline-mid-bottom-img.jpg";
// 2021
// import citylinemiddlebottomimg from "../images/individualProperties/nomi/4 (2).png";

const propertyComponentListShortArrLeft = [
    'Lobby & Reception Area',
    'Tech Bar',
    'Work/Study Station',
    'Hammock Garden',
    'Dry Cleaning Lockers',
];

const propertyComponentListLongArrLeft = [
    'Lobby & Reception Area',
    'Tech Bar',
    'Work/Study Station',
    'Hammock Garden',
    'Dry Cleaning Lockers',
    'Pet Wash Station',
    'Resident Fitness Center featuring Hi-Tech Cardio Gear & Free Weights',
    'Yoga & Spin Studio',
    'Bicycle Storage & Bicycle Shop',
    'Sauna & Steam Room',
    'Resort-Inspired Pool',
    'Cabanas',
    'Al-Fresco Dining featuring Summer Kitchen, Grills & Central Bar',
];

const propertyComponentListShortLeft = propertyComponentListShortArrLeft.map(
    (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongLeft = propertyComponentListLongArrLeft.map(
    (i) => <li key={i}>{i}</li>
);

// right
const propertyComponentListShortArrRight = [
    'Sleek, Modern Kitchens with Custom Cabinets',
    'Quartz Countertops',
    'Stainless Steel Appliances',
    'Designer Lighting',
    'Chef’s Island*',
];

const propertyComponentListLongArrRight = [
    'Sleek, Modern Kitchens with Custom Cabinets',
    'Quartz Countertops',
    'Stainless Steel Appliances',
    'Designer Lighting',
    'Chef’s Island*',
    'Gourmet Kitchen Appliances Package',
    'Full-Size Washer & Dryer',
    'Double Master-En-Suites & Private Balconies',
    'Ceiling Fans',
    'Spacious Walk-In Closets',
    'Impact Resistant Windows & Sliding Glass Doors',
    'Over-Sized Terraces*',
    'Pantry & Linen Closet*',
];

const propertyComponentListShortRight = propertyComponentListShortArrRight.map(
    (i) => <li key={i}>{i}</li>
);
const propertyComponentListLongRight = propertyComponentListLongArrRight.map(
    (i) => <li key={i}>{i}</li>
);

export default class CityLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSocial: false,
            contactUs: true,
            are1: false, //Grapeland Park
            are2: false, //Miracle Mile
            are3: false, //Venetian Pool
            are4: false, //Granada Gold Course
            are5: false, //The Biltmore Hotel
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
            are22: false, //Coconut Grove
            are23: false, //Coral Reef Park
            are24: false, //Country Club Prado
            are25: false, //Dolphin Mall
            are26: false, //Doral City Center
            are27: false, //Downtown Dadeland
            are28: false, //Downtown Miami
            are29: false, //Lincoln Road
            are30: false, //Miami International Airport
            are31: false, //Port of Miami
            are32: false, //Virgin Trains
            // 2020
            are33: false, //Dania Beach
            are34: false, //Dania Pointe (shopping)
            are35: false, //Fort Lauderdale-Hollywood International Airport
            are36: false, //Seminole Hardrock Hotel and Casino
            are37: false, //Las Olas
            are38: false, //Brightline Fort Lauderdale
            are39: false, //Broward center of performing arts
            are40: false, //Th awharf
            //nomi
            are41: true, //Oleta River State Park
            are42: true, //Bal Harbour Shops
            are43: true, //Tidal Cove Water Park
            are44: true, //Gulfstream Park Racing and Casino
            are45: true, //Aventura Mall
            are46: true, //Sunny Isles Beach
            are47: true, //Judge Arthur Snyder Tennis Center
            are48: true, //Hard Rock Stadium

        };
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Soleste Living | NoMi Beach</title>
                    <meta name="description" content="Soleste NoMi Beach" />
                    <meta name="keywords" content="Soleste NoMi Beach" />
                </Helmet>
                <EachPageHeader
                    pageBACKGROUND="individual-property-nomi-header-bg"
                    pageNAME="NOMI BEACH"
                ></EachPageHeader>
                <PropertySGONLYDescriptionMiddleTop
                    propertyComponentTitle="INDULGE YOURSELF IN EXTRAVAGANCE"
                    propertyComponentDescription="Studio Suites, One, Two, and Three-Bedroom Apartment Homes"
                    propertyComponentParagraph="Experience a world of luscious comfort and luxury at Soleste NoMi Beach. With sleek appliances and ultramodern interiors, Soleste NoMi Beach invites you to enjoy living lavishly with ease. Start off your mornings by enjoying a cup of coffee and taking in the breathtaking views from your private terrace. Only a short trip to Bal Harbor Shops, Sunny Isles Beach, and Aventura Mall, Soleste NoMi Beach is everything you need in a residence and more. "
                    propertyComponentPrice=""
                    propertyComponentImage={citylinemiddletopimg}
                    propertyNOWLEASING="COMING SOON"
                // propertyMOVEINDATE="MOVE-IN JUNE 2021"
                ></PropertySGONLYDescriptionMiddleTop>
                <PropertyDescriptionLeft
                    propertyComponentImage={citylineleftimg}
                    propertyComponentListShort={propertyComponentListShortLeft}
                    propertyComponentListLong={propertyComponentListLongLeft}
                ></PropertyDescriptionLeft>
                <PropertyDescriptionRight
                    propertyComponentImage={citylinerightimg}
                    propertyComponentListShort={propertyComponentListShortRight}
                    propertyComponentListLong={propertyComponentListLongRight}
                ></PropertyDescriptionRight>
                {/* <PropertyDescriptionMiddleBottom
                    propertyComponentImage={citylinemiddlebottomimg}
                ></PropertyDescriptionMiddleBottom> */}
                <CarouselPageNomi></CarouselPageNomi>
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
                    // 2020
                    are33={this.state.are33}
                    are34={this.state.are34}
                    are35={this.state.are35}
                    are36={this.state.are36}
                    are37={this.state.are37}
                    are38={this.state.are38}
                    are39={this.state.are39}
                    are40={this.state.are40}
                    // nomi
                    are41={this.state.are41}
                    are42={this.state.are42}
                    are43={this.state.are43}
                    are44={this.state.are44}
                    are45={this.state.are45}
                    are46={this.state.are46}
                    are47={this.state.are47}
                    are48={this.state.are48}
                ></BlueNAC>
                <ContactThisProperty
                    propertyNAME=" NOMI BEACH"
                    propertyADDRESS="16395 Biscayne Blvd, North Miami Beach, FL 33160"
                    facebookLink="..."
                    instagramLink="..."
                    mapPhotoClass="mapPhoto mPSpringGardens"
                    googlemap="https://goo.gl/maps/ehUoTnxNhxd6swd38"
                    isSocial={this.state.isSocial}
                    contactUs={this.state.contactUs}
                    embedMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.0525289510041!2d-80.15242096794397!3d25.9283247947689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ada56d67a131%3A0x4fd4be4683a3f48e!2s16395%20Biscayne%20Blvd%2C%20North%20Miami%20Beach%2C%20FL%2033160!5e0!3m2!1sen!2sus!4v1625500517556!5m2!1sen!2sus"
                ></ContactThisProperty>
                <FooterPage></FooterPage>
            </div>
        );
    }
}
