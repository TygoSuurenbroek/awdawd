import React, { useEffect } from 'react';
import styles from '../styles/AnimatedEyes.module.css';

const AnimatedEyes = () => {
    useEffect(() => {
        const eyes = document.querySelectorAll(`.${styles.eye}`);
        const irises = document.querySelectorAll(`.${styles.iris}`);

        function updateEyePosition(e) {
            eyes.forEach((eye, index) => {
                const rect = eye.getBoundingClientRect();
                const eyeCenterX = rect.left + rect.width / 2;
                const eyeCenterY = rect.top + rect.height / 2;
                const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
                const distance = Math.min(rect.width / 10, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 15);
                const irisX = Math.cos(angle) * distance;
                const irisY = Math.sin(angle) * distance;
                irises[index].style.transform = `translate(calc(-50% + ${irisX}px), calc(-50% + ${irisY}px))`;
            });
        }

        document.addEventListener('mousemove', updateEyePosition);

        return () => document.removeEventListener('mousemove', updateEyePosition);
    }, []);

    return (
        <div className={styles.eyesContainer}>
            <div className={styles.eyeContainer}>
                <div className={styles.eye}>
                    <div className={styles.iris}>
                        <div className={styles.pupil}></div>
                        <div className={styles.lightReflection}></div>
                        <div className={styles.lightReflectionSmall}></div>
                    </div>
                    <div className={styles.eyelidUpper}></div>
                    <div className={styles.eyelidLower}></div>
                </div>
            </div>
            <div className={styles.eyeContainer}>
                <div className={styles.eye}>
                    <div className={styles.iris}>
                        <div className={styles.pupil}></div>
                        <div className={styles.lightReflection}></div>
                        <div className={styles.lightReflectionSmall}></div>
                    </div>
                    <div className={styles.eyelidUpper}></div>
                    <div className={styles.eyelidLower}></div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedEyes;
