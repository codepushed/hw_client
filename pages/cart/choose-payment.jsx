import React from "react";

import Header from "../../components/Header";

const ChoosePayment = () => {
  return (
    <div className="professionalLoginContainer">
      <Header />
      <div className="professionalLogin">
        <h1>Choose payment method</h1>
        <p>Your are just one step away</p>

        <div className="professionalLoginInput">
          <div className="professionalLoginInputSection choosePaymentBtns">
            <button>Cash</button>
            <button>Card/UPI (Coming soon)</button>
            <button>Pay after service is done</button>
            <button className="basicRoundedButton profOtpbtn">Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePayment;
