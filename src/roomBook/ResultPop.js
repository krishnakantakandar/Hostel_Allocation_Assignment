import React from "react";
import "./rommbook.css";

export const ResultPop = () => {
  let HostelId = sessionStorage.getItem("hostelId");
  let roomId = sessionStorage.getItem("roomId");
  return (
    <div>
      <div className="bookingDone">
        <div className="success">
          <p>success</p>
          <p>Your romm has been booked successfully</p>
          <p>Your room Details</p>
          <p>hostel No.{HostelId}</p>
          <p>Room No.: {roomId}</p>
        </div>
      </div>
    </div>
  );
};
