// src/components/WhatWillYouLearn.js
import React from 'react';

const WhatWillYouLearn = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="section-heading text-center">What will you learn in ACCA?</h1>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="card">
            <div className="card-header text-center" style={{ backgroundColor: '#007bff', color: '#fff' }}>
              <h3>Card 1</h3>
            </div>
            <div className="card-body" style={{ backgroundColor: '#e7f0ff' }}>
              <ul>
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3</li>
                <li>Topic 4</li>
              </ul>
            </div>
            <div className="card-footer text-center" style={{ backgroundColor: '#007bff', color: '#fff' }}>
              <h3>Footer</h3>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="card">
            <div className="card-header text-center" style={{ backgroundColor: '#007bff', color: '#fff' }}>
              <h3>Card 2</h3>
            </div>
            <div className="card-body" style={{ backgroundColor: '#e7f0ff' }}>
              <ul>
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3</li>
                <li>Topic 4</li>
              </ul>
            </div>
            <div className="card-footer text-center" style={{ backgroundColor: '#007bff', color: '#fff' }}>
              <h3>Footer</h3>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="card">
            <div className="card-header text-center" style={{ backgroundColor: '#007bff', color: '#fff' }}>
              <h3>Card 3</h3>
            </div>
            <div className="card-body" style={{ backgroundColor: '#e7f0ff' }}>
              <ul>
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3</li>
                <li>Topic 4</li>
              </ul>
            </div>
            <div className="card-footer text-center" style={{ backgroundColor: '#007bff', color: '#fff' }}>
              <h3>Footer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWillYouLearn;
