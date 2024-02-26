import React from 'react';
import data from './components/DataComponent';
import './App.css'
function App() {
  return (
    <div>
      {/* Functional component receiving data as props */}
      <DisplayData data={data} />
    </div>
  );
}

// Functional component to display data
function DisplayData({ data }) {
  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <img src={item.img} alt={`Image ${item.id}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
