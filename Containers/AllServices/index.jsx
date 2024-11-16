import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import ServiceCard from "../../components/Card/ServiceCard";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import SelectService from "../../components/Modal/SelectService";

const AllService = ({ data, setCartCounter, setCartItems }) => {
  const [selectedServices, setSelectedServices] = useState();
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const router = useRouter();

  
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
        return prevItems.map((item) =>
          item._id === service._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...service, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (service) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === service._id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return prevItems.filter((item) => item._id !== service._id);
        } else {
          return prevItems.map((item) =>
            item._id === service._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      }
      return prevItems;
    });
  };

  return (
    <div className="servicesContainer">
      {data && data ? (
        <>
          <>
            <h1 className="servicesHeader">{data?.category}</h1>
            <div className="servicesHeaderContent">
              <div className="servicesHeaderImg">
                <Image
                  src={data?.image}
                  alt="service"
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
                        <Image
                          src={service?.subServiceName[0].image}
                          alt="service"
                          height={500}
                          width={500}
                        />
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
                  <ServiceCard
                    data={subservice}
                    setCartCounter={setCartCounter}
                    key={index}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                ))}
            </div>
          </>
          <SelectService
            handleClose={handleClose}
            isOpen={open}
            data={data}
            setSelectedServices={setSelectedServices}
          />
          {cart && cart.length > 0 && (
            <button
              className="floatingbButton"
              onClick={() => router.push("/cart")}
            >
              Checkout
              <IconButton
                aria-label="cart"
                onClick={() => router.push("/cart")}
              >
                <Badge
                  badgeContent={cart && cart.length}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "#FF8C8C",
                      backgroundColor: "#fff",
                    },
                  }}
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </button>
          )}

          {/* <Drawers /> */}
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AllService;
