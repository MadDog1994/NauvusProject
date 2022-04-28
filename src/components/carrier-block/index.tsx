import React from "react";
import blackLogo from "../../assets/images/svgs/black-logo.svg";

import "./style.scss";

interface Props {
  subtitle?: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
  titleInfo: string;
  underTitle?: string;
}

export const CarrierBlock: React.FC<Props> = ({
  text,
  children,
  subtitle,
  titleInfo,
  underTitle,
  className,
}) => {
  return (
    <div className="carrier-block">
      <div className="carrier-block__logo-container">
        <img
          className="title-blackLogo-style"
          src={blackLogo}
          alt="Black Logo"
        />
      </div>
      <div className="carrier-block__title-wrapper">
        <div className="carrier-block__title-container">
          <div className="carrier-block__title-wrapper">
            {text && (
              <div className="carrier-block__title-logo-style">{text}</div>
            )}
            {subtitle && (
              <div className="carrier-block__title-logo-subtitle">
                {subtitle}
              </div>
            )}
            <div className={`carrier-block__title-info ${className}`}>
              {titleInfo}
            </div>
            <div className={`carrier-block__under-title ${className}`}>
              {underTitle}
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
