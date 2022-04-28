import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Carrier from "../../pages/carrier";
import Login from "../../pages/login";
import OnboardingCarrier from "../../pages/onboarding-carrier-and-operator";
import Onboarding from "../../pages/onboarding-dispatcher";
import SignUpMobile from "../../pages/sign-up-phone";
import Verify from "../../pages/sign-up-verify";
import PrivateRoute from "../private-route";

function Strip() {
  const access_token = true;
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-up" />} />
      <Route path="/sign-up" element={<SignUpMobile />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up-verify" element={<Verify />} />
      <Route path="/carrier" element={<Carrier />} />

      <Route
        path="/onboarding-dispatcher"
        element={
          access_token ? (
            <PrivateRoute access_token={access_token}>
              <Onboarding />
            </PrivateRoute>
          ) : (
            <Navigate to="/sign-up" />
          )
        }
      />

      <Route
        path="/onboarding"
        element={
          access_token ? (
            <PrivateRoute access_token={access_token}>
              <OnboardingCarrier />
            </PrivateRoute>
          ) : (
            <Navigate to="/sign-up" />
          )
        }
      />
    </Routes>
  );
}

export default Strip;
