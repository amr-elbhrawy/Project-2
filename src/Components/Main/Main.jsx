import React from "react";
import styles from "./style.module.css";

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <div className={styles.mainText}>
          <h1>
            Find, book and rent a car <span> Easily</span>
          </h1>
          <p>
            Get a car wherever and whenever you need it with your iOS and
            Android device.
          </p>
        </div>
        <div className={styles.backGround}>
        <div className={styles.overlay}></div> 
          <img src="/imgs/landing-page/car 2 1.png" alt="Car rental" />
        </div>
      </div>
    </div>
  );
};

export default Main;

