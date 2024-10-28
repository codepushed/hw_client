import React from "react";

import { useRouter } from "next/router";
import { servicesLinks, socialmediaLinks } from "../../Static";

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
          <button
            className="basicRoundedButton footerbtn"
            onClick={() => router.push("/services")}
          >
            Book now
          </button>
        </div>

        <div className="footerContent">
          <div className="footerContentListContainer">
            <div className="footerContentList">
              <p onClick={() => router.push(servicesLinks.electrician)}>
                Electrician
              </p>
              <p onClick={() => router.push(servicesLinks.plumber)}>Plumber</p>
              <p onClick={() => router.push(servicesLinks.cleaning)}>
                Cleaning
              </p>
              <p onClick={() => router.push(servicesLinks.painter)}>
                Painter & water proofing
              </p>

              <p onClick={() => router.push(servicesLinks.pestControl)}>
                Pest control
              </p>
              <p onClick={() => router.push(servicesLinks.applianceRepair)}>
                Appliance repair
              </p>
            </div>

            <div className="footerContentList">
              <p onClick={() => router.push("/contact")}>Contact</p>
              <p onClick={() => router.push("/services")}>Terms & conditions</p>
            </div>

            <div className="footerContentList">
              <p onClick={() => handleRedirect()}>How it works</p>
              <p onClick={() => router.push("/professional")}>
                Register as a professional
              </p>
              <p onClick={() => handleRedirect()}>Why choose us</p>
            </div>
          </div>
        </div>

        <div className="footerDivider" />

        <div className="footerBottomContainer">
          <p className="footerBottomTypo" onClick={() => handleRedirect()}>
            &#169; homeworkservice.in
          </p>

          <div className="footerBottomSocial">
            <a href={socialmediaLinks?.instagram}>
              <img src="/assets/icons/instagram.png" alt="instagram" />
            </a>
            <a href={socialmediaLinks?.facebook}>
              <img src="/assets/icons/facebook.png" alt="facebook" />
            </a>
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
