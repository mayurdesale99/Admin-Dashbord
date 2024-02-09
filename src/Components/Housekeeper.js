import React, { useState } from 'react';
import './Housekeeper.css';

function Housekeeper() {

  const [Housekeeper] = useState([
    { name: 'Alice', work: 'Cleaning floors' },
    { name: 'Bob', work: 'Making beds' },
    { name: 'Charlie', work: 'Bathroom cleaning' },
   
  ]);

  return (
    <div className="Housekeeper">
      <h1>Housekeeper Management System</h1>
      <div className="Housekeeper-list">
        <h2>Housekeeper List</h2>
        <ul>
          {Housekeeper.map((Housekeeper, index) => (
            <li key={index}>
              <span className="Housekeeper-name">{Housekeeper.name}</span>
              <span className="work-assignment">Work: {Housekeeper.work}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Housekeeper;
