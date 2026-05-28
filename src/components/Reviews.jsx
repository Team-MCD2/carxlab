import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import GoogleBadge from './GoogleBadge';

const ReviewCard = ({ name, date, text, rating = 5 }) => (
    <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-review p-10 md:p-12 lg:p-14 flex flex-col gap-8 h-full min-h-[320px]"
    >
        <div className="flex items-center justify-between gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-gold/90 flex items-center justify-center text-[#1a1814] shrink-0">
                <Quote size={20} fill="currentColor" />
            </div>
            <div className="flex gap-1">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#b8962e] text-[#b8962e]" />
                ))}
            </div>
        </div>

        <p className="text-[#3d3830] text-base md:text-lg leading-[1.85] font-light italic flex-grow">
            "{text}"
        </p>

        <div className="pt-8 border-t border-[#ddd8ce] flex justify-between items-end gap-6">
            <div>
                <h4 className="text-[#1a1814] font-black uppercase tracking-widest text-sm">{name}</h4>
                <p className="text-[#8a8478] text-[10px] uppercase font-bold tracking-widest mt-2">{date}</p>
            </div>
            <GoogleBadge />
        </div>
    </motion.article>
);

const Reviews = () => {
    const reviews = [
        {
            name: "Jean-Pierre Durand",
            date: "Il y a 2 semaines",
            text: "Une expérience d'achat incomparable. Le protocole de vérification m'a donné une confiance totale dans mon acquisition. Équipe ultra-professionnelle.",
            rating: 5
        },
        {
            name: "Marc-Antoine Lefebvre",
            date: "Il y a 1 mois",
            text: "Service de sourcing d'une efficacité redoutable. Ils ont trouvé exactement le modèle Porsche que je cherchais en moins de 10 jours. État clinique.",
            rating: 5
        },
        {
            name: "Sophie Vallet",
            date: "Il y a 3 mois",
            text: "Vente de ma RS6 effectuée via leur plateforme. Estimation juste, paiement rapide et dossier administratif géré de A à Z. Je recommande sans hésiter.",
            rating: 5
        }
    ];

    return (
        <section className="section-padding section-reviews relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(212,175,55,0.07)_0%,transparent_55%)] pointer-events-none" />

            <div className="main-container relative z-10">
                <div className="text-center mb-20 md:mb-24">
                    <div className="section-label mb-8">
                        <span className="text-[#d4af37] tracking-[0.35em] font-black text-xs uppercase">Témoignages</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[1.15] mb-12">
                        <span className="text-[#f0ebe3]">L'AVIS DE NOS</span>
                        <br />
                        <span className="text-[#d4af37]">PARTENAIRES</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
                        <div className="flex items-center gap-3">
                            <Star className="text-[#d4af37] fill-[#d4af37]" size={24} />
                            <span className="text-[#f0ebe3] font-black text-3xl">4.9/5</span>
                        </div>
                        <div className="hidden sm:block h-10 w-px bg-white/15" />
                        <p className="text-[#a39e92] uppercase font-black tracking-widest text-[10px]">
                            Basé sur +250 avis Google
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
