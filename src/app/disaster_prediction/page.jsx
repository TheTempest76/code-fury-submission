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
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="p-2 border border-gray-300 rounded w-full"
          />
          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            evaluate risk
          </button>
        </div>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      <div className="text-gray-800">

        {risks.length > 0 ? (
          <div>
                    <h2 className="text-lg font-semibold mb-4 text-white">Predicted Risks:</h2>
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Risk Level</th>
                <th className="px-4 py-2">Risks</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((risk, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border px-4 py-2">{risk.date}</td>
                  <td className="border px-4 py-2">{risk.riskLevel}</td>
                  <td className="border px-4 py-2">{risk.risks}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        ) : (
          <p className='text-white'>No risks predicted yet. Enter a location to see predictions.</p>
        )}
      </div>
        <div className='mt-10'>
        <DisasterMap center={mapCenter} risks={risks} />
        </div>

    </div>
  );
}

