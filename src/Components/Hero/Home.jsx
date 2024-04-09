import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const countries = [
  { name: 'USA', states: ['California', 'New York', 'Texas'] },
  { name: 'Canada', states: ['Ontario', 'Quebec', 'British Columbia'] },
  { name: 'UK', states: ['England', 'Scotland', 'Wales'] },
  { name: 'Australia', states: ['New South Wales', 'Queensland', 'Victoria'] },
  { name: 'Germany', states: ['Berlin', 'Bavaria', 'Baden-Württemberg'] },
  { name: 'France', states: ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes'] },
  { name: 'Japan', states: ['Tokyo', 'Osaka', 'Kyoto'] },
  { name: 'India', states: ['Maharashtra', 'Uttar Pradesh', 'Karnataka'] },
  { name: 'Brazil', states: ['São Paulo', 'Rio de Janeiro', 'Minas Gerais'] },
  { name: 'South Africa', states: ['Gauteng', 'Western Cape', 'KwaZulu-Natal'] }
];


const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState(''); // Reset selected state when country changes
  };

  return (
    <div className="contaner w-full bg-slate-500 h-screen flex flex-col items-center mt-4 pt-20">
      <select
        className="p-2 border border-gray-300 rounded-md"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>{country.name}</option>
        ))}
      </select>

      {selectedCountry && (
        <select
          className="mt-3 p-2 border border-gray-300 rounded-md"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select State</option>
          {countries.find(country => country.name === selectedCountry)?.states.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>
      )}

      {selectedState && (
        <Link to="/about" > <button
         className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md">
          Get Services
          </button>
        </Link>
      )}
    </div>
  );
};

export default Home;
