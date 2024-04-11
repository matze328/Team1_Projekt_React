import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";


function NavBarRight() {
  

    const redirectToLogin = () => {
      window.location.href = "http://localhost:3000/login"
    };

  return (
    <div className={styles.mainContainer}>
      <StandardBtn text={"Login"} onClick={redirectToLogin} />

      <div className={styles.spacer} />
      <StandardBtn text={"SignUp"} />
    </div>
  );
}

export default NavBarRight;
