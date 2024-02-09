
import React, { useState } from 'react';
import './Student.css';

function Student() {
  // State to hold the list of students and their respective room numbers
  const [students, setStudents] = useState([
    { name: 'John Doe', roomNumber: '101' },
    { name: 'Jane Smith', roomNumber: '102' },
    { name: 'David Johnson', roomNumber: '103' },
    // Add more students as needed
  ]);

  return (
    <div className="Student">

      <div className="student-list">
        <h2>Student List</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <span className="student-name">{student.name}</span>
              <span className="room-number">Room: {student.roomNumber}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Student;
