import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "./components/EachPageHeader";
import PropertyRight from "./components/app2Collection/PropertyRight";
import PropertyLeft from "./components/app2Collection/PropertyLeft";
import SectionBanner from "./components/app2Collection/SectionBanner";
import FooterPage from "./components/FooterPage";

import app2nomiimg1 from "./images/individualProperties/nomi/Escultura-Final.png";
import app2nomiimg2 from "./images/individualProperties/nomi/ivan-dodig-R21SyyJDFgc-unsplash.jpg";
import app2springgardensimg1 from "./images/app2/app2-springgardens-img-1.jpg";
import app2springgardensimg2 from "./images/app2/app2-springgardens-img-2.jpg";
import app2citylineimg1 from "./images/app2/app2-cityline-img-1.jpg";
import app2citylineimg2 from "./images/app2/app2-cityline-img-2.jpg";
import app2hollywoodimg1 from "./images/individualProperties/hollywood-2022/Feb-2022-Hollywood/Soleste Hollywood Rendering 9-collection.jpg";
import app2hollywoodimg2 from "./images/app2/app2-hollywood-img-2.jpeg";
import app2westgateimg1 from "./images/app2/SWG Rending 9 2.jpg";
import app2westgateimg2 from "./images/app2/app2-westgate-img-2.jpeg";
import app2hollywoodvillage1 from "./images/app2/app2hollywoodvillage1.jpg";
import app2onthetrail1 from "./images/app2/app2onthetrail1.png";
import app2onthebay1 from "./images/app2/onthebay1.jpg";
import app2palmstation1 from "./images/app2/app2palmstation1.png";
import app2hollywoodvillage2 from "./images/app2/app2hollywoodvillage2.jpg";
import app2onthetrail2 from "./images/app2/app2onthetrail2.jpg";
import app2onthebay2 from "./images/app2/app2onthebay2.jpg";
import app2palmstation2 from "./images/app2/app2palmstation2.jpg";

class App2 extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | Collection</title>
          <meta name="description" content="Luxury Apartments Miami" />
          <meta name="keywords" content="Luxury Apartments Miami" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="app2Collection-header-bg"
          pageNAME="COLLECTION"
        ></EachPageHeader>
        <PropertyRight
          propertyIMAGE1={app2hollywoodimg1}
          propertyIMAGE2={app2hollywoodimg2}
          propertyNAME="HOLLYWOOD BOULEVARD"
          propertyDESCRIPTION=" Studio Suites, One, Two, and Three-Bedroom"
          propertyDESCRIPTION2="Apartment Homes"
          // propertyPRICE="$1,475"
          propertyPAGE="/hollywoodboulevard"
          propertyNOWLEASING="COMING SOON"
          idfor2020={"propertyHollywood-img-2022"}
          className='"fix0718"'
          // propertyMOVEINDATE="MOVE-IN MARCH 2020"
        ></PropertyRight>
        <PropertyLeft
          propertyIMAGE1={app2westgateimg1}
          propertyIMAGE2={app2westgateimg2}
          propertyNAME="WESTGATE"
          propertyDESCRIPTION="Studio Suites, One, Two, and Three-Bedroom"
          propertyDESCRIPTION2="Apartment Homes"
          propertyPAGE="westgate"
          propertyNOWLEASING="COMING SOON"
          idfor2020={"propertyWestgate-img-2022"}
          // propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertyLeft>
        <PropertyRight
          propertyIMAGE1={app2nomiimg1}
          propertyIMAGE2={app2nomiimg2}
          propertyNAME="NOMI BEACH"
          propertyDESCRIPTION="Studio Suites, One, Two, and Three-Bedroom"
          propertyDESCRIPTION2="Apartment Homes"
          // propertyPRICE="$1,475"
          propertyPAGE="/nomibeach"
          propertyNOWLEASING="COMING SOON"
          // propertyMOVEINDATE="MOVE-IN MARCH 2020"
        ></PropertyRight>
        <SectionBanner></SectionBanner>
        <PropertyLeft
          propertyIMAGE1={app2citylineimg1}
          propertyIMAGE2={app2citylineimg2}
          propertyNAME="CITYLINE"
          propertyDESCRIPTION="Studio Suites, One, Two, and Three-Bedroom Apartment Homes"
          propertyDESCRIPTION2=""
          propertyPAGE="cityline"
          propertyNOWLEASING="COMING SOON"
          idfor2020={"propertyCityline-absolute-img-2020"}
          // propertyMOVEINDATE="MOVE-IN MARCH 2021"
        ></PropertyLeft>

        <PropertyRight
          propertyIMAGE1={app2springgardensimg1}
          propertyIMAGE2={app2springgardensimg2}
          propertyNAME="SPRING GARDENS"
          propertyDESCRIPTION="Studio Suites, One, Two, and Three-Bedroom"
          propertyDESCRIPTION2="Apartment Homes"
          propertyPAGE="springgardens"
          propertyNOWLEASING="NOW LEASING"
          // propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertyRight>
        <PropertyLeft
          propertyIMAGE1={app2onthebay1}
          propertyIMAGE2={app2onthebay2}
          propertyNAME="ON THE BAY"
          propertyDESCRIPTION="Studio Suites, One, Two, and Three-Bedroom"
          propertyDESCRIPTION2="Apartment Homes"
          propertyPAGE="onthebay"
          propertyNOWLEASING="COMING SOON"
          // propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertyLeft>
        <PropertyRight
          propertyIMAGE1={app2hollywoodvillage1}
          propertyIMAGE2={app2hollywoodvillage2}
          propertyNAME="HOLLYWOOD VILLAGE"
          propertyDESCRIPTION="Studio Suites, One, and Two-Bedroom Apartment Homes"
          propertyDESCRIPTION2=""
          propertyPAGE="hollywoodvillage"
          propertyNOWLEASING="COMING SOON"
          idfor2020={"propertyHollywoodVillage-img-2022"}
          // propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertyRight>
        <PropertyLeft
          propertyIMAGE1={app2onthetrail1}
          propertyIMAGE2={app2onthetrail2}
          propertyNAME="ON THE TRAIL"
          propertyDESCRIPTION="One, Two, and Three-Bedroom Apartment Homes"
          propertyDESCRIPTION2=""
          propertyPAGE="onthetrail"
          propertyNOWLEASING="TO BE ANNOUNCED"
          // propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertyLeft>
        <PropertyRight
          propertyIMAGE1={app2palmstation1}
          propertyIMAGE2={app2palmstation2}
          propertyNAME="PALM STATION"
          propertyDESCRIPTION="Studio Suites, One, Two, and Three-Bedroom Apartment Homes"
          propertyDESCRIPTION2=""
          propertyPAGE="palmstation"
          propertyNOWLEASING="COMING SOON"
          // propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertyRight>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
export default App2;
