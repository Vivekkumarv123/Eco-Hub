import React from 'react';
import './Signup.css'; 
import Navbar from './Navbar';

const Signup = () => {


  return (
    <div>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='image-container'>
        <div className='quoter-container'>
          <h1>Planning to travel?</h1>
          <h1>Do it sustainably</h1>
          <p>Start by offsetting your travel carbon footprint with the most accurate carbon footprint calculator available online.</p>
          <p>See how your contribution can help reduce greenhouse gases.</p>
          <button className='projects'>Explore Projects</button>
        </div>
        
      </div>
    </div>
  );
};

export default Signup;
