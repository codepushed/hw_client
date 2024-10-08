import React, { useState } from "react";

import ServiceCard from "../../components/Card/ServiceCard";

import { kitchenServices } from "../../Static";
import Drawers from "../../components/Drawers";
import SelectService from "../../components/Modal/SelectService";
import Footer from "../../components/Footer";
import Image from "next/image";

const AllService = ({ data }) => {
  const [selectedServices, setSelectedServices] = useState(data[0]);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="servicesContainer">
      
      <h1 className="servicesHeader">Salon for Women</h1>

      <div className="servicesHeaderContent">
        <div className="servicesHeaderImg">
          <Image
            src="/assets/Luxurious Salon Pampering with Sparkling Hair Treatment.jpg"
            alt="kitchen cleaning"
            height={500} width={500}
          />
        </div>

        <div className="servicesSelectWrapper">
          <div className="servicesSelectContainer">
            <p>Select a service</p>

            <div className="servicesTypesContainer">
              {data?.slice(0, 6).map((service) => (
                <div
                  className="servicesTypes"
                  onClick={() => setSelectedServices(service)}
                >
                  <Image src={service.img} alt="service" height={500} width={500} />
                  <p>{service.name}</p>
                </div>
              ))}
            </div>

            <div
              className="servicesSeeMoreContainer"
              onClick={() => setOpen(true)}
            >
              <p>See more</p>
            </div>
          </div>

          <div className="servicesOfferContainer">
            <div className="serviceOfferImg">
              <Image src="/assets/icons/launchIcon.png" alt="launch" height={500} width={500} />
            </div>

            <p>Stay tuned! Launching soon near you</p>
          </div>
        </div>
      </div>

      <div className="servicesSubCategoryContainer">
        <h2>{selectedServices.name}</h2>

        {selectedServices &&
          selectedServices.subservices?.map((item, index) => (
            <ServiceCard data={item} key={index} />
          ))}
      </div>
      <SelectService
        handleClose={handleClose}
        isOpen={open}
        data={data}
        setSelectedServices={setSelectedServices}
      />
      {/* <Drawers /> */}

      <Footer />
    </div>
  );
};

export default AllService;
