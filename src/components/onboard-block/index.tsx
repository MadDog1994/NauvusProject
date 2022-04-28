import React from "react";
import { Button } from "../button";

import "./styles.scss";

interface Props {
  text: string;
  afterText: string;
  toogler: boolean;
  logo?: string;
  onClick?: () => void;
}

export const OnboardBlock: React.FC<Props> = ({
  text,
  afterText,
  toogler,
  logo,
  onClick,
}) => {
  return (
    <div className="container-onboard-block-wrapper">
      <div className="container-onboard-block-wrapper__logo-wrapper">
        <img src={logo} alt="logo" />
        <div className="container-onboard-block-wrapper_text-field">{text}</div>
      </div>

      <div className="container-onboard-block-wrapper__after-text-field">
        <span className="container-onboard-block-wrapper_after-text-field">
          {afterText}
        </span>
      </div>
      {toogler ? (
        <div className="container-onboard-block-wrapper__button-width">
          <Button label="Start" className="big-button" onClick={onClick} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
