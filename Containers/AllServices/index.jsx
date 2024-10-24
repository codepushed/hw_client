import React, { useEffect, useState } from "react";

import ServiceCard from "../../components/Card/ServiceCard";

import { kitchenServices } from "../../Static";
import Drawers from "../../components/Drawers";
import SelectService from "../../components/Modal/SelectService";
import Footer from "../../components/Footer";
import Image from "next/image";

const AllService = ({ data, setCartCounter }) => {
  const [selectedServices, setSelectedServices] = useState();
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (data) {
      setSelectedServices(data?.subCategory[0]);
    }
  }, [data]);


  const addToCart = (service) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === service._id);
      if (existingItem) {
        // Update quantity if already in cart
        return prevItems.map((item) =>
          item._id === service._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new service with quantity 1
        return [...prevItems, { ...service, quantity: 1 }];
      }
    });

    // Update cart counter if needed
    // setCartCounter((prev) => prev + 1);
  };


  console.log(cartItems, "finish")


  return (
    <div className="servicesContainer">
      <h1 className="servicesHeader">{data?.category}</h1>

      <div className="servicesHeaderContent">
        <div className="servicesHeaderImg">
          <Image
            src="/assets/Luxurious Salon Pampering with Sparkling Hair Treatment.jpg"
            alt="kitchen cleaning"
            height={500}
            width={500}
          />
        </div>

        <div className="servicesSelectWrapper">
          <div className="servicesSelectContainer">
            <p>Select a service</p>

            <div className="servicesTypesContainer">
              {data?.subCategory?.slice(0, 6).map((service, index) => (
                <div
                  className="servicesTypes"
                  onClick={() => setSelectedServices(service)}
                  key={index}
                >
                  {/* <Image src="" alt="service" height={500} width={500} /> */}
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
              <Image
                src="/assets/icons/launchIcon.png"
                alt="launch"
                height={500}
                width={500}
              />
            </div>

            <p>Stay tuned! Launching soon near you</p>
          </div>
        </div>
      </div>

      <div className="servicesSubCategoryContainer">
        <h2>{selectedServices && selectedServices.name}</h2>

        {selectedServices &&
          selectedServices.subServiceName?.map((subservice, index) => (
            <ServiceCard data={subservice} setCartCounter={setCartCounter} key={index}  addToCart={addToCart} />
          ))}
      </div>
      {/* <SelectService
        handleClose={handleClose}
        isOpen={open}
        data={data}
        setSelectedServices={setSelectedServices}
      /> */}
      {/* <Drawers /> */}

      <Footer />
    </div>
  );
};

export default AllService;
