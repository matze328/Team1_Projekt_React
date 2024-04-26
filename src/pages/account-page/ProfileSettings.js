import React from "react";
import styles from "./ProfileSettings.module.css";
import { Link } from "react-router-dom";
// import { AccountPage } from "../account-page/AccountPage";

function ProfileSettings() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.headerContainer}>
            <label className={styles.labelProfileSettings}>
              PROFILE SETTINGS | PERSONALIZE PROFILE
            </label>
          </div>
          <div className={styles.secondHeaderContainer}>
            <div className={styles.labelContainer}>
              <label>PROFILE SETTINGS | PERSONALIZE PROFILE</label>
              <label>Color modus:</label>
              <button className={styles.designButton} type="button">
                Light
              </button>
              <button className={styles.designButton} type="button">
                Dark
              </button>
              <button className={styles.designButton} type="button">
                System
              </button>
              <label>Mutrix-Designs:</label>
              <label>Background color | Background picture:</label>
              <button className={styles.designButton} type="button">
                matrix green
              </button>
              <button className={styles.designButton} type="button">
                gray
              </button>
              <button className={styles.designButton} type="button">
                purple
              </button>
              <button className={styles.designButton} type="button">
                mood indigo
              </button>
              <button className={styles.designButton} type="button">
                none
              </button>
              <label>Customized | User defined:</label>
              <div className={styles.infoContainer}>
                <label htmlFor="backgroundColor">Background color:</label>
                <input type="text" id="backgroundColor" defaultValue="System" />
                <label htmlFor="backgroundPicture">Background picture:</label>
                <input
                  type="text"
                  id="backgroundPicture"
                  defaultValue="System"
                />
              </div>
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
      </div>
    </div>
  );
}
export default ProfileSettings;
