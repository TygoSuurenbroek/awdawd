import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import logo from '../public/logo.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <span className={styles.bannerText}>
                        🌟 <Link href="https://dienstje.nl" target="_blank" rel="noopener noreferrer">
                            Dienstje.nl - Bied jouw diensten aan of vind kleine opdrachten snel!
                        </Link> 🌟 Maak vandaag nog verbinding met bekwame professionals en klanten! 🌟
                    </span>
                </div>
            </div>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <Image src={logo} alt="Goedeservice Logo" width={100} height={100} className={styles.logo} />
                    <p>Professionele dienstverlening voor ZZP'ers</p>
                    <div className={styles.socialIcons}>
                        <a href="#" aria-label="LinkedIn" className={styles.emphasizedIcon}><i className="fab fa-linkedin"></i></a>
                        <a href="#" aria-label="YouTube" className={styles.emphasizedIcon}><i className="fab fa-youtube"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className={styles.footerSection}>
                    <h3>Onze Diensten</h3>
                    <ul>
                        <li><Link href="#diensten">IT Consultancy</Link></li>
                        <li><Link href="#diensten">Web Development</Link></li>
                        <li><Link href="#diensten">Project Management</Link></li>
                        <li><Link href="#diensten">Carrière Coaching</Link></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3>Handige Links</h3>
                    <ul>
                        <li><a href="https://baanbazaar.nl" target="_blank" rel="noopener noreferrer">Baanbazaar.nl - Vacatures</a></li>
                        <li><a href="https://dienstje.nl" target="_blank" rel="noopener noreferrer">Dienstje.nl - Microservices</a></li>
                        <li><Link href="#over-ons">Over Ons</Link></li>
                        <li><Link href="#blog">Blog</Link></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3>Contact</h3>
                    <p>Email: info@goedeservice.nl</p>
                    <p>Tel: +31 6 123 456 78</p>
                    <p>KvK: 12345678</p>
                    <p>BTW: NL123456789B01</p>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; 2023 Goedeservice.nl. Alle rechten voorbehouden.</p>
            </div>
        </footer>
    );
};

export default Footer;
