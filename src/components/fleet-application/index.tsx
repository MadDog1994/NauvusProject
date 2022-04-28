import React, { useState } from "react";

import generalLogo from "../../assets/images/svgs/generalLogo.svg";
import exit from "../../assets/images/svgs/exit.svg";
import tick from "../../assets/images/svgs/tick.svg";

import "./styles.scss";

import { RegionToolTip } from "../region-tool-tip";
import { Button } from "../button";
import { DownloadFleetApp } from "../download-fleet-app";

interface Props {
  setOpenTask: () => void;
}

export const FleetApplication: React.FC<Props> = ({ setOpenTask }) => {
  const [data, setData] = useState("LLC - Upload Articles of Organization");
  return (
    <div className="fleet-app-container">
      <div className="fleet-app-container__main">
        <div className="fleet-app-container__closer-container">
          <button>
            <img src={exit} alt="exit" onClick={setOpenTask} />
          </button>
        </div>
        <div className="fleet-app-container__main-container">
          <div>
            <div className="fleet-app-container_general-logo-field">
              <img src={generalLogo} alt="general-logo" />
            </div>
            <h2 className="fleet-app-container_flet-app-field">
              Fleet Aplication
            </h2>
            <p className="fleet-app-container_uplod-document-field">
              Please upload the documents below
            </p>
          </div>
        </div>

        <div className="fleet-app-container__auth-main-container">
          <p className="fleet-app-container_auth-field">
            Operating Authority Letter
          </p>
          <DownloadFleetApp />
        </div>

        <div className="fleet-app-container__download-main-container">
          <p className="fleet-app-container_certicate-of-insurance-field">
            Certicate of insurance showing the following
          </p>
          <div className="fleet-app-container__coverage-minimum-container">
            <img src={tick} alt="tick" />
            <p className="fleet-app-container_coverage-minimum-field">
              $1,000,000 auto alabiity coverage minimun
            </p>
          </div>
          <div className="fleet-app-container__coverage-cargo-minimum-container">
            <img src={tick} alt="tick" />
            <p className="fleet-app-container_coverage-minimum-field">
              $1,00,000 cargo coverage minimum
            </p>
          </div>
          <DownloadFleetApp />
        </div>

        <div className="fleet-app-container__bussines-documentation-container">
          <p className="fleet-app-container_bussines-documentation-field">
            Business Documentation
          </p>
          <div>
            <p className="fleet-app-container_select-the-business-field">
              Please select the business type of your fleet and upload the
              corresponding document.
            </p>
            <p className="fleet-app-container_bussines-type-and-documentation-field">
              Business Type and Documentation to Upload
            </p>
            <RegionToolTip text={data} onClick={() => {}} />
          </div>
          <div className="fleet-app-container__download-flet-app-container">
            <DownloadFleetApp />
          </div>
        </div>
        <div className="fleet-app-container__button-submit-container">
          <Button label={"Submit"} className={"big-button"} />
        </div>
      </div>
    </div>
  );
};
