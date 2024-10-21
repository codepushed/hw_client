import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Slot = ({ isSlotOpen, handleSlots }) => {
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
        open={isSlotOpen}
        onClose={handleSlots}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="drawerCloseBtnWrapper drawerCloseBtnSpacing"
            onClick={() => handleSlots()}
          >
            <div className="drawerCloseBtn">x</div>
          </div>

          <h1 className="slotTimingsHead">
            When should you the professional arrive?
          </h1>
          <div className="slotTimingsContainer">
            <div className="slotTimings">
              <h1>12</h1>
              <p>Tue</p>
            </div>

            <div className="slotTimings">
              <h1>13</h1>
              <p>Wed</p>
            </div>

            <div className="slotTimings">
              <h1>14</h1>
              <p>Thu</p>
            </div>
          </div>

          <h1 className="slotTimingsHead slotDateHead">
            Pick the time for the service to begin
          </h1>

          <div className="slotTimingsContainer slotDateContainer">
            <div className="slotTimings">
              <h1>12:00</h1>
              <p>AM</p>
            </div>

            <div className="slotTimings">
              <h1>12:00</h1>
              <p>AM</p>
            </div>

            <div className="slotTimings dateSlotNotActive">
              <h1>12:00</h1>
              <p>AM</p>
            </div>

            <div className="slotTimings">
              <h1>12:00</h1>
              <p>AM</p>
            </div>

            <div className="slotTimings">
              <h1>12:00</h1>
              <p>AM</p>
            </div>

            <div className="slotTimings">
              <h1>12:00</h1>
              <p>AM</p>
            </div>

            <div className="slotTimings">
              <h1>12:00</h1>
              <p>AM</p>
            </div>

            <div className="slotTimings">
              <h1>12:00</h1>
              <p>AM</p>
            </div>

            <div className="slotTimings">
              <h1>12:00</h1>
              <p>AM</p>
            </div>
          </div>

          <div className="selectSlotBtnContainer">
            <button className="basicRoundedButton selectSlotBtn">
              Select slot
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Slot;
