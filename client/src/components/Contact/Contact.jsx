import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsWhatsapp, BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Reach out anytime</span>
          <span className="secondaryText">
          We're always ready to provide top-notch services, firmly believing that a well-chosen living space can significantly improve your quality of life.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+250 786 735 111</span>
                  </div>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsWhatsapp size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span className="secondaryText">+250 786 735 111</span>
                  </div>
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaInstagram size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Instagram</span>
                    <span className="secondaryText">@kings_real_estate</span>
                  </div>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsTwitterX size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">X (Twitter)</span>
                    <span className="secondaryText">@KingsRealEstate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./image1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
