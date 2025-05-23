'use client';

import { useState } from 'react';

interface ReadMoreProps {
    text: string;
    maxLength?: number;
}

const ReadMore = ({ text, maxLength = 100 }: ReadMoreProps) => {
    const [expanded, setExpanded] = useState(false);

    if (text.length <= maxLength) {
        return <p>{text}</p>;
    }

    const toggleExpanded = () => setExpanded((prev) => !prev);

    return (
        <div>
            <p className="text-base text-gray-700 dark:text-gray-300">
                {expanded ? text : `${text.slice(0, maxLength)}...`}
                <button
                    onClick={toggleExpanded}
                    className="ml-2 text-white hover:underline dark:text-white"
                >
                    {expanded ? 'Read less' : 'Read more'}
                </button>
            </p>
        </div>
    );
};

export default ReadMore;
