import React, { useState } from "react";

import arrow from "../../assets/images/svgs/arrow.svg";
import "./styles.scss";

const coutryCodes = require("../../config/coutryCodes.json");

interface Props {
  defaultValue: string;
  setValue: (code: string) => void;
}

export const CoutriesCodeSelector: React.FC<Props> = ({
  defaultValue,
  setValue,
}) => {
  const [open, setOpen] = useState(false);

  const selectCode = (value: string) => {
    setValue(value);
    setOpen(false);
  };
  return (
    <div className="coutries-selector">
      <button
        onClick={() => setOpen(!open)}
        className="coutries-selector_button"
      >
        <p>{defaultValue}</p>
        <img src={arrow} alt="Arrow" />
      </button>
      {open && (
        <div className="coutries-selector__countries-container">
          {coutryCodes.map((code: any) => (
            <button
              key={code.dialCode + code.isoCode}
              className="coutries-selector__coutry-container"
              onClick={() => selectCode(code.dialCode)}
            >
              <img
                src={code.flag}
                className="coutries-selector_coutry-image"
                alt={code.isoCode}
              />
              <p className="coutries-selector_p">{code.dialCode}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
