import styles from "./Footer.module.css";
import FooterLeft from "./footer-left";
import FooterRight from "./footer-right";

function Footer() {
  return   (  <div className={`${styles.mainContainer} border-bottom-shadow`}>
  <FooterLeft />
  <div className={styles.footerInfo}> IMPRESSUM </div>
  <div className={styles.footerInfo}> CONTACT US </div>
  <FooterRight />
</div>
  );
}

export default Footer;
