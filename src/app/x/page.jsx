'use client';

import { useState } from 'react';
import DisasterMap from '../../components/disaster';

export default function Home() {
  const [location, setLocation] = useState('');
  const [risks, setRisks] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch(`/api/predict-disaster?location=${location}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setRisks(data.risks);
    } catch (err) {
      setError('Failed to predict disasters. Please try again.');
      console.error(err);
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

      <DisasterMap center={{ lat: 0, lng: 0 }} risks={risks} />
    </div>
  );
}