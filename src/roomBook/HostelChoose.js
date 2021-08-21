import React, { useState, useEffect } from "react";
import "./rommbook.css";
import { PerticularHostel } from "./PerticularHostel";
import { useHistory } from "react-router-dom";
import Navbar from "../Navigation/NavBar";

export const HostelChoose = () => {
  // const [gender, setgender] = useState("");
  const history = useHistory();
  const selectGender = (gender) => {
    sessionStorage.setItem("gender", gender);
    history.push("/PerticularHostel");
  };

  let obj = JSON.parse(localStorage.getItem("hostelId"));

  let HostelId = sessionStorage.getItem("hosteId");
  let roomId = sessionStorage.getItem("roomId");

  if (localStorage.getItem("hostelId")) {
    return (
      <>
        <div id="pop" className="bookingDoneAlready">
          <div className="successAlready">
            <h1>Wellcome {localStorage.getItem("userData")}</h1>
            <div> Your room is has been already booked successfully </div>
            <div>Your room details are as follows:</div>
            <div>
              {" "}
              hostel No.
              {obj.HostelId}
            </div>
            <div> Room No.: {obj.roomId}</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <p>Choose Your Hostel</p>
      <div className="hostel-choose">
        <div className="boys-hostels" onClick={() => selectGender("boy")}>
          Boys
        </div>
        <div className="girls-hostels" onClick={() => selectGender("girl")}>
          girls
        </div>
      </div>
    </>
  );
};
