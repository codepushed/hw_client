import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { basicModalStyling } from "./helper";

const SelectService = ({ isOpen, handleClose, data }) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={basicModalStyling}>
          <div
            className="drawerCloseBtnWrapper drawerCloseBtnSpacing"
            onClick={() => handleClose()}
          >
            <div className="drawerCloseBtn">x</div>
          </div>

          <h1 className="slotTimingsHead addressHeading bookingDetailsheading" style={{ paddingLeft: "20px" }} >
            Select a service
          </h1>

          <div
            className="servicesTypesContainer moreServicesTypesContainer"   
          >
            {data?.map((service, index) => (
              <div
                className="servicesTypes moreServiceTypes"
                onClick={() => setSelectedServices(service)}
                key={index}
              >
                <img src={service.img} alt="service" />
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
