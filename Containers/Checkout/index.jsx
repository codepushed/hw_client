import React, { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";

import Address from "../../components/Modal/Address";
import Slot from "../../components/Modal/Slot";
import {
  cartPriceCalculator,
  generateTimeSlots,
  getNextThreeDates,
  gstCalculation,
  totalPriceWithGst,
} from "../../helpers/basic";
import NewAddress from "../../components/Modal/newAddress";

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const [isSlotOpen, setIsSlotOpen] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    // Generate time slots for today and the next two days
    const dates = getNextThreeDates();
    const today = new Date();

    const slots = dates.map((date) => {
      const isToday = today.toDateString() === date.toDateString();
      // For today, filter past slots, for other days show all slots
      const timeSlots = generateTimeSlots(10, 20, isToday);
      return {
        date: date.toDateString(),
        slots: timeSlots,
      };
    });

    setAvailableSlots(slots);
  }, []);

  console.log(availableSlots);

  const handleSlots = () => {
    setIsSlotOpen(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="checkoutContainer">
      <h1>Checkout</h1>
      <Slot isSlotOpen={isSlotOpen} handleSlots={handleSlots} />
      <Address
        open={open}
        handleClose={handleClose}
        setSelectedAddress={setSelectedAddress}
      />
      <div className="checkoutServiceDetailsBox">
        {cart &&
          cart?.map((items, index) => (
            <div className="checkoutServiceDetails">
              <p>{items.name}</p>
              <span>
                <p>&#8377; {items?.price || "299"}</p>
                {/* <button className="outlineBtn">Add</button> */}
              </span>
            </div>
          ))}
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
            {selectedAddress && selectedAddress ? (
              <p className="checkoutServiceMoreSubPara">{selectedAddress}</p>
            ) : (
              <button
                className="basicRoundedButton"
                onClick={() => setOpen(true)}
              >
                Select an address
              </button>
            )}
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
            <p>&#8377; {cartPriceCalculator(cart)}</p>
          </div>

          <div className="checkoutServicePaymentsItems">
            <p>Taxes and Fee - GST 18%</p>
            <p>&#8377; {gstCalculation(cart)}</p>
          </div>

          <Divider />

          <div className="checkoutServicePaymentsItems">
            <p style={{ fontWeight: 700 }}>Total</p>
            <p>&#8377; {totalPriceWithGst(cart)}</p>
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
