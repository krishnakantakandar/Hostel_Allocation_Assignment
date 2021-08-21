import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { HostelChoose } from "./roomBook/HostelChoose";
import { Login } from "./loginMethod/Login";
import { PerticularHostel } from "./roomBook/PerticularHostel";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Room } from "./roomBook/Room";
import Navbar from "./Navigation/NavBar";

function App() {
  const user = JSON.parse(localStorage.getItem("totalUser"));
  console.log("hsggvkxbjsgfyv", user);
  const styleObj = {
    position: "absolute",
    top: 0,
  };
  const [logged, setlogged] = useState(false);

  const getData = (val) => {
    // do not forget to bind getData in constructor
    if (val == "yes") setlogged(true);

    console.log(val);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} style={styleObj}></Navbar>
        <Switch>
          <Route exact path="/">
            <Login sendData={getData} />
          </Route>

          <Route exact path="/HostelChoose" component={HostelChoose}></Route>
          <Route
            exact
            path="/PerticularHostel"
            component={PerticularHostel}
          ></Route>
          <Route exact path="/Room" component={Room}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
