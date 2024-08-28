import React from "react";

const Services = () => {
  return (
    <div className="servicesOfferedSection">
      <h1>Services we offer</h1>

      <div className="servicesOfferedSectionContainer">
        <div className="servicesOfferedSectionContent">
          <div className="servicesOfferedSectionContentImg">
            <img
              src="/assets/a women in a kitchen busy tying up a small sized t.webp"
              alt="services"
            />
          </div>
          <p className="servicesOfferedSectionContentText">Kitchen Cleaning</p>
        </div>

        <div className="servicesOfferedSectionContent">
          <div className="servicesOfferedSectionContentImg">
            <img
              src="/assets/man in workerdress painting a wall with ladder.webp"
              alt="services"
            />
          </div>
          <p className="servicesOfferedSectionContentText">
            Full home painting
          </p>
        </div>

        <div className="servicesOfferedSectionContent">
          <div className="servicesOfferedSectionContentImg">
            <img
              src="/assets/photo of air conditioner on the wall.webp"
              alt="services"
            />
          </div>
          <p className="servicesOfferedSectionContentText">
            Ac & repair service
          </p>
        </div>

        <div className="servicesOfferedSectionContent">
          <div className="servicesOfferedSectionContentImg">
            <img
              src="/assets/A female stylist dressed as a chola or pachuca.webp"
              alt="services"
            />
          </div>
          <p className="servicesOfferedSectionContentText">Salon servics</p>
        </div>
      </div>

      <div
        className="servicesOfferedSectionContainer"
        style={{ marginTop: "80px" }}
      >
        <div className="servicesOfferedSectionContent">
          <div className="servicesOfferedSectionContentImg">
            <img
              src="/assets/Man removing asbestos in a suit and respirator.webp"
              alt="services"
            />
          </div>
          <p className="servicesOfferedSectionContentText">
            Cleaning & pest control
          </p>
        </div>

        <div className="servicesOfferedSectionContent">
          <div className="servicesOfferedSectionContentImg">
            <img
              src="/assets/Purple color plumber fixing water leak.webp"
              alt="services"
            />
          </div>

          <p className="servicesOfferedSectionContentText">
            Electrician, Plumber & Carpenter
          </p>
        </div>
      </div>

      <div className="servicesOfferedExploreBtn">
        <button className="basicRoundedButton">Explore more</button>
      </div>
    </div>
  );
};

export default Services;
