// pages/floods.js
"use client";
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Floods = () => {
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
        <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Flood Actions and Precautions</h1>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>Before a Flood</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Prepare an Emergency Kit:</strong> Include essentials such as water, food, medications, and important documents.</li>
          <li><strong>Elevate Electrical Systems:</strong> Raise electrical appliances and utilities above potential flood levels.</li>
          <li><strong>Create a Family Emergency Plan:</strong> Designate a safe place to go and establish a communication plan with family members.</li>
          <li><strong>Know Your Risk:</strong> Determine if you live in a flood-prone area and understand your local flood risk.</li>
          <li><strong>Install Flood Barriers:</strong> Use sandbags or other barriers to prevent floodwaters from entering your home.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>During a Flood</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Move to Higher Ground:</strong> If floodwaters are rising, move to higher ground immediately.</li>
          <li><strong>Avoid Floodwaters:</strong> Do not walk, swim, or drive through floodwaters. They may be deeper and stronger than they appear.</li>
          <li><strong>Stay Informed:</strong> Monitor local news and weather updates for information and instructions from authorities.</li>
          <li><strong>Evacuate If Necessary:</strong> Follow evacuation orders and relocate to a designated safe area if instructed.</li>
          <li><strong>Protect Your Home:</strong> If safe, use sandbags or other barriers to protect entry points from floodwater.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>After a Flood</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Stay Safe:</strong> Avoid floodwater as it may be contaminated with hazardous materials.</li>
          <li><strong>Inspect Your Home:</strong> Check for structural damage, electrical hazards, and other risks before re-entering.</li>
          <li><strong>Document Damage:</strong> Take photos of damage for insurance purposes and report it to your insurance company.</li>
          <li><strong>Clean Up Safely:</strong> Follow proper guidelines for cleaning up flood damage and disinfecting affected areas.</li>
          <li><strong>Seek Assistance:</strong> Access disaster relief resources and assistance from local agencies if needed.</li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Image
            src="/images/floods.jpg" // Path to your image file in the public/images directory
            alt="Flood Safety Tips"
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
                <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Floods</h1>
                
                <p style={{ color: '#555', fontSize: '16px', textAlign: 'left', marginBottom: '20px' }}>
                  Floods are an overflow of water onto normally dry land, often caused by heavy rainfall, rapid melting of snow, or other factors. They can lead to significant damage to homes, infrastructure, and the environment, posing risks to both people and property.
                </p>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <Image
                    src="/images/fld2.jpg" // Path to your image file in the public/images directory
                    alt="Types of Floods"
                    width={560} // Set the width of the image
                    height={300} // Set the height of the image
                    style={{ borderRadius: '8px', objectFit: 'cover' }} // Optional styling
                  />
                </div>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Types of Floods</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Flash Floods:</strong> Sudden and intense floods caused by heavy rainfall or dam failure, often occurring within minutes or hours.</li>
                  <li><strong>River Floods:</strong> Occur when rivers overflow their banks due to prolonged heavy rainfall or snowmelt.</li>
                  <li><strong>Coastal Floods:</strong> Result from storm surges or high tides that inundate coastal areas.</li>
                  <li><strong>Urban Floods:</strong> Occur in cities and towns where drainage systems are overwhelmed by heavy rainfall.</li>
                </ul>
              </>
            )}
            {step === 1 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Guide</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Move to Higher Ground:</strong> If floodwaters are rising, move to higher ground immediately.</li>
                  <li><strong>Avoid Floodwaters:</strong> Stay away from floodwaters as they may be deeper and stronger than they appear.</li>
                  <li><strong>Stay Informed:</strong> Keep up with local news and weather updates for information and instructions from authorities.</li>
                  <li><strong>Follow Evacuation Orders:</strong> Evacuate if instructed and relocate to a safe area.</li>
                  <li><strong>Protect Your Property:</strong> Use sandbags or barriers to prevent water from entering your home if possible.</li>
                  <li><strong>Assist Others:</strong> Check on neighbors and help those who may need assistance during and after the flood.</li>
                </ul>
              </>
            )}
            {step === 2 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Flood Preparedness for Communities</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Develop a Community Flood Plan:</strong> Collaborate with local authorities to create a flood response plan for your area.</li>
                  <li><strong>Conduct Flood Drills:</strong> Regularly practice flood drills to ensure readiness and familiarity with evacuation procedures.</li>
                  <li><strong>Improve Infrastructure:</strong> Invest in flood defenses such as levees, drainage systems, and flood barriers.</li>
                  <li><strong>Educate Residents:</strong> Provide training and resources on flood preparedness and safety measures.</li>
                  <li><strong>Form Emergency Response Teams:</strong> Establish and train local volunteer groups to assist in flood emergencies.</li>
                  <li><strong>Promote Building Codes:</strong> Ensure adherence to building codes that address flood safety and resilience.</li>
                  <li><strong>Coordinate with Neighboring Areas:</strong> Work with neighboring communities to share resources and strategies for flood management.</li>
                  <li><strong>Run Awareness Campaigns:</strong> Raise public awareness about flood risks and preparedness through campaigns and informational materials.</li>
                  <li><strong>Plan for Long-Term Recovery:</strong> Develop strategies for long-term recovery and support for affected residents.</li>
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

export default Floods;
