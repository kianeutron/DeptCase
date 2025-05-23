import {NextResponse} from 'next/server';

const activities = [
    {
        title: "Swimming",
        description: "In recreation and sports, the propulsion of the body through water by combined arm and leg motions.",
        imageSrc: "/images/swimming.png",
        imageSrcMobile: "/images/mobile/swimming.png",
        minTemperature: 20,
        maxTemperature: 30,
        url: "#"
    },
    {
        title: "Cycling",
        description: "A sustainable and exhilarating way to explore the world on two wheels. It's a great way to exercise.",
        imageSrc: "/images/cycling.png",
        imageSrcMobile: "/images/mobile/cycling.png",
        minTemperature: 10,
        maxTemperature: 25,
        url: "#"
    },
    {
        title: "Go to the beach",
        description: "Where sun, sand, and waves create the perfect setting for relaxation, tanning, and fun.",
        imageSrc: "/images/beach.png",
        imageSrcMobile: "/images/mobile/beach.png",
        minTemperature: 22,
        maxTemperature: 35,
        url: "#"
    },
    {
        title: "Ice skating",
        description: "Gliding gracefully or spinning with joy on a frozen canvas of ice. Heerenveen is the place to be!",
        imageSrc: "/images/skating.png",
        imageSrcMobile: "/images/mobile/skating.png",
        minTemperature: -10,
        maxTemperature: 5,
        url: "#"
    },
    {
        title: "Walking",
        description: "A simple and natural exercise that connects us to the world, rejuvenates the mind, and nourishes the body.",
        imageSrc: "/images/walking.png",
        imageSrcMobile: "/images/mobile/walking.png",
        minTemperature: 5,
        maxTemperature: 20,
        url: "#"
    },
    {
        title: "Darts",
        description: "Precision, focus, and camaraderie combined in a game of skill and strategy. It's crazy.",
        imageSrc: "/images/dart.png",
        imageSrcMobile: "/images/mobile/dart.png",
        minTemperature: 15,
        maxTemperature: 30,
        url: "#"
    },
];

export async function GET() {
    return NextResponse.json(activities);
} 