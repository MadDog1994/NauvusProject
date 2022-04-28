import React, { useState } from "react";
import { likeToOnboard } from "../../config/carriers-data";
import { CarrierCustomButton } from "../carrier-custom-button";

export const LikeToOnboard = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelected = (index: number) => {
    if (selected.includes(index)) {
      setSelected((prevSelected) => prevSelected.filter((el) => el !== index));
    } else {
      setSelected((prevSelected) => [...prevSelected, index]);
    }
  };
  const scrollTo = () => {
    window.scrollTo({
      top: 4000,
      behavior: "smooth",
    });
  };
  return (
    <div className="dispatcher-container__what-you-have-container">
      <p className="dispatcher-container_what-you-have">What you have?</p>
      <div className="dispatcher-container__would-like-to-onboard">
        {likeToOnboard.map((el, index) => (
          <CarrierCustomButton
            key={index + el.title}
            pic={el.img}
            title={el.title}
            subscription={el.underTitle}
            className={selected.includes(index) ? "active" : ""}
            onClick={() => handleSelected(index)}
            onScroll={scrollTo}
          />
        ))}
      </div>
    </div>
  );
};
