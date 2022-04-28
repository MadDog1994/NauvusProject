import React, { useState } from "react";
import { Button } from "../button";
import warning from "../../assets/images/svgs/warning.svg";
import editGrey from "../../assets/images/svgs/editGrey.svg";
import { RegionToolTip } from "../region-tool-tip";
import "./styles.scss";
import { countriesData } from "../../config/carriers-data";

const timeZone = require("../../config/timeZone.json");

interface Props {
  setShow: () => void;
}

const OrganizationInformation: React.FC<Props> = ({ setShow }) => {
  const [changeTimeZone, setChangeTimeZone] = useState("New York - EST/EDT");
  const [changeLocal, setChangeLocal] = useState("United States");

  const showLocal = () =>
    countriesData.map((el: string, index: number) => (
      <div
        onClick={() => setChangeLocal(el)}
        key={index}
        className="container-region-drop-down__change-field"
      >
        <p>{el}</p>
      </div>
    ));
  const showTimeZone = () =>
    timeZone.map((text: any, index: number) => (
      <div
        onClick={() => setChangeTimeZone(text.text)}
        key={index}
        className="container-region-drop-down__change-field"
      >
        <p>{text.text}</p>
      </div>
    ));

  return (
    <div className="container-wrapper">
      <div className="container-wrapper__finish-wrapper-container">
        <div className="container-wrapper__finish-onboard-field">
          <div>
            <img src={warning} alt="warning" />
          </div>
          <p className="container-wrapper_finish-text-field">
            Please Finish Your Onboarding Process
          </p>
        </div>

        <div onClick={setShow} className="container-wrapper__button-field">
          <Button label="Complete Now" className="big-button round-button" />
        </div>
      </div>
      <div className="container-wrapper__about-feed-field">
        <div className="container-wrapper__about-feed-field-block">
          <h1 className="container-wrapper_about-feed-field-title">
            About Feet
          </h1>
          <p className="container-wrapper_about-feed-field-title-inner">
            Comapany Name
          </p>
          <p className="container-wrapper_about-feed-field-title-inner-dispatch">
            ABC DISpatch Logistics
          </p>
          <p className="container-wrapper_about-feed-field-title-inner">
            Address
          </p>
          <p className="container-wrapper_about-feed-field-title-inner-dispatch">
            1900 East Samford Avenue Auburn, AL 36830
          </p>
        </div>
        <div className="container-wrapper__about-feed-field-block">
          <h1 className="container-wrapper_about-feed-field-title">
            Authority Information
          </h1>
          <p className="container-wrapper_about-feed-field-title-inner">
            MC Number
          </p>
          <p className="container-wrapper_about-feed-field-title-inner-dispatch">
            904451
          </p>
          <p className="container-wrapper_about-feed-field-title-inner">
            US DOT Number
          </p>
          <button className="container-wrapper_add">+Add</button>
        </div>
        <button className="container-wrapper_edit">
          <img src={editGrey} alt="edit" />
        </button>
      </div>

      <div className="container-wrapper__contact-info">
        <div className="container-wrapper__info-container">
          <p className="container-wrapper_contact-info-field">
            Contact Information
          </p>
          <p className="container-wrapper_about-feed-field-title-inner">
            Email
          </p>
          <p className="container-wrapper_personal-info">
            travissankhar@gmail.com
          </p>
          <p className="container-wrapper_about-feed-field-title-inner">
            Phone
          </p>
          <p className="container-wrapper_personal-info">+1 (334) 835 - 0962</p>
        </div>
        <button className="container-wrapper_edit">
          <img src={editGrey} alt="edit" />
        </button>
      </div>

      <div className="container-wrapper__contact-info">
        <div className="container-wrapper__info-container">
          <p className="container-wrapper_contact-info-field">Region</p>
          <div>
            <div className="container-wrapper__ras">
              <p className="container-wrapper_about-feed-field-title-inner-locale">
                Locale
              </p>
              <RegionToolTip text={changeLocal} onClick={showLocal} />
            </div>
          </div>
          <div className="container-wrapper__tri">
            <p className="container-wrapper_about-feed-field-title-inner-timezone">
              Timezone
            </p>
            <RegionToolTip text={changeTimeZone} onClick={showTimeZone} />
          </div>
        </div>

        <button className="container-wrapper_edit">
          <img src={editGrey} alt="edit" />
        </button>
      </div>
    </div>
  );
};

export default OrganizationInformation;
