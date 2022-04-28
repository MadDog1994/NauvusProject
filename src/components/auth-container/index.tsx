import React from "react";

import nauvusBackground from "../../assets/images/nauvusBackground.png";
import logo from "../../assets/images/svgs/logo.svg";
import "./styles.scss";

import { Header } from "../header";

interface AuthContainerProps {
  children: React.ReactNode;
  buttonTitle: string;
  link: string;
}

const AuthContainer: React.FC<AuthContainerProps> = ({
  children,
  buttonTitle,
  link,
}) => {
  return (
    <div className="auth-container">
      <div className="auth-container__left">
        <Header link={link} buttonTitle={buttonTitle} logo={logo} />
        <div className="auth-container__wrapper-container">
          <div className="auth-container__form-wrapper">{children}</div>
        </div>
      </div>
      <div className="auth-container__right">
        <img
          src={nauvusBackground}
          className="auth-container__right-background"
          alt="Nauvus Background"
        />
      </div>
    </div>
  );
};

export default AuthContainer;
