import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";

const BookingDetails = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        open={false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="drawerCloseBtnWrapper drawerCloseBtnSpacing">
            <div className="drawerCloseBtn">x</div>
          </div>
          {finalCart?.serviceId?.map((item, indx) => (
            <h4
              className="slotTimingsHead addressHeading bookingDetailsheading"
              key={indx}
              style={{ fontSize: "15px" }}
            >
              {item?.name}
            </h4>
          ))}

          <span className="serviceCardPricing bookingsSubHeading">
            <p>{finalCart?.slotDate}</p>
          </span>
          <span className="serviceCardPricingRuppee bookingsSubHeading">
            <img
              src="/assets/icons/ruppee.png"
              alt="ruppee"
              className="ruppeeIcon"
            />
            <p>{finalCart?.slotTime}</p>
          </span>

          {/* <button className="graybtnWithIcon bookingDetailsRecieptBtn">
            <img src="/assets/icons/bill.png" alt="reciept" />
            Receipt
          </button> */}

          <div className="bookingDetailsProfessional">
            <div className="professionalDetails">
              <h1>Session with</h1>
              <h1>Abdul Shiek</h1>
            </div>

            <h4>OTP</h4>
            <h1>1234</h1>

            {/* <img src="/assets/professionalprofile.png" alt="professional" /> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingDetails;
