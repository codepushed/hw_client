import React from "react";

import Checkout from "../../Containers/Checkout";
import Header from "../../components/Header";

const Cart = ({ isHeader }) => {
  return (
    <>
    <Header />
    <Checkout />
    </>
  );
};

Cart.getInitialProps = async (ctx) => {
  return { isHeader: true };
 
};

export default Cart;
