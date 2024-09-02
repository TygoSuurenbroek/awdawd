import React, { useEffect } from 'react';
import styles from '../styles/Banner.module.css'; // Import the CSS module

const Banner = () => {
    useEffect(() => {
        const createSpark = () => {
            const spark = document.createElement('div');
            spark.classList.add(styles.spark); // Use the scoped class
            spark.style.left = Math.random() * window.innerWidth + 'px';
            spark.style.top = Math.random() * window.innerHeight + 'px';
            document.body.appendChild(spark);

            const size = Math.random() * 3 + 2;
            spark.style.width = size + 'px';
            spark.style.height = size + 'px';

            const duration = Math.random() * 1000 + 500;
            spark.animate([
                { transform: 'scale(0)', opacity: 1 },
                { transform: 'scale(1)', opacity: 0 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => {
                spark.remove();
            };
        };

        const interval = setInterval(createSpark, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles['banner-container']}>
            <div className={styles['upper-line']}></div> {/* Upper line above the text */}
            <h1>Kracht in Dienstverlening</h1>
            <div className={styles['lower-line']}></div> {/* Lower line below the text */}
        </div>
    );
};

export default Banner;
