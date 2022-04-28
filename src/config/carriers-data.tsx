import bus from "../assets/images/svgs/bus.svg";
import track from "../assets/images/svgs/track.svg";
import low_track from "../assets/images/svgs/low_track.svg";
import empty_pic from "../assets/images/svgs/empty_pic.svg";
import accessLogo from "../assets/images/svgs/onboard-access.svg";
import deniedLogo from "../assets/images/svgs/onboard-denied.svg";
import checklist from "../assets/images/svgs/checklist.svg";
import roundPerson from "../assets/images/svgs/roundPerson.svg";
import headset from "../assets/images/svgs/headset.svg";
import checklistTarget from "../assets/images/svgs/checklistTarget.svg";
import roundPersonTarget from "../assets/images/svgs/roundPersonTarget.svg";
import headsetTarget from "../assets/images/svgs/headsetTarget.svg";
import operator from "../assets/images/svgs/operator.svg";
import carrier from "../assets/images/svgs/carrier.svg";

export const carrierData = [
  {
    title: "Search engine (Google, Yahoo, etc.)",
    className: "bg-button",
  },
  {
    title: "Recommended by friend or colleague",
    className: "bg-button",
  },
  {
    title: "Social Media",
    className: "avg-button",
  },
  {
    title: "Blog or publication",
    className: "md-button",
  },
  {
    title: "Email",
    className: "sm-button",
  },
  {
    title: "Other",
    className: "sm-button",
  },
];

export const describesData = [
  {
    pic: require("../assets/images/car.png"),
    title: "Carrier & Owner Operator",
    subscription:
      "You are an owner-operator or trucking company with 1 or multiple trucks and drivers and will operate under your own authority",
  },
  {
    pic: require("../assets/images/engee.png"),
    title: "Dispatcher",
    subscription:
      "You mostly find and assign loads to other drivers or carriers",
  },
];

export const likeToOnboard = [
  {
    img: carrier,
    title: "Carrier",
    underTitle: "Company with multiple driver",
  },
  {
    img: operator,
    title: "Operator",
    underTitle: "Driver with own authority",
  },
];
export const kindOfTrailerData = [
  {
    text: "Dry Van",
    imgUrl: bus,
  },
  {
    text: "Reefer",
    imgUrl: track,
  },
  {
    text: "Flatbed",
    imgUrl: track,
  },
  {
    text: "Step Deck",
    imgUrl: bus,
  },
  {
    text: "Boxtruck",
    imgUrl: low_track,
  },
  {
    text: "Hotshot",
    imgUrl: bus,
  },
  {
    text: "Power Only",
    imgUrl: track,
  },
  {
    text: "Other",
    imgUrl: empty_pic,
  },
];

export const sizeOfTrailer = [
  {
    text: "48 Feet",
    img: empty_pic,
  },
  {
    text: "40 Feet",
    img: empty_pic,
  },
  {
    text: "45 Feet",
    img: empty_pic,
  },
  {
    text: "53 Feet",
    img: empty_pic,
  },
  {
    text: "Other",
    img: empty_pic,
  },
];

export const currentContracts = [
  "No, I am not in any current factoring contracts.",
  "Yes, I am currently in a factoring contract.",
  "I am not sure.",
];

export const onboardData = [
  {
    logo: accessLogo,
    text: "W-9 and Taxpayer ID Number",
    afterText: "Not started",
    toogler: true,
  },
  {
    logo: accessLogo,
    text: "Service & Instant Pay Agreement",
    afterText: "Check your E-mail for a Docu Sign link",
    toogler: false,
  },
  {
    logo: accessLogo,
    text: "Submit two reference",
    afterText: "Not started",
    toogler: true,
  },
  {
    logo: accessLogo,
    text: "Book a call with Onboarding Specialist",
    afterText: "Book Meeting to get setup quickly with Nauvus",
    toogler: false,
  },
  {
    logo: deniedLogo,
    text: "Homepage > Booking Loads",
    afterText: "Complete all steps above so you can start booking loads",
    toogler: false,
  },
];

export const tabsValues = [
  {
    img: checklist,
    imgTarget: checklistTarget,
    title: "Onboarding Takslist",
  },
  {
    img: roundPerson,
    imgTarget: roundPersonTarget,
    title: "Organization Information",
  },
  {
    img: headset,
    imgTarget: headsetTarget,
    title: "Contact Support",
  },
];

export const twoReferenceInformation = [
  {
    title: "Company Name",
    placeholder: "Enter company name",
    type: "companyName",
  },
  {
    title: "Driver’s Name",
    placeholder: "Enter driver’s name",
    type: "driverName",
  },
  {
    title: "Email",
    placeholder: "Enter email",
    type: "email",
  },
  {
    title: "Mobile Phone Number",
    placeholder: "Enter phone number",
    type: "mobilePhoneNumber",
  },
];

export const onboardingCarrierData = [
  {
    logo: accessLogo,
    text: "Fleet application",
    afterText: "Not started",
    toogler: true,
  },
  {
    logo: accessLogo,
    text: "W-9 and Taxpayer ID Number",
    afterText: "Not started",
    toogler: true,
  },
  {
    logo: accessLogo,
    text: "Broker Setup",
    afterText: "Not started",
    toogler: true,
  },
  {
    logo: accessLogo,
    text: "Service & Instant Pay Agreement",
    afterText: "",
    toogler: false,
  },
  {
    logo: accessLogo,
    text: "Book a call with Onboarding Specialist",
    afterText: "",
    toogler: false,
  },
  {
    logo: deniedLogo,
    text: "Book a call with Onboarding Specialist",
    afterText: "",
    toogler: false,
  },
];

export const countriesData = ["Canada", "USA"];
