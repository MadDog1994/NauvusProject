import React from "react";

import "./style.scss";

interface Props {
  onClick: () => void;
  text: string;
  className: string;
  selectedButton?: string;
}

export const CarrierButton: React.FC<Props> = ({
  onClick,
  text,
  className,
}) => {
  return (
    <button className={`carrier-button-wrapper ${className}`} onClick={onClick}>
      <span className="carrier-button-wrapper_title">{text}</span>
    </button>
  );
};
