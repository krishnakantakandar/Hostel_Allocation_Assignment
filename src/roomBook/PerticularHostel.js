import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./rommbook.css";

export const PerticularHostel = () => {
  let gender = sessionStorage.getItem("gender");
  const history = useHistory();
  // console.log(props, "hi data");
  // const [HostelId, setHostelId] = useState("");
  // if (HostelId != "") localStorage.setItem("HostelId", HostelId);
  const setHostelId = (id) => {
    sessionStorage.setItem("hosteId", id);
    history.push("/Room");
  };
  let g = "";
  if (gender == "boy") g = "b";
  else g = "g";
  return (
    <>
      <div className="perticularHos">
        <div> Choose a hostel</div>
        <div className="blocks">
          <div
            className="block-de"
            onClick={() => setHostelId(`${g}1`)}
          >{`${g}1`}</div>
          <div
            className="block-de"
            onClick={() => setHostelId(`${g}2`)}
          >{`${g}2`}</div>
          <div
            className="block-de"
            onClick={() => setHostelId(`${g}3`)}
          >{`${g}3`}</div>
          <div
            className="block-de"
            onClick={() => setHostelId(`${g}4`)}
          >{`${g}4`}</div>
          <div
            className="block-de"
            onClick={() => setHostelId(`${g}5`)}
          >{`${g}5`}</div>
          <div
            className="block-de"
            onClick={() => setHostelId(`${g}6`)}
          >{`${g}6`}</div>
        </div>
      </div>
    </>
  );
};
