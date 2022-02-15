
// Variable declarations

const form = document.querySelector("form");

const titles = document.querySelector('input[name="title"]');
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailId = document.getElementById("emailId");
const phoneNumber = document.getElementById("phoneNumber");
const streetAddress1 = document.getElementById("streetAddress1");
const streetAddress2 = document.getElementById("streetAddress2");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipcode = document.getElementById("zipcode");
const comments = document.getElementById("comments");
const ratingSelect = document.getElementById("rating");
const dynamicCheckbox = document.getElementById("dynamicCheckbox");
const textReason = document.getElementById("textReason");
const ratingComment = document.getElementById("ratingComment");

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

let table = document.getElementById("tableData");

let validatationBool = false;
let validationErrors = {};

// End Block

// Form Submission Block

form.addEventListener("submit", e => {
  e.preventDefault();

  if (
    // Validate Rating selected
    firstName.value != "" &&
    lastName.value != "" &&
    ratingSelect.value != "select"
  ) {
    tableData.innerHTML += `
      <tr>
        <td>Mr. ${firstName.value} ${lastName.value}</td>
        <td>${emailId.value}</td>
        <td>${phoneNumber.value}</td>
        <td>${streetAddress1.value}</td>
        <td>${streetAddress2.value}</td>
        <td>${city.value}</td>
        <td>${state.value}</td>
        <td>${zipcode.value}</td>
        <td>${comments.value}</td>
        <td>${ratingSelect.value}</td>
        <td>${ratingComment.value}</td>
      </tr>
    `;

    alert("Details have been uploaded to the table!");
    form.reset();
  } else {
    alert("Please enter details correctly!");
  }
})

// End Block

// Form Reset Block



// End Block

// Validation Block 

// Regex Validations
phoneNumber.addEventListener("keyup", () => {
  console.log(phoneNumber.value);
  if(validatePhoneNo(phoneNumber.value)) {
    phoneNumber.style.color = "green";
  } else {
    phoneNumber.style.color = "red";
  };
})

zipcode.addEventListener("keyup", () => {
  if(validateZipCode(zipcode.value)) {
    zipcode.style.color = "green";
  } else {
    zipcode.style.color = "red";
  };
})

emailId.addEventListener("keyup", () => {

  const domain = "northeastern.edu";

  if(validateEmail(emailId.value) && emailId.value.indexOf(domain) != -1) {
    emailId.style.color = "green";
  } else if (emailId.value.indexOf(domain) === -1) {
    emailId.style.color = "red";
  };
})

// Helper function to validate Phone No.
const validatePhoneNo = no => {
    const validateMobileRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (no.match(validateMobileRegex)) {
      return true;
    } else {
      return false;
    }
}

const validateZipCode = zipcode => {
  const validateZip = /^\d{5}(-\d{4})?$/;

  if (zipcode.match(validateZip)) {
    return true;
  } else {
    return false;
  }
}

const validateEmail = email => {
  const validateEmailId = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(validateEmailId)) {
    return true;
  } else {
    return false;
  }
}

// Full Form Validations



// End Block

// Dynamic Select Block Selection 

ratingSelect.onchange = (e) => {
  
  if (e.target.value == "5") {

    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>Thanks for the 5 rating, what did you like the most?</p>
      <input id="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");
    

    messageCheckbox1.addEventListener("click", () => {
    
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox2.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox3.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else if (e.target.value == "4") {
    
    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>Thanks for the 4 rating, please share more details to make the product more viable!</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");
    

    messageCheckbox1.addEventListener("click", () => {
    
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox2.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox3.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else if (e.target.value == "3") {
    
    dynamicCheckbox.style.display = "block";

    dynamicCheckbox.innerHTML = `
      <p>Thanks for the 3 rating, what did you like or dislike the most?</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");
    

    messageCheckbox1.addEventListener("click", () => {
    
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox2.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox3.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else if (e.target.value == "2") {
    
    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>Please provide us more feedback to serve you better!</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");
    

    messageCheckbox1.addEventListener("click", () => {
    
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox2.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox3.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else if (e.target.value == "1") {
    
    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>We're sorry about it, what went wrong?</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");
    

    messageCheckbox1.addEventListener("click", () => {
    
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox2.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox3.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else {
    dynamicCheckbox.style.display = "none";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = "";
  }

}

// End Block
