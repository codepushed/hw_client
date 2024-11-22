import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import BookingTable from "../../../components/Table/BookingTable";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import Loader from "../../../components/Loader";

import { getAllBookings } from "../../../helpers";
import { isLoggedIn } from "../../../helpers/basic";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLogged, setLoggedIn] = useState();
  const router = useRouter();

  const getAllBooking = async () => {
    const response = await getAllBookings();
    if (response) {
      setBookings(response?.bookings);
    }
  };

  useEffect(() => {
    getAllBooking();
  }, []);

  const getLoggedInUser = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (isUserLoggedIn) {
      setLoggedIn(true);
    } else {
      router.push("/admin");
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  //assign and update status
  // create booking from user end

  return (
    <div>
      <HeaderAdmin />
      {isLogged ? (
        <>
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
              Find the booking and see the status, if the status is pending. So
              you can click assign button to find the professionals and assign
              them to the user for service
            </Alert>
          </Collapse>
          <div className="adminDashboardTableContainer">
            <div className="adminHeadersLinks">
              <h1 className="adminDashboard">Bookings</h1>
              <p onClick={() => router.push("/admin/dashboard")}>dashboard</p>
            </div>
            <BookingTable bookings={bookings} />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Bookings;
