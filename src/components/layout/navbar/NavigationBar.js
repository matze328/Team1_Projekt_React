import styles from "./NavigationBar.module.css";
import NavBarLeft from "./navbar-left/NavBarLeft";
import NavBarRight from "./navbar-right";
import Searchbar from "./searchbar/index";

function NavigationBar() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);


  return (
    <div className={`${styles.mainContainer} border-bottom-shadow`}>
      <NavBarLeft />
      <Searchbar />
      <div className={styles.spacer} />
      <NavBarRight />
    </div>
  );
}

export default NavigationBar;
