// EmployeeForm.js

import React, { useState } from 'react';
import './employeeForm.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';


const EmployeeForm = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        // Store employee data in JSON format
    const employeeData = JSON.stringify(employee);
    
        // Save data to local storage (or send to a server)
    localStorage.setItem('employeeData', employeeData);
    
        // Redirect to the next page
    navigate('/employeeList');
    
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <button className="menu-button">Menu</button>
        </div>
        
        <div className="navbar-right">
          <span className="navbar-link">About</span>
          <span className="navbar-link">Blog</span>
          <img
            src="path-to-your-profile-pic.jpg"
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>

      {/* Employee Form */}
      <div className="employee-form">
        <h2>Employee Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Position:
            <input
              type="text"
              name="position"
              value={employee.position}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
