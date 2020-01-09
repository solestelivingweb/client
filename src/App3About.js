import React from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "./components/EachPageHeader";
import Section1 from "./components/app3About/Section1";
import FooterPage from "./components/FooterPage";

function App3() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soleste Living | About</title>
        <meta name="description" content="Miami Apartments" />
        <meta name="keywords" content="Miami Apartments" />
      </Helmet>
      <EachPageHeader
        pageBACKGROUND="app3About-header-bg"
        pageNAME="ABOUT"
      ></EachPageHeader>
      <Section1></Section1>
      <FooterPage></FooterPage>
    </div>
  );
}
export default App3;
