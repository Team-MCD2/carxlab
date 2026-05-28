import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import GoogleBadge from './GoogleBadge';

const ReviewCard = ({ name, date, text, rating = 5, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="surface-white flex flex-col h-full p-10 md:p-12"
    >
        {/* En-tête carte */}
        <div className="flex items-start justify-between gap-6 mb-10">
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-accent-gold shrink-0">
                <Quote size={20} fill="currentColor" />
            </div>
            <div className="flex gap-1">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent-gold text-accent-gold" />
                ))}
            </div>
        </div>

        {/* Citation */}
        <blockquote className="text-black text-base md:text-lg leading-[1.9] font-light flex-grow mb-10">
            « {text} »
        </blockquote>

        {/* Pied de carte */}
        <footer className="flex items-end justify-between gap-6 pt-8 border-t border-black/10">
            <div>
                <cite className="not-italic text-black font-black uppercase tracking-[0.12em] text-sm block">
                    {name}
                </cite>
                <time className="text-black/45 text-[10px] uppercase font-bold tracking-[0.2em] mt-2 block">
                    {date}
                </time>
            </div>
            <GoogleBadge />
        </footer>
    </motion.article>
);

const Reviews = () => {
    const reviews = [
        {
            name: 'Jean-Pierre Durand',
            date: 'Il y a 2 semaines',
            text: "Une expérience d'achat incomparable. Le protocole de vérification m'a donné une confiance totale dans mon acquisition. Équipe ultra-professionnelle.",
            rating: 5,
        },
        {
            name: 'Marc-Antoine Lefebvre',
            date: 'Il y a 1 mois',
            text: "Service de sourcing d'une efficacité redoutable. Ils ont trouvé exactement le modèle Porsche que je cherchais en moins de 10 jours. État clinique.",
            rating: 5,
        },
        {
            name: 'Sophie Vallet',
            date: 'Il y a 3 mois',
            text: 'Vente de ma RS6 effectuée via leur plateforme. Estimation juste, paiement rapide et dossier administratif géré de A à Z. Je recommande sans hésiter.',
            rating: 5,
        },
    ];

    return (
        <section className="section-padding section-dark relative overflow-hidden">
            <div className="main-container relative z-10">
                <div className="text-center mb-20 md:mb-28">
                    <span className="section-tag block text-center">Témoignages</span>
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight leading-[1.1] mb-12">
                        L'AVIS DE NOS <br />
                        <span className="text-accent-gold">PARTENAIRES</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
                        <div className="flex items-center gap-3">
                            <Star className="text-accent-gold fill-accent-gold" size={24} />
                            <span className="text-white font-black text-3xl">4.9/5</span>
                        </div>
                        <div className="hidden sm:block h-10 w-px bg-white/20" />
                        <p className="text-white/60 uppercase font-black tracking-widest text-[10px]">
                            Basé sur +250 avis Google
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} index={index} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
