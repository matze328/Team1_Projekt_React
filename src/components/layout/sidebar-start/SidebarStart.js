import styles from "./SidebarStart.module.css";
// import { IoStarOutline } from "react-icons/io5";
import { PiRadio } from "react-icons/pi";
// import { faker } from "@faker-js/faker";

function SidebarStart() {
  const redirectToNewsPage = () => {
    window.location.href = "http://localhost:3000/news&blog";
  };
  // const redirectToUserPage = () => {
  //   window.location.href = "http://localhost:3000/user";
  // };
  return (
    <div className={styles.mainContainer}>
      {/* <img
        onClick={redirectToUserPage}
        alt="avatar"
        src={faker.image.avatar()}
        className={styles.iconContainer}
        size={80}
      /> */}
      {/* <div className={styles.iconContainer}>
        <IoStarOutline className={styles.icon} size={80} />
      </div> */}
      <div className={styles.iconContainer}>
        <PiRadio className={styles.icon} size={80} />
      </div>
      <div
        className={styles.iconContainerNews}
        onClick={redirectToNewsPage}
        size={80}
      ></div>
    </div>
  );
}

export default SidebarStart;
