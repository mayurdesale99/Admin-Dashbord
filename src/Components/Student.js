import React from 'react';
import "./Student.css";

const Student = ( {}) => {
    const data = [
        {
          reqid: 1, date:'2024-02-09',timings:  '10:00 AM',reqs: 'Cleaning', hid: 'HK123', status: 'Active',
        },
        {
            reqid: 2, date:'2024-02-09',timings:  '10:00 AM',reqs: 'Cleaning', hid: 'HK123', status: 'Pending',
          },
          {
            reqid: 3, date:'2024-02-09',timings:  '10:00 AM',reqs: 'Cleaning', hid: 'HK123', status: 'Active',
          },
          {
            reqid: 4, date:'2024-02-09',timings:  '10:00 AM',reqs: 'Cleaning', hid: 'HK123', status: 'Pending',
          },
          {
            reqid: 5, date:'2024-02-09',timings:  '10:00 AM',reqs: 'Cleaning', hid: 'HK123', status: 'Active',
          },
        
      ];

  return (
   <div className='container'>
    <div className= "inner-container" >
        <h3>status of studentslist</h3>
    <table  border={1}>
      <thead>
        <tr>
          <th>Request ID</th>
          <th>Date</th> 
          <th>Timings</th>
          <th>Requirements</th>
          <th>Housekeeper ID</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.reqid}</td>
            <td>{row.date}</td>
            <td>{row.timings}</td>
            <td>{row.reqs}</td>
            <td>{row.hid}</td>
            <td>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
    
  );
};

export default Student;