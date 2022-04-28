import React from "react";

import "./styles.scss";

interface Props {
  value: string;
  setValue: (e: string) => void;
}

export const TextArea: React.FC<Props> = ({ value, setValue }) => {
  return (
    <form className="container-text-area">
      <textarea
        className="container-text-area_text-area"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
