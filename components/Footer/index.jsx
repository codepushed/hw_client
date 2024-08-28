import React from "react";

const Footer = () => {
  return (
    <div className="footerSuperContainer">
      <div className="footerContainer">
        <div className="footerHeader">
          <h1>
            Open the Door to
            <span className="footerHeaderTypography">Comfort</span>
          </h1>
          <h1>Book Expert Home Services Now</h1>
          <button className="basicRoundedButton footerbtn">Book now</button>
        </div>

        <div className="footerContent">
          <div className="footerContentListContainer">
            <div className="footerContentList">
              <p>Services</p>
              <p>Faqs</p>
              <p>Contact us</p>
            </div>

            <div className="footerContentList">
              <p>Book a service</p>
              <p>Terms & conditions</p>
              <p>Pricing</p>
            </div>

            <div className="footerContentList">
              <p>How it works</p>
              <p>Register as a professional</p>
              <p>Why choose us</p>
            </div>
          </div>
        </div>

        <div className="footerDivider" />

        <div className="footerBottomContainer">
          <p className="footerBottomTypo">&#169; homeworkserice.in</p>

          <div className="footerBottomSocial">
            <img src="/assets/icons/instagram.png" alt="instagram" />
            <img src="/assets/icons/facebook.png" alt="facebook" />

            <img src="/assets/icons/linkedin.png" alt="linkedin" />
            <img src="/assets/icons/telegram.png" alt="telegram" />
          </div>

          <div>
            <p className="footerBottomTypo">Terms of use | Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
