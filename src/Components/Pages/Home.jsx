import React, { useEffect } from 'react';
import './Home.css';
import Navbar from './Navbar';
import CarbonFootprintCalculator from './CarbonFootprintCalculator';

function Home() {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "7b7510f8-1376-412d-aff2-e5362c8a4677", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "2eb792b0-5869-4661-b0e9-b81e9ad59ca5", // The ID of your service instance.
      onLoad: async (instance) => { await instance.render(); }
    };

    setTimeout(function(){
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  }, []);

  return (
    <div className='home-container'>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='image-container'>
        <div className='carbon-container'>
        <CarbonFootprintCalculator />
        </div>
        <div className='quote-container'>
          <h1>Planning to travel?</h1>
          <h1>Do it sustainably</h1>
          <p>Start by offsetting your travel carbon footprint with the most accurate carbon footprint calculator available online.</p>
          <p>See how your contribution can help reduce greenhouse gases.</p>
          
          <button className='projects'>Explore Projects</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
