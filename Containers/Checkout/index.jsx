import React, { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import Address from "../../components/Modal/Address";
import Slot from "../../components/Modal/Slot";
import {
  cartPriceCalculator,
  formatDate,
  formatDay,
  generateTimeSlots,
  getNextThreeDates,
  gstCalculation,
  isLoggedIn,
  totalPriceWithGst,
} from "../../helpers/basic";
import { saveFinalCart } from "../../store/slices/cart";
// import NewAddress from "../../components/Modal/newAddress";

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSlotOpen, setIsSlotOpen] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();
  const [selectedDateSlots, setSelectedDateSlots] = useState();
  const [currentDateSlots, setCurrentDateSlots] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const cart = useSelector((state) => state.cart.cart);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const dates = getNextThreeDates();
    const today = new Date();

    const slots = dates.map((date) => {
      const isToday = today.toDateString() === date.toDateString();
      const timeSlots = generateTimeSlots(10, 20, isToday);
      return {
        date: formatDate(date),
        day: formatDay(date),
        slots: timeSlots,
      };
    });

    setAvailableSlots(slots);
  }, []);

  const handleSlots = () => {
    setIsSlotOpen(false);
  };

  const handleClose = () => setOpen(false);

  const getUserDetails = () => {
    const userData = Cookies.get("userData");
    if (userData) {
      const parseData = JSON.parse(userData);
      const phoneNumber = parseData?.user?.phone;
      setPhoneNo(phoneNumber);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handlePayments = () => {
    const userData = Cookies.get("userData");
    if (userData) {
      const parseData = JSON.parse(userData);
      const id = parseData?.user?._id;
      const checkoutData = {
        userId: id,
        bookingDetails: {
          address: selectedAddress,
        },
        serviceId: cart,
        slotDate: selectedDateSlots,
        slotTime: currentDateSlots,
      };
      dispatch(saveFinalCart(checkoutData));
      router.push("/cart/choose-payment");
    }
  };

  const getLoggedInUser = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (isUserLoggedIn) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <div className="checkoutContainer">
      <h1>Checkout</h1>
      {cart.length > 0 ? (
        <>
          <Slot
            isSlotOpen={isSlotOpen}
            handleSlots={handleSlots}
            availableSlots={availableSlots}
            currentDateSlots={currentDateSlots}
            setCurrentDateSlots={setCurrentDateSlots}
            setSelectedDateSlots={setSelectedDateSlots}
            selectedDateSlots={selectedDateSlots}
          />
          <Address
            open={open}
            handleClose={handleClose}
            setSelectedAddress={setSelectedAddress}
            selectedAddress={selectedAddress}
          />
          <div className="checkoutServiceDetailsBox">
            {cart &&
              cart?.map((items, index) => (
                <div className="checkoutServiceDetails">
                  <p>{items.name}</p>
                  <span>
                    <p>&#8377; {items?.price || "0"}</p>
                    {/* <button className="outlineBtn">Add</button> */}
                  </span>
                </div>
              ))}
          </div>

          {loggedIn && loggedIn ? (
            <div className="checkout">
              <div className="checkoutServiceBooking">
                <div className="checkoutServiceMoreDetails">
                  <img src="/assets/icons/profile_booking.png" alt="people" />

                  <span>
                    <p className="checkoutServiceMorePara">
                      Send booking details to
                    </p>
                    <p className="checkoutServiceMoreSubPara">+91 {phoneNo}</p>
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
                    <p className="checkoutServiceMoreSubPara">
                      {selectedAddress}
                    </p>
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
                  {selectedDateSlots && selectedDateSlots ? (
                    <p>
                      {selectedDateSlots} {currentDateSlots}
                    </p>
                  ) : (
                    <button
                      className="basicRoundedButton"
                      onClick={() => setIsSlotOpen(true)}
                    >
                      Select date and time
                    </button>
                  )}
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
                  <button
                    className="basicRoundedButton"
                    onClick={() => handlePayments()}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              className="basicRoundedButton"
              style={{ marginTop: "20px" }}
              onClick={() => router.push("/login")}
            >
              Login to continue
            </button>
          )}
          <div className="checkoutCancelPolicy">
            <h2>Cancellation Policy</h2>
            <p>
              Free cancellations/reschedules if done more than 3 hrs before the
              service or if a professional isn’t assigned. A fee will be charged
              otherwise.
            </p>
          </div>
        </>
      ) : (
        <p style={{ textAlign: "center" }} className="yourcartisempty">Your cart is empty</p>
      )}
    </div>
  );
};

export default Checkout;
