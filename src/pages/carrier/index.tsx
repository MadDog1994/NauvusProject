import React, { useEffect, useRef, useState } from "react";

import blackLogo from "../../assets/images/svgs/black-logo.svg";
import signUpBackground from "../../assets/images/signup-background.png";
import { Button } from "../../components/button";
import { CarrierBlock } from "../../components/carrier-block";
import { CarrierButton } from "../../components/carrier-button";
import { Header } from "../../components/header";
import { TextField } from "../../components/text-field";
import { carrierData, describesData } from "../../config/carriers-data";
import { CarrierCustomButton } from "../../components/carrier-custom-button";

import { Dispatcher } from "../../components/dispatcher";

import "./style.scss";
import { CarrierAndOwnerOperator } from "../../components/carrier-and-owner-operator";

const Carrier = () => {
  const [bestDescribes, setBestDesribes] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [dataCarrier, setDataCarrier] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    hereAboutUs: "",

    kindOfTrailer: [],
    sizeOfTrailer: [],
    legalNameOfBusiness: "",
    fleetGross: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    permanentAddress: false,
    numberOfTrucks: "",
    numberOfTrailers: "",
    currentContracts: "",

    otherDispatchers: "",
    currentlyDispatch: "",
    dispatchingExpirienced: "",
    timeDistance: "",
  });
  // + phone

  const littleAbout = useRef<any>();
  const passwordRef = useRef<any>();
  const bestDescribesRef = useRef<any>();

  useEffect(() => {
    return () =>
      window.scrollTo({
        top: 1850,
        behavior: "smooth",
      });
  }, [bestDescribes]);
  function handlerScroll(ref: any) {
    ref.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }

  const renderCarrierDescribes = () => {
    switch (bestDescribes) {
      case "Carrier & Owner Operator":
        return (
          <CarrierAndOwnerOperator
            setDataCarrier={setDataCarrier}
            dataCarrier={dataCarrier}
          />
        );
      case "Dispatcher":
        return <Dispatcher />;
      default:
        return <></>;
    }
  };
  return (
    <div className="carrier-container-wrapper">
      <div className="carrier-container-wrapper__carrier-left-container">
        <Header
          buttonTitle={"Login"}
          link={""}
          className="black"
          logo={blackLogo}
          style_border="style_border"
        />
        <div className="carrier-container-wrapper__carrier-block-container">
          <CarrierBlock
            text="Welcome to Nauvus,"
            subtitle="Could you please tell us about yourself"
            className="carrier_title"
            titleInfo="How did you hear about us?"
          >
            <div className="carrier-container-wrapper__inputs-wrapper">
              {carrierData.map((el, index) => (
                <CarrierButton
                  key={index + el.title}
                  text={el.title}
                  onClick={() =>
                    setDataCarrier((prevState: any) => ({
                      ...prevState,
                      hereAboutUs: el.title,
                    }))
                  }
                  className={
                    dataCarrier.hereAboutUs === el.title
                      ? el.className + " active-button"
                      : el.className
                  }
                />
              ))}
            </div>

            <div className="carrier-container-wrapper__button-wrapper">
              <Button
                label="Next"
                className="big-button"
                onClick={() => handlerScroll(littleAbout)}
              />
            </div>
          </CarrierBlock>

          <div
            className="carrier-container-wrapper__tell-us-about-container"
            ref={littleAbout}
          >
            <CarrierBlock titleInfo="Tell us little about yourself">
              <div className="carrier-container-wrapper__label-style">
                <div className="carrier-container-wrapper__text-field">
                  <TextField
                    label="Legal First Name"
                    value={dataCarrier.firstName}
                    placeholder="Enter a first name"
                    onFieldChange={(e) =>
                      setDataCarrier((prevState) => ({
                        ...prevState,
                        firstName: e,
                      }))
                    }
                  />
                </div>
                <div className="carrier-container-wrapper__text-field right-field">
                  <TextField
                    label="Legal Last Name"
                    value={dataCarrier.lastName}
                    placeholder="Enter a last name"
                    onFieldChange={(e) =>
                      setDataCarrier((prevState) => ({
                        ...prevState,
                        lastName: e,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="carrier-container-wrapper__label-style">
                <TextField
                  label="Email Addres"
                  value={dataCarrier.email}
                  placeholder="Enter your email here"
                  onFieldChange={(e) =>
                    setDataCarrier((prevState) => ({ ...prevState, email: e }))
                  }
                />
              </div>
              <div className="carrier-container-wrapper__yourself-button">
                <Button
                  label="Continue"
                  className="big-button"
                  onClick={() => handlerScroll(passwordRef)}
                />
              </div>
            </CarrierBlock>
          </div>

          <div ref={passwordRef}>
            <CarrierBlock titleInfo="Create a new password for your acount">
              <TextField
                type={showPass ? "text" : "password"}
                downLabel="Minimum 5 characters"
                showButton={true}
                label="Type a new password"
                placeholder="Enter your password here"
                value={dataCarrier.password}
                onFieldChange={(e) =>
                  setDataCarrier((prevState) => ({ ...prevState, password: e }))
                }
                showPass={() => setShowPass(!showPass)}
              />

              <div className="carrier-container-wrapper__yourself-button">
                <Button
                  label="All Good"
                  className="big-button"
                  onClick={() => handlerScroll(bestDescribesRef)}
                />
              </div>
            </CarrierBlock>
          </div>

          <div
            ref={bestDescribesRef}
            className="carrier-container-wrapper__best-describes-container"
          >
            <CarrierBlock titleInfo="Which best describes you?">
              <div className="carrier-container-wrapper__buttons-block">
                {describesData.map((el, index) => (
                  <CarrierCustomButton
                    key={index + el.title}
                    pic={el.pic}
                    title={el.title}
                    className={bestDescribes === el.title ? "active" : ""}
                    subscription={el.subscription}
                    onClick={() => setBestDesribes(el.title)}
                  />
                ))}
              </div>
            </CarrierBlock>
          </div>
          {renderCarrierDescribes()}
        </div>
      </div>
      <div className="carrier-container-wrapper__carrier-right-container">
        <img
          src={signUpBackground}
          className="carrier-container-wrapper_background-image"
          alt="backgound_img"
        />
      </div>
    </div>
  );
};

export default Carrier;
