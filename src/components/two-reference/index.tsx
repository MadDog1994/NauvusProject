import React, { useState } from "react";

import generalLogo from "../../assets/images/svgs/generalLogo.svg";
import exit from "../../assets/images/svgs/exit.svg";

import { Button } from "../button";
import { TextField } from "../text-field";
import { twoReferenceInformation } from "../../config/carriers-data";
import "./styles.scss";
import { useAppDispatch } from "../../redux/hooks";

interface Props {
  setShowTwoReference: () => void;
}

export const TwoReference: React.FC<Props> = ({ setShowTwoReference }) => {
  const [data, setData] = useState({
    companyName: "",
    driverName: "",
    email: "",
    mobilePhoneNumber: "",
  });

  return (
    <div className="two-reference-container">
      <div className="two-reference-container__main">
        <div className="two-reference-container__closer-container">
          <button onClick={setShowTwoReference}>
            <img src={exit} alt="exit" />
          </button>
        </div>
        <div className="two-reference-container__main-container">
          <div>
            <div className="two-reference-container_general-logo-field">
              <img src={generalLogo} alt="general-logo" />
            </div>
            <h2 className="two-reference-container_flet-app-field">
              Two Reference Information
            </h2>
          </div>
        </div>
        <div>
          {twoReferenceInformation.map((el, index) => (
            <div
              key={index + el.title}
              className="two-reference-container__title-container"
            >
              <p className="two-reference-container_title">{el.title}</p>
              <TextField
                placeholder={el.placeholder}
                onFieldChange={(e) =>
                  setData((prevState) => ({ ...prevState, [el.type]: e }))
                }
              />
            </div>
          ))}
        </div>
        <div className="two-reference-container__button-submit-container">
          <Button label={"Submit"} className={"big-button"} />
        </div>
      </div>
    </div>
  );
};
