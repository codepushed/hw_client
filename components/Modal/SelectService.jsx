import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { basicModalStyling, basicModalStylingMobile } from "./helper";
import Image from "next/image";
import { isMobile, isMobileSafari } from "react-device-detect";

const SelectService = ({ isOpen, handleClose, data, setSelectedServices }) => {
  const handleSelectService = (service) => {
    setSelectedServices(service);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={
            isMobileSafari && isMobile
              ? basicModalStylingMobile
              : basicModalStyling
          }
        >
          <div
            className="drawerCloseBtnWrapper drawerCloseBtnSpacing"
            onClick={() => handleClose()}
          >
            <div className="drawerCloseBtn">x</div>
          </div>

          <h1
            className="slotTimingsHead addressHeading bookingDetailsheading"
            style={{ paddingLeft: "20px" }}
          >
            Select a service
          </h1>

          <div className="servicesTypesContainer moreServicesTypesContainer">
            {data?.map((service, index) => (
              <div
                className="servicesTypes moreServiceTypes"
                onClick={() => handleSelectService(service)}
                key={index}
              >
                <Image src={service.img} alt="service" height={500} width={500} />
                <p>{service.name}</p>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SelectService;
