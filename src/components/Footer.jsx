import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/333carxlab.png';

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    return (
        <footer className="pt-24 md:pt-36 pb-16 md:pb-24 border-t border-white/[0.04] bg-[var(--bg-card)] relative overflow-hidden mt-auto">
            {/* Background glow overlay */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-accent-gold/5 blur-[150px] pointer-events-none" />

            <div className="main-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 lg:gap-28 mb-24 md:mb-36">
                    {/* Brand Section */}
                    <div className="md:col-span-12 lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left gap-8 md:gap-10">
                        <Link to="/" onClick={handleScrollToTop} className="inline-block w-fit opacity-80 hover:opacity-100 transition-opacity">
                            <img src={logo} alt="Carxlab" className="h-14 object-contain grayscale hover:grayscale-0 transition-all duration-500" />
                        </Link>
                        <p className="text-white/30 max-w-sm text-lg font-light leading-loose">
                            Plus qu'un showroom, une expertise de précision. Bienvenue dans l'ère de l'automobile analytique.
                        </p>
                        <div className="flex gap-6 mt-4 justify-center md:justify-start">
                            <a
                                href="mailto:Carxlab31@gmail.com"
                                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/30 hover:bg-accent-gold/10 hover:text-accent-gold hover:border-accent-gold/50 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Links - Services */}
                    <div className="md:col-span-6 lg:col-span-3 lg:col-start-7 flex flex-col items-center md:items-start text-center md:text-left gap-10 md:gap-12">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center md:justify-start gap-4 w-full">
                            <span className="hidden md:block soft-divider w-10 shrink-0" />
                            Services
                        </h4>
                        <ul className="space-y-6 md:space-y-8">
                            {[
                                { name: 'Expertise Lab', path: '/expertise' },
                                { name: 'Achat Express', path: '/achat' },
                                { name: 'Stock Réel', path: '/stock' },
                                { name: 'Solutions Financement', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} onClick={handleScrollToTop} className="text-white/30 hover:text-white transition-colors text-[15px] font-medium tracking-widest flex items-center justify-center md:justify-start gap-3 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/0 group-hover:bg-accent-gold transition-all duration-300"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links - Contact */}
                    <div className="md:col-span-6 lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left gap-10 md:gap-12">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center md:justify-start gap-4 w-full">
                            <span className="hidden md:block soft-divider w-10 shrink-0" />
                            Contact
                        </h4>
                        <ul className="space-y-5 md:space-y-6 w-full max-w-sm">
                            <li className="flex items-start gap-5 p-7 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] group hover:border-accent-gold/15 transition-all duration-300">
                                <MapPin size={22} className="text-accent-gold shrink-0 mt-1" />
                                <span className="text-white/50 text-[15px] leading-relaxed font-light">4 impasses du pont,<br />31140 Launaguet</span>
                            </li>
                            <li className="flex items-center gap-5 p-7 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] group hover:border-accent-gold/15 transition-all duration-300">
                                <Phone size={22} className="text-accent-gold shrink-0" />
                                <span className="text-white/50 text-[15px] font-light tracking-wide">
                                    <a href="tel:0659330312" className="hover:text-accent-gold transition-colors">06 59 33 03 12</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 md:pt-14 border-t border-white/[0.06] flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-10">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium text-white/35 text-center lg:text-left leading-loose">
                        © {new Date().getFullYear()} CARXLAB. ALL RIGHTS RESERVED.<br className="lg:hidden" />
                        <span className="text-accent-gold mr-4">LAB PROTOCOL VERIFIED.</span>
                        <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                            RÉALISÉ PAR <span className="font-black">MICRODIDACT</span>
                        </a>
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        <Link to="/mentions-legales" onClick={handleScrollToTop} className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/30 hover:text-accent-gold transition-colors font-medium">Mentions Légales</Link>
                        <Link to="/mentions-legales" onClick={handleScrollToTop} className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/30 hover:text-accent-gold transition-colors font-medium">Confidentialité</Link>
                        <Link to="/mentions-legales" onClick={handleScrollToTop} className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/30 hover:text-accent-gold transition-colors font-medium">CGV</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
