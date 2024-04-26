import styles from "./Mediaplayer.module.css";
import ReactPlayer from "react-player";

function Mediaplayer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mediaplayer}>
        <ReactPlayer
          url="https://soundcloud.com/royaltyfreemusic-nocopyrightmusic/sets/creative-commons-music?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.mediaplayer}>
        <ReactPlayer
          url="https://soundcloud.com/royaltyfreemusic-nocopyrightmusic/sets/creative-commons-music-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.mediaplayer}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/u8qal-5yQGg?list=PLHOciPo-RQU67JIOAIN1e5v3RITDdhpj7"
          title="Background Music For Videos VLOG YouTube -  Epic Cinematic Inspiring Motivational [FREE DOWNLOAD]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.mediaplayer}>
        <ReactPlayer
          url="https://soundcloud.com/royaltyfreemusic-nocopyrightmusic/sets/jazz-blues?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.mediaplayer}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/u8qal-5yQGg?list=PLHOciPo-RQU67JIOAIN1e5v3RITDdhpj7"
          title="Background Music For Videos VLOG YouTube -  Epic Cinematic Inspiring Motivational [FREE DOWNLOAD]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Mediaplayer;
