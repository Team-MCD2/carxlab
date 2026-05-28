import React, { useState } from 'react';
import { Car } from 'lucide-react';

const SafeImage = ({ src, alt, className = '', fallbackClassName = '' }) => {
    const [failed, setFailed] = useState(false);

    if (!src || failed) {
        return (
            <div className={`img-fallback w-full h-full ${fallbackClassName}`}>
                <Car size={40} strokeWidth={1} className="text-white/10" />
                {alt && <span className="sr-only">{alt}</span>}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading="lazy"
            onError={() => setFailed(true)}
        />
    );
};

export default SafeImage;
