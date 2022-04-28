import React from "react";

import generalLogo from "../../assets/images/svgs/generalLogo.svg";
import exit from "../../assets/images/svgs/exit.svg";

import "./styles.scss";

import { Button } from "../button";

interface Props {
  setShow: (showFleetApp: boolean) => void;
}

export const CompletedTheBoarding: React.FC<Props> = ({ setShow }) => {
  return (
    <div className="completed-the-boarding-container">
      <div className="completed-the-boarding-container__main">
        <div className="completed-the-boarding-container__closer-container">
          <button onClick={() => setShow(false)}>
            <img src={exit} alt="exit" />
          </button>
        </div>
        <div className="completed-the-boarding-container__main-container">
          <div>
            <div className="completed-the-boarding-container_general-logo-field">
              <img src={generalLogo} alt="general-logo" />
            </div>
            <h2 className="completed-the-boarding-container_congratulation-field">
              Congratulation Travis. You have completed the boarding processes.
              You’are now ready to use Nauvus
            </h2>
          </div>
        </div>
        <div className="completed-the-boarding-container__button-submit-container">
          <Button label={"Take me to my HomePage"} className={"big-button"} />
        </div>
      </div>
    </div>
  );
};
