import styles from "./Footer.module.css";
import FooterLeft from "./footer-left";
import FooterRight from "./footer-right";

function Footer() {
  return   (  <div className={`${styles.mainContainer} border-bottom-shadow`}>
  <FooterLeft />

  <FooterRight />
</div>
  );
}

export default Footer;
