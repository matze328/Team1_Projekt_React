import styles from "./FavoritenPage.module.css";
import SidebarHome from "../../components/layout/sidebar-home";

function FavoritenPage() {
  return (
    <>
      <SidebarHome />
      <div className={styles.mainContainer}>
        <iframe
          width="914"
          height="514"
          src="https://www.youtube.com/embed/H55_66R72eg"
          title="Happy 1st Birthday, Cammy! ^^"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default FavoritenPage;
