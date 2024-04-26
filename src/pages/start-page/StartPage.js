import styles from "./StartPage.module.css";
import SidebarStart from "../../components/layout/sidebar-start";
import { TextAnim } from "text-animations-react";

function StartPage() {
  return (
    <>
      <SidebarStart />
      <div className={styles.mainContainer}>
        <div className={styles.mutrix}>
          <TextAnim
            name="MUTRIX"
            size={6}
            type="reveal"
            count="infinite"
            duration={10}
          />
        </div>
      </div>
    </>
  );
}

export default StartPage;
