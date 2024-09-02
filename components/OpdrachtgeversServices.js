import React from 'react';
import BlobBackground from './BlobBackground';
import styles from '../styles/OpdrachtgeversServices.module.css';

const opdrachtgeversServices = [
    {
        title: 'Vacature Plaatsing',
        description: 'Plaats uw vacatures en vind de perfecte kandidaten voor uw posities.',
        icon: 'fas fa-users',
        label: 'Selectiefase',
    },
    {
        title: 'Zoek Dienstverleners',
        description: 'Adverteer opdrachten via dienstje.nl en vind de juiste dienstverleners.',
        icon: 'fas fa-search',
    },
    {
        title: 'Werving & Selectie',
        description: 'Wij helpen u bij het vinden van de juiste kandidaten.',
        icon: 'fas fa-briefcase',
    },
];

const OpdrachtgeversServices = () => {
    return (
        <section id="opdrachtgevers-diensten" className={styles.servicesSection}>
            <BlobBackground />
            <h2 className={styles.sectionTitle}>Onze Kernservices voor Opdrachtgevers</h2>
            <div className={styles.servicesContainer}>
                {opdrachtgeversServices.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                        <i className={`${service.icon} ${styles.serviceIcon}`}></i>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                        {service.label && (
                            <span className={styles.serviceLabel}>{service.label}</span>
                        )}
                        <button className={styles.moreInfoButton}>Meer info</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OpdrachtgeversServices;
