import React from "react";
import AllServices from "../../Containers/AllServices";
import { salonServiceDetails } from "../../Static/services/salon";

const Services = ({ isHeader, data }) => {
  return (
    <AllServices isHeader={isHeader} data={data} />
  );
};

Services.getInitialProps = async (ctx) => {
  return { 
    data: salonServiceDetails.service,
    isHeader: true };
 
};

export default Services;
