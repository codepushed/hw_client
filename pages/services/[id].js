import React from "react";
import AllServices from "../../Containers/AllServices";

const Services = ({ isHeader }) => {
  return (
    <AllServices isHeader={isHeader} />
  );
};

Services.getInitialProps = async (ctx) => {
  return { isHeader: true };
 
};

export default Services;
