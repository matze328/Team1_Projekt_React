import StandardBtn from "../../components/common/buttons/standard-btn";
import styles from "./SignUpPage.module.css";
import React, { useState } from "react";
import AuthMutations from "../../api/v1/auth/AuthMutations";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [newUserName, setNewUserName] = useState("");
  const [newVorName, setNewVorName] = useState("");
  const [newNachName, setNewNachName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleSignup = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwörter stimmen nicht überein");
      return;
    }
    try {
      const profile = await AuthMutations.createUser(
        newUserName,
        newVorName,
        newNachName,
        newEmail,
        newPassword
      );
      console.log("Benutzer erfolgreich registriert:", profile);
      navigate("/login"); // Weiterleitung zur Loginseite
    } catch (error) {
      console.error("Fehler beim Registrieren:", error);
      // Hier können Sie eine Fehlermeldung anzeigen
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <br />
        <label>Bitte gib hier dein Username an </label>
        <input
          className={styles.input}
          type="text"
          placeholder="UserName"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <label>Bitte gib hier dein Vornamen an </label>
        <input
          className={styles.input}
          type="text"
          placeholder="Vorname"
          value={newVorName}
          onChange={(e) => setNewVorName(e.target.value)}
        />
        <label>Bitte gib hier dein Nachname an </label>
        <input
          className={styles.input}
          type="text"
          placeholder="Nachname"
          value={newNachName}
          onChange={(e) => setNewNachName(e.target.value)}
        />
        <label>Bitte gib hier deine E-Mail an </label>
        <input
          className={styles.input}
          type="email"
          placeholder="E-Mail Adresse"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <label>Bitte gib hier dein Passwort an </label>
        <input
          className={styles.input}
          type="password"
          placeholder="Passwort"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label>Bitte bestätige dein Passwort nochmal </label>
        <input
          className={styles.input}
          type="password"
          placeholder="Passwort wiederholen"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <br />
        <div className={styles.button}>
          <StandardBtn text={"Bestätigen"} onClick={handleSignup} />
          <StandardBtn text={"Abbrechen"} onClick={handleCancel} />
        </div>
        <br />
      </div>
    </div>
  );
}
export default SignUpPage;
