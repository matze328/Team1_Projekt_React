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
          <div className={styles.labelContainer}>
            <label>USER</label>
            <label>Username:</label>
            <label>First Name:</label>
            <label>Last Name:</label>
            <label>PASSWORD</label>
            <label>Current Password:</label>

            {/* Profilbild einfügen */}
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.userInfo}>
              <label>jane</label>
              <label>jane</label>
              <label>doe</label>
            </div>
            <div className={styles.passwordInfo}>
              <label>testing</label>
            </div>
          </div>
          <div className={styles.settingsContainer}>
            <label>PROFILE SETTINGS | PERSONALIZE PROFILE</label>
            {/* Logik für das Click-Event implementieren */}
          </div>
          <div className={styles.deleteContainer}>
            <label>DELETE ACCOUNT</label>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="deleteUsername">Username:</label>
                <input
                  type="text"
                  id="deleteUsername"
                  name="deleteUsername"
                  value={UserDataGuest.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="deleteCurrentPassword">Current Password:</label>
                <input
                  type="password"
                  id="deleteCurrentPassword"
                  name="deleteCurrentPassword"
                  value={UserDataGuest.currentPassword}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="deleteRepeatCurrentPassword">
                  Repeat Current Password:
                </label>
                <input
                  type="password"
                  id="deleteRepeatCurrentPassword"
                  name="deleteRepeatCurrentPassword"
                  value={UserDataGuest.currentPassword}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">DELETE ACCOUNT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
