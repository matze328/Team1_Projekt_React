import styles from "./ImpressumPage.module.css";

function ImpressumPage() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1>Impressum</h1>
        <p>Dies ist das Impressum unserer Website.</p>

        <h2>Unternehmensinformationen:</h2>
        <p>
          Unternehmen: Dein Unternehmen<br />
          Adresse: Deine Adresse<br />
          Telefon: Deine Telefonnummer<br />
          E-Mail: Deine E-Mail<br />
        </p>

        <h2>Rechtliche Hinweise:</h2>
        <p>
          Hier kannst du rechtliche Hinweise und Informationen zu Urheberrechten, Haftungsausschluss usw. hinzufügen.
        </p>

        <h2>Datenschutz:</h2>
        <p>
          Informationen zur Datenschutzerklärung und zum Umgang mit persönlichen Daten können hier hinzugefügt werden.
        </p>
      </div>
    </div>
  );
}

export default ImpressumPage;
