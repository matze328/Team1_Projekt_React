import styles from "./FooterLeft.module.css";
import logo from "../../../../images/mutrix.jpg";

function FooterLeft() {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logImg} src={logo} alt="logo" />

      <div className={styles.appName}> MUTRIX</div>
    </div>
  );
}

export default FooterLeft;
