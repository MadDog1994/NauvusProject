import React, { useState } from "react";

import dropDown from "../../assets/images/svgs/arrow-down.svg";

import "./styles.scss";

interface Props {
  text: string;
  onClick: any;
}

export const RegionToolTip: React.FC<Props> = ({ text, onClick }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="container-region-drop-down"
      >
        <span className="container-region-drop-down_locale">{text}</span>
        <img src={dropDown} alt="drop-down" />
      </button>

      {show && (
        <div
          onClick={() => setShow(!show)}
          className="container-region-drop-down__drop-down-container"
        >
          {onClick()}
        </div>
      )}
    </>
  );
};
