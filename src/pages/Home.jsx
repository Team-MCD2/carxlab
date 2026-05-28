import React, { memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Search, FlaskConical, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Reviews from '../components/Reviews';
import FeatureCard from '../components/FeatureCard';
import LabProtocol from '../components/LabProtocol';

// Import Assets
import heroImg from '../assets/Carxlab.png';



const Home = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const MotionDiv = motion.div;

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-[calc(100vh-var(--header-height))] flex items-center justify-center overflow-hidden pt-24 pb-20 md:pt-0">
                <div className="absolute inset-0 z-0">
                    <motion.div style={{ y }} className="w-full h-full">
                        <LazyLoadImage
                            src={heroImg}
                            effect="blur"
                            alt="CarXLab Hero Background"
                            className="w-full h-full object-cover opacity-50 scale-105"
                            wrapperClassName="w-full h-full"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>

                    {/* Lab Grid & HUD elements */}
                    <div className="absolute inset-0 lab-grid opacity-20 pointer-events-none" />
                    <div className="absolute top-40 left-10 w-32 h-32 border-l border-t border-accent-gold/20 pointer-events-none hidden md:block" />
                    <div className="absolute bottom-40 right-10 w-32 h-32 border-r border-b border-accent-gold/20 pointer-events-none hidden md:block" />
                </div>

                <div className="main-container relative z-20 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="max-w-6xl w-full px-4"
                    >
                        <div className="section-label mb-10 md:mb-14 w-full max-w-md mx-auto">
                            <span className="text-accent-gold tracking-[0.25em] md:tracking-[0.5em] font-black text-[9px] md:text-sm uppercase">Prototype V4 // Lab</span>
                        </div>

                        <h1 className="hero-title mb-16 md:mb-20 flex flex-col items-center gap-4 md:gap-0">
                            <span>L'ART DE LA</span>
                            <span className="gold-gradient">PERFECTION</span>
                        </h1>

                        <div className="flex-center flex-col sm:flex-row gap-6 md:gap-10 mb-20 md:mb-24 w-full max-w-sm sm:max-w-none mx-auto">
                            <Link to="/stock" className="w-full sm:w-auto">
                                <button className="gold-button group gap-4 w-full">
                                    EXPLORER LE STOCK
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link to="/expertise" className="w-full sm:w-auto mt-2 sm:mt-0">
                                <button className="gold-button-outline w-full">
                                    NOS MÉTHODES
                                </button>
                            </Link>
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* Spécialiste + Services — section CLAIRE */}
            <section className="section-padding section-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gold/[0.04] blur-[180px] rounded-full pointer-events-none" />
                <div className="main-container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 xl:gap-28 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-10">
                                <MapPin size={16} className="text-accent-gold" />
                                <span className="text-accent-gold text-[10px] font-black uppercase tracking-[0.25em]">Garage Launaguet, Haute-Garonne</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl xl:text-7xl font-black mb-10 md:mb-14 uppercase tracking-tight leading-[1.05] text-black">
                                VOTRE SPÉCIALISTE <br /><span className="text-accent-gold">AUTO À LAUNAGUET</span>
                            </h2>

                            <p className="text-lg md:text-xl text-black/55 mb-16 md:mb-20 font-light leading-[1.85] max-w-2xl mx-auto lg:mx-0">
                                CarXLab est votre partenaire de confiance pour l'<strong className="text-black font-semibold">achat et la revente de véhicules d'occasion</strong> et de prestige à Launaguet. À 15 minutes de Toulouse, nous sélectionnons les meilleures pépites automobiles en Haute-Garonne.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-24">
                                {[
                                    { title: "Achat Cash", desc: "Reprise immédiate au meilleur prix du marché, sans démarche inutile.", icon: <Zap size={22} strokeWidth={1.75} /> },
                                    { title: "Stock Lab", desc: "Véhicules révisés sous protocole strict avant chaque mise en vente.", icon: <ShieldCheck size={22} strokeWidth={1.75} /> },
                                    { title: "Expertise 31", desc: "Service de proximité dédié aux passionnés et aux usages quotidiens.", icon: <MapPin size={22} strokeWidth={1.75} /> },
                                    { title: "Vente Flash", desc: "Vendez rapidement via notre réseau d'acheteurs qualifiés.", icon: <Search size={22} strokeWidth={1.75} /> },
                                ].map((item, i) => (
                                    <FeatureCard key={i} index={i} {...item} />
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-5 md:gap-8">
                                <Link to="/stock">
                                    <button className="gold-button px-12 md:px-14 py-5">ACHETER UN VÉHICULE</button>
                                </Link>
                                <Link to="/contact">
                                    <button className="gold-button-outline px-12 md:px-14 py-5 !border-black/20 !text-black hover:!bg-black hover:!text-white">VENDEZ VOTRE AUTO</button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:col-span-5 lg:sticky lg:top-32"
                        >
                            <div className="relative aspect-[4/5] card-light overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.12)] p-2">
                                <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden">
                                    <img
                                        src={heroImg}
                                        className="w-full h-full object-cover scale-105 hover:scale-100 transition-all duration-1000"
                                        alt="CarXLab Toulouse Garage"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 z-10">
                                        <div className="w-20 h-20 mb-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                            <MapPin size={36} className="text-accent-gold" />
                                        </div>
                                        <h3 className="text-3xl font-black uppercase tracking-widest text-white mb-5">LAUNAGUET</h3>
                                        <div className="soft-divider w-20 mb-5 opacity-80" />
                                        <p className="text-white/70 text-xs font-semibold tracking-[0.35em] uppercase">Secteur Toulouse (31)</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <Reviews />

            {/* Find Us Section */}
            <section className="section-padding section-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/[0.06] blur-[150px] rounded-full pointer-events-none" />
                <div className="main-container relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-20 md:gap-24 xl:gap-32">
                        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="section-label section-label-light mb-10 w-full md:justify-start">
                                <span className="text-accent-gold tracking-[0.35em] font-black text-xs uppercase">Localisation</span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black mb-16 md:mb-20 uppercase tracking-tight leading-[1.1] text-black">
                                OÙ NOUS <br /><span className="text-accent-gold">TROUVER</span>
                            </h2>
                            <div className="space-y-8 w-full flex flex-col items-center md:items-stretch max-w-md md:max-w-none">
                                <div className="card-light-soft flex flex-col md:flex-row items-center md:items-start gap-6 p-8 md:p-10 group">
                                    <div className="w-16 h-16 rounded-2xl bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0">
                                        <MapPin size={28} />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h4 className="text-black font-black uppercase tracking-widest mb-3">Le Laboratoire</h4>
                                        <p className="text-black/50 text-base md:text-lg font-light leading-relaxed">4 impasses du pont<br />31140 Launaguet, France</p>
                                    </div>
                                </div>
                                <div className="card-light-soft flex flex-col md:flex-row items-center md:items-start gap-6 p-8 md:p-10 group">
                                    <div className="w-16 h-16 rounded-2xl bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0">
                                        <Phone size={28} />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h4 className="text-black font-black uppercase tracking-widest mb-3">Ligne Directe</h4>
                                        <p className="text-black/50 text-base md:text-lg font-light leading-relaxed">
                                            <a href="tel:0659330312" className="hover:text-accent-gold transition-colors">06 59 33 03 12</a><br />Expertise & Stock
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 flex justify-center md:justify-start w-full">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=4+impasse+du+pont+31140+Launaguet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="gold-button px-14 group inline-flex"
                                >
                                    OUVRIR DANS MAPS
                                    <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-video md:aspect-square card-light-soft overflow-hidden group p-1">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.67!2d1.46!3d43.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb1!2s4+Imp.+du+Pont%2C+31140+Launaguet!5e0!3m2!1sfr!2sfr!4v1"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="opacity-60 hover:opacity-100 transition-opacity duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO éditorial — section SOMBRE */}
            <section className="section-padding section-dark relative overflow-hidden">
                <div className="absolute inset-0 lab-grid opacity-[0.06] pointer-events-none" />
                <div className="main-container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 xl:gap-28">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4 lg:sticky lg:top-32 self-start"
                        >
                            <div className="section-label mb-8 md:justify-start">
                                <span className="text-accent-gold tracking-[0.35em] font-black text-xs uppercase">Expertise</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-[1.08] text-white mb-8">
                                VÉHICULES D'OCCASION <span className="text-accent-gold">À TOULOUSE</span>
                            </h2>
                            <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-md">
                                Launaguet · Haute-Garonne · Métropole toulousaine
                            </p>
                            <div className="soft-divider w-full max-w-xs mt-12 opacity-50" />
                            <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-accent-gold/70 font-black">
                                Expertise Automobile Lab
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="lg:col-span-8 flex flex-col gap-12 md:gap-16"
                        >
                            <p className="text-lg md:text-xl lg:text-2xl text-white/70 font-light leading-[1.85]">
                                Bienvenue chez <strong className="text-white font-medium">CarXLab</strong>, votre garage spécialisé dans la vente de voitures d'occasion premium. Notre laboratoire automobile est situé à Launaguet, à quelques minutes de <strong className="text-white font-medium">Toulouse</strong>, Blagnac et l'Union.
                            </p>
                            <p className="text-base md:text-lg text-white/45 font-light leading-[1.9]">
                                Que vous recherchiez une berline de luxe, un SUV familial ou une sportive d'exception, notre catalogue live est mis à jour quotidiennement. Chaque annonce détaille l'historique du véhicule, son kilométrage certifié et ses options exclusives — pour Aucamville, Saint-Alban, Castelginest et toute la métropole.
                            </p>
                            <p className="text-base md:text-lg text-white/45 font-light leading-[1.9]">
                                Profitez aussi de notre expertise pour le rachat cash de votre véhicule. Nous rachetons tous types de modèles récents au meilleur prix du marché local. Faites confiance à CarXLab pour votre prochain achat dans le 31.
                            </p>
                            <div className="pt-6 md:pt-8">
                                <Link to="/stock" className="gold-button group gap-4 px-10 md:px-12 py-5 inline-flex">
                                    Parcourir le stock
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Protocole lab — section SOMBRE animée */}
            <LabProtocol />

            {/* CTA — section SOMBRE */}
            <section className="section-padding section-dark relative flex items-center justify-center overflow-hidden pb-28 md:pb-36">
                <div className="main-container text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-4xl md:text-7xl font-black mb-12 md:mb-16 uppercase leading-[1.05] tracking-tight text-white">
                            VOTRE <br /><span className="text-accent-gold">FUTUR</span> EST ICI
                        </h2>
                        <p className="text-lg md:text-xl text-white/55 mb-16 md:mb-20 max-w-2xl mx-auto font-light leading-[1.85]">
                            Vendez votre véhicule au juste prix ou trouvez la perle rare parmi notre stock ultra-limité.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25, duration: 0.6 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-6 w-full px-6"
                        >
                            <Link to="/contact" className="w-full md:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="gold-button w-full px-12 py-5 text-xs"
                                >
                                    PRENDRE RENDEZ-VOUS
                                </motion.button>
                            </Link>
                            <Link to="/stock" className="w-full md:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="gold-button-outline w-full px-12 py-5 text-xs"
                                >
                                    CATALOGUE LIVE
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-accent-gold/[0.06] blur-[200px] rounded-full pointer-events-none" />
            </section>
        </div>
    );
};

export default memo(Home);
