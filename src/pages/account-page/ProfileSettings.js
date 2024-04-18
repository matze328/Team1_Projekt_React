import React from "react";
import styles from "./ProfileSettings.module.css";
import { Link } from "react-router-dom";
// import { AccountPage } from "../account-page/AccountPage";

function ProfileSettings() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <label className={styles.ProfileSettingPositionContainer}></label>

        <Link to="/account">
          <button type="button" className={styles.button}>
            Zurück zum ACCOUNT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileSettings;
