import React from "react";
import Sidebar from "../../components/Sidebar";
import Bookings from "./bookings";
import BookingDetails from "../../components/Modal/BookingDetails";

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="profileLeft">
        <div>
          <h1 className="profileLeftHead">My Account</h1>
          <Sidebar />
        </div>
      </div>

      {/* <div className="profileRight">
        <p>Profile picture</p>

        <div className="profileRightPicture">
          <img src="/assets/profilePicture.jpg" alt="profile_picture" />
          <div className="profileRightPictureBtns">
            <button className="basicRoundedButton">Change picture</button>
            <button className="delBtn">Delete picture</button>
          </div>
        </div>

        <div className="profileRightFormContainer">
          <div className="profileRightForm">
            <p>Name</p>
            <input type="text" className="profileRightFormInput" />
          </div>

          <div className="profileRightForm">
            <p>Email</p>
            <input type="text" className="profileRightFormInput" />
          </div>

          <div className="profileRightForm">
            <p>Phone no</p>
            <input type="text" className="profileRightFormInput" />
          </div>

          <button className="basicRoundedButton profileFormBtn ">Update</button>
        </div>
      </div> */}

      <Bookings />
      <BookingDetails />
    </div>
  );
};

export default Profile;
