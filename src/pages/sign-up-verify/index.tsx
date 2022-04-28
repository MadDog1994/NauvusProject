import React, { useState } from "react";
import AuthContainer from "../../components/auth-container";
import { Button } from "../../components/button";
import "./styles.scss";
import { VerifyCodeFields } from "../../components/verify-code-fields";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { sendVerifyCode } from "../../redux/auth/actions";

const Verify = () => {
  const [codeVerify, setCodeVerify] = useState<any>("");
  const { phoneNumber } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const sendCode = () => {
    dispatch(
      sendVerifyCode({
        phone: phoneNumber,
        code: codeVerify,
      })
    );
  };

  return (
    <AuthContainer buttonTitle="Login" link="/carrier">
      <div className="verify-container">
        <div className="title-container">
          <p className="title-text-container">
            Enter the 4-digit code{" "}
            <span className="title-style-text">we sent to</span> {phoneNumber}{" "}
            <span className="title-style-text">
              to verify your phone number
            </span>
          </p>
        </div>
        <VerifyCodeFields onClick={(e: string) => setCodeVerify(e)} />
        <div className="button-container">
          <Link to="/carrier">
            <Button label="Verify" className="big-button" onClick={sendCode} />
          </Link>
        </div>
        <div className="resend-container">
          <span>Code hasn’t arrived? </span>
          <button className="resend-button">Re-send code?</button>
        </div>
      </div>
    </AuthContainer>
  );
};

export default Verify;
