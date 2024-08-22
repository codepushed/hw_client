import React from "react";

import Header from "../../components/Header";
import ServiceCard from "../../components/Card/ServiceCard";

import { kitchenServices } from "../../Static";

const AllService = () => {
  return (
    <div className="servicesContainer">
      <Header />
      <h1 className="servicesHeader">Kitchen cleaning</h1>

      <div className="servicesHeaderContent">
        <div className="servicesHeaderImg">
          <img src="/assets/kitchenmain.jpg" alt="kitchen cleaning" />
        </div>

        <div className="servicesSelectContainer">
          <p>Select a service</p>

          <div className="servicesTypesContainer">
            {kitchenServices?.map((service) => (
              <div className="servicesTypes">
                <img src="/assets/kitchen.png" alt="service" />
                <p>{service}</p>
              </div>
            ))}
          </div>

          <div className="servicesSeeMoreContainer">
            <p>See more</p>
          </div>
        </div>
      </div>

      <div className="servicesSubCategoryContainer">
        <h2>Chimney Cleaning</h2>


        {Array.from({ length: 6 }).map((_, index) => (
        <ServiceCard />
      ))}
      </div>
    </div>
  );
};

export default AllService;
