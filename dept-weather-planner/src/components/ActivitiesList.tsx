import React from 'react';
import Image from 'next/image';

import swimmingImage from '../assets/images/swimming.png';
import cyclingImage from '../assets/images/cycling.png';
import beachImage from '../assets/images/beach.png';
import skatingImage from '../assets/images/skating.png';
import walkingImage from '../assets/images/walking.png';
import dartImage from '../assets/images/dart.png';

interface ActivityItemProps {
    title: string;
    description: string;
    imageSrc: any; 
}

const ActivityItem: React.FC<ActivityItemProps> = ({ title, description, imageSrc }) => {
    return (
        <div className="flex items-center py-4 border-b border-gray-200">
            {/* Image */}
            <div className="flex-shrink-0 mr-4">
                <Image src={imageSrc} alt={title} width={80} height={80} className=" object-cover" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-1 text-left">{title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 text-left">{description}</p>
            </div>
        </div>
    );
};

const activities = {
    couldDo: [
        {
            title: "Swimming",
            description: "In recreation and sports, the propulsion of the body through water by combined arm and leg motions.",
            imageSrc: swimmingImage,
        },
        {
            title: "Cycling",
            description: "A sustainable and exhilarating way to explore the world on two wheels. It's a great way to exercise.",
            imageSrc: cyclingImage,
        },
        {
            title: "Go to the beach",
            description: "Where sun, sand, and waves create the perfect setting for relaxation, tanning, and fun.",
            imageSrc: beachImage,
        },
    ],
    shouldNotDo: [
        {
            title: "Ice skating",
            description: "Gliding gracefully or spinning with joy on a frozen canvas of ice. Heerenveen is the place to be!",
            imageSrc: skatingImage,
        },
        {
            title: "Walking",
            description: "A simple and natural exercise that connects us to the world, rejuvenates the mind, and nourishes the body.",
            imageSrc: walkingImage,
        },
        {
            title: "Darts",
            description: "Precision, focus, and camaraderie combined in a game of skill and strategy. It's crazy.",
            imageSrc: dartImage,
        },
    ],
};

const ActivitiesList: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 p-6">
            {/* Could Do Section */}
            <h2 className="text-2xl font-bold text-gray-800">Some things you could do:</h2>
            <div className="flex flex-col">
                {activities.couldDo.map((activity, index) => (
                    <ActivityItem key={index} {...activity} />
                ))}
            </div>

            {/* Should Not Do Section */}
            <h2 className="text-2xl font-bold text-gray-800 mt-6">Some things you should not do:</h2>
            <div className="flex flex-col">
                {activities.shouldNotDo.map((activity, index) => (
                    <ActivityItem key={index} {...activity} />
                ))}
            </div>
        </div>
    );
};

export default ActivitiesList;
