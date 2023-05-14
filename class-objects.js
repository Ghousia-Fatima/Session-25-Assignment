import { Employee } from './library.js';

// Function to handle the button click event
function addEmployee() {
  // Get input field values
  const name = document.getElementById('nameInput').value;
  const age = parseInt(document.getElementById('ageInput').value);
  const salary = parseInt(document.getElementById('salaryInput').value);
  const department = document.getElementById('departmentInput').value;
  
  // Create new employee object
  const employee = new Employee(name, age, salary, department);
  
  // Display employee details
  const employeeList = document.getElementById('employeeList');
  const employeeDetails = document.createElement('div');
  employeeDetails.innerHTML = `<p>Name: ${employee.name}</p>
                               <p>Age: ${employee.age}</p>
                               <p>Salary: ${employee.salary}</p>
                               <p>Department: ${employee.department}</p>`;
  employeeList.appendChild(employeeDetails);
  
  // Clear input fields
  document.getElementById('nameInput').value = '';
  document.getElementById('ageInput').value = '';
  document.getElementById('salaryInput').value = '';
  document.getElementById('departmentInput').value = '';
}

// Attach event listener to the button
const addButton = document.getElementById('addEmployeeButton');
addButton.addEventListener('click', addEmployee);

