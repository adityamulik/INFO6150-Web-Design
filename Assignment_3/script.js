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
          row.lastElementChild.innerHTML = "<td><button>Edit</button></td>";
          row.lastElementChild.previousElementSibling.innerHTML = "<td><button onClick='deleteRow(this);'>Delete</button></td>";
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
const dropDownImg = table.getElementsByTagName("img");

for (let i=0; i<dropDownImg.length; i++) {      
    const row = dropDownImg[i].parentNode.parentNode;
    const descRow = row.nextSibling.nextSibling;
    let boolean = true; 
    dropDownImg[i].addEventListener("click", () => {
      // console.log("Clicked");
      // console.log(descRow);        

      if (boolean) {
        descRow.style.display = "block";
        boolean = false;
        // console.log("Checked");
      } else {          
        descRow.style.display = "none";
        // console.log("UnChecked");
        boolean = true;
      }
      
    })
}

// Function to get selected row and get delete button

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);

  selectRow();
}


// Function to get selected row and get edit button

// Add new student to the table

const addNewStudent = document.getElementById("add");

addNewStudent.addEventListener("click", () => {

  const rows = table.getElementsByTagName("tr");

  const rowCount = rows.length;

  let newRow = table.insertRow(rowCount);
  let newRowDesc = table.insertRow(rowCount + 1);

  const checkboxNew = newRow.insertCell(0);
  const student = newRow.insertCell(1);
  const advisor = newRow.insertCell(2);
  const awardStatus = newRow.insertCell(3);
  const semester = newRow.insertCell(4);
  const type = newRow.insertCell(5);
  const budget = newRow.insertCell(6);
  const percentage = newRow.insertCell(7);
  const deleteBtn = newRow.insertCell(8);
  const editBtn = newRow.insertCell(9);


  checkboxNew.innerHTML = `<td><input type="checkbox" /><br /><br /><img src="down.png" width="25px" /></td>`;

  student.innerHTML = `Student ${Math.floor(rowCount / 2) + 1}`;
  advisor.innerHTML = `Teacher ${Math.floor(rowCount / 2) + 1}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = "TA";
  budget.innerHTML = Math.ceil(Math.random() * 100000);
  percentage.innerHTML = "100%";


  // Add new row to display the details of the row.

  newRowDesc.classList.add("dropDownTextArea")
  
  newRowDesc.innerHTML = 
      '<td colspan="8"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';

  selectRow();

  setTimeout(() => {alert(`Student ${Math.floor(rowCount / 2) + 1} added successfully!`)}, 100)  
});

// Get active on click events of window model

window.addEventListener("click", () => {

  let submitBtn = document.getElementById("button");

  if (checkboxCount > 0) {    
    submitBtn.style.backgroundColor = "orange";
    submitBtn.style.border = "2px solid orange";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.border = "";
    submitBtn.disabled = true;
  }
})