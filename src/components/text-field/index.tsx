import React from "react";

import "./styles.scss";

interface Props {
  placeholder: string;
  value?: string;
  onFieldChange: (arg: any) => void;
  className?: string;
  label?: string;
  downLabel?: string;
  showButton?: boolean;
  type?: string;
  showPass?: () => void;
}

export const TextField: React.FC<Props> = ({
  placeholder,
  value,
  onFieldChange,
  className,
  label,
  downLabel,
  showButton,
  type,
  showPass,
}) => {
  return (
    <div className={`text-field-container ${className}`}>
      {label && <p className="text-field-container_label">{label}</p>}
      <input
        type={type}
        className="text-field-container_input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onFieldChange(e.target.value)}
      />
      <div>
        {downLabel && (
          <p className="text-field-container_down_label">{downLabel}</p>
        )}
      </div>
      <div className="text-field-container__button-position">
        {showButton && (
          <button onClick={showPass} className="text-field-container_button">
            Show
          </button>
        )}
      </div>
    </div>
  );
};
