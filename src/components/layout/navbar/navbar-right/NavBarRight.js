import StandardBtn from "../../../common/buttons/standard-btn";
import UserContext from "../../../common/userContext/UserContext";
import styles from "./NavBarRight.module.css";
import LoginButton from "./loginButton/LoginButton";
import { useState,useContext,useEffect } from "react";

function NavBarRight() {
  const { user, isLoggedIn } = useContext(UserContext);

  const redirectToSignUp = () => {
    window.location.href = "http://localhost:3000/signup";
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


  if (!isLoggedIn) {
    return (
      <div className={styles.mainContainer}>
        <LoginButton
          
          isLoggedIn={isLoggedIn}
          // setIsLoggedIn={setIsLoggedIn}
        />
        <div className={styles.spacer} />
        <StandardBtn text={"SignUp"} onClick={redirectToSignUp}  />
      </div>
    );
  } else {
    return (
      <div className={styles.mainContainer}>
        <LoginButton
        
          isLoggedIn={isLoggedIn}
          // setIsLoggedIn={setIsLoggedIn}
        />
      </div>
    );
  }
}

export default NavBarRight;
