import React from "react";

import "./styles.scss";

interface Props {
  className?: string;
  title: string;
  onChange?: () => void;
  onClick?: () => void;
}
export const DriverOrCarrier: React.FC<Props> = ({
  title,
  onChange,
  onClick,
  className,
}) => {
  return (
    <div onClick={onClick} className="driver-to-onboard">
      <button
        onClick={onChange}
        className={`driver-to-onboard_yes-no ${className}`}
      >
        {title}
      </button>
    </div>
  );
};
