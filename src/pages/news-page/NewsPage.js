import styles from "./NewsPage.module.css";
import SidebarStart from "../../components/layout/sidebar-start";
import UserContext from "../../components/common/userContext/UserContext";
import { useContext } from "react";
import SidebarHome from "../../components/layout/sidebar-home";
function NewsPage() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? <SidebarHome /> : <SidebarStart />}
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <h1>News&Blog</h1>
          <h3>Danksagung</h3>
          <h2>Projekt MUTRIX</h2>
          <h3>Herzlich Willkommen zu unserem Projekt: MUTRIX!</h3>
          <h3>Team MUTRIX freut sich über folgende Mitteilung:</h3>
          <p>
            Nach 3 Wochen mit Brainstorming, Planung und Coden, ist nun die
            erste Version für andere User nutzbar! <br />
            Einige Features sind noch Work-In-Progress, andere nur zugänglich
            als angemeldeter Nutzer. <br />
            Alle Musik im öffentlichen Zugang ist Royalty-Free-Music, egal ob
            auf der öffentlichen Radioseite oder in der Standard User Playlist
            ebenfalls. <br />
            Also könnt ihr sie euch gerne mit voller Lautstärke anhören!
            <br />
            <br />
            Ein großer Dank geht an Team TechStarter, die uns die Zeit für
            dieses Projekt zur Verfügung stellten. <br />
            Ein ebenso großer Dank geht an die Dozenten und die Teaching
            Assistants, die uns mit ihrem Wissen und Verständnis durch diese
            Zeit leiten konnten. <br />
            <br />
            Das Team MUTRIX dankt natürlich auch jedem Mitglied und Entwickler
            in diesem 4-Personen-Team. <br />
            Jeder konnte zum Erfolg beitragen, mit Recherche, Ideen und
            gegenseitiger Unterstützung. <br />
            Hoffentlich trifft sich das Team zur Erweiterung von MUTRIX nochmal
            zusammen, oder sogar zu einem neuen spannenden Thema. <br />
            <br />
            Wir wünschen viel Spaß mit der App! <br />
            <br />
            Mit freundlichen Grüßen, <br />
            <br />
            Team MUTRIX
            <br />
            Alex, Banu, Igor, Marcel Alexander
            <br />
          </p>
        </div>
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <h1>News&Blog</h1>
          <h3>Danksagung</h3>
          <h2>Projekt MUTRIX</h2>
          <h3>Welcome to our project: MUTRIX!</h3>
          <h3>Our Team MUTRIX ist happy to announce:</h3>
          <p>
            After 3 weeks of brainstorming, planning and coding we can publish
            the first version of MUTRIX to other users now. <br />
            Some features are still work-in-progress, while others are only
            usable as a registered user. <br />
            All the music is royalty free; be it in the public radio page or the
            standard user playlist.
            <br />
            So, enjoy it to the fullest!
            <br />
            <br />
            A big thank you goes to Team TechStarter for giving us the time and
            opportunity to work on this project. <br />
            As well to the lecturers and teaching assistants, who helped and
            guided us with their knowledge and understanding.
            <br />
            <br />
            Team MUTRIX also thanks their developers and team members of this
            four person team.
            <br />
            Everyone contributed to the success with independent research, by
            giving ideas and supporting each other.
            <br />
            We hope to come together again to finish this project and maybe even
            cooperate on a new one. <br />
            <br />
            We wish you a whole lot of fun with this App! <br />
            <br />
            Sincerely,
            <br />
            <br />
            Team MUTRIX
            <br />
            Alex, Banu, Igor, Marcel Alexander
            <br />
          </p>
        </div>
      </div>
    </>
  );
}

export default NewsPage;
