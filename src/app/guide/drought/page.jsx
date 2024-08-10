// pages/drought.js
"use client";
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Drought = () => {
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
        <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Drought Actions and Precautions</h1>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>Before a Drought</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Conserve Water:</strong> Implement water-saving measures like reducing lawn irrigation and fixing leaks.</li>
          <li><strong>Prepare an Emergency Water Supply:</strong> Store water for drinking, cooking, and sanitation purposes in case of severe shortages.</li>
          <li><strong>Maintain Your Garden:</strong> Use drought-resistant plants and landscaping techniques to minimize water usage.</li>
          <li><strong>Educate Yourself:</strong> Learn about water conservation techniques and drought-resistant practices to better prepare for potential shortages.</li>
          <li><strong>Monitor Water Usage:</strong> Track your water usage to identify areas where you can reduce consumption.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>During a Drought</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Reduce Water Usage:</strong> Cut back on non-essential water uses, such as washing cars and filling swimming pools.</li>
          <li><strong>Follow Water Restrictions:</strong> Adhere to any water use restrictions or guidelines set by local authorities.</li>
          <li><strong>Reuse and Recycle Water:</strong> Implement water recycling systems for tasks like irrigation and flushing toilets.</li>
          <li><strong>Stay Informed:</strong> Keep up with local water availability reports and drought updates from authorities.</li>
          <li><strong>Protect Plants and Gardens:</strong> Use mulch and other techniques to retain moisture in soil and reduce evaporation.</li>
        </ul>

        <h2 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>After a Drought</h2>
        <ul style={{ color: '#555', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <li><strong>Assess Water Usage:</strong> Evaluate your water usage and consider maintaining conservation practices even after the drought ends.</li>
          <li><strong>Repair Water Systems:</strong> Fix any leaks or damages in your water supply systems that may have occurred during the drought.</li>
          <li><strong>Support Recovery Efforts:</strong> Participate in or support community efforts to restore water resources and assist affected areas.</li>
          <li><strong>Replenish Water Supplies:</strong> Refill emergency water reserves and restock supplies as needed.</li>
          <li><strong>Review Conservation Strategies:</strong> Update your water conservation plan based on lessons learned during the drought.</li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Image
            src="/images/drought.jpg" // Path to your image file in the public/images directory
            alt="Drought Safety Tips"
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
                <h1 style={{ color: '#333', fontSize: '24px', textAlign: 'left' }}>Drought</h1>
                
                <p style={{ color: '#555', fontSize: '16px', textAlign: 'left', marginBottom: '20px' }}>
                  A drought is an extended period of abnormally low rainfall relative to the statistical average for a region. It can lead to severe water shortages, affecting agriculture, water supply, and ecosystems. Droughts can be caused by natural climate variations or human activities that exacerbate water scarcity.
                </p>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <Image
                    src="/images/dt2.jpg" // Path to your image file in the public/images directory
                    alt="Types of Droughts"
                    width={560} // Set the width of the image
                    height={300} // Set the height of the image
                    style={{ borderRadius: '8px', objectFit: 'cover' }} // Optional styling
                  />
                </div>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Types of Droughts</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Meteorological Drought:</strong> Defined by a significant shortfall in precipitation compared to the normal levels.</li>
                  <li><strong>Hydrological Drought:</strong> Occurs when water resources such as rivers, lakes, and reservoirs are below average levels.</li>
                  <li><strong>Agricultural Drought:</strong> Affects crop production due to insufficient soil moisture necessary for plant growth.</li>
                  <li><strong>Sociological Drought:</strong> Results from a lack of water that impacts human well-being, leading to water scarcity issues.</li>
                </ul>
              </>
            )}
            {step === 1 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Guide</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Implement Water-Saving Practices:</strong> Adopt habits such as fixing leaks, using water-efficient appliances, and reducing water waste.</li>
                  <li><strong>Monitor Water Levels:</strong> Keep track of local water levels and adjust your water use accordingly.</li>
                  <li><strong>Educate the Community:</strong> Share information about drought preparedness and water conservation with your community.</li>
                  <li><strong>Support Water Management Policies:</strong> Advocate for policies and programs that promote sustainable water use and management.</li>
                  <li><strong>Prepare for Future Droughts:</strong> Plan and implement long-term strategies to mitigate the impacts of potential future droughts.</li>
                </ul>
              </>
            )}
            {step === 2 && (
              <>
                <h2 style={{ color: '#333', fontSize: '20px', textAlign: 'left' }}>Drought Preparedness for Communities</h2>
                <ul style={{ color: '#555', fontSize: '16px', textAlign: 'left' }}>
                  <li><strong>Develop a Drought Contingency Plan:</strong> Work with local officials to create a comprehensive plan for drought response and water conservation.</li>
                  <li><strong>Promote Water-Saving Practices:</strong> Encourage community-wide adoption of water-efficient practices and technologies.</li>
                  <li><strong>Enhance Water Storage:</strong> Invest in infrastructure to capture and store rainwater or reclaimed water for future use.</li>
                  <li><strong>Educate the Public:</strong> Provide information and resources on drought preparedness and water conservation to residents.</li>
                  <li><strong>Coordinate with Other Areas:</strong> Share resources and strategies with neighboring communities to address drought collectively.</li>
                  <li><strong>Monitor and Manage Water Resources:</strong> Implement measures to track and manage water resources effectively during drought conditions.</li>
                  <li><strong>Run Awareness Campaigns:</strong> Conduct campaigns to raise awareness about drought risks and preparedness measures.</li>
                  <li><strong>Plan for Recovery:</strong> Develop strategies for recovery and support for affected community members after the drought.</li>
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

export default Drought;
