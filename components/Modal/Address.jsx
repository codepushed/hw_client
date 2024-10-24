import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NewAddress from "./NewAddress";

const Address = ({ open, handleClose }) => {
  const [selectAdd, setSelectAdd] = useState();
  const [isNewAddress, setIsNewAddress] = useState(false);

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
            <span className="addressTitle">
              <input
                type="radio"
                checked={selectAdd}
                onChange={(e) => setSelectAdd(e.target.value)}
              />
              <p>Home</p>
            </span>
            <p>
              Shubham, Hinjawadi Village, Hinjawadi, Pimpri-Chinchwad,
              Maharashtra 411057, India
            </p>
          </div>

          <div className="addressContainer">
            <span className="addressTitle">
              <input
                type="radio"
                checked={selectAdd}
                onChange={(e) => setSelectAdd(e.target.value)}
              />
              <p>Home</p>
            </span>
            <p>
              Shubham, Hinjawadi Village, Hinjawadi, Pimpri-Chinchwad,
              Maharashtra 411057, India
            </p>
          </div>

          <div className="addressContainer">
            <span className="addressTitle">
              <input
                type="radio"
                checked={selectAdd}
                onChange={(e) => setSelectAdd(e.target.value)}
              />
              <p>Home</p>
            </span>
            <p>
              Shubham, Hinjawadi Village, Hinjawadi, Pimpri-Chinchwad,
              Maharashtra 411057, India
            </p>
          </div>

          <div className="addressContainer">
            <span className="addressTitle">
              <input
                type="radio"
                checked={selectAdd}
                onChange={(e) => setSelectAdd(e.target.value)}
              />
              <p>Home</p>
            </span>
            <p>
              Shubham, Hinjawadi Village, Hinjawadi, Pimpri-Chinchwad,
              Maharashtra 411057, India
            </p>
          </div>

          <div className="selectSlotBtnContainer">
            <button className="basicRoundedButton selectSlotBtn">
              Save address
            </button>
          </div>
        </Box>
      </Modal>
      <NewAddress
        open={isNewAddress}
        handleCloseNewAddress={handleCloseNewAddress}
      />
    </div>
  );
};

export default Address;
