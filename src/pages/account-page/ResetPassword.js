import React from "react";
import styles from "./ResetPassword.module.css";
import { Link } from "react-router-dom";
// import { AccountPage } from "../account-page/AccountPage";

function ProfileSettings() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.secondHeaderContainer}>
          <div className={styles.labelContainer}>
            <label>RESET PASSWORD</label>
            <label>Username:</label>
            <label>Current Password:</label>
          </div>
          <div className={styles.infoContainer}>
            <br></br>
            <br></br>
            <input></input>

            <input></input>
          </div>
        </div>
        <div className={styles.secondHeaderContainer}>
          <button type="button" className={styles.resetButton}>
            RESET PASSWORD
          </button>
          <br></br>
        </div>
        <div className={styles.secondHeaderContainer}>
          <label className={styles.ProfileSettingPositionContainer}></label>
          <Link to="/account">
            <button type="button" className={styles.button}>
              Zurück zum ACCOUNT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
