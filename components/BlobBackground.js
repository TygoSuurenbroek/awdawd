import React, { useEffect } from 'react';
import styles from '../styles/BlobBackground.module.css';

const BlobBackground = () => {
    useEffect(() => {
        const blobs = document.querySelectorAll(`.${styles.blob}`);

        let mouseX = 0;
        let mouseY = 0;

        function createBlob(blob, index) {
            const colors = [
                'rgba(255, 105, 180, 0.7)',  // Hot pink
                'rgba(100, 149, 237, 0.7)',  // Cornflower blue
                'rgba(255, 215, 0, 0.7)',    // Gold
                'rgba(50, 205, 50, 0.7)',    // Lime green
                'rgba(147, 112, 219, 0.7)'   // Medium purple
            ];
            const size = Math.random() * 50 + 70; // 70% to 120% of screen height
            const color = colors[index % colors.length];

            blob.style.background = `radial-gradient(circle at 30% 30%, ${color}, rgba(255, 255, 255, 0.1))`;
            blob.style.width = `${size}vh`;
            blob.style.height = `${size}vh`;

            // Random starting position
            blob.style.left = `${Math.random() * 100}%`;
            blob.style.top = `${Math.random() * 100}%`;

            // Random speed (lower values = faster)
            blob.speed = Math.random() * 0.15 + 0.1;

            // Random oscillation
            blob.oscillationX = Math.random() * 150 - 75;
            blob.oscillationY = Math.random() * 150 - 75;
            blob.oscillationSpeed = Math.random() * 0.003 + 0.002;
        }

        function moveBlob(blob, index) {
            const rect = blob.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            let targetX = mouseX + Math.sin(Date.now() * blob.oscillationSpeed) * blob.oscillationX;
            let targetY = mouseY + Math.cos(Date.now() * blob.oscillationSpeed) * blob.oscillationY;

            const dx = targetX - centerX;
            const dy = targetY - centerY;

            const newX = centerX + dx * blob.speed;
            const newY = centerY + dy * blob.speed;

            blob.style.left = `${newX - rect.width / 2}px`;
            blob.style.top = `${newY - rect.height / 2}px`;

            requestAnimationFrame(() => moveBlob(blob, index));
        }

        blobs.forEach(createBlob);

        setTimeout(() => {
            blobs.forEach(moveBlob);
        }, 100);

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Periodically change blob properties for more dynamism
        const intervalId = setInterval(() => {
            blobs.forEach((blob, index) => {
                blob.speed = Math.random() * 0.15 + 0.1;
                blob.oscillationX = Math.random() * 150 - 75;
                blob.oscillationY = Math.random() * 150 - 75;
                blob.oscillationSpeed = Math.random() * 0.003 + 0.002;
            });
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={styles.blobContainer}>
            <div className={styles.blob}></div>
            <div className={styles.blob}></div>
            <div className={styles.blob}></div>
            <div className={styles.blob}></div>
            <div className={styles.blob}></div>
        </div>
    );
};

export default BlobBackground;
