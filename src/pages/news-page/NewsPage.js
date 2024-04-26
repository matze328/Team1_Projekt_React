import styles from "./NewsPage.module.css";
import SidebarStart from "../../components/layout/sidebar-start";
import UserContext from "../../components/common/userContext/UserContext";
import { useContext } from "react";
import SidebarHome from "../../components/layout/sidebar-home";
function NewsPage() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? <SidebarHome /> : <SidebarStart />}
 
    </>
  );
}

export default NewsPage;
