import { useState } from 'react';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function DisasterMap({ center, risks }) {
  const [mapLoadError, setMapLoadError] = useState(false);

  const handleLoadError = () => {
    setMapLoadError(true);
  };

  if (mapLoadError) {
    return <div>Error loading Google Maps. Please check your API key and try again.</div>;
  }

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} onError={handleLoadError}>
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={{ width: '100%', height: '400px' }}
      >
        {risks.map((risk, index) => (
          <Polygon
            key={index}
            paths={risk.coordinates} // Ensure this is an array of coordinates
            options={{
              fillColor: risk.type === 'flood' ? '#0000FF' :
                         risk.type === 'heatwave' ? '#FF0000' : '#FFFF00',
              fillOpacity: 0.35,
              strokeColor: '#000000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}