
import React, { useState } from 'react';
import './Complaints.css';

const Complaints = () => {
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted complaint:', complaint);
   
    setComplaint('');
  };

  return (
    <div className="complaints-form-container">
      <h2>Complaint Box</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your complaint here..."
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Complaints;
