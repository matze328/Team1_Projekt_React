import Mediaplayer from "../../components/layout/mediaplayer";
import styles from "./RadioPage.module.css";
import SidebarStart from "../../components/layout/sidebar-start";
import UserContext from "../../components/common/userContext/UserContext";
import { useContext } from "react";
import SidebarHome from "../../components/layout/sidebar-home";
function RadioPage() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? <SidebarHome /> : <SidebarStart />}
      <div className={styles.mainContainer}>
        <Mediaplayer />
      </div>
    </>
  );
}

export default RadioPage;
