import React, { Component } from "react";
import Popup from "reactjs-popup";

import AppNavV2BurgerIcon from "../components/AppNavV2/AppNavV2BurgerIcon";
import AppNavV2Menu from "../components/AppNavV2/AppNavV2Menu";

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

export default class AppNavV2 extends Component {
  render() {
    return (
      <div>
        <Popup
          modal
          overlayStyle={{
            background: "rgba(86,76,75,0.98"
          }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <AppNavV2BurgerIcon open={open} />}
        >
          {close => <AppNavV2Menu close={close} />}
        </Popup>
      </div>
    );
  }
}
