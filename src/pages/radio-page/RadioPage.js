import styles from "./RadioPage.module.css";
import ReactPlayer from "react-player";

function RadioPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mediaplayer}>
        <ReactPlayer url="https://soundcloud.com/olivertray/stay?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
      </div>
      <div className={styles.mediaplayer}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/u8qal-5yQGg?list=PLHOciPo-RQU67JIOAIN1e5v3RITDdhpj7"
          title="Background Music For Videos VLOG YouTube -  Epic Cinematic Inspiring Motivational [FREE DOWNLOAD]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>{" "}
    </div>
  );
}

export default RadioPage;
