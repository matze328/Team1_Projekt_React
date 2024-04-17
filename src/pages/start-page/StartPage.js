import { useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import styles from "./StartPage.module.css";
import SidebarPlaylist from "../../components/layout/sidebar-playlist";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import chill from "../../music_test/chill.mp3";

function StartPage() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  function onClickStayLoggedIn() {
    setStayLoggedIn(!stayLoggedIn);
  }
  return (
    <>
      {/* <div className={styles.mainContainer}>
        <div> This is my homepage</div>
        <LoadingDiv />
        <Checkbox isChecked={stayLoggedIn} onClick={onClickStayLoggedIn} />
      </div> */}
      <div className={styles.playlist}>
        <SidebarPlaylist />
      </div>
      <AudioPlayer autoPlay src={chill} onPlay={(e) => console.log("onPlay")} />
      <ReactAudioPlayer src={chill} autoPlay controls />
      <ReactPlayer url="https://soundcloud.com/balyntmusic/balynt-chase-the-sundown-buy-free-download-no-copyright-petit-biscuit-style?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
    </>
  );
}

export default StartPage;
