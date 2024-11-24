import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";

const BookingDetails = ({ open, handleClose, bookingDetails }) => {
  const finalCart = useSelector((state) => state.cart.finalCart);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    outline: "none",
    borderRadius: "6px",
    paddingLeft: 4,
    marginTop: "10px",
  };

  return (
    <div>
      <Modal
        open={open}
        disableEscapeKeyDown
        disableBackdropClick
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="drawerCloseBtnWrapper drawerCloseBtnSpacing">
            <div className="drawerCloseBtn">x</div>
          </div>
          {bookingDetails && JSON.parse(bookingDetails?.service).map((item, indx) => (
            <h4
              className="bookingDetailsheading"
              key={indx}
              style={{ fontSize: "20px" }}
            >
              {item?.name}
            </h4>
          ))}

          <span
            className="serviceCardPricing bookingsSubHeading"
            style={{ gap: "10px" }}
          >
            <p>{bookingDetails?.slotDate}</p>
            <p>{bookingDetails?.slotTime}</p>
          </span>
          <span className="serviceCardPricingRuppee bookingsSubHeading">
            {/* <img
              src="/assets/icons/ruppee.png"
              alt="ruppee"
              className="ruppeeIcon"
            /> */}
          </span>

          {/* <button className="graybtnWithIcon bookingDetailsRecieptBtn">
            <img src="/assets/icons/bill.png" alt="reciept" />
            Receipt
          </button> */}

          <p style={{ marginTop: "50px", color: "gray" }}>
            Professional details
          </p>
          {bookingDetails && bookingDetails?.bookingStatus !== "Pending" ? (
            <div className="bookingDetailsProfessional">
              <div className="professionalDetails">
                <h1 style={{ marginTop: "10px", fontSize: "20px" }}>
                  Session with
                </h1>
                <h1
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    marginLeft: "8px",
                    textTransform: "capitalize",
                  }}
                >
                  {bookingDetails?.professional?.name}
                </h1>
              </div>

              <p>{bookingDetails?.professional?.phone}</p>
              <p>{bookingDetails?.professional?.profession}</p>

              {/* <p style={{ marginTop: "50px", color: "gray" }}>OTP</p>
            <h4 style={{ marginBottom: "20px" }}>{bookingDetails?.otp}</h4> */}

              {/* <img src="/assets/professionalprofile.png" alt="professional" /> */}
            </div>
          ) : (
            "Please wait.. we will assign a professional"
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default BookingDetails;
