import styles from "./Footer.module.css";
import FooterLeft from "./footer-left";
import FooterRight from "./footer-right";
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <div className={`${styles.mainContainer} border-bottom-shadow`}>
      <FooterLeft />
      <Link to="/impressum" className={styles.footerInfo}>
        IMPRESSUM
      </Link>
      <Link to="/aboutme" className={styles.footerInfo}>
        ABOUT US
      </Link>
      <FooterRight />
    </div>
  );
}

export default Footer;
