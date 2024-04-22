import styles from "./Tracker.module.css";
import { useState } from "react";
import { playlistData } from "../playlist-test/PlaylistTest";

function Tracker({ currentSong }) {
  return (
    <div className={styles.mainContainer}>
      <div>PLAYING: {currentSong}</div>
    </div>
  );
}

export default Tracker;
