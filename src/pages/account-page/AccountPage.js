import styles from "./AccountPage.module.css";
import { useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import SidebarPlaylist from "../../components/layout/sidebar-playlist";
import Sidebar from "../../components/layout/sidebar-home/Sidebar";
import { faker } from "@faker-js/faker";
import { UserDataGuest } from "../../api/userData/UserDataGuest";

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
              {/* <label>USER</label> */}
              <div className={styles.labelContainer}>
                <label>Username:</label>
                <label>First Name:</label>
                <label>Last Name:</label>
              </div>
              <div className={styles.infoContainer}>
                <label>jane</label>
                <label>jane</label>
                <label>doe</label>
              </div>
            </div>
            <div className={styles.secondHeaderContainer}>
              {/* <label>EMAIL</label> */}
              <div className={styles.labelContainer}>
                <label>Email:</label>
              </div>
              <div className={styles.infoContainer}>
                <label>mail@mail.de</label>
              </div>
            </div>
            <div className={styles.secondHeaderContainer}>
              {/* <label>PASSWORD</label> */}
              <div className={styles.labelContainer}>
                <label>Current Password:</label>
              </div>
              <div className={styles.infoContainer}>
                <label>sicheresPasswort</label>
              </div>
            </div>
            <div className={styles.secondHeaderContainer}>
              {/* <label>PROFILE SETTINGS | PERSONALISE PROFILE</label> */}
            </div>
            <div className={styles.secondHeaderContainer}>
              {/* <label>USER</label> */}
              <div className={styles.labelContainer}>
                <label>Username:</label>
                <label>First Name:</label>
                <label>Last Name:</label>
              </div>
              <div className={styles.infoContainer}>
                <input></input>
                <input></input>
                <input></input>
              </div>
            </div>
            <div className={styles.secondHeaderContainer}>
              <button>DELETE ACCOUNT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
