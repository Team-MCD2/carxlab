import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/333carxlab.png';

const contactCards = [
    {
        icon: MapPin,
        label: 'Adresse',
        content: (
            <>
                4 impasses du pont,
                <br />
                31140 Launaguet
            </>
        ),
        href: 'https://www.google.com/maps/search/?api=1&query=4+impasse+du+pont+31140+Launaguet',
        external: true,
    },
    {
        icon: Phone,
        label: 'Téléphone',
        content: '06 59 33 03 12',
        href: 'tel:0659330312',
    },
    {
        icon: Mail,
        label: 'E-mail',
        content: 'Carxlab31@gmail.com',
        href: 'mailto:Carxlab31@gmail.com',
    },
];

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    return (
        <footer className="relative mt-20 md:mt-32 overflow-hidden">
            {/* Transition douce depuis la section précédente */}
            <div
                className="h-12 md:h-16 w-full bg-black pointer-events-none"
                aria-hidden
            />

            <div className="bg-[var(--bg-card)] border-t border-white/[0.05] pt-20 md:pt-28 pb-16 md:pb-24 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-accent-gold/5 blur-[150px] pointer-events-none" />

                <div className="main-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 lg:gap-24 mb-20 md:mb-28"
                    >
                        {/* Brand */}
                        <div className="md:col-span-12 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left gap-8">
                            <Link
                                to="/"
                                onClick={handleScrollToTop}
                                className="inline-block w-fit opacity-85 hover:opacity-100 transition-opacity"
                            >
                                <img
                                    src={logo}
                                    alt="Carxlab"
                                    className="h-14 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </Link>
                            <p className="text-white/45 max-w-sm text-base md:text-lg font-light leading-[1.85]">
                                Plus qu'un showroom, une expertise de précision. Bienvenue dans l'ère de l'automobile analytique.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="md:col-span-6 lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left gap-8">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.35em] flex items-center justify-center md:justify-start gap-4 w-full">
                                <span className="hidden md:block soft-divider w-10 shrink-0" />
                                Services
                            </h4>
                            <ul className="space-y-5 md:space-y-6 w-full">
                                {[
                                    { name: 'Expertise Lab', path: '/expertise' },
                                    { name: 'Achat Express', path: '/achat' },
                                    { name: 'Stock Réel', path: '/stock' },
                                    { name: 'Solutions Financement', path: '/contact' },
                                ].map((linkItem, i) => (
                                    <motion.li
                                        key={linkItem.name}
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.06, duration: 0.4 }}
                                    >
                                        <Link
                                            to={linkItem.path}
                                            onClick={handleScrollToTop}
                                            className="text-white/40 hover:text-white transition-colors text-[15px] font-medium tracking-wide flex items-center justify-center md:justify-start gap-3 group py-1"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/0 group-hover:bg-accent-gold transition-all duration-300" />
                                            {linkItem.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact — cartes larges */}
                        <div className="md:col-span-12 lg:col-span-5 flex flex-col items-center md:items-stretch text-center md:text-left gap-8">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.35em] flex items-center justify-center md:justify-start gap-4 w-full">
                                <span className="hidden md:block soft-divider w-10 shrink-0" />
                                Contact
                            </h4>
                            <ul className="flex flex-col gap-5 w-full">
                                {contactCards.map((card, i) => {
                                    const Icon = card.icon;
                                    const inner = (
                                        <>
                                            <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center text-accent-gold shrink-0">
                                                <Icon size={24} />
                                            </div>
                                            <div className="flex-1 min-w-0 text-left">
                                                <span className="block text-[10px] uppercase tracking-[0.3em] text-accent-gold font-black mb-2">
                                                    {card.label}
                                                </span>
                                                <span className="text-black/65 text-base md:text-[17px] leading-relaxed font-light">
                                                    {card.content}
                                                </span>
                                            </div>
                                        </>
                                    );
                                    return (
                                        <motion.li
                                            key={card.label}
                                            initial={{ opacity: 0, y: 16 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08, duration: 0.5 }}
                                            whileHover={{ scale: 1.01 }}
                                        >
                                            {card.href ? (
                                                <a
                                                    href={card.href}
                                                    target={card.external ? '_blank' : undefined}
                                                    rel={card.external ? 'noopener noreferrer' : undefined}
                                                    className="group surface-white flex items-center gap-6 md:gap-8 w-full p-8 md:p-10 hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)] transition-all duration-300"
                                                >
                                                    {inner}
                                                </a>
                                            ) : (
                                                <div className="group surface-white flex items-center gap-6 md:gap-8 w-full p-8 md:p-10">
                                                    {inner}
                                                </div>
                                            )}
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Bottom bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="pt-14 md:pt-16 border-t border-white/[0.06] flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-10"
                    >
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] font-medium text-white/40 text-center lg:text-left leading-loose">
                            © {new Date().getFullYear()} CARXLAB. ALL RIGHTS RESERVED.
                            <br className="lg:hidden" />
                            <span className="text-accent-gold mx-2 md:mx-4">LAB PROTOCOL VERIFIED.</span>
                            <a
                                href="https://microdidact.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors duration-300"
                            >
                                RÉALISÉ PAR <span className="font-black">MICRODIDACT</span>
                            </a>
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            {['Mentions Légales', 'Confidentialité', 'CGV'].map((label) => (
                                <Link
                                    key={label}
                                    to="/mentions-legales"
                                    onClick={handleScrollToTop}
                                    className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-white/35 hover:text-accent-gold transition-colors font-medium"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
