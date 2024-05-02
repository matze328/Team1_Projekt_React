import styles from "./ImpressumPage.module.css";
import { Link } from "react-router-dom";

function ImpressumPage() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1>Impressum</h1>
        <p>Dies ist das Impressum unserer Website.</p>

        <h2>Unternehmensinformationen:</h2>
        <p>
          Unternehmen: Dein Unternehmen
          <br />
          Adresse: Deine Adresse
          <br />
          Telefon: Deine Telefonnummer
          <br />
          E-Mail: Deine E-Mail
          <br />
        </p>
        <label className={styles.blobContainer}>
          <h2>
            <Link to="/RechtlicheHinweise">Rechtliche Hinweise</Link>
          </h2>
        </label>
        <label className={styles.blobContainer}>
          <h2>
            <Link to="/datenschutz">Datenschutz</Link>
          </h2>
        </label>
      </div>
    </div>
  );
}

export default ImpressumPage;
