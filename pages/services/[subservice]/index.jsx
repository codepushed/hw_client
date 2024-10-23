import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getServiceById } from "../../../helpers";
import AllServices from "../../../Containers/AllServices";

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
     <AllServices data={subserviceData} />
    </div>
  );
};

export default Subservice;
