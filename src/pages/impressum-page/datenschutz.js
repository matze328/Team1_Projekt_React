
import React from 'react';
import styles from "./ImpressumPage.module.css";
import { Link } from 'react-router-dom';
import buttonStyles from "./ButtonStyles.module.css";


function Datenschutz() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <h1>Datenschutzerklärung</h1>

                <h2>1. Datenschutz auf einen Blick</h2>
                <p>
                    Allgemeine Hinweise. Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>

                <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
                <p>
                    Datenschutz. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>

                <h2>3. Datenerfassung auf unserer Website</h2>
                <p>
                    Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>

                <h2>4. Wie erfassen wir Ihre Daten?</h2>
                <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>

                <h2>5. Welche Rechte haben Sie bezüglich Ihrer Daten?</h2>
                <p>
                    Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
                <Link to="/impressum">
                    <button type="button" className={buttonStyles.button}>
                        Zurück Impressum
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Datenschutz;
