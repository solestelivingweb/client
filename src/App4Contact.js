import React from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "./components/EachPageHeader";
import Section1 from "./components/App4Contact.js/Section1";
import FooterPage from "./components/FooterPage";

function App4() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soleste Living | Contact</title>
        <meta name="description" content="Soleste Living" />
        <meta name="keywords" content="Soleste Living" />
      </Helmet>
      <EachPageHeader
        pageBACKGROUND="app4Contact-header-bg"
        pageNAME="CONTACT"
      ></EachPageHeader>
      <Section1></Section1>
      <FooterPage></FooterPage>
    </div>
  );
}
export default App4;
