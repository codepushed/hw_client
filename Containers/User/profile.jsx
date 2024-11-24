import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";

import Sidebar from "../../components/Sidebar";
import Bookings from "./bookings";
import Loader from "../../components/Loader";
import Snackbars from "../../components/Snackbars";
// import BookingDetails from "../../components/Modal/BookingDetails";

import { profile, profileUpdate } from "../../helpers";
import { snackbarsMsg } from "../../Static";
import { isLoggedIn } from "../../helpers/basic";

const Profile = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [snack, setSnack] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const fileInputRef = useRef(null);
  const router = useRouter();

  const getLoggedInUser = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (!isUserLoggedIn) {
      // router.push("/login");
    } else {
      setIsLogged(true);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  // const handleChangePicture = (e) => {
  //   fileInputRef.current.click();
  // };

  const updateProfileDetails = async () => {
    setIsLoading(true);
    if (name && email) {
      const data = {
        name: name,
        email: email,
      };
      const response = await profileUpdate(data);
      if (response) {
        setIsLoading(false);
        setSnack(true);
        setOpen(true);
        setSnackbarMsg("Your profile now updated!");
      } else {
        setSnack(false);
        setIsLoading(false);
        setSnackbarMsg("Some error occur! Try again later");
      }
    } else {
      setIsLoading(false);
      setSnack(true);
      setOpen(true);
      setSnackbarMsg("Please fill the details.");
    }
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     console.log("Selected file:", file);
  //   }
  // };

  useEffect(() => {
    if (data?.name) {
      setName(data.name);
      setEmail(data.email);
    }
  }, [data]);

  return (
    <div className="profileContainer">
      {isLogged ? (
      <>
        <div className="profileLeft">
          <div>
            <h1 className="profileLeftHead">My Account</h1>
            <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
          </div>
        </div>

        {!sidebar ? (
          <div className="profileRight">
            <p>Profile picture</p>

            <div className="profileRightPicture">
              <img src="/assets/profiledefault.png" alt="profile_picture" />
              <div className="profileRightPictureBtns">
                {/* <button
                    className="basicRoundedButton"
                    onClick={(e) => handleChangePicture(e)}
                  >
                    Change picture
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  /> */}
                {/* <button className="delBtn">Delete picture</button> */}
              </div>
            </div>

            <div className="profileRightFormContainer">
              <div className="profileRightForm">
                <p>Name</p>
                <input
                  type="text"
                  className="profileRightFormInput"
                  value={name || data?.name}
                  onChange={(e) => setName(e.target.value)}
                  disabled
                />
              </div>

              <div className="profileRightForm">
                <p>Email</p>
                <input
                  type="text"
                  className="profileRightFormInput"
                  value={email || data?.email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled
                />
              </div>

              <div className="profileRightForm">
                <p>Phone no</p>
                <input
                  type="text"
                  className="profileRightFormInput"
                  disabled
                  value={data?.phone}
                />
              </div>

              <button
                className="basicRoundedButton profileFormBtn"
                onClick={() => updateProfileDetails()}
              >
                Update
                {isLoading && (
                  <CircularProgress
                    style={{
                      height: "10px",
                      width: "10px",
                      color: "#fff",
                      marginLeft: "10px",
                    }}
                  />
                )}
              </button>
            </div>
          </div>
        ) : (
          <Bookings />
        )}

        <Snackbars open={open} msg={snackbarMsg} snack={snack} />
      </>
      ) : (
        <Loader />
      )}
      {/* <BookingDetails /> */}
    </div>
  );
};

export default Profile;
