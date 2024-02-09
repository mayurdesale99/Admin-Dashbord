import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css'; 

import App from './App';
import Request from './Components/Request';
import Housekeeper from './Components/Housekeeper';
import Student from './Components/Student';
import Feedback from './Components/Feedback';
import Complaints from './Components/Complaints';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';

// Sidebar component
const Sidebar = () => {
  return (
    <div className="sidebar">
  
      <div className="navbar">
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Request">Request</Link> 
        <Link to="/Housekeeper">Housekeeper</Link> 
        <Link to="/Student">Student</Link> 
        <Link to="/Feedback">Feedback</Link> 
        <Link to="/Complaints">Complaints</Link> 
        <Link to="/Logout">Logout</Link>
      </div>
      <hr />
    </div>
  );
};

const routing = (
  <Router>
    <div className="wrapper">
      <header className="header">
        <h1>Admin Dashboard Housekeeping Management System</h1>
      </header>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/Housekeeper" element={<Housekeeper />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Complaints" element={<Complaints />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>,
  document.getElementById('root')
);
