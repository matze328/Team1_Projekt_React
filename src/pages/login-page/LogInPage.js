import StandardBtn from "../../components/common/buttons/standard-btn";
import UserContext from "../../components/common/userContext";
import styles from "./LogInPage.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useHistory } from "react-router-dom";

function LogInPage() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const { users } = useContext(UserContext);
  const navigate = useNavigate();
  //   const history = useHistory();

  console.log(users);

  const handleLogin = (e) => {
    e.preventDefault();
    // Hier können Sie die Logik für die Anmeldung implementieren, z.B. API-Aufruf zur Überprüfung der Anmeldeinformationen
    // history.push("/home");
    const founduser = users.find((user) => user.username === username);
    if (founduser) {
      if (password == founduser.password) {
        console.log("Du bist angemeldet.");
        navigate("/home");
        // hier: navigiere zu Homepage
      } else {
        console.log("FEHLER: PASSWORD");
      }
    } else {
      console.log("FEHLER: USER");
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
          placeholder="Username"
          type="username"
          value={username}
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
