// pages/volcano.js
"use client";
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Volcano = () => {
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
        <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Volcano Actions and Precautions</h1>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>Before a Volcano Eruption</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Create an Emergency Plan:</strong> Develop a plan with your family that includes evacuation routes and communication methods.</li>
          <li><strong>Prepare an Emergency Kit:</strong> Include essential items such as water, food, medications, masks, and a battery-powered radio.</li>
          <li><strong>Know the Evacuation Routes:</strong> Familiarize yourself with local evacuation routes and shelters.</li>
          <li><strong>Protect Your Property:</strong> Secure or move valuables and ensure your home is prepared for ashfall.</li>
          <li><strong>Stay Informed:</strong> Monitor volcano activity through local news and weather reports.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>During a Volcano Eruption</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Follow Evacuation Orders:</strong> Evacuate immediately if instructed to do so by authorities.</li>
          <li><strong>Protect Yourself from Ashfall:</strong> Wear masks and goggles to protect against volcanic ash, and stay indoors if possible.</li>
          <li><strong>Close Windows and Doors:</strong> Seal windows and doors to prevent ash from entering your home.</li>
          <li><strong>Listen to Updates:</strong> Stay updated on the eruption status and follow instructions from emergency services.</li>
          <li><strong>Avoid Low-Lying Areas:</strong> Stay away from valleys and low-lying areas that may be prone to lava flows and mudslides.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>After a Volcano Eruption</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Check for Injuries:</strong> Assess yourself and others for injuries and seek medical help if needed.</li>
          <li><strong>Inspect Your Home:</strong> Check for damage and hazards, especially from ashfall and lava.</li>
          <li><strong>Clear Ash Safely:</strong> Use protective gear while removing ash from your property. Avoid using water on ash, as it can form a slurry that is difficult to clean.</li>
          <li><strong>Follow Official Instructions:</strong> Adhere to guidance from local authorities regarding cleanup and recovery.</li>
          <li><strong>Help Others:</strong> Assist neighbors and those affected by the eruption, especially if they need help with evacuation or recovery.</li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Image
            src="/images/vlimg.jpg" // Path to your image file in the public/images directory
            alt="Volcano Safety Tips"
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
                <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Volcanoes</h1>
                
                <p style={{ color: '#555', fontSize: '16px', textAlign: 'left', marginBottom: '20px' }}>
                  Volcanoes are openings in the Earth's crust where molten rock, ash, and gases from below the Earth's surface can escape. Eruptions can vary from gentle lava flows to explosive events that can have significant impacts on the environment and communities. Volcanic activity can also create secondary hazards like ashfall, lava flows, and pyroclastic flows.
                </p>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <Image
                    src="/images/vl1.jpg" // Path to your image file in the public/images directory
                    alt="Types of Volcanoes"
                    width={560} // Set the width of the image
                    height={300} // Set the height of the image
                    style={{ borderRadius: '8px', objectFit: 'cover' }} // Optional styling
                  />
                </div>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Types of Volcanoes</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Shield Volcanoes:</strong> Broad, gently sloping volcanoes formed by low-viscosity lava flows.</li>
                  <li><strong>Stratovolcanoes:</strong> Steep-sided, conical volcanoes built up by layers of lava, ash, and volcanic rocks.</li>
                  <li><strong>Cinder Cones:</strong> Small, steep-sided volcanoes formed by explosive eruptions of cinders and volcanic debris.</li>
                  <li><strong>Lava Domes:</strong> Formed by the slow extrusion of highly viscous lava, creating a dome-shaped hill.</li>
                </ul>
              </>
            )}
            {step === 1 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Guide</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Follow Evacuation Orders:</strong> Always evacuate when instructed to by authorities to ensure your safety.</li>
                  <li><strong>Protect Yourself from Ash:</strong> Wear masks, goggles, and protective clothing to avoid inhaling ash and exposure to harmful particles.</li>
                  <li><strong>Seal Your Home:</strong> Keep windows and doors closed to prevent ash from entering your home.</li>
                  <li><strong>Stay Informed:</strong> Keep up with the latest updates and advisories from local emergency services.</li>
                  <li><strong>Prepare for Health Risks:</strong> Be aware of potential health risks associated with volcanic ash and seek medical advice if needed.</li>
                </ul>
              </>
            )}
            {step === 2 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Volcano Preparedness for Communities</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Develop an Emergency Response Plan:</strong> Collaborate with local officials to establish a comprehensive plan for volcanic eruptions.</li>
                  <li><strong>Conduct Regular Drills:</strong> Organize drills and exercises to practice emergency responses and evacuation procedures.</li>
                  <li><strong>Invest in Infrastructure:</strong> Strengthen infrastructure to withstand volcanic hazards and mitigate damage.</li>
                  <li><strong>Educate the Public:</strong> Provide education and training on volcanic risks and safety measures.</li>
                  <li><strong>Form Local Response Teams:</strong> Train local volunteers to assist in emergency response and recovery.</li>
                  <li><strong>Promote Awareness:</strong> Raise public awareness about volcanic activity and preparedness through campaigns and resources.</li>
                  <li><strong>Coordinate with Neighboring Areas:</strong> Share resources and strategies with nearby communities for effective volcanic hazard management.</li>
                  <li><strong>Plan for Long-Term Recovery:</strong> Develop strategies to support recovery efforts and help affected individuals and communities.</li>
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

export default Volcano;
