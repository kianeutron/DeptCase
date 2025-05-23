'use client';

import { useState } from 'react';

interface ReadMoreProps {
    text: string;
    maxLength?: number;
}

const ReadMore = ({ text, maxLength = 150 }: ReadMoreProps) => {
    const [expanded, setExpanded] = useState(false);

    const cleanText = text.trim(); 

    if (cleanText.length <= maxLength) {
        return <p className="text-base text-gray-700 dark:text-gray-300">{cleanText}</p>;
    }

    const preview = cleanText.slice(0, maxLength);

    return (
        <div className="text-base text-gray-700 dark:text-gray-300">
            <p>
                {expanded ? cleanText : `${preview}...`}
            </p>
            <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-sm font-medium text-white hover:underline dark:text-white"
            >
                {expanded ? 'Read less' : 'Read more'}
            </button>
        </div>
    );
};

export default ReadMore;
