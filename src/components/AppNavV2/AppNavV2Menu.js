import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default ({ close }) => (
  <div className="menu fade-in-css-anim">
    <ul>
      <Fade left>
        <li onClick={close}>
          <Link className="effect-underline" to="/">
            HOME
          </Link>
        </li>
      </Fade>
      <Fade left delay={100}>
        <li onClick={close}>
          <Link className="effect-underline" to="/collection">
            COLLECTION
          </Link>
        </li>
      </Fade>
      <Fade left delay={200}>
        <li onClick={close}>
          <Link className="effect-underline" to="/about">
            ABOUT
          </Link>
        </li>
      </Fade>
      <Fade left delay={300}>
        <li onClick={close}>
          <Link className="effect-underline" to="/contact">
            CONTACT
          </Link>
        </li>
      </Fade>
    </ul>
  </div>
);
