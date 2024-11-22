import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Details from "../Modal/Details";
import Booked from "../Modal/Booked";
import ProfessionalList from "../Modal/ProfessionalList";
import Loader from "../Loader";

import { adminGetAllProfessionals, getUserById } from "../../helpers";

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

const BookingTable = ({ bookings }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [bookingData, setBookingData] = useState();
  const [bookingModal, setBookingModal] = useState(false);
  const [allProfessionals, setAllProfessionals] = useState();

  const handleOpenModal = () => {
    setOpenModal(false);
  };

  const handleBookingModal = () => {
    setBookingModal(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUser = async (item) => {
    const response = await getUserById(item);
    if (response) {
      setOpen(true);
      setData(response?.user);
    }
  };

  const handleBooking = (item) => {
    setBookingModal(true);
    setBookingData(item);
  };

  const assignProfessional = async () => {
    setOpenModal(true);
    const response = await adminGetAllProfessionals();
    if (response) {
      setAllProfessionals(response?.professionals);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Booking Id</StyledTableCell>
            <StyledTableCell align="right">User</StyledTableCell>
            <StyledTableCell align="right">Booking details</StyledTableCell>
            <StyledTableCell align="right">Booking status</StyledTableCell>
            <StyledTableCell align="center">Assign</StyledTableCell>
          </TableRow>
        </TableHead>

        {bookings ? (
          <TableBody>
            {Array.isArray(bookings) &&
              bookings.length > 0 &&
              bookings &&
              bookings?.map((item, index) => (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" key={index}>
                    {item?._id}
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    align="right"
                    onClick={() => handleUser(item?.user)}
                  >
                    {item?.user}
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => handleBooking(item)}
                  >
                    View
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item?.bookingStatus}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item?.bookingStatus === "Pending" ? (
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
                        onClick={() => assignProfessional()}
                      >
                        Assign
                      </button>
                    ) : (
                      <p>View</p>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        ) : (
          <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Loader />
          </div>
        )}
      </Table>

      <Details handleClose={handleClose} open={open} data={data} />
      <Booked
        handleBookingModal={handleBookingModal}
        bookingModal={bookingModal}
        bookingData={bookingData}
      />
      <ProfessionalList
        handleOpenModal={handleOpenModal}
        openModal={openModal}
        allProfessionals={allProfessionals}
      />
    </TableContainer>
  );
};

export default BookingTable;
