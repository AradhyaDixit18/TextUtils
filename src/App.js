import React, { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/textform";
import Alert from "./Components/Alert";
import AboutUs from "./Components/AboutUs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      document.getElementById("myBox").style.background = "#13466e";
      document.getElementById("myBox").style.color = "white";
      showAlert("Dark Mode Enabled", "Success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("myBox").style.background = "white";
      showAlert("Light Mode Enabled", "Success");
      document.title = "TextUtils-Light Mode";
    }
  };

  return (
    <>
    <Router>
      <Navbar title="Text-Utils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      
        <div className="container my-3">
          <Switch>
            <Route path="/about">
            <AboutUs mode={mode} />
            </Route>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze:"
              />
            </Route>
          </Switch>
        </div>
      
      </Router>
    </>
  );
}

export default App;
