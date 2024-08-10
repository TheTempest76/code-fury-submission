import { NextResponse } from 'next/server';
import axios from 'axios';

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/forecast.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');

  if (!location) {
    return NextResponse.json({ error: 'Location is required' }, { status: 400 });
  }

  if (!WEATHER_API_KEY) {
    console.error('WEATHER_API_KEY is not set');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    console.log('Fetching weather data for:', location);
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        key: WEATHER_API_KEY,
        q: location,
        days: 7,
      },
    });

    console.log('Weather API response status:', response.status);

    const forecast = response.data.forecast.forecastday;
    const risks = analyzeForecast(forecast);
    const coordinates = {
      lat: response.data.location.lat,
      lon: response.data.location.lon
    };

    return NextResponse.json({ risks, coordinates });
  } catch (error) {
    console.error('Weather API error:', error.response ? error.response.data : error.message);
    return NextResponse.json({ error: 'Failed to fetch weather data', details: error.message }, { status: 500 });
  }
}
function analyzeForecast(forecast) {
  return forecast.map(day => {
    const { date, day: { maxtemp_c, mintemp_c, maxwind_kph, totalprecip_mm, avghumidity } } = day;

    let risks = [];

    if (maxtemp_c > 35) risks.push('Extreme heat');
    if (mintemp_c < 0) risks.push('Freezing conditions');
    if (maxwind_kph > 80) risks.push('Strong winds');
    if (totalprecip_mm > 50) risks.push('Heavy rainfall');
    if (avghumidity > 90) risks.push('High humidity');

    let riskLevel = 'Low';
    if (risks.length >= 2) riskLevel = 'Moderate';
    if (risks.length >= 3) riskLevel = 'High';

    return {
      date,
      riskLevel,
      risks: risks.join(', ') || 'No significant risks',
    };
  });
}
// ... rest of the file remains the same