import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Slot = ({ isSlotOpen, handleSlots, availableSlots }) => {
  const [currentTimeSlots, setCurrentTimeSlots] = useState();

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

  useEffect(() => {
    if (availableSlots) {
      setCurrentTimeSlots(availableSlots[0].slots);
    }
  }, []);

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
            {availableSlots &&
              availableSlots?.map((item, index) => (
                <div
                  className="slotTimings"
                  key={index}
                  onClick={() => setCurrentTimeSlots(item?.slots)}
                >
                  <h1>{item?.date}</h1>
                  <p>{item?.day}</p>
                </div>
              ))}
          </div>

          <h1 className="slotTimingsHead slotDateHead">
            Pick the time for the service to begin
          </h1>

          <div className="slotTimingsContainer slotDateContainer">
            {currentTimeSlots &&
              currentTimeSlots?.map((item, index) => (
                <div
                  className="slotTimings"
                  key={index}
                  style={{ width: "60px" }}
                >
                  <h1>{item}</h1>
                </div>
              ))}
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
