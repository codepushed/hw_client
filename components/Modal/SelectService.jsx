import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Image from "next/image";

const SelectService = ({ isOpen, handleClose, data, setSelectedServices }) => {
  const [isMobileDefault, setIsMobileDefault] = useState(false);

  const basicModalStyling = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobileDefault ? 360 : 600,
    bgcolor: "background.paper",
    outline: "none",
    borderRadius: "6px",
    marginTop: "10px",
  };

  const handleSelectService = (service) => {
    setSelectedServices(service);
    handleClose();
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

          <h1
            className="slotTimingsHead addressHeading bookingDetailsheading"
            style={{ paddingLeft: "20px" }}
          >
            Select a service
          </h1>

          <div className="servicesTypesContainer moreServicesTypesContainer">
            {data &&
              data?.subCategory?.map((service, index) => (
                <div
                  className="servicesTypes moreServiceTypes"
                  onClick={() => handleSelectService(service)}
                  key={index}
                >
                  <Image
                    src={service?.subServiceName[0].image}
                    alt="service"
                    height={500}
                    width={500}
                  />
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
