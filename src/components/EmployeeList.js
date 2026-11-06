import React from 'react';

function EmployeeList({ employees }) {
  return (
    <ul>
      {employees.length > 0 ? (
        employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))
      ) : (
        <p>No employees found</p>
      )}
    </ul>
  );
}

export default EmployeeList;