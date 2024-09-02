import React from 'react';
import stylesWebdesignPakket from '../styles/WebdesignPakketBanner.module.css';
import stylesAllInWebdesignPakket from '../styles/AllInWebdesignPakketBanner.module.css';

export const WebdesignPakketBanner = () => {
    return (
        <div className={stylesWebdesignPakket.packageBanner}>
            <div className={stylesWebdesignPakket.bannerContent}>
                <h2 className={stylesWebdesignPakket.bannerTitle}>Webdesign & Onderhoud</h2>
                <p className={stylesWebdesignPakket.bannerDescription}>
                    Professioneel webdesign en continue onderhoud voor een vaste maandelijkse prijs vanaf €50 p/m. Houd uw website altijd up-to-date en veilig!
                </p>
                <a href="?pakket=onderhoud" className={stylesWebdesignPakket.bannerCta}>Meer Informatie</a>
            </div>
            <div className={stylesWebdesignPakket.bannerImage}>
                <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
                        </radialGradient>
                    </defs>
                    <g className={stylesWebdesignPakket.sun}>
                        <circle cx="150" cy="150" r="60" fill="url(#sunGradient)" />
                        <circle cx="150" cy="150" r="55" fill="#FFD700" opacity="0.7" />
                        <circle cx="150" cy="150" r="50" fill="#FFF700" opacity="0.5" />
                    </g>
                    <g className={stylesWebdesignPakket.sunbeams}>
                        <path className={`${stylesWebdesignPakket.sunbeam} ${stylesWebdesignPakket.sunbeam1}`} d="M150 70 L150 30 M210 90 L240 60 M230 150 L270 150 M210 210 L240 240 M150 230 L150 270 M90 210 L60 240 M70 150 L30 150 M90 90 L60 60" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
                        <path className={`${stylesWebdesignPakket.sunbeam} ${stylesWebdesignPakket.sunbeam2}`} d="M150 70 L150 40 M230 150 L260 150 M150 230 L150 260 M70 150 L40 150" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" transform="rotate(22.5, 150, 150)" />
                        <path className={`${stylesWebdesignPakket.sunbeam} ${stylesWebdesignPakket.sunbeam3}`} d="M210 90 L235 65 M210 210 L235 235 M90 210 L65 235 M90 90 L65 65" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" transform="rotate(22.5, 150, 150)" />
                    </g>
                    <g className={`${stylesWebdesignPakket.cloud} ${stylesWebdesignPakket.cloud1}`} transform="translate(20, 220) scale(0.5)">
                        <path d="M25,60 a20,20 0 0,1 0,-40 h100 a20,20 0 0,1 0,40 z" fill="#FFFFFF" opacity="0.5" />
                        <path d="M30,55 a15,15 0 0,1 0,-30 h90 a15,15 0 0,1 0,30 z" fill="#FFFFFF" opacity="0.7" />
                    </g>
                    <g className={`${stylesWebdesignPakket.cloud} ${stylesWebdesignPakket.cloud2}`} transform="translate(180, 70) scale(0.4)">
                        <path d="M25,60 a20,20 0 0,1 0,-40 h100 a20,20 0 0,1 0,40 z" fill="#FFFFFF" opacity="0.5" />
                        <path d="M30,55 a15,15 0 0,1 0,-30 h90 a15,15 0 0,1 0,30 z" fill="#FFFFFF" opacity="0.7" />
                    </g>
                    <g className={`${stylesWebdesignPakket.cloud} ${stylesWebdesignPakket.cloud3}`} transform="translate(100, 150) scale(0.3)">
                        <path d="M25,60 a20,20 0 0,1 0,-40 h100 a20,20 0 0,1 0,40 z" fill="#FFFFFF" opacity="0.5" />
                        <path d="M30,55 a15,15 0 0,1 0,-30 h90 a15,15 0 0,1 0,30 z" fill="#FFFFFF" opacity="0.7" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export const AllInWebdesignPakketBanner = () => {
    return (
        <div className={`${stylesAllInWebdesignPakket.packageBanner}`}>
            <div className={stylesAllInWebdesignPakket.bannerContent}>
                <h2 className={stylesAllInWebdesignPakket.bannerTitle}>All-in Webdesign Pakket</h2>
                <p className={stylesAllInWebdesignPakket.bannerDescription}>
                    Alles wat u nodig heeft voor een indrukwekkende online aanwezigheid in één compleet pakket. Van ontwerp tot lancering, wij regelen het allemaal!
                </p>
                <a href="?pakket=all-in" className={stylesAllInWebdesignPakket.bannerCta}>Ontdek Meer</a>
            </div>
            <div className={stylesAllInWebdesignPakket.bannerImage}>
                <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                    <path className={stylesAllInWebdesignPakket.star1} d="M75 120 L82.5 142.5 L105 142.5 L90 157.5 L97.5 180 L75 165 L52.5 180 L60 157.5 L45 142.5 L67.5 142.5 Z" fill="#FFA500" transform="translate(75, 0) scale(1.2)" />
                    <path className={stylesAllInWebdesignPakket.star2} d="M150 90 L157.5 112.5 L180 112.5 L165 127.5 L172.5 150 L150 135 L127.5 150 L135 127.5 L120 112.5 L142.5 112.5 Z" fill="#FFA500" transform="translate(-25, 50)" />
                    <path className={stylesAllInWebdesignPakket.star3} d="M225 150 L229.5 165 L244.5 165 L234 174 L238.5 190.5 L225 181.5 L211.5 190.5 L216 174 L205.5 165 L220.5 165 Z" fill="#FFA500" transform="translate(-125, 100) scale(0.8)" />
                </svg>
            </div>
        </div>
    );
};
