import React from "react";


const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarList sidebarListActive">
        <img src="/assets/icons/profile_booking.png" alt="profile" />
        <p>Profile</p>

        <div className="profileSidebarDivider"></div>
      </div>

      <div className="sidebarList">
        <img src="/assets/icons/mybookings.png" alt="mybookings" />
        <p>My bookings</p>
      </div>

      <div className="sidebarList">
        <img src="/assets/icons/logout.png" alt="logout" />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
