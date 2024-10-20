import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const Snackbars = ({ open, msg, snack }) => {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} message={msg}>
        <Alert severity={snack ? "success" : "error"} sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Snackbars;
