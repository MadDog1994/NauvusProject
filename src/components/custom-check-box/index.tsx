import React, { useState } from "react";
import checkbox from "../../assets/images/checkbox.png";
import "./styles.scss";

interface Props {
  text: string;
  imgUrl: string;
  addTo: () => void;
  deleteFrom: () => void;
}

export const CustomCheckBox: React.FC<Props> = ({
  text,
  imgUrl,
  deleteFrom,
  addTo,
}) => {
  const [selected, setSelected] = useState(false);

  const setSelectedItem = () => {
    if (selected) {
      setSelected(false);
      deleteFrom();
    } else {
      setSelected(true);
      addTo();
    }
  };

  return (
    <div className={`checkBox-container`} onClick={setSelectedItem}>
      <button className={`checkBox-container_button ${selected && "active"}`}>
        {selected ? (
          <img
            className="checkBox-container_image"
            src={checkbox}
            alt="Checkbox"
          />
        ) : (
          <img className="checkBox-container_image" src={imgUrl} alt="url" />
        )}
        <p className="checkBox-container_title">{text}</p>
      </button>
    </div>
  );
};
