import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";

const ServiceDetailsModel = ({ isOpen, handleClose }) => {
    
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    outline: "none",
    borderRadius: "16px",
    marginTop: "10px",
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="serviceDetailsMap">
            <img src="/assets/maps.png" alt="maps" />
            <div
              className="drawerCloseBtnWrapper drawerCloseBtnSpacing serviceDetailClose"
              onClick={() => handleClose()}
            >
              <div className="drawerCloseBtn">x</div>
            </div>
          </div>

          <div className="serviceDetails">
            <h2>Plumbering</h2>
            <p>Water leakage issue</p>
            <span className="serviceDetailsPrice">&#8377; 899</span>
          </div>

          <Divider />

          <div className="serviceDetailsCustomerContainer">
            <h4>Customer details</h4>
            <div className="serviceDetailsCustomer">
              <div className="serviceDetailsCustomerImg">
                <img src="/assets/profilePicture.jpg" />
              </div>
              <div>
                <p className="customerName">Shristi</p>
                <div className="serviceDetailsCustomerNameContainer">
                  <div style={{ width: "50%" }}>
                    <p className="serviceDetailsAddress">Address</p>
                    <p className="serviceDetailsAdd">
                      Bendre Wasti, Sakhre road, Pune, Maharastra - 410057
                    </p>
                  </div>
                  <div>
                    <p className="serviceDetailsAddress">Contact</p>
                    <p className="serviceDetailsAdd">+91 9617373159</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="markasCompleteBtn">
            <button className="jobCardAcceptBtn">Mark as complete</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ServiceDetailsModel;
