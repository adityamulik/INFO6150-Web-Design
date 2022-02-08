//Title constructor function that creates a Title object
function Title(t1) 
{ 
  this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
  return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

// Get table
const table = document.getElementById("myTable");

// checkbox count
let checkboxCount = 0;

// Function to get selected row and get checkbox
const checkBoxes = table.getElementsByTagName("input");

function selectRow() {
  for (let i=0; i<checkBoxes.length; i++) {
      const row = checkBoxes[i].parentNode.parentNode;
      checkBoxes[i].addEventListener("click", () => {
        if (checkBoxes[i].checked) {
          checkboxCount++;
          // console.log("Checked");
          row.style.backgroundColor = "yellow";
          // console.log(row.lastElementChild);
          // console.log(row);
          row.lastElementChild.innerHTML = "<td><button onClick='editRow(this)'>Edit</button></td>";
          row.lastElementChild.previousElementSibling.innerHTML = "<td><button onClick='deleteRow(this)'>Delete</button></td>";
        } else {
          checkboxCount--;
          // console.log("Not Checked");
          row.style.backgroundColor = "white";
          row.lastElementChild.innerHTML = "";
          row.lastElementChild.previousElementSibling.innerHTML = "";
        }
      })
  }
}

selectRow();


// Function to get selected row and img click

let booleanMain = true; 

function toggleImg1(r) {
    const i = r.parentNode.parentNode.rowIndex;
    const row = r.parentNode.parentNode;
    // console.log(row);
    const descRow = row.nextSibling; 
    // console.log(descRow);
    // console.log(row); 
    if (booleanMain) {
      descRow.style.display = "table-row";
      booleanMain = false;
      // console.log("Checked");
    } else {          
      descRow.style.display = "none";
      // console.log("UnChecked");
      booleanMain = true;
    }
}

// toggleImg();

let boolean = true; 

function toggleImg2(r) {  
  const row = r.parentNode.parentNode;
  // console.log(row);
  const descRow = row.nextSibling.nextSibling; 
  // console.log(descRow);
  // console.log(row); 
  if (boolean) {
    descRow.style.display = "table-row";
    boolean = false;
    // console.log("Checked");
  } else {          
    descRow.style.display = "none";
    // console.log("UnChecked");
    boolean = true;
  }
}

// Function to get selected row and get delete button

function deleteRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  document.getElementById("myTable").deleteRow(i);
  alert(`Student deleted successfully!`);
  selectRow();
}


// Function to get selected row and get edit button

function editRow(r) {
  alert("Edit the details!");
  selectRow();
}

// Add new student to the table

function addNewRow() {
  const row = table.insertRow(table.rows.length);

  const rowCount = table.rows.length;

  // console.log(rowCount);

  const checkboxNew = row.insertCell(0);
  const student = row.insertCell(1);
  const advisor = row.insertCell(2);
  const awardStatus = row.insertCell(3);
  const semester = row.insertCell(4);
  const type = row.insertCell(5);
  const budget = row.insertCell(6);
  const percentage = row.insertCell(7);
  const deleteBtn = row.insertCell(8);
  const editBtn = row.insertCell(9);

  checkboxNew.innerHTML = `<td><input type="checkbox" /><br /><br /><img onClick="toggleImg1(this)" src="down.png" width="25px" /></td>`;

  student.innerHTML = `Student ${Math.ceil(rowCount/ 2)}`;
  advisor.innerHTML = `Teacher ${Math.ceil(rowCount/ 2)}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = "TA";
  budget.innerHTML = Math.ceil(Math.random() * 100000);
  percentage.innerHTML = "100%";

  try {
    setTimeout(() => {alert(`Record Added Successfully - Student ${Math.ceil(rowCount/ 2)}`)}, 100);
  } catch (error) {
    alert("Something went wrong!");
  }
  
  selectRow();

  addSubsequentRow();
}

function addSubsequentRow() {
  const row = table.insertRow(table.rows.length);

  row.classList.add("dropDownTextArea")
  
  row.innerHTML = 
      '<td colspan="10"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';

  selectRow();
}


// Get active on click events of window model

window.addEventListener("click", () => {

  let submitBtn = document.getElementById("button");

  if (checkboxCount > 0) {    
    submitBtn.style.backgroundColor = "orange";
    submitBtn.style.border = "2px solid orange";
    submitBtn.style.cursor = "pointer";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.border = "";
    submitBtn.style.cursor = "initial";
    submitBtn.disabled = true;
  }
})