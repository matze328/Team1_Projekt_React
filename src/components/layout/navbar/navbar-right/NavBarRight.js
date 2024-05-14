import StandardBtn from "../../../common/buttons/standard-btn";
import UserContext from "../../../common/userContext/UserContext";
import styles from "./NavBarRight.module.css";
import LoginButton from "./loginButton/LoginButton";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function NavBarRight() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const redirectToSignUp = () => {
    navigate("/signup");
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
