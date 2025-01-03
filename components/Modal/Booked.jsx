import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { convertISODate } from "../../helpers/basic";
import Snackbars from "../Snackbars";

const Booked = ({ bookingModal, handleBookingModal, bookingData }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snack, setSnack] = useState(false);
  const [service, setService] = useState();

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

  const copyMessage = async () => {
    if (bookingData) {
      const services = Array.isArray(bookingData?.service)
      ? bookingData?.service
      : JSON.parse(bookingData?.service || '[]'); // Safe fallback if it's an empty string

    // Map over the services array to get only name and price
    const serviceDetails = services.map((service) => `
      Service: ${service?.name || "Not specified"}
      Price: ${service?.price || "Not specified"}
    `).join("\n\n");

      const message = `
    Hi,

    Thank you for booking with Homework Service! We've received your booking request and are currently in the process of assigning a professional to assist you.

    Below are the details of the service you requested:
    Service: ${serviceDetails}
    Booking date and time: ${convertISODate(bookingData?.updatedAt)}

    Our professional will be in touch with you soon and will arrive on ${
      bookingData.slotDate
    } at ${bookingData.slotTime}.

    If you have any questions, feel free to reach out. We're here to help!

    Thank you for choosing Homework Service!

    Visit us at: homeworkservice.in
    Contact us:
    Email: contact@homeworkservice.in
    Phone: +91 8818854600 / +91 8818854500
  `;

      try {
        await navigator.clipboard.writeText(message);
        setSnack(true);
        setOpenSnackbar(true);
      } catch (err) {
        setSnack(false);
        setOpenSnackbar(false);
      }
    }
  };



  return (
    <div>
      <Modal
        open={bookingModal}
        onClose={handleBookingModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="drawerCloseBtnWrapper drawerCloseBtnSpacing"
            onClick={() => handleBookingModal()}
          >
            <div className="drawerCloseBtn" style={{ padding: "unset" }}>
              x
            </div>
          </div>
          <h1 className="slotTimingsHead addressHeading">Details</h1>

          <div className="customerDetails">
            <div className="customerDetailsSpecific">
              {bookingData &&
                bookingData?.service &&
                (() => {
                  let services;
                  try {
                    // Try parsing the service data
                    services = JSON.parse(bookingData?.service);
                    // Check if the parsed data is an array
                    if (!Array.isArray(services)) {
                      throw new Error("Parsed service is not an array");
                    }
                  } catch (error) {
                    // If parsing fails or it's not an array, log the error and return a fallback
                    console.error("Error parsing service data:", error.message);
                    return <p>Invalid service data</p>;
                  }

                  // Only map if services is a valid array
                  return services.map((item, index) => (
                    <div key={index} className="customerDetailsSpecific">
                      <p>Service</p>
                      <h3>{item.name}</h3>
                      <h3>Price: {item?.price}</h3>
                    </div>
                  ));
                })()}

              <h3>
                Slot: {bookingData?.slotDate}, {bookingData?.slotTime}
              </h3>
            </div>
            <div className="customerDetailsSpecific">
              <p>Professional</p>
              {bookingData?.professional ? (
                <>
                  <h3>{bookingData?.professional?.name}</h3>
                  <h3>{bookingData?.professional?.address}</h3>
                  <h3>{bookingData?.professional?.phone}</h3>
                  <h3>
                    Verified: {bookingData?.professional?.isAdhaarVerified}
                  </h3>
                </>
              ) : (
                <h3>not assigned yet</h3>
              )}
            </div>
            <div className="customerDetailsSpecific">
              <p>Booking date & time</p>
              <h3>{convertISODate(bookingData?.updatedAt)}</h3>
            </div>

            <button
              className="basicRoundedButton"
              onClick={() => copyMessage(bookingData)}
            >
              Copy
            </button>
          </div>
        </Box>
      </Modal>
      <Snackbars
        open={openSnackbar}
        msg="Email copied! Now share it to customer via email and whatsapp"
        snack={snack}
      />
    </div>
  );
};

export default Booked;
