import React, { useEffect, useState } from "react";
import { getServiceById } from "../../../helpers";
import { useRouter } from "next/router";

const Subservice = () => {
  const [subserviceData, setSubserviceData] = useState();
  const router = useRouter();
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

  return (
    <div>
      <h1>{subserviceData?.category}</h1>

      {subserviceData?.subCategory?.map((item, index) => (
        <div style={{ background: "pink", width: "100%" }} key={index}>
          <h2>{item?.name}</h2>
          {item?.subServiceName?.map((service, index) => (
            <div>
              <h3>{service.name}</h3>
              <p>{service.price}</p>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Subservice;
