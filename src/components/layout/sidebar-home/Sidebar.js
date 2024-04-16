import styles from "./Sidebar.module.css";
import { IoStarOutline } from "react-icons/io5";
import { PiRadio } from "react-icons/pi";
import { faker } from "@faker-js/faker";
import { MdManageAccounts } from "react-icons/md";

function Sidebar() {
  const redirectToNewsPage = () => {
    window.location.href = "http://localhost:3000/news&blog";
  };
  const redirectToUserPage = () => {
    window.location.href = "http://localhost:3000/user";
  };
  const redirectToFavoritenPage = () => {
    window.location.href = "http://localhost:3000/favoriten";
  };
  const redirectToAccountPage = () => {
    window.location.href = "http://localhost:3000/account";
  };

  return (
    <div className={styles.mainContainer}>
      <img
        onClick={redirectToUserPage}
        alt="avatar"
        src={faker.image.avatar()}
        className={styles.iconContainer}
        size={80}
      />
      <div className={styles.iconContainer} onClick={redirectToFavoritenPage}>
        <IoStarOutline className={styles.icon} size={80} />
      </div>
      <div className={styles.iconContainer}>
        <PiRadio className={styles.icon} size={80} />
      </div>
      <div
        className={styles.iconContainerNews}
        onClick={redirectToNewsPage}
        size={80}
      ></div>
      <div className={styles.iconContainer} onClick={redirectToAccountPage}>
        <MdManageAccounts className={styles.icon} size={80} />
      </div>
    </div>
  );
}

export default Sidebar;
