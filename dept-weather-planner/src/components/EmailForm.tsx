'use client';

import React, { useState } from 'react';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        // Simulate submit
        setSubmitted(true);
        setTimeout(() => {
            setEmail('');
            setSubmitted(false);
        }, 2000);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
            <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:w-64 p-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:text-black placeholder:text-black text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-3xl hover:bg-blue-700 transition-colors disabled:opacity-50 flex-shrink-0 w-full sm:w-auto"
                disabled={submitted}
            >
                {submitted ? 'Subscribed!' : 'Submit'}
            </button>
        </form>
    );
};

export default EmailForm;
