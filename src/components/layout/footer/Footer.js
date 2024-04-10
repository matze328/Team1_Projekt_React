import styles from "./Footer.module.css";
import FooterLeft from "./footer-left";

function Footer() {
  return   (  <div className={`${styles.mainContainer} border-bottom-shadow`}>
  <FooterLeft />

</div>
  );
}

export default Footer;
