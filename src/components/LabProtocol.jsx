import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Wrench, BadgeCheck, KeyRound, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
    {
        icon: Microscope,
        num: '01',
        title: 'Diagnostic complet',
        desc: 'Inspection mécanique, carrosserie et historique avant toute mise en vente.',
    },
    {
        icon: Wrench,
        num: '02',
        title: 'Révision lab',
        desc: 'Préparation esthétique et technique selon notre protocole interne.',
    },
    {
        icon: BadgeCheck,
        num: '03',
        title: 'Certification',
        desc: 'Chaque véhicule est validé et documenté pour une transparence totale.',
    },
    {
        icon: KeyRound,
        num: '04',
        title: 'Remise des clés',
        desc: 'Accompagnement administratif et livraison en toute sérénité.',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.14, delayChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const LabProtocol = () => (
    <section className="section-padding section-light relative overflow-hidden">
        <div className="main-container relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
            >
                <div className="section-label section-label-light mb-8">
                    <span className="text-accent-gold tracking-[0.35em] font-black text-xs uppercase">Notre méthode</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.08] text-black mb-8">
                    LE PROTOCOLE <span className="text-accent-gold">CARXLAB</span>
                </h2>
                <p className="text-black/55 text-lg md:text-xl font-light leading-[1.85]">
                    Quatre étapes pour garantir qualité, transparence et sérénité à chaque transaction.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
            >
                {steps.map((step) => (
                    <motion.article key={step.num} variants={item} className="protocol-step group">
                        <div className="flex items-center justify-between">
                            <span className="protocol-step-num">{step.num}</span>
                            <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-accent-gold transition-all duration-400">
                                <step.icon size={22} strokeWidth={1.75} />
                            </div>
                        </div>
                        <h3 className="text-base md:text-lg font-black uppercase tracking-[0.1em] text-black leading-snug">
                            {step.title}
                        </h3>
                        <p className="text-sm md:text-[15px] text-black/55 leading-[1.8] font-light flex-1">
                            {step.desc}
                        </p>
                    </motion.article>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="flex justify-center mt-16 md:mt-24"
            >
                <Link
                    to="/expertise"
                    className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white text-xs font-black uppercase tracking-[0.25em] rounded-full hover:bg-accent-gold hover:text-black transition-all duration-300"
                >
                    Découvrir notre expertise <ArrowRight size={16} />
                </Link>
            </motion.div>
        </div>
    </section>
);

export default LabProtocol;
