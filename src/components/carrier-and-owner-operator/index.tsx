import React, { useRef, useState } from "react";

import {
  currentContracts,
  kindOfTrailerData,
  sizeOfTrailer,
} from "../../config/carriers-data";
import { Button } from "../button";
import { CarrierBlock } from "../carrier-block";
import { CarrierButton } from "../carrier-button";
import { Checkbox } from "../checkbox";
import { CustomCheckBox } from "../custom-check-box";
import { TextArea } from "../text-area";
import { TextField } from "../text-field";
import urlBottomArrow from "../../assets/images/svgs/vector.svg";
import { Link } from "react-router-dom";

interface Props {
  setDataCarrier: (arg: any) => void;
  dataCarrier: any;
}

export const CarrierAndOwnerOperator: React.FC<Props> = ({
  setDataCarrier,
  dataCarrier,
}) => {
  const [carrierContractValue, setCarrierContractValue] = useState("");

  const addTrailerInfo = (item: string, type: string) => {
    setDataCarrier((prevState: any) => ({
      ...prevState,
      [type]: [...dataCarrier[type], item],
    }));
  };
  const deleteTrailerInfo = (item: string, type: string) => {
    const newAdd = [...dataCarrier[type].filter((el: string) => el !== item)];
    setDataCarrier((prevState: any) => ({
      ...prevState,
      [type]: newAdd,
    }));
  };

  const aboutBusinessRef = useRef<any>();
  const pernamentAddressRef = useRef<any>();
  const manyVehiclesRef = useRef<any>();
  const contractsWithCompaniesRef = useRef<any>();
  const readyToOnboardRef = useRef<any>();

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
  return (
    <>
      <div>
        <CarrierBlock
          className="driver-trailer"
          titleInfo="Travis, what kind of trailer do you usually driver?"
          underTitle="If the driver has more than one trailer, pick the one that is driven most often."
        >
          <div className="carrier-container-wrapper__kindOfTrailer-style">
            {kindOfTrailerData.map((el, index) => (
              <CustomCheckBox
                key={index + el.text}
                text={el.text}
                imgUrl={el.imgUrl}
                addTo={() => addTrailerInfo(el.text, "kindOfTrailer")}
                deleteFrom={() => deleteTrailerInfo(el.text, "kindOfTrailer")}
              />
            ))}

            <p className="carrier-container-wrapper_size-of-trailer">
              Please select the size of your trailer
            </p>
            <div className="carrier-container-wrapper__size-of-trailer-container">
              {sizeOfTrailer.map((el, index) => (
                <CustomCheckBox
                  key={index + el.text}
                  text={el.text}
                  imgUrl={el.img}
                  addTo={() => addTrailerInfo(el.text, "sizeOfTrailer")}
                  deleteFrom={() => deleteTrailerInfo(el.text, "sizeOfTrailer")}
                />
              ))}
            </div>
          </div>
          <div className="carrier-container-wrapper__button-width">
            <Button
              label="I'm good"
              className="big-button"
              onClick={() => handlerScroll(aboutBusinessRef)}
            />
          </div>
        </CarrierBlock>
      </div>

      <div ref={aboutBusinessRef}>
        <CarrierBlock
          titleInfo="Tell us more about your business"
          underTitle="You are signing up for flex. If you need to change product. You can go back to fleet details."
        >
          <TextField
            downLabel="Enter the exact name seen on legal documents"
            label="Legal Name Of Your Business"
            placeholder=""
            value={dataCarrier.legalNameOfBusiness}
            onFieldChange={(e) =>
              setDataCarrier((prevState: any) => ({
                ...prevState,
                legalNameOfBusiness: e,
              }))
            }
          />

          <TextField
            label="Your Fleet’s Gross Revenue Per Week"
            placeholder=""
            value={dataCarrier.fleetGross}
            onFieldChange={(e) =>
              setDataCarrier((prevState: any) => ({
                ...prevState,
                fleetGross: e,
              }))
            }
          />
          <div className="carrier-container-wrapper__button-width">
            <Button
              className="big-button"
              label="Continue"
              onClick={() => handlerScroll(pernamentAddressRef)}
            />
          </div>
        </CarrierBlock>
      </div>

      <div ref={pernamentAddressRef}>
        <CarrierBlock
          className="under-title-margin"
          titleInfo="Permanent address of your business/fleet"
          underTitle="This will be used as the billing address of your card as well as on tax documents and legal contacts."
        >
          <TextField
            value={dataCarrier.street1}
            placeholder="Street 1"
            onFieldChange={(e) =>
              setDataCarrier((prevState: any) => ({
                ...prevState,
                street1: e,
              }))
            }
          />
          <TextField
            value={dataCarrier.street2}
            placeholder="Street 2 (Optional)"
            onFieldChange={(e) =>
              setDataCarrier((prevState: any) => ({
                ...prevState,
                street2: e,
              }))
            }
          />
          <div className="carrier-container-wrapper__fields-container">
            <div className="carrier-container-wrapper__fields-container-div">
              <TextField
                value={dataCarrier.city}
                placeholder="City"
                onFieldChange={(e) =>
                  setDataCarrier((prevState: any) => ({
                    ...prevState,
                    city: e,
                  }))
                }
              />
            </div>
            <div className="carrier-container-wrapper__fields-container-div">
              <TextField
                value={dataCarrier.state}
                placeholder="State"
                onFieldChange={(e) =>
                  setDataCarrier((prevState: any) => ({
                    ...prevState,
                    state: e,
                  }))
                }
              />
            </div>
            <div className="carrier-container-wrapper__fields-container-div">
              <TextField
                value={dataCarrier.zip}
                placeholder="Zip"
                onFieldChange={(e) =>
                  setDataCarrier((prevState: any) => ({
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
              onChange={() =>
                setDataCarrier((prevState: any) => ({
                  ...prevState,
                  permanentAddress: !prevState.permanentAddress,
                }))
              }
              value={dataCarrier.permanentAddress}
            />
          </div>
          <div className="carrier-container-wrapper__text-field-button-happy">
            <Button
              label="I'm happy so far"
              className="big-button"
              onClick={() => handlerScroll(manyVehiclesRef)}
            />
          </div>
        </CarrierBlock>
      </div>

      <div ref={manyVehiclesRef}>
        <CarrierBlock titleInfo="How many vehicles do you plan to bring on to Nauvus?">
          <div className="carrier-container-wrapper__text-field-container">
            <TextField
              className="text-field-vehicle"
              label="Number of Trucks"
              value={dataCarrier.numberOfTruck}
              placeholder=""
              onFieldChange={(e) =>
                setDataCarrier((prevState: any) => ({
                  ...prevState,
                  numberOfTrucks: e,
                }))
              }
            />
            <TextField
              label="Number or Trailers"
              value={dataCarrier.numberOfTrailer}
              placeholder=""
              onFieldChange={(e) =>
                setDataCarrier((prevState: any) => ({
                  ...prevState,
                  numberOfTrailers: e,
                }))
              }
            />
          </div>
          <div className="carrier-container-wrapper__button-width">
            <Button
              label="Continue"
              className="big-button"
              onClick={() => handlerScroll(contractsWithCompaniesRef)}
            />
          </div>
        </CarrierBlock>
      </div>

      <>
        <div ref={contractsWithCompaniesRef}>
          <CarrierBlock titleInfo="Are you in any current contracts with factoring companies">
            <div className="carrier-container-wrapper__carrier-button-container">
              {currentContracts.map((el, index) => (
                <CarrierButton
                  key={index + el}
                  onClick={() =>
                    setDataCarrier((prevState: any) => ({
                      ...prevState,
                      currentContracts: el,
                    }))
                  }
                  text={el}
                  className={
                    dataCarrier.currentContracts === el ? " active-button" : ""
                  }
                />
              ))}
            </div>
          </CarrierBlock>
          <CarrierBlock titleInfo="Please review our carrier contract and payment terms">
            <div className="carrier-container-wrapper__carrier-contract">
              <TextArea
                value={carrierContractValue}
                setValue={setCarrierContractValue}
              />
            </div>
            <div className="carrier-container-wrapper__button-width">
              <Button
                label="Accept"
                className="big-button"
                onClick={() => handlerScroll(readyToOnboardRef)}
              />
            </div>
          </CarrierBlock>
        </div>
      </>

      <>
        <div
          ref={readyToOnboardRef}
          className="carrier-container-wrapper__field-ready-to-get-wrapper"
        >
          <CarrierBlock
            className="field-ready-to-get"
            titleInfo={`Congratulation Travis. \n You're now ready to get Onboarded to  Nauvus.`}
            underTitle="Let's complete your profile"
          >
            <div className="carrier-container-wrapper__text-field-button-happy">
              <Link to={"/onboarding"}>
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
    </>
  );
};
