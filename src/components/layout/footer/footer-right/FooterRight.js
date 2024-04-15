import styles from "./FooterRight.module.css";
import { PiInstagramLogoBold } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

import { PiFacebookLogo } from "react-icons/pi";
function FooterRight() {
  return (
    <div className={styles.mainContainer}> 
     <div className={styles.spacer} />
     <a href="https://twitter.com">
      <RiTwitterXLine className={styles.social} /> 
      </a>
      <div className={styles.spacer} /> 
      <a href="https://instagram.com">     
      <PiInstagramLogoBold className={styles.social} /> 
      </a>
      <div className={styles.spacer} />
      <a href="https://facebook.com">
      <PiFacebookLogo className={styles.social} />
      </a>
    </div>
  );
}

export default FooterRight;
