import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = 'a998d9b31b3348d8aa1165852252305'; 
    const location = 'Amsterdam,Netherlands';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            const errorBody = response.headers.get('content-type')?.includes('application/json') ? await response.json() : await response.text();
            console.error(`WeatherAPI error: ${response.status}`, errorBody);
            return NextResponse.json({ message: 'Failed to fetch weather data', error: errorBody }, { status: response.status });
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Server error fetching weather:', error);
        return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
    }
} 