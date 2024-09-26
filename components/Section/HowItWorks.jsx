import React from "react";

const HowItWorks = () => {
  return (
    <div className="howitworksContainer">
      <div className="howitworksContainerTypography">
        <h1>How it works</h1>
        <p>Easy as 1-2-3 to book the right professional</p>
      </div>

      <div className="howitworksSection">
        <div className="howitworksWrapper">
          <div className="howitworksContainerContent">Choose your service</div>

          <div className="howitworksRightWrapper">
            <div className="howitworksContainerContent  howitworksContainerContentRight">
              Book your professional
            </div>
          </div>

          <span className="howitworksCenterWrapper">
            <div className="howitworkscontentContentContainer">
              <div className="howitworksContainerContent howitworksContainerContentCenter">
                Relax and Enjoy
              </div>

              <div className="howitworksContainerContentButton">
                Lets go
                <img src="/assets/icons/right-arrow.png" alt="arrow" />
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
