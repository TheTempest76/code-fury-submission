// pages/earthquakes.js
"use client";
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Earthquakes = () => {
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
        <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Earthquake Actions and Precautions</h1>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>Before an Earthquake</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Secure Heavy Items:</strong> Anchor heavy furniture and appliances to walls and secure fragile items in cabinets.</li>
          <li><strong>Prepare an Emergency Kit:</strong> Include essentials such as water, food, medications, and a flashlight.</li>
          <li><strong>Create a Family Emergency Plan:</strong> Designate safe spots in each room and establish a communication plan.</li>
          <li><strong>Reinforce Your Home:</strong> Ensure your home is structurally sound and consider retrofitting for added safety.</li>
          <li><strong>Know How to Turn Off Utilities:</strong> Familiarize yourself with how to turn off gas, water, and electricity in case of leaks or damage.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>During an Earthquake</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Drop, Cover, and Hold On:</strong> Drop to your knees, cover your head and neck, and hold on until shaking stops.</li>
          <li><strong>Stay Indoors:</strong> Remain inside during shaking. If outdoors, move to an open area away from buildings, trees, and power lines.</li>
          <li><strong>Avoid Doorways:</strong> Take cover under a sturdy piece of furniture or against an interior wall rather than in doorways.</li>
          <li><strong>Be Prepared for Aftershocks:</strong> Expect and be ready for aftershocks that may follow the main quake.</li>
          <li><strong>Stay Informed:</strong> Use a battery-powered radio or other means to stay updated on emergency information and instructions.</li>
          <li><strong>Check for Injuries:</strong> Provide first aid to yourself and others, and seek medical help if needed.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>After an Earthquake</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Inspect Your Home:</strong> Check for structural damage and hazards. Avoid using candles or matches due to potential gas leaks.</li>
          <li><strong>Check for Gas Leaks:</strong> If you smell gas, turn off the gas supply and evacuate immediately. Report the leak to authorities.</li>
          <li><strong>Be Careful of Aftershocks:</strong> Expect and be prepared for aftershocks that may occur in the days following the quake.</li>
          <li><strong>Follow Official Instructions:</strong> Adhere to guidance from local authorities and emergency services.</li>
          <li><strong>Help Neighbors:</strong> Assist those who may be injured or unable to help themselves.</li>
          <li><strong>Document Damage:</strong> Take photos of any damage for insurance purposes and report it as needed.</li>
          <li><strong>Review and Update Your Emergency Plan:</strong> Assess the effectiveness of your plan and make improvements as necessary.</li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Image
            src="/images/earthquakes.jpg" // Path to your image file in the public/images directory
            alt="Earthquake Safety Tips"
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
                <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Earthquakes</h1>
                
                <p style={{ color: '#555', fontSize: '16px', textAlign: 'left', marginBottom: '20px' }}>
                  Earthquakes are sudden shaking of the ground caused by the movement of tectonic plates beneath the Earth's surface. They can range from minor tremors to devastating quakes that cause significant damage to buildings and infrastructure. Earthquakes can also trigger landslides, tsunamis, and other secondary hazards.
                </p>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <Image
                    src="/images/et1.jpg" // Path to your image file in the public/images directory
                    alt="Types of Earthquakes"
                    width={560} // Set the width of the image
                    height={300} // Set the height of the image
                    style={{ borderRadius: '8px', objectFit: 'cover' }} // Optional styling
                  />
                </div>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Types of Earthquakes</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Tectonic Earthquakes:</strong> Caused by the movement of tectonic plates. These are the most common and can be minor or major.</li>
                  <li><strong>Volcanic Earthquakes:</strong> Result from the movement of magma within volcanoes, often occurring before or during eruptions.</li>
                  <li><strong>Induced Earthquakes:</strong> Caused by human activities such as mining, reservoir-induced seismicity, or hydraulic fracturing (fracking).</li>
                  <li><strong>Collapse Earthquakes:</strong> Occur due to the collapse of underground caves or mines.</li>
                </ul>
              </>
            )}
            {step === 1 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Guide</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Drop, Cover, and Hold On:</strong> During shaking, drop to your knees, cover your head and neck, and hold on until the shaking stops.</li>
                  <li><strong>Stay Indoors:</strong> Remain inside if you are indoors. If you are outdoors, move away from buildings, trees, and power lines.</li>
                  <li><strong>Expect Aftershocks:</strong> Aftershocks can follow the main quake and may cause additional damage.</li>
                  <li><strong>Inspect for Damage:</strong> Check your home for damage and hazards. Avoid using open flames in case of gas leaks.</li>
                  <li><strong>Help Others:</strong> Check on neighbors and assist those who may need help.</li>
                  <li><strong>Stay Informed:</strong> Use emergency radios or other means to receive updates and instructions from authorities.</li>
                  <li><strong>Prepare for Recovery:</strong> Be ready for recovery efforts, including potential evacuations or temporary shelters.</li>
                </ul>
              </>
            )}
            {step === 2 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Earthquake Preparedness for Communities</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Develop a Community Earthquake Plan:</strong> Collaborate with local officials to create a comprehensive earthquake response plan.</li>
                  <li><strong>Conduct Earthquake Drills:</strong> Regularly practice earthquake drills to ensure readiness and familiarity with procedures.</li>
                  <li><strong>Improve Infrastructure:</strong> Invest in retrofitting buildings and infrastructure to withstand seismic activity.</li>
                  <li><strong>Educate Residents:</strong> Provide education and training on earthquake preparedness and response.</li>
                  <li><strong>Form Emergency Teams:</strong> Establish and train local volunteer groups for emergency response and recovery.</li>
                  <li><strong>Promote Building Codes:</strong> Ensure enforcement of building codes that address earthquake safety.</li>
                  <li><strong>Coordinate with Neighboring Areas:</strong> Work with neighboring communities to share resources and strategies for earthquake preparedness.</li>
                  <li><strong>Run Awareness Campaigns:</strong> Raise public awareness about earthquake risks and preparedness through campaigns and informational materials.</li>
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

export default Earthquakes;
