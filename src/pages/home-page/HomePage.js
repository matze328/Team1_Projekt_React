import { useState, useContext, useEffect } from "react";
import styles from "./HomePage.module.css";
import SidebarPlaylist from "../../components/layout/sidebar-playlist";
import Mp3player from "../../components/layout/audioplayer/Mp3player";
import SidebarHome from "../../components/layout/sidebar-home";
import { playlistData } from "../../components/playlist-test/PlaylistTest";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import Tracker from "../../components/songtracker";
import UserContext from "../../components/common/userContext/UserContext";
import { Navigate } from "react-router-dom";

function HomePage() {
  const [selectedSong, setSelectedSong] = useState(0);
  const { user, isLoggedIn } = useContext(UserContext);

  console.log("User:", user);

  // Effekt, um die User-IDs beim Laden der Homepage zu protokollieren
  useEffect(() => {
    if (user && user.length > 0) {
      console.log(
        "User IDs:",
        user.map((userData) => userData.userId)
      );
    } else {
      console.log("Keine Benutzerdaten verfügbar.");
    }
  }, [user]);

// Effekt zum Überprüfen des Tokens beim Laden der Homepage
// useEffect(() => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     // Setzen Sie den isLoggedIn-Status basierend auf dem Vorhandensein des Tokens
//     // Hier können Sie auch den Token decodieren und den Benutzer authentifizieren
//   }
// }, []);





  function OnclickNext() {
    if (selectedSong < playlistData.length - 1) {
      setSelectedSong(selectedSong + 1);
    } else {
      setSelectedSong(0);
    }
  }
  function OnclickPrevious() {
    if (selectedSong > 0) {
      setSelectedSong(selectedSong - 1);
    } else {
      setSelectedSong(playlistData.length - 1);
    }
  }

  if (!isLoggedIn) {
    return (
      <div>
        <Navigate to={"/login"} />
      </div>
    );
  } else {
    return (
      <>
        <div>
          <SidebarHome />
        </div>
        <div className={styles.mp3}>
          <Tracker currentSong={playlistData[selectedSong].title} />
          <Mp3player selectedSong={playlistData[selectedSong].src} />
        </div>
        <div className={styles.btn}>
          <MdSkipPrevious
            className={styles.prevnext}
            size={32}
            onClick={OnclickPrevious}
          />
          <MdSkipNext
            className={styles.prevnext}
            size={32}
            onClick={OnclickNext}
          />
        </div>
        <div className={styles.playlist}>
          <SidebarPlaylist songs={playlistData} currentSong={selectedSong} />
        </div>
      </>
    );
  }
}

export default HomePage;
