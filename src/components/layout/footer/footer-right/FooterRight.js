import styles from "./FooterRight.module.css";
import { PiInstagramLogoBold } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

import { PiFacebookLogo } from "react-icons/pi";
function FooterRight() {
  return (
    <div className={styles.mainContainer}> 
     <div className={styles.spacer} />
      <RiTwitterXLine className={styles.social} /> 
      <div className={styles.spacer} />      
      <PiInstagramLogoBold className={styles.social} /> 
      <div className={styles.spacer} />
      <PiFacebookLogo className={styles.social} />
    
    </div>
  );
}

export default FooterRight;
