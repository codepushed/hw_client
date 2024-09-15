import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const BookingDetails = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="drawerCloseBtnWrapper drawerCloseBtnSpacing">
            <div className="drawerCloseBtn">x</div>
          </div>

          <h1 className="slotTimingsHead addressHeading bookingDetailsheading ">
            Kitchen cleaning
          </h1>

          <span className="serviceCardPricing bookingsSubHeading">
            <p>31 July 2024</p>
          </span>
          <span className="serviceCardPricingRuppee bookingsSubHeading">
            <img
              src="/assets/icons/ruppee.png"
              alt="ruppee"
              className="ruppeeIcon"
            />
            <p>499</p>
          </span>

          <button className="graybtnWithIcon bookingDetailsRecieptBtn">
            <img src="/assets/icons/bill.png" alt="reciept" />
            Receipt
          </button>

          <div className="bookingDetailsProfessional">
            <div className="professionalDetails">
              <h1>Cleaning session with</h1>
              <h1>Abdul Shiek</h1>
            </div>

            <img src="/assets/professionalprofile.png" alt="professional" />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingDetails;
