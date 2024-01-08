import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Kings</span>
          <span className="secondaryText">
          Acquire your dream home swiftly by simply sharing your preferences with us.
            <br />
            Secure your ideal residence promptly.
          </span>
          <button className="button" href>
            <a href="mailto:kingsrealestaterw@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
