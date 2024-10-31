import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import BookingDetails from "../../components/Modal/BookingDetails";
import {
  createBooking,
  getProfessionalsByProfession,
  userGetAllProfessionals,
} from "../../helpers";
import { getRandomObject } from "../../helpers/basic";

const ChoosePayment = () => {
  const [assignedProfessional, setAssignedProfessional] = useState();
  const [OTP, setOTP] = useState();
  const finalCart = useSelector((state) => state.cart.finalCart);

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

  const generateOTP = () => {
    const otpLength = 6;
    const otp = Array.from({ length: otpLength }, () =>
      Math.floor(Math.random() * 10)
    ).join("");
    setOTP(otp);
  };

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
            <button
              className="basicRoundedButton profOtpbtn"
              onClick={() => handleCreateBooking()}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
      <BookingDetails />
    </div>
  );
};

export default ChoosePayment;
