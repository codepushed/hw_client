import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";

const ServiceDetailsModel = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    outline: "none",
    borderRadius: "6px",
    // paddingLeft: 4,
    marginTop: "10px",
  };
  return (
    <div>
      <Modal
        open={true}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="serviceDetailsMap">
            <img src="/assets/maps.png" alt="maps" />
          </div>

          <div className="serviceDetails">
            <h2>Plumbering</h2>
            <p>Water leakage issue</p>
            <span className="serviceDetailsPrice">&#8377; 899</span>
          </div>

          <Divider />

          <div>
            <p>Customer details</p>

            <div className="serviceDetailsCustomer">
              <div className="serviceDetailsCustomerImg">
                <img src="/assets/profilepicture.png" />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ServiceDetailsModel;
