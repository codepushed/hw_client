import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NewAddress from "../../components/Modal/NewAddress";
import { getAddress } from "../../helpers";

const Address = ({ open, handleClose, setSelectedAddress }) => {
  const [selectAdd, setSelectAdd] = useState(false);
  const [isNewAddress, setIsNewAddress] = useState(false);
  const [isNewAddressUpdated, setIsNewAdressUpdated] = useState();
  const [selectedAdd, setSelectedAdd] = useState(null);
  const [address, setAddress] = useState();

  const handleCloseNewAddress = () => {
    setIsNewAddress(false);
  };

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

  const handleOpenNewAddress = () => {
    handleClose();
    setIsNewAddress(true);
  };

  const getAllAddresses = async () => {
    const response = await getAddress();
    if (response) {
      setAddress(response?.addresses);
    }
  };

  useEffect(() => {
    getAllAddresses();
  }, [isNewAddressUpdated]);

  const handleChooseAddress = (e, item, index) => {
    setSelectAdd(e.target.checked);
    setSelectedAddress(item?.address);
    setSelectedAdd(index);
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="drawerCloseBtnWrapper drawerCloseBtnSpacing"
            onClick={() => handleClose()}
          >
            <div className="drawerCloseBtn">x</div>
          </div>
          <h1 className="slotTimingsHead addressHeading">Saved address</h1>
          <h2
            className="addressSubHeading"
            onClick={() => handleOpenNewAddress()}
          >
            + Add another address
          </h2>

          <div className="addressContainer">
            {address &&
              address?.map((item, index) => (
                <>
                  <span className="addressTitle" key={index}>
                    <input
                      type="radio"
                      checked={selectedAdd === index}
                      onChange={(e) => handleChooseAddress(e, item, index)}
                    />
                    <p>{item?.name}</p>
                  </span>
                  <p style={{ marginBottom: "20px" }}>{item?.address}</p>
                </>
              ))}
          </div>

          <div className="selectSlotBtnContainer">
            <button
              className="basicRoundedButton selectSlotBtn"
              onClick={() => handleClose()}
            >
              Select address
            </button>
          </div>
        </Box>
      </Modal>
      <NewAddress
        open={isNewAddress}
        handleCloseNewAddress={handleCloseNewAddress}
        setIsNewAdressUpdated={setIsNewAdressUpdated}
      />
    </div>
  );
};

export default Address;
