import React from "react";
import { tabsValues } from "../../config/carriers-data";

import editGrey from "../../assets/images/svgs/editGrey.svg";
import "./styles.scss";

interface Props {
  className?: string;
  tabValue: string;
  setTabValue: (value: string) => void;
}

export const OnboardingProfile: React.FC<Props> = ({
  className,
  tabValue,
  setTabValue,
}) => {
  return (
    <div className="container-wrapper-profile">
      <div className="container-wrapper-profile__contrainer-left-profile">
        <div className="container-wrapper-profile__profile">
          <h3>TS</h3>
        </div>
        <div className="container-wrapper-profile__contrainer-left-profile-name">
          <p>Travis Sankar</p>
        </div>
        <div className="container-wrapper-profile__contrainer-left-profile-carrier">
          <p className="container-wrapper-profile_contrainer-left-profile-carrier-name">
            Admin
          </p>
          <button>
            <img src={editGrey} alt="Edit" />
          </button>
        </div>
      </div>

      <div className="container-wrapper-profile__contrainer-onboarding">
        {tabsValues.map((el, index) => (
          <button
            key={index + el.title}
            className="container-wrapper-profile__contrainer-onboarding-tasklist"
            onClick={() => setTabValue(el.title)}
          >
            {tabValue === el.title ? (
              <img src={el.imgTarget} alt={el.title} />
            ) : (
              <img src={el.img} alt={el.title} />
            )}
            <p
              className={`container-wrapper-profile_tasklist-field ${
                tabValue === el.title && "active-tab"
              } ${className}`}
            >
              {el.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
