import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { DriverOrCarrier } from "../button-driver-or-carrier";
import { CarrierBlock } from "../carrier-block";
import { Checkbox } from "../checkbox";
import { RegionToolTip } from "../region-tool-tip";
import { TextField } from "../text-field";
import urlBottomArrow from "../../assets/images/svgs/vector.svg";
import { LikeToOnboard } from "../like-to-onboard";
import "./styles.scss";

export const Dispatcher = () => {
  const aboutBusinessRef = useRef<any>();
  const expirienceRef = useRef<any>();
  const driverOrCarrierRef = useRef<any>();
  const congratulationRef = useRef<any>();

  function handlerScroll(ref: any) {
    ref.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [data, setData] = useState({
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    legalNameOfYourBusiness: "",
    amoutOfDispatchers: "",
    currentlyDriversDispatch: "",
    dispatchingExperienced: "",
  });

  const [useThePermanentAddress, setUseThePermanentAddress] = useState(false);
  const [driverOrCarrier, setDriverOrCarrier] = useState(false);

  return (
    <div className="dispatcher-container">
      <CarrierBlock
        className="margin-24px"
        titleInfo="Your Permanent address"
        underTitle="This will be used as the billing address of your card as well as on tax documents and legal contacts"
      >
        <TextField
          value={data.street1}
          placeholder="Street 1"
          onFieldChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              street1: e,
            }))
          }
        />
        <TextField
          value={data.street2}
          placeholder="Street 2 (Optional)"
          onFieldChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              street2: e,
            }))
          }
        />
        <div className="carrier-container-wrapper__fields-container">
          <div className="carrier-container-wrapper__fields-container-div">
            <TextField
              value={data.city}
              placeholder="City"
              onFieldChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  city: e,
                }))
              }
            />
          </div>
          <div className="carrier-container-wrapper__fields-container-div">
            <TextField
              value={data.state}
              placeholder="State"
              onFieldChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  state: e,
                }))
              }
            />
          </div>
          <div className="carrier-container-wrapper__fields-container-div">
            <TextField
              value={data.zip}
              placeholder="Zip"
              onFieldChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  zip: e,
                }))
              }
            />
          </div>
        </div>
        <div>
          <Checkbox
            text="Use the permanent address for the mailing address"
            onChange={setUseThePermanentAddress}
            value={useThePermanentAddress}
          />
        </div>
        <div className="carrier-container-wrapper__text-field-button-happy">
          <Button
            label="I'm happy so far"
            className="big-button"
            onClick={() => handlerScroll(aboutBusinessRef)}
          />
        </div>
      </CarrierBlock>
      <div ref={aboutBusinessRef}>
        <CarrierBlock
          titleInfo="Tell us more about your business"
          underTitle="You are signing up for flex. If you need to change product. You can go back to fleet details."
        >
          <TextField
            downLabel="Enter the exact name seen on legal documents"
            label="Legal Name Of Your Business"
            placeholder=""
            value={data.legalNameOfYourBusiness}
            onFieldChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                legalNameOfYourBusiness: e,
              }))
            }
          />
          <TextField
            label="Do you have other dispatchers on your team other than yourself?"
            placeholder="Enter amount of dispatchers"
            value={data.amoutOfDispatchers}
            onFieldChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                amoutOfDispatchers: e,
              }))
            }
          />
          <TextField
            label="How many drivers do you currently dispactch for?"
            placeholder="Enter amount of drivers"
            value={data.currentlyDriversDispatch}
            onFieldChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                currentlyDriversDispatch: e,
              }))
            }
          />
          <div className="carrier-container-wrapper__button-width">
            <Button
              className="big-button"
              label="Continue"
              onClick={() => handlerScroll(expirienceRef)}
            />
          </div>
        </CarrierBlock>
      </div>
      <div ref={expirienceRef}>
        <CarrierBlock titleInfo="How many years of experience fo you have dispatching?">
          <div className="dispatcher-container__dispatching-experience-container">
            <TextField
              label="Dispatching Experienced"
              placeholder="Eg. 5"
              value={data.dispatchingExperienced}
              onFieldChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  dispatchingExperienced: e,
                }))
              }
            />
            <div className="dispatcher-container__dispatching-experience-menu">
              <RegionToolTip text="Year(s)" onClick={() => {}} />
            </div>
          </div>
          <div className="carrier-container-wrapper__button-width">
            <Button
              className="big-button"
              label="Continue"
              onClick={() => handlerScroll(driverOrCarrierRef)}
            />
          </div>
        </CarrierBlock>
      </div>
      <div ref={driverOrCarrierRef}>
        <CarrierBlock titleInfo="Do you have a driver or carrier you would like to onboard?">
          <div className="dispatcher-container__driver-or-carrier-container">
            <DriverOrCarrier
              title="YES"
              className={driverOrCarrier ? "active-yes-no" : "yes-no"}
              onChange={() => setDriverOrCarrier(true)}
            />
            <DriverOrCarrier
              title="NO"
              onChange={() => setDriverOrCarrier(false)}
              onClick={() => handlerScroll(congratulationRef)}
            />
          </div>
          {driverOrCarrier && <LikeToOnboard />}
        </CarrierBlock>
      </div>

      <>
        <div
          ref={congratulationRef}
          className="carrier-container-wrapper__field-ready-to-get-wrapper"
        >
          <CarrierBlock
            className="field-ready-to-get"
            titleInfo={`Congratulation Travis. \n You're now ready to get Onboarded to  Nauvus.`}
            underTitle="Let's complete your profile"
          >
            <div className="carrier-container-wrapper__text-field-button-happy">
              <Link to={"/onboarding-dispatcher"}>
                <Button label="Begin Onboarding" className="big-button" />
              </Link>
            </div>
          </CarrierBlock>
        </div>
        <button
          onClick={scrollToUp}
          className="carrier-container-wrapper__bottom-arrow"
        >
          <img src={urlBottomArrow} alt="arrow_up_pic" />
        </button>
      </>
    </div>
  );
};
