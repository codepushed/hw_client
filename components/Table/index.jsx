import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Snackbars from "../Snackbars";

import { adminProfessionalAdhaarVerification } from "../../helpers";
import Loader from "../Loader";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Tables = ({ data, setAdhaar }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snack, setSnack] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();

  const handleVerification = async (item) => {
    const professionalId = item?._id;
    if (professionalId) {
      const data = {
        id: professionalId,
        isAdhaarVerified: true,
      };
      const response = await adminProfessionalAdhaarVerification(data);
      setAdhaar(response);
      setSnack(true);
      setOpenSnackbar(true);
      setSnackbarMsg("Professional verified successfully");
    } else {
      setSnack(false);
      setOpenSnackbar(true);
      setSnackbarMsg("Failed! try again later");
    }
  };

  return (
    <TableContainer component={Paper}>
      <Snackbars open={openSnackbar} msg={snackbarMsg} snack={snack} />
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Phone number</StyledTableCell>
            <StyledTableCell align="right">Adhaar number</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="right">Adhaar verification</StyledTableCell>
          </TableRow>
        </TableHead>
        {data ? (
          <TableBody>
            {data &&
              data?.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item?.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item?.phone}</StyledTableCell>
                  <StyledTableCell align="right">{item?.phone}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item?.address}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item?.isAdhaarVerified ? (
                      <button
                        style={{
                          border: "none",
                          borderRadius: "18px",
                          padding: "5px 10px",
                          color: "#fff",
                          background: "green",
                          cursor: "pointer",
                        }}
                        onClick={() => handleVerification(item)}
                      >
                        Verified
                      </button>
                    ) : (
                      <button
                        onClick={() => handleVerification(item)}
                        style={{
                          border: "none",
                          borderRadius: "18px",
                          padding: "5px 10px",
                          color: "#fff",
                          background: "red",
                          cursor: "pointer",
                        }}
                      >
                        not verified
                      </button>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        ) : (
          <div
            style={{
              width: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader />
          </div>
        )}
      </Table>
    </TableContainer>
  );
};

export default Tables;
