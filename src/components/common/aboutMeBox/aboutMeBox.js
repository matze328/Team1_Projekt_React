import styles from "./aboutMeBox.module.css";
import React from "react";
import profileImage from "../../../mediathek/images/mutrix.jpg";

function AboutMeBox({ vorname, hobbies, persoInfo }) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1>About Me</h1>
        <p>Willkommen auf unsere "About Us" Seite!</p>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
        <p>Vorname: {vorname} </p>
        <p>Über mich: {persoInfo} </p>
        <p>Hobbies: {hobbies}</p>
      </div>
    </div>
  );
}

export default AboutMeBox;
