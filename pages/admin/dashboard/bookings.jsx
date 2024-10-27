import React, { useEffect, useState } from "react";
import { getAllBookings } from "../../../helpers";

const Bookings = () => {
  const [bookings, setBookings] = useState();

  const getAllBooking = async () => {
    const response = await getAllBookings();
    if (response) {
      setBookings(response?.bookings);
    }
  };

  useEffect(() => {
    getAllBooking();
  }, []);

  return (
    <div style={{ padding: "0 40px" }}>
      <h1>Bookings</h1>

      <ul>
        {/* {
  bookings && bookings?.map((item, index) => (

  ))
} */}
      </ul>
    </div>
  );
};

export default Bookings;
