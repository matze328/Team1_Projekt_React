import styles from "./AccountPage.module.css";
import { useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import SidebarPlaylist from "../../components/layout/sidebar-playlist";
import Sidebar from "../../components/layout/sidebar-home/Sidebar";
import { faker } from "@faker-js/faker";
import { UserDataGuest } from "../../api/userData/UserDataGuest";
// import { ProfileSettings } from "../../pages/account-page/ProfileSettings";
import { Link } from "react-router-dom";

// const currentUsername = username;
// const currentPassword = password;

function AccountPage() {
  function handleSubmit() {}
  function handleChange() {}

  return (
    <>
      <div className={styles.mainContainer}>
        <Sidebar />
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.headerContainer}>
              <label>ACCOUNT</label>
            </div>
            <div className={styles.secondHeaderContainer}>
              <div className={styles.labelContainer}>
                <label>USER</label>
                <label>Username:</label>
                <label>First Name:</label>
                <label>Last Name:</label>
              </div>
              <div className={styles.infoContainer}>
                <br></br>
                <label>jane</label>
                <label>jane</label>
                <label>doe</label>
              </div>
            </div>
            <div className={styles.secondHeaderContainer}>
              <div className={styles.labelContainer}>
                <label>E-MAIL</label>
                <label>E-mail:</label>
              </div>
              <div className={styles.infoContainer}>
                <br></br>
                <label>mail@mail.de</label>
              </div>
            </div>
            <div className={styles.secondHeaderContainer}>
              <div className={styles.labelContainer}>
                <label>PASSWORD</label>
                <label>Current Password:</label>
              </div>
              <div className={styles.infoContainer}>
                <br></br>
                <label>secure password</label>
              </div>
            </div>
            <div className={styles.secondHeaderContainer}>
              <div className={styles.labelContainer}>
                <label> CHANGE PASSWORD</label>
                <label>Current Password:</label>
                <label>New Password:</label>
                <label>Repeat New Password:</label>
              </div>

              <div className={styles.infoContainer}>
                <br></br>
                <input></input>
                <input></input>
                <input></input>
              </div>
            </div>
            <div className={styles.secondHeaderContainer}>
              <label className={styles.ProfileSettingPositionContainer}>
                <Link to="/resetPassword">RESET PASSWORD</Link>
              </label>
            </div>
            <div className={styles.secondHeaderContainer}>
              <label className={styles.ProfileSettingPositionContainer}>
                <Link to="/profileSettings">
                  PROFILE SETTINGS | PERSONALISE PROFILE
                </Link>
              </label>
            </div>
            <div className={styles.secondHeaderContainer}>
              <div className={styles.labelContainer}>
                <label>DELETE ACCOUNT</label>
                <label>Username:</label>
                <label>Current Password:</label>
                <label>Repeat Current Cassword:</label>
              </div>
              <div className={styles.infoContainer}>
                <br></br>
                <input></input>
                <input></input>
                <input></input>
              </div>
            </div>
            <div className={styles.secondHeaderContainer}>
              <button className={styles.deleteAccountButton}>
                DELETE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
