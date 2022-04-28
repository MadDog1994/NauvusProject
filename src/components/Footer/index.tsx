import React from "react";

import twitter from "../../assets/images/svgs/twitter.svg";
import linkedin from "../../assets/images/svgs/linkedin.svg";
import instagram from "../../assets/images/svgs/instagram.svg";

import "./styles.scss";

export const Footer = () => {
  return (
    <div className={`${"wrapper-footer"}`}>
      <div className="wrapper-footer__container">
        <div className="wrapper-footer__container-content">
          <p>© 2022 by Nauvus Inc. Proudly based in GA ; 404-539-9955</p>
          <div className="wrapper-footer__container-logo">
            <div>
              <img src={twitter} alt="twitter" />
            </div>
            <div>
              <img src={linkedin} alt="linkedin" />
            </div>
            <div>
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
