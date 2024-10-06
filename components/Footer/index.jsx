import React from "react";

import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/coming-soon");
  };

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
              <p onClick={() => handleRedirect()}>Services</p>
              <p onClick={() => handleRedirect()}>Faqs</p>
              <p onClick={() => router.push('/contact')}>Contact us</p>
            </div>

            <div className="footerContentList">
              <p onClick={() => handleRedirect()}>Book a service</p>
              <p onClick={() => handleRedirect()}>Terms & conditions</p>
              <p onClick={() => handleRedirect()}>Pricing</p>
            </div>

            <div className="footerContentList">
              <p onClick={() => handleRedirect()}>How it works</p>
              <p onClick={() => handleRedirect()}>Register as a professional</p>
              <p onClick={() => handleRedirect()}>Why choose us</p>
            </div>
          </div>
        </div>

        <div className="footerDivider" />

        <div className="footerBottomContainer">
          <p className="footerBottomTypo" onClick={() => handleRedirect()}>
            &#169; homeworkserice.in
          </p>

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
