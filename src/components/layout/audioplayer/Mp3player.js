import "./Mp3player.module.css";
// import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import chill from "../../../music_test/chill.mp3";

function Mp3player() {
  return (
    <div>
      <AudioPlayer src={chill} onPlay={(e) => console.log("onPlay")} />
    </div>
  );
}

export default Mp3player;
