import styles from "./SidebarPlaylist.module.css";
import { IoStarOutline } from "react-icons/io5";
import { PiRadio } from "react-icons/pi";
import { faker } from "@faker-js/faker";

function SidebarPlaylist() {
  return (
    <div className={styles.mainContainer}>
      <img
        alt="avatar"
        src={faker.image.avatar()}
        className={styles.iconContainer}
        size={80}
      />
      <div className={styles.iconContainer}>
        <IoStarOutline className={styles.icon} size={80} />
      </div>
      <div className={styles.iconContainer}>
        <PiRadio className={styles.icon} size={80} />
      </div>
      <div className={styles.iconContainerNews} size={80}></div>
    </div>
  );
}

export default SidebarPlaylist;
