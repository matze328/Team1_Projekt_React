import styles from "./SignUpPage.module.css";
// import { useHistory } from "react-router-dom";
import { UserDataGuest } from "../../api/userData/UserDataGuest";

import React, { useState } from "react";

function SignUpPage({ history }) {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleConfirm = () => {
    window.location.href = "http://localhost:3000/user";
  };

  const handleCancel = () => {
    window.location.href = "http://localhost:3000/";
  };

  return (
    <div className={styles.outerContainer}>
    <div className={styles.innerContainer}>
    <div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Vorname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Nachname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="email" placeholder="E-Mail Adresse" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleConfirm}>Bestätigen</button>
      <button onClick={handleCancel}>Abbrechen</button>
    </div>
    </div>
    </div>
  );
}
export default SignUpPage;
