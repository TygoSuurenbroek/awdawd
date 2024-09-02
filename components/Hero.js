import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/Hero.module.css'; // Import the CSS module

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Boost Je Onderneming",
            subtitle: "Maak verbinding met topklanten in heel Nederland",
        },
        {
            title: "Vergroot Je Netwerk",
            subtitle: "Word lid van een gemeenschap van ervaren professionals",
        },
        {
            title: "Maximaliseer Je Potentieel",
            subtitle: "Krijg toegang tot tools en middelen om je diensten te verbeteren",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <section className={styles.heroSection}>
            {/* Background Animation */}
            <div className={styles.backgroundOverlay}>
                <div className={styles.backgroundOverlay}></div>
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white opacity-10"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 10 + 5}px`,
                                height: `${Math.random() * 10 + 5}px`,
                                animation: `float ${Math.random() * 10 + 10}s infinite linear`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className={styles.heroContent}>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={styles.logoContainer}
                >
                    <Image src="/logo.png" alt="Logo" width={200} height={200} className={styles.logo} />
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className={styles.textContent}
                    >
                        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="text-xl md:text-2xl">{slides[currentSlide].subtitle}</p>
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className={styles.arrowContainer}
                    onClick={scrollToNextSection}
                >
                    ↓
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
