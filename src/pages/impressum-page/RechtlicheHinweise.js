import styles from "./ImpressumPage.module.css";
import React from 'react';
import { Link } from 'react-router-dom';
import buttonStyles from "./ButtonStyles.module.css";

function RechtlicheHinweise() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <h1>Rechtliche Hinweise</h1>

                <h2>1. Haftungsbeschränkung</h2>
                <p>
                    Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers.
                </p>

                <h2>2. Externe Links</h2>
                <p>
                    Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen.
                </p>

                <h2>3. Urheber- und Leistungsschutzrechte</h2>
                <p>
                    Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers.
                </p>
                <Link to="/impressum">
                    <button type="button" className={buttonStyles.button}>
                        Zurück zum Impressum
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default RechtlicheHinweise;
