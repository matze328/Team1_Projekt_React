import styles from "./SidebarPlaylist.module.css";

function SidebarPlaylist({ songs, currentSong }) {
  return (
    <div>
      {songs.map((song, index) => (
        <div
        key={song.title}
          className={`${styles.mainContainer} ${
            currentSong === index ? styles.selected : undefined
          }`}
        >
          <div>{song.title}</div>
        </div>
      ))}
    </div>
  );
}

export default SidebarPlaylist;
