import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../../components/Sidebar";
import Bookings from "./bookings";
import BookingDetails from "../../components/Modal/BookingDetails";
import { profile, profileUpdate } from "../../helpers";
import Snackbars from "../../components/Snackbars";
import { snackbarsMsg } from "../../Static";

const Profile = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [snack, setSnack] = useState(false);
  const fileInputRef = useRef(null);

  const handleChangePicture = (e) => {
    fileInputRef.current.click();
  };

  const updateProfileDetails = async () => {
    if (name && email) {
      const data = {
        name: name,
        email: email,
      };
      const response = await profileUpdate(data);
      if (response) {
        setSnack(true);
        setOpen(true);
      } else {
        setSnack(false);
      }
    } else {
      alert("Fill the details");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  useEffect(() => {
    if (data?.name) {
      setName(data.name);
      setEmail(data.email);
    }
  }, [data]);

  return (
    <div className="profileContainer">
      <div className="profileLeft">
        <div>
          <h1 className="profileLeftHead">My Account</h1>
          <Sidebar />
        </div>
      </div>

      <div className="profileRight">
        <p>Profile picture</p>

        <div className="profileRightPicture">
          <img src="/assets/profilePicture.jpg" alt="profile_picture" />
          <div className="profileRightPictureBtns">
            <button
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
            />
            <button className="delBtn">Delete picture</button>
          </div>
        </div>

        <div className="profileRightFormContainer">
          <div className="profileRightForm">
            <p>Name</p>
            <input
              type="text"
              className="profileRightFormInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="profileRightForm">
            <p>Email</p>
            <input
              type="text"
              className="profileRightFormInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="profileRightForm">
            <p>Phone no</p>
            <input type="text" className="profileRightFormInput" />
          </div>

          <button
            className="basicRoundedButton profileFormBtn"
            onClick={() => updateProfileDetails()}
          >
            Update
          </button>
        </div>
      </div>

      <Snackbars
        open={open}
        msg={snackbarsMsg.profileUpdateSuccess}
        snack={snack}
      />

      {/* <Bookings />
      <BookingDetails /> */}
    </div>
  );
};

export default Profile;
