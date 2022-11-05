import React from "react";
import Styles from "../Styles/Page-Styles/Landing/Landing.module.css"

import User from "../Page-Section/User";

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <div className={Styles.Content_Column}>
        <User />
      </div>

      <div className={Styles.Utility_Column}></div>
    </div>
  );
};

export default Landing;
