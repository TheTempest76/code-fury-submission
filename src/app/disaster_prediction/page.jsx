'use client';

import { useState } from 'react';
import DisasterMap from '../../components/disasterMap';

export default function Home() {
  const [location, setLocation] = useState('');
  const [risks, setRisks] = useState([]);
  const [error, setError] = useState('');
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const url = `/api/predict-disaster?location=${encodeURIComponent(location)}`;
      console.log('Fetching from URL:', url);
      
      const response = await fetch(url);
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch data: ${response.status} ${errorText}`);
      }
      
      const data = await response.json();
      console.log('Received data:', data);
      
      setRisks(data.risks);
      if (data.coordinates) {
        setMapCenter({ lat: data.coordinates.lat, lng: data.coordinates.lon });
      }
    } catch (err) {
      setError(`Failed to predict disasters: ${err.message}`);
      console.error('Detailed error:', err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Predict Disasters</button>
      </form>

      {error && <p style={{color: 'red'}}>{error}</p>}

      <div>
        <h2>Predicted Risks:</h2>
        {risks.length > 0 ? (
          <ul>
            {risks.map((risk, index) => (
              <li key={index}>
                {risk.date}: Risk Level - {risk.riskLevel}
                <br />
                Risks: {risk.risks}
              </li>
            ))}
          </ul>
        ) : (
          <p>No risks predicted yet. Enter a location to see predictions.</p>
        )}
      </div>

      <DisasterMap center={mapCenter} risks={risks} />
    </div>
  );
}