import Mediaplayer from "../../components/layout/mediaplayer";
import styles from "./RadioPage.module.css";
import SidebarStart from "../../components/layout/sidebar-start";

function RadioPage() {
  return (
    <>
      <SidebarStart />
      <div className={styles.mainContainer}>
        {/* Abhängigkeit useContext: LoggedIn SidebarHome, LoggedOut SidebarStart */}
        <Mediaplayer />
      </div>
    </>
  );
}

export default RadioPage;
