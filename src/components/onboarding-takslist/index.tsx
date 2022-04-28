import React, { useState } from "react";
import { onboardData } from "../../config/carriers-data";

import { OnboardBlock } from "../onboard-block";
import { Title } from "../title";
import { TwoReference } from "../two-reference";

import "./styles.scss";
import { W9FormAndTaxId } from "../w9-form";

export const OnboardingTakslist = () => {
  const [showTwoReference, setShowTwoReference] = useState(false);
  const [showW9Form, setShowW9Form] = useState(false);

  return (
    <>
      {showTwoReference && (
        <TwoReference setShowTwoReference={() => setShowTwoReference(false)} />
      )}
      {showW9Form && <W9FormAndTaxId onClick={() => setShowW9Form(false)} />}
      <div className="container-wrapper__main-right-side">
        <div>
          <Title
            className="onboard-title"
            text="Your onboarding is progress."
            subtitle="Please complete the following tasks."
          />
        </div>
        <div className="container-wrapper__app-wrapper-container">
          <span className="container-wrapper_app-container">APPLICATION</span>
        </div>

        {onboardData.map((el, index) => (
          <div
            key={index + el.text}
            className="container-wrapper__onboard-block-wrapper"
          >
            <OnboardBlock
              logo={el.logo}
              text={el.text}
              afterText={el.afterText}
              toogler={el.toogler}
              onClick={() =>
                index === 0 ? setShowW9Form(true) : setShowTwoReference(true)
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};
