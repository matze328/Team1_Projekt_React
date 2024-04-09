import styles from "./NavBarLeft.module.css";
import logo from "../../../../images/mutrix.jpg";

function NavBarLeft() {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logImg} src={logo} alt="logo" />

      <div className={styles.appName}> MUTRIX</div>
    </div>
  );
}

export default NavBarLeft;
