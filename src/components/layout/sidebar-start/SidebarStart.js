import styles from "./SidebarStart.module.css";
import { PiRadio } from "react-icons/pi";

function SidebarStart() {
  const redirectToNewsPage = () => {
    window.location.href = "http://localhost:3000/news&blog";
  };
  const redirectToRadioPage = () => {
    window.location.href = "http://localhost:3000/radio";
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.iconContainer}>
        <PiRadio
          className={styles.icon}
          onClick={redirectToRadioPage}
          size={80}
        />
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
