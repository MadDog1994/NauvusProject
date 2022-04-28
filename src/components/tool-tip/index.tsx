import React, { useState } from "react";

import edit from "../../assets/images/svgs/edit.svg";
import logOut from "../../assets/images/svgs/log-out.svg";
import arrow from "../../assets/images/svgs/arrow.svg";
import "./styles.scss";

export const ToolTip = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="container-input-tool-tip">
        <div className="container-input-tool-tip__logo-wrapper">
          <p className="container-input-tool-tip_logo-container">TS</p>
        </div>
        <button
          className="container-input-tool-tip_show-edit-wrapper"
          onClick={() => setShow(!show)}
        >
          <p className="container-input-tool-tip_show-title-wrapper">
            Travis Sankar
          </p>
          <img src={arrow} alt="#" />
        </button>
      </div>
      {show && (
        <div className="container-input-tool-tip__drop-menu-wrapper">
          <button className="container-input-tool-tip__edit-wrapper">
            <img
              className="container-input-tool-tip_img-container"
              src={edit}
              alt="#"
            />
            <p className="container-input-tool-tip_title-wrapper">
              Edit Profile
            </p>
          </button>
          <button className="container-input-tool-tip__edit-wrapper">
            <img
              className="container-input-tool-tip_img-container"
              src={logOut}
              alt="#"
            />
            <p className="container-input-tool-tip_title-wrapper">Log Out</p>
          </button>
        </div>
      )}
    </div>
  );
};
