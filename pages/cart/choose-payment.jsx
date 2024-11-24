import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import { CircularProgress } from "@mui/material";

import Header from "../../components/Header";
import BookingDetails from "../../components/Modal/BookingDetails";
import Snackbars from "../../components/Snackbars";

import {
  createBooking,
  // getProfessionalsByProfession,
  sentBookingDetails,
  // userGetAllProfessionals,
} from "../../helpers";
import { EmailPreview, isLoggedIn } from "../../helpers/basic";
import { useRouter } from "next/router";

// import { getRandomObject } from "../../helpers/basic";

const ChoosePayment = () => {
  // const [assignedProfessional, setAssignedProfessional] = useState();
  // const [OTP, setOTP] = useState();
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [bookingDetails, setBookingDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [snack, setSnack] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const finalCart = useSelector((state) => state.cart.finalCart);
  const router = useRouter();

  const getLoggedInUser = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (!isUserLoggedIn) {
      router.push("/cart");
    }
  };

  const handleClose = () => {
    if (
      !bookingDetails?.bookingStatus === "Pending" ||
      !bookingDetails?.bookingStatus === "Accepted"
    ) {
      setOpen(false);
    }
  };

  const handleCreateBooking = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("userId", finalCart?.userId);
    formData.append("bookingDetails", finalCart?.bookingDetails?.address);
    formData.append("service", JSON.stringify(finalCart?.service)); // Stringify nested object/array
    formData.append("slotDate", finalCart?.slotDate);
    formData.append("slotTime", finalCart?.slotTime);
    // const data = {
    //   userId: finalCart?.userId,
    //   bookingDetails: finalCart?.bookingDetails?.address,
    //   service: finalCart?.service,
    //   slotDate: finalCart?.slotDate,
    //   slotTime: finalCart?.slotTime,
    //   // otp: OTP,
    //   // professionalId: assignedProfessional?._id,
    // };

    // console.log(data, "yo");

    if (finalCart) {
      try {
        const response = await createBooking(formData);
        setBookingDetails(response?.booking);
        if (response) {
          await sendBookingConfirmation(response?.booking);
          setOpen(true);
          setIsLoading(false);
          setOpenSnackbar(true);
          setSnackbarMsg(
            "Booking sucessful, please wait we will assign a professional"
          );
          setSnack(true);
        }
      } catch {
        setOpen(false);
        setIsLoading(false);
        setOpenSnackbar(true);
        setSnackbarMsg("Booking failed, please try again");
        setSnack(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  const sendBookingConfirmation = async () => {
    const data = {
      to: "homeworkindservices@gmail.com",
      subject: "Booking recieved",
      message:
        "Hi Admin, you have a recieved a booking on behalf on homework. Please login as admin and assign a professional to the user",
    };
    if (data) {
      await sentBookingDetails(data);
    }
  };

  // const generateOTP = () => {
  //   const otpLength = 6;
  //   const otp = Array.from({ length: otpLength }, () =>
  //     Math.floor(Math.random() * 10)
  //   ).join("");
  //   setOTP(otp);
  // };

  useEffect(() => {
    if (bookingDetails) {
      if (
        bookingDetails?.bookingStatus !== "Pending" ||
        bookingDetails?.bookingStatus !== "Accepted"
      ) {
        setOpen(true);
      }
    } else {
      setOpen(false);
    }
  }, [bookingDetails]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (bookingDetails) {
        if (
          bookingDetails?.bookingStatus === "Pending" ||
          bookingDetails?.bookingStatus === "Accepted"
        ) {
          e.preventDefault();
          e.returnValue = "";
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [bookingDetails]);

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <div className="professionalLoginContainer">
      <Header isMobileHeader={isMobile} />
      <Snackbars open={openSnackbar} msg={snackbarMsg} snack={snack} />
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
              Book
              {isLoading && (
                <CircularProgress
                  style={{
                    height: "10px",
                    width: "10px",
                    color: "#fff",
                    marginLeft: "10px",
                  }}
                />
              )}
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
