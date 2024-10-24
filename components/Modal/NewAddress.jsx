import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { addNewAddress } from "../../helpers";
import Snackbars from "../Snackbars";
import { snackbarsMsg } from "../../Static";

const NewAddress = ({ open, handleCloseNewAddress }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snack, setSnack] = useState(false);
  const [selectAdd, setSelectAdd] = useState();
  const [houseno, setHouseNo] = useState();
  const [landmark, setLandmark] = useState();
  const [pincode, setPincode] = useState();
  const [states, setStates] = useState();
  const [city, setCity] = useState();
  const [name, setName] = useState();

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

  const addAddress = async () => {
    if (houseno && landmark && pincode && states && city) {
      const fullAddress = `${houseno} ${landmark} ${pincode} ${states} ${city}`;
      if(fullAddress){
      const data = {
        name: name,
        address: fullAddress,
      };
      if (data) {
        const response = await addNewAddress(data);
        if (response) {
          setSnack(true);
          setOpenSnackbar(true);
          handleCloseNewAddress();
        } else {
          setSnack(false);
        }
      }
    }
    }
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
            <Snackbars
              open={openSnackbar}
              msg={snackbarsMsg.addressSuccess}
              snack={snack}
            />
            <div className="drawerCloseBtn">x</div>
          </div>
          <h1 className="slotTimingsHead addressHeading">Add new address</h1>
          <div className="addressContainer" style={{ marginTop: "30px" }}>
            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <input
                type="text"
                placeholder="House no, Street name, flat no"
                onChange={(e) => setName(e.target.value)}
              />
            </span>
            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <input
                type="text"
                placeholder="House no, Street name, flat no"
                onChange={(e) => setHouseNo(e.target.value)}
              />
            </span>

            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginBottom: "10px" }}
            >
              <input
                type="text"
                placeholder="Landmark"
                onChange={(e) => setLandmark(e.target.value)}
              />
            </span>

            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginBottom: "10px" }}
            >
              <input
                type="text"
                placeholder="Pincode"
                onChange={(e) => setPincode(e.target.value)}
              />
            </span>

            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginBottom: "10px" }}
            >
              <input
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              />
            </span>

            <span
              className="professionalLoginInputSection profProInput"
              style={{ marginBottom: "10px" }}
            >
              <input
                type="text"
                placeholder="State"
                onChange={(e) => setStates(e.target.value)}
              />
            </span>
          </div>

          <div className="selectSlotBtnContainer">
            <button
              className="basicRoundedButton selectSlotBtn"
              onClick={() => addAddress()}
            >
              Save address
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default NewAddress;
