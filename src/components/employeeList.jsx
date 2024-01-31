// EmployeeList.js

import React, { useEffect, useState } from 'react';

const EmployeeList = () => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    // Retrieve employee data from local storage
    const storedEmployeeData = localStorage.getItem('employeeData');
    setEmployeeData(JSON.parse(storedEmployeeData));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      {employeeData ? (
        <div>
          <p>First Name: {employeeData.firstName}</p>
          <p>Last Name: {employeeData.lastName}</p>
          <p>Email: {employeeData.email}</p>
          <p>Position: {employeeData.position}</p>
        </div>
      ) : (
        <p>No employee data found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
