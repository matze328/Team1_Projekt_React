import StandardBtn from "../../components/common/buttons/standard-btn";
import UserContext from "../../components/common/userContext/UserContext";
import styles from "./LogInPage.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthQueries } from "../../api/v1/auth";

// import { useHistory } from "react-router-dom";

function LogInPage() {
  const [userName, setUsername] = useState("");
  const { setIsLoggedIn, isLoggedIn } = useContext(UserContext);

  const [password, setPassword] = useState("");
  const { users } = useContext(UserContext);
  const navigate = useNavigate();
  //   const history = useHistory();

  console.log(users);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Hier können Sie die Logik für die Anmeldung implementieren, z.B. API-Aufruf zur Überprüfung der Anmeldeinformationen
    // history.push("/home");
    try {
      const token = await AuthQueries.fetchlogin(userName, password);
      console.log("du bist angemeldet", token);
      setIsLoggedIn(true);

      navigate("/home"); // Navigiere zur Homepage nach erfolgreicher Anmeldung
    } catch (error) {
      console.error("Fehler beim Einloggen:", error);
      // Hier können Sie entsprechende Fehlermeldungen anzeigen
    }
  };

  const handleCancel = () => {
    window.location.href = "http://localhost:3000/";
  };
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <br />
        <label>Username:</label>
        <input
          className={styles.input}
          onSubmit={handleLogin}
          placeholder="UserName"
          type="userName"
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
