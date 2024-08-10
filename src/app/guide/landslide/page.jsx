// pages/landslides.js
"use client";
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Landslides = () => {
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
        <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Landslide Actions and Precautions</h1>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>Before a Landslide</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Identify Risk Areas:</strong> Know if you live in a landslide-prone area. Look for signs of instability such as steep slopes or loose soil.</li>
          <li><strong>Prepare an Emergency Kit:</strong> Include essentials like water, non-perishable food, medications, and a flashlight.</li>
          <li><strong>Have an Evacuation Plan:</strong> Know the safest routes out of your area and have a meeting point for family members.</li>
          <li><strong>Stabilize Slopes:</strong> If possible, take steps to stabilize slopes around your home, such as planting vegetation or installing retaining walls.</li>
          <li><strong>Monitor Weather:</strong> Stay informed about weather conditions, particularly heavy rains or other factors that could trigger landslides.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>During a Landslide</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Move to Higher Ground:</strong> If you are in an area prone to landslides, immediately move to higher ground to avoid being caught in the landslide.</li>
          <li><strong>Stay Inside:</strong> If you are indoors, stay away from windows and doors to avoid injury from falling debris.</li>
          <li><strong>Listen for Alerts:</strong> Pay attention to local news and emergency alerts for updates and instructions from authorities.</li>
          <li><strong>Avoid Travel:</strong> Avoid traveling through areas prone to landslides and be cautious of road conditions.</li>
          <li><strong>Call for Help:</strong> If trapped or injured, call emergency services and provide your location.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>After a Landslide</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Check for Injuries:</strong> Assess yourself and others for injuries and seek medical attention if needed.</li>
          <li><strong>Avoid Hazardous Areas:</strong> Stay away from unstable ground and areas where landslides have occurred until they are deemed safe.</li>
          <li><strong>Inspect Your Property:</strong> Check for damage to your home and property and report it to local authorities.</li>
          <li><strong>Follow Official Instructions:</strong> Follow guidance from local officials and emergency services regarding safety and recovery efforts.</li>
          <li><strong>Document Damage:</strong> Take photos of any damage for insurance claims and recovery assistance.</li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Image
            src="/images/landslide.jpg" // Path to your image file in the public/images directory
            alt="Landslide Safety Tips"
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
                <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Landslides</h1>
                
                <p style={{ color: '#555', fontSize: '16px', textAlign: 'left', marginBottom: '20px' }}>
                  Landslides occur when there is a sudden and fast movement of earth materials down a slope due to gravity. They can be triggered by heavy rains, earthquakes, or volcanic activity, causing significant damage to property and risk to life.
                </p>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <Image
                    src="/images/ld2.jpeg" // Path to your image file in the public/images directory
                    alt="Types of Landslides"
                    width={560} // Set the width of the image
                    height={300} // Set the height of the image
                    style={{ borderRadius: '8px', objectFit: 'cover' }} // Optional styling
                  />
                </div>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Types of Landslides</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Fall:</strong> Sudden drop of rock or soil from a steep slope, often causing significant damage.</li>
                  <li><strong>Slide:</strong> Movement of soil and rock along a distinct surface, such as a layer of clay or rock.</li>
                  <li><strong>Flow:</strong> Rapid flow of loose soil and debris down a slope, resembling a liquid flow.</li>
                  <li><strong>Topple:</strong> Overturning or falling of rock or soil from a vertical or near-vertical slope.</li>
                  <li><strong>Complex:</strong> Combination of two or more landslide types, often resulting in varied and extensive damage.</li>
                </ul>
              </>
            )}
            {step === 1 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Guide</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Assess Risk:</strong> Evaluate your risk level based on your location and the condition of nearby slopes.</li>
                  <li><strong>Stay Alert:</strong> Pay attention to weather forecasts and any warnings regarding potential landslides.</li>
                  <li><strong>Secure Property:</strong> Implement measures to stabilize slopes and prevent erosion around your property.</li>
                  <li><strong>Evacuate if Needed:</strong> Follow evacuation orders and leave the area if you are in a high-risk zone.</li>
                  <li><strong>Educate Yourself:</strong> Learn about landslide warning signs and how to react in case of an event.</li>
                </ul>
              </>
            )}
            {step === 2 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Landslide Preparedness for Communities</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Conduct Risk Assessments:</strong> Evaluate landslide risks in your community and identify vulnerable areas.</li>
                  <li><strong>Develop Emergency Plans:</strong> Create and update community-wide emergency plans that address landslide scenarios.</li>
                  <li><strong>Implement Preventive Measures:</strong> Invest in engineering solutions to stabilize slopes and improve drainage systems.</li>
                  <li><strong>Promote Awareness:</strong> Educate residents about landslide risks, warning signs, and preparedness measures.</li>
                  <li><strong>Establish Early Warning Systems:</strong> Develop systems to monitor and provide early warnings for potential landslides.</li>
                  <li><strong>Organize Drills:</strong> Conduct community drills to practice landslide response and evacuation procedures.</li>
                  <li><strong>Support Recovery Efforts:</strong> Plan for long-term recovery and provide assistance to affected individuals and areas.</li>
                  <li><strong>Engage with Experts:</strong> Collaborate with geologists and engineers to improve understanding and mitigation strategies.</li>
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

export default Landslides;
