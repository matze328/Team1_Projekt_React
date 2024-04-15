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
  return (
    <div className={styles.mainContainer}>
      <form onSubmit={handleLogin}>
        <label>Username: </label>
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <StandardBtn text={"bestätigen"} onClick={handleLogin} />{" "}
      </form>
    </div>
  );
}

export default LogInPage;
