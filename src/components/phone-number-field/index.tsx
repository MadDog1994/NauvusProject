import React, { useState } from "react";
import { CoutriesCodeSelector } from "../coutry-codes";

import "./styles.scss";

interface Props {
  coutryCode: string;
  setCountryCode: (arg: string) => void;
  fieldValue: string;
  setFieldValue: (arg: string) => void;
}

export const PhoneNumberField: React.FC<Props> = ({
  setCountryCode,
  coutryCode,
  fieldValue,
  setFieldValue,
}) => {
  return (
    <div className="input-container">
      <CoutriesCodeSelector
        defaultValue={coutryCode}
        setValue={(e: string) => setCountryCode(e)}
      />
      <input
        className="input-container__field"
        placeholder="Enter mobile number"
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      />
    </div>
  );
};
