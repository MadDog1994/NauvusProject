import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

interface HeaderProps {
  buttonTitle: string;
  link: string;
  className?: string;
  logo: string;
  style_border?: string;
}
export const Header: React.FC<HeaderProps> = ({
  buttonTitle,
  link,
  className,
  logo,
  style_border,
}) => {
  return (
    <>
      <div className={`header-container ${style_border}`}>
        <img src={logo} alt="Logo" />
        <Link className={`header-container__login-button`} to={link}>
          <div className={`header-container__button-label ${className}`}>
            {buttonTitle}
          </div>
        </Link>
      </div>
    </>
  );
};
