import styles from "./FavoritenPage.module.css";
import { useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import SidebarPlaylist from "../../components/layout/sidebar-playlist";

function FavoritenPage() {
  return <div className={styles.mainContainer}> This is my FavoritenPage</div>;
}

// function FavoritenPage() {
//   const [stayLoggedIn, setStayLoggedIn] = useState(false);

//   function onClickStayLoggedIn() {
//     setStayLoggedIn(!stayLoggedIn);
//   }
//   return (
//     <>
//       {/* <div className={styles.mainContainer}>
//         <div> This is my homepage</div>
//         <LoadingDiv />
//         <Checkbox isChecked={stayLoggedIn} onClick={onClickStayLoggedIn} />
//       </div> */}
//       <div className={styles.playlist}>
//         <SidebarPlaylist />
//       </div>
//     </>
//   );
// }

export default FavoritenPage;
