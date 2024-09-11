import React, { useState } from "react";

import Header from "../../components/Header";
import ServiceCard from "../../components/Card/ServiceCard";

import { kitchenServices } from "../../Static";
import Drawers from "../../components/Drawers";

const AllService = ({ data }) => {
  const [selectedServices, setSelectedServices] = useState(data[0]);

  return (
    <div className="servicesContainer">
      <Header />
      <h1 className="servicesHeader">Salon for Women</h1>

      <div className="servicesHeaderContent">
        <div className="servicesHeaderImg">
          <img src="/assets/kitchenmain.jpg" alt="kitchen cleaning" />
        </div>

        <div className="servicesSelectContainer">
          <p>Select a service</p>

          <div className="servicesTypesContainer">
            {data?.slice(0, 6).map((service) => (
              <div
                className="servicesTypes"
                onClick={() => setSelectedServices(service)}
              >
                <img src="/assets/kitchen.png" alt="service" />
                <p>{service.name}</p>
              </div>
            ))}
          </div>

          <div className="servicesSeeMoreContainer">
            <p>See more</p>
          </div>
        </div>

        <div className="servicesOfferContainer"></div>
      </div>

      <div className="servicesSubCategoryContainer">
        <h2>{selectedServices.name}</h2>

        {selectedServices &&
          selectedServices.subservices?.map((item, index) => (
            <ServiceCard data={item} key={index} />
          ))}
      </div>
      {/* <Drawers /> */}
    </div>
  );
};

export default AllService;
