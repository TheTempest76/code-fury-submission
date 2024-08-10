import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}