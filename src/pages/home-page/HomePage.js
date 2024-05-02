import { useState, useContext } from "react";
import styles from "./HomePage.module.css";
import SidebarPlaylist from "../../components/layout/sidebar-playlist";
import Mp3player from "../../components/layout/audioplayer/Mp3player";
import SidebarHome from "../../components/layout/sidebar-home";
import { playlistData } from "../../components/playlist-test/PlaylistTest";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import Tracker from "../../components/songtracker";
import UserContext from "../../components/common/userContext/UserContext";
import StartPage from "../start-page";

function HomePage() {
  const [selectedSong, setSelectedSong] = useState(0);
  const { user } = useContext(UserContext);

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
  if (!user) return <StartPage />;
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

export default HomePage;
