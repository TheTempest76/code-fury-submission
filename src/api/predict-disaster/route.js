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

  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        key: WEATHER_API_KEY,
        q: location,
        days: 7,
      },
    });

    const forecast = response.data.forecast.forecastday;
    const risks = analyzeForecast(forecast);

    return NextResponse.json({ risks });
  } catch (error) {
    console.error('Weather API error:', error);
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
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
