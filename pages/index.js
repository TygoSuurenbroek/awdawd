import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Slideshow from '../components/Slideshow';
import DienstverlenersServices from '../components/DienstverlenersServices';
import OpdrachtgeversServices from '../components/OpdrachtgeversServices';
import OurApproach from '../components/OurApproach';
import KnowledgeSection from '../components/KnowledgeSection';
import BottomContact from '../components/BottomContact';
import Footer from '../components/Footer';
import Banner from '../components/Banner'; // Import the Banner component
import { WebdesignPakketBanner } from '../components/WebdesignBanners'; // Import only the WebdesignPakketBanner
import styles from '../styles/Home.module.css';
import '../styles/globals.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Goedeservice.nl - Alles voor Dienstverlening</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <Hero />
            <Banner /> {/* Insert the Banner component here */}
            <AboutUs />
            <DienstverlenersServices />

            <OpdrachtgeversServices />
            <Slideshow />
            <WebdesignPakketBanner /> {/* Use the WebdesignPakketBanner component here */}
            <KnowledgeSection />
            <BottomContact />
            <Footer />
        </div>
    );
}
