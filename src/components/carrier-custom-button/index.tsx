import React from "react";

import "./styles.scss";

interface Props {
  pic: string;
  title: string;
  subscription: string;
  onClick?: () => void;
  className?: string;
  onScroll?: () => void;
}

export const CarrierCustomButton: React.FC<Props> = ({
  pic,
  title,
  subscription,
  onClick,
  className,
  onScroll,
}) => {
  return (
    <div onClick={onScroll} className={`carrier-custom-button ${className}`}>
      <button className="carrier-custom-button_button" onClick={onClick}>
        <div className="carrier-custom-button__image-container">
          <img src={pic} alt="#" className="carrier-custom-button_image" />
        </div>
        <div className="carrier-custom-button__info-container">
          <p className="carrier-custom-button_title">{title}</p>
          <p className="carrier-custom-button_description">{subscription}</p>
        </div>
      </button>
    </div>
  );
};
