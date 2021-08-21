import React, { useState } from "react";
import "./rommbook.css";
import {} from "react-router-dom";
export const Room = () => {
  const [pop, setpop] = useState(false);
  const selectRoom = (e) => {
    sessionStorage.setItem("roomId", e.target.id);
    document.getElementById(e.target.id).style.backgroundColor = "gray";
    document.getElementById(e.target.id).style.color = "white";
    document.querySelector("#show-up").style.display = "block";
  };

  let HostelId = sessionStorage.getItem("hosteId");
  let roomId = sessionStorage.getItem("roomId");
  const showThepop = () => {
    // document.getElementById("pop").style.display = "block";

    // localStorage.setItem("roomId", roomId);
    let obj = {
      HostelId: HostelId,
      roomId: roomId,
    };
    localStorage.setItem("hosteId", JSON.stringify(obj));
    setpop(!pop);
  };
  let btnObj = {
    marginTop: "5px",
    border: "none",
    backgroundColor: "rgb(113,157,230)",
    color: "white",
    display: "none",
    height: "30px",
    width: "200px",
    borderRadius: "20px",
  };

  return (
    <div>
      <div className="room">
        <p>Choose a Floor</p>
        <select name="floor" id="floor">
          <option value="1st floor" selected>
            1st floor
          </option>
          <option value="2nd floor">2nd floor</option>
          <option value="3rd floor">3rd floor</option>
          <option value="4th floor">4th floor</option>
          <option value="5th floor">5th floor</option>
        </select>
        <div className="selectRoom">
          <div
            className="perticularRoomSelected"
            id="1"
            onClick={(e) => selectRoom(e)}
          >
            1
          </div>
          <div
            className="perticularRoomSelected"
            onClick={(e) => selectRoom(e)}
            id="2"
            onClick={(e) => selectRoom(e)}
          >
            2
          </div>
          <div
            className="perticularRoomSelected"
            onClick={(e) => selectRoom(e)}
            id="3"
          >
            3
          </div>
          <div
            className="perticularRoomSelected"
            onClick={(e) => selectRoom(e)}
            id="4"
          >
            4
          </div>
          <div
            className="perticularRoomSelected"
            onClick={(e) => selectRoom(e)}
            id="5"
          >
            5
          </div>
          <div
            className="perticularRoomSelected"
            onClick={(e) => selectRoom(e)}
            id="6"
          >
            6
          </div>
          <div
            className="perticularRoomSelected"
            onClick={(e) => selectRoom(e)}
            id="7"
          >
            7
          </div>
          <div
            className="perticularRoomSelected"
            onClick={(e) => selectRoom(e)}
            id="8"
          >
            8
          </div>
          <div
            className="perticularRoomSelected"
            onClick={(e) => selectRoom(e)}
            id="9"
          >
            9
          </div>
          <div
            className="perticularRoomSelected"
            onClick={(e) => selectRoom(e)}
            id="10"
          >
            10
          </div>
        </div>
        <button id="show-up" style={btnObj} onClick={showThepop}>
          Book Room
        </button>

        {pop ? (
          <div id="pop" className="bookingDone">
            <div className="success">
              <button
                style={{
                  fontSize: "20px",
                  backgroundColor: "rgb(113,158,230)",
                  border: "none",
                  position: "absolute",
                  left: "0",
                  top: "0",
                  borderRadius: "10px",
                }}
                onClick={showThepop}
              >
                X
              </button>

              <p>success</p>
              <p>Your romm has been booked successfully</p>
              <p>Your room Details</p>
              <p>hostel No.{HostelId}</p>
              <p>Room No.: {roomId}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
