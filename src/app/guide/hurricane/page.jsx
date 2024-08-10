// pages/hurricanes.js
"use client";
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Hurricanes = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '20px', backgroundColor: '#f0f4f8', minHeight: '100vh', gap: '20px' }}>
      
      <div style={{ width: '650px', height: '530px', padding: '20px', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Hurricane Actions and Precautions</h1>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>Before a Hurricane</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Prepare an Emergency Kit:</strong> Include essentials such as water, non-perishable food, medications, a flashlight, and batteries.</li>
          <li><strong>Secure Your Home:</strong> Install storm shutters or board up windows, secure outdoor objects, and reinforce garage doors.</li>
          <li><strong>Create a Family Emergency Plan:</strong> Designate a safe room, establish communication plans, and decide on evacuation routes.</li>
          <li><strong>Know Your Zone:</strong> Be aware of your evacuation zone and any local hurricane evacuation orders.</li>
          <li><strong>Stock Up on Supplies:</strong> Ensure you have enough supplies to last at least 72 hours without power or outside help.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>During a Hurricane</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Stay Indoors:</strong> Remain indoors and away from windows and doors. Seek shelter in a small, windowless interior room if possible.</li>
          <li><strong>Listen to Updates:</strong> Monitor weather updates and instructions from local authorities using a battery-powered radio.</li>
          <li><strong>Avoid Flooded Areas:</strong> Do not walk or drive through flooded areas as water can be deeper and stronger than it appears.</li>
          <li><strong>Check for Damage:</strong> Inspect your home for damage only when it is safe to do so. Avoid downed power lines and report them to authorities.</li>
          <li><strong>Prepare for Power Outages:</strong> Have flashlights, batteries, and a portable phone charger ready in case of power loss.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>After a Hurricane</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Stay Safe:</strong> Avoid any dangerous areas and follow any instructions given by emergency services.</li>
          <li><strong>Inspect Your Property:</strong> Check for damage and take necessary precautions to avoid hazards such as gas leaks and structural damage.</li>
          <li><strong>Help Others:</strong> Check on neighbors, especially those who are elderly or disabled, and offer assistance if needed.</li>
          <li><strong>Document Damage:</strong> Take photos of any damage for insurance claims and report it to your insurance company.</li>
          <li><strong>Stay Informed:</strong> Keep up with local news and updates regarding recovery efforts and available resources.</li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Image
            src="/images/hurricane.jpg" // Path to your image file in the public/images directory
            alt="Hurricane Safety Tips"
            width={560} // Set the width of the image
            height={300} // Set the height of the image
            style={{ borderRadius: '8px', objectFit: 'cover' }} // Optional styling
          />
        </div>
      </div>
      
      <div style={{ width: '650px', height: '530px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
          <div>
            {step === 0 && (
              <>
                <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Hurricanes</h1>
                
                <p style={{ color: '#555', fontSize: '16px', textAlign: 'left', marginBottom: '20px' }}>
                  Hurricanes are large, powerful storms that form over warm ocean waters and can cause widespread damage through strong winds, heavy rains, and storm surges. They are categorized by their wind speeds and can lead to flooding, property damage, and significant disruptions to communities.
                </p>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <Image
                    src="/images/hr2.jpg" // Path to your image file in the public/images directory
                    alt="Types of Hurricanes"
                    width={560} // Set the width of the image
                    height={300} // Set the height of the image
                    style={{ borderRadius: '8px', objectFit: 'cover' }} // Optional styling
                  />
                </div>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Types of Hurricanes</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Category 1:</strong> Winds of 74-95 mph (119-153 km/h). Damage is generally minimal but can include minor damage to structures and trees.</li>
                  <li><strong>Category 2:</strong> Winds of 96-110 mph (154-177 km/h). More extensive damage, including damage to roofs, windows, and trees.</li>
                  <li><strong>Category 3:</strong> Winds of 111-129 mph (178-208 km/h). Significant damage to buildings and infrastructure, with the potential for widespread power outages.</li>
                  <li><strong>Category 4:</strong> Winds of 130-156 mph (209-260 km/h). Severe damage to homes, power outages, and significant risk of injury or death.</li>
                  <li><strong>Category 5:</strong> Winds greater than 157 mph (261 km/h). Catastrophic damage with widespread destruction of buildings and infrastructure.</li>
                </ul>
              </>
            )}
            {step === 1 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Guide</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Prepare Early:</strong> Start preparing for hurricanes well in advance by creating an emergency plan and securing your home.</li>
                  <li><strong>Follow Official Warnings:</strong> Pay attention to warnings and advisories issued by local authorities and the National Weather Service.</li>
                  <li><strong>Have a Communication Plan:</strong> Ensure all family members know how to contact each other and where to meet if separated.</li>
                  <li><strong>Stay Informed:</strong> Keep up with updates and changing conditions through reliable news sources and emergency alerts.</li>
                  <li><strong>Prepare for Evacuation:</strong> Know your evacuation routes and have a plan for where you will go if you need to leave your home.</li>
                </ul>
              </>
            )}
            {step === 2 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Hurricane Preparedness for Communities</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Develop a Community Hurricane Plan:</strong> Work with local officials to create and update a hurricane response and recovery plan.</li>
                  <li><strong>Conduct Drills:</strong> Regularly practice hurricane drills to ensure that residents are familiar with evacuation and safety procedures.</li>
                  <li><strong>Upgrade Infrastructure:</strong> Invest in strengthening infrastructure to withstand hurricane impacts, such as reinforcing buildings and improving drainage systems.</li>
                  <li><strong>Educate the Public:</strong> Provide education on hurricane preparedness, safety measures, and response plans to residents.</li>
                  <li><strong>Form Emergency Teams:</strong> Establish and train local emergency response teams to assist with disaster management and recovery efforts.</li>
                  <li><strong>Promote Building Codes:</strong> Ensure adherence to building codes designed to improve structural resilience against hurricanes.</li>
                  <li><strong>Coordinate with Neighboring Areas:</strong> Share resources and strategies with neighboring communities to enhance regional preparedness and response.</li>
                  <li><strong>Run Awareness Campaigns:</strong> Conduct public awareness campaigns to educate residents about hurricane risks and preparedness measures.</li>
                  <li><strong>Plan for Long-Term Recovery:</strong> Develop strategies for long-term recovery and support for affected community members after the hurricane.</li>
                </ul>
              </>
            )}
          </div>
        </div>
        {/* Fixed navigation buttons */}
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 20px' }}>
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
            disabled={step === 2}
          >
            <ChevronRightIcon style={{ width: '24px', height: '24px' }} />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Hurricanes;
