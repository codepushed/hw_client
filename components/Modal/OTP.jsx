import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const OTP = ({ isOpen, handleClose }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let inputValue = e.target.value;

    inputValue = inputValue.slice(0, 1);

    inputValue = inputValue.replace(/[^0-9]/g, "");

    setValue(inputValue);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    outline: "none",
    borderRadius: "16px",
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
          <div className="otpModalContainer">
            <h2>Enter OTP</h2>
            <p className="otpModalSubheading">
              Enter the OTP sent to your phone to confirm job completition
            </p>

            <div className="otpModalInputs">
              <input type="number" onChange={(e) => handleChange(e)} />
              <input type="number" onChange={(e) => handleChange(e)} />
              <input type="number" onChange={(e) => handleChange(e)} />
              <input
                type="number"
                value={value}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="markasCompleteBtn otpBtn">
            <button className="jobCardAcceptBtn">Submit</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default OTP;
