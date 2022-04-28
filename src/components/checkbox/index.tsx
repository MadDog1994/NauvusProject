import React from "react";
import "./styles.scss";

interface Props {
  text: string;
  onChange: (arg: boolean) => void;
  value: boolean;
}

export const Checkbox: React.FC<Props> = ({ text, onChange, value }) => {
  return (
    <div className="fields-container-input">
      <input
        className="input-checkbox"
        type="checkbox"
        checked={value}
        onChange={() => onChange(!value)}
      />
      <span className="span-style">{text}</span>
    </div>
  );
};
