"use client"
import Logo from "@/components/Logo";
import ReadMore from "@/components/ReadMore";
import EmailForm from "@/components/EmailForm";
import WeatherInfo from "@/components/WeatherInfo";
import ActivitiesList from "@/components/ActivitiesList";
import { useState, useEffect } from "react";

export default function Home() {
    const firstParagraph = `Picture this: an application that doesn't just tell you the weather, but also helps you plan your activities around it. Imagine knowing exactly the perfect day to plan that hike, or when to avoid the outdoor concert due to an unexpected shower. That's exactly what the Dept Weather Planner offers you.`;

    const secondParagraph = `Built with cutting-edge technologies, our weather planner brings you accurate, real-time weather data with a slick and user-friendly interface. But it's not just a weather app; it's an intuitive daily planner that syncs with the weather. With a range of activities to choose from, it suggests the best options based on current and forecasted weather conditions.`;

    const [currentTemperature, setCurrentTemperature] = useState<number | null>(null);
    const [allActivities, setAllActivities] = useState<any[]>([]);
    const [loadingWeather, setLoadingWeather] = useState(true);
    const [loadingActivities, setLoadingActivities] = useState(true);
    const [weatherError, setWeatherError] = useState<string | null>(null);
    const [activitiesError, setActivitiesError] = useState<string | null>(null);

    // Fetch Weather Data from local API route
    useEffect(() => {
        const fetchWeather = async () => {
            const apiUrl = '/api/get-weather'; 

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCurrentTemperature(data.current.temp_c);
            } catch (err: any) {
                setWeatherError(err.message);
            } finally {
                setLoadingWeather(false);
            }
        };

        fetchWeather();
    }, []);

    // Fetch Activities Data
    useEffect(() => {
        const fetchActivities = async () => {
            // Fetching from the new local API route
            const apiUrl = '/api/get-activities'; 

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                     // Check if response is JSON before trying to parse
                     const errorBody = response.headers.get('content-type')?.includes('application/json') ? await response.json() : await response.text();
                    throw new Error(`HTTP error! status: ${response.status} - ${typeof errorBody === 'string' ? errorBody : JSON.stringify(errorBody)}`);
                }
                const data = await response.json();
                // Assuming the API returns an array of activities directly
                if (Array.isArray(data)) {
                    setAllActivities(data);
                } else {
                    throw new Error('API did not return an array of activities');
                }
            } catch (err: any) {
                setActivitiesError(err.message);
            } finally {
                setLoadingActivities(false);
            }
        };

        fetchActivities();
    }, []);

    const loading = loadingWeather || loadingActivities;
    const error = weatherError || activitiesError;

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left section - purple part with form */}
                <div className="flex flex-col">
                    <div className="bg-[#5115F7] text-white p-8 flex flex-col justify-start">
                        <div className="flex flex-col items-center">
                            <div className="flex justify-center w-full ml-[-270px]">
                                <Logo />
                            </div>
                            <h1 className="text-5xl font-medium mt-6 text-center">
                                DEPT® weather <span className="block text-left">planner</span>
                            </h1>
                            <div className="mt-8 max-w-md leading-[1.8]">
                                <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                                    {firstParagraph}
                                </p>
                                <ReadMore text={secondParagraph} maxLength={150} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F2F2F2] p-8 flex flex-col items-center">
                        <div className="w-full sm:w-[320px]">
                            <p className="text-xl text-black mb-4 text-left">Want to get a daily forecast?</p>
                            <EmailForm />
                        </div>
                    </div>
                </div>

                {/* Right section */}
                <div className="bg-white p-8 flex flex-col gap-8">
                    <WeatherInfo temperature={currentTemperature} loading={loadingWeather} error={weatherError} />
                    {loading ? (
                         <div>Loading activities...</div>
                    ) : error ? (
                         <div className="text-red-500">Error loading activities: {activitiesError}</div>
                    ) : (
                        <ActivitiesList activities={allActivities} currentTemperature={currentTemperature} />
                    )}
                </div>
            </div>
        </div>
    );
}
