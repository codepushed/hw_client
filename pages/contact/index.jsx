import React from "react";
import { isMobile } from "react-device-detect";

import Header from "../../components/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contactContainer">
        <h1>Contact us</h1>
        <p>We’re Here to Help—Get in Touch!</p>

        <div className="contactUs">
          <div className="contactUsMaps">
            <h2 className="contactUsHeading">Our office</h2>
            <div className="contactusIframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5756936462403!2d78.19696267565816!3d26.210477589915502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c400e460862d%3A0x57150911ded8276!2sSilver%20Estate!5e0!3m2!1sen!2sin!4v1726217658496!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{
                  border: "none",
                  borderRadius: "16px",
                  height: "100%",
                  width: "100%",
                }}
              ></iframe>
            </div>

            <p>
              656X+5RM, University Rd, Thatipur, Gwalior, Madhya Pradesh 474011
            </p>
          </div>

          <div className="contactUsEmail">
            <h2 className="contactUsHeading">Email us</h2>
            <p>contact@homeworkservice.in</p>

            <div className="contactCall">
              <h2 className="contactUsHeading">Call us</h2>
              <p>+91 8818854600</p>
              <p>+91 8818854500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
