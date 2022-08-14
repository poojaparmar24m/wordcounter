import "./App.css";
import About from "./componants/About";
import Navbar from "./componants/Navbar";
import TextForm from "./componants/TextForm";
import React, { useState } from "react";
import Alert from "./componants/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Switch from "react-router";

function App() {
  const [darkMode, setdarkMode] = useState("light");
  // const [darkMode, setdarkMode] = useState(function () {

  //   if (darkMode==='light') {
  //       darkMode('light');
  //    }
  //   else if (darkMode==='dark') {
  //   darkMode('dark');
  //   }
  //   else if(darkMode==='#1f8c5d'){
  //     darkMode('#1f8c5d');
  //   }
  //   else if(darkMode==='#3a8a8a'){
  //     darkMode('#3a8a8a');
  //   }
  //   else{
  //     darkMode('#c1475c');
  //   }
  // });
  const [alert, setAlert] = useState(null);

  const removeClass = () => {
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("#0f1f37");
    // document.body.classList.remove("bg-light");
  };
  const toggleSwitch = (cls) => {
    removeClass();
    if (darkMode === "light") {
      setdarkMode("dark");

      document.body.classList.add("bg-" + cls);
      document.body.style.backgroundColor = "#0f1f37";
      showAlert("Dark Mode Enable", "success");
      // document.title='Dark Mode';
      // setTimeout(() => {
      //   document.title='Textutilse is an Amazing';
      // },3000);
      // setTimeout(() => {
      //   document.title='install Textutilse';
      // },1500);
    } else {
      setdarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enable", "success");

      // document.title='Light Mode';
    }
  };

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          about="About"
          mode={darkMode}
          toggleMode={toggleSwitch}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Textutils- Word Counter/Character counter"
                mode={darkMode}
                showalert={showAlert}
              />
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={<About mode={darkMode} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
