import React from "react";
import { isMobile } from "react-device-detect";

import Checkout from "../../Containers/Checkout";
import Header from "../../components/Header";

const Cart = ({ isHeader }) => {
  return (
    <>
    <Header isMobileHeader={isMobile} />
    <Checkout />
    </>
  );
};

Cart.getInitialProps = async (ctx) => {
  return { isHeader: true };
 
};

export default Cart;
