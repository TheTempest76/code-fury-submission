// pages/tornado.js
"use client";
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Tornado = () => {
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
        <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Tornado Actions and Precautions</h1>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>Before a Tornado</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Create an Emergency Plan:</strong> Develop a plan with your family that includes meeting points and communication methods.</li>
          <li><strong>Prepare an Emergency Kit:</strong> Pack essentials such as water, food, medications, a flashlight, and a battery-powered radio.</li>
          <li><strong>Know Your Safe Zones:</strong> Identify safe areas in your home, such as a basement or an interior room on the lowest floor.</li>
          <li><strong>Secure Outdoor Objects:</strong> Bring in or secure objects that could become projectiles in high winds.</li>
          <li><strong>Monitor Weather Alerts:</strong> Stay informed about tornado watches and warnings via weather radios or smartphone alerts.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>During a Tornado</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Seek Shelter Immediately:</strong> Go to your designated safe area, such as a basement or interior room, and protect your head and neck.</li>
          <li><strong>Stay Away from Windows:</strong> Avoid windows to prevent injury from shattered glass and debris.</li>
          <li><strong>Cover Yourself:</strong> Use mattresses, pillows, or heavy furniture to shield yourself from flying debris.</li>
          <li><strong>Stay Informed:</strong> Listen to weather updates and emergency information via a battery-powered radio or app.</li>
          <li><strong>Do Not Seek Shelter in a Car:</strong> Avoid staying in your car; instead, seek shelter in a sturdy building.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>After a Tornado</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Check for Injuries:</strong> Assess yourself and others for injuries and seek medical help if needed.</li>
          <li><strong>Avoid Downed Power Lines:</strong> Stay clear of fallen power lines and report them to authorities.</li>
          <li><strong>Inspect Your Home:</strong> Look for damage and hazards. If your home is unsafe, seek alternative shelter.</li>
          <li><strong>Follow Official Instructions:</strong> Adhere to guidance from local authorities and emergency services.</li>
          <li><strong>Help Others:</strong> Assist neighbors and others affected by the tornado, especially those who may need help evacuating or recovering.</li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Image
            src="/images/tn2.jpg" // Path to your image file in the public/images directory
            alt="Tornado Safety Tips"
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
                <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Tornadoes</h1>
                
                <p style={{ color: '#555', fontSize: '16px', textAlign: 'left', marginBottom: '20px' }}>
                  Tornadoes are rapidly rotating columns of air extending from a thunderstorm to the ground. They can cause significant damage with high winds, uprooting trees, destroying buildings, and tossing debris. Tornadoes are usually short-lived but can be extremely violent and dangerous.
                </p>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <Image
                    src="/images/tn1.jpg" // Path to your image file in the public/images directory
                    alt="Types of Tornadoes"
                    width={560} // Set the width of the image
                    height={300} // Set the height of the image
                    style={{ borderRadius: '8px', objectFit: 'cover' }} // Optional styling
                  />
                </div>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Types of Tornadoes</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Single-Vortex Tornadoes:</strong> The most common type, featuring a single rotating column of air.</li>
                  <li><strong>Multi-Vortex Tornadoes:</strong> Contain multiple smaller vortices rotating around a central core.</li>
                  <li><strong>Gustnadoes:</strong> Form along a gust front and are generally weaker than other tornado types.</li>
                  <li><strong>Landspouts:</strong> Develop in the same way as dust devils but are more intense and dangerous.</li>
                  <li><strong>Water Spouts:</strong> Tornadoes that form over water and can move onshore, causing damage.</li>
                </ul>
              </>
            )}
            {step === 1 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Guide</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Seek Shelter:</strong> Move to a safe location immediately when a tornado warning is issued.</li>
                  <li><strong>Protect Yourself:</strong> Use heavy furniture or other objects to shield yourself from debris.</li>
                  <li><strong>Stay Informed:</strong> Keep up with weather updates and emergency instructions from local authorities.</li>
                  <li><strong>Prepare for Power Outages:</strong> Have a battery-powered radio and extra batteries on hand.</li>
                  <li><strong>Plan for Recovery:</strong> Be ready for recovery efforts and follow safety guidelines for dealing with tornado damage.</li>
                </ul>
              </>
            )}
            {step === 2 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Tornado Preparedness for Communities</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Establish Warning Systems:</strong> Develop and maintain tornado warning systems and alert networks.</li>
                  <li><strong>Conduct Community Drills:</strong> Regularly practice tornado response drills to ensure readiness.</li>
                  <li><strong>Improve Building Codes:</strong> Advocate for and enforce building codes that enhance tornado resistance.</li>
                  <li><strong>Educate Residents:</strong> Provide training on tornado safety and preparedness measures.</li>
                  <li><strong>Form Emergency Response Teams:</strong> Train local volunteers for tornado response and recovery efforts.</li>
                  <li><strong>Promote Public Awareness:</strong> Run campaigns to raise awareness about tornado risks and safety strategies.</li>
                  <li><strong>Coordinate with Neighboring Areas:</strong> Share resources and strategies with nearby communities for effective tornado response.</li>
                  <li><strong>Plan for Long-Term Recovery:</strong> Develop comprehensive recovery plans to support affected areas and individuals.</li>
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

export default Tornado;
