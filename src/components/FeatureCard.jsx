import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, desc, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
        className="feature-card group relative flex flex-col h-full"
    >
        {/* Numéro décoratif */}
        <span
            className="absolute top-6 right-7 md:top-8 md:right-9 text-5xl md:text-6xl font-black text-black/[0.04] select-none pointer-events-none leading-none tabular-nums"
            aria-hidden
        >
            {String(index + 1).padStart(2, '0')}
        </span>

        {/* Icône */}
        <div className="feature-card-icon mb-8 md:mb-10">
            {icon}
        </div>

        {/* Contenu */}
        <div className="flex flex-col gap-4 flex-1 pr-4">
            <h4 className="text-lg md:text-xl font-black uppercase tracking-[0.08em] text-black leading-tight group-hover:text-[#9a7b1a] transition-colors duration-300">
                {title}
            </h4>
            <p className="text-[15px] md:text-base text-black/50 leading-[1.85] font-light">
                {desc}
            </p>
        </div>

        {/* Ligne d'accent au survol */}
        <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-accent-gold/0 to-transparent group-hover:via-accent-gold/60 transition-all duration-500 rounded-full" />
    </motion.article>
);

export default FeatureCard;
