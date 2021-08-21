import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../service/auth";
import { facebook } from "../configs/AuthMethod";
import { github } from "../configs/AuthMethod";
// import SignInScreen from "../configs/Sing-in";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./login.css";

export const Login = (props) => {
  const [state, setstate] = useState("");

  const history = useHistory();
  const handleOnClick = async (provider) => {
    const res = await auth(provider);
    console.log(res);
    localStorage.setItem("totalUser", JSON.stringify(res));
    localStorage.setItem("pic", res.photoURL);
    localStorage.setItem("userData", res.displayName);
    demoMethod("yes");
    history.push("/HostelChoose");
    setstate("render");
  };

  const demoMethod = (value) => {
    props.sendData(value);
  };

  return (
    <>
      <div className="login-det">
        <div>
          <p>Hostel Allocation</p>
          <p>Please sign-in</p>
        </div>
        <button className="google" onClick={() => handleOnClick(github)}>
          <img src="images/search.png"></img>
          Sign in with Google
        </button>
        <button className="facebook" onClick={() => handleOnClick(facebook)}>
          <img src="images/facebook.png"></img>Sign with facebook
        </button>
        {/* <SignInScreen></SignInScreen> */}
      </div>
    </>
  );
};
