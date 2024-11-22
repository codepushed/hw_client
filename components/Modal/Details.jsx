import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Details = ({ open, handleClose, data }) => {
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
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="drawerCloseBtnWrapper drawerCloseBtnSpacing"
            onClick={() => handleClose()}
          >
            <div className="drawerCloseBtn" style={{ padding: "unset" }}>x</div>
          </div>
          <h1 className="slotTimingsHead addressHeading">Details</h1>

          <div className="customerDetails">
            <div className="customerDetailsSpecific">
              <p>Customer</p>
              <h3>{data?.name}</h3>
            </div>
            <div  className="customerDetailsSpecific">
              <p>Email</p>
              <h3>{data?.email}</h3>
            </div>
            <div  className="customerDetailsSpecific">
              <p>Phone</p>
              <h3>{data?.phone}</h3>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Details;
