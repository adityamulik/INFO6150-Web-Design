
// Variable declarations

const form = document.querySelector("form");

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

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

// End Block

// Form Submission Block

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log(validatePhoneNo(phoneNumber.value));
  alert("Details have been uploaded to the table!")
})

// End Block

// Validation Block 

phoneNumber.addEventListener("keyup", () => {
  console.log(validatePhoneNo(phoneNumber.value));
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

// End Block