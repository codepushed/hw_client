import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField"; // Importing TextField for the search box

const ProfessionalList = ({ openModal, handleOpenModal, allProfessionals }) => {
    const [data, setData] = React.useState(null); // Start with null to simulate loading
    const [searchQuery, setSearchQuery] = React.useState("");
    const [filteredData, setFilteredData] = React.useState([]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    outline: "none",
    borderRadius: "6px",
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: "10px",
  };

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

  useEffect(() => {
    if (allProfessionals) {
      const filtered = allProfessionals.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [allProfessionals, searchQuery]);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="drawerCloseBtnWrapper drawerCloseBtnSpacing"
            onClick={() => handleOpenModal()}
          >
            <div className="drawerCloseBtn" style={{ padding: "unset" }}>
              x
            </div>
          </div>
          <h1 className="slotTimingsHead addressHeading">
            Assign a professional
          </h1>

          <TextField
            label="Search by Name"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ marginBottom: "20px", marginTop: "30px" }}
          />

          <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Phone number</StyledTableCell>
                  <StyledTableCell align="right">Adhaar number</StyledTableCell>
                  <StyledTableCell align="center">Address</StyledTableCell>
                  <StyledTableCell align="right">
                    Adhaar verification
                  </StyledTableCell>
                  <StyledTableCell align="right">Profession</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.phone}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.adhaarNumber}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.address}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.profession}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <button
                        style={{
                          border: "none",
                          borderRadius: "18px",
                          padding: "5px 10px",
                          color: "#fff",
                          background:
                            item.verified === "verified" ? "green" : "red",
                          cursor: "pointer",
                        }}
                      >
                        Assign
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfessionalList;
