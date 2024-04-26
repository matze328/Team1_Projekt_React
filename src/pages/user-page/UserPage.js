import { useContext } from "react";
import styles from "./UserPage.module.css";
import SidebarHome from "../../components/layout/sidebar-home";
import UserContext from "../../components/common/userContext/UserContext";

function UserPage() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div>
        <SidebarHome />
        <div className={styles.mainContainer}>
          {user ? (
            <>
              <h1>Willkommen, {user.vorName}!</h1>
              <p>
                Dies ist die Benutzerseite von {user.vorName}. Hier können Sie
                Ihre persönlichen Informationen anzeigen.
              </p>
            </>
          ) : (
            <p>Lade Benutzerdaten...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default UserPage;
