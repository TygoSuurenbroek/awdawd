import React from 'react';
import BlobBackground from './BlobBackground';
import styles from '../styles/DienstverlenersServices.module.css';

const dienstverlenersServices = [
    {
        title: 'IT Consultancy',
        description: 'Professioneel advies en ondersteuning voor al uw IT-vraagstukken.',
        icon: 'fas fa-laptop-code',
    },
    {
        title: 'Web Development',
        description: 'Op maat gemaakte websites en webapplicaties voor uw onderneming.',
        icon: 'fas fa-code',
    },
    {
        title: 'Opdrachten Binnenhalen',
        description: 'Maak gebruik van dienstje.nl om opdrachten binnen te halen.',
        icon: 'fas fa-handshake',
    },
];

const DienstverlenersServices = () => {
    return (
        <section id="dienstverleners-diensten" className={styles.servicesSection}>
            <BlobBackground />
            <h2 className={styles.sectionTitle}>Onze Kernservices voor Dienstverleners</h2>
            <div className={styles.servicesContainer}>
                {dienstverlenersServices.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                        <i className={`${service.icon} ${styles.serviceIcon}`}></i>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                        <button className={styles.moreInfoButton}>Meer info</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DienstverlenersServices;
