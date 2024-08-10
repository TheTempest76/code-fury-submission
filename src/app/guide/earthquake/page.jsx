// pages/earthquake.js
"use client";
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Earthquake = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '20px', backgroundColor: '#f0f4f8', minHeight: '100vh', gap: '20px' }}>
      
      <div style={{ width: '600px', height: '500px', padding: '20px', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
        <h1 style={{ color: '#333', fontSize: '24px' }}>Immediate Information</h1>
        <p style={{ color: '#555', fontSize: '16px' }}>This card contains additional information and updates related to the current situation. It provides immediate, actionable details for those affected by the disaster.</p>
        {/* You can add more content or features here as needed */}
      </div>

      <div style={{ width: '600px', height: '500px', padding: '20px', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {step === 0 && (
            <>
              <h1 style={{ color: '#333', fontSize: '24px' }}>Earthquake Information</h1>
              <p style={{ color: '#555', fontSize: '16px' }}>Earthquakes are caused by sudden movements of the Earth's tectonic plates. These movements can cause the ground to shake and may result in significant damage to buildings and infrastructure.</p>
            </>
          )}
          {step === 1 && (
            <>
              <h2 style={{ color: '#333', fontSize: '20px' }}>Guide</h2>
              <ul style={{ color: '#555', fontSize: '16px' }}>
                <li>Drop to the ground and take cover under a sturdy piece of furniture.</li>
                <li>Hold on until the shaking stops.</li>
                <li>After the shaking, check for injuries and be cautious of potential hazards such as gas leaks.</li>
                <li>Follow emergency instructions from local authorities.</li>
              </ul>
            </>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button
            style={{ backgroundColor: '#007BFF', color: '#ffffff', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s', marginRight: '10px' }}
            onClick={handleBack}
            disabled={step === 0}
          >
            <ChevronLeftIcon style={{ width: '24px', height: '24px' }} />
          </button>
          <button
            style={{ backgroundColor: '#28A745', color: '#ffffff', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s', marginLeft: '10px' }}
            onClick={handleNext}
            disabled={step === 1}
          >
            <ChevronRightIcon style={{ width: '24px', height: '24px' }} />
          </button>
        </div>
      </div>


    </div>
  );
};

export default Earthquake;
