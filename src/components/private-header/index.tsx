import React from "react";
import { ToolTip } from "../tool-tip";

import blackLogo from "../../assets/images/svgs/black-logo.svg";
import "./styles.scss";

export const PrivateHeader = () => {
  return (
    <div className={"private-header-container"}>
      <img src={blackLogo} alt="Logo" />
      <div>
        <ToolTip />
      </div>
    </div>
  );
};
