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
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const LabProtocol = () => (
    <section className="section-padding section-dark relative overflow-hidden">
        <div className="absolute inset-0 lab-grid opacity-[0.07] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-accent-gold/[0.04] blur-[160px] rounded-full pointer-events-none" />

        <div className="main-container relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
            >
                <div className="section-label mb-8">
                    <span className="text-accent-gold tracking-[0.35em] font-black text-xs uppercase">Notre méthode</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.08] text-white mb-8">
                    LE PROTOCOLE <span className="text-accent-gold">CARXLAB</span>
                </h2>
                <p className="text-white/45 text-lg md:text-xl font-light leading-[1.85]">
                    Quatre étapes pour garantir qualité, transparence et sérénité à chaque transaction.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
                {steps.map((step) => (
                    <motion.article
                        key={step.num}
                        variants={item}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        className="card-soft p-8 md:p-10 flex flex-col gap-6 group"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-accent-gold/60 tracking-[0.3em]">{step.num}</span>
                            <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-black transition-all duration-500">
                                <step.icon size={22} />
                            </div>
                        </div>
                        <h3 className="text-base font-black uppercase tracking-[0.12em] text-white group-hover:text-accent-gold transition-colors">
                            {step.title}
                        </h3>
                        <p className="text-sm text-white/45 leading-[1.8] font-light flex-1">{step.desc}</p>
                    </motion.article>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex justify-center mt-16 md:mt-24"
            >
                <Link
                    to="/expertise"
                    className="inline-flex items-center gap-4 text-accent-gold text-xs font-black uppercase tracking-[0.3em] hover:gap-6 transition-all duration-300"
                >
                    Découvrir notre expertise <ArrowRight size={16} />
                </Link>
            </motion.div>
        </div>
    </section>
);

export default LabProtocol;
