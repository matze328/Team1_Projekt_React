import { useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import styles from "./UserPage.module.css";
import SidebarPlaylist from "../../components/layout/sidebar-playlist";
import Sidebar from "../../components/layout/sidebar-home/Sidebar";

function UserPage() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  function onClickStayLoggedIn() {
    setStayLoggedIn(!stayLoggedIn);
  }
  return (
    <>
      <div className={styles.mainContainer}>
        <Sidebar />
      </div>
      <div className={styles.playlist}>
        <SidebarPlaylist />
      </div>
    </>
  );
}

export default UserPage;
