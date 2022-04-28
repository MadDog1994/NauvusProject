import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthContainer from "../../components/auth-container";
import { Button } from "../../components/button";
import { PhoneNumberField } from "../../components/phone-number-field";
import { Title } from "../../components/title";
import { sendPhoneNumber } from "../../redux/auth/actions";
import { useAppDispatch } from "../../redux/hooks";

import "./styles.scss";

const SignUpMobile = () => {
  const [coutryCode, setCountyCode] = useState("+38");
  const [fieldValue, setFieldValue] = useState<string>("633954940");

  const dispatch = useAppDispatch();

  const sendPhone = () => {
    dispatch(sendPhoneNumber(coutryCode + fieldValue));
  };

  return (
    <AuthContainer buttonTitle="Login" link="/sign-in">
      <div className="content-container">
        <Title
          text="To start, what is your mobile phone number?"
          subtitle=""
          className=""
        />
        <div className="phone-input-container">
          <PhoneNumberField
            coutryCode={coutryCode}
            setCountryCode={(e: string) => setCountyCode(e)}
            fieldValue={fieldValue}
            setFieldValue={(e: string) => setFieldValue(e)}
          />
        </div>
        <Link to="/sign-up-verify">
          <Button label="Continue" className="big-button" onClick={sendPhone} />
        </Link>
      </div>
    </AuthContainer>
  );
};

export default SignUpMobile;
