// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let tab = document.getElementById('employees')
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let reccount = 0;

const $ = (id) => document.getElementById(id)

function setempCount()
{
    if (reccount == 0)
        $('empCount').value = "";
    else
        $('empCount').value = "(" + reccount + ")";
}

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    id = $('id').value;
    fullname = $('name').value;
    extension = $('extension').value;
    email = $('email').value;
    dept = $('department').value;
   
    // HELPER FUNCTION TO RETURN DOM ELEMENT


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = tab.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    c1.innerHTML = id;
    c2.innerHTML = fullname;
    c3.innerHTML = extension;
    c4.innerHTML = email;
    c5.innerHTML = dept;

    // CREATE THE DELETE BUTTON
    let delButton = document.createElement("button");
    delButton.className = 'btn btn-danger btn-sm float-end delete';
    let txtDelete = document.createTextNode('X');
    delButton.appendChild(txtDelete);
    let c6 = row.insertCell(5);

    delButton.addEventListener("click", function() 
    { tab.deleteRow(row.rowIndex); reccount -= 1; setempCount();});
    c6.appendChild(delButton);
    // RESET THE FORM
    $('id').value = '';
    $('name').value = '';
    $('extension').value = '';
    $('email').value = '';
    //let deptelement = document.getElementById("department");
    $('department').value = "Administrative";
    // SET FOCUS BACK TO THE ID TEXT BOX
    let tbox = document.getElementById("id");
    tbox.focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    reccount += 1;
    setempCount();
})

// DELETE EMPLOYEE