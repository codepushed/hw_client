import React from "react";

const Sidebar = ({ setSidebar, sidebar }) => {
  return (
    <div className="sidebarContainer">
      <div
        className={!sidebar ? "sidebarList sidebarListActive" : "sidebarList"}
        onClick={() => setSidebar(false)}
      >
        <img src="/assets/icons/profile_booking.png" alt="profile" />
        <p>Profile</p>

        {!sidebar && <div className="profileSidebarDivider"></div>}
      </div>

      <div
        className={
          sidebar ? "sidebarList sidebarListActive bookingMenu" : "sidebarList"
        }
        onClick={() => setSidebar(true)}
      >
        <img src="/assets/icons/mybookings.png" alt="mybookings" />
        <p>My bookings</p>

        {sidebar && <div className="profileSidebarDivider"></div>}
      </div>

      <div className="sidebarList">
        <img src="/assets/icons/logout.png" alt="logout" />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
