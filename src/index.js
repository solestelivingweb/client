import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";
import Analytics from "react-router-ga";
import ScrollToTop from "./components/ScrollToTop";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.scss";
import "./indexMob.scss";
import App1Home from "./App1Home";
import App2Collection from "./App2Collection";
import App3About from "./App3About";
import App4Contact from "./App4Contact";
import AppNavigationV2 from "./components/AppNavigationV2";
import BlueLagoon from "./individualProperties/BlueLagoon";
import Twenty2 from "./individualProperties/Twenty2";
import Alameda from "./individualProperties/Alameda";
import BayVillage from "./individualProperties/BayVillage";
import ParkView from "./individualProperties/ParkView";
import GrandCentral from "./individualProperties/GrandCentral";
import SpringGardens from "./individualProperties/SpringGardens";
import registerServiceWorker from "./registerServiceWorker";
import NotFound from "./PageNotFound";
import Fade from "react-reveal/Fade";

const routing = (
  <HashRouter basename={"/"}>
    <Analytics id="UA-155949575-1" debug>
      <AppNavigationV2></AppNavigationV2>
      <ScrollToTop />
      <div>
        <Route exact path="/" component={App1Home} />
        <Route path="/collection" component={App2Collection} />
        <Route path="/about" component={App3About} />
        <Route path="/contact" component={App4Contact} />
        <Route path="/bluelagoon" component={BlueLagoon} />
        <Route path="/twenty2" component={Twenty2} />
        <Route path="/alameda" component={Alameda} />
        <Route path="/bayvillage" component={BayVillage} />
        <Route path="/parkview" component={ParkView} />
        <Route path="/grandcentral" component={GrandCentral} />
        <Route path="/springgardens" component={SpringGardens} />
        <Route path="*" component={NotFound} />
      </div>
    </Analytics>
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

registerServiceWorker();
