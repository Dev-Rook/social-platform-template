import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styles from "./App.module.css";


// Component Import Start
import Navbar from "./Components/Main/Navbar"
import CreatePost from "./Components/Main/CreatePost"
import Mode from "./Components/Main/Mode"
import Footer from "./Components/Main/Footer"
// Component Import End

// Pages Import Start
import Landing from "./Pages/Landing"
import Login from "./Pages/Login"
import Error from "./Pages/Error"
// Pages Import End

const App = () => {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"Login"} element={<Login />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
