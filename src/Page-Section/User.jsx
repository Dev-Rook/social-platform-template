import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/Post/Post.module.css";

import useAxios from "../Hooks/useAxios";

const User = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const { data, loading, error } = useAxios(url);

  return (
    <>
      {data &&
        data.slice(0, 10).map((user) => {
          return (
            <div className={Styles.Card} key={user.id}>
              <div className={Styles.Header}>
                <div className={Styles.Logo_Container}>
                  <img src="" alt="" className={Styles.Logo} />
                </div>

                <p className={Styles.Small_Text}>
                  {user?.username}
                </p>
              </div>
              <div className={Styles.Image_Container}></div>
              <div className={Styles.Footer}>
                {user?.website}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default User;
