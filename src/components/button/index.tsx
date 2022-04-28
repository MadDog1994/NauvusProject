import React from "react";

import "./styles.scss";

interface ButtonProps {
  onClick?: (arg: any) => void;

  label: string;
  className: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      <div className="button__label">{label}</div>
    </button>
  );
};
