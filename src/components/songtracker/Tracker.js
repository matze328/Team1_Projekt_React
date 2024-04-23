import styles from "./Tracker.module.css";

function Tracker({ currentSong }) {
  return (
    <div className={styles.mainContainer}>
      <div>PLAYING: {currentSong}</div>
    </div>
  );
}

export default Tracker;
