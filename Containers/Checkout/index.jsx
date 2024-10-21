import React, { useState } from "react";
import { Divider } from "@mui/material";

import Address from "../../components/Modal/Address";
import Slot from "../../components/Modal/Slot";

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const [isSlotOpen, setIsSlotOpen] = useState(false);

  const handleSlots = () => {
    setIsSlotOpen(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="checkoutContainer">
      <h1>Checkout</h1>
      <Slot isSlotOpen={isSlotOpen} handleSlots={handleSlots} />
      <Address open={open} handleClose={handleClose} />
      <div className="checkoutServiceDetailsBox">
        <div className="checkoutServiceDetails">
          <p>Basic cleaning</p>
          <span>
            <p>&#8377; 499</p>
            <button className="outlineBtn">Add</button>
          </span>
        </div>

        <div className="checkoutServiceDetails">
          <p>Repair service</p>
          <span>
            <p>&#8377; 499</p>
            <button className="outlineBtn">Add</button>
          </span>
        </div>
      </div>

      <div className="checkout">
        <div className="checkoutServiceBooking">
          <div className="checkoutServiceMoreDetails">
            <img src="/assets/icons/profile_booking.png" alt="people" />

            <span>
              <p className="checkoutServiceMorePara">Send booking details to</p>
              <p className="checkoutServiceMoreSubPara">+91 9617373159</p>
            </span>
          </div>

          <div className="checkoutServiceMoreDetails">
            <img src="/assets/icons/addresses.png" alt="address" />

            <span>
              <p className="checkoutServiceMorePara">Address</p>
            </span>
          </div>
          <div className="adrressslotSelectBtn">
            <button
              className="basicRoundedButton"
              onClick={() => setOpen(true)}
            >
              Select an address
            </button>
          </div>

          <div className="checkoutServiceMoreDetails">
            <img src="/assets/icons/slot.png" alt="slots" />

            <span>
              <p className="checkoutServiceMorePara">Slot</p>
            </span>
          </div>
          <div className="adrressslotSelectBtn">
            <button
              className="basicRoundedButton"
              onClick={() => setIsSlotOpen(true)}
            >
              Select date and time
            </button>
          </div>
        </div>

        <div className="checkoutServicePayments">
          <h2>Payment summary</h2>

          <div className="checkoutServicePaymentsItems">
            <p>Item total</p>
            <p>&#8377; 499</p>
          </div>

          <div className="checkoutServicePaymentsItems">
            <p>Taxes and Fee</p>
            <p>&#8377; 499</p>
          </div>

          <Divider />

          <div className="checkoutServicePaymentsItems">
            <p style={{ fontWeight: 700 }}>Total</p>
            <p>&#8377; 998</p>
          </div>

          <Divider />

          <div className="checkoutServicePaymentsItems proceedBtn">
            <button className="basicRoundedButton">Proceed</button>
          </div>
        </div>
      </div>

      <div className="checkoutCancelPolicy">
        <h2>Cancellation Policy</h2>
        <p>
          Free cancellations/reschedules if done more than 3 hrs before the
          service or if a professional isn’t assigned. A fee will be charged
          otherwise.
        </p>
      </div>
    </div>
  );
};

export default Checkout;
