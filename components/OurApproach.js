import React, { useEffect } from 'react';
import styles from '../styles/OurApproach.module.css';
import { FaLightbulb, FaPaintBrush, FaCode, FaSearch, FaRocket } from 'react-icons/fa'; // Switched to React Icons

const OurApproach = () => {
    useEffect(() => {
        const circles = document.querySelectorAll(`.${styles.circle}`);

        function moveAndRotateCircles() {
            circles.forEach((circle, index) => {
                const moveAndRotateCircle = () => {
                    const randomX = (Math.random() - 0.5) * 10;
                    const randomY = (Math.random() - 0.5) * 10;
                    const randomRotate = (Math.random() - 0.5) * 3;
                    circle.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;

                    setTimeout(moveAndRotateCircle, Math.random() * 5000 + 3000);
                };

                setTimeout(moveAndRotateCircle, index * 1000);
            });
        }

        moveAndRotateCircles();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.slogan}>
                Onze Aanpak
            </div>
            <div className={styles.process}>
                <div className={styles.step}>
                    <div className={styles.circle} style={{ backgroundColor: '#333a56' }}>
                        <FaLightbulb className={styles.approachIcon} style={{ fontSize: '40px' }} />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.text}>
                            <div className={styles.textDescription}>Stimuleer <em>innovatie</em> door creatieve ideeën te verkennen en te ontwikkelen!</div>
                            <button className={styles.moreInfoBtn}>Meer info</button>
                        </div>
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.circle} style={{ backgroundColor: '#444b6e' }}>
                        <FaPaintBrush className={styles.approachIcon} style={{ fontSize: '40px' }} />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.text}>
                            <div className={styles.textDescription}>Ontwerp <em>impactvolle</em> oplossingen die bijblijven en inspireren!</div>
                            <button className={styles.moreInfoBtn}>Meer info</button>
                        </div>
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.circle} style={{ backgroundColor: '#566180' }}>
                        <FaCode className={styles.approachIcon} style={{ fontSize: '40px' }} />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.text}>
                            <div className={styles.textDescription}>Bouw met <em>precisie</em> en vakmanschap, waarbij technologie centraal staat!</div>
                            <button className={styles.moreInfoBtn}>Meer info</button>
                        </div>
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.circle} style={{ backgroundColor: '#68718c' }}>
                        <FaSearch className={styles.approachIcon} style={{ fontSize: '40px' }} />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.text}>
                            <div className={styles.textDescription}>Analyseren en <em>optimaliseren</em> voor maximale prestaties!</div>
                            <button className={styles.moreInfoBtn}>Meer info</button>
                        </div>
                    </div>
                </div>
                <div className={styles.step}>
                    <div className={styles.circle} style={{ backgroundColor: '#7b8aa1' }}>
                        <FaRocket className={styles.approachIcon} style={{ fontSize: '40px' }} />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.text}>
                            <div className={styles.textDescription}>Lanceer uw visie en bereik nieuwe <em>hoogten</em> in de markt!</div>
                            <button className={styles.moreInfoBtn}>Meer info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurApproach;
