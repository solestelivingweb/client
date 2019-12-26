import React, { Component } from "react";
// import {} from "mdbreact";
import "./index.scss";
import { Helmet } from "react-helmet";
import Header from "./components/app1Home/Header";
import Section2 from "./components/app1Home/Section2";
import Section3CollectionCarousel from "./components/app1Home/Section3CollectionCarousel";
import Section4 from "./components/app1Home/Section4";
import SectionGetInTouch from "./components/app1Home/SectionGetInTouch";
import FooterPage from "./components/FooterPage";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | Home</title>
          <meta name="description" content="Helmet application" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header></Header>
        <Section2></Section2>
        <Section3CollectionCarousel></Section3CollectionCarousel>
        <Section4></Section4>
        <SectionGetInTouch></SectionGetInTouch>
        <FooterPage></FooterPage>
      </div>
    );
  }
}

export default App;
