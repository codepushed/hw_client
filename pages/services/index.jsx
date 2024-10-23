import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllServices } from "../../helpers";
import { toLowerCaseString } from "../../helpers/basic";

const Service = () => {
  const [serviceData, setServiceData] = useState();
  const router = useRouter();

  const getServices = async () => {
    const service = await getAllServices();
    if (service) {
      setServiceData(service.services);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  const handleClick = (item) => {
    router.push({
      pathname: `/services/${toLowerCaseString(item?.category)}`,
      query: { category: item?.category, id: item?._id },
    });
  };

  return (
    <div>
      <h1>Services</h1>

      <ul>
        {serviceData &&
          serviceData?.map((item, index) => (
            <li
              key={index}
              onClick={() =>
                handleClick(item)
              }
            >
              {item?.category}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Service;
