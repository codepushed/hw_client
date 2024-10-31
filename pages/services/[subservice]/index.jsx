import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getServiceById } from "../../../helpers";
import AllServices from "../../../Containers/AllServices";
import Header from "../../../components/Header";
import { useDispatch } from "react-redux";
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
      <Header />
      <AllServices data={subserviceData} setCartItems={setCartItems} />
    </div>
  );
};

export default Subservice;
