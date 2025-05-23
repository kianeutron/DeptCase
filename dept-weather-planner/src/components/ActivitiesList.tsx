"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
interface ActivityItemProps {
    title: string;
    description: string;
    imageSrc: string; 
    imageSrcMobile: string;
}
const ActivityItem: React.FC<ActivityItemProps> = ({ title, description, imageSrc, imageSrcMobile }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleImageError = () => {
        console.error(`Failed to load image: ${isMobile ? imageSrcMobile : imageSrc}`);
        setImageError(true);
    };

    return (
        <div className="flex flex-col sm:flex-row items-start py-4 border-b border-gray-200 gap-4 sm:gap-4 last:border-b-0">
            <div className="w-full sm:w-[80px] flex-shrink-0 sm:mr-4">
                {!imageError ? (
                    <Image
                        src={isMobile ? imageSrcMobile : imageSrc}
                        alt={title}
                        width={isMobile ? 320 : 80}
                        height={isMobile ? 180 : 80}
                        className="object-cover w-full h-auto sm:w-[80px] sm:h-[80px] rounded-md"
                        priority={isMobile}
                        onError={handleImageError}
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-[180px] sm:w-[80px] sm:h-[80px] bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Image not available</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-1 text-left">{title}</h3>
                <p className="text-sm text-gray-600 text-left">{description}</p>
            </div>
        </div>
    );
};

// Assuming activity data from API has minTemperature, maxTemperature, title, description, imageSrc, imageSrcMobile, and optionally url properties
interface ActivityFromAPI {
    title: string;
    description: string;
    imageSrc: string; 
    imageSrcMobile: string; 
    minTemperature: number;
    maxTemperature: number;
    url?: string; 
}

interface ActivitiesListProps {
    activities: ActivityFromAPI[]; 
    currentTemperature: number | null; 
}

const ActivitiesList: React.FC<ActivitiesListProps> = ({ activities, currentTemperature }) => {
    const activitiesArray = activities || [];
    
    const couldDoActivities = activitiesArray.filter(activity => 
        currentTemperature !== null &&
        currentTemperature >= activity.minTemperature &&
        currentTemperature <= activity.maxTemperature
    );

    const shouldNotDoActivities = activitiesArray.filter(activity => 
        currentTemperature !== null &&
        (currentTemperature < activity.minTemperature || currentTemperature > activity.maxTemperature)
    );

    return (
        <div className="flex flex-col gap-6 p-0">
            {/* Could Do Section */}
             {couldDoActivities.length > 0 && (
                 <>
                     <h2 className="text-2xl font-bold text-gray-800">Some things you could do:</h2>
                     <div className="flex flex-col">
                         {couldDoActivities.map((activity, index) => {
                             return (
                                 <ActivityItem 
                                     key={index} 
                                     title={activity.title} 
                                     description={activity.description} 
                                     imageSrc={activity.imageSrc} 
                                     imageSrcMobile={activity.imageSrcMobile} 
                                 />
                             );
                         })}
                     </div>
                 </>
             )}

            {/* Should Not Do Section */}
            {shouldNotDoActivities.length > 0 && (
                <>
                    <h2 className={`text-2xl font-bold text-gray-800 ${couldDoActivities.length > 0 ? 'mt-6' : ''}`}>Some things you should not do:</h2>
                    <div className="flex flex-col">
                        {shouldNotDoActivities.map((activity, index) => {
                            return (
                                <ActivityItem 
                                    key={index} 
                                    title={activity.title} 
                                    description={activity.description} 
                                    imageSrc={activity.imageSrc} 
                                    imageSrcMobile={activity.imageSrcMobile} 
                                />
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default ActivitiesList;
