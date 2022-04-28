import React, { useState } from "react";
import { BrokerSetup } from "../../components/broker-setup";
import { FleetApplication } from "../../components/fleet-application";

import { Footer } from "../../components/footer";
import { OnboardBlock } from "../../components/onboard-block";
import { PrivateHeader } from "../../components/private-header";

import { W9FormAndTaxId } from "../../components/w9-form";
import { onboardingCarrierData } from "../../config/carriers-data";

import "./styles.scss";

interface Props {
  showFleetApp: boolean;
  showW9Form: boolean;
  showBrokerSetup: boolean;
}

const OnboardingCarrier = () => {
  const [openTask, setOpenTask] = useState<Props>({
    showFleetApp: false,
    showW9Form: false,
    showBrokerSetup: false,
  });

  const toogler = (index: number) => {
    switch (index) {
      case 0:
        setOpenTask((prevState) => ({ ...prevState, showFleetApp: true }));
        break;
      case 1:
        setOpenTask((prevState) => ({ ...prevState, showW9Form: true }));
        break;
      case 2:
        setOpenTask((prevState) => ({ ...prevState, showBrokerSetup: true }));
        break;
      default:
        <></>;
    }
  };
  return (
    <div className="onboarding-carrier">
      {openTask.showFleetApp && (
        <FleetApplication
          setOpenTask={() =>
            setOpenTask((prevState) => ({
              ...prevState,
              showFleetApp: false,
            }))
          }
        />
      )}
      {openTask.showW9Form && (
        <W9FormAndTaxId
          onClick={() =>
            setOpenTask((prevState) => ({ ...prevState, showW9Form: false }))
          }
        />
      )}
      {openTask.showBrokerSetup && (
        <BrokerSetup
          setOpenTask={() =>
            setOpenTask((prevState) => ({
              ...prevState,
              showBrokerSetup: false,
            }))
          }
        />
      )}
      <PrivateHeader />
      <div className="onboarding-carrier__carrier-onboarding-container">
        <h1 className="onboarding-carrier_onboarding-progress-field">
          Your onboarding is progress.
        </h1>
        <p className="onboarding-carrier_complete-the-task-field">
          Please complete the following tasks.
        </p>
        <div>
          <p className="onboarding-carrier_application-field">APPLICATION</p>
        </div>
        <div>
          {onboardingCarrierData.map((el, index) => (
            <div key={index} className="onboarding-carrier__block">
              <OnboardBlock
                logo={el.logo}
                text={el.text}
                afterText={el.afterText}
                toogler={el.toogler}
                onClick={() => toogler(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OnboardingCarrier;
