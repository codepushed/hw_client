import React from "react";
import { isMobile } from "react-device-detect";

import AllServices from "../../../Containers/AllServices";
import Header from "../../../components/Header";

import { getAllServices } from "../../../helpers/index";

const Services = ({ data }) => {
  return (
    <>
      <Header isMobileHeader={isMobile} />
      <AllServices data={data} />
    </>
  );
};

Services.getInitialProps = async (ctx) => {
  try {
    const service = await getAllServices();
    return {
      data: service?.services,
      isHeader: true,
    };
  } catch {
    console.log("Failed to get services! Try again later.");
  }
};

export default Services;
