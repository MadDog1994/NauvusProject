import React, { useState } from "react";

import { PrivateHeader } from "../../components/private-header";
import "./styles.scss";
import { OnboardingProfile } from "../../components/onboarding-profile";
import { Footer } from "../../components/footer";
import { OnboardingTakslist } from "../../components/onboarding-takslist";
import OrganizationInformation from "../../components/organization-information";
import ContactSupport from "../../components/contact-support";
import { CompletedTheBoarding } from "../../components/completed-the-boarding";

const OnboardingDispatcher = () => {
  const [tabValue, setTabValue] = useState("Onboarding Takslist");
  const [showFinishOnboard, setShowFinishOnboard] = useState(false);

  const renderBody = () => {
    switch (tabValue) {
      case "Onboarding Takslist":
        return <OnboardingTakslist />;
      case "Organization Information":
        return (
          <OrganizationInformation setShow={() => setShowFinishOnboard(true)} />
        );
      case "Contact Support":
        return <ContactSupport />;
      default:
        return <OnboardingTakslist />;
    }
  };
  return (
    <div className="container-wrapper-onboarding">
      <PrivateHeader />
      <div className="container-wrapper-onboarding__main-wrapper">
        <div className="container-wrapper-onboarding__main-left-side">
          <OnboardingProfile
            className="blue"
            tabValue={tabValue}
            setTabValue={(e: string) => setTabValue(e)}
          />
        </div>
        {renderBody()}
        {showFinishOnboard && (
          <CompletedTheBoarding setShow={() => setShowFinishOnboard(false)} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OnboardingDispatcher;
