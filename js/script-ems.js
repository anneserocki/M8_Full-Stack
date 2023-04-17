// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    {
        id: 1,
        name: "Anne C.",
        extension: 1234,
        email: "anne.c@company.com",
        department: "HR"
    },
    {
        id: 2,
        name: "Tom Hank",
        extension: 5678,
        email: "tom.hank@company.com",
        department: "Marketing"
    },
    {
        id: 3,
        name: "Jerry Smith",
        extension: 9101,
        email: "jerry.smith@company.com",
        department: "IT"
    },
    {
        id: 4,
        name: "Sarah Wei",
        extension: 1213,
        email: "sarah.wei@company.com",
        department: "Finance"
    },
    {
        id: 5,
        name: "Tom Brown",
        extension: 1415,
        email: "tom.brown@company.com",
        department: "Operations"
    }
];

let totalRow = 0

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem("employees")) {
    employees = JSON.parse(localStorage.getItem("employees"));
};

// GET DOM ELEMENTS
const $ = (id) => document.getElementById(id);
form        = $("addForm")
empTable    = $("empTable")    
empCount    = $("empCount")
tbody       = document.getElementsByTagName('tbody')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();  

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    employeeID   = document.getElementById("id").value;
    employeeName = document.getElementById("name").value;
    extension    = document.getElementById("extension").value;
    email        = document.getElementById("email").value;
    department   = document.getElementById("department").value;     
    
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = {
        id:employeeID,
        name: employeeName,
        extension: extension,
        email: email,
        department: department
    };         

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);
    // COUNT RECORDS NUMBER 
    totalRow +=1;
    empCount.innerHTML = `Total: ${totalRow}`; 

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    let boxes = document.getElementsByTagName("input")
    boxes[0].focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (window.confirm("Are you sure you delete this employee?")){
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)        
        const rowIndex = e.target.parentNode.parentNode.rowIndex;
        employees.splice(rowIndex - 1, 1);
        // count
        totalRow -=1;
        empCount.innerHTML = `Total: ${totalRow}`; 
        // BUILD THE GRID
        buildGrid();        
    };
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION           
    // empTable.innerHTML = "";  --This will delete the thead (dangerous!)

    var empTable = document.getElementById("empTable"); // Get the table
    empTable.removeChild(empTable.getElementsByTagName("tbody")[0]); // Remove first instance of body

    // REBUILD THE TBODY FROM SCRATCH
    const tbody = document.createElement('tbody');    

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for(let i = 0; i < employees.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employees[i].id}</td>
            <td>${employees[i].name}</td>
            <td>${employees[i].extension}</td>
            <td>${employees[i].email}</td> 
            <td>${employees[i].department}</td> 
            <td><a href="#" class="delete">X</a></td>`;  

    // BIND THE TBODY TO THE EMPLOYEE TABLE
        tbody.appendChild(row);
    };
    empTable.appendChild(tbody);

    // UPDATE EMPLOYEE COUNT
    let totalRow = employees.length;
    empCount.innerHTML = `Total: ${totalRow}`; 

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem("employees", JSON.stringify(employees)); 
};