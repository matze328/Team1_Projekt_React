import StandardBtn from "../../components/common/buttons/standard-btn";
import UserContext from "../../components/common/userContext/UserContext";
import styles from "./LogInPage.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInPage() {
  const [userName, setUsername] = useState("");
  const { logInUser } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logInUser(userName, password);
    } catch (error) {
      console.error("Fehler beim Einloggen:", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <br />
        <label>E-Mail:</label>
        <input
          className={styles.input}
          onSubmit={handleLogin}
          placeholder="E-Mail"
          type="E-Mail"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password: </label>
        <input
          className={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <div className={styles.button}>
          <StandardBtn text={"Bestätigen"} onClick={handleLogin} />{" "}
          <StandardBtn text={"Abbrechen"} onClick={handleCancel} />
        </div>
        <br />
      </div>
    </div>
  );
}

export default LogInPage;
