import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 md:py-8 flex items-start md:items-center justify-between gap-4 md:gap-6 text-left group transition-all"
                aria-expanded={isOpen}
            >
                <span className={`flex-1 min-w-0 text-sm md:text-lg font-bold uppercase tracking-[0.06em] md:tracking-[0.1em] leading-snug md:leading-normal transition-colors duration-300 break-words ${isOpen ? 'text-accent-gold' : 'text-white/70 group-hover:text-white'}`}>
                    {question}
                </span>
                <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 mt-0.5 md:mt-0 ${isOpen ? 'border-accent-gold text-accent-gold' : 'border-white/10 text-white/40'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 md:pb-12 text-white/40 leading-relaxed md:leading-loose font-light text-sm md:text-lg max-w-4xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = ({ items, subtitle }) => {
    const displayItems = items || [];

    /* JSON-LD FAQPage structured data for Google rich results */
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": displayItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": typeof item.answer === 'string' ? item.answer : item.question
            }
        }))
    };

    return (
        <section className="section-padding bg-black/30 relative overflow-hidden">
            {/* JSON-LD SEO Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-gold/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="main-container relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16 mb-14 md:mb-20">
                    <div className="max-w-2xl shrink-0">
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <span className="h-[2px] w-8 md:w-12 bg-accent-gold"></span>
                            <span className="text-accent-gold tracking-[0.4em] font-black text-[10px] md:text-xs uppercase">Assistance</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05]">
                            QUESTIONS <br /><span className="gold-gradient">FRÉQUENTES</span>
                        </h2>
                    </div>
                    <p className="text-white/30 text-base md:text-lg font-light max-w-md lg:max-w-sm lg:text-right lg:pb-2">
                        {subtitle || "Tout ce que vous devez savoir sur le protocole CarXLab et nos services."}
                    </p>
                </div>

                <div className="w-full glass-panel p-6 sm:p-8 md:p-12 lg:p-14 rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden">
                    {displayItems.map((item, index) => (
                        <FAQItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
