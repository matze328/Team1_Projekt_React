import styles from "./AboutMePage.module.css";

function AboutMePage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.unterContainer}>
        <img className={styles.profileImage} src="person1.jpg" alt="Person 1" />
        <p>Person 1 - This is about me</p>
      </div>
      <div className={styles.unterContainer}>
        <img className={styles.profileImage} src="person2.jpg" alt="Person 2" />
        <p>Person 2 - This is about me</p>
      </div>
      <div className={styles.unterContainer}>
        <img className={styles.profileImage} src="person3.jpg" alt="Person 3" />
        <p>Person 3 - This is about me</p>
      </div>
      <div className={styles.unterContainer}>
        <img className={styles.profileImage} src="person4.jpg" alt="Person 4" />
        <p>Person 4 - This is about me</p>
      </div>
    </div>
  );
}

export default AboutMePage;
