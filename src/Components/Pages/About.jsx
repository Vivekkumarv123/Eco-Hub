import React from 'react';
import './Signup.css'; 
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='image-container'>
        <div className='quoter-container'>
          <h1>Welcome to Eco-Assistant</h1>
          <h1>Your Guide to Sustainable Living</h1>
          <p>Eco-Assistant is dedicated to helping you live a more eco-friendly lifestyle. Whether you're planning to travel, making everyday choices, or looking to offset your carbon footprint, we've got you covered.</p>
          <p>Explore our tools and resources to understand how your actions impact the environment and learn how you can make a positive change.</p>
          <button className='projects'>Explore Projects</button>
        </div>
      </div>
    </div>
  );
};

export default About;
