import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import BookingTable from "../../../components/Table/BookingTable";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";

import { getAllBookings } from "../../../helpers";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const getAllBooking = async () => {
    const response = await getAllBookings();
    if (response) {
      setBookings(response?.bookings);
    }
  };

  useEffect(() => {
    getAllBooking();
  }, []);

  // list all the bookings, with details like - booking id, booking name, service name, price, status
  // assign button - open a modal with search and table with assign button infront of each professional

  //update status 

  // send the whatsapp msg and qr code where the amount to be recieved  
  // copy paste msg 

  return (
    <div>
      <HeaderAdmin />
      {/* add loader  */}
      <Collapse in={open} style={{ marginTop: "40px" }}>
        <Alert
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Find the booking and see the status, if the status is not assigned. So
          you can click assign button to find the professionals and assign them
          to the user for service
        </Alert>
      </Collapse>

      <div className="adminDashboardTableContainer">
        <div className="adminHeadersLinks">
          <h1 className="adminDashboard">Bookings</h1>
          <p onClick={() => router.push("/admin/dashboard")}>dashboard</p>
        </div>
        <BookingTable bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
