import { auth } from "../service/auth";
import { useHistory } from "react-router-dom";

import "./style.css";
import Logo from "../images/logo.png";
import { useState } from "react";

const Navbar = ({ user }) => {
  const [state, setstate] = useState("");
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem("totalUser");
    window.location.href = "/";
  };

  return (
    <header>
      <div className="logo">
        <img className="img1" src={Logo} alt="" />
      </div>
      <nav>
        <div className="profile">
          <img
            src={
              !user
                ? "https://image.flaticon.com/icons/png/512/147/147144.png"
                : user.photoURL
            }
            alt=""
          />
        </div>
        <div className="logoutButton">
          {user ? <button onClick={handleSignOut}>Logout</button> : null}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
