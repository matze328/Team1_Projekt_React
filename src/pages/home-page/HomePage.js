// import { useState } from "react";
// import Checkbox from "../../components/common/buttons/checkbox";
// import LoadingDiv from "../../components/common/templates/loading-div";
import styles from "./HomePage.module.css";
import SidebarPlaylist from "../../components/layout/sidebar-playlist";
import Mp3player from "../../components/layout/audioplayer/Mp3player";
import SidebarHome from "../../components/layout/sidebar-home";

function HomePage() {
  // const [stayLoggedIn, setStayLoggedIn] = useState(false);

  // function onClickStayLoggedIn() {
  //   setStayLoggedIn(!stayLoggedIn);
  // }
  return (
    <>
      <div>
        <SidebarHome />
      </div>
      <div className={styles.mp3}>
        <Mp3player />
      </div>
      <div className={styles.playlist}>
        <SidebarPlaylist />
      </div>
    </>
  );
}

export default HomePage;
