import React, { useEffect } from 'react';
import styles from '../styles/Slideshow.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faUtensils, faShoppingCart, faPlane, faTshirt, faLaptop } from '@fortawesome/free-solid-svg-icons';

const Slideshow = () => {
    useEffect(() => {
        const slideshow = document.getElementById('serviceSlideshow');
        const items = slideshow.querySelectorAll(`.${styles.slideshowItem}`);
        let currentItem = 0;

        function showNextItem() {
            items[currentItem].classList.remove(styles.active);
            currentItem = (currentItem + 1) % items.length;
            items[currentItem].classList.add(styles.active);
        }

        items[currentItem].classList.add(styles.active);
        const intervalId = setInterval(showNextItem, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.slideshowContainer}>
            <div className={styles.slideshowText}>
                <h2>Ons doel</h2>
                <p>Ons doel is om dienstverlening in elke branche te versoepelen.</p>
            </div>
            <div className={styles.serviceSlideshow} id="serviceSlideshow">
                {[
                    { icon: faHome, text: 'Woningservices' },
                    { icon: faCar, text: 'Autogarages' },
                    { icon: faUtensils, text: 'Restaurants' },
                    { icon: faShoppingCart, text: 'Webwinkels' },
                    { icon: faPlane, text: 'Reisorganisaties' },
                    { icon: faTshirt, text: 'Kledingwinkels' },
                    { icon: faLaptop, text: 'Elektronicazaken' },
                ].map((service, index) => (
                    <div key={index} className={styles.slideshowItem}>
                        <FontAwesomeIcon icon={service.icon} className={styles.slideshowIcon} />
                        <span className={styles.slideshowText}>{service.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
