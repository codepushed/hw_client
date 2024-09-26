import React from "react";

const Notification = ({ title, desc }) => {
  return (
    <div className="notificationCardContainer">
      <div className="notificationCardImg">
        <img src="/hw_small.png" alt="logo" />
      </div>

      <div className="notificationCardTitle">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Notification;
