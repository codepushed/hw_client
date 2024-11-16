import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const Tables = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Phone number</StyledTableCell>
            <StyledTableCell align="right">Adhaar number</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Adhaar verification</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Suresh kumar
            </StyledTableCell>
            <StyledTableCell align="right">9618384142</StyledTableCell>
            <StyledTableCell align="right">8725719273536</StyledTableCell>
            <StyledTableCell align="right">
              Bendre wasti, sakhre road, pune, Maharastra
            </StyledTableCell>
            <StyledTableCell align="right">
              <button
                // onClick={() => handleVerification(item)}
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
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Suresh kumar
            </StyledTableCell>
            <StyledTableCell align="right">9618384142</StyledTableCell>
            <StyledTableCell align="right">8725719273536</StyledTableCell>
            <StyledTableCell align="right">
              Bendre wasti, sakhre road, pune, Maharastra
            </StyledTableCell>
            <StyledTableCell align="right">
              <button
                // onClick={() => handleVerification(item)}
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
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
