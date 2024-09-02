import React from 'react';
import { FaStar, FaComment, FaCheckCircle, FaHeart } from 'react-icons/fa';
import styles from '../styles/AboutUs.module.css';
import AnimatedEyes from './AnimatedEyes'; // Import the AnimatedEyes component

const AboutUs = () => {
    return (
        <section className={styles.aboutUsSection}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.highlightTitle}>Onze Visie</h2>
                        <p className={styles.highlightText}>
                            We willen een frisse wind brengen in de wereld van klantenbeoordelingen en uitgroeien tot een betrouwbaar platform waar transparantie en eerlijkheid centraal staan.
                        </p>
                    </div>
                    <div className={styles.rightColumn}>
                        <AnimatedEyes /> {/* Use the AnimatedEyes component */}
                    </div>
                </div>
                <div className={styles.cardTextSection}>
                    <p className={styles.cardText}>
                        Sinds onze <span className={styles.highlight}>oprichting in 2022</span> heeft Goede Service zich gericht op het leveren van uitstekende diensten in sales, klantenservice, hospitality en diverse individuele projecten. Wat begon als een klein initiatief, is snel uitgegroeid tot een vertrouwde partner voor werkzoekenden en werkgevers.
                    </p>
                    <p className={styles.cardText}>
                        Nu streven we ernaar om onze diensten verder uit te breiden en onze impact te vergroten. Samen met onze partners <a href="https://baanbazaar.nl" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>baanbazaar.nl</a> en <a href="/dienstje" className={styles.partnerLink}>dienstje.nl</a> zetten we ons in om de verbinding tussen werkzoekenden en werkgevers te verbeteren. Onze focus ligt op het bieden van een breed scala aan op maat gemaakte diensten die voldoen aan de behoeften van zowel werknemers als werkgevers.
                    </p>
                </div>
                <div className={styles.floatingIcons}>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
