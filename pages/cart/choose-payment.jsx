import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isMobile } from "react-device-detect";

import Header from "../../components/Header";
import BookingDetails from "../../components/Modal/BookingDetails";
import {
  createBooking,
  getProfessionalsByProfession,
  sentBookingDetails,
  userGetAllProfessionals,
} from "../../helpers";

import { getRandomObject } from "../../helpers/basic";

const ChoosePayment = () => {
  const [assignedProfessional, setAssignedProfessional] = useState();
  const [OTP, setOTP] = useState();
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [bookingDetails, setBookingDetails] = useState();
  const finalCart = useSelector((state) => state.cart.finalCart);

  const handleClose = () => setOpen(false);

  const handleCreateBooking = async () => {
    const data = {
      userId: finalCart?.userId,
      bookingDetails: finalCart?.bookingDetails?.address,
      serviceId: finalCart[0]?.serviceId[0]?._id,
      slotDate: finalCart?.slotDate,
      slotTime: finalCart?.slotTime,
      otp: OTP,
      professionalId: assignedProfessional?._id,
    };

    if (finalCart && assignedProfessional && OTP) {
      const response = await createBooking(data);
      if (response) {
        setBookingDetails(response?.booking);
        console.log(response);
        // sendBookingConfirmation(response?.booking);
        setOpen(true);
      }
    }
  };

  //need to figure out better approach
  const getRandomProfessional = async () => {
    const data = "electrician"; //change it
    const professionalList = await getProfessionalsByProfession(data);
    if (professionalList?.filteredProfessionals) {
      const getRandomPro = getRandomObject(
        professionalList?.filteredProfessionals
      );
      if (getRandomPro) {
        setAssignedProfessional(getRandomPro);
      }
    }
  };

  useEffect(() => {
    getRandomProfessional();
    generateOTP();
  }, []);

  // call here random professional api and assign one
  // create booking
  // generate otp

  const sendBookingConfirmation = async (response) => {
    const data = {
      to: "homeworkindservice@gmail.com",
      subject: "Booking recieved",
      message: response,
    };

    if (data) {
      const response = await sentBookingDetails(data);
    }
  };

  const generateOTP = () => {
    const otpLength = 6;
    const otp = Array.from({ length: otpLength }, () =>
      Math.floor(Math.random() * 10)
    ).join("");
    setOTP(otp);
  };

  return (
    <div className="professionalLoginContainer">
      <Header isMobileHeader={isMobile} />
      <div className="professionalLogin">
        <h1>Choose payment method</h1>
        <p>Your are just one step away</p>

        <div className="professionalLoginInput">
          <div className="professionalLoginInputSection choosePaymentBtns">
            {/* <button>Cash</button> */}
            <button disabled>Card/UPI (Coming soon)</button>
            <button
              onClick={() => setIsSelected(true)}
              style={isSelected ? { background: "#ff8c8c", color: "#fff" } : {}}
            >
              Pay after service is done
            </button>
            <button
              className="basicRoundedButton profOtpbtn"
              onClick={() => handleCreateBooking()}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
      <BookingDetails
        open={open}
        handleClose={handleClose}
        bookingDetails={bookingDetails}
      />
    </div>
  );
};

export default ChoosePayment;
