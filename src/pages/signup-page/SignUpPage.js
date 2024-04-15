import StandardBtn from "../../components/common/buttons/standard-btn";
import styles from "./SignUpPage.module.css";

import React, { useState } from "react";

function SignUpPage() {
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
     <label>Bitte gib hier dein Username an </label>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Bitte gib hier dein Vornamen an </label>
      <input type="text" placeholder="Vorname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />  
       <label>Bitte gib hier dein Nachname an </label>
      <input type="text" placeholder="Nachname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <label>Bitte gib hier deine E-Mail an </label>
      <input type="email" placeholder="E-Mail Adresse" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Bitte gib hier dein Passwort an </label>
      <input type="password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label>Bitte bestätige dein Passwort nochmal </label>
      <input type="password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className={styles.button} >
      <StandardBtn text={"Bestätigen"}onClick={handleConfirm} />
      <StandardBtn text={"Abbrechen"}onClick={handleCancel} />
      </div>
    </div>
    </div>
    
  );
}
export default SignUpPage;
