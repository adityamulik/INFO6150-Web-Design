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


// Function to get selected row and get checkbox

const checkBoxes = table.getElementsByTagName("input");

function selectRow() {
  for (let i=0; i<checkBoxes.length; i++) {
      const row = checkBoxes[i].parentNode.parentNode;
      checkBoxes[i].addEventListener("click", () => {
        if (checkBoxes[i].checked) {
          // console.log("Checked");
          row.style.backgroundColor = "yellow";
          // console.log(row.lastElementChild);
          // console.log(row);
          row.lastElementChild.innerHTML = "<td><button>Edit</button></td>";
          row.lastElementChild.previousElementSibling.innerHTML = "<td><button>Delete</button></td>";
        } else {
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

function selectDropDownImage() {  
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
}

selectDropDownImage();


// Function to get selected row and get delete button

const btnDelete = table.getElementsByTagName("button");
console.log(btnDelete);

// Add new student to the table

const addNewStudent = document.getElementById("add");

addNewStudent.addEventListener("click", () => {

  const rows = table.getElementsByTagName("tr");

  const rowCount = rows.length;

  let newRow = table.insertRow(rowCount);

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

  // rows.nextSibling.innerHTML += 
  //     '<tr class="dropDownTextArea"><td colspan="8"> \
  //       Advisor:<br /><br /> \
  //       Award Details<br /> \
  //       Summer 1-2014(TA)<br /> \
  //       Budget Number: <br /> \
  //       Tuition Number: <br /> \
  //       Comments:<br /><br /><br /> \
  //       Award Status:<br /><br /><br /> \
  //     </td></tr>';

  selectRow();

});