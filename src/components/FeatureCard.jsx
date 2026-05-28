import React from 'react';

const FeatureCard = ({ icon, title, desc, index }) => (
    <article className="card-light group flex flex-col sm:flex-row items-start gap-6 md:gap-8 p-8 md:p-10 lg:p-12 h-full transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4 shrink-0">
            <span className="text-[10px] font-black text-black/20 tracking-widest tabular-nums">
                {String(index + 1).padStart(2, '0')}
            </span>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent-gold/10 border border-accent-gold/15 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-black transition-all duration-500">
                {icon}
            </div>
        </div>
        <div className="space-y-4 flex-1 min-w-0">
            <h4 className="text-base md:text-lg font-black uppercase tracking-[0.12em] text-black group-hover:text-accent-gold transition-colors">
                {title}
            </h4>
            <p className="text-sm md:text-base text-black/55 leading-[1.8] font-light">
                {desc}
            </p>
        </div>
    </article>
);

export default FeatureCard;
