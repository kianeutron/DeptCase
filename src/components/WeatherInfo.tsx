'use client';

import React from 'react';

interface WeatherInfoProps {
    temperature: number | null;
    loading: boolean;
    error: string | null;
    location: string | null;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
                                                     temperature,
                                                     loading,
                                                     error,
                                                     location,
                                                 }) => {
    return (
        <div className="bg-[#F0EBFE] p-6 rounded-lg w-full max-w-md mx-auto overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center text-black gap-4">
                {loading && (
                    <div className="text-6xl sm:text-8xl font-medium text-center sm:text-left">
                        ...
                    </div>
                )}
                {error && (
                    <div className="text-xl text-red-500 text-center sm:text-left">
                        Error: {error}
                    </div>
                )}
                {temperature !== null && (
                    <div className="text-6xl sm:text-8xl font-medium text-center sm:text-left">
                        {temperature}
                        <span className="text-3xl sm:text-4xl align-text-top">˚</span>
                    </div>
                )}

                <div className="flex flex-col w-full">
                    {loading && (
                        <p className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
                            Fetching weather...
                        </p>
                    )}
                    {error && (
                        <p className="text-base text-gray-600 text-center sm:text-left">
                            Could not load weather information.
                        </p>
                    )}
                    {temperature !== null && (
                        <>
                            <p className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
                                It's currently around ~{temperature}˚ in {location ?? 'your area'}
                            </p>
                            <p className="text-base text-gray-600 mt-2 text-center sm:text-left">
                                Very sunny, and very unusual for {location ?? 'this region'}. But we should enjoy it as
                                long as it lasts.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;
