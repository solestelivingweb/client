import React from "react";
import Parallax from "./Parallax";
import sectionbannerbg from "../../images/app2/section-banner-bg.jpg";

import Fade from "react-reveal/Fade";

function SectionBanner() {
  return (
    <Fade>
      <div className="marginClass-1 app2-collections-banner">
        <Parallax background={sectionbannerbg}>
          <Fade>
            <h1 className="text-center text-white">
              CONTEMPORARY LIVING <br />
              WITH TRADITIONAL CHARM
            </h1>
          </Fade>
        </Parallax>
      </div>
    </Fade>
  );
}
export default SectionBanner;
