import React, { useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from '../styles/KnowledgeSection.module.css';
import { FiPenTool, FiBookOpen, FiMail } from 'react-icons/fi';  // Importing icons from React Icons (Feather icons)

const KnowledgeSection = () => {
    useEffect(() => {
        // Ensure the newsletter section is active by default
        const newsletterItem = document.querySelector(`[data-type="nieuwsbrief"]`);
        if (newsletterItem) {
            newsletterItem.classList.add(styles.active);
        }
    }, []);

    const subscribeNewsletter = async (event) => {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        const consent = event.target.querySelector('input[type="checkbox"]').checked;

        if (email && consent) {
            const { data, error } = await supabase
                .from('newsletter_subscriptions')
                .insert([{ email }]);

            if (error) {
                alert('Er ging iets mis, probeer het opnieuw.');
                console.error('Supabase error:', error);
            } else {
                alert('Bedankt voor je aanmelding! Je ontvangt binnenkort onze nieuwsbrief.');
                event.target.reset();
            }
        } else {
            alert('Vul alsjeblieft je e-mailadres in en geef toestemming voor de nieuwsbrief.');
        }
    };

    return (
        <section className={styles.knowledgeSection}>
            <h2 className={styles.sectionTitle}>Blijf op de hoogte op werkgebied</h2>
            <div className={styles.knowledgeGrid}>
                {/* 
                <div className={`${styles.knowledgeItem} ${styles.active}`} data-type="blogs">
                    <div>
                        <FiPenTool className={styles.itemIcon} />  
                        <h3 className={styles.itemTitle}>Blogs</h3>
                    </div>
                    <a href="/blog" className={styles.itemLink}>Ontdek blogs</a>
                </div>

                <div className={styles.knowledgeItem} data-type="kennisbank">
                    <div>
                        <FiBookOpen className={styles.itemIcon} />  
                        <h3 className={styles.itemTitle}>Kennisbank</h3>
                    </div>
                    <a href="/kennisbank" className={styles.itemLink}>Verken kennisbank</a>
                </div>
                */}
                <div className={`${styles.knowledgeItem} ${styles.active}`} data-type="nieuwsbrief">
                    <div>
                        <FiMail className={styles.itemIcon} />  {/* Using Feather icon */}
                        <h3 className={styles.itemTitle}>Nieuwsbrief</h3>
                    </div>
                    <form className={styles.newsletterForm} onSubmit={subscribeNewsletter}>
                        <div className={styles.newsletterInputGroup}>
                            <input type="email" placeholder="Jouw e-mailadres" required />
                            <button type="submit">Abonneer</button>
                        </div>
                        <div className={styles.consent}>
                            <label>
                                <input type="checkbox" required />
                                <span>Ik ga akkoord met de <a href="/privacyverklaring" target="_blank" rel="noopener noreferrer">privacyverklaring</a> en geef toestemming voor de nieuwsbrief.</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default KnowledgeSection;
