import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./llogo.png" alt="" width={140} />
          <span className="secondaryText">
            Elevate Your Lifestyle With Us!
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Our Location</span>
          <span className="secondaryText">Kigali, KG 92 St, Rwanda</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
