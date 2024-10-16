import styles from "./AccountPage.module.css";
import { useState } from "react";
import SidebarHome from "../../components/layout/sidebar-home";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { UserMutations } from "../../api/v1/user";

function AccountPage() {
  // Zustand für Benutzerdaten
  const [values, setValues] = useState({
    userName: "",
    vorName: "",
    nachName: "",
    email: "",
    password: ""
  });

  // Zustand für Bearbeitungsmodus
  const [editMode, setEditMode] = useState(false);

  // Funktion zum Bearbeiten der Eingaben
  function handleChange(e, field) {
    setValues({ ...values, [field]: e.target.value });
  }

  // Funktion zum Umschalten des Bearbeitungsmodus
  function toggleEditMode() {
    setEditMode(!editMode); // toggle between true and false
  }

  // Funktion zum Speichern und Beenden des Bearbeitungsmodus
  async function saveAndCloseEditMode() {
    try {
      const { userName, vorName, nachName, email, password } = values;
      const updatedProfile = await UserMutations.updateUser(userName, vorName, nachName, email, password);
      console.log("Benutzerprofil erfolgreich aktualisiert:", updatedProfile);
      setEditMode(false); // Beenden des Bearbeitungsmodus
    } catch (error) {
      console.error("Fehler beim Aktualisieren des Benutzerprofils:", error);
    }
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarHome />
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.headerContainer}>
              <label className={styles.labelAccount}>ACCOUNT</label>
              <div></div>
              {editMode ? (
                <button
                  className={styles.doneButton}
                  onClick={saveAndCloseEditMode}
                >
                  done
                </button>
              ) : (
                <label onClick={toggleEditMode}>
                  <FiEdit />
                </label>
              )}
            </div>
            <div className={styles.secondHeaderContainer}>
              <div className={styles.labelContainer}>
                <label>USER</label>
                <label>User Name:</label>
                <label>First Name:</label>
                <label>Last Name:</label>
              </div>
              <div className={styles.infoContainer}>
                <br></br>
                {["userName", "vorName", "nachName"].map((field, index) => (
                  <div key={index}>
                    {editMode ? (
                      <input
                        value={values[field]}
                        onChange={(e) => handleChange(e, field)}
                      />
                    ) : (
                      <label>{values[field]}</label>
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
                {["email"].map((field, index) => (
                  <div key={index}>
                    {editMode ? (
                      <input
                        value={values.email}
                        onChange={(e) => handleChange(e, "email")}
                      />
                    ) : (
                      <label>{values.email}</label>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.secondHeaderContainer}>
              <div className={styles.labelContainer}>
                <label>PASSWORD</label>
                <label>Current Password:</label>
              </div>
              <div className={styles.infoContainer}>
                <br></br>
                {["password"].map((field, index) => (
                  <div key={index}>
                    {editMode ? (
                      <input
                        type="password"
                        value={values.password}
                        onChange={(e) => handleChange(e, "password")}
                      />
                    ) : (
                      <label>{values.password.replace(/./g, "*")}</label>
                    )}
                  </div>
                ))}
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
                <label>Repeat Current Password:</label>
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
