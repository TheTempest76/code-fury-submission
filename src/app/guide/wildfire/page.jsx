// pages/wildfires.js
"use client";
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Wildfires = () => {
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
        <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Wildfire Actions and Precautions</h1>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>Before a Wildfire</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Create a Fire-Resistant Zone:</strong> Clear vegetation and combustible materials from around your home. Maintain a defensible space of at least 30 feet.</li>
          <li><strong>Prepare an Emergency Kit:</strong> Include essentials such as water, food, medications, important documents, and a battery-powered radio.</li>
          <li><strong>Develop a Family Evacuation Plan:</strong> Designate multiple evacuation routes and ensure all family members know them.</li>
          <li><strong>Stay Informed:</strong> Monitor local news and fire weather reports to stay aware of wildfire risks and alerts.</li>
          <li><strong>Secure Your Home:</strong> Install ember-resistant vents and use fire-resistant materials for roofing and siding if possible.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>During a Wildfire</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Evacuate Immediately:</strong> If ordered to evacuate, do so promptly and follow designated evacuation routes.</li>
          <li><strong>Protect Yourself:</strong> Wear protective clothing, including a mask to avoid inhaling smoke and a hat to protect against embers.</li>
          <li><strong>Close Windows and Doors:</strong> Keep windows and doors closed to prevent smoke and embers from entering your home.</li>
          <li><strong>Stay Indoors:</strong> If you are not in immediate danger, stay indoors with the windows and doors closed to minimize exposure to smoke.</li>
          <li><strong>Listen to Authorities:</strong> Follow updates and instructions from local emergency services and fire officials.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>After a Wildfire</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Inspect Your Property:</strong> Check for damage and hazards before re-entering your home. Be cautious of structural damage and potential hidden embers.</li>
          <li><strong>Follow Health Advisories:</strong> Monitor air quality reports and follow health advisories to protect against smoke inhalation.</li>
          <li><strong>Document Damage:</strong> Take photos of any damage for insurance purposes and report it to your insurance company.</li>
          <li><strong>Help Others:</strong> Assist neighbors and community members who may need support or assistance with recovery.</li>
          <li><strong>Participate in Recovery Efforts:</strong> Engage in community recovery efforts and support local fire relief organizations.</li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Image
            src="/images/wdimg.jpg" // Path to your image file in the public/images directory
            alt="Wildfire Safety Tips"
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
                <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Wildfires</h1>
                
                <p style={{ color: '#555', fontSize: '16px', textAlign: 'left', marginBottom: '20px' }}>
                  Wildfires are uncontrolled fires that spread rapidly through vegetation and forests. They can be ignited by natural causes, such as lightning, or by human activities. Wildfires pose significant risks to life, property, and the environment, and their intensity can be influenced by weather conditions and fuel availability.
                </p>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <Image
                    src="/images/wd2.jpg" // Path to your image file in the public/images directory
                    alt="Types of Wildfires"
                    width={560} // Set the width of the image
                    height={300} // Set the height of the image
                    style={{ borderRadius: '8px', objectFit: 'cover' }} // Optional styling
                  />
                </div>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Types of Wildfires</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Ground Fires:</strong> Fires that burn the organic material in the soil or forest floor, often smoldering and difficult to detect.</li>
                  <li><strong>Surface Fires:</strong> Fires that burn the vegetation on the surface of the ground, such as grass, shrubs, and small trees.</li>
                  <li><strong>Crown Fires:</strong> Intense fires that spread through the tops of trees, driven by strong winds and high temperatures.</li>
                  <li><strong>Active Wildfires:</strong> Fires that are currently burning and spreading rapidly, often requiring immediate response and management.</li>
                </ul>
              </>
            )}
            {step === 1 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Guide</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Create a Defensible Space:</strong> Clear vegetation and other flammable materials around your home to reduce the risk of fire spreading.</li>
                  <li><strong>Prepare an Evacuation Kit:</strong> Pack essential items such as medications, important documents, and supplies for family members and pets.</li>
                  <li><strong>Follow Evacuation Orders:</strong> Evacuate immediately if instructed by authorities, and use designated evacuation routes.</li>
                  <li><strong>Protect Your Health:</strong> Wear protective clothing and avoid inhaling smoke. Stay indoors if air quality is poor.</li>
                  <li><strong>Stay Informed:</strong> Keep up with local news and fire updates to receive accurate information and instructions.</li>
                </ul>
              </>
            )}
            {step === 2 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Wildfire Preparedness for Communities</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Develop a Community Wildfire Plan:</strong> Work with local officials to create a comprehensive wildfire response plan.</li>
                  <li><strong>Conduct Wildfire Drills:</strong> Regularly practice wildfire drills to ensure community readiness and familiarity with evacuation procedures.</li>
                  <li><strong>Improve Infrastructure:</strong> Invest in firebreaks, community fire defenses, and other infrastructure to reduce wildfire risk.</li>
                  <li><strong>Educate Residents:</strong> Provide education on wildfire prevention, evacuation, and safety measures.</li>
                  <li><strong>Form Emergency Response Teams:</strong> Establish and train local volunteer groups for emergency response and recovery efforts.</li>
                  <li><strong>Promote Building Codes:</strong> Ensure compliance with building codes that enhance fire resistance and safety.</li>
                  <li><strong>Coordinate with Neighboring Areas:</strong> Share resources and strategies for wildfire preparedness with neighboring communities.</li>
                  <li><strong>Run Awareness Campaigns:</strong> Raise public awareness about wildfire risks and preparedness through campaigns and informational materials.</li>
                  <li><strong>Plan for Long-Term Recovery:</strong> Develop strategies for long-term recovery and support for affected community members.</li>
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

export default Wildfires;
