import styles from "./NavBarLeft.module.css";
import logo from "../../../../images/mutrix.jpg";
import UserContext from "../../../common/userContext/UserContext";
import { useEffect, useContext } from "react";

function NavBarLeft() {
  const { user, isLoggedIn } = useContext(UserContext);

  const redirectToStart = () => {
    window.location.href = "http://localhost:3000/";
  };
  //  useEffect(() => {
  //   if (user && user.length > 0) {
  //     console.log(
  //       "User IDs:",
  //       user.map((userData) => userData.userId)
  //     );
  //   } else {
  //     console.log("Keine Benutzerdaten verfügbar.");
  //   }
  // }, [user]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Setzen Sie den isLoggedIn-Status basierend auf dem Vorhandensein des Tokens
      // Hier können Sie auch den Token decodieren und den Benutzer authentifizieren
    }
  }, []);
  const redirectToHomepage = () => {
    window.location.href = "http://localhost:3000/home";
  };

  if (!isLoggedIn) {
    return (
      <div className={styles.mainContainer} onClick={redirectToStart}>
        <img className={styles.logImg} src={logo} alt="logo" />

        <div className={styles.appName}> MUTRIX</div>
      </div>
    );
  } else {
    return (
      <div className={styles.mainContainer} onClick={redirectToHomepage}>
        <img className={styles.logImg} src={logo} alt="logo" />

        <div className={styles.appName}> MUTRIX</div>
      </div>
    );
  }
}
export default NavBarLeft;
