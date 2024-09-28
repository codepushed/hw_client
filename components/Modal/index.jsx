import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modals from "@mui/material/Modal";

import Image from "next/image";

const Modal = ({ isOpen, handleClosed }) => {
  const [isMobileDefault, setIsMobileDefault] = useState(false);

  const basicModalStyling = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobileDefault ? 300 : 600,
    bgcolor: "background.paper",
    outline: "none",
    borderRadius: "6px",
    paddingLeft: 4,
    marginTop: "10px",
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobileDefault(true);
    } else {
      setIsMobileDefault(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <Image
              src="/assets/launch.png"
              alt="launch"
              height={500}
              width={500}
            />
          </div>
        </Box>
      </Modals>
    </div>
  );
};

export default Modal;
