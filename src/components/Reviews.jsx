import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GoogleBadge from './GoogleBadge';

const ReviewCard = ({ name, date, text, rating = 5, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="card-on-dark p-10 md:p-12 flex flex-col h-full min-h-[340px]"
    >
        <div className="flex items-center justify-between gap-4 mb-10 pb-8 border-b-2 border-black">
            <div className="flex gap-1">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent-gold text-accent-gold" />
                ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-black/40">
                Avis vérifié
            </span>
        </div>

        <blockquote className="text-black text-lg md:text-xl leading-[1.75] font-light flex-grow mb-10">
            « {text} »
        </blockquote>

        <footer className="flex items-end justify-between gap-6 pt-6 border-t border-black/10">
            <div>
                <p className="text-black font-black uppercase tracking-[0.12em] text-sm">{name}</p>
                <p className="text-black/45 text-[11px] uppercase font-bold tracking-widest mt-2">{date}</p>
            </div>
            <GoogleBadge />
        </footer>
    </motion.article>
);

const Reviews = () => {
    const reviews = [
        {
            name: "Jean-Pierre Durand",
            date: "Il y a 2 semaines",
            text: "Une expérience d'achat incomparable. Le protocole de vérification m'a donné une confiance totale dans mon acquisition. Équipe ultra-professionnelle.",
            rating: 5,
        },
        {
            name: "Marc-Antoine Lefebvre",
            date: "Il y a 1 mois",
            text: "Service de sourcing d'une efficacité redoutable. Ils ont trouvé exactement le modèle Porsche que je cherchais en moins de 10 jours. État clinique.",
            rating: 5,
        },
        {
            name: "Sophie Vallet",
            date: "Il y a 3 mois",
            text: "Vente de ma RS6 effectuée via leur plateforme. Estimation juste, paiement rapide et dossier administratif géré de A à Z. Je recommande sans hésiter.",
            rating: 5,
        },
    ];

    return (
        <section className="section-padding section-dark relative overflow-hidden">
            <div className="absolute inset-0 lab-grid opacity-[0.05] pointer-events-none" />

            <div className="main-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 md:mb-28"
                >
                    <div className="section-label mb-8">
                        <span className="text-accent-gold tracking-[0.35em] font-black text-xs uppercase">Témoignages</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight leading-[1.12] mb-12">
                        L'AVIS DE NOS <br /><span className="text-accent-gold">PARTENAIRES</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
                        <div className="flex items-center gap-3">
                            <Star className="text-accent-gold fill-accent-gold" size={26} />
                            <span className="text-white font-black text-3xl">4.9/5</span>
                        </div>
                        <div className="hidden sm:block h-10 w-px bg-white/20" />
                        <p className="text-white/60 uppercase font-black tracking-widest text-[10px]">
                            Basé sur +250 avis Google
                        </p>
                    </div>
                </motion.div>

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
