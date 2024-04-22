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
import { FiEdit } from "react-icons/fi";

// const currentUsername = username;
// const currentPassword = password;

function handleSubmit() {}
function AccountPage() {
  // Zustand für Bearbeitungsmodus
  const [editMode, setEditMode] = useState({
    username: false,
    email: false,
    password: false,
  });
  // Anfangswerte
  const [values, setValues] = useState({
    username: "jane",
    firstName: "Jane",
    lastName: "Doe",
    email: "mail@mail.de",
    password: "sicheres Passwort",
  });

  // Funktion zum Bearbeiten der Eingaben
  function handleChange(e, field) {
    setValues({ ...values, [field]: e.target.value });
  }

  // Funktion zum Umschalten des Bearbeitungsmodus
  function toggleEditMode(field) {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  }

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
                {["username", "firstName", "lastName"].map((field, index) => (
                  <div key={index}>
                    {editMode[field] ? (
                      <input
                        value={values[field]}
                        onChange={(e) => handleChange(e, field)}
                        onBlur={() => toggleEditMode(field)}
                      />
                    ) : (
                      <label onClick={() => toggleEditMode(field)}>
                        {values[field]}
                        <FiEdit />
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.secondHeaderContainer}>
              <div className={styles.labelContainer}>
                <label>E-MAIL</label>
                <label>E-mail:</label>
              </div>
              <div className={styles.infoContainer}>
                <br></br>
                {editMode.email ? (
                  <input
                    value={values.email}
                    onChange={(e) => handleChange(e, "email")}
                    onBlur={() => toggleEditMode("email")}
                  />
                ) : (
                  <label onClick={() => toggleEditMode("email")}>
                    {values.email}
                    <FiEdit />
                  </label>
                )}
              </div>
            </div>
            <div className={styles.secondHeaderContainer}>
              <div className={styles.labelContainer}>
                <label>PASSWORD</label>
                <label>Current Password:</label>
              </div>
              <div className={styles.infoContainer}>
                <br></br>
                {editMode.password ? (
                  <input
                    type="password"
                    value={values.password}
                    onChange={(e) => handleChange(e, "password")}
                    onBlur={() => toggleEditMode("password")}
                  />
                ) : (
                  <label onClick={() => toggleEditMode("password")}>
                    {values.password.replace(/./g, "*")}
                    <FiEdit />
                  </label>
                )}
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
