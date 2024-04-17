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
        <div className={styles.div1}>
          <h2>USER</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                // id="username"
                name={UserDataGuest.currentUsername}
                // value={faker.internet.userName()}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={faker.person.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={faker.person.lastName}
                onChange={handleChange}
              />
            </div>
            {/* Profilbild einfügen */}
          </form>
        </div>
        <div className={styles.div2}>
          <h2>PASSWORD</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="currentPassword">Current Password:</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={UserDataGuest.currentPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={UserDataGuest.newPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="repeatNewPassword">Repeat New Password:</label>
              <input
                type="password"
                id="repeatNewPassword"
                name="repeatNewPassword"
                value={UserDataGuest.repeatNewPassword}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className={styles.div3}>
          <h2>PROFILE SETTINGS | PERSONALIZE PROFILE</h2>
          {/* Logik für das Click-Event implementieren */}
        </div>
        <div className={styles.div4}>
          <h2>DELETE ACCOUNT</h2>
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
    </>
  );
}

export default AccountPage;
