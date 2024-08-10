"use client";

import Head from 'next/head';
import { ChevronRightIcon } from '@heroicons/react/24/solid'; // Import the icon
import { useRouter } from 'next/navigation'; // Import useRouter hook

export default function Home() {
  const router = useRouter(); // Initialize the router

  const baseButtonStyle = {
    fontSize: '2rem', // Increased font size
    fontWeight: 'bold', // Added bold font weight
    width: '400px',
    height: '200px',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    transition: 'background 0.3s ease', // Smooth background transition
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5rem',
    position: 'relative',
    overflow: 'hidden', // To ensure the icon doesn't overflow
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Added text shadow
  };

  const disasterButtonStyle = (imageUrl) => ({
    ...baseButtonStyle,
    backgroundImage: `url(${imageUrl})`, // Use specific background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl})`,
  });

  const disasterButtonHoverStyle = (imageUrl) => ({
    ...disasterButtonStyle(imageUrl),
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageUrl})`,
  });

  const volunteerButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: 'white',
    color: '#ff6f61', // Text color for the volunteer button
    border: '5px solid #ff6f61', // Increased border width
    transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease', // Added color transition
  };

  const volunteerButtonHoverStyle = {
    ...volunteerButtonStyle,
    backgroundColor: '#ff6f61', // No change to background on hover
    color: 'white', // Text color on hover
    borderColor: '#ff6f61',
  };

  const arrowStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    width: '30px',
    height: '30px',
    color: '#ffffff', // Arrow color
  };

  const handleButtonClick = (path) => {
    router.push(`../guide/${path}`);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 0.5rem', backgroundColor: '#f0f4f8' }}> {/* Updated background color */}
      <Head>
        <title>Disaster Guide</title>
        <meta name="description" content="A page with buttons representing different disasters arranged in rows" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', lineHeight: '1.15', margin: '2rem 0', color: '#333' }}>Disaster Guide</h1> {/* Updated text color */}
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          {/* Rows with buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <button
              style={disasterButtonStyle('/images/et1.jpg')}
              onClick={() => handleButtonClick('earthquake')}
              onMouseOver={e => {
                e.currentTarget.style.background = disasterButtonHoverStyle('/images/et1.jpg').background;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = disasterButtonStyle('/images/et1.jpg').background;
              }}
            >
              Earthquake
              <ChevronRightIcon style={arrowStyle} />
            </button>
            <button
              style={disasterButtonStyle('/images/fld1.jpg')}
              onClick={() => handleButtonClick('flood')}
              onMouseOver={e => {
                e.currentTarget.style.background = disasterButtonHoverStyle('/images/fld1.jpg').background;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = disasterButtonStyle('/images/fld1.jpg').background;
              }}
            >
              Flood
              <ChevronRightIcon style={arrowStyle} />
            </button>
            <button
              style={disasterButtonStyle('/images/wf1.jpg')}
              onClick={() => handleButtonClick('wildfire')}
              onMouseOver={e => {
                e.currentTarget.style.background = disasterButtonHoverStyle('/images/wf1.jpg').background;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = disasterButtonStyle('/images/wf1.jpg').background;
              }}
            >
              Wildfire
              <ChevronRightIcon style={arrowStyle} />
            </button>
            <button
              style={disasterButtonStyle('/images/tn1.jpg')}
              onClick={() => handleButtonClick('tornado')}
              onMouseOver={e => {
                e.currentTarget.style.background = disasterButtonHoverStyle('/images/tn1.jpg').background;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = disasterButtonStyle('/images/tn1.jpg').background;
              }}
            >
              Tornado
              <ChevronRightIcon style={arrowStyle} />
            </button>
            <button
              style={disasterButtonStyle('/images/hr1.jpg')}
              onClick={() => handleButtonClick('hurricane')}
              onMouseOver={e => {
                e.currentTarget.style.background = disasterButtonHoverStyle('/images/hr1.jpg').background;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = disasterButtonStyle('/images/hr1.jpg').background;
              }}
            >
              Hurricane
              <ChevronRightIcon style={arrowStyle} />
            </button>
            <button
              style={disasterButtonStyle('/images/vl1.jpg')}
              onClick={() => handleButtonClick('volcano')}
              onMouseOver={e => {
                e.currentTarget.style.background = disasterButtonHoverStyle('/images/vl1.jpg').background;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = disasterButtonStyle('/images/vl1.jpg').background;
              }}
            >
              Volcano
              <ChevronRightIcon style={arrowStyle} />
            </button>
            <button
              style={disasterButtonStyle('/images/dt1.jpg')}
              onClick={() => handleButtonClick('drought')}
              onMouseOver={e => {
                e.currentTarget.style.background = disasterButtonHoverStyle('/images/dt1.jpg').background;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = disasterButtonStyle('/images/dt1.jpg').background;
              }}
            >
              Drought
              <ChevronRightIcon style={arrowStyle} />
            </button>
            <button
              style={disasterButtonStyle('/images/ld1.jpg')}
              onClick={() => handleButtonClick('landslide')}
              onMouseOver={e => {
                e.currentTarget.style.background = disasterButtonHoverStyle('/images/ld1.jpg').background;
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = disasterButtonStyle('/images/ld1.jpg').background;
              }}
            >
              Landslide
              <ChevronRightIcon style={arrowStyle} />
            </button>
            <button
              style={volunteerButtonStyle}
              onClick={() => handleButtonClick('volunteer')}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = volunteerButtonHoverStyle.backgroundColor;
                e.currentTarget.style.color = volunteerButtonHoverStyle.color;
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = volunteerButtonStyle.backgroundColor;
                e.currentTarget.style.color = volunteerButtonStyle.color;
              }}
            >
              Volunteer
              <ChevronRightIcon style={arrowStyle} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
