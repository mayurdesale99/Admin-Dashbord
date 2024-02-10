import React from 'react';
import "./AdminReq.css";

const AdminReq = ( {}) => {
    const data = [
        {
          reqid: 1,studname:'Mayur' ,dateandtime:'2024-02-09 10:00Am',roomno:  '101',floorno:  '1', reqs: 'Cleaning, Mopping, Dusting.', status: 'completed', allocation: <div> <img src="images/plus.png"  width="20" /> Allocate | <img src="images/tik.png"  width="20" /> Completed </div>,
        },
        {
          reqid: 2,studname:'Maneeesha' ,dateandtime:'2024-02-09 10:00AM',roomno:  '102', floorno:  '1', reqs: 'Cleaning, Mopping, Dusting.', status: 'not completed', allocation: <div> <img src="images/plus.png"  width="20" /> Allocate | <img src="images/tik.png"  width="20" /> Completed </div>,
          },
          {
            reqid: 3,studname:'Ketan' ,dateandtime:'2024-02-09 10:00Am',roomno:  '103', floorno:  '1', reqs: 'Cleaning, Mopping, Dusting.', status: 'completed', allocation:<div> <img src="images/plus.png"  width="20" /> Allocate | <img src="images/tik.png"  width="20" /> Completed </div>,
          },
          {
            reqid: 4,studname:'Dhanush' ,dateandtime:'2024-02-09 10:00AM',roomno:  '104',floorno:  '1', reqs: 'Cleaning, Mopping, Dusting.', status: 'pending', allocation: <div> <img src="images/plus.png"  width="20" /> Allocate | <img src="images/tik.png"  width="20" /> Completed </div>,
          },
          {
            reqid: 5,studname:'Rahul' ,dateandtime:'2024-02-09 10:00Am',roomno:  '105',floorno:  '1', reqs: 'Cleaning, Mopping, Dusting.', status: 'completed', allocation:<div> <img src="images/plus.png"  width="20" /> Allocate | <img src="images/tik.png"  width="20" /> Completed </div>,
          },
        
      ];

  return (
   <div className='container'>
    <div className= "inner-container" >
        <h3>Admin Request</h3>
    <table  border={1}>
      <thead>
        <tr>
          <th>Request ID</th>
          <th>StudName</th> 
          <th>Date&Time</th>
          <th>RoomNo</th>
          <th>FLoorNo</th>
          <th>Type of Reqs</th>
          <th>Status</th>
          <th>Allocation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.reqid}</td>
            <td>{row.studname}</td>
            <td>{row.dateandtime}</td>
            <td>{row.roomno}</td>
            <td>{row.floorno}</td>
            <td>{row.reqs}</td>
            <td>{row.status}</td>
            <td>{row.allocation}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
    
  );
};

export default AdminReq;