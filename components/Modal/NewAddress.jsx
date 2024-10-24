import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const NewAddress = ({ open, handleCloseNewAddress }) => {
  const [selectAdd, setSelectAdd] = useState();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
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
        onClose={handleCloseNewAddress}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="drawerCloseBtnWrapper drawerCloseBtnSpacing"
            onClick={() => handleCloseNewAddress()}
          >
            <div className="drawerCloseBtn">x</div>
          </div>
          <h1 className="slotTimingsHead addressHeading">Add new address</h1>
          <div className="addressContainer" style={{ marginTop: "30px" }}>
            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <input type="text" placeholder="House no, Street name, flat no" />
            </span>

            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginBottom: "10px" }}
            >
              <input type="text" placeholder="Landmark" />
            </span>

            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginBottom: "10px" }}
            >
              <input type="text" placeholder="Pincode" />
            </span>

            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginBottom: "10px" }}
            >
              <input type="text" placeholder="City" />
            </span>

            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginBottom: "10px" }}
            >
              <input type="text" placeholder="State" />
            </span>
          </div>

          <div className="selectSlotBtnContainer">
            <button className="basicRoundedButton selectSlotBtn">
              Save address
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default NewAddress;
