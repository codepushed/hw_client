import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Address = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="drawerCloseBtnWrapper drawerCloseBtnSpacing">
            <div className="drawerCloseBtn">x</div>
          </div>

          <h1 className="slotTimingsHead addressHeading">
          Saved address
          </h1>
          <h2 className="addressSubHeading">+ Add another address</h2>


          <div className="addressContainer">
            <span className="addressTitle">
            <input type="radio" checked={true} />
            <p>Home</p>
            </span>
            <p>Shubham, Hinjawadi Village, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057, India</p>
          </div>

          <div className="addressContainer">
            <span className="addressTitle">
            <input type="radio" checked={false} />
            <p>Home</p>
            </span>
            <p>Shubham, Hinjawadi Village, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057, India</p>
          </div>

          <div className="addressContainer">
            <span className="addressTitle">
            <input type="radio" checked={false} />
            <p>Home</p>
            </span>
            <p>Shubham, Hinjawadi Village, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057, India</p>
          </div>

          <div className="addressContainer">
            <span className="addressTitle">
            <input type="radio" checked={false} />
            <p>Home</p>
            </span>
            <p>Shubham, Hinjawadi Village, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057, India</p>
          </div>
         

          <div className="selectSlotBtnContainer">
            <button className="basicRoundedButton selectSlotBtn">
              Save address
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Address;
