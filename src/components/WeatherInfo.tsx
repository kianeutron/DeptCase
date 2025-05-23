'use client';
import React, { useState, useEffect } from 'react';

interface WeatherInfoProps {
    temperature: number | null;
    loading: boolean;
    error: string | null;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ temperature, loading, error }) => {
    return (
        <div className="bg-[#F0EBFE] p-6 rounded-lg w-full max-w-md mx-auto overflow-hidden">
            {/* Weather Information */}
            <div className="flex flex-col sm:flex-row items-center text-black">
                {loading && <div className="text-8xl font-medium">...</div>}
                {error && <div className="text-xl text-red-500">Error: {error}</div>}
                {temperature !== null && (
                    <div className="text-8xl font-medium">{temperature}<span className="text-4xl align-text-top">˚</span></div>
                )}

                <div className="flex flex-col ml-4 w-full sm:w-auto">
                    {loading && <p className="text-2xl font-semibold">Fetching weather...</p>}
                    {error && <p className="text-lg text-gray-600">Could not load weather information.</p>}
                    {temperature !== null && (
                        <>
                            <p className="text-2xl font-semibold sm:text-xl text-center sm:text-left">
                                It's currently around ~{temperature}˚ in the Netherlands
                            </p>
                            <p className="text-lg text-gray-600 mt-2 text-center sm:text-left">
                                Very sunny, and very unusual for the Netherlands. But we should enjoy it as long as it lasts.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;
