// src/components/PlacementAssistance.js
import React from 'react';
import './index.css';

const PlacementAssistance = () => {
  return (
    <div className="container pa-section" style={{ backgroundColor: '#ffefef', padding: '50px 0'}}>
      <h2 style={{textAlign:'center'}}>100% Placement Assistance</h2>
      <div style={{ padding: '20px' }}>
        <h3 className='pa-heading'>Heading 1</h3>
        <p className='pa-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h3 className='pa-heading'>Heading 2</h3>
        <p className='pa-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h3 className='pa-heading'>Heading 3</h3>
        <p className='pa-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}

export default PlacementAssistance;
