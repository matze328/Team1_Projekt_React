import SidebarPlaylist from "../sidebar-playlist";
import styles from "./Content.module.css";

function Content({ children }) {
  return  (<div className={styles.mainContainer}>{children}
     <div className={styles.playlist}> <SidebarPlaylist />  </div> 
    </div>
);
}

export default Content;
