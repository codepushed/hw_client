import React from "react";
import Box from "@mui/material/Box";
import Modals from "@mui/material/Modal";

import { basicModalStyling } from "./helper";

const Modal = ({ isOpen, handleClosed }) => {
  return (
    <div>
      <Modals
        open={isOpen}
        onClose={handleClosed}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={basicModalStyling}>
          <div className="drawerCloseBtnWrapper drawerCloseBtnSpacing">
            <div className="drawerCloseBtn" onClick={() => handleClosed()}>
              x
            </div>
          </div>

          <h1 className="slotTimingsHead addressHeading">Launching Soon</h1>
          <h3 className="launchModalsubTitle">Stay tunned Gwalior</h3>

          <div className="launchModalImg">
            <img src="/assets/launch.png" alt="launch" />
          </div>
        </Box>
      </Modals>
    </div>
  );
};

export default Modal;
