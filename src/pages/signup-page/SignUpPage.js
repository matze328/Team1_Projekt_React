import styles from "./SignUpPage.module.css";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import { UserDataGuest } from "../../api/userData/UserDataGuest";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const history = useHistory();

  console.log(UserDataGuest);

  const handleLogin = (e) => {
    e.preventDefault();
    // Hier können Sie die Logik für die Anmeldung implementieren, z.B. API-Aufruf zur Überprüfung der Anmeldeinformationen
    // history.push("/home");
    if (email == UserDataGuest.email && password == UserDataGuest.password) {
      console.log(email, password);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <form onSubmit={handleLogin}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignUpPage;
