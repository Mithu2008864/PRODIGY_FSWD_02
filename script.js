let employees = [];

// ADD Employee
function addEmployee() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;

    if (name === "" || email === "" || department === "" || salary === "") {
        alert("Please fill all fields");
        return;
    }

    let employee = {
        id: Date.now(),
        name,
        email,
        department,
        salary
    };

    employees.push(employee);
    displayEmployees();
    clearInputs();
}

// DISPLAY Employees
function displayEmployees() {
    let table = document.getElementById("employeeTable");
    table.innerHTML = "";

    employees.forEach(emp => {
        table.innerHTML += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.email}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td>
                    <button onclick="editEmployee(${emp.id})">Edit</button>
                    <button onclick="deleteEmployee(${emp.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// DELETE Employee
function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    displayEmployees();
}

// EDIT Employee
function editEmployee(id) {
    let emp = employees.find(e => e.id === id);

    document.getElementById("name").value = emp.name;
    document.getElementById("email").value = emp.email;
    document.getElementById("department").value = emp.department;
    document.getElementById("salary").value = emp.salary;

    deleteEmployee(id);
}

// CLEAR INPUTS
function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";
}