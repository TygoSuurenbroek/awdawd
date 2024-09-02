import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

const Nav = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleMouseLeave = (e) => {
        if (sidebarVisible && e.clientX >= window.innerWidth - 20) {
            setSidebarVisible(false);
        }
    };

    const handleDropdownToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const handleMouseMove = (e) => {
        if (e.clientX <= 20 && !sidebarVisible) {
            setSidebarVisible(true);  // Automatically show the sidebar when the cursor is on the left side
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousemove', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousemove', handleMouseLeave);
        };
    }, [sidebarVisible]);

    return (
        <>
            {!sidebarVisible && (
                <div
                    className={styles.menuIconContainer}
                    onClick={toggleSidebar}
                >
                    <div className={styles.menuIcon}>
                        ☰
                    </div>
                </div>
            )}
            <div className={`${styles.sidebar} ${sidebarVisible ? styles.sidebarVisible : ''}`}>
                <div className={styles.closeButton} onClick={toggleSidebar}>
                    &times;
                </div>
                <ul className={styles.sidebarLinks}>
                    <li>
                        <a href="#about">Over Ons</a>
                    </li>
                    <li onClick={() => handleDropdownToggle(1)}>
                        <div className={styles.dropdownToggle}>
                            <a href="#services">Diensten</a>
                            <span className={styles.dropdownIcon}>{activeDropdown === 1 ? '▲' : '▼'}</span>
                        </div>
                        {activeDropdown === 1 && (
                            <ul className={styles.dropdown}>
                                <li><a href="#zzp-services">ZZP Diensten</a></li>
                                <li><a href="#loondienst-services">Loondienst Diensten</a></li>
                                <li><a href="#consulting">Consulting</a></li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => handleDropdownToggle(2)}>
                        <div className={styles.dropdownToggle}>
                            <a href="#contact">Contact</a>
                            <span className={styles.dropdownIcon}>{activeDropdown === 2 ? '▲' : '▼'}</span>
                        </div>
                        {activeDropdown === 2 && (
                            <ul className={styles.dropdown}>
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="#support">Support</a></li>
                                <li><a href="#inquiries">Inquiries</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
                <div className={styles.sidebarButtonContainer}>
                    <a href="#job-search" className={styles.sidebarButton}>Ik Zoek Werk</a>
                    <a href="#provider-search" className={styles.sidebarButton}>Vind Dienstverleners</a>
                </div>
            </div>
            {sidebarVisible && <div className={styles.backdrop} onClick={toggleSidebar}></div>}
        </>
    );
};

export default Nav;
