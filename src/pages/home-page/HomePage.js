import { useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import styles from "./HomePage.module.css";
import SidebarPlaylist from "../../components/layout/sidebar-playlist";

function HomePage() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  function onClickStayLoggedIn() {
    setStayLoggedIn(!stayLoggedIn);
  }
  return (
    <>
      {/* <div className={styles.mainContainer}>
        <div> This is my homepage</div>
        <LoadingDiv />
        <Checkbox isChecked={stayLoggedIn} onClick={onClickStayLoggedIn} />
      </div> */}
      <div className={styles.playlist}>
        <SidebarPlaylist />
      </div>
    </>
  );
}

export default HomePage;
