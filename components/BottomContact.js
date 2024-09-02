import React from 'react';
import styles from '../styles/BottomContact.module.css';

const BottomContact = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContent}>
                <div className={styles.contactText}>
                    <h2>Laten we jouw project naar succes brengen</h2>
                    <p>
                        We staan klaar om samen met jou aan de slag te gaan. Of je nu net begint of je project wilt verfijnen, wij helpen je om jouw visie werkelijkheid te maken. Neem contact op en laten we beginnen!
                    </p>
                </div>
                <div className={styles.contactForm}>
                    <form>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Naam</label>
                            <input type="text" id="name" name="name" placeholder="Uw Naam" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Telefoonnummer</label>
                            <input type="tel" id="phone" name="phone" placeholder="Uw Telefoonnummer" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" placeholder="Uw E-mail" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Onderwerp</label>
                            <input type="text" id="subject" name="subject" placeholder="Onderwerp" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Uw Bericht</label>
                            <textarea id="message" name="message" rows="4" placeholder="Uw Bericht"></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>Verzend</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BottomContact;
