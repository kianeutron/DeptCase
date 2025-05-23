import React from 'react';

const WeatherInfo: React.FC = () => {
    return (
        <div className="bg-[#F0EBFE] p-6 rounded-lg w-full max-w-md mx-auto">
            {/* Weather Information */}
            <div className="flex items-center text-black">
                <div className="text-8xl font-medium">24<span className="text-4xl align-text-top">˚</span></div>
                <div className="flex flex-col ml-4">
                    <p className="text-2xl font-semibold">It's currently around ~24˚ in the Netherlands</p>
                    <p className="text-lg text-gray-600 mt-2">Very sunny, and very unusual for the Netherlands. But we should enjoy it as long as it lasts.</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;
