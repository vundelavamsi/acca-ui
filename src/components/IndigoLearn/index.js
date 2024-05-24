// src/components/IndigoLearn.js
import React from 'react';
import './index.css';

const IndigoLearn = () => {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '50px', margin: '50px 0' }}>
      <div className="row">
        <div className="col-md-6" style={{ textAlign: 'left' }}>
          <h2>Kick off your ACCA Prep Jounrey with IndigoLearn</h2>
          <p>Sign-inn and get instant access to our FREE Courses</p>
          <button className="btn btn-danger">Button</button>
        </div>
        <div className="col-md-6">
          <form>
            <h2 style={{ textAlign: 'center' }}>Form Heading</h2>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Input 1" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Input 2" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Input 3" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Input 4" />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IndigoLearn;
