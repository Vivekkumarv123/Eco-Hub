import React, { useState } from 'react';
import './CarbonFootprintCalculator.css';

const CarbonFootprintCalculator = () => {
  const [transportMiles, setTransportMiles] = useState(0);
  const [electricityUsage, setElectricityUsage] = useState(0);
  const [dietType, setDietType] = useState('omnivore');
  const [footprint, setFootprint] = useState(null);
  const [message, setMessage] = useState('');

  const emissionFactors = {
    car: 8.89, // kg CO2e per gallon of gasoline
    electricity: 0.453, // kg CO2e per kWh
    diet: {
      omnivore: 3, // kg CO2e per day
      vegetarian: 1.5,
      vegan: 1,
    },
  };

  const calculateFootprint = () => {
    // Transport emissions
    const carEmissions = (transportMiles / 25) * emissionFactors.car * 52;

    // Electricity emissions
    const electricityEmissions = electricityUsage * 12 * emissionFactors.electricity;

    // Diet emissions
    const dietEmissions = emissionFactors.diet[dietType] * 365;

    // Check if all emissions are zero
    if (carEmissions + electricityEmissions  === 0) {
      setFootprint(null);
      setMessage('Please enter valid inputs for calculating your carbon footprint.');
    } else {
      // Total emissions
      const totalEmissions = carEmissions + electricityEmissions + dietEmissions;
      setFootprint(totalEmissions);
      generateMessage(totalEmissions);
    }
  };

  const generateMessage = (totalEmissions) => {
    const footprintRanges = {
      veryLow: { max: 5000 }, // Assuming 5 tons is very low annually
      low: { max: 15000 }, // Assuming 15 tons is low annually
      moderate: { max: 30000 }, // Assuming 30 tons is moderate annually
      high: { max: Infinity },
    };

    for (const range in footprintRanges) {
      if (totalEmissions <= footprintRanges[range].max) {
        const messageText = {
          veryLow: 'Your carbon footprint is very low! Keep up the excellent work and inspire others to live sustainably!',
          low: 'Your carbon footprint is low. Consider exploring new ways to reduce it further, like using public transport or switching to renewable energy.',
          moderate: 'Your carbon footprint is moderate. You can improve by reducing car usage, increasing energy efficiency at home, and adopting a more plant-based diet.',
          high: 'Your carbon footprint is high. Consider making significant changes like reducing car usage, switching to renewable energy, and adopting a plant-based diet.',
        };
        setMessage(messageText[range]);
        return;
      }
    }
  };

  return (
    <div className="calculator-container">
      <h2>Carbon Footprint Calculator</h2>
      <div>
        <label htmlFor="miles">Weekly miles driven: </label>
        <input type="number" id="miles" value={transportMiles} onChange={(e) => setTransportMiles(e.target.value)} />
      </div>
      <div>
        <label htmlFor="electricity">Monthly electricity usage (kWh): </label>
        <input type="number" id="electricity" value={electricityUsage} onChange={(e) => setElectricityUsage(e.target.value)} />
      </div>
      <div>
        <label htmlFor="Diet">Diet type: </label>
        <select id="Diet" value={dietType} onChange={(e) => setDietType(e.target.value)}>
          <option value="omnivore">Omnivore</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>
      <div>
        <button onClick={calculateFootprint}>Calculate</button>
      </div>
      {message && <p className="error-message">{message}</p>}
      {footprint !== null && (
        <div className="result">
          <h3>Your annual carbon footprint is {footprint.toFixed(2)} kg CO2e</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default CarbonFootprintCalculator;
