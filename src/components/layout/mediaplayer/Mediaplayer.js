import React, { useEffect } from "react";
import styles from "./Mediaplayer.module.css";
import ReactPlayer from "react-player";
import $ from 'jquery';
function Mediaplayer() {
  useEffect(() => {
    // Script für den Radio Player laden
    const script = document.createElement("script");
    script.src = "https://myonlineradio.de/public/jsv240929145832/jquery.embed-script-loader.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: Entferne das Skript beim Unmounten der Komponente
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mediaplayer}>
        <ReactPlayer url="https://soundcloud.com/royaltyfreemusic-nocopyrightmusic/sets/creative-commons-music?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" width="100%" height="100%" />
      </div>
      <div className={styles.mediaplayer}>
        <ReactPlayer url="https://soundcloud.com/royaltyfreemusic-nocopyrightmusic/sets/creative-commons-music-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" width="100%" height="100%" />
      </div>
      <div className={styles.mediaplayer}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/u8qal-5yQGg?list=PLHOciPo-RQU67JIOAIN1e5v3RITDdhpj7" title="Background Music For Videos VLOG YouTube - Epic Cinematic Inspiring Motivational [FREE DOWNLOAD]" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className={styles.mediaplayer}>
        <ReactPlayer url="https://soundcloud.com/royaltyfreemusic-nocopyrightmusic/sets/jazz-blues?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" width="100%" height="100%" />
      </div>

      {/* Radio Player */}
      <div data-my-radio-lang="de" className="embed-radioplayer js-radioplayerData" data-autoplay="false" data-stream="1505" data-name="1LIVE" data-logo="jpg" data-url="1live" data-rid="219">
        <a href="https://myonlineradio.de/1live" target="_blank">1LIVE</a>
      </div>
    </div>
  );
}

export default Mediaplayer;