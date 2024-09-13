import React from "react";

import AllServices from "../../Containers/AllServices";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { salonServiceDetails } from "../../Static/services/salon";


const Services = ({ isHeader, data }) => {
  return (
    <>
      <Header />
      <AllServices isHeader={isHeader} data={data} />
    </>
  );
};

Services.getInitialProps = async (ctx) => {
  return {
    data: salonServiceDetails.service,
    isHeader: true,
  };
};

export default Services;
