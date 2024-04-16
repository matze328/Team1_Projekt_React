import styles from "./AboutMePage.module.css";
import React from "react";
import AboutMeBox from "../../components/common/aboutMeBox";
function AboutMePage() {
  return (
    <div>  className={styles.mainContainer}
    <div> className={styles.unterContainer}
    <AboutMeBox 
     vorname ="Marcel"
     nachname="Büscher"
     persoInfo= "Ich bin ein leidenschaftlicher Entwickler und liebe es, kreative Lösungen zu finden."
     hobbies="In meiner Freizeit fahre ich Downhill und Freeride."
     />,
   <div>  className={styles.unterContainer}
     <AboutMeBox 
     vorname ="Marcel"
     nachname="Büscher"
     persoInfo= "Ich bin ein leidenschaftlicher Entwickler und liebe es, kreative Lösungen zu finden."
     hobbies="In meiner Freizeit fahre ich Downhill und Freeride."
     />
 </div>   </div> </div>
  );
}

export default AboutMePage;
