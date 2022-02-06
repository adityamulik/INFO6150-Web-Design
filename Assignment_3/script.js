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

// Get Reference Checkboxes in table

const checkBoxes = table.getElementsByTagName("input");

// Loop over checkBoxes

for (let i=0; i<checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {

    }
}

// Function to get selected row

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

// window.addEventListener("click", () => {
//   console.log("Clicked");
// })
