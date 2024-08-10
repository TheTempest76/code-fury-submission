// pages/earthquake.js
"use client";
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component
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
      <div style={{ width: '600px', height: '500px', padding: '20px', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {step === 0 && (
            <>
              <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Earthquake Information</h1>
              <p style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>Earthquakes are caused by sudden movements of the Earth's tectonic plates. These movements can cause the ground to shake and may result in significant damage to buildings and infrastructure.</p>
            </>
          )}
          {step === 1 && (
            <>
              <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Guide</h2>
              <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
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

      <div style={{ width: '600px', height: '500px', padding: '20px', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Earthquake Actions and Precautions</h1>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>Before an Earthquake</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Prepare an Emergency Kit:</strong> Pack essentials and store them in an accessible location.</li>
          <li><strong>Create a Family Emergency Plan:</strong> Designate safe meeting points and establish a communication plan.</li>
          <li><strong>Secure Your Home:</strong> Anchor heavy furniture and secure hazardous items.</li>
          <li><strong>Educate Yourself and Others:</strong> Participate in drills and learn about local risks.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>During an Earthquake</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>If Indoors:</strong> Drop, cover, and hold on; stay away from windows and heavy objects.</li>
          <li><strong>If Outdoors:</strong> Move to open areas; drop and cover.</li>
          <li><strong>If in a Vehicle:</strong> Pull over safely and stay inside.</li>
          <li><strong>If Trapped:</strong> Stay calm and signal for help.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>After an Earthquake</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Check for Injuries:</strong> Provide first aid and seek medical help if necessary.</li>
          <li><strong>Inspect Your Home:</strong> Check for damage and avoid hazards.</li>
          <li><strong>Avoid Hazards:</strong> Stay away from fallen debris and downed power lines.</li>
          <li><strong>Follow Official Instructions:</strong> Listen to emergency broadcasts and follow local authority instructions.</li>
          <li><strong>Help Neighbors:</strong> Check on others and share resources.</li>
          <li><strong>Prepare for Aftershocks:</strong> Stay alert and secure loose items.</li>
          <li><strong>Document Damage:</strong> Take photos and report damage for insurance purposes.</li>
          <li><strong>Review and Update Plans:</strong> Assess and improve your emergency plan and restock supplies.</li>
        </ul>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Image
            src="/images/etimg.jpg" // Path to your image file in the public/images directory
            alt="Earthquake Safety Tips"
            width={560} // Set the width of the image
            height={300} // Set the height of the image
            style={{ borderRadius: '8px', objectFit: 'cover' }} // Optional styling
          />
        </div>
      </div>
    </div>
  );
};

export default Earthquake;
