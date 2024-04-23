import { useState } from "react";
import styles from "./UserPage.module.css";
import SidebarHome from "../../components/layout/sidebar-home";

function UserPage() {
  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarHome />
      </div>
    </>
  );
}

export default UserPage;
