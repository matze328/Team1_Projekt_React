import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";
import LoginButton from "./loginButton/LoginButton";
import { useState } from "react";

function NavBarRight() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const redirectToSignUp = () => {
    window.location.href = "http://localhost:3000/signup";
  };
  if (!isLoggedIn) {
    return (
      <div className={styles.mainContainer}>
        <LoginButton
          
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
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
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
    );
  }
}

export default NavBarRight;
