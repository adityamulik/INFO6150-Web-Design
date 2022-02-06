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


// Function to get selected row and neighbouring elements

const checkBoxes = table.getElementsByTagName("input");

function selectRow() {
  for (let i=0; i<checkBoxes.length; i++) {
      const row = checkBoxes[i].parentNode.parentNode;
      checkBoxes[i].addEventListener("click", () => {
        if (checkBoxes[i].checked) {
          console.log("Checked");
          row.style.backgroundColor = "orange";
        } else {
          console.log("Not Checked");
          row.style.backgroundColor = "white";
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
          console.log("Checked");
        } else {          
          descRow.style.display = "none";
          console.log("UnChecked");
          boolean = true;
        }
        
      })
  }
}

selectDropDownImage();

// Add new student to the table

const addNewStudent = document.getElementById("add");

addNewStudent.addEventListener("click", () => {

  const rows = table.getElementsByTagName("tr");

  const rowCount = Math.floor(rows.length / 2);

  let newRow = table.insertRow(rowCount + 1);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(0);
  const cell3 = newRow.insertCell(0);

  cell1.innerHTML = "Test";
  cell2.innerHTML = "Test";
  cell3.innerHTML = "Test";
});