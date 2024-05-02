import StandardBtn from "../../../common/buttons/standard-btn";
import UserContext from "../../../common/userContext/UserContext";
import styles from "./NavBarRight.module.css";
import LoginButton from "./loginButton/LoginButton";
import { useContext } from "react";

function NavBarRight() {
  const { user } = useContext(UserContext);

  const redirectToSignUp = () => {
    window.location.href = "http://localhost:3000/signup";
  };

  if (!user) {
    return (
      <div className={styles.mainContainer}>
        <LoginButton isLoggedIn={false} />
        <div className={styles.spacer} />
        <StandardBtn text={"SignUp"} onClick={redirectToSignUp} />
      </div>
    );
  } else {
    return (
      <div className={styles.mainContainer}>
        <LoginButton isLoggedIn={true} />
      </div>
    );
  }
}

export default NavBarRight;
