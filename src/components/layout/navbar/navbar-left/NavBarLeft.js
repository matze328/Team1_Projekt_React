import styles from "./NavBarLeft.module.css";
import logo from "../../../../images/mutrix.jpg";



function NavBarLeft() {
  const redirectToHomepage = () => {
    window.location.href = "http://localhost:3000/"

  };
  return (
    <div className={styles.mainContainer} onClick={redirectToHomepage}>
      <img className={styles.logImg} src={logo} alt="logo" />

      <div className={styles.appName}> MUTRIX</div>
    </div>
  );
}

export default NavBarLeft;
