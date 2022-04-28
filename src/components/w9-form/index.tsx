import React, { useState } from "react";

import generalLogo from "../../assets/images/svgs/generalLogo.svg";
import exit from "../../assets/images/svgs/exit.svg";

import "./styles.scss";

import { Button } from "../button";
import { DownloadFleetApp } from "../download-fleet-app";
import { TextField } from "../text-field";

interface Props {
  onClick: () => void;
}

export const W9FormAndTaxId: React.FC<Props> = ({ onClick }) => {
  const [data, setData] = useState("");
  return (
    <div className="w9-form-and-tax-id">
      <div className="w9-form-and-tax-id__main">
        <div className="w9-form-and-tax-id__closer-container">
          <button onClick={onClick}>
            <img src={exit} alt="exit" />
          </button>
        </div>
        <div className="w9-form-and-tax-id__main-container">
          <div>
            <div className="w9-form-and-tax-id_general-logo-field">
              <img src={generalLogo} alt="general-logo" />
            </div>
            <h2 className="w9-form-and-tax-id_flet-app-field">
              W-9 From and Tax ID Number
            </h2>
            <p className="w9-form-and-tax-id_uplod-document-field">
              Please add the required information bellow.
            </p>
          </div>
        </div>

        <div className="w9-form-and-tax-id__auth-main-container">
          <p className="w9-form-and-tax-id_auth-field">
            Upload a copy of signed W-9 document.
          </p>
          <DownloadFleetApp />
        </div>

        <div className="w9-form-and-tax-id__bussines-documentation-container">
          <div>
            <p className="w9-form-and-tax-id_select-the-business-field">
              Taxpayer ID Number (EIN or SSN)
            </p>
            <TextField
              onFieldChange={(e) => setData(e)}
              placeholder="This is the number entered on your W-9"
            />
          </div>
          <p className="w9-form-and-tax-id_number-entered-field">
            This is the number entered on your W-9
          </p>
        </div>
        <div className="w9-form-and-tax-id__button-submit-container">
          <Button label={"Submit"} className={"big-button"} />
        </div>
      </div>
    </div>
  );
};
