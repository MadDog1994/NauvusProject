import React from "react";
import "./style.scss";

interface Props {
  text: string;
  subtitle: string;
  className: string;
}

export const Title: React.FC<Props> = ({ text, subtitle, className }) => {
  return (
    <div>
      <div className={`form_title  ${className}`}>{text}</div>
      <p className="form_subtitle">{subtitle}</p>
    </div>
  );
};
