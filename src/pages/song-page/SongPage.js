
import styles from "./SongPage.module.css";
import SidebarStart from "../../components/layout/sidebar-start";
import UserContext from "../../components/common/userContext/UserContext";
import { useContext } from "react";
import SidebarHome from "../../components/layout/sidebar-home";
function SongPage() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? <SidebarHome /> : <SidebarStart />}
      <div className={styles.mainContainer}>
      <h1>Song-Page</h1>
      </div>
    </>
  );
}

export default SongPage;
