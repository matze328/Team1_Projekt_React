import styles from "./AboutMePage.module.css";
import React from "react";
import AboutMeBox from "../../components/common/aboutMeBox";
function AboutMePage() {
  return (
    <div className={styles.mainContainer}>
      <AboutMeBox
        vorname="Marcel"
        persoInfo="Ich bin ein leidenschaftlicher Entwickler und liebe es, kreative Lösungen zu finden."
        hobbies="In meiner Freizeit fahre ich Downhill und Freeride."
      />

      <AboutMeBox
        vorname="Banu"
        persoInfo="Mit einer Begeisterung für Design und Ästhetik, strebe ich danach, visuell ansprechende, innovative und voll funktionierende Lösungen zu entwickeln und zu gestalten."
        hobbies="Gerne gehe ich auf Städtereisen und trainiere im Fitnessstudio, um fit zu bleiben. Selbständige Weiterentwicklung durch Kurse und Workshops ist mir wichtig, um meine Fähigkeiten kontinuierlich zu verbessern."
      />
      <AboutMeBox
        vorname="Alex"
        persoInfo="Die ursprüngliche Idee zur dieser App entstand von mir :)"
        hobbies="Ich verbringe meine Freizeit mit Computerspiele, Brettspiele und Sport"
      />
      <AboutMeBox
        vorname="Igor"
        persoInfo="Ich sammle Sporen, Grünspan und Schimmelpilze. Danke"
        hobbies="Gamedev und tanzen"
      />
    </div>
  );
}

export default AboutMePage;
