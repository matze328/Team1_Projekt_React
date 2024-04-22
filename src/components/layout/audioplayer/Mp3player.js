import "./Mp3player.css";
import AudioPlayer from "react-h5-audio-player";
import { playlistData } from "../../playlist-test/PlaylistTest";

function Mp3player({ selectedSong }) {
  return (
    <div>
      <AudioPlayer
        autoPlay={false}
        src={selectedSong}
        onPlay={(e) => console.log("onPlay")}
      />
    </div>
  );
}

export default Mp3player;
