import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { useDispatch } from "react-redux";

import AllServices from "../../../Containers/AllServices";
import Header from "../../../components/Header";

import { getServiceById } from "../../../helpers";
import { saveCartItems } from "../../../store/slices/cart";

const Subservice = () => {
  const [subserviceData, setSubserviceData] = useState();
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const { category, id } = router.query;

  const getSubservices = async () => {
    const serviceId = id;
    if (serviceId) {
      const response = await getServiceById(serviceId);
      if (response) {
        const service = response.service;
        setSubserviceData(service);
      }
    }
  };

  useEffect(() => {
    getSubservices();
  }, [id]);

  useEffect(() => {
    dispatch(saveCartItems(cartItems));
  }, [cartItems]);

  return (
    <div>
      <Header isMobileHeader={isMobile} />
      <AllServices data={subserviceData} setCartItems={setCartItems} />
    </div>
  );
};

export default Subservice;
