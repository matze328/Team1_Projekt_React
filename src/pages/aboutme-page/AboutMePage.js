import styles from "./AboutMePage.module.css";
import React from "react";
import AboutMeBox from "../../components/common/aboutMeBox";
function AboutMePage() {
  return (
   <div className={styles.mainContainer}>  
     <AboutMeBox 
     vorname ="Marcel"
     nachname="Büscher"
     persoInfo= "Ich bin ein leidenschaftlicher Entwickler und liebe es, kreative Lösungen zu finden."
     hobbies="In meiner Freizeit fahre ich Downhill und Freeride."
     />
     
       <AboutMeBox    
        vorname="Person 2"
        nachname="This is about me"
        hobbies="Hobby 3, Hobby 4"
      />
      <AboutMeBox
        vorname="Person 3"
        nachname="This is about me"
        hobbies="Hobby 5, Hobby 6"
      />
      <AboutMeBox
        vorname="Person 4"
        nachname="This is about me"
        hobbies="Hobby 7, Hobby 8"
      />
    </div>
  );
}




export default AboutMePage;
