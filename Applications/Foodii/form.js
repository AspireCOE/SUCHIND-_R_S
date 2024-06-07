function submitSignUpForm(){
    alert("SignUp Successfully");
}

function submitLoginForm(){
    alert("Login Successfully");
}

function isNumber(value){
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function validateLoginForm() {
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
  
    // Check for empty fields
    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
      alert('Please fill in all fields.');
      return false;
    }
  
    // Validate email format (basic check)
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Password length check (example: minimum 8 characters)
    if (passwordInput.value.length < 8) {
      alert('Password must be at least 8 characters long.');
      return false;
    }
  
    // Additional validation (optional):
    // - Check for strong passwords (uppercase, lowercase, numbers, symbols)
    // - Server-side validation (for security)
  
    // Form submission can proceed if all validations pass
    submitLoginForm();
    return true;
  }
  
  function validateSignupForm() {
    let fullNameInput = document.getElementById('signupName');
    let  phoneNumberInput = document.getElementById('signupPhone');
    let emailInput = document.getElementById('signupEmail');
    let passwordInput = document.getElementById('signupPassword');
  
    // Check for empty fields
    if (fullNameInput.value.trim() === '' || phoneNumberInput.value.trim() === '' ||
        emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
      alert('Please fill in all fields.');
      return false;
    }
    
    // if(fullNameInput.value.trim() !=== )
    // Validate email format (basic check)
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if(!isNumber(phoneNumberInput.value)){
        alert('Enter Valid Mobile Number');
        return false;
    }
  
    // Phone number validation (example: basic format check)
    const phoneRegex = /^\d{3}\d{3}\d{4}$/; // Adjust pattern as needed
    if (!phoneRegex.test(phoneNumberInput.value)) {
      alert('Please enter a valid phone number (e.g., XXX-XXX-XXXX).');
      return false;
    }
  
    // Password length check (example: minimum 8 characters)
    if (passwordInput.value.length < 8) {
      alert('Password must be at least 8 characters long.');
      return false;
    }
  
    // Additional validation (optional):
    // - Check for strong passwords (uppercase, lowercase, numbers, symbols)
    // - Server-side validation (for security)
  
    // Form submission can proceed if all validations pass
    submitSignUpForm();
    return true;
  }
  
  const loginForm = document.getElementById('loginBtn');
  const signupForm = document.getElementById('registerBtn');
  
  loginForm.addEventListener('click', (event) => {
    if (!validateLoginForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
  
  signupForm.addEventListener('click', (event) => {
    if (!validateSignupForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
  
//   loginForm.onclick=function()
//   {
//     validateLoginForm();
//   }

//   signupForm.onclick=function(){
//     validateSignupForm();
//   }
// fullName.textContent="";
//     phoneNumber.textContent="";
//     email.textContent="";
//     password.textContent="";