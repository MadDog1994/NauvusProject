import React from "react";

import phoneLogo from "../../assets/images/svgs/phone.svg";
import emailLogo from "../../assets/images/svgs/email.svg";
import "./styles.scss";

const ContactSupport = () => {
  return (
    <div className="support-info">
      <div className="support-info__contact-us-container">
        <div className="support-info__talk-us">
          <p>{`Talk to us over the phone \n for additional help.`}</p>
        </div>
        <div className="support-info__contact-us">
          <p>if you have a time-sensitive question contact us</p>
        </div>
        <div className="support-info__contact-container">
          <div className="support-info__contact-container-email-field">
            <img src={emailLogo} alt="black-email" />
            <p className="support-info_email">Email</p>
          </div>
          <p className="support-info_website-and-number">rates@nauvus.com</p>
          <div className="support-info__contact-container-phone-field">
            <img src={phoneLogo} alt="black-phone" />
            <p className="support-info_phone">Phone</p>
            <p className="support-info_website-and-number">1-855-899-9497</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
