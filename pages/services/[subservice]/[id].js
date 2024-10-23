import React from "react";

import AllServices from "../../../Containers/AllServices";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import { getAllServices } from "../../../helpers/index";

const Services = ({ isHeader, data }) => {
  console.log(data)
  return (
    <>
      <Header />
      <AllServices isHeader={isHeader} data={data} />
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
