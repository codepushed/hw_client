import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

import Header from "../../components/Header";
import Loader from "../../components/Loader";

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
      <Header isMobileHeader={isMobile} />
      <div className="AllServicesWrapper">
        {serviceData && serviceData ? (
          <div className="servicesContainer">
            <h1>Services</h1>
            <p>Your Trusted Solution for Every Need</p>

            {serviceData &&
              serviceData?.map((item, index) => (
                <div
                  className="servicesWrapper serviceCardMainContainer"
                  key={index}
                  onClick={() => handleClick(item)}
                >
                  <div>
                    <h1 className="serviceCategories">{item?.category}</h1>
                    <div className="serviceCardMainContainer">
                      {item?.subCategory?.map((subCat, idx) => (
                        <div key={idx}>
                          <div className="ServiceCardsContainer">
                            <img
                              src={subCat?.subServiceName[0].image}
                              alt="service"
                            />
                          </div>
                          <p className="ServiceCardsContainerPara">{subCat?.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Service;
